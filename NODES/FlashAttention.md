---
id: 550e8400-e29b-41d4-a716-446655440002
title: FlashAttention
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
  - Flash Attention
  - IO-Aware Attention
tags:
  - ai
  - ml
  - llm
  - reference
owner_moc: 🤖 AI & Machine Learning Map of Content
sources:
  - 01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1.md
related:
  - [[NODES/Rotary Positional Embedding]]
  - [[NODES/RAG vs Long Context Windows]]
schema_version: 4
---

# FlashAttention

FlashAttention is an exact attention algorithm that accelerates Transformer execution by tiling memory access to minimize reads and writes between fast GPU SRAM and slow GPU High Bandwidth Memory (HBM).

## Why it matters

Standard self-attention requires materializing and storing an $N \times N$ attention matrix in GPU memory (where $N$ is sequence length), resulting in quadratic $O(N^2)$ memory bandwidth bottlenecks. 

FlashAttention restructures the attention computation into blocks (tiling) and uses online softmax re-scaling during the backward pass to recompute attention intermediate states on chip (in SRAM) rather than reading large matrices from HBM. 

It produces the exact same output as standard dense self-attention while drastically reducing memory footprint and boosting training and inference throughput for long-context language models.

## Related

- [[NODES/Rotary Positional Embedding|Rotary Positional Embedding]]
- [[NODES/RAG vs Long Context Windows|RAG vs Long Context Windows]]

Relationship: `accelerates_attention_for`

## Source

- [[01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1|The AI/ML Engineer Interview Guide for 2026 - Part 1]]
