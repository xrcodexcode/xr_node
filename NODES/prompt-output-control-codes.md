---
id: 4cf2a27e-a780-446c-9125-fde33a525e9e
title: Prompt Output Control Codes
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
  - prompt-voice-format-codes
  - prompt-combination-codes
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Prompt Output Control Codes

## Definition

Prompt modifiers that control the *quality, size, and precision* of AI output — through self-review loops, intelligent compression, and explicit constraint setting.

## Explanation

Three codes govern output control:

| Code | Phrase | Effect |
|------|--------|--------|
| `/selfcheck` | "Check your own answer" | Build → critique → improve before showing output |
| `/compress` | "Make this smaller without losing anything" | Remove non-essential; preserve all meaningful content |
| `/constraintbox` | "Within these limits: [x, y, z]" | Explicit guardrails — length, audience, format, tone |

**`/selfcheck` loop:**
> Build → critique → improve (all internal, before you see it)

This is a zero-cost revision pass. Instead of sending output back for a second draft, the AI self-critiques and rewrites first. Pairs with `/brutal` for genuinely harsh self-review.

**`/compress` vs `/tldr`:**
- `/tldr` = just give me the main point
- `/compress` = give me everything, but leaner — the *shape* stays, the *fat* goes
- Use compress when you need the full argument/structure, just tightened

**`/constraintbox` power:** The tighter the constraints, the sharper the output. Vague prompts produce vague output. Specific constraints force specificity.

> Example: "Explain this to a first-time founder. Under 100 words. No jargon. End with one question."

**When to use each:**
- High-stakes document → `/selfcheck` (+ `/brutal`)
- Long draft to tighten → `/compress`
- Specific platform or audience requirements → `/constraintbox`

## Related

- [[prompt-honesty-codes]] — `/brutal` pairs with `/selfcheck` for harsh self-review
- [[prompt-voice-format-codes]] — `/ghost` + `/selfcheck` + `/compress` = `/deepdraft`
- [[prompt-combination-codes]] — `/deepdraft` = selfcheck + ghost + compress

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
