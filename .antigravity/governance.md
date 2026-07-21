# NexusDB Vault Governance

This document specifies the operational rules, safety guarantees, and system architecture for NexusDB.

## Core Governance Principles

1. **Atomicity**: One note = one single concept. No subfolders allowed inside `NODES/`.
2. **Retrievability**: Every node must be accessible via MOCs (`03_MOC/`), tags, and RAG vector search (`rag/chroma`).
3. **Safety & Traceability**: Preserve source links and original raw captures in `01_RAW/source/`. Never delete user data automatically.
4. **Local Sovereignty**: All RAG embeddings (ChromaDB) and local LLM execution (Ollama) run locally on the host machine without external data leakage.
