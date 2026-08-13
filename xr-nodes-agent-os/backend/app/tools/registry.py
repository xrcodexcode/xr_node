"""ToolRegistry — Global registry for system tools."""
from __future__ import annotations

from typing import Dict, List, Optional
from app.core.logging import get_logger
from app.tools.base import BaseTool

logger = get_logger(__name__)


class ToolRegistry:
    """Central registry of registered tools."""

    def __init__(self):
        self._tools: Dict[str, BaseTool] = {}

    def register(self, tool: BaseTool) -> None:
        self._tools[tool.name] = tool
        logger.debug("Registered tool: %s", tool.name)

    def get(self, name: str) -> Optional[BaseTool]:
        return self._tools.get(name)

    def list_tools(self) -> List[BaseTool]:
        return list(self._tools.values())


tool_registry = ToolRegistry()

# Ensure default tools are imported and registered
import app.tools  # noqa: F401

