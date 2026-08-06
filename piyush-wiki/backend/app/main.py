from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.core.config import settings
from backend.app.core.logging import setup_logging, logger
from backend.app.core.errors import AppError, app_error_handler, generic_exception_handler
from backend.app.api.v1.router import api_router

setup_logging()

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Local-first personal knowledge platform API backend",
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global Error Handlers
app.add_exception_handler(AppError, app_error_handler)
app.add_exception_handler(Exception, generic_exception_handler)

# Include API Routers
app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/health", tags=["Root"])
async def root_health():
    return {"status": "healthy", "service": settings.PROJECT_NAME}

logger.info(f"{settings.PROJECT_NAME} initialized v{settings.VERSION}")
