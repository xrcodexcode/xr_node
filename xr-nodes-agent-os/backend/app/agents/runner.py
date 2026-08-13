"""AgentRunner — Handles execution of an agent against a prompt or task."""
from __future__ import annotations

from typing import Any, Dict, Optional
from app.agents.base import BaseAgent, AgentResult
from app.core.logging import get_logger
from app.models.base import ModelMessage
from app.models.router import model_router

logger = get_logger(__name__)


class AgentRunner:
    """Executes single-agent reasoning and tool interaction loops."""

    def __init__(self, agent: BaseAgent):
        self.agent = agent

    async def run(
        self,
        prompt: str,
        task_id: Optional[str] = None,
        context: Optional[Dict[str, Any]] = None,
    ) -> AgentResult:
        logger.info("Executing agent '%s' [task_id=%s]", self.agent.name, task_id)

        system_message = (
            f"You are {self.agent.name}.\n"
            f"Description: {self.agent.description}\n"
            f"Instructions:\n{self.agent.instructions}\n"
        )

        messages = [
            ModelMessage(role="system", content=system_message),
            ModelMessage(role="user", content=prompt),
        ]

        # Call ModelRouter to generate response
        try:
            response = await model_router.generate(
                messages=messages,
                task_type=self.agent.type,
            )

            return AgentResult(
                agent_name=self.agent.name,
                task_id=task_id,
                status="completed",
                output=response.content,
                steps_taken=1,
                token_usage=response.usage,
                tool_calls=[],
            )
        except Exception as e:
            logger.exception("Agent '%s' execution failed: %s", self.agent.name, e)
            return AgentResult(
                agent_name=self.agent.name,
                task_id=task_id,
                status="failed",
                output="",
                steps_taken=1,
                error=str(e),
            )
