---
id: 036e9506-002a-48d2-acd9-551215b39322
title: Prompt Thinking Mode Codes
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
  - red-team-technique
  - steelman-technique
  - first-principles-prompting
  - prompt-combination-codes
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Prompt Thinking Mode Codes

## Definition

Prompt modifiers that change *how* the AI reasons before producing an answer — ranging from step-by-step transparency to adversarial stress-testing.

## Explanation

Eight codes govern thinking mode:

| Code | Phrase | Effect |
|------|--------|--------|
| `/stepbystep` | "Think step by step" | Reason before answering; shows working; reduces errors |
| `/deepthink` | "Take your time on this" | Quality over speed; more angles considered |
| `/firstprinciples` | "Break this down from scratch" | Strip assumptions; rebuild from verifiable truth |
| `/redteam` | "Red team this" | Full adversarial attack on your idea/plan |
| `/steelman` | "Make the strongest case for" | Build the best possible version of an argument |
| `/blindspot` | "What am I not seeing?" | Find the entire dimension you haven't looked at |
| `/pokeholes` | "Poke holes in this" | Quick adversarial sanity check |

**Evidence-backed code:** `/stepbystep` is the most empirically supported — chain-of-thought reasoning measurably improves accuracy on complex tasks.

**Key distinctions:**
- `/redteam` vs `/pokeholes`: Red team is systematic + full stress test. Pokeholes is a quick gut-check.
- `/redteam` vs `/blindspot`: Red team attacks what you *have* seen. Blindspot finds what you *haven't* seen.
- `/steelman` vs `/redteam`: They are opposites — steelman builds the strongest case *for*, red team attacks.

**Origins:**
- `/redteam` — Military/intelligence: a team whose job is to find weaknesses before enemies do
- `/steelman` — Philosophy: engage the best version of an argument (vs. strawman = weakest version)
- `/firstprinciples` — Aristotle + Elon Musk: reason from fundamental truths, not analogy

## Related

- [[red-team-technique]] — deep dive on adversarial review
- [[steelman-technique]] — deep dive on steelmanning
- [[first-principles-prompting]] — deep dive on first-principles reasoning
- [[prompt-combination-codes]] — `/pitchtest` = redteam + skeptic + steelman
- [[prompt-strategy-codes]] — `/skeptic` + `/missing` are related adversarial tools

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
