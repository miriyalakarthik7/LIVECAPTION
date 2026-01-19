FROM python:3.10-slim

# Install system dependencies (ffmpeg is required for Whisper, libportaudio2 for sounddevice)
RUN apt-get update && apt-get install -y ffmpeg libportaudio2 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy requirements and install python dependencies
COPY requirement.txt .
RUN pip install --no-cache-dir -r requirement.txt

# Copy backend code
# Assuming the build context is the root of the repo, we copy the backend folder
COPY backend ./backend

# Environment variables
ENV PORT=8000

# Run the application
# We use backend.main:app because inside /app, we have a folder 'backend' with 'main.py'
CMD uvicorn backend.main:app --host 0.0.0.0 --port $PORT
