"""AgentRegistry — Loads and manages all agent definitions."""
from __future__ import annotations

from pathlib import Path
from typing import Dict, List, Optional
import yaml

from app.agents.base import AgentSpec, BaseAgent
from app.core.config import settings
from app.core.logging import get_logger

logger = get_logger(__name__)

DEFINITIONS_DIR = settings.project_root / "backend" / "app" / "agents" / "definitions"


class AgentRegistry:
    """Registry for managing active agents in the Agent OS."""

    def __init__(self):
        self._agents: Dict[str, BaseAgent] = {}
        self.reload()

    def reload(self) -> None:
        """Load or reload agent YAML definitions from disk."""
        self._agents.clear()
        if not DEFINITIONS_DIR.exists():
            DEFINITIONS_DIR.mkdir(parents=True, exist_ok=True)
            return

        for yml_file in DEFINITIONS_DIR.glob("*.yaml"):
            try:
                with open(yml_file, "r", encoding="utf-8") as f:
                    data = yaml.safe_load(f)
                if data and "name" in data:
                    spec = AgentSpec(**data)
                    agent = BaseAgent(spec)
                    self._agents[agent.name] = agent
                    logger.debug("Loaded agent definition: %s", agent.name)
            except Exception as e:
                logger.error("Failed to load agent definition from %s: %s", yml_file.name, e)

        logger.info("AgentRegistry initialized with %d agents.", len(self._agents))

    def register(self, agent: BaseAgent) -> None:
        self._agents[agent.name] = agent

    def get(self, name: str) -> Optional[BaseAgent]:
        return self._agents.get(name)

    def list_agents(self) -> List[BaseAgent]:
        return list(self._agents.values())


# Global AgentRegistry instance
agent_registry = AgentRegistry()
