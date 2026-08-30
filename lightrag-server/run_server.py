import os
import sys
from pathlib import Path
from dotenv import load_dotenv

# Ensure server working directory is set to this file's folder so relative paths (.env, ./data, ./logs) resolve correctly
SERVER_DIR = Path(__file__).resolve().parent
os.chdir(SERVER_DIR)

# Explicitly load .env from the server directory BEFORE lightrag.api.config is imported
load_dotenv(dotenv_path=SERVER_DIR / ".env", override=True)

# Ensure UTF-8 IO encoding on Windows console
os.environ["PYTHONIOENCODING"] = "utf-8"
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

# Configure event loop policy for Windows early to prevent socket binding race conditions
if sys.platform == "win32":
    import asyncio
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

from lightrag.api.lightrag_server import main

if __name__ == "__main__":
    main()

