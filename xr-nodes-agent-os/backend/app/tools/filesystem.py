"""Filesystem tools: file.read, file.write, file.search, directory.list."""
from __future__ import annotations

import os
from pathlib import Path
from typing import Any, Dict, List

from app.core.config import settings
from app.tools.base import BaseTool, RiskLevel, ToolResult
from app.tools.registry import tool_registry


class FileReadTool(BaseTool):
    def __init__(self):
        super().__init__(
            name="file.read",
            description="Read content of a text file from the filesystem or vault.",
            risk_level=RiskLevel.LOW,
            parameters={
                "type": "object",
                "properties": {
                    "path": {"type": "string", "description": "Absolute or workspace-relative path"}
                },
                "required": ["path"]
            }
        )

    async def execute(self, path: str, **kwargs: Any) -> ToolResult:
        file_path = Path(path)
        if not file_path.is_absolute():
            file_path = settings.VAULT_PATH / path

        if not file_path.exists():
            return ToolResult(tool_name=self.name, success=False, output=None, error=f"File not found: {file_path}")

        try:
            content = file_path.read_text(encoding="utf-8")
            return ToolResult(tool_name=self.name, success=True, output=content, metadata={"path": str(file_path)})
        except Exception as e:
            return ToolResult(tool_name=self.name, success=False, output=None, error=str(e))


class FileWriteTool(BaseTool):
    def __init__(self):
        super().__init__(
            name="file.write",
            description="Write text content to a file.",
            risk_level=RiskLevel.MEDIUM,
            parameters={
                "type": "object",
                "properties": {
                    "path": {"type": "string", "description": "Target file path"},
                    "content": {"type": "string", "description": "Text content to write"}
                },
                "required": ["path", "content"]
            }
        )

    async def execute(self, path: str, content: str, **kwargs: Any) -> ToolResult:
        file_path = Path(path)
        if not file_path.is_absolute():
            file_path = settings.VAULT_PATH / path

        try:
            file_path.parent.mkdir(parents=True, exist_ok=True)
            file_path.write_text(content, encoding="utf-8")
            return ToolResult(tool_name=self.name, success=True, output=f"Wrote {len(content)} bytes to {file_path.name}", metadata={"path": str(file_path)})
        except Exception as e:
            return ToolResult(tool_name=self.name, success=False, output=None, error=str(e))


class DirectoryListTool(BaseTool):
    def __init__(self):
        super().__init__(
            name="directory.list",
            description="List contents of a directory.",
            risk_level=RiskLevel.LOW,
            parameters={
                "type": "object",
                "properties": {
                    "path": {"type": "string", "description": "Directory path (defaults to vault root)"}
                }
            }
        )

    async def execute(self, path: str = ".", **kwargs: Any) -> ToolResult:
        dir_path = Path(path)
        if not dir_path.is_absolute():
            dir_path = settings.VAULT_PATH / path

        if not dir_path.exists() or not dir_path.is_dir():
            return ToolResult(tool_name=self.name, success=False, output=None, error=f"Directory not found: {dir_path}")

        try:
            items = []
            for item in sorted(dir_path.iterdir()):
                items.append({
                    "name": item.name,
                    "is_dir": item.is_dir(),
                    "size_bytes": item.stat().st_size if item.is_file() else 0
                })
            return ToolResult(tool_name=self.name, success=True, output=items, metadata={"count": len(items)})
        except Exception as e:
            return ToolResult(tool_name=self.name, success=False, output=None, error=str(e))


# Register filesystem tools
tool_registry.register(FileReadTool())
tool_registry.register(FileWriteTool())
tool_registry.register(DirectoryListTool())
