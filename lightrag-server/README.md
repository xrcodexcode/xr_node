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
lightrag-server
# Server now at http://127.0.0.1:9621
# WebUI at  http://127.0.0.1:9621/webui
```

## Endpoints used by rag/

| LightRAG endpoint | rag/ caller       | Purpose                          |
| ----------------- | ----------------- | -------------------------------- |
| `GET  /health`    | `query.py`        | Smoke-test before any operation  |
| `POST /documents` | `ingest.py`       | Insert vault files (batched)     |
| `POST /query`     | `query.py`        | Retrieve + LLM-grounded answer   |
| `POST /clear`     | `ingest.py`       | Reset workspace before re-ingest |

Full API spec: https://github.com/HKUDS/LightRAG/blob/main/docs/LightRAG-API-Server.md

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

To rebuild from scratch:

```bash
curl -X POST http://127.0.0.1:9621/clear -H 'Content-Type: application/json' -d '{}'
rm -rf data/*
python ../rag/ingest.py --scope nodes --limit 50   # smoke-test batch
python ../rag/ingest.py --scope nodes              # full NODES/
```
