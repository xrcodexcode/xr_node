"""Native wrapper around existing Python automations in .antigravity/automations/."""
from __future__ import annotations

import asyncio
import sys
from typing import Any, Dict

from app.core.config import settings
from app.core.logging import get_logger

logger = get_logger(__name__)


class AutomationsWrapper:
    """Interface for invoking existing python automation scripts in .antigravity/automations/."""

    def __init__(self):
        self.automations_dir = settings.vault_antigravity / "automations"

    async def run_automation(self, script_name: str) -> Dict[str, Any]:
        script_path = self.automations_dir / f"{script_name}.py"
        if not script_path.exists():
            return {"success": False, "error": f"Automation script '{script_name}.py' not found."}

        try:
            proc = await asyncio.create_subprocess_exec(
                sys.executable,
                str(script_path),
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
                cwd=str(settings.VAULT_PATH)
            )
            stdout, stderr = await proc.communicate()
            return {
                "success": (proc.returncode == 0),
                "stdout": stdout.decode("utf-8", errors="replace"),
                "stderr": stderr.decode("utf-8", errors="replace"),
                "returncode": proc.returncode,
            }
        except Exception as e:
            return {"success": False, "error": str(e)}


automations_wrapper = AutomationsWrapper()
