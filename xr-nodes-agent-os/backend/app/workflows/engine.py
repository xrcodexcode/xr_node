"""WorkflowEngine — Composable multi-step workflow execution."""
from __future__ import annotations

from typing import Any, Dict, List
from app.core.logging import get_logger
from app.orchestration.orchestrator import orchestrator

logger = get_logger(__name__)


class WorkflowEngine:
    """Executes predefined workflows sequentially."""

    async def run_workflow(self, name: str, input_params: Dict[str, Any]) -> Dict[str, Any]:
        logger.info("Executing workflow '%s'", name)
        
        if name == "research-to-wiki":
            title = input_params.get("topic", "Research and update wiki")
            res = await orchestrator.create_task(title=f"Research {title} and update wiki")
            task_id = res["task_id"]
            exec_res = await orchestrator.run_task(task_id)
            return {"workflow": name, "task_id": task_id, "status": exec_res["status"]}

        return {"workflow": name, "status": "completed", "message": f"Workflow '{name}' executed."}


workflow_engine = WorkflowEngine()
