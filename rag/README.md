# NexusDB LightRAG Integration

Vault-aware client for the [HKUDS LightRAG](https://github.com/HKUDS/LightRAG)
framework, integrated into the NexusDB knowledge vault.

## Layout

```
nexusdb/
├── lightrag-server/              # LightRAG server (REST API + WebUI)
│   ├── .env                      # server config (gitignored secrets)
│   ├── data/                     # working dir: KV / Vector / Graph
│   ├── logs/                     # server logs
│   └── README.md
│
├── rag/                          # vault-aware client (thin REST wrapper)
│   ├── __init__.py
│   ├── config.py                 # server URL, timeouts, paths
│   ├── ingest.py                 # walk vault → POST /documents/text
│   ├── query.py                  # CLI + REPL → POST /query
│   ├── watcher.py                # watchdog daemon → ingest on change
│   └── requirements.txt          # httpx + watchdog
```

## Quick start

```bash
# 1. Make sure Ollama is running with the required models
ollama serve
ollama pull qwen3.5:2b         # LLM (extract + query + keyword)
ollama pull nomic-embed-text    # embedding

# 2. Start the LightRAG server (foreground)
cd lightrag-server
python -m lightrag.api.lightrag_server
# → http://127.0.0.1:9621  (WebUI at /webui)

# 3. In a new terminal, ingest vault files
cd ..
python rag/ingest.py --scope nodes --limit 10    # smoke-test batch
python rag/ingest.py --scope nodes               # full 373 atomic notes

# 4. Query
python rag/query.py "what is an activation function"
python rag/query.py "explain backpropagation" --mode mix
python rag/query.py -                            # interactive REPL
```

## How the pieces fit

- **LightRAG server** (`lightrag-server/`) does the heavy lifting:
  async chunking, LLM-based entity/relation extraction, knowledge-graph
  construction, vector embedding, optional reranking, hybrid retrieval.
  It speaks REST on http://127.0.0.1:9621 and serves a WebUI at /webui.

- **rag/ client** is a thin wrapper that walks the vault and POSTs to the
  server. It deliberately does **not** call LightRAG as a Python SDK — the
  framework's official guidance is "SDK is for embedded/research; use the
  REST API for real integrations."

- **Ollama** runs the LLM and embedding models locally. Default in
  `lightrag-server/.env` is `qwen3.5:2b` for all three roles
  (extract/query/keyword) and `nomic-embed-text` for embeddings.

## Query modes (set via `--mode`)

| Mode    | What it does                                                      |
|---------|-------------------------------------------------------------------|
| `mix`   | local + global + naive — DEFAULT and best quality                |
| `hybrid`| local + global                                                    |
| `global`| graph-wide cross-document retrieval                              |
| `local` | entity-centric, fastest                                           |
| `naive` | pure vector similarity (no graph) — closest to old rag/query.py  |

## Performance notes

On a CPU-only Windows box (this vault's setup) the local 2B model is the
bottleneck. Expect roughly:

- ~10–15 min per chunk for LLM extraction (one chunk ≈ one markdown file)
- ~30 sec per chunk for embedding
- A full vault ingest (373 NODES files) ≈ 1-2 days of CPU time

To speed this up:

1. **Run Ollama with GPU support.** The current setup runs CPU-only because
   the AMD GPU detection is timing out. See the README troubleshooting.
2. **Use a hosted LLM.** Change `EXTRACT_LLM_BINDING=openai` (or anthropic /
   gemini) in `lightrag-server/.env` and set the matching API key. This
   typically reduces extraction to a few seconds per chunk.
3. **Limit ingest scope.** Use `--scope nodes --limit N` for incremental
   smoke tests, then expand.

## Vault conventions respected

- Frontmatter (YAML between `---` blocks) is stripped before ingest so the
  extraction LLM sees clean body markdown.
- File source paths are preserved as `file_source` keys, so a re-ingest
  returns `409 duplicate` for unchanged files (cheap skip).
- Watcher debounces filesystem events at 1 s to absorb editor save-spam.
- Files under `.obsidian/`, `.git/`, `lightrag-server/`, and
  `01_RAW/PROCESS/_orphans/` are excluded from ingest.

## Auth

LightRAG's API key auth is wired through `LIGHTRAG_API_KEY`. The current
`.env` runs in **guest mode** (no auth) since the server binds to
127.0.0.1 only. If you expose it on the LAN, set `LIGHTRAG_API_KEY` and
`WHITELIST_PATHS=/health`.
