"""ModelProvider abstract base class and messaging schemas."""
from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import Any, AsyncGenerator, Dict, List, Optional


@dataclass
class ModelMessage:
    role: str  # "system", "user", "assistant", "tool"
    content: str
    name: Optional[str] = None
    tool_call_id: Optional[str] = None
    tool_calls: Optional[List[Dict[str, Any]]] = None


@dataclass
class ModelResponse:
    content: str
    model: str
    provider: str
    usage: Dict[str, int] = field(default_factory=lambda: {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0})
    tool_calls: Optional[List[Dict[str, Any]]] = None
    finish_reason: str = "stop"
    raw_response: Optional[Any] = None


class ModelProvider(ABC):
    """Abstract interface for LLM providers."""

    def __init__(self, provider_name: str, default_model: str):
        self.provider_name = provider_name
        self.default_model = default_model

    def is_available(self) -> bool:
        """Return True if the provider has credentials configured.

        Providers with a non-empty ``api_key`` are available.
        Ollama has no key (local server) and is available if ``base_url`` is an http(s) URL.
        """
        if self.provider_name == "ollama":
            base_url = getattr(self, "base_url", None)
            return bool(base_url and base_url.startswith(("http://", "https://")))
        api_key = getattr(self, "api_key", None)
        return bool(api_key)

    @abstractmethod
    async def generate(
        self,
        messages: List[ModelMessage],
        model: Optional[str] = None,
        temperature: float = 0.7,
        max_tokens: Optional[int] = None,
        tools: Optional[List[Dict[str, Any]]] = None,
        response_format: Optional[Dict[str, Any]] = None,
    ) -> ModelResponse:
        """Generate a response from the model."""
        pass

    @abstractmethod
    async def stream(
        self,
        messages: List[ModelMessage],
        model: Optional[str] = None,
        temperature: float = 0.7,
        max_tokens: Optional[int] = None,
    ) -> AsyncGenerator[str, None]:
        """Stream response chunks from the model."""
        pass
