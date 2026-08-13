"""BaseAgent class definition."""
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class AgentSpec(BaseModel):
    name: str
    description: str
    type: str = "general"
    status: str = "active"
    instructions: str = ""
    capabilities: List[str] = Field(default_factory=list)
    tools: List[str] = Field(default_factory=list)
    permissions: Dict[str, str] = Field(default_factory=lambda: {"filesystem": "read", "shell": "none"})
    model: Dict[str, str] = Field(default_factory=lambda: {"provider": "configurable", "model": "configurable"})


@dataclass
class AgentResult:
    agent_name: str
    task_id: Optional[str]
    status: str  # "completed", "failed", "cancelled"
    output: str
    steps_taken: int = 0
    token_usage: Dict[str, int] = field(default_factory=lambda: {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0})
    tool_calls: List[Dict[str, Any]] = field(default_factory=list)
    error: Optional[str] = None


class BaseAgent:
    """Base implementation of an Agent in XR-NODES Agent OS."""

    def __init__(self, spec: AgentSpec):
        self.spec = spec
        self.name = spec.name
        self.description = spec.description
        self.type = spec.type
        self.instructions = spec.instructions
        self.capabilities = spec.capabilities
        self.tools = spec.tools
        self.permissions = spec.permissions
        self.model_policy = spec.model

    def to_dict(self) -> Dict[str, Any]:
        return self.spec.model_dump()
