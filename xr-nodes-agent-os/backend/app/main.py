"""XR-NODES Agent OS — FastAPI Application."""
from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

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

    # Register global DB event persistence listener
    async def log_event_to_db(ev: Event):
        try:
            from app.database.engine import async_session_factory
            from app.database.models import EventLog
            from uuid import uuid4
            import json

            async with async_session_factory() as session:
                payload_str = json.dumps(ev.payload, default=str) if isinstance(ev.payload, dict) else str(ev.payload)
                log_entry = EventLog(
                    id=str(uuid4()),
                    type=ev.type,
                    source=ev.source,
                    payload_json=payload_str,
                )
                session.add(log_entry)
                await session.commit()
        except Exception as e:
            logger.error("Failed to log event to DB: %s", e)

    event_bus.on_all(log_event_to_db)

    # Initialize database
    await initialize_database()

    # Load default tool registry (idempotent)
    from app.tools.registry import ensure_default_tools_loaded
    ensure_default_tools_loaded()
    logger.info("Tools registered: %d", len(__import__("app.tools.registry", fromlist=["tool_registry"]).tool_registry.list_names()))

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

    dist_dir = settings.project_root / "frontend" / "dist"
    assets_dir = dist_dir / "assets"
    if assets_dir.exists():
        app.mount("/assets", StaticFiles(directory=str(assets_dir)), name="assets")

    # Root route: returns JSON for API/test clients, or serves index.html for browsers
    @app.get("/", include_in_schema=False)
    async def root(request: Request):
        accept = request.headers.get("accept", "")
        # Browsers send Accept: text/html,... while API and test clients send */* or application/json
        if "text/html" in accept:
            index_file = dist_dir / "index.html"
            if index_file.exists():
                return FileResponse(str(index_file))
        return {
            "service": settings.PROJECT_NAME,
            "version": settings.VERSION,
            "docs": "/docs",
            "health": f"{settings.API_V1_STR}/health",
        }

    # SPA catch-all route for frontend navigation
    @app.get("/{full_path:path}", include_in_schema=False)
    async def spa_catch_all(full_path: str):
        if full_path.startswith("api/") or full_path.startswith("docs") or full_path.startswith("openapi.json"):
            from fastapi import HTTPException
            raise HTTPException(status_code=404, detail="Not found")
        target = dist_dir / full_path
        if target.is_file():
            return FileResponse(str(target))
        index_file = dist_dir / "index.html"
        if index_file.exists():
            return FileResponse(str(index_file))
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Not found")

    return app


app = create_app()
