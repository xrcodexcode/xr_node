---
id: 3b13a281-88cb-482e-95e1-b5b84eb2146d
title: Steelman Technique
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
  - productivity
  - llm
  - processed
owner_moc: null
sources:
  - [[prompt-codes-reference]]
related:
  - red-team-technique
  - prompt-thinking-codes
  - prompt-combination-codes
  - inversion-mental-model
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Steelman Technique

## Definition

**Steelmanning** is the practice of constructing the strongest, most charitable, most compelling version of an argument or position — deliberately the opposite of strawmanning.

## Explanation

**Origin:** Philosophy. A "steelman" is the strongest form of an opposing argument. A "strawman" is the weakest, easiest-to-knock-down misrepresentation of an argument.

**In prompting:** Use `/steelman` or "Make the strongest case for..." to force the AI to build the *best* possible version of any argument, not a balanced one.

**When to use steelmanning:**
1. **Debate prep** — understand the best counterargument before you face it
2. **Genuine understanding** — when you want to know *why* smart people believe something you disagree with
3. **Pitch strengthening** — find the best version of your own pitch by steelmanning it first
4. **Epistemic hygiene** — avoid dismissing positions without engaging their strongest form

**Steelman vs Red Team:**
- **Steelman** = build the best case *for* something
- **Red Team** = attack a thing systematically to find its failure modes
- They are complementary: steelman an opponent's position, then red team your own

**Example use:**
> "I'm planning to launch in a niche market first. Steelman the argument for going mass-market immediately."

## Related

- [[red-team-technique]] — the opposite operation: adversarial attack
- [[prompt-thinking-codes]] — full set of thinking mode codes
- [[prompt-combination-codes]] — `/pitchtest` = redteam + skeptic + steelman
- [[inversion-mental-model]] — related philosophical technique (think backwards)

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
