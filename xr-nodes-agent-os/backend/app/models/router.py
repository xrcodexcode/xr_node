"""ModelRouter — Intelligent routing of tasks to suitable model providers."""
from __future__ import annotations

from typing import Dict, Optional

from app.core.config import settings
from app.core.logging import get_logger
from app.models.anthropic_provider import AnthropicProvider
from app.models.base import ModelMessage, ModelProvider, ModelResponse
from app.models.google_provider import GoogleProvider
from app.models.ollama_provider import OllamaProvider
from app.models.openai_provider import OpenAIProvider

logger = get_logger(__name__)


class ModelRouter:
    """Central registry and router for LLM providers and models."""

    def __init__(self):
        self.providers: Dict[str, ModelProvider] = {
            "openai": OpenAIProvider(),
            "anthropic": AnthropicProvider(),
            "google": GoogleProvider(),
            "ollama": OllamaProvider(),
        }

    def get_provider(self, provider_name: str) -> ModelProvider:
        provider = self.providers.get(provider_name.lower())
        if not provider:
            logger.warning("Unknown provider '%s', defaulting to OpenAI", provider_name)
            return self.providers["openai"]
        return provider

    def select_model(self, task_type: str) -> tuple[ModelProvider, str]:
        """Select best provider and model name based on task type."""
        task_lower = task_type.lower()
        if "research" in task_lower or "reasoning" in task_lower:
            return self.providers["openai"], "gpt-4o"
        elif "coding" in task_lower or "code" in task_lower:
            return self.providers["openai"], "gpt-4o"
        elif "review" in task_lower or "audit" in task_lower:
            return self.providers["anthropic"], "claude-sonnet-4-5"
        elif "classification" in task_lower or "summarization" in task_lower:
            return self.providers["google"], "gemini-2.5-flash"
        else:
            return self.providers["openai"], "gpt-4o-mini"

    async def generate(
        self,
        messages: list[ModelMessage],
        task_type: Optional[str] = None,
        provider: Optional[str] = None,
        model: Optional[str] = None,
        temperature: float = 0.7,
    ) -> ModelResponse:
        """Route request to appropriate provider and model."""
        if provider:
            selected_provider = self.get_provider(provider)
            selected_model = model or selected_provider.default_model
        else:
            selected_provider, default_model = self.select_model(task_type or "general")
            selected_model = model or default_model

        logger.info(
            "Routing generation [task_type=%s, provider=%s, model=%s]",
            task_type, selected_provider.provider_name, selected_model
        )

        return await selected_provider.generate(
            messages=messages,
            model=selected_model,
            temperature=temperature,
        )


# Global ModelRouter singleton
model_router = ModelRouter()
