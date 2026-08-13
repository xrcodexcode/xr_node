"""ApprovalQueue — Manages human-in-the-loop approvals for dangerous operations."""
from __future__ import annotations

from typing import Any, Dict, List, Optional
from datetime import datetime, timezone
from uuid import uuid4

from app.core.logging import get_logger
from app.database.engine import async_session_factory
from app.database.models import Approval

logger = get_logger(__name__)


class ApprovalQueue:
    """Approval queue for human-in-the-loop safety verification."""

    async def request_approval(
        self,
        action: str,
        risk_level: str,
        task_id: Optional[str] = None,
        tool_call_id: Optional[str] = None,
        details: Optional[Dict[str, Any]] = None,
    ) -> str:
        app_id = str(uuid4())
        now = datetime.now(timezone.utc)

        async with async_session_factory() as session:
            app_obj = Approval(
                id=app_id,
                task_id=task_id,
                tool_call_id=tool_call_id,
                action=action,
                risk_level=risk_level,
                status="pending",
                details_json=str(details or {}),
                created_at=now,
            )
            session.add(app_obj)
            await session.commit()

        logger.info("Approval requested [id=%s, action=%s, risk=%s]", app_id, action, risk_level)
        return app_id


approval_queue = ApprovalQueue()
