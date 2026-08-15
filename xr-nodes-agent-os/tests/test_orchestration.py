"""Tests for Task state transitions, Planner engine, and Orchestrator."""
from __future__ import annotations

import pytest
from app.orchestration.planner import planner_engine
from app.orchestration.state import TaskStatus, can_transition


def test_task_state_transitions():
    """State machine transitions should validate correctly."""
    assert can_transition(TaskStatus.CREATED, TaskStatus.PLANNING) is True
    assert can_transition(TaskStatus.PLANNING, TaskStatus.READY) is True
    assert can_transition(TaskStatus.COMPLETED, TaskStatus.RUNNING) is False


@pytest.mark.asyncio
async def test_planner_engine_generates_plan():
    """Planner engine should decompose objective into steps."""
    plan = await planner_engine.create_plan("Research transformers and update my wiki")
    assert plan.objective == "Research transformers and update my wiki"
    assert len(plan.steps) >= 3
    agents_in_plan = [s.agent_name for s in plan.steps]
    assert "research-agent" in agents_in_plan
    assert "atomizer-agent" in agents_in_plan


@pytest.mark.asyncio
async def test_tasks_api_lifecycle(client):
    """Test task creation and listing API."""
    # Create task
    resp = await client.post("/api/v1/tasks", json={"title": "Test Task", "description": "Test"})
    assert resp.status_code == 200
    data = resp.json()
    assert "task_id" in data
    task_id = data["task_id"]

    # List tasks
    resp_list = await client.get("/api/v1/tasks")
    assert resp_list.status_code == 200
    tasks_data = resp_list.json()
    assert len(tasks_data) >= 1

    # Execute task
    resp_exec = await client.post(f"/api/v1/tasks/{task_id}/execute")
    assert resp_exec.status_code == 200
    exec_data = resp_exec.json()
    assert exec_data["status"] in ("completed", "failed", "waiting")
    assert "steps_completed" in exec_data

    # Get task detail
    resp_detail = await client.get(f"/api/v1/tasks/{task_id}")
    assert resp_detail.status_code == 200
    detail_data = resp_detail.json()
    assert detail_data["id"] == task_id
    assert detail_data["status"] == exec_data["status"]

