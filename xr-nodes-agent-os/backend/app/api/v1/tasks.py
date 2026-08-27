"""API endpoints for Task management and Orchestration."""
from __future__ import annotations

from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlalchemy import select

from app.database.engine import async_session_factory
from app.database.models import Task
from app.orchestration.orchestrator import orchestrator

router = APIRouter(prefix="/tasks", tags=["Tasks"])


class CreateTaskRequest(BaseModel):
    title: str
    description: Optional[str] = None


class TaskResponse(BaseModel):
    id: str
    title: str
    description: Optional[str] = None
    status: str
    created_at: str


@router.post("", response_model=Dict[str, Any])
async def create_task(req: CreateTaskRequest) -> Dict[str, Any]:
    """Create a new task."""
    return await orchestrator.create_task(title=req.title, description=req.description)


@router.post("/{task_id}/execute", response_model=Dict[str, Any])
async def execute_task(task_id: str) -> Dict[str, Any]:
    """Execute a task end-to-end via orchestrator."""
    res = await orchestrator.run_task(task_id)
    if "error" in res:
        raise HTTPException(status_code=404, detail=res["error"])
    return res


@router.get("", response_model=List[Dict[str, Any]])
async def list_tasks() -> List[Dict[str, Any]]:
    """List all tasks."""
    async with async_session_factory() as session:
        result = await session.execute(select(Task).order_by(Task.created_at.desc()))
        tasks = result.scalars().all()
        return [
            {
                "id": t.id,
                "title": t.title,
                "description": t.description,
                "status": t.status,
                "created_at": t.created_at.isoformat() if t.created_at else "",
            }
            for t in tasks
        ]


@router.get("/{task_id}")
async def get_task(task_id: str) -> Dict[str, Any]:
    """Get detailed task information."""
    async with async_session_factory() as session:
        task = await session.get(Task, task_id)
        if not task:
            raise HTTPException(status_code=404, detail=f"Task '{task_id}' not found")
        return {
            "id": task.id,
            "title": task.title,
            "description": task.description,
            "status": task.status,
            "plan": task.plan_json,
            "result": task.result_json,
            "created_at": task.created_at.isoformat() if task.created_at else "",
        }

@router.post("/{task_id}/cancel")
async def cancel_task(task_id: str) -> Dict[str, Any]:
    """Cancel a task."""
    async with async_session_factory() as session:
        task = await session.get(Task, task_id)
        if not task:
            raise HTTPException(status_code=404, detail=f"Task '{task_id}' not found")
        task.status = "cancelled"
        await session.commit()
        return {"id": task.id, "status": task.status}

@router.post("/{task_id}/rerun")
async def rerun_task(task_id: str) -> Dict[str, Any]:
    """Rerun a task."""
    async with async_session_factory() as session:
        task = await session.get(Task, task_id)
        if not task:
            raise HTTPException(status_code=404, detail=f"Task '{task_id}' not found")
        title = task.title
        description = task.description
    
    new_task = await orchestrator.create_task(title=title, description=description)
    res = await orchestrator.run_task(new_task["task_id"])
    if "error" in res:
        raise HTTPException(status_code=500, detail=res["error"])
    return res
