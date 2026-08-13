"""XR-NODES Agent OS — FastAPI Application."""
from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.errors import AppError, app_error_handler, generic_exception_handler
from app.core.events import event_bus, Event
from app.core.logging import setup_logging, logger
from app.database.engine import dispose_engine
from app.database.migrations import initialize_database
from app.api.v1.router import api_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifecycle: startup and shutdown."""
    # ── Startup ───────────────────────────────────────────────────────────────
    setup_logging(
        level=settings.LOG_LEVEL,
        log_format=settings.LOG_FORMAT,
        log_file=settings.LOG_FILE,
    )
    logger.info(
        "Starting %s v%s [%s]",
        settings.PROJECT_NAME,
        settings.VERSION,
        settings.ENVIRONMENT,
    )
    logger.info("Vault path: %s", settings.VAULT_PATH)
    logger.info("Database: %s", settings.DATABASE_URL)

    # Initialize database
    await initialize_database()

    # Emit startup event
    await event_bus.emit(Event(
        type="system.started",
        source="main",
        payload={"version": settings.VERSION},
    ))

    logger.info("%s ready.", settings.PROJECT_NAME)

    yield

    # ── Shutdown ──────────────────────────────────────────────────────────────
    logger.info("Shutting down %s...", settings.PROJECT_NAME)
    await event_bus.emit(Event(type="system.shutdown", source="main"))
    await dispose_engine()
    logger.info("Shutdown complete.")


def create_app() -> FastAPI:
    """Application factory."""
    app = FastAPI(
        title=settings.PROJECT_NAME,
        version=settings.VERSION,
        description="AI-native operating layer for personal knowledge management.",
        openapi_url=f"{settings.API_V1_STR}/openapi.json",
        docs_url="/docs",
        lifespan=lifespan,
    )

    # CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Error handlers
    app.add_exception_handler(AppError, app_error_handler)
    app.add_exception_handler(Exception, generic_exception_handler)

    # API routes
    app.include_router(api_router, prefix=settings.API_V1_STR)

    # Root redirect
    @app.get("/", include_in_schema=False)
    async def root():
        return {
            "service": settings.PROJECT_NAME,
            "version": settings.VERSION,
            "docs": "/docs",
            "health": f"{settings.API_V1_STR}/health",
        }

    return app


app = create_app()
