"""MemoryManager — Manages short-term task context, episodic task logs, and long-term knowledge."""
from __future__ import annotations

from typing import Any, Dict, List, Optional
from datetime import datetime, timezone
from uuid import uuid4

from app.core.logging import get_logger
from app.database.engine import async_session_factory
from app.database.models import Memory

logger = get_logger(__name__)


class MemoryManager:
    """Manages multi-layered memory storage and retrieval."""

    async def add_memory(
        self,
        memory_type: str,  # "short_term", "episodic", "knowledge"
        content: str,
        agent_id: Optional[str] = None,
        task_id: Optional[str] = None,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> str:
        mem_id = str(uuid4())
        now = datetime.now(timezone.utc)

        import json

        async with async_session_factory() as session:
            mem = Memory(
                id=mem_id,
                type=memory_type,
                agent_id=agent_id,
                task_id=task_id,
                content=content,
                metadata_json=json.dumps(metadata or {}, default=str),
                created_at=now,
            )
            session.add(mem)
            await session.commit()

        logger.debug("Saved %s memory [id=%s]", memory_type, mem_id)
        return mem_id


memory_manager = MemoryManager()
