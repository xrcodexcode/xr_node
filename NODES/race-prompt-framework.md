---
id: 09fe3f94-603f-4a37-a787-a91bb97f6a9e
title: RACE Prompt Framework
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
  - llm
  - processed
owner_moc: Prompt Engineering Map of Content
sources:
  - [[prompt-codes-reference]]
related:
  - fewshot-vs-zeroshot-prompting
  - prompt-reasoning-codes
  - prompt-thinking-codes
  - prompt-combination-codes
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# RACE Prompt Framework

## Definition

**RACE** is a four-part prompt structure that produces consistently strong, unambiguous output on complex tasks by specifying Role, Action, Context, and Execute — removing all ambiguity before the model responds.

## Explanation

| Component | What to specify |
|-----------|----------------|
| **R**ole | Who Claude is (persona, expertise level) |
| **A**ction | What it's doing (the task) |
| **C**ontext | Full background — all relevant information |
| **E**xecute | Format and output requirements (length, structure, tone) |

**Template:**
```
Role: [persona/expertise]
Action: [what you want done]
Context: [all relevant background]
Execute: [format requirements]
```

**Example:**
> "Role: senior brand strategist. Action: review my positioning. Context: [paste context]. Execute: bullet points, max 10, ranked by priority."

**Why RACE works:**
- Removes ambiguity at every level — the model knows who it is, what it's doing, why, and what "done" looks like
- The Execute component is the most commonly missing piece in prompts — without it, format is guessed
- Role-setting shifts the model's tone and depth to match the persona

**When to use:**
- Complex, high-stakes tasks where a single prompt keeps going wrong
- Building prompts you'll reuse repeatedly
- Any task requiring a specific output format that isn't obvious from the request alone

**Comparison to few-shot:**
- Few-shot shows examples of the *output*
- RACE specifies the *context and constraints* for producing the output
- For complex reusable tasks, combine: RACE structure + few-shot examples in the Execute section

## Related

- [[fewshot-vs-zeroshot-prompting]] — complementary input-structure technique
- [[prompt-reasoning-codes]] — `/simulate` and `/contrarian` are also structured reasoning tools
- [[prompt-thinking-codes]] — `/firstprinciples` maps to the Context component of RACE

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
