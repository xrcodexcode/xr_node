"""Git integration tools: git.status, git.diff, git.commit."""
from __future__ import annotations

import asyncio
from typing import Any

from app.core.config import settings
from app.tools.base import BaseTool, RiskLevel, ToolResult
from app.tools.registry import tool_registry


class GitStatusTool(BaseTool):
    def __init__(self):
        super().__init__(
            name="git.status",
            description="Check working tree status of the git repository.",
            risk_level=RiskLevel.LOW,
        )

    async def execute(self, **kwargs: Any) -> ToolResult:
        try:
            proc = await asyncio.create_subprocess_exec(
                "git", "status", "--short",
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
                cwd=str(settings.VAULT_PATH)
            )
            stdout, stderr = await proc.communicate()
            return ToolResult(
                tool_name=self.name,
                success=(proc.returncode == 0),
                output=stdout.decode("utf-8", errors="replace"),
                error=stderr.decode("utf-8", errors="replace") if proc.returncode != 0 else None
            )
        except Exception as e:
            return ToolResult(tool_name=self.name, success=False, output=None, error=str(e))


tool_registry.register(GitStatusTool())
