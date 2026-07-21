"""
Advanced RAG Query & Knowledge Graph Retrieval Engine for NexusDB
Features:
  1. Hybrid Search (ChromaDB Vector + BM25 Keyword Search via Reciprocal Rank Fusion)
  2. Cross-Encoder Reranking
  3. Metadata Filtering (tags, note status, type, relative path / folder)
  4. Obsidian Link Expansion (Knowledge Graph Context Retrieval)
  5. Ollama LLM Grounding Integration
"""

import sys
import json
import re
import urllib.request
import urllib.error
from pathlib import Path
from typing import List, Dict, Any, Optional, Set

import chromadb
from chromadb.utils import embedding_functions

from rag.config import get_rag_settings, VAULT_ROOT, RAG_DIR

# Optional Rank-BM25 import
try:
    from rank_bm25 import BM25Okapi
    HAS_BM25 = True
except ImportError:
    HAS_BM25 = False

# Optional CrossEncoder import
try:
    from sentence_transformers import CrossEncoder
    HAS_CROSS_ENCODER = True
except ImportError:
    HAS_CROSS_ENCODER = False


def tokenize_text(text: str) -> List[str]:
    """Tokenize text into lowercased alphanumeric words."""
    return re.findall(r"\w+", text.lower())


class AdvancedVaultRetriever:
    def __init__(self):
        self.settings = get_rag_settings()
        self.db_path = Path(self.settings.get("chroma_db_path", RAG_DIR / "chroma"))
        self.model_name = self.settings.get("embedding_model", "BAAI/bge-small-en-v1.5")
        
        self.chroma_client = chromadb.PersistentClient(path=str(self.db_path))

        try:
            self.embedding_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
                model_name=self.model_name
            )
        except Exception:
            self.embedding_fn = embedding_functions.DefaultEmbeddingFunction()

        self.collection = self.chroma_client.get_or_create_collection(
            name="nexusdb_notes",
            embedding_function=self.embedding_fn
        )

        self.reranker_model = None
        reranker_cfg = self.settings.get("reranker", {})
        if reranker_cfg.get("enabled", False) and HAS_CROSS_ENCODER:
            try:
                model_id = reranker_cfg.get("model", "cross-encoder/ms-marco-MiniLM-L-6-v2")
                self.reranker_model = CrossEncoder(model_id)
            except Exception as e:
                print(f"[Info] Reranker model initialization skipped: {e}")

    def _get_all_documents(self, filter_metadata: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Fetch indexed documents for BM25 matching."""
        kwargs = {}
        if filter_metadata:
            kwargs["where"] = filter_metadata
        try:
            return self.collection.get(**kwargs)
        except Exception:
            return {"ids": [], "documents": [], "metadatas": []}

    def hybrid_search(
        self,
        query: str,
        top_k: int = 5,
        candidate_k: int = 20,
        filter_metadata: Optional[Dict[str, Any]] = None
    ) -> List[Dict[str, Any]]:
        """Perform Hybrid Search combining Vector Search & BM25 via Reciprocal Rank Fusion (RRF)."""
        count = self.collection.count()
        if count == 0:
            return []

        # 1. Vector Search
        actual_k = min(candidate_k, count)
        vector_kwargs = {"query_texts": [query], "n_results": actual_k}
        if filter_metadata:
            vector_kwargs["where"] = filter_metadata

        vector_results = self.collection.query(**vector_kwargs)

        vector_candidates = {}
        if vector_results and "documents" in vector_results and vector_results["documents"]:
            docs = vector_results["documents"][0]
            ids = vector_results["ids"][0]
            metas = vector_results["metadatas"][0] if "metadatas" in vector_results else [{}] * len(docs)
            distances = vector_results["distances"][0] if "distances" in vector_results and vector_results["distances"] else [0.0] * len(docs)

            for rank, doc_id in enumerate(ids):
                vector_candidates[doc_id] = {
                    "id": doc_id,
                    "text": docs[rank],
                    "metadata": metas[rank],
                    "vector_rank": rank + 1,
                    "distance": distances[rank]
                }

        # 2. BM25 Keyword Search
        bm25_candidates = {}
        all_docs_data = self._get_all_documents(filter_metadata)
        if HAS_BM25 and all_docs_data["ids"]:
            corpus_ids = all_docs_data["ids"]
            corpus_texts = all_docs_data["documents"]
            corpus_metas = all_docs_data["metadatas"]

            tokenized_corpus = [tokenize_text(doc) for doc in corpus_texts]
            bm25 = BM25Okapi(tokenized_corpus)
            tokenized_query = tokenize_text(query)
            bm25_scores = bm25.get_scores(tokenized_query)

            # Sort indices by BM25 score descending
            top_bm25_indices = sorted(range(len(bm25_scores)), key=lambda i: bm25_scores[i], reverse=True)[:actual_k]

            for rank, idx in enumerate(top_bm25_indices):
                doc_id = corpus_ids[idx]
                bm25_candidates[doc_id] = {
                    "id": doc_id,
                    "text": corpus_texts[idx],
                    "metadata": corpus_metas[idx],
                    "bm25_rank": rank + 1,
                    "bm25_score": float(bm25_scores[idx])
                }

        # 3. Reciprocal Rank Fusion (RRF)
        hybrid_cfg = self.settings.get("hybrid_search", {})
        rrf_k = hybrid_cfg.get("rrf_k", 60)
        v_weight = hybrid_cfg.get("vector_weight", 0.6)
        b_weight = hybrid_cfg.get("bm25_weight", 0.4)

        all_candidate_ids = set(vector_candidates.keys()) | set(bm25_candidates.keys())
        fusion_scores = []

        for cid in all_candidate_ids:
            v_info = vector_candidates.get(cid, {})
            b_info = bm25_candidates.get(cid, {})

            v_rank = v_info.get("vector_rank", 1000)
            b_rank = b_info.get("bm25_rank", 1000)

            # RRF Formula
            rrf_score = (v_weight / (rrf_k + v_rank)) + (b_weight / (rrf_k + b_rank))

            doc_text = v_info.get("text") or b_info.get("text", "")
            meta = v_info.get("metadata") or b_info.get("metadata", {})

            fusion_scores.append({
                "id": cid,
                "text": doc_text,
                "metadata": meta,
                "rrf_score": round(rrf_score, 6),
                "vector_rank": v_rank,
                "bm25_rank": b_rank
            })

        # Sort by RRF score descending
        fusion_scores.sort(key=lambda x: x["rrf_score"], reverse=True)
        top_candidates = fusion_scores[:candidate_k]

        # 4. Optional Cross-Encoder Reranking
        if self.reranker_model and top_candidates:
            pairs = [[query, c["text"]] for c in top_candidates]
            try:
                rerank_scores = self.reranker_model.predict(pairs)
                for idx, score in enumerate(rerank_scores):
                    top_candidates[idx]["rerank_score"] = float(score)
                top_candidates.sort(key=lambda x: x.get("rerank_score", 0.0), reverse=True)
            except Exception as e:
                print(f"[Info] Cross-Encoder reranking skipped: {e}")

        # Format final candidates
        results = []
        for cand in top_candidates[:top_k]:
            meta = cand["metadata"]
            results.append({
                "score": cand.get("rerank_score", cand["rrf_score"]),
                "rrf_score": cand["rrf_score"],
                "vector_rank": cand["vector_rank"],
                "bm25_rank": cand["bm25_rank"],
                "title": meta.get("title", "Untitled Note"),
                "heading": meta.get("heading", ""),
                "relative_path": meta.get("relative_path", "unknown"),
                "source_path": meta.get("source_path", ""),
                "tags": meta.get("tags", ""),
                "wikilinks": meta.get("wikilinks", ""),
                "type": meta.get("type", "note"),
                "status": meta.get("status", "active"),
                "text": cand["text"]
            })

        return results

    def expand_graph_context(self, retrieved_results: List[Dict[str, Any]], max_links: int = 3) -> List[Dict[str, Any]]:
        """Fetch linked Obsidian notes referenced in retrieved chunks via [[WikiLinks]]."""
        link_targets: Set[str] = set()
        retrieved_paths = {r["relative_path"] for r in retrieved_results}

        for r in retrieved_results:
            raw_links = r.get("wikilinks", "")
            if raw_links:
                for link in raw_links.split(","):
                    link_clean = link.strip()
                    if link_clean:
                        link_targets.add(link_clean)

        if not link_targets:
            return []

        expanded_contexts = []
        count = 0

        for target in link_targets:
            if count >= max_links:
                break

            # Search ChromaDB for chunks matching target note title or filename
            try:
                matches = self.collection.query(
                    query_texts=[target],
                    n_results=2
                )
                if matches and matches["documents"] and matches["documents"][0]:
                    doc = matches["documents"][0][0]
                    meta = matches["metadatas"][0][0]
                    rel_p = meta.get("relative_path", "")

                    if rel_p not in retrieved_paths:
                        expanded_contexts.append({
                            "target_link": target,
                            "title": meta.get("title", target),
                            "relative_path": rel_p,
                            "text": doc
                        })
                        retrieved_paths.add(rel_p)
                        count += 1
            except Exception:
                pass

        return expanded_contexts


def query_ollama(prompt: str, system_prompt: str, model: str = "gemma3", base_url: str = "http://localhost:11434") -> str:
    """Send context prompt to local Ollama server."""
    url = f"{base_url.rstrip('/')}/api/generate"
    payload = {
        "model": model,
        "prompt": prompt,
        "system": system_prompt,
        "stream": False
    }
    
    try:
        req = urllib.request.Request(
            url,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"}
        )
        with urllib.request.urlopen(req, timeout=30) as response:
            res_data = json.loads(response.read().decode("utf-8"))
            return res_data.get("response", "").strip()
    except urllib.error.URLError as e:
        return f"[Ollama Connection Error] Could not connect to Ollama at {base_url}: {e}"
    except Exception as e:
        return f"[Ollama Error] {e}"


def format_search_results(
    results: List[Dict[str, Any]],
    graph_context: List[Dict[str, Any]],
    query: str
) -> str:
    """Format search results and graph expanded context into Markdown output."""
    if not results:
        return f"### Local RAG Search Results for: '{query}'\n\n*No relevant notes found in local vector database.*"

    output = [f"### Local RAG Hybrid Search Results for: '{query}'\n"]

    for idx, res in enumerate(results, start=1):
        rel_path = res["relative_path"]
        title = res["title"]
        heading = f" > {res['heading']}" if res.get('heading') else ""
        score = res.get("score", 0.0)

        output.append(f"#### [{idx}] [{title}]({rel_path}){heading}")
        output.append(f"**Path**: `{rel_path}` | **Score**: `{score}` | **Ranks**: Vec #{res['vector_rank']}, BM25 #{res['bm25_rank']}")
        if res.get("tags"):
            output.append(f"**Tags**: `{res['tags']}`")
        output.append("```markdown")
        output.append(res["text"].strip())
        output.append("```\n")

    if graph_context:
        output.append("---\n### 🔗 Knowledge Graph / Linked Notes Context\n")
        for idx, g in enumerate(graph_context, start=1):
            output.append(f"#### [Linked Note {idx}] [{g['title']}]({g['relative_path']}) (Target: `[[{g['target_link']}]]`)")
            output.append("```markdown")
            output.append(g["text"].strip())
            output.append("```\n")

    return "\n".join(output)


def run_advanced_rag(
    query: str,
    top_k: int = 5,
    tag_filter: Optional[str] = None,
    type_filter: Optional[str] = None,
    use_llm: bool = False
) -> str:
    """Execute complete hybrid search, graph link expansion, and LLM grounding."""
    retriever = AdvancedVaultRetriever()

    filter_meta = {}
    if tag_filter:
        filter_meta["tags"] = tag_filter
    if type_filter:
        filter_meta["type"] = type_filter

    results = retriever.hybrid_search(
        query=query,
        top_k=top_k,
        filter_metadata=filter_meta if filter_meta else None
    )

    if not results:
        return f"No relevant notes found in NexusDB vault for query: '{query}'."

    graph_context = retriever.expand_graph_context(results, max_links=3)
    formatted_output = format_search_results(results, graph_context, query)

    if not use_llm:
        return formatted_output

    settings = get_rag_settings()
    llm_cfg = settings.get("llm", {})
    model_name = llm_cfg.get("model", "gemma3")
    base_url = llm_cfg.get("base_url", "http://localhost:11434")

    context_str = "\n\n".join([
        f"Source: {r['relative_path']}\nTitle: {r['title']}\nContent:\n{r['text']}"
        for r in results
    ])

    if graph_context:
        graph_str = "\n\n".join([
            f"Linked Source: {g['relative_path']}\nTitle: {g['title']}\nContent:\n{g['text']}"
            for g in graph_context
        ])
        context_str += f"\n\n--- Linked Graph Notes ---\n\n{graph_str}"

    system_prompt = (
        "You are the NexusDB Knowledge Assistant. Answer the user's question accurately using ONLY "
        "the provided local vault context and linked graph notes. Cite your source notes explicitly using file paths. "
        "If the context does not contain enough information, state clearly that local knowledge is missing."
    )

    user_prompt = f"Context:\n{context_str}\n\nQuestion: {query}\n\nAnswer:"

    print(f"Sending prompt to local Ollama ({model_name})...")
    llm_response = query_ollama(user_prompt, system_prompt, model=model_name, base_url=base_url)

    final_output = f"{llm_response}\n\n---\n{formatted_output}"
    return final_output


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="NexusDB Advanced Hybrid RAG Retriever")
    parser.add_argument("query", type=str, help="Search query string")
    parser.add_argument("--top-k", type=int, default=5, help="Number of top chunks to retrieve")
    parser.add_argument("--tag", type=str, default=None, help="Filter by tag (e.g. AI)")
    parser.add_argument("--type", type=str, default=None, help="Filter by document type (e.g. node, pdf)")
    parser.add_argument("--llm", action="store_true", help="Send context to Ollama for grounded answer")
    parser.add_argument("--json", action="store_true", help="Output raw JSON results")

    args = parser.parse_args()

    retriever = AdvancedVaultRetriever()

    filter_meta = {}
    if args.tag:
        filter_meta["tags"] = args.tag
    if args.type:
        filter_meta["type"] = args.type

    results = retriever.hybrid_search(
        query=args.query,
        top_k=args.top_k,
        filter_metadata=filter_meta if filter_meta else None
    )

    graph_ctx = retriever.expand_graph_context(results, max_links=3)

    if args.json:
        print(json.dumps({"retrieved": results, "graph_context": graph_ctx}, indent=2))
    elif args.llm:
        answer = run_advanced_rag(args.query, top_k=args.top_k, tag_filter=args.tag, type_filter=args.type, use_llm=True)
        print(answer)
    else:
        print(format_search_results(results, graph_ctx, args.query))
