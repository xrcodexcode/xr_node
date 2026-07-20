---
id: dd2ab4a1-bd90-4a9f-8661-568668ac6736
title: Prompt Reasoning and Simulation Codes
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
owner_moc: Prompt Engineering Map of Content
sources:
  - [[prompt-codes-reference]]
related:
  - red-team-technique
  - steelman-technique
  - race-prompt-framework
  - prompt-thinking-codes
  - prompt-combination-codes
schema_version: 3
source: "[[prompt-codes-reference]]"
---

# Prompt Reasoning and Simulation Codes

## Definition

Prompt modifiers for live scenario simulation, genuine contrarian argumentation, and structured complex-task execution — stress-testing through enactment rather than analysis.

## Explanation

Three codes govern reasoning and simulation:

| Code | Phrase | Effect |
|------|--------|--------|
| `/simulate` | "Simulate this scenario" | Claude plays out a real-world scenario as a live roleplay |
| `/contrarian` | "Argue the opposite" | Claude argues for the opposite direction — genuinely, not as an attack |
| `/race` | "RACE this" | Structures input as Role / Action / Context / Execute |

**`/simulate` in depth:**
The AI plays out an adversarial or challenging scenario — a difficult client call, investor pushback, board challenge — so you can rehearse your responses before the real thing.

> "Simulate a client who has received our proposal and thinks it's overpriced. Push back hard. I'll respond as myself."

**`/contrarian` vs `/redteam`:**
| | `/redteam` | `/contrarian` |
|-|-----------|--------------|
| Purpose | Attack your plan | Argue for a different direction |
| Target | Weaknesses in what you *have* | The alternative you *haven't* seriously considered |
| Intensity | Adversarial | Genuine alternative perspective |

**`/contrarian` use case:**
> "I think we should launch in Mumbai first. Contrarian take." → AI argues seriously for launching elsewhere first.

This is not meant to be dismissive — the contrarian argument is given its full, genuine form. Use it to break out of groupthink before committing.

**`/simulate` + `/contrarian` together:**
Maximum pressure test: simulate the adversarial scenario AND argue for the opposite direction. Surfaces both tactical and strategic vulnerabilities.

## Related

- [[red-team-technique]] — `/redteam` vs `/contrarian` distinction
- [[race-prompt-framework]] — `/race` deep dive
- [[prompt-combination-codes]] — `/fullstress` = redteam + simulate + contrarian
- [[prompt-thinking-codes]] — broader thinking mode code set

## Source

[[prompt-codes-reference|The Complete Prompt Codes Reference]]
