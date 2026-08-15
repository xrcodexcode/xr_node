"""API endpoints for human-in-the-loop approval decisions."""
from __future__ import annotations

from typing import Any, Dict, List, Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.security.approval import approval_queue

router = APIRouter(prefix="/approvals", tags=["Approvals"])


class DecideRequest(BaseModel):
    approve: bool
    decided_by: str = "user"
    reason: str = ""


class DecideResponse(BaseModel):
    approval_id: str
    approved: bool
    reason: str


@router.get("/pending", response_model=List[Dict[str, Any]])
async def list_pending() -> List[Dict[str, Any]]:
    """List all pending approval requests."""
    return await approval_queue.list_pending()


@router.get("", response_model=List[Dict[str, Any]])
async def list_all(limit: int = 100) -> List[Dict[str, Any]]:
    """List recent approvals (any status)."""
    return await approval_queue.list_all(limit=limit)


@router.get("/{approval_id}", response_model=Dict[str, Any])
async def get_approval(approval_id: str) -> Dict[str, Any]:
    row = await approval_queue.get(approval_id)
    if not row:
        raise HTTPException(status_code=404, detail=f"Approval '{approval_id}' not found")
    return row


@router.post("/{approval_id}/decide", response_model=DecideResponse)
async def decide(approval_id: str, req: DecideRequest) -> DecideResponse:
    row = await approval_queue.get(approval_id)
    if not row:
        raise HTTPException(status_code=404, detail=f"Approval '{approval_id}' not found")
    decision = await approval_queue.decide(
        approval_id=approval_id,
        approve=req.approve,
        decided_by=req.decided_by,
        reason=req.reason,
    )
    return DecideResponse(
        approval_id=approval_id,
        approved=decision.approved,
        reason=decision.reason,
    )
