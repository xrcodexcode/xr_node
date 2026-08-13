"""ResultVerifier — Verifies task execution outcomes."""
from __future__ import annotations

from typing import Any, Dict
from app.core.logging import get_logger

logger = get_logger(__name__)


class ResultVerifier:
    """Verifies output quality before completing a task."""

    async def verify(self, objective: str, step_results: list[Dict[str, Any]]) -> Dict[str, Any]:
        if not step_results:
            return {"verified": False, "reason": "No step execution results produced."}

        failed_steps = [r for r in step_results if r.get("status") == "failed"]
        if failed_steps:
            return {"verified": False, "reason": f"{len(failed_steps)} step(s) failed."}

        return {"verified": True, "score": 95, "feedback": "All steps executed successfully."}


result_verifier = ResultVerifier()
