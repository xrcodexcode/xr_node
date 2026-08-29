"""Orchestrator — Central engine coordinating multi-agent execution.

Responsibilities:

* Create :class:`Task` rows.
* Generate a :class:`TaskPlan` via :class:`PlannerEngine`.
* Persist :class:`TaskStep` rows for each plan step.
* Execute steps sequentially through :class:`AgentRunner`.
* Honor ``TaskStatus`` state-machine transitions.
* Retry transient step failures once with a brief backoff.
* Surface ``needs_approval`` outcomes — the task pauses until the
  human approves or denies via the approval queue.
"""
from __future__ import annotations

import asyncio
import json
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional
from uuid import uuid4

from app.agents.registry import agent_registry
from app.agents.runner import AgentRunner
from app.core.events import Event, event_bus
from app.core.logging import get_logger
from app.database.engine import async_session_factory
from app.database.models import Task, TaskStep
from app.orchestration.planner import planner_engine
from app.orchestration.state import TaskStatus, can_transition
from app.orchestration.verification import result_verifier

logger = get_logger(__name__)


class Orchestrator:
    """Central orchestrator for task planning, execution, and state management."""

    # ----------------------------------------------------------------- create
    async def create_task(
        self,
        title: str,
        description: Optional[str] = None,
        priority: str = "normal",
    ) -> Dict[str, Any]:
        task_id = str(uuid4())
        now = datetime.now(timezone.utc)

        async with async_session_factory() as session:
            task = Task(
                id=task_id,
                title=title,
                description=description or title,
                status=TaskStatus.CREATED.value,
                priority=priority,
                created_at=now,
            )
            session.add(task)
            await session.commit()

        await event_bus.emit(Event(
            type="task.created",
            source="orchestrator",
            payload={"task_id": task_id, "title": title, "priority": priority},
        ))
        logger.info("Created task '%s' [id=%s]", title, task_id)
        return {
            "id": task_id,
            "task_id": task_id,
            "title": title,
            "status": TaskStatus.CREATED.value,
            "priority": priority,
        }

    # ------------------------------------------------------------------- run
    async def run_task(self, task_id: str) -> Dict[str, Any]:
        logger.info("Starting execution for task [id=%s]", task_id)

        async with async_session_factory() as session:
            task = await session.get(Task, task_id)
            if not task:
                return {"success": False, "error": f"Task '{task_id}' not found"}

            objective = task.description or task.title
            plan = await planner_engine.create_plan(objective)

            # Move to PLANNING then READY
            task.status = TaskStatus.PLANNING.value
            task.plan_json = plan.model_dump_json()
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

            # Ready to run
            task.status = TaskStatus.READY.value
            await session.commit()

        # --------------------------------------------------------------- execute
        step_results: List[Dict[str, Any]] = []
        any_failed = False
        needs_approval = False

        for step_spec in plan.steps:
            agent = agent_registry.get(step_spec.agent_name)
            if not agent:
                logger.warning(
                    "Agent '%s' not found for step %d — skipping",
                    step_spec.agent_name, step_spec.step_index,
                )
                await self._update_step(
                    task_id, step_spec.step_index,
                    status="skipped", output_json={"reason": "agent_not_registered"},
                )
                any_failed = True
                continue

            runner = AgentRunner(agent)
            res = await self._execute_step_with_retry(
                runner=runner,
                step_spec=step_spec,
                task_id=task_id,
            )

            step_results.append({
                "step_index": step_spec.step_index,
                "agent": step_spec.agent_name,
                "status": res.status,
                "output": res.output,
                "tool_calls": res.tool_calls,
            })

            if res.status == "needs_approval":
                needs_approval = True
                break  # pause task — will resume via run_task() again after approval
            if res.status != "completed":
                any_failed = True

        # --------------------------------------------------------------- verify
        async with async_session_factory() as session:
            task = await session.get(Task, task_id)
            if not task:
                return {"success": False, "error": "Task vanished mid-run"}

            verification = await result_verifier.verify(plan.objective, step_results)

            if needs_approval:
                final_status = TaskStatus.WAITING.value
            elif any_failed:
                final_status = TaskStatus.FAILED.value
            elif verification.get("verified", verification.get("passed", False)):
                final_status = TaskStatus.COMPLETED.value
            else:
                final_status = TaskStatus.FAILED.value

            task.status = final_status
            task.result_json = json.dumps({
                "verification": verification,
                "steps": step_results,
            })
            task.completed_at = datetime.now(timezone.utc)
            await session.commit()

        await event_bus.emit(Event(
            type=(
                "task.completed" if final_status == TaskStatus.COMPLETED.value
                else "task.waiting" if final_status == TaskStatus.WAITING.value
                else "task.failed"
            ),
            source="orchestrator",
            payload={"task_id": task_id, "status": final_status},
        ))

        return {
            "task_id": task_id,
            "status": final_status,
            "verification": verification,
            "steps_completed": len(step_results),
            "needs_approval": needs_approval,
        }

    # ----------------------------------------------------------------- retry
    async def _execute_step_with_retry(
        self,
        runner: AgentRunner,
        step_spec: Any,
        task_id: str,
    ) -> Any:
        """Run a single step; retry once on transient failure."""
        await self._update_step(
            task_id, step_spec.step_index,
            status="running",
            started_at=datetime.now(timezone.utc),
        )

        res = await runner.run(prompt=step_spec.description, task_id=task_id)

        if res.status == "failed":
            logger.warning(
                "Step %d failed (%s) — retrying once",
                step_spec.step_index, res.error,
            )
            await asyncio.sleep(0.5)
            res = await runner.run(prompt=step_spec.description, task_id=task_id)

        await self._update_step(
            task_id, step_spec.step_index,
            status=res.status,
            output_json={
                "output": res.output,
                "tool_calls": res.tool_calls,
                "token_usage": res.token_usage,
            },
            error=res.error,
            completed_at=datetime.now(timezone.utc),
        )
        return res

    async def _update_step(
        self,
        task_id: str,
        step_index: int,
        status: str,
        output_json: Optional[Dict[str, Any]] = None,
        error: Optional[str] = None,
        started_at: Optional[datetime] = None,
        completed_at: Optional[datetime] = None,
    ) -> None:
        from sqlalchemy import select

        async with async_session_factory() as session:
            stmt = (
                select(TaskStep)
                .where(TaskStep.task_id == task_id)
                .where(TaskStep.step_index == step_index)
            )
            step = (await session.execute(stmt)).scalar_one_or_none()
            if not step:
                return
            step.status = status
            if output_json is not None:
                step.output_json = json.dumps(output_json, default=str)
            if error is not None:
                step.error = error
            if started_at is not None:
                step.started_at = started_at
            if completed_at is not None:
                step.completed_at = completed_at
            await session.commit()


orchestrator = Orchestrator()
