---
id: "f6a7b8c9-d0e1-4234-5678-9abcdef01234"
title: Contextual Retrieval
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
  - anthropic
aliases:
  - Contextual Embeddings
owner_moc: "[[yt-moc]]"
source:
  title: "What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"
  author: "MLTut (Hadel Zafar)"
  url: "https://www.youtube.com/watch?v=MBDiJAWx8xk"
  published: "2026-05-04"
  accessed: "2026-08-02"
  locator: "18:17 - 19:30"
---

# Definition
**Contextual Retrieval** is an advanced RAG technique popularized by Anthropic where document-level summary context is prepended to each chunk prior to embedding and indexing, preserving global document awareness for isolated passages.

---

# Python Implementation (Anthropic Claude API)

```python
import anthropic

client = anthropic.Anthropic(api_key="YOUR_ANTHROPIC_API_KEY")

def generate_contextual_chunk(full_document: str, chunk_text: str) -> str:
    prompt = f"""<document>
{full_document}
</document>

Here is a chunk from the document:
<chunk>
{chunk_text}
</chunk>

Please give a short 1-2 sentence context explaining what this chunk refers to within the overall document.
Do not explain the chunk, only place it in context."""

    response = client.messages.create(
        model="claude-3-5-haiku-20241022",
        max_tokens=100,
        temperature=0.0,
        messages=[{"role": "user", "content": prompt}]
    )
    
    context_prefix = response.content[0].text.strip()
    # Return enriched contextualized chunk string for embedding
    return f"[Context: {context_prefix}]\n\n{chunk_text}"

# Example Usage
doc = "2026 Corporate Expense Policy. Section 4: Travel Allowances..."
chunk = "Reimbursement claims for meal allowances must be submitted within 30 days."

contextualized_chunk = generate_contextual_chunk(doc, chunk)
# Value: "[Context: This chunk is from Section 4 of the 2026 Corporate Expense Policy covering travel allowances.]\n\nReimbursement claims..."
```

---

# Measured Impact
Anthropic benchmarks demonstrated that combining Contextual Retrieval with [[Reranking in RAG]] reduced retrieval failure rates by up to **67%**.

---

# Related Notes
- [[RAG Chunking Strategies]] — Solves boundary context loss.
- [[Reranking in RAG]] — Often paired together for production RAG pipelines.
- [[RAG Failure Modes]] — Eliminates isolated chunk ambiguity.

---

# Source
- MLTut (Hadel Zafar), *"What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"*, [YouTube](https://www.youtube.com/watch?v=MBDiJAWx8xk).
