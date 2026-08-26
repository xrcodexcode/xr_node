"""PluginManager — Discovers and loads modular plugins."""
from __future__ import annotations

import os
import yaml
from pathlib import Path
from typing import Any, Dict, List
from app.core.logging import get_logger

logger = get_logger(__name__)


class PluginManager:
    """Manages active system plugins."""

    def __init__(self):
        self.plugins_dir = Path(".antigravity/plugins")
        self._plugins: Dict[str, Dict[str, Any]] = {}
        self._load_plugins()

    def _load_plugins(self):
        if not self.plugins_dir.exists():
            logger.warning("Plugins directory not found.")
            return

        for entry in os.scandir(self.plugins_dir):
            if entry.is_dir():
                manifest_path = Path(entry.path) / "plugin.yaml"
                if manifest_path.exists():
                    try:
                        with open(manifest_path, "r", encoding="utf-8") as f:
                            manifest = yaml.safe_load(f)
                            if manifest and "name" in manifest:
                                name = manifest.get("name")
                                self._plugins[name] = manifest
                    except Exception as e:
                        logger.error(f"Error loading plugin manifest {manifest_path}: {e}")

    def get_plugin(self, name: str) -> Dict[str, Any]:
        return self._plugins.get(name)

    def list_plugins(self) -> List[Dict[str, Any]]:
        return list(self._plugins.values())


plugin_manager = PluginManager()
