#!/usr/bin/env python3
"""Retriever module implementing BM25, exact match, and hybrid search."""

from __future__ import annotations
import math
from typing import Any
from .scanner import Note

class BM25Indexer:
    def __init__(self, k1: float = 1.5, b: float = 0.75):
        self.k1 = k1
        self.b = b
        self.doc_count = 0
        self.avg_doc_len = 0.0
        self.doc_lens: dict[str, int] = {}
        self.doc_tfs: dict[str, dict[str, int]] = {}
        self.dfs: dict[str, int] = {}
        self.idfs: dict[str, float] = {}

    def fit(self, notes: list[Note]):
        """Fits the indexer on a collection of notes."""
        self.doc_count = len(notes)
        if self.doc_count == 0:
            return
            
        self.doc_lens.clear()
        self.doc_tfs.clear()
        self.dfs.clear()
        self.idfs.clear()
        
        total_len = 0
        
        # 1. Compute term frequencies (TFs) and document frequencies (DFs)
        for note in notes:
            doc_id = note.relative_path
            words = note.words
            self.doc_lens[doc_id] = len(words)
            total_len += len(words)
            
            tf: dict[str, int] = {}
            for w in words:
                tf[w] = tf.get(w, 0) + 1
            self.doc_tfs[doc_id] = tf
            
            for w in tf.keys():
                self.dfs[w] = self.dfs.get(w, 0) + 1
                
        self.avg_doc_len = total_len / self.doc_count if self.doc_count > 0 else 0.0
        
        # 2. Compute IDFs
        for w, df in self.dfs.items():
            # Standard Lucene BM25 IDF formula
            self.idfs[w] = math.log(1.0 + (self.doc_count - df + 0.5) / (df + 0.5))

    def score(self, query_words: list[str], doc_id: str) -> float:
        """Calculates the BM25 score of a document for a query."""
        if self.doc_count == 0 or doc_id not in self.doc_tfs:
            return 0.0
            
        score = 0.0
        tf = self.doc_tfs[doc_id]
        doc_len = self.doc_lens[doc_id]
        
        for w in query_words:
            if w not in self.idfs:
                continue
            word_tf = tf.get(w, 0)
            if word_tf == 0:
                continue
                
            idf = self.idfs[w]
            numerator = word_tf * (self.k1 + 1.0)
            denominator = word_tf + self.k1 * (1.0 - self.b + self.b * (doc_len / self.avg_doc_len))
            score += idf * (numerator / denominator)
            
        return score

class Retriever:
    def __init__(self, notes: list[Note]):
        self.notes = notes
        self.notes_map = {n.relative_path: n for n in notes}
        
        # Build lookup tables for exact/alias matches
        # Normalize titles/aliases to lowercase for case-insensitive lookup
        self.title_map: dict[str, Note] = {}
        self.alias_map: dict[str, Note] = {}
        
        for n in notes:
            self.title_map[n.title.lower()] = n
            for alias in n.aliases:
                self.alias_map[alias.lower()] = n
                
        # Initialize BM25
        self.bm25 = BM25Indexer()
        self.bm25.fit(notes)

    def retrieve(
        self,
        query_note: Note,
        embedding_engine: Any = None,
        cached_embeddings: dict[str, list[float]] | None = None,
        confidence_threshold: float = 0.75,
        max_results: int = 12
    ) -> list[tuple[Note, float, str]]:
        """
        Retrieves matching candidates for a query note.
        Returns a list of tuples: (matched_note, score, strategy_used).
        """
        results: dict[str, tuple[Note, float, str]] = {}
        
        # 1. Exact Title / Alias Matching
        # We extract noun phrases or titles linked inside the query note body
        # E.g., if query note mentions "lean startup", it can link to Lean Startup note.
        # Let's search if any known note title or alias is present in the query note body.
        query_body_lower = query_note.body.lower()
        
        for title_lower, note in self.title_map.items():
            if note.relative_path == query_note.relative_path:
                continue
            # If title is in the query body or title matches exactly
            if title_lower == query_note.title.lower():
                results[note.relative_path] = (note, 0.98, "exact_title_match")
            elif len(title_lower) > 4 and title_lower in query_body_lower:
                results[note.relative_path] = (note, 0.95, "title_mention_in_body")
                
        for alias_lower, note in self.alias_map.items():
            if note.relative_path == query_note.relative_path:
                continue
            if alias_lower == query_note.title.lower():
                results[note.relative_path] = (note, 0.97, "exact_alias_match")
            elif len(alias_lower) > 4 and alias_lower in query_body_lower:
                if note.relative_path not in results:
                    results[note.relative_path] = (note, 0.93, "alias_mention_in_body")

        # 2. BM25 Search
        bm25_scores = {}
        max_bm25 = 0.0
        for n in self.notes:
            if n.relative_path == query_note.relative_path:
                continue
            score = self.bm25.score(query_note.words, n.relative_path)
            if score > 0.0:
                bm25_scores[n.relative_path] = score
                if score > max_bm25:
                    max_bm25 = score
                    
        # Add BM25 results
        if max_bm25 > 0.0:
            for rel_path, score in bm25_scores.items():
                norm_score = score / max_bm25
                # Map to [0.5, 0.9] range
                mapped_score = 0.5 + 0.4 * norm_score
                if rel_path not in results or results[rel_path][1] < mapped_score:
                    results[rel_path] = (self.notes_map[rel_path], mapped_score, "bm25")

        # 3. Embedding Vector similarity (if available)
        if embedding_engine and embedding_engine.available and cached_embeddings:
            from .embedding_search import cosine_similarity
            query_emb = cached_embeddings.get(query_note.relative_path)
            if query_emb:
                for n in self.notes:
                    if n.relative_path == query_note.relative_path:
                        continue
                    n_emb = cached_embeddings.get(n.relative_path)
                    if n_emb:
                        sim = cosine_similarity(query_emb, n_emb)
                        # Normalize to [0.0, 1.0] from [-1, 1] (though usually cosine is >= 0 for text)
                        sim = max(0.0, sim)
                        
                        # Hybrid ranking
                        if n.relative_path in results:
                            # Combine score
                            prev_score, prev_strategy = results[n.relative_path][1], results[n.relative_path][2]
                            hybrid_score = 0.6 * sim + 0.4 * prev_score
                            results[n.relative_path] = (n, hybrid_score, f"hybrid_{prev_strategy}")
                        else:
                            if sim >= confidence_threshold:
                                results[n.relative_path] = (n, sim, "embedding")

        # Convert to list and sort by score descending
        sorted_results = sorted(results.values(), key=lambda x: x[1], reverse=True)
        
        # Filter by threshold and limit
        final_results = []
        for note, score, strategy in sorted_results:
            if score >= confidence_threshold:
                final_results.append((note, score, strategy))
            if len(final_results) >= max_results:
                break
                
        return final_results
