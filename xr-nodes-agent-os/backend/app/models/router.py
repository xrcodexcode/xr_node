"""ModelRouter — Intelligent routing of tasks to suitable model providers.

Every provider gracefully degrades when its API key is missing or its
endpoint is unreachable — instead of raising, it returns a stub
:class:`ModelResponse` whose ``content`` explains the situation. The UI
and CLI can therefore keep working in offline/demo mode.

Use :meth:`ModelRouter.available_providers` to discover which providers
have credentials configured at runtime.
"""
from __future__ import annotations

from typing import Dict, List, Optional, Tuple

from app.core.logging import get_logger
from app.models.anthropic_provider import AnthropicProvider
from app.models.base import ModelMessage, ModelProvider, ModelResponse
from app.models.google_provider import GoogleProvider
from app.models.ollama_provider import OllamaProvider
from app.models.openai_provider import OpenAIProvider

logger = get_logger(__name__)


class ModelRouter:
    """Central registry and router for LLM providers and models."""

    def __init__(self) -> None:
        self.providers: Dict[str, ModelProvider] = {
            "openai": OpenAIProvider(),
            "anthropic": AnthropicProvider(),
            "google": GoogleProvider(),
            "ollama": OllamaProvider(),
        }

    # ----------------------------------------------------------------- availability
    def available_providers(self) -> List[str]:
        """Return provider names whose credentials are configured and reachable."""
        return [name for name, p in self.providers.items() if p.is_available()]

    def get_provider(self, provider_name: str) -> ModelProvider:
        provider = self.providers.get(provider_name.lower())
        if not provider:
            logger.warning("Unknown provider '%s', defaulting to OpenAI", provider_name)
            return self.providers["openai"]
        return provider

    def select_model(self, task_type: str) -> Tuple[ModelProvider, str]:
        """Select the best available provider/model for the given task type.

        Falls back through the task-type ranking until we land on a provider
        that has credentials configured. If none do, returns the OpenAI stub
        (which itself will degrade gracefully to a mock response).
        """
        task_lower = (task_type or "").lower()
        if "research" in task_lower or "reasoning" in task_lower:
            preferred = [("openai", "gpt-4o"), ("anthropic", "claude-sonnet-4-5")]
        elif "coding" in task_lower or "code" in task_lower:
            preferred = [("openai", "gpt-4o"), ("anthropic", "claude-sonnet-4-5")]
        elif "review" in task_lower or "audit" in task_lower:
            preferred = [("anthropic", "claude-sonnet-4-5"), ("openai", "gpt-4o")]
        elif "classification" in task_lower or "summarization" in task_lower:
            preferred = [("google", "gemini-2.5-flash"), ("openai", "gpt-4o-mini")]
        else:
            preferred = [("openai", "gpt-4o-mini"), ("anthropic", "claude-sonnet-4-5")]

        for prov_name, model_name in preferred:
            prov = self.providers.get(prov_name)
            if prov and prov.is_available():
                return prov, model_name

        # In mock / dev / offline mode where no API keys are set, use the top preferred model
        if preferred:
            prov_name, model_name = preferred[0]
            return self.get_provider(prov_name), model_name

        return self.providers["openai"], "gpt-4o-mini"

    # --------------------------------------------------------------------- generate
    async def generate(
        self,
        messages: List[ModelMessage],
        task_type: Optional[str] = None,
        provider: Optional[str] = None,
        model: Optional[str] = None,
        temperature: float = 0.7,
        tools: Optional[List[Dict]] = None,
    ) -> ModelResponse:
        """Route request to an appropriate provider/model.

        If ``provider`` is explicitly given but its credentials are missing,
        the provider's own stub response is returned (no exception raised).
        """
        if provider:
            selected_provider = self.get_provider(provider)
            selected_model = model or selected_provider.default_model
        else:
            selected_provider, default_model = self.select_model(task_type or "general")
            selected_model = model or default_model

        available = selected_provider.is_available()
        logger.info(
            "Routing generation [task_type=%s, provider=%s, model=%s, available=%s]",
            task_type, selected_provider.provider_name, selected_model, available,
        )

        return await selected_provider.generate(
            messages=messages,
            model=selected_model,
            temperature=temperature,
            tools=tools,
        )


# Singleton
model_router = ModelRouter()
