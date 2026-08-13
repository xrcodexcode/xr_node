"""SQLite async engine and session management."""
from __future__ import annotations

from pathlib import Path

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from app.core.config import settings
from app.core.logging import get_logger

logger = get_logger(__name__)

# Ensure data directory exists
_db_path = settings.DATABASE_URL.replace("sqlite+aiosqlite:///", "")
Path(_db_path).parent.mkdir(parents=True, exist_ok=True)

engine = create_async_engine(
    settings.DATABASE_URL,
    echo=False,
    connect_args={"check_same_thread": False},
)

async_session_factory = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)


async def get_session() -> AsyncSession:
    """Dependency for FastAPI route handlers."""
    async with async_session_factory() as session:
        yield session


async def dispose_engine() -> None:
    """Gracefully close the database engine."""
    await engine.dispose()
    logger.info("Database engine disposed.")
