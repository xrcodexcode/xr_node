"""Google Gemini ModelProvider implementation."""
from __future__ import annotations

from typing import Any, AsyncGenerator, Dict, List, Optional

import httpx
from app.core.config import settings
from app.core.logging import get_logger
from app.models.base import ModelMessage, ModelProvider, ModelResponse

logger = get_logger(__name__)


class GoogleProvider(ModelProvider):
    """Provider for Google Gemini models via Gemini REST API."""

    def __init__(self, api_key: Optional[str] = None, default_model: str = "gemini-2.5-flash"):
        super().__init__("google", default_model)
        self.api_key = api_key or settings.GOOGLE_API_KEY

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

        if not self.api_key:
            logger.warning("GOOGLE_API_KEY not configured — returning mock response")
            return ModelResponse(
                content=f"[Mock Gemini Response for '{messages[-1].content[:60]}...']",
                model=target_model,
                provider=self.provider_name,
                usage={"prompt_tokens": 12, "completion_tokens": 18, "total_tokens": 30},
            )

        contents = []
        for m in messages:
            role = "user" if m.role in ("user", "system") else "model"
            contents.append({"role": role, "parts": [{"text": m.content}]})

        url = f"https://generativelanguage.googleapis.com/v1beta/models/{target_model}:generateContent?key={self.api_key}"
        payload = {
            "contents": contents,
            "generationConfig": {
                "temperature": temperature,
                **({"maxOutputTokens": max_tokens} if max_tokens else {}),
            },
        }

        async with httpx.AsyncClient(timeout=60.0) as client:
            resp = await client.post(url, json=payload)
            resp.raise_for_status()
            data = resp.json()

        text = ""
        candidates = data.get("candidates", [])
        if candidates and "content" in candidates[0]:
            parts = candidates[0]["content"].get("parts", [])
            for p in parts:
                text += p.get("text", "")

        return ModelResponse(
            content=text,
            model=target_model,
            provider=self.provider_name,
            usage={"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0},
            raw_response=data,
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
