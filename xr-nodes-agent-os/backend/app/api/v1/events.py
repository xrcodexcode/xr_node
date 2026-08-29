"""API endpoint for live Activity & Event streams."""
from __future__ import annotations

import json
from typing import Any, Dict, List
from fastapi import APIRouter
from sqlalchemy import select

from app.database.engine import async_session_factory
from app.database.models import EventLog

router = APIRouter(prefix="/events", tags=["Events"])


@router.get("", response_model=List[Dict[str, Any]])
async def list_events() -> List[Dict[str, Any]]:
    """List recent activity logs and system events."""
    async with async_session_factory() as session:
        result = await session.execute(select(EventLog).order_by(EventLog.created_at.desc()).limit(50))
        events = result.scalars().all()
        out = []
        for e in events:
            payload: Any = e.payload_json
            try:
                if e.payload_json and (e.payload_json.startswith("{") or e.payload_json.startswith("[")):
                    payload = json.loads(e.payload_json)
            except Exception:
                pass
            out.append({
                "id": e.id,
                "type": e.type,
                "source": e.source,
                "payload": payload,
                "created_at": e.created_at.isoformat() if e.created_at else "",
            })
        return out
