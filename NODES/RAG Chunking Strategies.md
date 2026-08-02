---
id: "c3d4e5f6-a7b8-4901-2345-6789abcdef01"
title: RAG Chunking Strategies
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
  - chunking
aliases:
  - Text Chunking
  - Chunking Strategies
owner_moc: "[[yt-moc]]"
source:
  title: "What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"
  author: "MLTut (Hadel Zafar)"
  url: "https://www.youtube.com/watch?v=MBDiJAWx8xk"
  published: "2026-05-04"
  accessed: "2026-08-02"
  locator: "11:16 - 14:04"
---

# Definition
**RAG Chunking Strategies** refer to the design choices and algorithms used to divide source documents into discrete, semantically coherent text units ("chunks") prior to vector embedding and retrieval.

---

# Python Implementation (LangChain Splitters)

```python
from langchain_text_splitters import (
    RecursiveCharacterTextSplitter,
    SentenceTransformersTokenTextSplitter
)

raw_document = """Retrieval Augmented Generation (RAG) is an AI architecture pattern.
It enhances Large Language Models by fetching relevant text passages.

Chunking is a critical step in building production RAG systems.
Choosing the right chunk size prevents loss of context and lowers API costs."""

# 1. Recursive Character Text Splitter (Paragraph -> Sentence -> Character)
recursive_splitter = RecursiveCharacterTextSplitter(
    chunk_size=150,
    chunk_overlap=30,
    separators=["\n\n", "\n", " ", ""]
)
recursive_chunks = recursive_splitter.split_text(raw_document)

# 2. Token-Based Chunking (Fixed Token Windows)
token_splitter = SentenceTransformersTokenTextSplitter(
    chunk_overlap=15,
    tokens_per_chunk=100
)
token_chunks = token_splitter.split_text(raw_document)
```

---

# Mathematical Formulations for Semantic Chunking

Semantic chunking calculates cosine distance $D$ between adjacent sentence vectors $v_i$ and $v_{i+1}$:

$$D(v_i, v_{i+1}) = 1 - \frac{v_i \cdot v_{i+1}}{\|v_i\|_2 \|v_{i+1}\|_2}$$

A chunk boundary is inserted whenever $D(v_i, v_{i+1}) > \tau$ (where $\tau$ is a specified distance threshold percentile, e.g. 95th percentile).

---

# Related Notes
- [[RAG Pipeline Architecture]] — Pre-embedding processing step.
- [[Contextual Retrieval]] — Advanced technique appending document context to chunks.
- [[RAG Failure Modes]] — How bad chunking triggers retrieval failures.

---

# Source
- MLTut (Hadel Zafar), *"What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"*, [YouTube](https://www.youtube.com/watch?v=MBDiJAWx8xk).
