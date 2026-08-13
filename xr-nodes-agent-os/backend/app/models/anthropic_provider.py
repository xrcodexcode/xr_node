"""Anthropic Claude ModelProvider implementation."""
from __future__ import annotations

from typing import Any, AsyncGenerator, Dict, List, Optional

import httpx
from app.core.config import settings
from app.core.logging import get_logger
from app.models.base import ModelMessage, ModelProvider, ModelResponse

logger = get_logger(__name__)


class AnthropicProvider(ModelProvider):
    """Provider for Anthropic Claude models."""

    def __init__(self, api_key: Optional[str] = None, default_model: str = "claude-sonnet-4-5"):
        super().__init__("anthropic", default_model)
        self.api_key = api_key or settings.ANTHROPIC_API_KEY
        self.base_url = "https://api.anthropic.com/v1"

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
            logger.warning("ANTHROPIC_API_KEY not configured — returning mock response")
            return ModelResponse(
                content=f"[Mock Claude Response for '{messages[-1].content[:60]}...']",
                model=target_model,
                provider=self.provider_name,
                usage={"prompt_tokens": 15, "completion_tokens": 25, "total_tokens": 40},
            )

        headers = {
            "x-api-key": self.api_key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        }

        # Extract system prompt if present
        system_prompt = None
        user_messages = []
        for m in messages:
            if m.role == "system":
                system_prompt = m.content
            else:
                user_messages.append({"role": m.role, "content": m.content})

        payload: Dict[str, Any] = {
            "model": target_model,
            "messages": user_messages,
            "max_tokens": max_tokens or 1024,
            "temperature": temperature,
        }
        if system_prompt:
            payload["system"] = system_prompt

        async with httpx.AsyncClient(timeout=60.0) as client:
            resp = await client.post(
                f"{self.base_url}/messages",
                headers=headers,
                json=payload,
            )
            resp.raise_for_status()
            data = resp.json()

        content = ""
        for block in data.get("content", []):
            if block.get("type") == "text":
                content += block.get("text", "")

        usage_data = data.get("usage", {})
        usage = {
            "prompt_tokens": usage_data.get("input_tokens", 0),
            "completion_tokens": usage_data.get("output_tokens", 0),
            "total_tokens": usage_data.get("input_tokens", 0) + usage_data.get("output_tokens", 0),
        }

        return ModelResponse(
            content=content,
            model=data.get("model", target_model),
            provider=self.provider_name,
            usage=usage,
            finish_reason=data.get("stop_reason", "stop"),
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
