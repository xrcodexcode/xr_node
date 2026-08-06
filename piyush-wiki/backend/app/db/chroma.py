import chromadb
from chromadb.config import Settings as ChromaSettings
from backend.app.core.config import settings
from backend.app.core.logging import logger

class ChromaManager:
    def __init__(self):
        self.client = None

    def initialize(self):
        try:
            self.client = chromadb.PersistentClient(
                path=settings.CHROMA_PERSIST_DIRECTORY,
                settings=ChromaSettings(allow_reset=True, anonymized_telemetry=False)
            )
            logger.info(f"ChromaDB initialized at path: {settings.CHROMA_PERSIST_DIRECTORY}")
        except Exception as e:
            logger.error(f"Failed to initialize ChromaDB: {e}")
            raise

    def get_client(self):
        if not self.client:
            self.initialize()
        return self.client

chroma_manager = ChromaManager()
