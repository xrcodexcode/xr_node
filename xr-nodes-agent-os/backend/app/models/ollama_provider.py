"""Ollama Local ModelProvider implementation."""
from __future__ import annotations

from typing import Any, AsyncGenerator, Dict, List, Optional

import httpx
from app.core.config import settings
from app.core.logging import get_logger
from app.models.base import ModelMessage, ModelProvider, ModelResponse

logger = get_logger(__name__)


class OllamaProvider(ModelProvider):
    """Provider for local Ollama endpoints."""

    def __init__(self, base_url: Optional[str] = None, default_model: str = "llama3.1"):
        super().__init__("ollama", default_model)
        self.base_url = base_url or settings.OLLAMA_BASE_URL

    async def generate(
        self,
        messages: List[ModelMessage],
        model: Optional[str] = None,
        temperature: float = 0.7,
        max_tokens: Optional[int] = None,
        tools: Optional[List[Dict[str, Any]]] = None,
        response_format: Optional[Dict[str, Any]] = None,
    ) -> ModelResponse:
        target_model = model or self.default_model
        payload = {
            "model": target_model,
            "messages": [{"role": m.role, "content": m.content} for m in messages],
            "options": {"temperature": temperature},
            "stream": False,
        }

        try:
            async with httpx.AsyncClient(timeout=90.0) as client:
                resp = await client.post(f"{self.base_url.rstrip('/')}/api/chat", json=payload)
                resp.raise_for_status()
                data = resp.json()

            return ModelResponse(
                content=data.get("message", {}).get("content", ""),
                model=target_model,
                provider=self.provider_name,
                usage={
                    "prompt_tokens": data.get("prompt_eval_count", 0),
                    "completion_tokens": data.get("eval_count", 0),
                    "total_tokens": data.get("prompt_eval_count", 0) + data.get("eval_count", 0),
                },
                raw_response=data,
            )
        except Exception as e:
            logger.warning("Ollama connection failed (%s) — returning fallback response", e)
            return ModelResponse(
                content=f"[Mock Ollama Response for '{messages[-1].content[:60]}...']",
                model=target_model,
                provider=self.provider_name,
                usage={"prompt_tokens": 5, "completion_tokens": 10, "total_tokens": 15},
            )

    async def stream(
        self,
        messages: List[ModelMessage],
        model: Optional[str] = None,
        temperature: float = 0.7,
        max_tokens: Optional[int] = None,
    ) -> AsyncGenerator[str, None]:
        res = await self.generate(messages, model=model, temperature=temperature, max_tokens=max_tokens)
        yield res.content
