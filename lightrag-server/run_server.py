import os
import sys

# Ensure UTF-8 IO encoding on Windows console
os.environ["PYTHONIOENCODING"] = "utf-8"
sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

from lightrag.api.lightrag_server import main

if __name__ == "__main__":
    main()
