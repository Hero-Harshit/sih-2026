import requests

url = "http://127.0.0.1:8001/api/chat"
payload = {
    "messages": [
        {"role": "user", "content": "What is a patent?"}
    ]
}

try:
    response = requests.post(url, json=payload)
    print("Status Code:", response.status_code)
    print("Response JSON:", response.text)
except Exception as e:
    print("Error:", e)
