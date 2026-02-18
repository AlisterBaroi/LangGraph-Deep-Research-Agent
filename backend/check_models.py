import os
from google import genai
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Check for API Key
if os.getenv("GEMINI_API_KEY") is None:
    raise ValueError("GEMINI_API_KEY is not set")

try:
    # Initialize Client
    client = genai.Client(api_key=os.environ.get("GOOGLE_API_KEY"))
    print(f"--- 📡 Listing All Available Models ---")
    # Simple List (No attribute filtering to avoid errors)
    pager = client.models.list()
    for model in pager:
        # Just print models, that are present
        print(f"✅ Found: {model.name}")

except Exception as e:
    print(f"Error: {e}")
