from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import whisper
import numpy as np
import tempfile
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Whisper model
# "base" is a good balance for speed/accuracy. Use "tiny" for faster (less accurate) results.
print("Loading Whisper model... (This may take a moment)")
try:
    model = whisper.load_model("tiny")
    print("Whisper model loaded successfully! Ready for connections.")
except Exception as e:
    print(f"Error loading model: {e}")
    raise e

@app.websocket("/ws/transcribe")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    print("Client connected")
    
    try:
        while True:
            # Receive audio bytes
            data = await websocket.receive_bytes()
            
            # Create a temporary file to save the chunk
            # Whisper expects a file path or numpy array. 
            # Receiving raw bytes (likely webm/wav from browser) is easiest handled by saving to temp file
            # and letting whisper/ffmpeg handle the decoding.
            with tempfile.NamedTemporaryFile(delete=False, suffix=".webm") as temp_audio:
                temp_audio.write(data)
                temp_audio_path = temp_audio.name

            try:
                # Transcribe
                # Using fp16=False to avoid warnings on CPU only machines (common for dev)
                result = model.transcribe(temp_audio_path, fp16=False)
                text = result["text"].strip()
                
                if text:
                    await websocket.send_text(text)
            finally:
                # Clean up temp file
                if os.path.exists(temp_audio_path):
                    os.remove(temp_audio_path)
                    
    except Exception as e:
        print(f"Connection closed: {e}")
