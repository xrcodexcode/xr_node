---
id: "e5f6a7b8-c9d0-4123-4567-89abcdef0123"
title: Reranking in RAG
type: atomic-note
status: active
created: "2026-08-02T17:39:00"
modified: "2026-08-02T17:43:00"
review: "2026-09-02"
confidence: 95
tags:
  - workflow
  - ai
  - rag
  - reranking
aliases:
  - RAG Reranking
  - Re-ranker
owner_moc: "[[yt-moc]]"
source:
  title: "What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"
  author: "MLTut (Hadel Zafar)"
  url: "https://www.youtube.com/watch?v=MBDiJAWx8xk"
  published: "2026-05-04"
  accessed: "2026-08-02"
  locator: "16:55 - 17:37"
---

# Definition
**Reranking in RAG** is a two-stage retrieval pattern where an initial fast bi-encoder vector search retrieves a broad candidate list of passages (e.g., top 20 chunks), and a specialized cross-encoder model evaluates and re-scores each candidate passage against the specific query to select the highest-quality top-N passages (e.g., top 3) for prompt injection.

---

# Mathematical Contrast: Bi-Encoder vs Cross-Encoder

### Bi-Encoder (Vector Similarity)
Embeddings for Query $q$ and Document $d$ are computed independently:

$$\text{Score}_{\text{Bi}}(q, d) = \cos\big(E(q), E(d)\big) = \frac{E(q) \cdot E(d)}{\|E(q)\| \|E(d)\|}$$

- **Advantage**: Ultra-fast $O(1)$ vector lookup via HNSW index.
- **Limitation**: No cross-attention between $q$ and $d$ words.

### Cross-Encoder (Reranker)
Query $q$ and Document $d$ are fed jointly into full transformer cross-attention:

$$\text{Score}_{\text{Cross}}(q, d) = \text{Softmax}\Big(\text{Transformer}\big( [CLS] \mathbin{\Vert} q \mathbin{\Vert} [SEP] \mathbin{\Vert} d \big)\Big)$$

- **Advantage**: Full token-level cross-attention yields state-of-the-art relevance scoring.
- **Limitation**: Computationally too heavy to run across millions of documents (hence used as Stage 2).

---

# Python Implementation (SentenceTransformers CrossEncoder & Cohere)

```python
from sentence_transformers import CrossEncoder
import cohere

# Option A: Local Cross-Encoder Reranking
cross_encoder = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')

query = "What is the return period for digital software?"
candidate_chunks = [
    "Software licenses can be refunded within 14 days if unredeemed.",
    "Hardware returns must be initiated within 30 days.",
    "Digital downloads are eligible for store credit only."
]

# Create (query, chunk) pairs
pairs = [[query, chunk] for chunk in candidate_chunks]
scores = cross_encoder.predict(pairs)

# Re-sort candidates by cross-encoder score
reranked_candidates = [chunk for _, chunk in sorted(zip(scores, candidate_chunks), reverse=True)]

# Option B: Cohere Rerank API
co = cohere.Client(api_key="YOUR_COHERE_API_KEY")
response = co.rerank(
    model="rerank-v3.5",
    query=query,
    documents=candidate_chunks,
    top_n=2
)
top_passages = [result.document.text for result in response.results]
```

---

# Related Notes
- [[RAG Pipeline Architecture]] — Stage 2 retrieval optimization.
- [[RAG Failure Modes]] — Primary fix for Bad Retrieval and Context Overload.
- [[Contextual Retrieval]] — Complementary chunk enrichment pattern.

---

# Source
- MLTut (Hadel Zafar), *"What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"*, [YouTube](https://www.youtube.com/watch?v=MBDiJAWx8xk).
