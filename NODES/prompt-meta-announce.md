---
id: 3f08aa86-3094-487f-a977-f492e5186823
title: Prompt Meta Announce Code
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
  - prompt-combination-codes
  - prompt-thinking-codes
  - prompt-honesty-codes
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Prompt Meta Announce Code

## Definition

The `/announce` code is a **transparency layer** that forces the AI to reveal its planned approach *before* it executes — giving the user a chance to redirect, adjust, or confirm.

## Explanation

**Trigger:** "Announce your approach before answering" — or use as a standing system prompt instruction.

**What it outputs before answering:**
1. Which code(s) it is planning to use
2. What each code does in *this specific context*
3. Whether you should proceed or adjust

**Why this matters:**
Without `/announce`, the AI executes your prompt using assumptions you haven't verified. With it, you can catch mismatches before wasting a full response:

> You: "Red team my pricing strategy."
> AI with `/announce`: "I'm planning to use `/redteam` (systematic adversarial attack on your pricing) + `/nohedge` (committed position, no caveats). I'll assume the strategy is final, not draft. Should I proceed?"
> You: "Actually, this is still draft — adjust the intensity."

**Best uses:**
- Complex or multi-code prompts where you want control
- As a standing instruction in a system prompt or project context
- When you're exploring what prompting approach is even correct

**Meta insight:** `/announce` makes the prompting *process* visible — it trains you to think in codes by showing you what codes the model naturally reaches for.

## Related

- [[prompt-combination-codes]] — where multiple codes stack; announce shows the stack
- [[prompt-thinking-codes]] — `/stepbystep` is the cognitive equivalent of announce (show your working)
- [[prompt-honesty-codes]] — `/nopreamble` is the opposite of announce (skip all pre-response text)

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
