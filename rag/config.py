"""
RAG Configuration Module for NexusDB
Loads configuration settings from .antigravity/CONFIG.yaml or uses default settings.
"""

from pathlib import Path
from typing import List, Dict, Any
import yaml

# Base directory for the vault (root of project)
RAG_DIR = Path(__file__).resolve().parent
VAULT_ROOT = RAG_DIR.parent
CONFIG_PATH = VAULT_ROOT / ".antigravity" / "CONFIG.yaml"

DEFAULT_CONFIG: Dict[str, Any] = {
    "rag": {
        "enabled": True,
        "chroma_db_path": str(RAG_DIR / "chroma"),
        "index_cache_path": str(RAG_DIR / ".index_cache.json"),
        "embedding_model": "BAAI/bge-small-en-v1.5",
        "vector_database": "chromadb",
        "indexed_directories": [
            "02_NEW-KNOWLEDGE",
            "NOTES",
            "NODES",
            "03_MOC",
            "01_RAW"
        ],
        "supported_extensions": [".md", ".markdown", ".pdf"],
        "chunk_size": 800,
        "chunk_overlap": 150,
        "hybrid_search": {
            "enabled": True,
            "rrf_k": 60,
            "vector_weight": 0.6,
            "bm25_weight": 0.4
        },
        "reranker": {
            "enabled": True,
            "model": "cross-encoder/ms-marco-MiniLM-L-6-v2",
            "candidate_k": 20
        },
        "link_expansion": {
            "enabled": True,
            "max_expanded_links": 3
        },
        "retriever": {
            "top_k": 5,
        },
        "llm": {
            "provider": "ollama",
            "model": "gemma3",
            "base_url": "http://localhost:11434"
        }
    }
}


def load_config() -> Dict[str, Any]:
    """Load configuration from .antigravity/CONFIG.yaml if available, else return defaults."""
    if CONFIG_PATH.exists():
        try:
            with open(CONFIG_PATH, "r", encoding="utf-8") as f:
                data = yaml.safe_load(f)
                if data and "rag" in data:
                    merged = DEFAULT_CONFIG.copy()
                    merged["rag"].update(data["rag"])
                    return merged
        except Exception as e:
            print(f"[Warning] Failed to read {CONFIG_PATH}: {e}. Using default config.")
    return DEFAULT_CONFIG


def get_rag_settings() -> Dict[str, Any]:
    """Return RAG-specific settings dictionary."""
    config = load_config()
    return config.get("rag", DEFAULT_CONFIG["rag"])
