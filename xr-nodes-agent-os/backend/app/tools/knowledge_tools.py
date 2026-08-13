"""Knowledge tools: knowledge.search, knowledge.create, knowledge.link."""
from __future__ import annotations

from pathlib import Path
from typing import Any, List

from app.core.config import settings
from app.tools.base import BaseTool, RiskLevel, ToolResult
from app.tools.registry import tool_registry


class KnowledgeSearchTool(BaseTool):
    def __init__(self):
        super().__init__(
            name="knowledge.search",
            description="Search markdown notes across NODES/, NOTES/, and 03_MOC/.",
            risk_level=RiskLevel.LOW,
            parameters={
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Search keyword or term"}
                },
                "required": ["query"]
            }
        )

    async def execute(self, query: str, **kwargs: Any) -> ToolResult:
        query_lower = query.lower()
        results = []

        scan_dirs = [settings.vault_nodes, settings.vault_notes, settings.vault_mocs]
        for dir_path in scan_dirs:
            if not dir_path.exists():
                continue
            for md_file in dir_path.glob("*.md"):
                try:
                    text = md_file.read_text(encoding="utf-8")
                    if query_lower in md_file.name.lower() or query_lower in text.lower():
                        results.append({
                            "title": md_file.stem,
                            "path": str(md_file.relative_to(settings.VAULT_PATH)),
                            "folder": dir_path.name
                        })
                        if len(results) >= 20:
                            break
                except Exception:
                    pass

        return ToolResult(tool_name=self.name, success=True, output=results, metadata={"count": len(results)})


class KnowledgeCreateTool(BaseTool):
    def __init__(self):
        super().__init__(
            name="knowledge.create",
            description="Create a new atomic note in NODES/.",
            risk_level=RiskLevel.MEDIUM,
            parameters={
                "type": "object",
                "properties": {
                    "title": {"type": "string", "description": "Canonical Title Case title"},
                    "content": {"type": "string", "description": "Markdown body content"}
                },
                "required": ["title", "content"]
            }
        )

    async def execute(self, title: str, content: str, **kwargs: Any) -> ToolResult:
        filename = f"{title}.md"
        target_path = settings.vault_nodes / filename

        if target_path.exists():
            return ToolResult(tool_name=self.name, success=False, output=None, error=f"Note '{title}' already exists in NODES/.")

        try:
            target_path.parent.mkdir(parents=True, exist_ok=True)
            target_path.write_text(content, encoding="utf-8")
            return ToolResult(tool_name=self.name, success=True, output=f"Created atomic note '{title}'", metadata={"path": str(target_path)})
        except Exception as e:
            return ToolResult(tool_name=self.name, success=False, output=None, error=str(e))


tool_registry.register(KnowledgeSearchTool())
tool_registry.register(KnowledgeCreateTool())
