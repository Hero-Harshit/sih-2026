import sys
import json
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def run_test():
    print("Sending request to /api/assess...")
    response = client.post(
        "/api/assess",
        json={
            "ingredients": ["Ashwagandha", "Turmeric"],
            "knowledgeSource": "Traditional Ayurvedic texts",
            "processingMethod": "Sun dried and powdered",
            "finalForm": "Capsule",
            "healthClaims": ["Reduces stress", "Boosts immunity"]
        }
    )
    
    print(f"Status Code: {response.status_code}")
    try:
        data = response.json()
        print("Response JSON:")
        print(json.dumps(data, indent=2))
    except Exception as e:
        print("Failed to parse JSON response. Raw text:")
        print(response.text)

if __name__ == "__main__":
    run_test()
