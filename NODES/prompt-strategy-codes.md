---
id: 0109e844-047f-4652-82dc-5e26780ef04e
title: Prompt Strategy and Founder Codes
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
  - strategy
  - business
  - productivity
  - llm
  - processed
owner_moc: Prompt Engineering Map of Content
sources:
  - [[prompt-codes-reference]]
related:
  - prompt-thinking-codes
  - red-team-technique
  - prompt-combination-codes
  - first-principles-prompting
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Prompt Strategy and Founder Codes

## Definition

Prompt modifiers that reframe AI responses through high-stakes strategic lenses — founder constraints, maximum depth, credible skepticism, and gap-finding.

## Explanation

Four codes govern strategic thinking mode:

| Code | Phrase | Effect |
|------|--------|--------|
| `/founder` | "Founder mode" / "Think like a founder" | Resource constraints; build vs. buy; scrappy high-leverage answers |
| `/beastmode` | "Beast mode" / "Maximum output" | Full depth; no abbreviating; complete picture |
| `/skeptic` | "What would a skeptic say?" | Voices the sharpest, most credible objection |
| `/missing` | "What am I missing?" / "Find the gap" | Finds what you haven't considered given everything you've shared |

**`/founder` effect:** The AI stops giving the "safe corporate answer" and shifts to:
- What can you validate yourself before spending money?
- What actually matters vs. what looks good in a deck?
- What are the real trade-offs?

> Example shift: Instead of "consider hiring a specialist" → "here's how to validate this yourself in a week before spending on a hire."

**`/beastmode` warning:** Only use when you genuinely need full depth. Most prompts don't. For thorough research, strategy documents, or full breakdowns only.

**`/skeptic` vs `/redteam`:**
- `/skeptic` voices *one* sharp credible objection
- `/redteam` is a *systematic full* stress test of the entire plan

**`/missing` vs `/blindspot`:**
- `/missing` = gap in the information you've shared
- `/blindspot` = entire dimension of the problem you haven't seen

## Related

- [[prompt-thinking-codes]] — broader set including redteam, steelman, blindspot
- [[red-team-technique]] — adversarial complement
- [[first-principles-prompting]] — `/founder` pairs well with first-principles
- [[prompt-combination-codes]] — `/strategysession` uses founder-mode thinking

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
