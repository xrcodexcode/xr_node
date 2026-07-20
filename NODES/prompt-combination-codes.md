---
id: 9bb412c3-e366-46f2-bc0f-2dd1fb895029
title: Prompt Combination Codes
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
  - framework
  - ai
  - productivity
  - strategy
  - llm
  - processed
owner_moc: Prompt Engineering Map of Content
sources:
  - [[prompt-codes-reference]]
related:
  - prompt-thinking-codes
  - prompt-honesty-codes
  - prompt-voice-format-codes
  - prompt-reasoning-codes
  - prompt-output-control-codes
  - red-team-technique
  - steelman-technique
  - first-principles-prompting
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Prompt Combination Codes

## Definition

**Combination codes** are pre-stacked multi-code prompt configurations optimized for specific high-value use cases — removing the need to manually compose code stacks each time.

## Explanation

Each combo is a named shortcut to a proven multi-code configuration:

| Combo | Codes Inside | Use For |
|-------|-------------|---------|
| `/strategysession` | firstprinciples + deepthink + nohedge | Major business decisions, pivots, pricing, positioning |
| `/pitchtest` | redteam + skeptic + steelman | Before any pitch, proposal, or presentation |
| `/contentdraft` | ghost + interesting + nopreamble | Writing content that sounds like you and is worth reading |
| `/decisionaudit` | blindspot + missing + firstprinciples | High-stakes decisions — find what you're not seeing before committing |
| `/deepdraft` | selfcheck + ghost + compress | Content ready to publish — in your voice, self-reviewed, tightened |
| `/fullstress` | redteam + simulate + contrarian | Maximum pressure-testing — attacks from three different angles |
| `/claritycheck` | eli5 + onesentence + analogize | Explaining any concept simply — to yourself or someone else |

**Stack design principles:**
1. **Complementary angles** — each code in a stack adds a different dimension, not the same thing twice
2. **Sequential logic** — in most stacks, the codes implicitly run in order (e.g., `/pitchtest`: first attack [redteam], then voice the smart objector [skeptic], then build the strongest case [steelman])
3. **Calibrated depth** — stacks like `/strategysession` assume you want depth; stacks like `/claritycheck` assume you want simplicity

**Most important combos to memorize:**
- **`/pitchtest`** — use before anything you're going to present to someone else
- **`/decisionaudit`** — use before any irreversible decision
- **`/deepdraft`** — use for any content you'll publish under your name

## Related

- [[prompt-thinking-codes]] — redteam, steelman, firstprinciples, blindspot
- [[prompt-honesty-codes]] — nopreamble, nohedge
- [[prompt-voice-format-codes]] — ghost, interesting
- [[prompt-output-control-codes]] — selfcheck, compress
- [[prompt-reasoning-codes]] — simulate, contrarian
- [[prompt-simplification-codes]] — eli5, onesentence, analogize (via claritycheck)

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
