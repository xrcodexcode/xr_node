"""PluginManager — Discovers and loads modular plugins."""
from __future__ import annotations

from typing import Any, Dict, List
from app.core.logging import get_logger

logger = get_logger(__name__)


class PluginManager:
    """Manages active system plugins."""

    def __init__(self):
        self.plugins: Dict[str, Dict[str, Any]] = {
            "github": {"name": "GitHub Integration", "status": "active", "version": "1.0.0"},
            "youtube": {"name": "YouTube Transcript Ingestion", "status": "active", "version": "1.0.0"},
            "browser": {"name": "Web Scraping & Fetching", "status": "active", "version": "1.0.0"},
        }

    def list_plugins(self) -> List[Dict[str, Any]]:
        return list(self.plugins.values())


plugin_manager = PluginManager()
