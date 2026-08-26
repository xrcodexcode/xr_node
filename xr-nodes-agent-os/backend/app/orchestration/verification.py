"""ResultVerifier — Verifies task execution outcomes."""
from __future__ import annotations

from typing import Any, Dict
from app.core.logging import get_logger

logger = get_logger(__name__)


class ResultVerifier:
    """Verifies output quality before completing a task."""

    async def verify(self, objective: str, step_results: list[Dict[str, Any]]) -> Dict[str, Any]:
        if not step_results:
            return {"passed": False, "score": 0, "checks": ["No step execution results produced."], "recommendations": ["Run steps before verification"]}

        failed_steps = [r for r in step_results if r.get("status") == "failed"]
        if failed_steps:
            return {"passed": False, "score": 0, "checks": [f"{len(failed_steps)} step(s) failed."], "recommendations": ["Fix failing steps"]}

        checks = []
        score = 100
        obj_keywords = [w.lower() for w in objective.split() if len(w) > 3]

        for step in step_results:
            output = str(step.get("output", ""))
            if not output:
                checks.append(f"Step {step.get('id', 'unknown')} has empty output.")
                score -= 30
            else:
                checks.append(f"Step {step.get('id', 'unknown')} has non-empty output.")
                if len(output) < 50:
                    checks.append(f"Step {step.get('id', 'unknown')} output is very short.")
                    score -= 20
                if obj_keywords and not any(kw in output.lower() for kw in obj_keywords):
                    checks.append(f"Step {step.get('id', 'unknown')} output does not mention objective keywords.")
                    score -= 10

        score = max(0, score)
        return {
            "passed": score >= 70,
            "score": score,
            "checks": checks,
            "recommendations": ["Expand output length"] if score < 100 else []
        }

result_verifier = ResultVerifier()
