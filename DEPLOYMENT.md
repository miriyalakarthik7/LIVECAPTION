# Deployment Guide

To make your application public (accessible to everyone via a link), you need to deploy the **Frontend** and the **Backend** separately.

## 1. Deploy Backend (FastAPI) to Render
The backend needs a server to run Python and Whisper (AI models). Vercel does not support this well, so we use **Render**.

1.  Push your code to **GitHub**.
2.  Go to [Render.com](https://render.com) and sign up/login.
3.  Click **New +** -> **Web Service**.
4.  Connect your GitHub repository.
5.  Select the `backend` folder as the **Root Directory** (if asked).
6.  **Runtime**: Select **Docker**. (We created a `Dockerfile` for you).
7.  **Name**: e.g., `livecaption-backend`.
8.  **Instance Type**: Select **Free** (Note: Free tier might be slow for AI models, but works for testing).
9.  Click **Create Web Service**.
10. Wait for deployment to finish. Copy your backend URL (e.g., `https://livecaption-backend.onrender.com`).

## 2. Deploy Frontend (React) to Vercel
The frontend is a static React site which runs perfectly on Vercel.

1.  Go to [Vercel.com](https://vercel.com) and sign up/login.
2.  Click **Add New...** -> **Project**.
3.  Import your GitHub repository.
4.  **Configure Project**:
    *   **Root Directory**: Click "Edit" and select `Frontend/CaptionDisplay`.
    *   **Framework Preset**: Vite.
    *   **Environment Variables**:
        *   **Name**: `VITE_WEBSOCKET_URL`
        *   **Value**: Your Render Backend URL with `wss://` and `/ws/transcribe` suffix.
        *   *Example*: `wss://livecaption-backend.onrender.com/ws/transcribe`
5.  Click **Deploy**.

## Summary
*   **Frontend**: Hosted on Vercel (e.g., `https://livecaption.vercel.app`).
*   **Backend**: Hosted on Render (e.g., `https://livecaption-backend.onrender.com`).
*   The frontend talks to the backend via the `VITE_WEBSOCKET_URL` you configured.
