# Note Ingestion Skill

Rules and automation workflow for processing incoming material from `01_RAW/capture/` into `NODES/` and indexing in RAG.

## Workflow

1. Ingest raw notes from `01_RAW/capture/`.
2. Split multi-idea sources into flat atomic notes in `NODES/`.
3. Validate frontmatter and tags using controlled tag schema.
4. Move processed raw file to `01_RAW/source/`.
5. Trigger `python rag/ingest.py` or rely on `python rag/watcher.py` to auto-embed new notes in ChromaDB.
