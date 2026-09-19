from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    gemini_api_key: str
    supabase_url: str
    supabase_key: str

    class Config:
        env_file = ".env"

# try:
#     settings = Settings()
# except Exception as e:
#     print(f"Warning: Could not load environment variables from .env file. Error: {e}")

app = FastAPI(
    title="Laura API",
    description="Backend API for Legal Assessment and RAG",
    version="0.1.0"
)

# Allow frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:3001",
        "http://127.0.0.1:3001"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from routers import assess

@app.get("/ping")
async def ping():
    return {"status": "ok", "message": "Pong! Laura Backend is running."}

# Include routers
app.include_router(assess.router, prefix="/api")

