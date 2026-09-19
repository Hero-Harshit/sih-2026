# IP Shakti Sahayak

IP Shakti Sahayak is a digital compliance and regulatory assessment platform designed for Ayurvedic products. The platform leverages artificial intelligence to provide legal grounding, compliance insights, and regulatory guidance based on Indian intellectual property and regulatory frameworks.

## Features

- AI-Powered Legal Assessment: Analyzes product parameters to generate risk scores and actionable compliance plans.
- Regulatory Corpus Access: Direct directory links to official Indian databases including TKDL, India Code, and IP India.
- Dynamic Reporting: Provides detailed compliance reports citing specific acts and rules.

## Technology Stack

### Frontend
- Next.js (React)
- Tailwind CSS
- Lucide React (Icons)

### Backend
- FastAPI (Python)
- Google Generative AI
- Supabase (PostgreSQL with pgvector for semantic search)

## Getting Started

### Prerequisites
- Node.js
- Python 3.9+
- Supabase Account
- Google Gemini API Key

### Backend Setup

1. Navigate to the backend directory:
   cd backend

2. Create a virtual environment and activate it:
   python -m venv .venv
   source .venv/bin/activate  # On Windows use: .venv\Scripts\activate

3. Install the required dependencies:
   pip install -r requirements.txt

4. Configure environment variables in `backend/.env`:
   GEMINI_API_KEY=your_gemini_api_key
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key

5. Start the FastAPI server:
   fastapi dev main.py

### Frontend Setup

1. Navigate to the frontend directory:
   cd frontend

2. Install the required dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Open your browser and navigate to `http://localhost:3000`.

## License

This project was developed for the Smart India Hackathon (SIH) 2026.
