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


class WebSearchTool(BaseTool):
    def __init__(self):
        super().__init__(
            name="web.search",
            description="Search the web for information or queries.",
            risk_level=RiskLevel.LOW,
            parameters={
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Search query string"}
                },
                "required": ["query"]
            }
        )

    async def execute(self, query: str, **kwargs: Any) -> ToolResult:
        # Mock/safe web search provider
        results = [
            {
                "title": f"Information regarding {query}",
                "snippet": f"Summary and analysis regarding {query}.",
                "url": f"https://en.wikipedia.org/wiki/{query.replace(' ', '_')}"
            }
        ]
        return ToolResult(
            tool_name=self.name,
            success=True,
            output=results,
            metadata={"query": query, "count": len(results)}
        )


tool_registry.register(WebFetchTool())
tool_registry.register(WebSearchTool())
