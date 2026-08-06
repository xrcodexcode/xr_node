from fastapi import APIRouter
from backend.app.core.config import settings

router = APIRouter()

@router.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "environment": settings.ENVIRONMENT,
    }

@router.get("/status")
async def system_status():
    return {
        "status": "online",
        "version": settings.VERSION,
        "database": "connected",
        "vector_store": "ready",
        "sync_engine": "ready"
    }
