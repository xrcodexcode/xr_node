---
id: b284a714-fc12-46ad-b3a9-2904501b48a7
title: Prompt Voice and Format Codes
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
  - writing
  - productivity
  - llm
  - processed
owner_moc: Prompt Engineering Map of Content
sources:
  - [[prompt-codes-reference]]
related:
  - prompt-honesty-codes
  - prompt-output-control-codes
  - prompt-combination-codes
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Prompt Voice and Format Codes

## Definition

Prompt modifiers that control the *tone, personality, and register* of AI output — from ghostwritten personal voice to stripped-down conversational to genuinely engaging.

## Explanation

Three codes govern voice and format:

| Code | Phrase | Effect |
|------|--------|--------|
| `/ghost` | "Ghost this" / "Write this in my voice" | Writes as you — your tone, vocabulary, rhythm |
| `/friend` | "Friend mode" | Drops formal/corporate language; conversational, direct, human |
| `/interesting` | "Give me the version of this that's actually interesting" | Rewrites flat-but-correct output with texture and a point of view |

**The AI default problem:** Models default to polished, formal, hedged output that sounds like a press release or a LinkedIn post — technically correct but impersonal and lifeless.

**`/ghost` activation protocol:**
1. Share 3–5 examples of your existing writing first
2. Then use `/ghost` on the new piece
3. Iterate: "Ghost this but make it 20% more direct" or "warmer"
4. More examples = better voice match

**`/interesting` vs `/friend`:**
- `/friend` changes *register* (formal → conversational)
- `/interesting` changes *texture* (flat → has a genuine point of view)
- Combine both when you want content that feels human AND is worth reading

**When to use `/ghost`:**
- Any content you'll publish under your name (captions, emails, DMs, posts)
- When AI output is good in substance but clearly not *you*

## Related

- [[prompt-honesty-codes]] — `/nopreamble` is a prerequisite for good ghost output
- [[prompt-output-control-codes]] — `/selfcheck` + `/ghost` + `/compress` = `/deepdraft`
- [[prompt-combination-codes]] — `/contentdraft` = ghost + interesting + nopreamble

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
