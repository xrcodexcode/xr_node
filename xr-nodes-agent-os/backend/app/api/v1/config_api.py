import json
from pathlib import Path
from typing import Any, Dict, Optional
from fastapi import APIRouter
from pydantic import BaseModel

from app.core.config import settings

router = APIRouter(prefix="/config", tags=["Config"])

CONFIG_FILE = settings.project_root / "data" / "config.json"


class ConfigSettings(BaseModel):
    provider: Optional[str] = None
    ai_provider: Optional[str] = None
    model: Optional[str] = None
    ai_model: Optional[str] = None
    agent_steps: Optional[int] = None
    agent_max_steps: Optional[int] = None
    agent_timeout: Optional[int] = None
    log_level: Optional[str] = None


def get_default_config() -> Dict[str, Any]:
    return {
        "provider": "Google",
        "ai_provider": "Google",
        "model": "Gemini 1.5 Pro",
        "ai_model": "Gemini 1.5 Pro",
        "agent_steps": settings.AGENT_MAX_STEPS,
        "agent_max_steps": settings.AGENT_MAX_STEPS,
        "agent_timeout": settings.AGENT_TIMEOUT,
        "log_level": settings.LOG_LEVEL,
    }


def read_config() -> Dict[str, Any]:
    defaults = get_default_config()
    if not CONFIG_FILE.exists():
        return defaults
    try:
        with open(CONFIG_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
            defaults.update(data)
            # Sync field synonyms
            if "provider" in data and "ai_provider" not in data:
                defaults["ai_provider"] = data["provider"]
            elif "ai_provider" in data and "provider" not in data:
                defaults["provider"] = data["ai_provider"]

            if "model" in data and "ai_model" not in data:
                defaults["ai_model"] = data["model"]
            elif "ai_model" in data and "model" not in data:
                defaults["model"] = data["ai_model"]

            if "agent_steps" in data and "agent_max_steps" not in data:
                defaults["agent_max_steps"] = data["agent_steps"]
            elif "agent_max_steps" in data and "agent_steps" not in data:
                defaults["agent_steps"] = data["agent_max_steps"]
            return defaults
    except Exception:
        return defaults


def write_config(data: Dict[str, Any]) -> Dict[str, Any]:
    current = read_config()
    for k, v in data.items():
        if v is not None:
            current[k] = v

    # Normalize aliases
    if "provider" in data and data["provider"] is not None:
        current["ai_provider"] = data["provider"]
    elif "ai_provider" in data and data["ai_provider"] is not None:
        current["provider"] = data["ai_provider"]

    if "model" in data and data["model"] is not None:
        current["ai_model"] = data["model"]
    elif "ai_model" in data and data["ai_model"] is not None:
        current["model"] = data["ai_model"]

    if "agent_steps" in data and data["agent_steps"] is not None:
        current["agent_max_steps"] = data["agent_steps"]
    elif "agent_max_steps" in data and data["agent_max_steps"] is not None:
        current["agent_steps"] = data["agent_max_steps"]

    CONFIG_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(current, f, indent=4)
    return current


@router.get("")
async def get_config() -> Dict[str, Any]:
    """Returns current config settings as JSON."""
    return read_config()


@router.post("")
async def create_or_update_config(config: ConfigSettings) -> Dict[str, Any]:
    """Updates config settings via POST and saves to config.json."""
    return write_config(config.model_dump(exclude_unset=True))


@router.put("")
async def update_config(config: ConfigSettings) -> Dict[str, Any]:
    """Updates config settings via PUT and saves to config.json."""
    return write_config(config.model_dump(exclude_unset=True))
