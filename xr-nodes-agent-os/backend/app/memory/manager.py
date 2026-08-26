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

    async def search_memories(self, query: str, agent_id: Optional[str] = None, memory_type: Optional[str] = None, limit: int = 20) -> List[Dict[str, Any]]:
        async with async_session_factory() as session:
            from sqlalchemy import select
            stmt = select(Memory).where(Memory.content.ilike(f"%{query}%"))
            if agent_id:
                stmt = stmt.where(Memory.agent_id == agent_id)
            if memory_type:
                stmt = stmt.where(Memory.type == memory_type)
            stmt = stmt.order_by(Memory.created_at.desc()).limit(limit)
            result = await session.execute(stmt)
            memories = result.scalars().all()
            return [{"id": m.id, "type": m.type, "content": m.content, "agent_id": m.agent_id, "task_id": m.task_id, "created_at": m.created_at.isoformat()} for m in memories]

    async def get_memories_for_task(self, task_id: str) -> List[Dict[str, Any]]:
        async with async_session_factory() as session:
            from sqlalchemy import select
            stmt = select(Memory).where(Memory.task_id == task_id).order_by(Memory.created_at.asc())
            result = await session.execute(stmt)
            memories = result.scalars().all()
            return [{"id": m.id, "type": m.type, "content": m.content, "agent_id": m.agent_id, "task_id": m.task_id, "created_at": m.created_at.isoformat()} for m in memories]

    async def get_agent_context(self, agent_id: str, limit: int = 10) -> List[Dict[str, Any]]:
        async with async_session_factory() as session:
            from sqlalchemy import select
            stmt = select(Memory).where(Memory.agent_id == agent_id).order_by(Memory.created_at.desc()).limit(limit)
            result = await session.execute(stmt)
            memories = result.scalars().all()
            return [{"id": m.id, "type": m.type, "content": m.content, "agent_id": m.agent_id, "task_id": m.task_id, "created_at": m.created_at.isoformat()} for m in memories]

    async def get_recent(self, limit: int = 20) -> List[Dict[str, Any]]:
        async with async_session_factory() as session:
            from sqlalchemy import select
            stmt = select(Memory).order_by(Memory.created_at.desc()).limit(limit)
            result = await session.execute(stmt)
            memories = result.scalars().all()
            return [{"id": m.id, "type": m.type, "content": m.content, "agent_id": m.agent_id, "task_id": m.task_id, "created_at": m.created_at.isoformat()} for m in memories]

    async def delete_memory(self, memory_id: str) -> bool:
        async with async_session_factory() as session:
            from sqlalchemy import delete
            stmt = delete(Memory).where(Memory.id == memory_id)
            result = await session.execute(stmt)
            await session.commit()
            return result.rowcount > 0

    async def compact(self, older_than_days: int = 30) -> int:
        from datetime import datetime, timezone, timedelta
        from sqlalchemy import delete
        cutoff = datetime.now(timezone.utc) - timedelta(days=older_than_days)
        async with async_session_factory() as session:
            stmt = delete(Memory).where(Memory.created_at < cutoff)
            result = await session.execute(stmt)
            await session.commit()
            return result.rowcount

memory_manager = MemoryManager()
