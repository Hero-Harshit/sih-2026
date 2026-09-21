from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import os
from pathlib import Path
from dotenv import load_dotenv
from google import genai
from google.genai import types

# Load .env from backend directory explicitly, then cwd fallback
env_path = Path(__file__).resolve().parent.parent / ".env"
load_dotenv(dotenv_path=env_path)
load_dotenv()

router = APIRouter()

client = None

def get_client():
    global client
    if client is None:
        api_key = os.getenv("GEMINI_API_KEY")
        if api_key:
            try:
                client = genai.Client(api_key=api_key)
            except Exception as e:
                print(f"Warning: Initialization error for Gemini client: {e}")
                client = None
    return client

# Pre-initialize if available
get_client()

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

@router.post("/chat")
async def chat_endpoint(req: ChatRequest):
    gemini_client = get_client()
    if not gemini_client:
        raise HTTPException(status_code=500, detail="Gemini client not initialized. Check GEMINI_API_KEY.")
    
    if not req.messages:
        raise HTTPException(status_code=400, detail="Messages list cannot be empty.")
    
    system_instruction = (
        "You are a professional legal assistant for the IP Shakti Sahayak platform. "
        "You provide legal information, regulatory guidance, and help users navigate Indian "
        "intellectual property laws (Patents Act 1970), Biological Diversity Act (2002), and TKDL. "
        "Do not give binding legal advice, but guide users clearly based on general legal knowledge."
    )
    
    # Filter out initial greetings and previous error messages
    filtered_messages = []
    for msg in req.messages:
        txt = msg.content.strip()
        if not txt:
            continue
        if txt.startswith("Hello! I am your AI Legal Assistant") or \
           txt.startswith("Sorry, I encountered an") or \
           txt.startswith("Unable to reach the AI Legal Assistant"):
            continue
        filtered_messages.append(msg)
        
    if not filtered_messages:
        raise HTTPException(status_code=400, detail="No user message provided to generate a response.")

    # Format multi-turn conversation with alternating turns starting with 'user'
    contents = []
    for msg in filtered_messages:
        role = "model" if msg.role == "assistant" else "user"
        if not contents and role != "user":
            continue
        if contents and contents[-1].role == role:
            # Concatenate consecutive messages with same role
            contents[-1].parts[0].text += f"\n\n{msg.content}"
        else:
            contents.append(types.Content(role=role, parts=[types.Part.from_text(text=msg.content)]))
            
    if not contents:
        raise HTTPException(status_code=400, detail="Conversation must contain at least one user query.")

    # Candidate models in order of priority (valid in Google Gemini API)
    models_to_try = ['gemini-3.5-flash-lite', 'gemini-3.6-flash', 'gemini-flash-latest']
    last_error = None

    for model_name in models_to_try:
        try:
            response = gemini_client.models.generate_content(
                model=model_name,
                contents=contents,
                config=types.GenerateContentConfig(
                    system_instruction=system_instruction
                )
            )
            if response and response.text:
                return {"role": "assistant", "content": response.text}
        except Exception as e:
            print(f"Model {model_name} failed: {e}. Trying next fallback...")
            last_error = e

    raise HTTPException(
        status_code=500,
        detail=f"Error generating chat response across all models. Last error: {str(last_error)}"
    )
