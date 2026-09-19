from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import os
import json
from dotenv import load_dotenv
from supabase import create_client, Client
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from google import genai
from google.genai import types

load_dotenv()

url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")
if not url or not key:
    print("Warning: Missing Supabase credentials in .env")

# Initialize clients
print("Debug: Starting initialization...")
try:
    print("Debug: Initializing supabase...")
    supabase: Client = create_client(url, key) if url and key else None
    print("Debug: Initializing GoogleGenerativeAIEmbeddings...")
    embeddings = GoogleGenerativeAIEmbeddings(model="models/text-embedding-004") if os.getenv("GEMINI_API_KEY") else None
    print("Debug: Initializing genai.Client...")
    client = genai.Client(api_key=os.getenv("GEMINI_API_KEY")) if os.getenv("GEMINI_API_KEY") else None
    print("Debug: Initialization complete!")
except Exception as e:
    print(f"Warning: Initialization error: {e}")

router = APIRouter()

class AssessmentRequest(BaseModel):
    ingredients: Optional[List[str]] = []
    knowledgeSource: Optional[str] = None
    processingMethod: Optional[str] = None
    finalForm: Optional[str] = None
    sourcingRegion: Optional[str] = None
    companyStructure: Optional[str] = None
    healthClaims: Optional[List[str]] = []
    targetMarkets: Optional[List[str]] = []

@router.post("/assess")
async def process_assessment(req: AssessmentRequest):
    # 1. Construct a semantic query from user inputs
    query_parts = []
    if req.ingredients:
        query_parts.append(f"Product contains ingredients: {', '.join(req.ingredients)}.")
    if req.knowledgeSource:
        query_parts.append(f"Based on: {req.knowledgeSource}.")
    if req.processingMethod:
        query_parts.append(f"Processed via: {req.processingMethod}.")
    if req.finalForm:
        query_parts.append(f"Final product form: {req.finalForm}.")
    if req.sourcingRegion:
        query_parts.append(f"Sourced from: {req.sourcingRegion}.")
    if req.companyStructure:
        query_parts.append(f"Entity structure: {req.companyStructure}.")
    if req.healthClaims:
        query_parts.append(f"Health claims: {', '.join(req.healthClaims)}.")
    if req.targetMarkets:
        query_parts.append(f"Target markets: {', '.join(req.targetMarkets)}.")
        
    query_text = " ".join(query_parts)

    if not query_text:
        query_text = "General Ayurvedic product regulatory compliance."

    # 2. Embed the query
    try:
        res = client.models.embed_content(
            model='gemini-embedding-001',
            contents=query_text,
            config=types.EmbedContentConfig(output_dimensionality=768)
        )
        query_vector = res.embeddings[0].values
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Embedding error: {str(e)}")

    # 3. Retrieve context from Supabase Vector DB
    try:
        # Format the vector as a string for PostgREST to recognize it as a vector type
        vector_str = "[" + ",".join([str(x) for x in query_vector]) + "]"
        response = supabase.rpc(
            "match_document_chunks",
            {
                "query_embedding": vector_str,
                "match_count": 5
            }
        ).execute()
        chunks = response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database search error: {str(e)}")

    # Prepare context string
    context_text = ""
    for c in chunks:
        meta = c.get('metadata', {})
        filename = meta.get('filename', 'Unknown')
        page = meta.get('page_number', 'N/A')
        content = c.get('content', '')
        context_text += f"\n\n--- Source: {filename} (Page {page}) ---\n{content}"

    # 4. Generate response via LLM
    prompt = f"""
You are Laura, a premium Ayurvedic legal assistant. 
Review the user's product parameters and use ONLY the provided legal text context to generate a compliance report.
If a claim or parameter is not addressed in the provided context, state that it requires further legal review instead of guessing or hallucinating.
Ensure you cite specific Acts and Rules from the context.

User Product Profile:
{query_text}

Provided Legal Context:
{context_text}

Generate your response strictly as a JSON object matching this schema:
{{
  "riskScore": int (0-100, 0 is no risk, 100 is extremely high risk),
  "summary": string (A high-level summary of the regulatory landscape for this product),
  "citations": [
    {{ "law": string (Name of the Act/Rule and page from source), "text": string (Relevant explanation or quote) }}
  ],
  "actionPlan": [
    {{ "step": string (e.g. 'Register with NBA'), "description": string (Detailed explanation of what to do) }}
  ]
}}
"""
    try:
        response = client.models.generate_content(
            model='gemini-3.6-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
            )
        )
        report = json.loads(response.text)
        return report
    except Exception as e:
        print(f"Warning: gemini-3.6-flash failed ({e}). Falling back to gemini-3.5-flash-lite...")
        try:
            response = client.models.generate_content(
                model='gemini-3.5-flash-lite',
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_mime_type="application/json",
                )
            )
            report = json.loads(response.text)
            return report
        except Exception as fallback_e:
            raise HTTPException(status_code=500, detail=f"LLM Generation error (both 3.6 and 3.5-flash-lite failed): {str(fallback_e)}")
