---
id: "a7b8c9d0-e1f2-4345-6789-abcdef012345"
title: Hypothetical Document Embedding
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
  - hyde
aliases:
  - HyDE
owner_moc: "[[yt-moc]]"
source:
  title: "What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"
  author: "MLTut (Hadel Zafar)"
  url: "https://www.youtube.com/watch?v=MBDiJAWx8xk"
  published: "2026-05-04"
  accessed: "2026-08-02"
  locator: "19:31 - 20:23"
---

# Definition
**Hypothetical Document Embedding (HyDE)** is a RAG retrieval technique where an LLM first generates a speculative hypothetical answer to a user's question, and that hypothetical answer's vector embedding is used to search the vector database instead of the raw user query vector.

---

# HyDE Workflow

```mermaid
flowchart TD
    A[User Query] --> B[LLM Generates Hypothetical Answer]
    B --> C[Vector Embedding of Hypothetical Answer]
    C --> D[Vector Similarity Search in Database]
    D --> E[Real Document Chunks Retrieved]
    E --> F[LLM Final Answer Generation]
```

---

# Python Implementation (LangChain HyDE)

```python
from langchain_community.embeddings import OpenAIEmbeddings
from langchain.chains import HypotheticalDocumentEmbedder
from langchain_openai import OpenAI

# Initialize Base Embedding Model & LLM
base_embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
llm = OpenAI(temperature=0.0)

# Build HyDE Embedder Chain
hyde_embeddings = HypotheticalDocumentEmbedder.from_llm(
    llm=llm,
    base_embeddings=base_embeddings,
    prompt_key="web_search"  # Built-in prompt template for hypothetical passages
)

# Generate Vector Embedding for Query via HyDE
query = "What are the rules regarding refunds for digital goods?"
query_vector = hyde_embeddings.embed_query(query)
# The vector is now in the semantic space of a *response* rather than a *question*
```

---

# Related Notes
- [[Retrieval Augmented Generation]] — Retrieval enhancement strategy.
- [[RAG Pipeline Architecture]] — Replaces step 6 query vector embedding.
- [[RAG Failure Modes]] — Risk of hallucinated query expansion.

---

# Source
- MLTut (Hadel Zafar), *"What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"*, [YouTube](https://www.youtube.com/watch?v=MBDiJAWx8xk).
