---
id: 4811a4dd-a7a2-46c1-bcd1-74d62fe72c65
title: Prompt Honesty and Directness Codes
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
  - prompt-simplification-codes
  - prompt-thinking-codes
  - prompt-output-control-codes
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Prompt Honesty and Directness Codes

## Definition

Prompt modifiers that strip AI default politeness, hedging, and warm-up filler, forcing direct, committed, unfiltered output.

## Explanation

Four codes govern directness:

| Code | Phrase | Effect |
|------|--------|--------|
| `/brutal` | "Be brutally honest" / "No filter" | Removes politeness; real assessment of weaknesses |
| `/nopreamble` | "Skip the preamble" / "Just answer" | No "Great question!" — answer starts immediately |
| `/nohedge` | "No hedging" / "Commit to an answer" | Removes "however," "it depends" — forces a position |
| `/onesentence` | "One sentence only" | Maximum distillation; forces conceptual clarity |

**The default problem:** AI models are trained to be agreeable and thorough, which produces:
- Unnecessary warm-up phrases
- Hedged positions that avoid commitment
- Over-qualified answers that obscure the real recommendation

**Stacking rule:** `/brutal` + `/nopreamble` is the highest-efficiency combo for feedback sessions.

**`/onesentence` as a clarity test:** If a concept can't be stated in one sentence, it either isn't understood well enough or isn't actually atomic. Use it to stress-test ideas before pitching them.

## Related

- [[prompt-output-control-codes]] — `/selfcheck` + `/brutal` creates self-critical review
- [[prompt-thinking-codes]] — `/nohedge` pairs well with `/firstprinciples`
- [[prompt-combination-codes]] — `/contentdraft` uses `/nopreamble` as a base layer

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
