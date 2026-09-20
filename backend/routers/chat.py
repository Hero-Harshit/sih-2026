from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()

router = APIRouter()

# Initialize Gemini client
try:
    client = genai.Client(api_key=os.getenv("GEMINI_API_KEY")) if os.getenv("GEMINI_API_KEY") else None
except Exception as e:
    print(f"Warning: Initialization error for Gemini client: {e}")
    client = None

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

@router.post("/chat")
async def chat_endpoint(req: ChatRequest):
    if not client:
        raise HTTPException(status_code=500, detail="Gemini client not initialized. Check API key.")
    
    if not req.messages:
        raise HTTPException(status_code=400, detail="Messages list cannot be empty.")
    
    # Construct history in Gemini's format if needed, but for simplicity we can construct a prompt
    # Since we want context injection to act like a legal assistant, we will prepend a system instruction
    
    system_instruction = "You are a professional legal assistant. You are here to answer questions, provide legal information, and help the user navigate legal concepts. Do not give direct legal advice, but guide them clearly based on general legal knowledge."
    
    # Create contents list for the genai client
    contents = []
    for msg in req.messages:
        # Map 'user' -> 'user', 'assistant' -> 'model'
        role = "user" if msg.role == "user" else "model"
        contents.append(types.Content(role=role, parts=[types.Part.from_text(text=msg.content)]))
        
    try:
        # Use gemini-3.5-flash-lite or standard gemini model as fallback
        response = client.models.generate_content(
            model='gemini-3.5-flash-lite',
            contents=contents,
            config=types.GenerateContentConfig(
                system_instruction=system_instruction
            )
        )
        
        return {"role": "assistant", "content": response.text}
    except Exception as e:
        print(f"Error calling gemini-3.5-flash-lite: {e}. Trying fallback...")
        try:
            # Fallback to another model if available
            response = client.models.generate_content(
                model='gemini-3.0-flash',
                contents=contents,
                config=types.GenerateContentConfig(
                    system_instruction=system_instruction
                )
            )
            return {"role": "assistant", "content": response.text}
        except Exception as fallback_e:
            raise HTTPException(status_code=500, detail=f"Error generating chat response: {str(fallback_e)}")
