"""
Vault walker → LightRAG /documents/text ingester.

Walks the NexusDB vault (NODES/, NOTES/, 03_MOC/, 02_NEW-KNOWLEDGE/) and POSTs
each markdown file to the running LightRAG server's /documents/text endpoint.
The server does its own async chunking + LLM extraction + graph build.

We do NOT call the LightRAG SDK directly — we go through its REST API per the
framework's official guidance ("SDK is for embedded/research use only").

Usage:
    python rag/ingest.py                    # default scope (NODES)
    python rag/ingest.py --scope all        # NODES + NOTES + 03_MOC + 02_NEW-KNOWLEDGE
    python rag/ingest.py --scope nodes --limit 10
    python rag/ingest.py --dry-run          # print what would be ingested
    python rag/ingest.py --reset            # clear LightRAG workspace first

Why we strip frontmatter:
    LightRAG's native parser is markdown-aware and handles frontmatter OK, but
    our vault frontmatter uses non-standard fields (schema_version, owner_moc,
    aliases) that confuse downstream extraction. Stripping the YAML block and
    sending only body content gives cleaner entities/relations.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import time
from pathlib import Path

# Allow `python rag/ingest.py` from the project root.
_PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(_PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(_PROJECT_ROOT))

import httpx

from rag.config import (
    LIGHTRAG_TIMEOUT_S,
    LIGHTRAG_URL,
    RAG_DIR,
    SUPPORTED_EXTENSIONS,
    VAULT_ROOT,
    auth_headers,
    is_skipped,
)


# ---------------------------------------------------------------------------
# Frontmatter handling
# ---------------------------------------------------------------------------

FRONTMATTER_RE = re.compile(r"^---\s*\n.*?\n---\s*\n", re.DOTALL)


def strip_frontmatter(text: str) -> str:
    """Remove YAML frontmatter (delimited by --- on its own lines).

    Keeps the body. LightRAG's native parser sees cleaner markdown this way.
    """
    m = FRONTMATTER_RE.match(text)
    return text[m.end():] if m else text


def file_hash(path: Path) -> str:
    h = hashlib.sha256()
    try:
        with open(path, "rb") as f:
            for chunk in iter(lambda: f.read(8192), b""):
                h.update(chunk)
    except OSError:
        return ""
    return h.hexdigest()


# ---------------------------------------------------------------------------
# Vault walker
# ---------------------------------------------------------------------------


def walk_vault(scope: str) -> list[Path]:
    """Return the list of files we plan to ingest under the chosen scope."""
    from rag.config import DEFAULT_INDEXED_DIRS

    if scope == "all":
        targets = DEFAULT_INDEXED_DIRS
    elif scope == "nodes":
        targets = ["NODES"]
    elif scope == "notes":
        targets = ["NOTES"]
    elif scope == "mocs":
        targets = ["03_MOC"]
    elif scope == "study":
        targets = ["02_NEW-KNOWLEDGE"]
    else:
        raise ValueError(
            f"Unknown scope '{scope}'. "
            f"Use one of: all, nodes, notes, mocs, study"
        )

    files: list[Path] = []
    for dirname in targets:
        root = VAULT_ROOT / dirname
        if not root.exists():
            print(f"[warn] scope dir not found: {root}", file=sys.stderr)
            continue
        for p in root.rglob("*"):
            if not p.is_file():
                continue
            if p.suffix.lower() not in SUPPORTED_EXTENSIONS:
                continue
            if is_skipped(p):
                continue
            files.append(p)
    return sorted(files)


# ---------------------------------------------------------------------------
# LightRAG REST client
# ---------------------------------------------------------------------------


def server_health() -> dict:
    """Return LightRAG /health JSON or raise on connection error."""
    r = httpx.get(f"{LIGHTRAG_URL}/health", timeout=LIGHTRAG_TIMEOUT_S)
    r.raise_for_status()
    return r.json()


def clear_documents() -> dict:
    """Wipe all documents from the LightRAG workspace (for a clean re-ingest)."""
    r = httpx.delete(f"{LIGHTRAG_URL}/documents", headers=auth_headers(),
                     timeout=LIGHTRAG_TIMEOUT_S)
    r.raise_for_status()
    return r.json()


def upload_text(text: str, file_source: str) -> dict:
    """POST one document. Returns the {status, track_id} envelope.

    Long extraction is async; we only wait for the POST to be accepted.
    """
    payload = {"text": text, "file_source": file_source}
    r = httpx.post(
        f"{LIGHTRAG_URL}/documents/text",
        headers=auth_headers(),
        content=json.dumps(payload),
        timeout=LIGHTRAG_TIMEOUT_S,
    )
    if r.status_code == 409:
        # Already indexed with same source key
        return {"status": "duplicate", "detail": r.json().get("detail")}
    r.raise_for_status()
    return r.json()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--scope", default="nodes",
                    help="Scope to ingest: nodes | notes | mocs | study | all")
    ap.add_argument("--limit", type=int, default=0,
                    help="Stop after N files (0 = no limit)")
    ap.add_argument("--dry-run", action="store_true",
                    help="Print files that would be ingested; do not upload")
    ap.add_argument("--reset", action="store_true",
                    help="DELETE /documents before starting (full re-ingest)")
    ap.add_argument("--skip-hash-check", action="store_true",
                    help="Always upload, even if LightRAG already has the file")
    args = ap.parse_args()

    try:
        health = server_health()
    except Exception as e:
        print(f"[error] Cannot reach LightRAG at {LIGHTRAG_URL}: {e}",
              file=sys.stderr)
        print("        Start it with:  cd lightrag-server && lightrag-server",
              file=sys.stderr)
        return 2

    print(f"[ok] LightRAG v{health.get('core_version')} "
          f"(pipeline_busy={health.get('pipeline_busy')})")

    if args.reset and not args.dry_run:
        ans = input("Reset will DELETE all LightRAG documents. Continue? [y/N] ")
        if ans.strip().lower() != "y":
            print("Aborted.")
            return 1
        clear_documents()
        print("[ok] LightRAG workspace cleared.")

    files = walk_vault(args.scope)
    if args.limit:
        files = files[: args.limit]

    print(f"[plan] {len(files)} files in scope '{args.scope}'")
    if args.dry_run:
        for p in files[:30]:
            print(f"  would ingest: {p.relative_to(VAULT_ROOT)}")
        if len(files) > 30:
            print(f"  ... and {len(files) - 30} more")
        return 0

    ingested = 0
    duplicate = 0
    errors = 0
    started = time.time()

    for i, path in enumerate(files, 1):
        try:
            content = path.read_text(encoding="utf-8", errors="ignore")
        except OSError as e:
            print(f"  [{i:3}] read error: {path.name}: {e}", file=sys.stderr)
            errors += 1
            continue

        body = strip_frontmatter(content)
        if not body.strip():
            continue  # skip empty body (e.g. Untitled.md stubs)

        rel = path.relative_to(VAULT_ROOT).as_posix()
        try:
            resp = upload_text(body, file_source=rel)
        except httpx.HTTPError as e:
            print(f"  [{i:3}] HTTP error: {rel}: {e}", file=sys.stderr)
            errors += 1
            continue

        status = resp.get("status")
        if status == "duplicate":
            duplicate += 1
            print(f"  [{i:3}] dup:        {rel}")
        else:
            ingested += 1
            track = resp.get("track_id", "?")
            print(f"  [{i:3}] queued:     {rel}  (track={track})")

    elapsed = time.time() - started
    print()
    print(f"[done] ingested={ingested} duplicate={duplicate} errors={errors}"
          f" in {elapsed:.1f}s")
    print()
    print("Extraction runs asynchronously on the server. Check progress with:")
    print(f"  curl {LIGHTRAG_URL}/documents/pipeline_status")
    return 0 if errors == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
