"""
Piyush Wiki FastAPI Application Entrypoint
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Piyush Wiki API",
    version="1.0.0",
    description="Local-first personal knowledge platform API backend",
)

# Enable CORS for Next.js web application
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "Piyush Wiki API"}

@app.get("/api/v1/status")
async def api_status():
    return {
        "status": "online",
        "version": "1.0.0",
        "sync_engine": "ready",
        "database": "connected"
    }
