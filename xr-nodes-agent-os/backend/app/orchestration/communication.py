"""Agent Message Bus for structured inter-agent messaging."""
from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional


@dataclass
class AgentMessage:
    from_agent: str
    to_agent: str
    message_type: str  # "research_result", "concept_draft", "review_feedback"
    payload: Dict[str, Any] = field(default_factory=dict)
    task_id: Optional[str] = None
    timestamp: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class AgentMessageBus:
    """In-memory channel for agent communication during task execution."""

    def __init__(self):
        self._messages: List[AgentMessage] = []

    def send_message(self, msg: AgentMessage) -> None:
        self._messages.append(msg)

    def get_messages_for_task(self, task_id: str) -> List[AgentMessage]:
        return [m for m in self._messages if m.task_id == task_id]


agent_message_bus = AgentMessageBus()
