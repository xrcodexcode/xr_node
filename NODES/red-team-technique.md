---
id: 3bda6381-1a34-4a75-8259-31cfae95fa30
title: Red Team Technique
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
  - productivity
  - llm
  - processed
owner_moc: null
sources:
  - [[prompt-codes-reference]]
related:
  - steelman-technique
  - prompt-thinking-codes
  - prompt-combination-codes
  - prompt-strategy-codes
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Red Team Technique

## Definition

**Red teaming** is a systematic, adversarial review of a plan, idea, or strategy — where the reviewer actively tries to find every flaw, risk, and reason it could fail.

## Explanation

**Origin:** Military and intelligence. A "red team" is a dedicated group whose mission is to attack your plan before real adversaries do — finding vulnerabilities in strategies, security systems, or decisions.

**In prompting:** Use `/redteam` or "Red team this" / "Attack this" to trigger a full adversarial stress-test of any idea or plan.

**What a red team does:**
- Finds every logical hole
- Surfaces assumptions that haven't been tested
- Identifies risks that optimistic planning misses
- Stress-tests the plan against worst-case scenarios

**Red Team vs adjacent codes:**

| Code | Scope | Intensity |
|------|-------|-----------|
| `/pokeholes` | Quick sanity check | Light — gut-check |
| `/redteam` | Full adversarial review | Systematic + thorough |
| `/blindspot` | Find what you haven't seen | Expansive — new dimensions |
| `/skeptic` | Voice the smartest objection | Single credible counterpoint |

**When to use:**
- Before any business plan, pitch, or presentation
- Before committing to a major strategic decision
- When you feel too attached to an idea (confirmation bias risk)

**Best combo:** `/redteam` + `/steelman` + `/skeptic` = `/pitchtest` — attacks from all angles before you go live.

## Related

- [[steelman-technique]] — opposite operation: build the best case for
- [[prompt-thinking-codes]] — full set of thinking mode codes
- [[prompt-strategy-codes]] — `/skeptic` and `/missing` are related tools
- [[prompt-combination-codes]] — `/pitchtest` = redteam + skeptic + steelman

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
