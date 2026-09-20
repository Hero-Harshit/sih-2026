from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="SIH API",
    description="Backend API for Legal Assessment and RAG",
    version="0.1.0"
)

# Allow frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

from routers import assess, escalate, chat

@app.get("/ping")
async def ping():
    return {"status": "ok", "message": "Pong! SIH Backend is running."}

# Include routers
app.include_router(assess.router, prefix="/api")
app.include_router(escalate.router, prefix="/api")
app.include_router(chat.router, prefix="/api")

