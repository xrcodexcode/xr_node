# LightRAG Server (NexusDB integration)

This directory hosts the official [HKUDS LightRAG](https://github.com/HKUDS/LightRAG)
server, configured for the NexusDB vault.

## Why a separate server?

LightRAG's official guidance is to use the REST API server rather than the
embedded SDK for any real integration. The server gives us:

- Async ingestion pipeline (LLM-bound extraction runs in background)
- Role-specific LLM routing (separate models for extraction vs. query)
- Built-in reranker and dual-level (graph + vector) retrieval
- WebUI for free
- OpenAI-compatible API surface — any client tool that talks to OpenAI works

The vault-aware client (`../rag/`) talks to this server over HTTP. We do NOT
import `lightrag` directly from our wrapper code.

## Quick start

```bash
# 1. Activate the vault venv (or create one)
source ../.venv/Scripts/activate   # git-bash on Windows

# 2. Install LightRAG with the API extras
pip install "lightrag-hku[api]"

# 3. Pull the LLM + embedding models in Ollama (one-time)
ollama pull gemma3
ollama pull nomic-embed-text

# 4. Start Ollama if it's not running
ollama serve &

# 5. Start the LightRAG server
cd lightrag-server
python run_server.py
# Server now at http://127.0.0.1:9621
# WebUI at  http://127.0.0.1:9621/webui

```

## Endpoints used by rag/

| LightRAG endpoint              | rag/ caller       | Purpose                              |
| ------------------------------- | ----------------- | ------------------------------------ |
| `GET    /health`                | `query.py`        | Smoke-test before any operation      |
| `GET    /documents/pipeline_status` | `query.py`/`ingest.py` | Check async extraction progress |
| `POST   /documents/text`        | `ingest.py`       | Insert a single text document        |
| `POST   /documents/texts`       | `ingest.py`       | Insert N text documents in one call  |
| `POST   /documents/paginated`   | `ingest.py`/`watcher.py` | Walk indexed docs (needed to resolve `file_path` → `doc_id` for deletion) |
| `DELETE /documents/delete_document` | `watcher.py` | Delete documents by doc_id           |
| `POST   /clear_cache`           | n/a               | Wipe LLM cache (NOT a workspace wipe) |
| `POST   /query`                 | `query.py`        | Retrieve + LLM-grounded answer       |
| `POST   /query/stream`          | (streaming clients) | Same but server-sent stream       |

> **Note on clearing the workspace.** There is no `POST /clear` endpoint
> in LightRAG 1.5+ (the old docs mention one, it was removed). To wipe
> the workspace, `rag/ingest.py --reset` calls `POST /documents/paginated`
> to collect every doc_id and then `DELETE /documents/delete_document`
> with the full list. `POST /clear_cache` only clears the LLM response
> cache (it does NOT remove documents or extracted entities).

Full API spec: <https://github.com/HKUDS/LightRAG/blob/main/docs/LightRAG-API-Server.md>

## Config

`.env` is loaded automatically by `lightrag-server`. Key knobs:

- `LLM_BINDING` / `LLM_MODEL` — swap to OpenAI/Anthropic/Gemini by changing the binding
  and adding the matching `*_API_KEY`
- `EMBEDDING_BINDING` / `EMBEDDING_MODEL` — same pattern
- `LIGHTRAG_KV_STORAGE` etc. — currently file-backed; promote to Postgres/Neo4j
  when you outgrow single-machine storage
- `WORKING_DIR` — where LightRAG persists KV/Vector/Graph state. Wipe this dir
  to start fresh; keep it for incremental ingest.

## Switching to a hosted LLM

Change three lines in `.env`:

```
LLM_BINDING=openai
LLM_MODEL=gpt-4o-mini
OPENAI_API_KEY=sk-...
```

Then restart the server. No code changes in `rag/` needed.

## Why Ollama + gemma3 for now

Your existing `rag/config.py` already targets Ollama/gemma3. Local extraction
on a 4-9B model is slow on first ingest but has zero ongoing cost. The
`.env` is structured so that swapping to a hosted model later is a config
change, not a code change.

## Data layout

```
lightrag-server/
├── .env                     # gitignored, committed template lives in this README
├── data/                    # working dir: KV/Vector/Graph persistence
├── logs/                    # server logs
└── README.md                # this file
```

## Re-ingesting

To rebuild from scratch, you have two options. Both are safe to run
mid-pipeline; the first one (server-side wipe) is the one we use.

**Option A — let `rag/ingest.py --reset` handle it (recommended):**

```bash
python ../rag/ingest.py --scope nodes --limit 50   # smoke-test batch
python ../rag/ingest.py --reset                     # wipe all docs
python ../rag/ingest.py --scope nodes              # full re-ingest
```

`--reset` internally calls `POST /documents/paginated` to collect every
`doc_id`, then `DELETE /documents/delete_document` with the full list
and `delete_llm_cache=True`. It does NOT touch the on-disk JSON store
in `data/`, so the working dir keeps its KV/Vector/Graph structure.

**Option B — full data-dir wipe (hard reset, kills everything):**

```bash
# Stop the server first
rm -rf data/*
python ../rag/ingest.py --scope nodes --limit 5    # smoke-test
python ../rag/ingest.py --scope nodes              # full NODES/
```

Use option B only when you want to start truly fresh (different model,
different chunk size, corrupted state). It loses ALL the cached LLM
extractions, embeddings, and the graph.
