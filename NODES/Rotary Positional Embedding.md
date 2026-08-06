---
id: 550e8400-e29b-41d4-a716-446655440003
title: Rotary Positional Embedding
type: atomic-note
status: atomic
domain: ai
source_type: article
created: 2026-08-06
updated: 2026-08-06
review: 2026-11-06
confidence: 95
version: 1
aliases:
  - RoPE
  - Rotary Position Embedding
tags:
  - ai
  - ml
  - llm
  - reference
owner_moc: 🤖 AI & Machine Learning Map of Content
sources:
  - 01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1.md
related:
  - [[NODES/FlashAttention]]
  - [[NODES/RAG vs Long Context Windows]]
schema_version: 4
---

# Rotary Positional Embedding

Rotary Positional Embedding (RoPE) encodes token position by rotating query and key feature vectors in two-dimensional sub-spaces by angles proportional to their absolute sequence indices.

## Why it matters

Traditional absolute position embeddings add a fixed or learned vector to input embeddings, which struggles to generalize when sequence lengths exceed pretraining context limits. 

RoPE applies a position-dependent rotation matrix to the query ($Q$) and key ($K$) projections inside attention heads. Because the inner product between two rotated vectors depends only on the distance $(m - n)$ between position $m$ and position $n$, RoPE naturally imparts relative positional decay to self-attention.

Extending RoPE to long contexts (via YaRN, Position Interpolation, or LongRoPE) enables models to process longer inputs, though effective long-context retrieval still requires strong model attention calibration.

## Related

- [[NODES/FlashAttention|FlashAttention]]
- [[NODES/RAG vs Long Context Windows|RAG vs Long Context Windows]]

Relationship: `encodes_position_for`

## Source

- [[01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1|The AI/ML Engineer Interview Guide for 2026 - Part 1]]
