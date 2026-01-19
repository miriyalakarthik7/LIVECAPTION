# LiveCaptions

Updates and improvements for the LiveCaptions project.

## Project Structure

- **Frontend**: `Frontend/CaptionDisplay` (Vite + React)
- **Backend**: `backend/` (FastAPI)

## How to Run

You need to run **two separate terminals** to start the application (one for the backend API, one for the frontend UI).

### 1. Start the Backend (API)

Open a terminal and run:

```bash
# Activate virtual environment (if you have one)
source venv/bin/activate

# Run the FastAPI server
uvicorn backend.main:app --reload --port 8000
```
This starts the backend at `http://localhost:8000`.

### 2. Start the Frontend (UI)

Open a **new** terminal (keep the backend running) and run:

```bash
cd Frontend/CaptionDisplay

# Install dependencies (only needed once)
npm install

# Run the development server
npm run dev
```
This starts the frontend at `http://localhost:5173`.

## Recent Updates
- **Footer**: Updated with "Light Blue" theme, new links (Careers, Contact, Security), and 2026 copyright.
- **Pages**: Added `Careers.jsx`, `Contact.jsx`, `Security.jsx` with animations.
- **Home**: Enhanced hero section (typewriter effect).
