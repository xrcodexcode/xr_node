"""Application configuration loaded from environment variables and YAML defaults."""
from __future__ import annotations

import os
from pathlib import Path
from typing import Optional

import yaml
from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


# Resolve project root: backend/app/core/config.py -> parents[3] = xr-nodes-agent-os/
PROJECT_ROOT = Path(__file__).resolve().parents[3]
DEFAULT_CONFIG_PATH = PROJECT_ROOT / "config" / "default.yaml"


def _load_yaml_defaults() -> dict:
    """Load default.yaml and return as flat dict for settings defaults."""
    if not DEFAULT_CONFIG_PATH.exists():
        return {}
    with open(DEFAULT_CONFIG_PATH, "r", encoding="utf-8") as f:
        return yaml.safe_load(f) or {}


_yaml = _load_yaml_defaults()


class Settings(BaseSettings):
    """Application settings with layered loading: .env > env vars > YAML defaults."""

    model_config = SettingsConfigDict(
        env_prefix="XR_",
        env_file=str(PROJECT_ROOT / ".env"),
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # ── Project Identity ──────────────────────────────────────────────────────
    PROJECT_NAME: str = _yaml.get("project", {}).get("name", "XR-NODES Agent OS")
    VERSION: str = _yaml.get("project", {}).get("version", "0.1.0")
    API_V1_STR: str = "/api/v1"

    # ── Server ────────────────────────────────────────────────────────────────
    HOST: str = _yaml.get("server", {}).get("host", "127.0.0.1")
    PORT: int = _yaml.get("server", {}).get("port", 8000)
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    CORS_ORIGINS: list[str] = Field(
        default_factory=lambda: _yaml.get("server", {}).get(
            "cors_origins", ["http://localhost:3000", "http://127.0.0.1:3000"]
        )
    )

    # ── Paths ─────────────────────────────────────────────────────────────────
    VAULT_PATH: Path = Field(
        default_factory=lambda: PROJECT_ROOT.parent  # nexusdb/ is parent of xr-nodes-agent-os/
    )
    DATABASE_URL: str = f"sqlite+aiosqlite:///{PROJECT_ROOT / 'data' / 'xr-nodes.db'}"
    LOG_FILE: str = str(PROJECT_ROOT / "logs" / "xr-nodes.log")

    # ── Logging ───────────────────────────────────────────────────────────────
    LOG_LEVEL: str = "INFO"
    LOG_FORMAT: str = "text"  # 'text' or 'json'

    # ── Agent Runtime ─────────────────────────────────────────────────────────
    AGENT_MAX_STEPS: int = _yaml.get("agents", {}).get("max_steps", 50)
    AGENT_MAX_RETRIES: int = _yaml.get("agents", {}).get("max_retries", 3)
    AGENT_TIMEOUT: int = _yaml.get("agents", {}).get("default_timeout_seconds", 300)

    # ── Model Providers (keys loaded from env, never from YAML) ───────────────
    OPENAI_API_KEY: Optional[str] = None
    ANTHROPIC_API_KEY: Optional[str] = None
    GOOGLE_API_KEY: Optional[str] = None
    OLLAMA_BASE_URL: str = "http://localhost:11434"

    # ── Derived Vault Paths ───────────────────────────────────────────────────
    @property
    def vault_nodes(self) -> Path:
        return self.VAULT_PATH / _yaml.get("vault", {}).get("nodes_dir", "NODES")

    @property
    def vault_notes(self) -> Path:
        return self.VAULT_PATH / _yaml.get("vault", {}).get("notes_dir", "NOTES")

    @property
    def vault_mocs(self) -> Path:
        return self.VAULT_PATH / _yaml.get("vault", {}).get("mocs_dir", "03_MOC")

    @property
    def vault_capture(self) -> Path:
        return self.VAULT_PATH / _yaml.get("vault", {}).get("raw_capture_dir", "01_RAW/CAPTURE")

    @property
    def vault_process(self) -> Path:
        return self.VAULT_PATH / _yaml.get("vault", {}).get("raw_process_dir", "01_RAW/PROCESS")

    @property
    def vault_source(self) -> Path:
        return self.VAULT_PATH / _yaml.get("vault", {}).get("raw_source_dir", "01_RAW/SOURCE")

    @property
    def vault_new_knowledge(self) -> Path:
        return self.VAULT_PATH / _yaml.get("vault", {}).get("new_knowledge_dir", "02_NEW-KNOWLEDGE")

    @property
    def vault_antigravity(self) -> Path:
        return self.VAULT_PATH / _yaml.get("vault", {}).get("antigravity_dir", ".antigravity")

    @property
    def project_root(self) -> Path:
        return PROJECT_ROOT


settings = Settings()
