import sys
import json
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_classical_and_patent_flow():
    print("\n--- Running Test 1: Classical + Modern SCFE + Patent Filing ---")
    payload = {
        "ingredients": [
            "Neem (Azadirachta indica)",
            "Turmeric / Haridra (Curcuma longa)",
            "Kashmiri Saffron (Crocus sativus)"
        ],
        "knowledgeSource": "Classical Text (e.g., Charaka Samhita, Sushruta Samhita)",
        "processingMethod": "Supercritical Fluid CO2 Extraction (SCFE)",
        "finalForm": "Oral Liquid (Fermented Asava, Arishta, Syrup)",
        "sourcingRegion": "Western Ghats Biodiversity Hotspot",
        "companyStructure": "100% Indian Citizens / Indian-Owned Entity",
        "healthClaims": [
            "Classical Rejuvenation & Vitality (\"Rasayana\" / \"Balya\")",
            "Digestive & Metabolic Health (\"Deepana\" / \"Pachana\")"
        ],
        "targetMarkets": [
            "Domestic India: Classical AYUSH Drug (License on Form 25D)",
            "Filing for Global Patents (PCT / International Offices)"
        ]
    }
    response = client.post("/api/assess", json=payload)
    print(f"Status Code: {response.status_code}")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
    data = response.json()
    print("Risk Score:", data.get("riskScore"))
    print("Summary:", data.get("summary")[:200] + "..." if data.get("summary") else "None")
    print("Citations Count:", len(data.get("citations", [])))
    for c in data.get("citations", []):
        print(f" - [{c.get('law')}]: {c.get('text')[:100]}...")
    print("Action Plan Steps:")
    for a in data.get("actionPlan", []):
        print(f" - {a.get('step')}: {a.get('description')[:100]}...")
    return data

def test_high_risk_schedule_e1_and_prohibited_claims():
    print("\n--- Running Test 2: Schedule E(1) Herbs + Foreign Equity + Prohibited DMR Claims ---")
    payload = {
        "ingredients": [
            "Vatsanabha / Indian Aconite (Aconitum ferox)",
            "Bhang / Vijaya (Cannabis sativa)",
            "Sarpgandha (Rauvolfia serpentina)"
        ],
        "knowledgeSource": "Proprietary Mix (Patent & Proprietary - P&P)",
        "processingMethod": "Classical Calcinated Ash / Bhasma (Shodhana & Marana)",
        "finalForm": "Oral Solid (Tablets, Capsules, Vati, Gutika)",
        "sourcingRegion": "Himalayan Belt",
        "companyStructure": "Contains Foreign Equity / FDI / NRI Shareholding",
        "healthClaims": [
            "Cures Diabetes / Cancer / Blindness",
            "\"Permanent Cure for Obesity / Hypertension / Heart Disease\"",
            "\"100% Natural / Pure Ayurvedic / Zero Side Effects\""
        ],
        "targetMarkets": [
            "United States: FDA Dietary Supplement (DSHEA 1994)",
            "Filing for Indian Patent (IPO)"
        ]
    }
    response = client.post("/api/assess", json=payload)
    print(f"Status Code: {response.status_code}")
    assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
    data = response.json()
    print("Risk Score:", data.get("riskScore"))
    print("Summary:", data.get("summary")[:200] + "..." if data.get("summary") else "None")
    print("Citations Count:", len(data.get("citations", [])))
    for c in data.get("citations", []):
        print(f" - [{c.get('law')}]: {c.get('text')[:100]}...")
    print("Action Plan Steps:")
    for a in data.get("actionPlan", []):
        print(f" - {a.get('step')}: {a.get('description')[:100]}...")
    return data

if __name__ == "__main__":
    test_classical_and_patent_flow()
    test_high_risk_schedule_e1_and_prohibited_claims()
    print("\nAll expanded assessment tests passed successfully!")
