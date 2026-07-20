---
id: f400e7c7-ae92-4225-b63f-9afceb449142
title: Prompt Simplification Codes
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
  - productivity
  - llm
  - processed
owner_moc: Prompt Engineering Map of Content
sources:
  - [[prompt-codes-reference]]
related:
  - prompt-honesty-codes
  - prompt-thinking-codes
  - prompt-combination-codes
  - race-prompt-framework
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Prompt Simplification Codes

## Definition

A set of prompt modifiers that control the complexity level of AI output — from child-simple to PhD-dense — allowing the user to calibrate explanatory depth without rewriting the entire prompt.

## Explanation

Three core codes govern simplification:

| Code | Phrase | Effect |
|------|--------|--------|
| `/eli5` | "Explain Like I'm 5" | Maximum simplicity — no jargon, plain language, child-accessible |
| `/eliphd` | "ELI a PhD" / "Go deep" | Maximum density — precise technical language, no hand-holding |
| `/tldr` | "Give me the short version" | 2–4 sentence distillation of any content length |

**Key distinction between `/eli5` and `/tldr`:**
- `/eli5` changes the *register* (vocabulary and framing)
- `/tldr` changes the *length* (compression, not simplification)
- They can be combined: `/tldr` + `/eli5` = short AND simple

**When to use which:**
- Use `/eli5` when you don't understand the *concept*
- Use `/eliphd` when you need depth and precision (research, strategy)
- Use `/tldr` when you understand it but need the *summary* fast

## Related

- [[prompt-honesty-codes]] — `/onesentence` is the extreme form of `/tldr`
- [[prompt-combination-codes]] — `/claritycheck` combines eli5 + onesentence + analogize
- [[fewshot-vs-zeroshot-prompting]] — learning codes that control input style
- [[prompt-thinking-codes]] — depth-control for reasoning, not just output

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
