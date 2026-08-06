from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "Piyush Wiki Backend"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    
    # Vault & File Storage
    VAULT_PATH: Path = Path("./vault")
    DATABASE_URL: str = "sqlite+aiosqlite:///./piyush_wiki.db"
    CHROMA_PERSIST_DIRECTORY: str = "./chroma_db"
    
    # Security / Auth Ephemeral Tokens
    PIYUSH_WIKI_SECRET: Optional[str] = "dev-secret-key-change-in-prod"
    
    # CORS Origins
    CORS_ORIGINS: list[str] = ["http://localhost:3000", "http://127.0.0.1:3000"]
    
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )

settings = Settings()
