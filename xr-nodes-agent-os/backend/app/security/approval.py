"""ApprovalQueue — Manages human-in-the-loop approvals for dangerous operations.

Lifecycle::

    pending ──approve──▶ approved
    pending ──deny────▶ denied
    pending ──expire──▶ expired

Approvals are persisted in the ``approvals`` table (see
``app.database.models.Approval``) so they survive a process restart and
can be surfaced in the API / CLI / dashboard.
"""
from __future__ import annotations

from datetime import datetime, timezone
from typing import Any, Dict, List, Optional
from uuid import uuid4

from sqlalchemy import select

from app.core.events import Event, event_bus
from app.core.logging import get_logger
from app.database.engine import async_session_factory
from app.database.models import Approval

import json

logger = get_logger(__name__)


class ApprovalDecision:
    """Decision returned to a caller that was blocked by an approval."""

    def __init__(self, approved: bool, reason: str, approval_id: str):
        self.approved = approved
        self.reason = reason
        self.approval_id = approval_id

    def to_dict(self) -> Dict[str, Any]:
        return {
            "approved": self.approved,
            "reason": self.reason,
            "approval_id": self.approval_id,
        }


class ApprovalQueue:
    """Approval queue for human-in-the-loop safety verification."""

    # ------------------------------------------------------------------- request
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
                details_json=json.dumps(details or {}, default=str),
                created_at=now,
            )
            session.add(app_obj)
            await session.commit()

        await event_bus.emit(Event(
            type="approval.requested",
            source="approval_queue",
            payload={"approval_id": app_id, "action": action, "risk_level": risk_level},
        ))
        logger.info("Approval requested [id=%s, action=%s, risk=%s]", app_id, action, risk_level)
        return app_id

    # --------------------------------------------------------------------- query
    async def get(self, approval_id: str) -> Optional[Dict[str, Any]]:
        async with async_session_factory() as session:
            row = await session.get(Approval, approval_id)
            if not row:
                return None
            return self._row_to_dict(row)

    async def list_pending(self, limit: int = 50) -> List[Dict[str, Any]]:
        async with async_session_factory() as session:
            stmt = (
                select(Approval)
                .where(Approval.status == "pending")
                .order_by(Approval.created_at.desc())
                .limit(limit)
            )
            rows = (await session.execute(stmt)).scalars().all()
            return [self._row_to_dict(r) for r in rows]

    async def list_all(self, limit: int = 100) -> List[Dict[str, Any]]:
        async with async_session_factory() as session:
            stmt = select(Approval).order_by(Approval.created_at.desc()).limit(limit)
            rows = (await session.execute(stmt)).scalars().all()
            return [self._row_to_dict(r) for r in rows]

    # -------------------------------------------------------------------- decide
    async def decide(
        self,
        approval_id: str,
        approve: bool,
        decided_by: str = "user",
        reason: str = "",
    ) -> ApprovalDecision:
        async with async_session_factory() as session:
            row = await session.get(Approval, approval_id)
            if not row:
                return ApprovalDecision(False, "Approval not found.", approval_id)

            if row.status != "pending":
                return ApprovalDecision(
                    approve,
                    f"Approval already resolved (status={row.status}).",
                    approval_id,
                )

            row.status = "approved" if approve else "denied"
            row.decided_by = decided_by
            row.decided_at = datetime.now(timezone.utc)
            if reason:
                orig = {}
                try:
                    orig = json.loads(row.details_json) if row.details_json else {}
                except Exception:
                    orig = {"raw": row.details_json}
                row.details_json = json.dumps({"original": orig, "decision_reason": reason}, default=str)
            await session.commit()

        await event_bus.emit(Event(
            type="approval.decided",
            source="approval_queue",
            payload={
                "approval_id": approval_id,
                "approved": approve,
                "decided_by": decided_by,
                "action": row.action,
            },
        ))
        logger.info(
            "Approval %s → %s by %s",
            approval_id,
            "approved" if approve else "denied",
            decided_by,
        )
        return ApprovalDecision(approve, reason or "decided", approval_id)

    # ------------------------------------------------------------------- helpers
    @staticmethod
    def _row_to_dict(row: Approval) -> Dict[str, Any]:
        return {
            "id": row.id,
            "task_id": row.task_id,
            "tool_call_id": row.tool_call_id,
            "action": row.action,
            "risk_level": row.risk_level,
            "status": row.status,
            "details": row.details_json,
            "decided_by": row.decided_by,
            "decided_at": row.decided_at.isoformat() if row.decided_at else None,
            "created_at": row.created_at.isoformat() if row.created_at else None,
        }


approval_queue = ApprovalQueue()
