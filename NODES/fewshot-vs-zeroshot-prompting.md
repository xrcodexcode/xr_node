---
id: c3412f60-5809-4941-8b95-45938b5ebe18
title: Few-Shot vs Zero-Shot Prompting
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
  - llm
  - productivity
  - processed
owner_moc: Prompt Engineering Map of Content
sources:
  - [[prompt-codes-reference]]
related:
  - prompt-learning-codes
  - socratic-prompting
  - prompt-thinking-codes
  - race-prompt-framework
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Few-Shot vs Zero-Shot Prompting

## Definition

**Few-shot prompting** provides 2–3 examples of the desired output before making the real request, so the model reverse-engineers the pattern. **Zero-shot prompting** gives no examples — just a precise instruction and executes immediately.

## Explanation

| Approach | Trigger | Best When |
|----------|---------|-----------|
| **Few-shot** `/fewshot` | "Here are examples of what I want" | Format or style precision is critical |
| **Zero-shot** `/zeroshot` | "No examples — just do this" | Task is well-defined and obvious |

**Why few-shot works:**
> Three good examples beat a page of instructions every time.

The model reverse-engineers the pattern from examples rather than trying to interpret abstract rules. This is especially powerful when:
- You want output in a very specific structural format
- You want to match a writing style exactly (voice matching)
- You're doing repeatable tasks where format consistency matters

**Few-shot activation protocol:**
```
"Here are 3 examples of how I write Instagram captions:
[example 1]
[example 2]
[example 3]
Now write one for this topic: [topic]."
```

**When to switch from zero-shot to few-shot:**
If zero-shot output isn't landing after one iteration → switch to few-shot with 2–3 concrete examples. Don't keep adjusting instructions; change the strategy.

**Zero-shot default:** Use when the task is unambiguous and you've already established working patterns with the model.

## Related

- [[socratic-prompting]] — opposite of both: model asks you questions instead of answering
- [[prompt-thinking-codes]] — `/stepbystep` is a zero-shot cognitive strategy
- [[race-prompt-framework]] — structured alternative to few-shot for complex tasks

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
