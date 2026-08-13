"""Shared test fixtures for the XR-NODES Agent OS test suite."""
from __future__ import annotations

import sys
from pathlib import Path

import pytest
import pytest_asyncio
from httpx import ASGITransport, AsyncClient

# Ensure backend is on path
_project_root = Path(__file__).resolve().parents[1]
_backend_dir = _project_root / "backend"
if str(_backend_dir) not in sys.path:
    sys.path.insert(0, str(_backend_dir))

# Override database URL for tests BEFORE importing app modules
import os
os.environ["XR_DATABASE_URL"] = "sqlite+aiosqlite:///./data/xr-nodes-test.db"
os.environ["XR_LOG_LEVEL"] = "WARNING"


@pytest_asyncio.fixture
async def client():
    """Async test client for the FastAPI app."""
    from app.main import app
    from app.database.migrations import initialize_database
    from app.database.engine import engine
    from app.database.models import Base

    # Create tables for test database
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)

    await initialize_database()

    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac

    # Cleanup: drop all tables
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
