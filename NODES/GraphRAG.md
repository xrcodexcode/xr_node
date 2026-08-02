---
id: "c9d0e1f2-a3b4-4567-89ab-cdef01234567"
title: GraphRAG
type: atomic-note
status: active
created: "2026-08-02T17:39:00"
modified: "2026-08-02T17:43:00"
review: "2026-09-02"
confidence: 95
tags:
  - concept
  - ai
  - rag
  - knowledge-graph
aliases:
  - Graph-based RAG
owner_moc: "[[yt-moc]]"
source:
  title: "What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"
  author: "MLTut (Hadel Zafar)"
  url: "https://www.youtube.com/watch?v=MBDiJAWx8xk"
  published: "2026-05-04"
  accessed: "2026-08-02"
  locator: "21:00 - 21:55"
---

# Definition
**GraphRAG** is a retrieval augmented generation pattern (popularized by Microsoft Research) that extracts entity-relationship networks from text corpora to build a Knowledge Graph, using graph connectivity alongside vector similarity to synthesize complex multi-document answers.

---

# Python Implementation (NetworkX Entity-Graph Traversal)

```python
import networkx as nx

# 1. Build Knowledge Graph from Extracted Entities & Relationships
kg = nx.DiGraph()

# Add Entity Nodes & Typed Relationship Edges
kg.add_edge("Digital Products", "Return Policy", relation="governed_by")
kg.add_edge("Return Policy", "14-Day Refund Window", relation="defines")
kg.add_edge("14-Day Refund Window", "Unredeemed License Key", relation="requires_condition")

# 2. Graph Traversal Retrieval
def retrieve_subgraph_context(start_entity: str, depth: int = 2) -> list[str]:
    edges = nx.bfs_edges(kg, source=start_entity, depth_limit=depth)
    retrieved_facts = []
    for u, v in edges:
        relation = kg[u][v]['relation']
        retrieved_facts.append(f"Entity '{u}' -> [{relation}] -> '{v}'")
    return retrieved_facts

# Example Query Traversal
facts = retrieve_subgraph_context("Digital Products")
# Output:
# "Entity 'Digital Products' -> [governed_by] -> 'Return Policy'"
# "Entity 'Return Policy' -> [defines] -> '14-Day Refund Window'"
```

---

# Related Notes
- [[Retrieval Augmented Generation]] — Structural graph evolution.
- [[Agentic RAG]] — Agentic graph traversal patterns.
- [[RAG Pipeline Architecture]] — Graph index vs vector index comparison.

---

# Source
- MLTut (Hadel Zafar), *"What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"*, [YouTube](https://www.youtube.com/watch?v=MBDiJAWx8xk).
