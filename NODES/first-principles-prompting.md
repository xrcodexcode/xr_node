---
id: 0cf7976f-d0df-474d-8745-933efd272a23
title: First Principles Prompting
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
  - philosophy
  - strategy
  - llm
  - processed
owner_moc: Prompt Engineering Map of Content
sources:
  - [[prompt-codes-reference]]
related:
  - prompt-thinking-codes
  - prompt-combination-codes
  - inversion-mental-model
  - red-team-technique
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# First Principles Prompting

## Definition

**First principles prompting** strips away all assumptions, received wisdom, and convention, then rebuilds the answer from the ground up using only what is verifiably true.

## Explanation

**Origin:** Aristotle + Elon Musk. Aristotle defined a "first principle" as a basic proposition that cannot be deduced from any other proposition. Musk popularized it in business: instead of reasoning by analogy ("we do it this way because everyone does"), reason from material facts.

**In prompting:** Use `/firstprinciples` or "Break this down from scratch" to signal that you want the AI to ignore conventional answers and reason from fundamentals.

**What changes:**
- Analogical reasoning ("X is usually done Y way") is discarded
- Every assumption is questioned: *Why do we do it this way?*
- The answer is built from verifiable facts, not industry norms

**Classic example:**
> Conventional: "Most studios price this way, so we should too."
> First principles: "What does it actually cost to deliver this? What value does the client receive? What is the minimum viable margin?"

**When to use:**
- Challenging an assumption that everyone accepts but no one has tested
- Finding the real reason something works (not the received explanation)
- Solving a problem that conventional approaches haven't cracked
- Pricing, positioning, or strategy decisions where copycatting is easy but wrong

**Best combo:** `/firstprinciples` + `/deepthink` + `/nohedge` = `/strategysession` — for major decisions where you want the reasoning, not the safe corporate answer.

## Related

- [[prompt-thinking-codes]] — full set of thinking mode codes
- [[prompt-combination-codes]] — `/strategysession` and `/decisionaudit` both use firstprinciples
- [[inversion-mental-model]] — related philosophical reasoning technique
- [[red-team-technique]] — adversarial complement to first-principles building

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
