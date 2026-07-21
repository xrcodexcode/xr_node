"""
RAG File Watcher Daemon for NexusDB
Monitors vault directories using Watchdog for file creation, modification, or deletion,
and automatically syncs vector database chunks incrementally in real time.
"""

import time
import sys
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler, FileSystemEvent

from rag.config import get_rag_settings, VAULT_ROOT
from rag.ingest import VaultIngester


class VaultChangeHandler(FileSystemEventHandler):
    def __init__(self, ingester: VaultIngester):
        super().__init__()
        self.ingester = ingester
        self.last_events = {}

    def is_target_file(self, path_str: str) -> bool:
        """Check if file has a supported document extension (.md, .markdown, .pdf)."""
        p = Path(path_str)
        settings = get_rag_settings()
        supported = tuple(settings.get("supported_extensions", [".md", ".markdown", ".pdf"]))
        return p.suffix.lower().endswith(supported) and not p.name.startswith(".")

    def on_created(self, event: FileSystemEvent):
        if not event.is_directory and self.is_target_file(event.src_path):
            file_path = Path(event.src_path)
            print(f"[Watcher] File created: {file_path.relative_to(VAULT_ROOT)}")
            added = self.ingester.ingest_file(file_path, force=True)
            print(f"[Watcher] Indexed {added} chunks for {file_path.name}")

    def on_modified(self, event: FileSystemEvent):
        if not event.is_directory and self.is_target_file(event.src_path):
            now = time.time()
            if event.src_path in self.last_events and (now - self.last_events[event.src_path]) < 1.0:
                return
            self.last_events[event.src_path] = now

            file_path = Path(event.src_path)
            print(f"[Watcher] File modified: {file_path.relative_to(VAULT_ROOT)}")
            added = self.ingester.ingest_file(file_path, force=False)
            if added > 0:
                print(f"[Watcher] Re-indexed {added} chunks for {file_path.name}")

    def on_deleted(self, event: FileSystemEvent):
        if not event.is_directory and self.is_target_file(event.src_path):
            file_path = Path(event.src_path)
            print(f"[Watcher] File deleted: {file_path.name}")
            self.ingester.remove_file(file_path)

    def on_moved(self, event: FileSystemEvent):
        if not event.is_directory:
            if self.is_target_file(event.src_path):
                self.ingester.remove_file(Path(event.src_path))
            if self.is_target_file(event.dest_path):
                dest_path = Path(event.dest_path)
                print(f"[Watcher] File moved to: {dest_path.relative_to(VAULT_ROOT)}")
                added = self.ingester.ingest_file(dest_path, force=True)
                print(f"[Watcher] Indexed {added} chunks for {dest_path.name}")


def start_watcher():
    """Start watching vault directories for real-time RAG index updates."""
    settings = get_rag_settings()
    indexed_dirs = settings.get("indexed_directories", [
        "02_NEW-KNOWLEDGE", "NOTES", "NODES", "03_MOC", "01_RAW"
    ])

    print("Initializing Vault Ingester for Watcher...")
    ingester = VaultIngester()
    
    print("Performing initial incremental vault index sync...")
    ingester.ingest_vault(force=False)

    event_handler = VaultChangeHandler(ingester)
    observer = Observer()

    watched_count = 0
    for dir_name in indexed_dirs:
        target_dir = VAULT_ROOT / dir_name
        if target_dir.exists():
            observer.schedule(event_handler, str(target_dir), recursive=True)
            print(f"[Watcher] Monitoring directory: {dir_name}")
            watched_count += 1

    if watched_count == 0:
        print("[Watcher Warning] No existing vault directories found to monitor!")

    observer.start()
    print("[Watcher Active] Real-time file sync active. Press Ctrl+C to stop.")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nStopping Watcher...")
        observer.stop()
    observer.join()


if __name__ == "__main__":
    start_watcher()
