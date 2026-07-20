---
id: dd34f4eb-ea3d-485b-b335-916937f462d6
title: Socratic Prompting
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
  - learning
  - llm
  - processed
owner_moc: Prompt Engineering Map of Content
sources:
  - [[prompt-codes-reference]]
related:
  - fewshot-vs-zeroshot-prompting
  - prompt-learning-codes
  - prompt-thinking-codes
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Socratic Prompting

## Definition

**Socratic prompting** inverts the usual AI interaction: instead of the AI answering your question, it asks you targeted questions that lead you to figure it out yourself.

## Explanation

**Origin:** Socrates. The Socratic method is a form of cooperative dialogue where skilled questioning draws out existing knowledge rather than depositing new information.

**In prompting:** Use `/socratic` or "Don't answer — ask me questions instead" / "Socratic mode."

**What it does:**
- AI asks targeted, clarifying questions
- Forces you to articulate your own thinking
- Surfaces assumptions you haven't named
- Builds understanding through active engagement, not passive consumption

**When to use:**
- Working through a decision you half-understand
- Clarifying your own position on something murky
- When you feel like you *almost* know the answer but can't articulate it
- When you want to think, not just receive

**Contrast with standard prompting:**
```
Standard:   "What should I charge for my consulting?"
             → AI gives answer

Socratic:   "Don't answer — ask me questions instead"
             → AI asks: "Who are your clients? What's your hourly rate now? 
                What problem do they pay you to solve?"
             → You articulate answers
             → Insight emerges from your own reasoning
```

**Why this matters:** Over-reliance on AI answers can atrophy your own reasoning. Socratic mode keeps the thinking in your head while using AI as a structured thought partner.

## Related

- [[fewshot-vs-zeroshot-prompting]] — both concern how you structure input, not output
- [[prompt-learning-codes]] — broader learning-oriented code set
- [[prompt-thinking-codes]] — other reasoning-first codes

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
