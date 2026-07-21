# Knowledge Search Skill

Guide for searching across NexusDB using semantic retrieval, tags, and MOC navigation.

## Strategy

1. First check Maps of Content in `03_MOC/`.
2. Query ChromaDB local vector index via `python rag/query.py "<query>"`.
3. Check tags according to `.antigravity/rules/tag-schema.md`.
4. Inspect note backlinks and atomic nodes in `NODES/`.
