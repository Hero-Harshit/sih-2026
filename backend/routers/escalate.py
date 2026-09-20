from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
import random

router = APIRouter()

class EscalationRequest(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    organization: Optional[str] = None
    category: str
    query: str

@router.post("/escalate")
async def process_escalation(req: EscalationRequest):
    if not req.name or not req.email or not req.query:
        raise HTTPException(status_code=400, detail="Name, email, and query details are required.")
    
    reference_id = f"AYUR-{random.randint(100000, 999999)}"
    
    print(f"[ESCALATION LOG] Received request #{reference_id} from {req.name} ({req.email})")
    print(f"[ESCALATION LOG] Category: {req.category} | Phone: {req.phone}")
    print(f"[ESCALATION LOG] Query: {req.query}")

    return {
        "status": "success",
        "referenceId": reference_id,
        "message": f"Escalation request #{reference_id} registered successfully for category {req.category}.",
        "assignedCounsel": "AYUSH & IPR Legal Advisory Panel",
        "estimatedResponseHours": 24
    }
