---
id: afa41436-319c-4bcc-9c86-fa8f3f7c84d3
title: Prompt Learning Codes
type: atomic-note
status: evergreen
domain: general
source_type: null
created: 2026-07-16
updated: 2026-07-16
review: 2026-10-16
confidence: 95
version: 1
aliases: []
tags:
  - technique
  - ai
  - learning
  - productivity
  - llm
  - processed
owner_moc: Prompt Engineering Map of Content
sources:
  - [[prompt-codes-reference]]
related:
  - fewshot-vs-zeroshot-prompting
  - socratic-prompting
  - prompt-simplification-codes
  - prompt-combination-codes
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Prompt Learning Codes

## Definition

Prompt modifiers that change *how you receive and understand information* — from example-driven pattern matching, to question-driven self-discovery, to analogy-based concept translation.

## Explanation

Four codes govern learning mode:

| Code | Phrase | Effect |
|------|--------|--------|
| `/fewshot` | "Here are examples of what I want" | Give 2–3 examples; AI reverse-engineers the pattern |
| `/zeroshot` | "No examples — just do this" | Precise instruction, immediate clean execution |
| `/socratic` | "Don't answer — ask me questions" | AI asks questions that lead you to figure it out yourself |
| `/analogize` | "Explain this using an analogy" | Translates abstract/technical concept into familiar comparison |

**`/analogize` in depth:**
Analogies unlock understanding by mapping an unfamiliar structure onto a familiar one. The AI finds a concrete parallel that carries the same logical relationships.

> "Explain token optimisation using an analogy" → "It's like packing a suitcase — the more carefully you fold things, the more fits in the same space."

**Best for `/analogize`:**
- Explaining a complex idea to someone else
- Understanding something deeply abstract yourself
- Making technical content accessible without dumbing it down

**Learning code selection guide:**
- Know what you want but need format precision → `/fewshot`
- Know what you want and format is obvious → `/zeroshot`
- Don't understand the concept → `/analogize` or `/eli5`
- Want to develop your own thinking → `/socratic`

## Related

- [[fewshot-vs-zeroshot-prompting]] — deep dive on the few-shot / zero-shot decision
- [[socratic-prompting]] — deep dive on question-driven learning
- [[prompt-simplification-codes]] — `/eli5` is the simplification equivalent of `/analogize`
- [[prompt-combination-codes]] — `/claritycheck` = eli5 + onesentence + analogize

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
