"""
LightRAG query client for NexusDB.

Thin CLI over the LightRAG /query REST endpoint. Supports all five query
modes recommended by the framework:
    local    — entity-centric, fast
    global   — graph-wide, slower, broader
    hybrid   — local + global
    naive    — pure vector similarity, no graph (closest to old rag/query.py)
    mix      — local + global + naive; DEFAULT and best quality

Usage:
    python rag/query.py "what is an activation function"
    python rag/query.py "explain backpropagation" --mode mix
    python rag/query.py "summary of attention mechanisms" --mode global
    python rag/query.py -                     # interactive REPL

The query is sent as a natural-language question. LightRAG runs the configured
QUERY_LLM (qwen3.5:2b by default) to write a grounded answer from the
retrieved entities, relations, and text chunks.
"""

from __future__ import annotations

import argparse
import json
import sys
import time
from pathlib import Path

# Allow `python rag/query.py` from the project root.
_PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(_PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(_PROJECT_ROOT))

import httpx

from rag.config import (
    LIGHTRAG_TIMEOUT_S,
    LIGHTRAG_URL,
    auth_headers,
)


QUERY_MODES = ("local", "global", "hybrid", "naive", "mix")
DEFAULT_MODE = "mix"


def query(question: str, mode: str = DEFAULT_MODE,
          only_need_context: bool = False,
          stream: bool = False,
          timeout_s: float = 600.0) -> dict:
    """POST one query to LightRAG /query. Returns the JSON envelope."""
    payload = {
        "query": question,
        "mode": mode,
        "only_need_context": only_need_context,
        "stream": stream,
    }
    r = httpx.post(
        f"{LIGHTRAG_URL}/query",
        headers=auth_headers(),
        content=json.dumps(payload),
        timeout=timeout_s,
    )
    r.raise_for_status()
    return r.json()


def format_response(resp: dict, verbose: bool = False) -> str:
    """Pretty-print a /query response.

    The LightRAG /query endpoint returns a JSON object with at least:
        - response: the LLM's grounded answer (string)
        - references: list of retrieved chunks with metadata (optional)
    """
    out = []
    answer = resp.get("response", "")
    if answer:
        out.append(answer)
    elif not resp:
        out.append("[no response]")
    if verbose:
        refs = resp.get("references")
        if refs:
            out.append("")
            out.append("--- References ---")
            for i, ref in enumerate(refs, 1):
                if isinstance(ref, dict):
                    src = ref.get("file_source") or ref.get("reference_id", "?")
                    out.append(f"  [{i}] {src}")
                else:
                    out.append(f"  [{i}] {ref}")
    return "\n".join(out)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("question", nargs="*",
                    help="Question to ask. Omit for interactive REPL.")
    ap.add_argument("--mode", choices=QUERY_MODES, default=DEFAULT_MODE,
                    help=f"Query mode (default: {DEFAULT_MODE})")
    ap.add_argument("--context-only", action="store_true",
                    help="Return retrieved context only, no LLM answer")
    ap.add_argument("--verbose", "-v", action="store_true",
                    help="Show retrieved references after the answer")
    ap.add_argument("--timeout", type=float, default=600.0,
                    help="Per-query HTTP timeout (default 600s)")
    ap.add_argument("--health", action="store_true",
                    help="Print server health summary and exit")
    args = ap.parse_args()

    if args.health:
        try:
            r = httpx.get(f"{LIGHTRAG_URL}/health", timeout=LIGHTRAG_TIMEOUT_S)
            r.raise_for_status()
            print(json.dumps(r.json(), indent=2))
        except httpx.HTTPError as e:
            print(f"[error] {e}", file=sys.stderr)
            return 2
        return 0

    if not args.question:
        return repl(args)

    q = " ".join(args.question).strip()
    if not q:
        print("[error] empty question", file=sys.stderr)
        return 1

    t0 = time.time()
    try:
        resp = query(q, mode=args.mode, only_need_context=args.context_only,
                     timeout_s=args.timeout)
    except httpx.HTTPError as e:
        print(f"[error] {e}", file=sys.stderr)
        return 2
    elapsed = time.time() - t0

    print(f"[mode={args.mode}  {elapsed:.1f}s]")
    print()
    print(format_response(resp, verbose=args.verbose))
    return 0


def repl(args: argparse.Namespace) -> int:
    """Interactive REPL. Type 'quit' or Ctrl-C to exit."""
    print(f"NexusDB LightRAG REPL  (mode={args.mode}, server={LIGHTRAG_URL})")
    print("Type your question, or 'quit' to exit. /mode <name> to switch mode.")
    print()
    while True:
        try:
            line = input(f"[{args.mode}]> ").strip()
        except (EOFError, KeyboardInterrupt):
            print()
            break
        if not line:
            continue
        if line in ("quit", "exit", ":q"):
            break
        if line.startswith("/mode "):
            new_mode = line.split(maxsplit=1)[1].strip()
            if new_mode in QUERY_MODES:
                args.mode = new_mode
                print(f"[mode switched to {args.mode}]")
            else:
                print(f"[unknown mode: {new_mode}. "
                      f"valid: {', '.join(QUERY_MODES)}]")
            continue
        t0 = time.time()
        try:
            resp = query(line, mode=args.mode,
                         only_need_context=args.context_only,
                         timeout_s=args.timeout)
        except httpx.HTTPError as e:
            print(f"[error] {e}")
            continue
        elapsed = time.time() - t0
        print(f"[{elapsed:.1f}s]")
        print(format_response(resp, verbose=args.verbose))
        print()
    return 0


if __name__ == "__main__":
    sys.exit(main())
