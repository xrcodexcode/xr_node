"""Tests for the approval queue (Phase A4)."""
from __future__ import annotations

import pytest

from app.security.approval import approval_queue


@pytest.mark.asyncio
async def test_request_approval_creates_pending_row():
    approval_id = await approval_queue.request_approval(
        action="tool:shell.execute",
        risk_level="high",
        details={"command": "echo hi"},
    )
    assert approval_id

    row = await approval_queue.get(approval_id)
    assert row is not None
    assert row["status"] == "pending"
    assert row["action"] == "tool:shell.execute"
    assert row["risk_level"] == "high"


@pytest.mark.asyncio
async def test_decide_approval_flips_status():
    approval_id = await approval_queue.request_approval(
        action="tool:shell.execute",
        risk_level="high",
    )

    decision = await approval_queue.decide(approval_id, approve=True, decided_by="cli")
    assert decision.approved is True

    row = await approval_queue.get(approval_id)
    assert row["status"] == "approved"
    assert row["decided_by"] == "cli"
    assert row["decided_at"]


@pytest.mark.asyncio
async def test_decide_twice_is_idempotent():
    approval_id = await approval_queue.request_approval(
        action="tool:shell.execute", risk_level="high",
    )
    await approval_queue.decide(approval_id, approve=True, decided_by="cli")
    again = await approval_queue.decide(approval_id, approve=False, decided_by="cli")
    # Second decision does not flip the row — already approved.
    row = await approval_queue.get(approval_id)
    assert row["status"] == "approved"
    assert "already resolved" in again.reason


@pytest.mark.asyncio
async def test_list_pending_filters_status():
    a = await approval_queue.request_approval(action="x", risk_level="low")
    b = await approval_queue.request_approval(action="y", risk_level="low")
    await approval_queue.decide(a, approve=True)

    pending = await approval_queue.list_pending()
    ids = {row["id"] for row in pending}
    assert a not in ids
    assert b in ids


@pytest.mark.asyncio
async def test_approvals_api_endpoints(client):
    """Test GET /api/v1/approvals and POST /api/v1/approvals/{id}/decide."""
    app_id = await approval_queue.request_approval(action="test_api_action", risk_level="high")

    # List pending via API
    resp = await client.get("/api/v1/approvals/pending")
    assert resp.status_code == 200
    data = resp.json()
    assert any(r["id"] == app_id for r in data)

    # Decide via API
    dec_resp = await client.post(f"/api/v1/approvals/{app_id}/decide", json={"approve": True, "decided_by": "api_test"})
    assert dec_resp.status_code == 200
    dec_data = dec_resp.json()
    assert dec_data["approved"] is True

    # Check detail via API
    get_resp = await client.get(f"/api/v1/approvals/{app_id}")
    assert get_resp.status_code == 200
    assert get_resp.json()["status"] == "approved"

