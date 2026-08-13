"""Structured logging configuration with console and file output."""
from __future__ import annotations

import json
import logging
import sys
from datetime import datetime, timezone
from pathlib import Path

_configured = False


class JSONFormatter(logging.Formatter):
    """Emit log records as single-line JSON objects."""

    def format(self, record: logging.LogRecord) -> str:
        entry = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
        }
        if record.exc_info and record.exc_info[1]:
            entry["exception"] = self.formatException(record.exc_info)
        # Attach extra fields from record
        for key in ("task_id", "agent_id", "tool", "duration_ms"):
            val = getattr(record, key, None)
            if val is not None:
                entry[key] = val
        return json.dumps(entry, default=str)


class RichTextFormatter(logging.Formatter):
    """Human-readable colored console output."""

    COLORS = {
        "DEBUG": "\033[36m",     # Cyan
        "INFO": "\033[32m",      # Green
        "WARNING": "\033[33m",   # Yellow
        "ERROR": "\033[31m",     # Red
        "CRITICAL": "\033[35m",  # Magenta
    }
    RESET = "\033[0m"

    def format(self, record: logging.LogRecord) -> str:
        color = self.COLORS.get(record.levelname, "")
        ts = datetime.now().strftime("%H:%M:%S")
        prefix = f"{color}{ts} [{record.levelname:<8}]{self.RESET}"
        msg = record.getMessage()
        name = f"\033[90m{record.name}\033[0m"  # Dim gray
        return f"{prefix} {name} — {msg}"


def setup_logging(
    level: str = "INFO",
    log_format: str = "text",
    log_file: str | None = None,
) -> None:
    """Configure root logger with console handler and optional file handler."""
    global _configured
    if _configured:
        return

    root = logging.getLogger()
    root.setLevel(getattr(logging, level.upper(), logging.INFO))

    # Remove any pre-existing handlers
    root.handlers.clear()

    # Console handler
    console = logging.StreamHandler(sys.stdout)
    console.setLevel(root.level)
    if log_format == "json":
        console.setFormatter(JSONFormatter())
    else:
        console.setFormatter(RichTextFormatter())
    root.addHandler(console)

    # File handler (always JSON for machine parsing)
    if log_file:
        log_path = Path(log_file)
        log_path.parent.mkdir(parents=True, exist_ok=True)
        file_handler = logging.FileHandler(str(log_path), encoding="utf-8")
        file_handler.setLevel(root.level)
        file_handler.setFormatter(JSONFormatter())
        root.addHandler(file_handler)

    # Quiet noisy libraries
    logging.getLogger("uvicorn.access").setLevel(logging.WARNING)
    logging.getLogger("sqlalchemy.engine").setLevel(logging.WARNING)
    logging.getLogger("httpcore").setLevel(logging.WARNING)
    logging.getLogger("httpx").setLevel(logging.WARNING)

    _configured = True


def get_logger(name: str) -> logging.Logger:
    """Get a named logger."""
    return logging.getLogger(name)


# Convenience logger for the application
logger = get_logger("xr-nodes")
