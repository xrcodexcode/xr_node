"""OpenAI and OpenAI-compatible ModelProvider implementation."""
from __future__ import annotations

from typing import Any, AsyncGenerator, Dict, List, Optional

import httpx
from app.core.config import settings
from app.core.logging import get_logger
from app.models.base import ModelMessage, ModelProvider, ModelResponse

logger = get_logger(__name__)


class OpenAIProvider(ModelProvider):
    """Provider for OpenAI API and compatible endpoints (Ollama, vLLM, LocalAI)."""

    def __init__(
        self,
        api_key: Optional[str] = None,
        base_url: Optional[str] = None,
        default_model: str = "gpt-4o-mini",
    ):
        super().__init__("openai", default_model)
        self.api_key = api_key or settings.OPENAI_API_KEY
        self.base_url = base_url or "https://api.openai.com/v1"

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

        # Fallback response if no API key in mock/dev mode
        if not self.api_key and "openai.com" in self.base_url:
            logger.warning("OPENAI_API_KEY not configured — returning mock response")
            return ModelResponse(
                content=f"[Mock OpenAI Response for '{messages[-1].content[:60]}...']",
                model=target_model,
                provider=self.provider_name,
                usage={"prompt_tokens": 10, "completion_tokens": 20, "total_tokens": 30},
            )

        headers = {"Authorization": f"Bearer {self.api_key}"}
        serialized_messages: List[Dict[str, Any]] = []
        for m in messages:
            msg_dict: Dict[str, Any] = {"role": m.role, "content": m.content or ""}
            if m.name:
                msg_dict["name"] = m.name
            if m.tool_call_id:
                msg_dict["tool_call_id"] = m.tool_call_id
            if m.tool_calls:
                msg_dict["tool_calls"] = m.tool_calls
            serialized_messages.append(msg_dict)

        payload: Dict[str, Any] = {
            "model": target_model,
            "messages": serialized_messages,
            "temperature": temperature,
        }
        if max_tokens:
            payload["max_tokens"] = max_tokens
        if tools:
            payload["tools"] = tools
        if response_format:
            payload["response_format"] = response_format

        async with httpx.AsyncClient(timeout=60.0) as client:
            resp = await client.post(
                f"{self.base_url.rstrip('/')}/chat/completions",
                headers=headers,
                json=payload,
            )
            resp.raise_for_status()
            data = resp.json()

        choice = data["choices"][0]
        usage = data.get("usage", {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0})
        message_data = choice["message"]

        return ModelResponse(
            content=message_data.get("content") or "",
            model=data.get("model", target_model),
            provider=self.provider_name,
            usage=usage,
            tool_calls=message_data.get("tool_calls"),
            finish_reason=choice.get("finish_reason", "stop"),
            raw_response=data,
        )

    async def stream(
        self,
        messages: List[ModelMessage],
        model: Optional[str] = None,
        temperature: float = 0.7,
        max_tokens: Optional[int] = None,
    ) -> AsyncGenerator[str, None]:
        target_model = model or self.default_model

        if not self.api_key and "openai.com" in self.base_url:
            yield f"[Mock Stream Chunk for '{messages[-1].content[:40]}']"
            return

        headers = {"Authorization": f"Bearer {self.api_key}"}
        serialized_messages: List[Dict[str, Any]] = []
        for m in messages:
            msg_dict: Dict[str, Any] = {"role": m.role, "content": m.content or ""}
            if m.name:
                msg_dict["name"] = m.name
            if m.tool_call_id:
                msg_dict["tool_call_id"] = m.tool_call_id
            if m.tool_calls:
                msg_dict["tool_calls"] = m.tool_calls
            serialized_messages.append(msg_dict)

        payload: Dict[str, Any] = {
            "model": target_model,
            "messages": serialized_messages,
            "temperature": temperature,
            "stream": True,
        }
        if max_tokens:
            payload["max_tokens"] = max_tokens

        async with httpx.AsyncClient(timeout=60.0) as client:
            async with client.stream(
                "POST",
                f"{self.base_url.rstrip('/')}/chat/completions",
                headers=headers,
                json=payload,
            ) as response:
                async for line in response.aiter_lines():
                    if line.startswith("data: ") and line != "data: [DONE]":
                        import json
                        try:
                            chunk_data = json.loads(line[6:])
                            delta = chunk_data["choices"][0]["delta"].get("content")
                            if delta:
                                yield delta
                        except Exception:
                            pass
