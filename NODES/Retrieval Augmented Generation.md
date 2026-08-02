---
id: "a1b2c3d4-e5f6-4a5b-8c7d-9e0f1a2b3c4d"
title: Retrieval Augmented Generation
type: atomic-note
status: active
created: "2026-08-02T17:39:00"
modified: "2026-08-02T17:43:00"
review: "2026-09-02"
confidence: 95
tags:
  - concept
  - ai
  - llm
  - rag
  - definition
aliases:
  - RAG
owner_moc: "[[yt-moc]]"
source:
  title: "What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"
  author: "MLTut (Hadel Zafar)"
  url: "https://www.youtube.com/watch?v=MBDiJAWx8xk"
  published: "2026-05-04"
  accessed: "2026-08-02"
  locator: "5:45 - 6:46"
---

# Definition
**Retrieval Augmented Generation (RAG)** is an AI architecture pattern that enhances Large Language Model (LLM) responses by fetching relevant factual text passages from external databases at query time and appending them to the LLM prompt context before answer generation.

---

# Mathematical Formulation

$$\text{LLM Output} = f_{\theta}\Big( \text{Prompt}_{\text{system}} \mathbin{\Vert} \text{Passages}_{\text{retrieved}}(q) \mathbin{\Vert} q \Big)$$

Where:
- $q$ is the user query vector.
- $\text{Passages}_{\text{retrieved}}(q) = \arg\max_{p \in \mathcal{D}}^{(K)} \text{Sim}(E(q), E(p))$ represents the top-$K$ text passages retrieved from corpus $\mathcal{D}$ using embedding model $E$.
- $\mathbin{\Vert}$ denotes string concatenation.
- $f_{\theta}$ represents the auto-regressive transformer generator parameterized by weights $\theta$.

---

# Python Implementation

```python
import openai
from sentence_transformers import SentenceTransformer
import numpy as np

class BasicRAG:
    def __init__(self, corpus: list[str], embedding_model_name: str = 'all-MiniLM-L6-v2'):
        self.corpus = corpus
        self.encoder = SentenceTransformer(embedding_model_name)
        # Pre-compute document embeddings (Offline Indexing)
        self.doc_embeddings = self.encoder.encode(corpus, convert_to_tensor=True)

    def retrieve(self, query: str, top_k: int = 2) -> list[str]:
        query_vec = self.encoder.encode(query, convert_to_tensor=True)
        # Calculate Cosine Similarities
        scores = np.dot(self.doc_embeddings.cpu(), query_vec.cpu())
        top_indices = np.argsort(scores)[::-1][:top_k]
        return [self.corpus[i] for i in top_indices]

    def generate_answer(self, query: str, top_k: int = 2) -> str:
        retrieved_passages = self.retrieve(query, top_k=top_k)
        context = "\n---\n".join(retrieved_passages)
        
        prompt = f"""Use the following context passages to answer the question. If the answer is not contained in the context, say 'I do not have enough information.'

Context:
{context}

Question: {query}
Answer:"""

        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.0
        )
        return response.choices[0].message.content
```

---

# Key Benefits
- Prevents reliance on static model knowledge cutoffs.
- Drastically reduces hallucinations by grounding answers in retrieved source documents.
- Significantly lowers token costs and API latency compared to dumping full document libraries into large context windows.

---

# Related Notes
- [[RAG Pipeline Architecture]] — The step-by-step two-phase indexing and retrieval process.
- [[RAG Chunking Strategies]] — Passages splitting strategies prior to vector embedding.
- [[RAG Failure Modes]] — Architectural breakdowns and mitigation strategies.
- [[RAG vs Long Context Windows]] — Trade-offs between massive prompt windows and dynamic RAG.

---

# Source
- MLTut (Hadel Zafar), *"What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"*, [YouTube](https://www.youtube.com/watch?v=MBDiJAWx8xk).
