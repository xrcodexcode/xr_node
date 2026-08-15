"""ToolRegistry — Global registry for system tools.

Importing this module does NOT auto-register tools (that would create a
circular import with the tool subclasses). Call :func:`register_default_tools`
once at application startup, or rely on the :data:`DEFAULT_TOOLS_LOADED`
flag set by :func:`ensure_default_tools_loaded`.
"""
from __future__ import annotations

from typing import Any, Dict, Iterable, List, Optional

from app.core.logging import get_logger
from app.tools.base import BaseTool

logger = get_logger(__name__)


class ToolRegistry:
    """Central registry of registered tools."""

    def __init__(self) -> None:
        self._tools: Dict[str, BaseTool] = {}

    # ------------------------------------------------------------------ register
    def register(self, tool: BaseTool) -> None:
        """Register a tool instance. Overwrites if a tool with the same name exists."""
        self._tools[tool.name] = tool
        logger.debug("Registered tool: %s", tool.name)

    def register_many(self, tools: Iterable[BaseTool]) -> None:
        for tool in tools:
            self.register(tool)

    # --------------------------------------------------------------------- query
    @staticmethod
    def _normalize(name: str) -> str:
        return name.strip().replace("_", ".").lower() if name else ""

    def get(self, name: str) -> Optional[BaseTool]:
        if not name:
            return None
        if name in self._tools:
            return self._tools[name]
        norm = self._normalize(name)
        for k, v in self._tools.items():
            if self._normalize(k) == norm:
                return v
        return None

    def list_tools(self) -> List[BaseTool]:
        return list(self._tools.values())

    def list_names(self) -> List[str]:
        return sorted(self._tools.keys())

    # ----------------------------------------------------------------- providers
    def to_provider_specs(self) -> List[Dict[str, Any]]:
        """Return tool specs in OpenAI-compatible ``tools`` schema.

        Each entry is ``{"type": "function", "function": {...}}``.
        """
        specs: List[Dict[str, Any]] = []
        for tool in self.list_tools():
            specs.append({
                "type": "function",
                "function": {
                    "name": tool.name,
                    "description": tool.description,
                    "parameters": tool.parameters or {"type": "object", "properties": {}},
                },
            })
        return specs

    def filter_for_agent(self, agent_tool_names: Optional[List[str]]) -> List[BaseTool]:
        """Return only tools the agent is allowed to use (per its spec)."""
        if not agent_tool_names:
            return []
        matched: List[BaseTool] = []
        for n in agent_tool_names:
            tool = self.get(n)
            if tool and tool not in matched:
                matched.append(tool)
        return matched


# Singleton registry instance
tool_registry = ToolRegistry()

DEFAULT_TOOLS_LOADED = False


def ensure_default_tools_loaded() -> None:
    """Idempotently import and register all built-in tool modules.

    Safe to call multiple times. Resolves the circular import between
    ``registry`` and the individual tool submodules by importing them only
    after ``tool_registry`` has been defined.
    """
    global DEFAULT_TOOLS_LOADED
    if DEFAULT_TOOLS_LOADED:
        return

    from app.tools import filesystem, git, knowledge_tools, shell, web  # noqa: F401
    DEFAULT_TOOLS_LOADED = True
    logger.debug("Default tools registered: %s", tool_registry.list_names())
