"""Web research tools: web.search, web.fetch."""
from __future__ import annotations

from typing import Any
import httpx

from app.tools.base import BaseTool, RiskLevel, ToolResult
from app.tools.registry import tool_registry


class WebFetchTool(BaseTool):
    def __init__(self):
        super().__init__(
            name="web.fetch",
            description="Fetch content from a web URL.",
            risk_level=RiskLevel.LOW,
            parameters={
                "type": "object",
                "properties": {
                    "url": {"type": "string", "description": "URL to fetch"}
                },
                "required": ["url"]
            }
        )

    async def execute(self, url: str, **kwargs: Any) -> ToolResult:
        try:
            async with httpx.AsyncClient(timeout=15.0, follow_redirects=True) as client:
                resp = await client.get(url)
                resp.raise_for_status()
                return ToolResult(tool_name=self.name, success=True, output=resp.text[:5000], metadata={"status_code": resp.status_code})
        except Exception as e:
            return ToolResult(tool_name=self.name, success=False, output=None, error=str(e))


tool_registry.register(WebFetchTool())
