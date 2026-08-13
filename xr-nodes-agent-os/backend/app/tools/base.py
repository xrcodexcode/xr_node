"""BaseTool abstract class and schemas."""
from __future__ import annotations

from abc import ABC, abstractmethod
from enum import Enum
from typing import Any, Dict, Optional
from pydantic import BaseModel, Field


class RiskLevel(str, Enum):
    LOW = "low"          # Read operations, safe queries (auto-approved)
    MEDIUM = "medium"    # Workspace file writes, non-destructive mutations
    HIGH = "high"        # File deletions, git commits, sandboxed shell execution
    CRITICAL = "critical"# Destructive system commands, mass file deletions


class ToolResult(BaseModel):
    tool_name: str
    success: bool
    output: Any
    error: Optional[str] = None
    duration_ms: float = 0.0
    metadata: Dict[str, Any] = Field(default_factory=dict)


class BaseTool(ABC):
    """Abstract Base Class for all tools in XR-NODES Agent OS."""

    def __init__(
        self,
        name: str,
        description: str,
        risk_level: RiskLevel = RiskLevel.LOW,
        parameters: Optional[Dict[str, Any]] = None,
        timeout_seconds: float = 30.0,
    ):
        self.name = name
        self.description = description
        self.risk_level = risk_level
        self.parameters = parameters or {"type": "object", "properties": {}}
        self.timeout_seconds = timeout_seconds

    @abstractmethod
    async def execute(self, **kwargs: Any) -> ToolResult:
        """Execute the tool action with given parameters."""
        pass

    def to_dict(self) -> Dict[str, Any]:
        return {
            "name": self.name,
            "description": self.description,
            "risk_level": self.risk_level.value,
            "parameters": self.parameters,
            "timeout_seconds": self.timeout_seconds,
        }
