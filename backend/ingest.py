import os
import time
import pymupdf as fitz # PyMuPDF
from pathlib import Path
from dotenv import load_dotenv
from supabase import create_client, Client
from langchain_text_splitters import RecursiveCharacterTextSplitter
from google import genai
from google.genai import types

load_dotenv()

# Initialize Supabase client
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
if not url or not key:
    raise ValueError("Missing Supabase credentials in .env")

supabase: Client = create_client(url, key)

# Initialize Gemini Client for Embeddings
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("Missing Gemini API Key in .env")
client = genai.Client(api_key=api_key)

# Initialize Text Splitter
# We split into 1000 character chunks with 200 characters of overlap to maintain context
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    length_function=len,
    is_separator_regex=False,
)

CORPUS_DIR = Path("../corpus")

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    pages = []
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text = page.get_text()
        if text.strip():
            pages.append({
                "text": text,
                "page_number": page_num + 1
            })
    return pages

import sys
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(line_buffering=True)

def get_processed_files():
    print("Fetching already processed files from Supabase (paginated)...")
    try:
        files = set()
        offset = 0
        while True:
            response = supabase.table("document_chunks").select("metadata->>filename").range(offset, offset + 999).execute()
            data = response.data
            if not data:
                break
            for r in data:
                if "filename" in r and r["filename"]:
                    files.add(r["filename"])
            if len(data) < 1000:
                break
            offset += 1000
        print(f"Found {len(files)} distinct files already processed in Supabase.")
        return files
    except Exception as e:
        print(f"Warning: Failed to fetch processed files: {e}")
        return set()

def process_corpus():
    if not CORPUS_DIR.exists():
        print(f"Error: Directory {CORPUS_DIR} not found.")
        return

    processed_files = get_processed_files()

    # Process in batches to avoid overwhelming the API or Database
    batch_size = 20
    embed_batch_size = 10
    
    for category_dir in sorted(CORPUS_DIR.iterdir()):
        if category_dir.is_dir():
            category = category_dir.name
            print(f"\n--- Processing category: {category} ---")
            
            for pdf_file in sorted(category_dir.rglob("*.pdf")):
                if pdf_file.name in processed_files:
                    print(f"  Skipping {pdf_file.name} (already processed)")
                    continue
                
                print(f"  Extracting {pdf_file.name}...")
                try:
                    pages_data = extract_text_from_pdf(pdf_file)
                except Exception as e:
                    print(f"    Error reading PDF {pdf_file.name}: {e}")
                    continue
                
                if not pages_data:
                    print(f"    No text extracted from {pdf_file.name} (scanned/empty)")
                    processed_files.add(pdf_file.name)
                    continue

                raw_chunks = []
                for page_data in pages_data:
                    chunks = text_splitter.split_text(page_data["text"])
                    for i, chunk in enumerate(chunks):
                        raw_chunks.append({
                            "content": chunk,
                            "page_number": page_data["page_number"],
                            "chunk_index": i
                        })

                print(f"    Total chunks to embed: {len(raw_chunks)}")
                chunks_to_insert = []
                has_errors = False

                # Embed in batches of embed_batch_size
                for b_idx in range(0, len(raw_chunks), embed_batch_size):
                    chunk_slice = raw_chunks[b_idx:b_idx + embed_batch_size]
                    contents = [c["content"] for c in chunk_slice]
                    
                    retries = 3
                    embedded = False
                    for attempt in range(retries):
                        try:
                            res = client.models.embed_content(
                                model='gemini-embedding-001',
                                contents=contents,
                                config=types.EmbedContentConfig(output_dimensionality=768)
                            )
                            vectors = [emb.values for emb in res.embeddings]
                            for c_item, vec in zip(chunk_slice, vectors):
                                chunks_to_insert.append({
                                    "content": c_item["content"],
                                    "metadata": {
                                        "filename": pdf_file.name,
                                        "category": category,
                                        "page_number": c_item["page_number"],
                                        "chunk_index": c_item["chunk_index"]
                                    },
                                    "embedding": vec
                                })
                            embedded = True
                            time.sleep(0.6) # gentle throttle
                            break
                        except Exception as e:
                            print(f"    Embed attempt {attempt+1} failed: {e}")
                            time.sleep(15 * (attempt + 1))
                    
                    if not embedded:
                        has_errors = True
                        break

                if chunks_to_insert and not has_errors:
                    print(f"    Pushing {len(chunks_to_insert)} chunks to Supabase...")
                    for i in range(0, len(chunks_to_insert), batch_size):
                        batch = chunks_to_insert[i:i + batch_size]
                        try:
                            supabase.table("document_chunks").insert(batch).execute()
                        except Exception as e:
                            print(f"    Error inserting to Supabase: {e}")
                            has_errors = True
                            break

                print(f"  Finished {pdf_file.name}! (Errors: {has_errors})")
                if not has_errors:
                    processed_files.add(pdf_file.name)

if __name__ == "__main__":
    print("Starting ingestion process...")
    process_corpus()
    print("Ingestion complete.")
