import json
from pathlib import Path
from typing import Any, Dict
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.core.config import settings

router = APIRouter(prefix="/config", tags=["Config"])

CONFIG_FILE = settings.project_root / "data" / "config.json"

class ConfigSettings(BaseModel):
    ai_provider: str
    ai_model: str
    agent_max_steps: int
    agent_timeout: int
    log_level: str

def get_default_config() -> Dict[str, Any]:
    return {
        "ai_provider": "OpenAI",
        "ai_model": "gpt-4o-mini",
        "agent_max_steps": settings.AGENT_MAX_STEPS,
        "agent_timeout": settings.AGENT_TIMEOUT,
        "log_level": settings.LOG_LEVEL,
    }

def read_config() -> Dict[str, Any]:
    if not CONFIG_FILE.exists():
        return get_default_config()
    try:
        with open(CONFIG_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
            # merge with defaults
            defaults = get_default_config()
            defaults.update(data)
            return defaults
    except Exception:
        return get_default_config()

def write_config(data: Dict[str, Any]) -> None:
    CONFIG_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)

@router.get("", response_model=ConfigSettings)
async def get_config() -> Dict[str, Any]:
    """Returns current config settings as JSON."""
    return read_config()

@router.put("", response_model=ConfigSettings)
async def update_config(config: ConfigSettings) -> Dict[str, Any]:
    """Updates config settings and saves to config.json."""
    data = config.model_dump()
    write_config(data)
    return data
