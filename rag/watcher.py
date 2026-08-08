"""
LightRAG-aware file watcher for NexusDB.

Monitors the vault directories (NODES/, NOTES/, 03_MOC/, 02_NEW-KNOWLEDGE/)
and on create/modify/move events, POSTs the changed file's body to LightRAG's
/documents/text endpoint. On delete/move-out, requests LightRAG to delete the
corresponding document.

Incremental tracking is left to LightRAG itself — it dedupes by file_source,
so re-uploading an unchanged file is cheap (returns 409 duplicate). We still
de-dupe locally for ~instant same-event spam suppression.

Usage:
    python rag/watcher.py                    # watch DEFAULT_INDEXED_DIRS
    python rag/watcher.py --scope nodes      # watch only NODES/
    python rag/watcher.py --once             # scan once, then exit

The daemon is silent when nothing happens; it prints one line per change.
"""

from __future__ import annotations

import argparse
import re
import sys
import time
from pathlib import Path

# Allow `python rag/watcher.py` from the project root.
_PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(_PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(_PROJECT_ROOT))

from watchdog.events import FileSystemEventHandler, FileSystemEvent
from watchdog.observers import Observer

from rag.config import (
    SUPPORTED_EXTENSIONS,
    VAULT_ROOT,
    is_skipped,
)
from rag.ingest import strip_frontmatter, upload_text


def delete_document(file_source: str) -> dict:
    """Ask LightRAG to remove one document by file_source key."""
    import httpx
    from rag.config import LIGHTRAG_URL, LIGHTRAG_TIMEOUT_S, auth_headers

    payload = {"file_sources": [file_source]}
    r = httpx.post(
        f"{LIGHTRAG_URL}/documents/delete_document",
        headers=auth_headers(),
        content=str(payload).replace("'", '"'),
        timeout=LIGHTRAG_TIMEOUT_S,
    )
    if r.status_code == 404:
        return {"status": "not_found"}
    r.raise_for_status()
    return r.json()


class VaultChangeHandler(FileSystemEventHandler):
    def __init__(self, *, debounce_s: float = 1.0):
        super().__init__()
        self.debounce_s = debounce_s
        self._last_seen: dict[str, float] = {}

    def _is_target(self, path_str: str) -> bool:
        p = Path(path_str)
        if p.suffix.lower() not in SUPPORTED_EXTENSIONS:
            return False
        if is_skipped(p):
            return False
        return True

    def _debounced(self, path_str: str) -> bool:
        """Drop duplicate events for the same path within debounce_s seconds."""
        now = time.time()
        last = self._last_seen.get(path_str, 0.0)
        if now - last < self.debounce_s:
            return False
        self._last_seen[path_str] = now
        return True

    def _handle_upsert(self, abs_path: str) -> None:
        if not self._is_target(abs_path) or not self._debounced(abs_path):
            return
        p = Path(abs_path)
        try:
            rel = p.relative_to(VAULT_ROOT).as_posix()
            content = p.read_text(encoding="utf-8", errors="ignore")
            body = strip_frontmatter(content)
            if not body.strip():
                return
            resp = upload_text(body, file_source=rel)
            tag = "queued" if resp.get("status") == "success" else resp.get("status")
            print(f"[watcher] {tag}: {rel}")
        except Exception as e:
            print(f"[watcher] error: {abs_path}: {e}", file=sys.stderr)

    def _handle_delete(self, abs_path: str) -> None:
        if not self._is_target(abs_path):
            return
        try:
            rel = Path(abs_path).relative_to(VAULT_ROOT).as_posix()
            delete_document(rel)
            print(f"[watcher] deleted: {rel}")
        except Exception as e:
            print(f"[watcher] delete error: {abs_path}: {e}", file=sys.stderr)

    def on_created(self, event: FileSystemEvent) -> None:
        if not event.is_directory:
            self._handle_upsert(event.src_path)

    def on_modified(self, event: FileSystemEvent) -> None:
        if not event.is_directory:
            self._handle_upsert(event.src_path)

    def on_moved(self, event: FileSystemEvent) -> None:
        if event.is_directory:
            return
        if self._is_target(event.src_path):
            self._handle_delete(event.src_path)
        if self._is_target(event.dest_path):
            self._handle_upsert(event.dest_path)

    def on_deleted(self, event: FileSystemEvent) -> None:
        if not event.is_directory:
            self._handle_delete(event.src_path)


def run_once(scope: str) -> int:
    """One-shot scan-and-upload pass. Returns 0 on success, 1 on errors."""
    from rag.ingest import walk_vault

    files = walk_vault(scope)
    queued = dup = err = 0
    for path in files:
        try:
            rel = path.relative_to(VAULT_ROOT).as_posix()
            body = strip_frontmatter(path.read_text(encoding="utf-8",
                                                     errors="ignore"))
            if not body.strip():
                continue
            resp = upload_text(body, file_source=rel)
            if resp.get("status") == "success":
                queued += 1
                print(f"[once] queued: {rel}")
            else:
                dup += 1
                print(f"[once] {resp.get('status')}: {rel}")
        except Exception as e:
            err += 1
            print(f"[once] error: {path}: {e}", file=sys.stderr)
    print(f"[once] queued={queued} dup={dup} errors={err}")
    return 0 if err == 0 else 1


def run_daemon(scope: str) -> int:
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
        raise ValueError(f"Unknown scope: {scope}")

    observer = Observer()
    handler = VaultChangeHandler()
    watched = 0
    for dirname in targets:
        target = VAULT_ROOT / dirname
        if target.exists():
            observer.schedule(handler, str(target), recursive=True)
            print(f"[watcher] monitoring: {dirname}")
            watched += 1
        else:
            print(f"[watcher] skip (missing): {dirname}", file=sys.stderr)

    if watched == 0:
        print("[watcher] no directories to monitor", file=sys.stderr)
        return 1

    observer.start()
    print("[watcher] running. Press Ctrl+C to stop.")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n[watcher] stopping...")
    observer.stop()
    observer.join()
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--scope", default="nodes",
                    help="Scope: nodes | notes | mocs | study | all")
    ap.add_argument("--once", action="store_true",
                    help="One-shot scan-and-upload; do not enter daemon mode")
    args = ap.parse_args()

    if args.once:
        return run_once(args.scope)
    return run_daemon(args.scope)


if __name__ == "__main__":
    sys.exit(main())
