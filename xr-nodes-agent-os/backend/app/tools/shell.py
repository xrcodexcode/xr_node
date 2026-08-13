"""Sandboxed shell execution tool with command denylist."""
from __future__ import annotations

import asyncio
import shlex
import sys
from typing import Any

from app.core.config import settings
from app.tools.base import BaseTool, RiskLevel, ToolResult
from app.tools.registry import tool_registry


class ShellExecuteTool(BaseTool):
    def __init__(self):
        super().__init__(
            name="shell.execute",
            description="Execute a sandboxed shell command.",
            risk_level=RiskLevel.HIGH,
            parameters={
                "type": "object",
                "properties": {
                    "command": {"type": "string", "description": "Command string to execute"}
                },
                "required": ["command"]
            },
            timeout_seconds=60.0
        )
        self.denied_commands = {"rm", "del", "rmdir", "format", "shutdown", "mkfs", "dd"}

    async def execute(self, command: str, **kwargs: Any) -> ToolResult:
        first_word = command.strip().split()[0].lower() if command.strip() else ""
        if first_word in self.denied_commands:
            return ToolResult(
                tool_name=self.name,
                success=False,
                output=None,
                error=f"Forbidden command '{first_word}' in denylist."
            )

        try:
            proc = await asyncio.create_subprocess_shell(
                command,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
                cwd=str(settings.VAULT_PATH)
            )
            stdout, stderr = await proc.communicate()
            out_str = stdout.decode("utf-8", errors="replace")
            err_str = stderr.decode("utf-8", errors="replace")

            success = (proc.returncode == 0)
            output_content = out_str if success else (out_str + "\nSTDERR:\n" + err_str)

            return ToolResult(
                tool_name=self.name,
                success=success,
                output=output_content,
                metadata={"returncode": proc.returncode}
            )
        except Exception as e:
            return ToolResult(tool_name=self.name, success=False, output=None, error=str(e))


tool_registry.register(ShellExecuteTool())
