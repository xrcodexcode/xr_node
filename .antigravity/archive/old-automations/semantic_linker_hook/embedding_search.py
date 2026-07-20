#!/usr/bin/env python3
"""Embedding search module for vector similarity computations."""

from __future__ import annotations
import os
import math
import json
from pathlib import Path
from typing import Any

# Import google-genai and dotenv if available
try:
    from google import genai
    from google.genai import types
except ImportError:
    genai = None

try:
    from dotenv import load_dotenv
    # Load dotenv from vault root
    for parent in [Path(__file__).resolve().parent] + list(Path(__file__).resolve().parents):
        if (parent / ".env").exists():
            load_dotenv(parent / ".env")
            break
except ImportError:
    pass

class EmbeddingEngine:
    def __init__(self, model_type: str = "local"):
        self.model_type = model_type
        self.client = None
        self.local_model = None
        self.available = False
        
        self._initialize_engine()

    def _initialize_engine(self):
        # 1. Try local sentence-transformers if configured or as a fallback
        if self.model_type == "local":
            try:
                from sentence_transformers import SentenceTransformer
                # Use a small, fast model
                self.local_model = SentenceTransformer("all-MiniLM-L6-v2")
                self.available = True
                print("[SemanticLinker] Loaded local SentenceTransformer model.")
                return
            except ImportError:
                # If local sentence-transformers is not available, we can fallback to Gemini API
                pass
                
        # 2. Try Gemini API if API key is present
        api_key = os.environ.get("GEMINI_API_KEY")
        if api_key and genai is not None:
            try:
                self.client = genai.Client(api_key=api_key)
                self.available = True
                print("[SemanticLinker] Initialized Gemini API embedding client.")
                return
            except Exception as e:
                print(f"[SemanticLinker] Failed to initialize Gemini API client: {e}")
                
        print("[SemanticLinker] Embedding engine not available. Falling back to lexical search.")

    def get_embedding(self, text: str) -> list[float] | None:
        """Generates embedding vector for a given text."""
        if not self.available:
            return None
            
        # Limit text length to prevent API limits / slow execution
        text = text[:4000]
        
        # 1. Use local SentenceTransformer if loaded
        if self.local_model is not None:
            try:
                vector = self.local_model.encode(text).tolist()
                return [float(x) for x in vector]
            except Exception as e:
                print(f"[SemanticLinker] Local embedding failed: {e}")
                return None
                
        # 2. Use Gemini API client if loaded
        if self.client is not None:
            try:
                # Use standard text-embedding-004 model
                response = self.client.models.embed_content(
                    model="text-embedding-004",
                    contents=text
                )
                if response.embeddings:
                    vector = response.embeddings[0].values
                    return [float(x) for x in vector]
            except Exception as e:
                print(f"[SemanticLinker] Gemini API embedding failed: {e}")
                return None
                
        return None

def cosine_similarity(v1: list[float], v2: list[float]) -> float:
    """Computes the cosine similarity between two vector lists."""
    if not v1 or not v2 or len(v1) != len(v2):
        return 0.0
        
    dot_product = sum(a * b for a, b in zip(v1, v2))
    norm_a = math.sqrt(sum(a * a for a in v1))
    norm_b = math.sqrt(sum(b * b for b in v2))
    
    if norm_a == 0.0 or norm_b == 0.0:
        return 0.0
        
    return dot_product / (norm_a * norm_b)
