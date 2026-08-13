"""Health check and system status endpoints."""
from __future__ import annotations

import platform
from datetime import datetime, timezone
from pathlib import Path

from fastapi import APIRouter
from pydantic import BaseModel
from sqlalchemy import select, func, text

from app.core.config import settings
from app.database.engine import async_session_factory
from app.database.models import Agent, Task, EventLog

router = APIRouter(prefix="/health", tags=["Health"])


class HealthResponse(BaseModel):
    status: str
    version: str
    environment: str
    timestamp: str
    vault_connected: bool
    database_connected: bool
    vault_path: str
    system: dict


class StatusResponse(BaseModel):
    status: str
    version: str
    agents: int
    active_tasks: int
    total_tasks: int
    total_events: int
    vault_nodes: int
    vault_mocs: int
    uptime: str


_startup_time = datetime.now(timezone.utc)


@router.get("", response_model=HealthResponse)
async def health_check() -> HealthResponse:
    """Basic health check — server, database, and vault connectivity."""
    # Check vault connectivity
    vault_ok = settings.VAULT_PATH.exists() and settings.vault_nodes.exists()

    # Check database connectivity
    db_ok = False
    try:
        async with async_session_factory() as session:
            await session.execute(text("SELECT 1"))
            db_ok = True
    except Exception:
        pass

    overall = "healthy" if (vault_ok and db_ok) else "degraded"

    return HealthResponse(
        status=overall,
        version=settings.VERSION,
        environment=settings.ENVIRONMENT,
        timestamp=datetime.now(timezone.utc).isoformat(),
        vault_connected=vault_ok,
        database_connected=db_ok,
        vault_path=str(settings.VAULT_PATH),
        system={
            "python": platform.python_version(),
            "os": platform.system(),
            "machine": platform.machine(),
        },
    )


@router.get("/status", response_model=StatusResponse)
async def system_status() -> StatusResponse:
    """Detailed system status with counts."""
    agents_count = 0
    active_tasks = 0
    total_tasks = 0
    total_events = 0

    try:
        async with async_session_factory() as session:
            result = await session.execute(select(func.count()).select_from(Agent))
            agents_count = result.scalar_one()

            result = await session.execute(
                select(func.count()).select_from(Task).where(
                    Task.status.in_(["running", "planning", "waiting", "verifying"])
                )
            )
            active_tasks = result.scalar_one()

            result = await session.execute(select(func.count()).select_from(Task))
            total_tasks = result.scalar_one()

            result = await session.execute(select(func.count()).select_from(EventLog))
            total_events = result.scalar_one()
    except Exception:
        pass

    # Count vault notes
    vault_nodes = 0
    vault_mocs = 0
    try:
        if settings.vault_nodes.exists():
            vault_nodes = len(list(settings.vault_nodes.glob("*.md")))
        if settings.vault_mocs.exists():
            vault_mocs = len(list(settings.vault_mocs.glob("*.md")))
    except Exception:
        pass

    now = datetime.now(timezone.utc)
    uptime = now - _startup_time
    hours, remainder = divmod(int(uptime.total_seconds()), 3600)
    minutes, seconds = divmod(remainder, 60)

    return StatusResponse(
        status="running",
        version=settings.VERSION,
        agents=agents_count,
        active_tasks=active_tasks,
        total_tasks=total_tasks,
        total_events=total_events,
        vault_nodes=vault_nodes,
        vault_mocs=vault_mocs,
        uptime=f"{hours}h {minutes}m {seconds}s",
    )
