"""Orchestrator — Central engine coordinating multi-agent execution."""
from __future__ import annotations

import json
from datetime import datetime, timezone
from typing import Any, Dict, Optional
from uuid import uuid4

from app.agents.registry import agent_registry
from app.agents.runner import AgentRunner
from app.core.events import Event, event_bus
from app.core.logging import get_logger
from app.database.engine import async_session_factory
from app.database.models import Task, TaskStep, EventLog
from app.orchestration.planner import planner_engine
from app.orchestration.state import TaskStatus, can_transition
from app.orchestration.verification import result_verifier

logger = get_logger(__name__)


class Orchestrator:
    """Central orchestrator for task planning, execution, and state management."""

    async def create_task(self, title: str, description: Optional[str] = None) -> Dict[str, Any]:
        task_id = str(uuid4())
        now = datetime.now(timezone.utc)

        async with async_session_factory() as session:
            task = Task(
                id=task_id,
                title=title,
                description=description or title,
                status=TaskStatus.CREATED.value,
                created_at=now,
            )
            session.add(task)
            await session.commit()

        await event_bus.emit(Event(type="task.created", source="orchestrator", payload={"task_id": task_id, "title": title}))
        logger.info("Created task '%s' [id=%s]", title, task_id)
        return {"task_id": task_id, "title": title, "status": TaskStatus.CREATED.value}

    async def run_task(self, task_id: str) -> Dict[str, Any]:
        logger.info("Starting execution for task [id=%s]", task_id)

        async with async_session_factory() as session:
            task = await session.get(Task, task_id)
            if not task:
                return {"success": False, "error": f"Task '{task_id}' not found"}

            objective = task.description or task.title
            plan = await planner_engine.create_plan(objective)

            task.status = TaskStatus.PLANNING.value
            task.plan_json = plan.model_dump_json()
            task.started_at = datetime.now(timezone.utc)
            await session.commit()

            # Populate task_steps
            for step_spec in plan.steps:
                agent = agent_registry.get(step_spec.agent_name)
                step = TaskStep(
                    id=str(uuid4()),
                    task_id=task_id,
                    step_index=step_spec.step_index,
                    agent_id=agent.spec.name if agent else None,
                    status="pending",
                    action=step_spec.action,
                    input_json=json.dumps(step_spec.input_params),
                )
                session.add(step)
            await session.commit()

        # Step 2: Running Steps
        step_results = []
        for step_spec in plan.steps:
            agent = agent_registry.get(step_spec.agent_name)
            if not agent:
                logger.warning("Agent '%s' not found for step %d", step_spec.agent_name, step_spec.step_index)
                continue

            runner = AgentRunner(agent)
            res = await runner.run(prompt=step_spec.description, task_id=task_id)
            step_results.append({
                "step_index": step_spec.step_index,
                "agent": step_spec.agent_name,
                "status": res.status,
                "output": res.output,
            })

        # Step 3: Verification
        verification = await result_verifier.verify(plan.objective, step_results)

        final_status = TaskStatus.COMPLETED.value if verification["verified"] else TaskStatus.FAILED.value
        now = datetime.now(timezone.utc)

        async with async_session_factory() as session:
            task = await session.get(Task, task_id)
            if task:
                task.status = final_status
                task.result_json = json.dumps({"verification": verification, "steps": step_results})
                task.completed_at = now
                await session.commit()

        await event_bus.emit(Event(type="task.completed" if verification["verified"] else "task.failed", source="orchestrator", payload={"task_id": task_id, "status": final_status}))

        return {
            "task_id": task_id,
            "status": final_status,
            "verification": verification,
            "steps_completed": len(step_results),
        }


orchestrator = Orchestrator()
