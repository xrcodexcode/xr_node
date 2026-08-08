"""
LightRAG client config for NexusDB.

Reads connection settings from environment with sensible defaults pointing at
the local server started by lightrag-server/.env. The vault-aware client code
in ingest.py / query.py / watcher.py imports from here.

Environment overrides (all optional):
    LIGHTRAG_URL          default: http://127.0.0.1:9621
    LIGHTRAG_API_KEY      default: empty (server is in guest mode)
    LIGHTRAG_TIMEOUT_S    default: 30 (per HTTP call; extraction is async on
                                  the server side, so this only covers the
                                  initial POST and any sync calls)
"""

from __future__ import annotations
import os
from pathlib import Path

# LightRAG server connection
LIGHTRAG_URL: str = os.environ.get("LIGHTRAG_URL", "http://127.0.0.1:9621").rstrip("/")
LIGHTRAG_API_KEY: str = os.environ.get("LIGHTRAG_API_KEY", "")
LIGHTRAG_TIMEOUT_S: float = float(os.environ.get("LIGHTRAG_TIMEOUT_S", "30"))

# Vault paths
RAG_DIR = Path(__file__).resolve().parent
VAULT_ROOT = RAG_DIR.parent

# Default index scope. --scope CLI flag in ingest.py can override.
DEFAULT_INDEXED_DIRS = [
    "NODES",
    "NOTES",
    "03_MOC",
    "02_NEW-KNOWLEDGE",
]

# File types LightRAG's native parser handles without external services.
SUPPORTED_EXTENSIONS = (".md", ".markdown")

# Vault-only files we never want to index (server-side configs, plugins, etc.)
SKIP_PATH_PATTERNS = (
    "/.obsidian/",
    "/.trash/",
    "/.git/",
    "/lightrag-server/",
    "/rag/__pycache__/",
    "/01_RAW/PROCESS/_orphans/",
)

# Headers helper
def auth_headers() -> dict[str, str]:
    h = {"Content-Type": "application/json"}
    if LIGHTRAG_API_KEY:
        h["Authorization"] = f"Bearer {LIGHTRAG_API_KEY}"
    return h


def is_skipped(path: Path) -> bool:
    s = str(path).replace("\\", "/")
    return any(p in s for p in SKIP_PATH_PATTERNS)
