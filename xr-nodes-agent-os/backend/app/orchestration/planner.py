"""PlannerEngine — Deconstructs high-level objectives into structured multi-step plans."""
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional
from pydantic import BaseModel

from app.agents.registry import agent_registry
from app.core.logging import get_logger

logger = get_logger(__name__)


class TaskStepSpec(BaseModel):
    step_index: int
    agent_name: str
    action: str
    description: str
    input_params: Dict[str, Any] = {}


class TaskPlan(BaseModel):
    objective: str
    steps: List[TaskStepSpec]
    estimated_duration_seconds: int = 60


class PlannerEngine:
    """Deconstructs user objectives into actionable agent execution plans."""

    async def create_plan(self, objective: str) -> TaskPlan:
        logger.info("Generating execution plan for objective: '%s'", objective)
        obj_lower = objective.lower()

        steps: List[TaskStepSpec] = []
        step_idx = 1

        # Rule-based intelligent planning
        if any(kw in obj_lower for kw in ["atomize", "extract", "concept"]):
            steps = [
                TaskStepSpec(step_index=1, agent_name="atomizer-agent", action="extract", description="Extract atomic concepts", input_params={"objective": objective}),
                TaskStepSpec(step_index=2, agent_name="linker-agent", action="link", description="Link concepts", input_params={"objective": objective})
            ]
            step_idx = 3
        elif any(kw in obj_lower for kw in ["audit", "check", "validate", "health"]):
            steps = [
                TaskStepSpec(step_index=1, agent_name="maintenance-agent", action="audit", description="Audit vault health", input_params={"objective": objective})
            ]
            step_idx = 2
        elif any(kw in obj_lower for kw in ["write", "synthesize", "article"]):
            steps = [
                TaskStepSpec(step_index=1, agent_name="research-agent", action="gather", description="Gather info", input_params={"objective": objective}),
                TaskStepSpec(step_index=2, agent_name="writer-agent", action="write", description="Write article", input_params={"objective": objective})
            ]
            step_idx = 3
        elif any(kw in obj_lower for kw in ["ingest", "youtube", "video"]):
            steps = [
                TaskStepSpec(step_index=1, agent_name="ingestion-agent", action="ingest_video", description="Ingest video transcript", input_params={"objective": objective}),
                TaskStepSpec(step_index=2, agent_name="atomizer-agent", action="atomize", description="Atomize transcript", input_params={"objective": objective})
            ]
            step_idx = 3
        elif "research" in obj_lower or "neural" in obj_lower or "transformer" in obj_lower:
            steps.append(TaskStepSpec(
                step_index=step_idx,
                agent_name="research-agent",
                action="research_topic",
                description=f"Research context and claims for: {objective}",
                input_params={"topic": objective}
            ))
            step_idx += 1

            steps.append(TaskStepSpec(
                step_index=step_idx,
                agent_name="atomizer-agent",
                action="atomize_knowledge",
                description="Extract atomic concept notes following Frontmatter Schema v4",
                input_params={"objective": objective}
            ))
            step_idx += 1

            steps.append(TaskStepSpec(
                step_index=step_idx,
                agent_name="linker-agent",
                action="link_concepts",
                description="Discover relationships and update MOC links",
                input_params={"objective": objective}
            ))
            step_idx += 1

            steps.append(TaskStepSpec(
                step_index=step_idx,
                agent_name="review-agent",
                action="verify_result",
                description="Audit created notes against quality rubric",
                input_params={"objective": objective}
            ))
            step_idx += 1
        else:
            # General task plan
            steps.append(TaskStepSpec(
                step_index=step_idx,
                agent_name="planner-agent",
                action="analyze_objective",
                description=f"Analyze and process: {objective}",
                input_params={"objective": objective}
            ))
            step_idx += 1

        return TaskPlan(objective=objective, steps=steps, estimated_duration_seconds=step_idx * 30)

    def list_available_pipelines(self) -> List[str]:
        return ["atomizer", "maintenance", "writing", "ingestion", "research", "general"]


planner_engine = PlannerEngine()
