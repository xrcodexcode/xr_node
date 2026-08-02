---
id: "d4e5f6a7-b8c9-4012-3456-789abcdef012"
title: RAG Failure Modes
type: atomic-note
status: active
created: "2026-08-02T17:39:00"
modified: "2026-08-02T17:43:00"
review: "2026-09-02"
confidence: 95
tags:
  - framework
  - ai
  - rag
  - debugging
aliases:
  - RAG Failures
owner_moc: "[[yt-moc]]"
source:
  title: "What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"
  author: "MLTut (Hadel Zafar)"
  url: "https://www.youtube.com/watch?v=MBDiJAWx8xk"
  published: "2026-05-04"
  accessed: "2026-08-02"
  locator: "14:10 - 16:47"
---

# Definition
**RAG Failure Modes** are predictable technical breakdown points where naive Retrieval Augmented Generation systems yield incorrect, hallucinated, or incomplete answers.

---

# Failure Mode Matrix & Fixes

| Failure Mode | Root Cause | Code / Query Solution |
|---|---|---|
| **Bad Retrieval** | Weak embeddings / bad chunking | Implement [[Reranking in RAG]] cross-encoders |
| **Missing Information** | Query topic not in database | Guardrail prompt: *"Say 'I don't know' if ungrounded"* |
| **Context Overload** | Too many chunks in context | Filter top-K with Re-rankers |
| **Stale Index** | Out-of-sync vector DB | Event-driven pipeline (CDC / Webhooks) |
| **Exact Match Failure** | Alphanumeric IDs missed by vector similarity | Hybrid Search (BM25 + PGVector) |

---

# PGVector SQL (Hybrid Vector + Full-Text Keyword Search)

```sql
-- Hybrid Search Query solving Exact Match Failure
WITH vector_search AS (
    SELECT id, content, 1 - (embedding <=> $1) AS vector_score
    FROM document_chunks
    ORDER BY embedding <=> $1 LIMIT 20
),
keyword_search AS (
    SELECT id, content, ts_rank(to_tsvector('english', content), plainto_tsquery('english', $2)) AS text_score
    FROM document_chunks
    WHERE to_tsvector('english', content) @@ plainto_tsquery('english', $2)
    ORDER BY text_score DESC LIMIT 20
)
SELECT COALESCE(v.id, k.id) AS id,
       COALESCE(v.content, k.content) AS content,
       (COALESCE(v.vector_score, 0) * 0.7 + COALESCE(k.text_score, 0) * 0.3) AS combined_score
FROM vector_search v
FULL OUTER JOIN keyword_search k ON v.id = k.id
ORDER BY combined_score DESC
LIMIT 5;
```

---

# Related Notes
- [[Retrieval Augmented Generation]] — Overall system context.
- [[Reranking in RAG]] — Remedy for bad retrieval.
- [[RAG Chunking Strategies]] — Remedy for context loss.

---

# Source
- MLTut (Hadel Zafar), *"What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"*, [YouTube](https://www.youtube.com/watch?v=MBDiJAWx8xk).
