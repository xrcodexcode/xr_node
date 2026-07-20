# NexusDB Pipeline Execution Report

**Date:** 2026-07-19 12:38 UTC
**Duration:** 37.12 seconds
**Status:** FAILED

## Stage Execution Summary

| Stage Name | Script | Status | Duration | Notes |
|---|---|---|---:|---|
| Capture & Lifecycle | `raw_lifecycle.py` | SUCCESS | 0.24s | Moved C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\01_RAW\capture\STOP These |
| Tag Validation | `validate_tags.py` | SUCCESS | 1.88s | Found 309 notes with invalid tags. |
| Vault Structural Check | `check_vault.py` | FAILED | 6.88s |   [Warning] Legacy tag preserved in ajit-jain-successor.md: `business` |
| Duplicate Detection | `duplicate_detector.py` | SUCCESS | 2.11s | Found 91 duplicate candidate pairs. |
| Metadata Migration | `migrate_metadata.py` | SUCCESS | 1.69s | Migration completed. Scanned 339 notes. Migrated 0 notes. |
| Semantic Linking | `semantic_linker.py` | SUCCESS | 3.92s | [SemanticLinker] No notes found. Exiting. |
| Promotion Check | `promotion_enforcer.py` | SUCCESS | 3.12s | {"reported": 339, "path": "C:\\Users\\offic\\OneDrive\\Desktop\\obsidean\\nexusd |
| MOC Curation | `moc_curator.py` | SUCCESS | 1.58s | Curation report saved to C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antig |
| MOC & Health Reports | `generate_mocs.py` | SUCCESS | 9.64s | MOC Generation completed successfully. |
| Decay Scheduling | `decay_scheduler.py` | SUCCESS | 1.61s |   Run with --apply to write changes. |
| Health Dashboard | `health_dashboard.py` | SUCCESS | 1.88s |     [CRITICAL] broken_ref_count = 7 |
| Graph Analytics | `graph_analytics.py` | SUCCESS | 2.57s |   Knowledge gaps: 0 |

## Detail Logs

### Capture & Lifecycle Details
```
Moved C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\01_RAW\capture\STOP These 5 Habits Before they Destroy Your Brain  Ashu Sir.md -> 01_RAW\source\STOP These 5 Habits Before they Destroy Your Brain  Ashu Sir.md

```
### Tag Validation Details
```
Loaded 12 allowed tags from schema.
Found 309 notes with invalid tags.

```
### Vault Structural Check Details
```
Scanning 381 markdown files...

Found issues in 2 files:

[03_MOC\why-you-are-feeling-stuck-in-your-20s-moc.md]
  - Invalid tag: `career`
  - Invalid tag: `self-improvement`
  - Invalid tag: `moc`

[01_RAW\SOURCE\why-you-are-feeling-stuck-in-your-20s.md]
  - Invalid tag: `yt`

```
```
  [Warning] Legacy tag preserved in ajit-jain-successor.md: `business`
  [Warning] Legacy tag preserved in ajit-jain-successor.md: `biography`
  [Warning] Broken link in algorithm-design-sequence.md: [[tesla-manufacturing-philosophy]] (target does not exist)
  [Warning] Broken link in algorithm-design-sequence.md: [[spacex-engineering-culture]] (target does not exist)
  [Warning] Legacy tag preserved in amex-salad-oil-investment.md: `business`
  [Warning] Legacy tag preserved in anne-thorndike-cafeteria-study.md: `book`
  [Warning] Legacy tag preserved in anne-thorndike-cafeteria-study.md: `habits`
  [Warning] Legacy tag preserved in anne-thorndike-cafeteria-study.md: `productivity`
  [Warning] Legacy tag preserved in anne-thorndike-cafeteria-study.md: `study`
  [Warning] Legacy tag preserved in apple-investment-case-study.md: `business`
  [Warning] Legacy tag preserved in arbitrage-workouts.md: `business`
  [Warning] Legacy tag preserved in atomic-habit.md: `book`
  [Warning] Legacy tag preserved in atomic-habit.md: `habits`
  [Warning] Legacy tag preserved in atomic-habit.md: `productivity`
  [Warning] Legacy tag preserved in authority-bias-investing.md: `psychology`
  [Warning] Legacy tag preserved in authority-bias-investing.md: `business`
  [Warning] Legacy tag preserved in availability-bias-investing.md: `psychology`
  [Warning] Legacy tag preserved in availability-bias-investing.md: `business`
  [Warning] Legacy tag preserved in bayesian-decision-making.md: `elon-musk`
  [Warning] Legacy tag preserved in bayesian-decision-making.md: `thinking`
  [Warning] Legacy tag preserved in bayesian-decision-making.md: `mental-model`
  [Warning] Broken link in bayesian-decision-making.md: [[spacex-founding-bet]] (target does not exist)
  [Warning] Broken link in bayesian-decision-making.md: [[risk-taking-framework]] (target does not exist)
  [Warning] Legacy tag preserved in be-mentally-strong.md: `Yt`
  [Warning] Legacy tag preserved in beating-the-odds-when-things-get-hard.md: `Yt`
  [Warning] Legacy tag preserved in benjamin-moore-acquisition.md: `business`
  [Warning] Legacy tag preserved in berkshire-hathaway-acquisition.md: `business`
  [Warning] Legacy tag preserved in berkshire-hathaway-acquisition.md: `biography`
  [Warning] Legacy tag preserved in berkshire-hathaway-energy.md: `business`
  [Warning] Legacy tag preserved in berkshire-insurance-businesses.md: `business`
  [Warning] Legacy tag preserved in berkshire-shareholder-letters.md: `business`
  [Warning] Legacy tag preserved in berkshire-shareholder-letters.md: `productivity`
  [Warning] Legacy tag preserved in bias-from-association.md: `psychology`
  [Warning] Legacy tag preserved in bill-gates-friendship.md: `biography`
  [Warning] Legacy tag preserved in bismarck-realpolitik.md: `book`
  [Warning] Legacy tag preserved in bismarck-realpolitik.md: `power`
  [Warning] Legacy tag preserved in bismarck-realpolitik.md: `study`
  [Warning] Legacy tag preserved in blue-chip-stamps-investment.md: `business`
  [Warning] Legacy tag preserved in bnsf-railway-acquisition.md: `business`
  [Warning] Legacy tag preserved in brain-as-a-prediction-machine.md: `book`
  [Warning] Legacy tag preserved in brain-as-a-prediction-machine.md: `habits`
  [Warning] Legacy tag preserved in brain-as-a-prediction-machine.md: `psychology`
  [Warning] Legacy tag preserved in brian-clark-fingernail-biting.md: `productivity`
  [Warning] Legacy tag preserved in bryan-harris-habit-contract.md: `book`
  [Warning] Legacy tag preserved in bryan-harris-habit-contract.md: `habits`
  [Warning] Legacy tag preserved in bryan-harris-habit-contract.md: `productivity`
  [Warning] Legacy tag preserved in buffett-childhood-entrepreneurship.md: `business`
  [Warning] Legacy tag preserved in buffett-childhood-entrepreneurship.md: `biography`
  [Warning] Legacy tag preserved in buffett-decision-making-framework.md: `productivity`
  [Warning] Legacy tag preserved in buffett-decision-making-framework.md: `business`
  [Warning] Legacy tag preserved in buffett-delegation-model.md: `business`
  [Warning] Legacy tag preserved in buffett-delegation-model.md: `productivity`
  [Warning] Legacy tag preserved in buffett-education-and-graham-influence.md: `business`
  [Warning] Legacy tag preserved in buffett-education-and-graham-influence.md: `philosophy`
  [Warning] Legacy tag preserved in buffett-education-and-graham-influence.md: `biography`
  [Warning] Legacy tag preserved in buffett-foundation.md: `business`
  [Warning] Legacy tag preserved in buffett-frugal-lifestyle.md: `business`
  [Warning] Legacy tag preserved in buffett-frugal-lifestyle.md: `biography`
  [Warning] Legacy tag preserved in buffett-reading-habit.md: `productivity`
  [Warning] Legacy tag preserved in buffett-reading-habit.md: `business`
  [Warning] Legacy tag preserved in building-resilience-and-grit.md: `Yt`
  [Warning] Legacy tag preserved in bypass-ask-permissions-mode.md: `ai`
  [Warning] Legacy tag preserved in bypass-ask-permissions-mode.md: `ml`
  [Warning] Legacy tag preserved in bypass-ask-permissions-mode.md: `yt`
  [Warning] Legacy tag preserved in bypass-ask-permissions-mode.md: `productivity`
  [Warning] Legacy tag preserved in capital-allocation.md: `business`
  [Warning] Legacy tag preserved in capital-allocation.md: `productivity`
  [Warning] Legacy tag preserved in capital-intensity.md: `business`
  [Warning] Legacy tag preserved in cardinal-rule-of-behavior-change.md: `book`
  [Warning] Legacy tag preserved in cardinal-rule-of-behavior-change.md: `habits`
  [Warning] Legacy tag preserved in cardinal-rule-of-behavior-change.md: `productivity`
  [Warning] Legacy tag preserved in cash-register-automation.md: `book`
  [Warning] Legacy tag preserved in cash-register-automation.md: `habits`
  [Warning] Legacy tag preserved in cash-register-automation.md: `productivity`
  [Warning] Legacy tag preserved in cash-register-automation.md: `tools`
  [Warning] Legacy tag preserved in cesare-borgia.md: `book`
  [Warning] Legacy tag preserved in cesare-borgia.md: `power`
  [Warning] Legacy tag preserved in cesare-borgia.md: `study`
  [Warning] Legacy tag preserved in charlie-munger-influence-on-buffett.md: `business`
  [Warning] Legacy tag preserved in charlie-munger-influence-on-buffett.md: `biography`
  [Warning] Legacy tag preserved in cigar-butt-investing.md: `business`
  [Warning] Legacy tag preserved in circle-of-competence.md: `business`
  [Warning] Legacy tag preserved in circle-of-competence.md: `philosophy`
  [Warning] Legacy tag preserved in claude-second-brain-levels.md: `ai`
  [Warning] Legacy tag preserved in claude-second-brain-levels.md: `ml`
  [Warning] Legacy tag preserved in claude-second-brain-levels.md: `productivity`
  [Warning] Legacy tag preserved in claude-second-brain-levels.md: `yt`
  [Warning] Legacy tag preserved in clayton-homes-acquisition.md: `business`
  [Warning] Legacy tag preserved in coca-cola-investment-case-study.md: `business`
  [Warning] Legacy tag preserved in commitment-consistency-bias.md: `psychology`
  [Warning] Legacy tag preserved in commitment-consistency-bias.md: `business`
  [Warning] Legacy tag preserved in commitment-devices.md: `book`
  [Warning] Legacy tag preserved in commitment-devices.md: `habits`
  [Warning] Legacy tag preserved in commitment-devices.md: `productivity`
  [Warning] Legacy tag preserved in commitment-devices.md: `psychology`
  [Warning] Legacy tag preserved in compounding-interest.md: `business`
  [Warning] Legacy tag preserved in con-artist-yellow-kid-weil.md: `book`
  [Warning] Legacy tag preserved in con-artist-yellow-kid-weil.md: `power`
  [Warning] Legacy tag preserved in con-artist-yellow-kid-weil.md: `psychology`
  [Warning] Legacy tag preserved in contrast-effect-bias.md: `psychology`
  [Warning] Legacy tag preserved in court-power.md: `book`
  [Warning] Legacy tag preserved in court-power.md: `power`
  [Warning] Legacy tag preserved in dairy-queen-acquisition.md: `business`
  [Warning] Legacy tag preserved in dealing-with-failure-and-bouncing-back.md: `Yt`
  [Warning] Legacy tag preserved in debt-aversion-principle.md: `business`
  [Warning] Legacy tag preserved in debt-aversion-principle.md: `philosophy`
  [Warning] Legacy tag preserved in decisive-moments.md: `book`
  [Warning] Legacy tag preserved in decisive-moments.md: `habits`
  [Warning] Legacy tag preserved in decisive-moments.md: `productivity`
  [Warning] Legacy tag preserved in decisive-moments.md: `psychology`
  [Warning] Legacy tag preserved in delayed-return-environment.md: `psychology`
  [Warning] Legacy tag preserved in delete-before-optimize.md: `elon-musk`
  [Warning] Legacy tag preserved in delete-before-optimize.md: `principle`
  [Warning] Legacy tag preserved in delete-before-optimize.md: `engineering`
  [Warning] Legacy tag preserved in delete-before-optimize.md: `rule`
  [Warning] Broken link in delete-before-optimize.md: [[tesla-model-3-production-lessons]] (target does not exist)
  [Warning] Legacy tag preserved in delete-then-optimize-loop.md: `elon-musk`
  [Warning] Legacy tag preserved in delete-then-optimize-loop.md: `engineering`
  [Warning] Legacy tag preserved in delete-then-optimize-loop.md: `framework`
  [Warning] Broken link in delete-then-optimize-loop.md: [[tesla-manufacturing-philosophy]] (target does not exist)
  [Warning] Legacy tag preserved in dempster-mill-investment.md: `business`
  [Warning] Legacy tag preserved in developing-mental-toughness.md: `Yt`
  [Warning] Legacy tag preserved in dexter-shoe-investment-mistake.md: `business`
  [Warning] Legacy tag preserved in diderot-effect.md: `book`
  [Warning] Legacy tag preserved in diderot-effect.md: `habits`
  [Warning] Legacy tag preserved in diderot-effect.md: `productivity`
  [Warning] Legacy tag preserved in diderot-effect.md: `psychology`
  [Warning] Legacy tag preserved in disliking-hating-tendency.md: `psychology`
  [Warning] Legacy tag preserved in dopamine-driven-feedback-loop.md: `book`
  [Warning] Legacy tag preserved in dopamine-driven-feedback-loop.md: `habits`
  [Warning] Legacy tag preserved in dopamine-driven-feedback-loop.md: `productivity`
  [Warning] Legacy tag preserved in dopamine-driven-feedback-loop.md: `psychology`
  [Warning] Legacy tag preserved in economic-moat.md: `business`
  [Warning] Legacy tag preserved in elon-musk-childhood.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-childhood.md: `biography`
  [Warning] Broken link in elon-musk-childhood.md: [[elon-musk-father-relationship]] (target does not exist)
  [Warning] Broken link in elon-musk-childhood.md: [[science-fiction-influence-on-musk]] (target does not exist)
  [Warning] Legacy tag preserved in elon-musk-education.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-education.md: `biography`
  [Warning] Legacy tag preserved in elon-musk-hiring-philosophy.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-hiring-philosophy.md: `leadership`
  [Warning] Legacy tag preserved in elon-musk-hiring-philosophy.md: `hiring`
  [Warning] Broken link in elon-musk-hiring-philosophy.md: [[small-teams-superiority]] (target does not exist)
  [Warning] Legacy tag preserved in elon-musk-neuralink.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-neuralink.md: `business`
  [Warning] Legacy tag preserved in elon-musk-neuralink.md: `innovation`
  [Warning] Broken link in elon-musk-neuralink.md: [[ai-risk-philosophy]] (target does not exist)
  [Warning] Legacy tag preserved in elon-musk-spacex-founding.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-spacex-founding.md: `biography`
  [Warning] Legacy tag preserved in elon-musk-spacex-founding.md: `business`
  [Warning] Legacy tag preserved in elon-musk-starlink.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-starlink.md: `business`
  [Warning] Legacy tag preserved in elon-musk-starlink.md: `strategy`
  [Warning] Legacy tag preserved in elon-musk-tesla-founding.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-tesla-founding.md: `biography`
  [Warning] Legacy tag preserved in elon-musk-tesla-founding.md: `business`
  [Warning] Broken link in elon-musk-tesla-founding.md: [[tesla-master-plan]] (target does not exist)
  [Warning] Legacy tag preserved in elon-musk-the-boring-company.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-the-boring-company.md: `business`
  [Warning] Legacy tag preserved in elon-musk-the-boring-company.md: `innovation`
  [Warning] Legacy tag preserved in elon-musk-xai.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-xai.md: `business`
  [Warning] Legacy tag preserved in elon-musk-xai.md: `ai`
  [Warning] Broken link in elon-musk-xai.md: [[ai-risk-philosophy]] (target does not exist)
  [Warning] Broken link in elon-musk-xai.md: [[openai-founding]] (target does not exist)
  [Warning] Legacy tag preserved in elon-musk-xcom-paypal.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-xcom-paypal.md: `biography`
  [Warning] Legacy tag preserved in elon-musk-xcom-paypal.md: `business`
  [Warning] Legacy tag preserved in elon-musk-zip2.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-zip2.md: `biography`
  [Warning] Legacy tag preserved in elon-musk-zip2.md: `business`
  [Warning] Legacy tag preserved in emotional-healing-and-moving-forward.md: `Yt`
  [Warning] Legacy tag preserved in emotional-strength.md: `Yt`
  [Warning] Legacy tag preserved in environment-design.md: `book`
  [Warning] Legacy tag preserved in environment-design.md: `habits`
  [Warning] Legacy tag preserved in environment-design.md: `productivity`
  [Warning] Legacy tag preserved in environment-priming.md: `book`
  [Warning] Legacy tag preserved in environment-priming.md: `habits`
  [Warning] Legacy tag preserved in environment-priming.md: `productivity`
  [Warning] Legacy tag preserved in estate-tax-support.md: `business`
  [Warning] Legacy tag preserved in estate-tax-support.md: `philosophy`
  [Warning] Legacy tag preserved in external-code-review-guardrails.md: `ai`
  [Warning] Legacy tag preserved in external-code-review-guardrails.md: `ml`
  [Warning] Legacy tag preserved in external-code-review-guardrails.md: `yt`
  [Warning] Legacy tag preserved in external-code-review-guardrails.md: `productivity`
  [Warning] Legacy tag preserved in fermi-estimation.md: `elon-musk`
  [Warning] Legacy tag preserved in fermi-estimation.md: `thinking`
  [Warning] Legacy tag preserved in fermi-estimation.md: `mental-model`
  [Warning] Broken link in fermi-estimation.md: [[mars-colonization-physics-basis]] (target does not exist)
  [Warning] Broken link in fermi-estimation.md: [[starship-mission-architecture]] (target does not exist)
  [Warning] Legacy tag preserved in fewshot-vs-zeroshot-prompting.md: `technique`
  [Warning] Legacy tag preserved in fewshot-vs-zeroshot-prompting.md: `ai`
  [Warning] Legacy tag preserved in fewshot-vs-zeroshot-prompting.md: `llm`
  [Warning] Legacy tag preserved in fewshot-vs-zeroshot-prompting.md: `productivity`
  [Warning] Legacy tag preserved in fewshot-vs-zeroshot-prompting.md: `processed`
  [Warning] Legacy tag preserved in finding-your-inner-strength.md: `Yt`
  [Warning] Broken link in first-principles-build-rule.md: [[cost-from-first-principles]] (target does not exist)
  [Warning] Legacy tag preserved in first-principles-prompting.md: `technique`
  [Warning] Legacy tag preserved in first-principles-prompting.md: `ai`
  [Warning] Legacy tag preserved in first-principles-prompting.md: `philosophy`
  [Warning] Legacy tag preserved in first-principles-prompting.md: `strategy`
  [Warning] Legacy tag preserved in first-principles-prompting.md: `llm`
  [Warning] Legacy tag preserved in first-principles-prompting.md: `processed`
  [Warning] Legacy tag preserved in first-principles-thinking.md: `elon-musk`
  [Warning] Legacy tag preserved in first-principles-thinking.md: `thinking`
  [Warning] Legacy tag preserved in first-principles-thinking.md: `mental-model`
  [Warning] Legacy tag preserved in five-twenty-five-rule.md: `productivity`
  [Warning] Legacy tag preserved in flightsafety-acquisition.md: `business`
  [Warning] Legacy tag preserved in fruit-of-the-loom-acquisition.md: `business`
  [Warning] Legacy tag preserved in geeks-bearing-formulas.md: `business`
  [Warning] Legacy tag preserved in geico-acquisition.md: `business`
  [Warning] Legacy tag preserved in geico-acquisition.md: `biography`
  [Warning] Legacy tag preserved in gen-re-acquisition.md: `business`
  [Warning] Legacy tag preserved in genetics-and-environment.md: `book`
  [Warning] Legacy tag preserved in genetics-and-environment.md: `habits`
  [Warning] Legacy tag preserved in genetics-and-environment.md: `productivity`
  [Warning] Legacy tag preserved in genetics-and-environment.md: `psychology`
  [Warning] Legacy tag preserved in gillette-investment.md: `business`
  [Warning] Legacy tag preserved in giving-pledge.md: `business`
  [Warning] Legacy tag preserved in goldilocks-rule.md: `book`
  [Warning] Legacy tag preserved in goldilocks-rule.md: `habits`
  [Warning] Legacy tag preserved in goldilocks-rule.md: `productivity`
  [Warning] Legacy tag preserved in goldilocks-rule.md: `psychology`
  [Warning] Legacy tag preserved in greg-abel-successor.md: `business`
  [Warning] Legacy tag preserved in greg-abel-successor.md: `biography`
  [Warning] Legacy tag preserved in growth-mindset.md: `Yt`
  [Warning] Legacy tag preserved in habit-contracts.md: `book`
  [Warning] Legacy tag preserved in habit-contracts.md: `habits`
  [Warning] Legacy tag preserved in habit-contracts.md: `productivity`
  [Warning] Legacy tag preserved in habit-loop.md: `book`
  [Warning] Legacy tag preserved in habit-loop.md: `framework`
  [Warning] Legacy tag preserved in habit-loop.md: `habits`
  [Warning] Legacy tag preserved in habit-loop.md: `productivity`
  [Warning] Legacy tag preserved in habit-loop.md: `psychology`
  [Warning] Legacy tag preserved in habit-stacking.md: `productivity`
  [Warning] Legacy tag preserved in habit-tracking.md: `book`
  [Warning] Legacy tag preserved in habit-tracking.md: `habits`
  [Warning] Legacy tag preserved in habit-tracking.md: `productivity`
  [Warning] Legacy tag preserved in habits-plus-deliberate-practice.md: `book`
  [Warning] Legacy tag preserved in habits-plus-deliberate-practice.md: `habits`
  [Warning] Legacy tag preserved in habits-plus-deliberate-practice.md: `productivity`
  [Warning] Legacy tag preserved in habits-scorecard.md: `book`
  [Warning] Legacy tag preserved in habits-scorecard.md: `habits`
  [Warning] Legacy tag preserved in habits-scorecard.md: `productivity`
  [Warning] Legacy tag preserved in haile-selassie-court.md: `book`
  [Warning] Legacy tag preserved in haile-selassie-court.md: `power`
  [Warning] Legacy tag preserved in haile-selassie-court.md: `study`
  [Warning] Legacy tag preserved in hebbs-law.md: `book`
  [Warning] Legacy tag preserved in hebbs-law.md: `habits`
  [Warning] Legacy tag preserved in hebbs-law.md: `productivity`
  [Warning] Legacy tag preserved in hebbs-law.md: `psychology`
  [Warning] Legacy tag preserved in hell-yes-or-no-filter.md: `essentialism`
  [Warning] Legacy tag preserved in hell-yes-or-no-filter.md: `decision-making`
  [Warning] Legacy tag preserved in hell-yes-or-no-filter.md: `filter`
  [Warning] Legacy tag preserved in honesty-expensive-gift.md: `philosophy`
  [Warning] Legacy tag preserved in howard-buffett-influence.md: `biography`
  [Warning] Legacy tag preserved in hyperbolic-discounting.md: `psychology`
  [Warning] Legacy tag preserved in hyperbolic-discounting.md: `business`
  [Warning] Legacy tag preserved in identity-based-habits.md: `book`
  [Warning] Legacy tag preserved in identity-based-habits.md: `habits`
  [Warning] Legacy tag preserved in identity-based-habits.md: `productivity`
  [Warning] Legacy tag preserved in idiot-index.md: `elon-musk`
  [Warning] Legacy tag preserved in idiot-index.md: `mental-model`
  [Warning] Legacy tag preserved in idiot-index.md: `engineering`
  [Warning] Broken link in idiot-index.md: [[cost-from-first-principles]] (target does not exist)
  [Warning] Broken link in idiot-index.md: [[spacex-cost-reduction-strategy]] (target does not exist)
  [Warning] Legacy tag preserved in immediate-return-environment.md: `psychology`
  [Warning] Legacy tag preserved in implementation-intentions.md: `book`
  [Warning] Legacy tag preserved in implementation-intentions.md: `habits`
  [Warning] Legacy tag preserved in implementation-intentions.md: `productivity`
  [Warning] Legacy tag preserved in implementation-intentions.md: `psychology`
  [Warning] Legacy tag preserved in intrinsic-value.md: `business`
  [Warning] Legacy tag preserved in inversion-mental-model.md: `productivity`
  [Warning] Legacy tag preserved in inversion-mental-model.md: `business`
  [Warning] Legacy tag preserved in james-clear-injury-recovery.md: `book`
  [Warning] Legacy tag preserved in james-clear-injury-recovery.md: `habits`
  [Warning] Legacy tag preserved in james-clear-injury-recovery.md: `productivity`
  [Warning] Legacy tag preserved in jerry-uelsmann-photography.md: `book`
  [Warning] Legacy tag preserved in jerry-uelsmann-photography.md: `habits`
  [Warning] Legacy tag preserved in jerry-uelsmann-photography.md: `productivity`
  [Warning] Legacy tag preserved in jerry-uelsmann-photography.md: `study`
  [Warning] Legacy tag preserved in keep-moving-heuristic.md: `action`
  [Warning] Legacy tag preserved in keep-moving-heuristic.md: `career`
  [Warning] Legacy tag preserved in keep-moving-heuristic.md: `heuristic`
  [Warning] Legacy tag preserved in law-01-never-outshine-the-master.md: `book`
  [Warning] Legacy tag preserved in law-01-never-outshine-the-master.md: `power`
  [Warning] Legacy tag preserved in law-02-never-trust-friends-use-enemies.md: `book`
  [Warning] Legacy tag preserved in law-02-never-trust-friends-use-enemies.md: `power`
  [Warning] Legacy tag preserved in law-02-never-trust-friends-use-enemies.md: `psychology`
  [Warning] Legacy tag preserved in law-03-conceal-your-intentions.md: `book`
  [Warning] Legacy tag preserved in law-03-conceal-your-intentions.md: `power`
  [Warning] Legacy tag preserved in law-03-conceal-your-intentions.md: `psychology`
  [Warning] Legacy tag preserved in law-04-say-less-than-necessary.md: `book`
  [Warning] Legacy tag preserved in law-04-say-less-than-necessary.md: `power`
  [Warning] Legacy tag preserved in law-05-guard-your-reputation.md: `book`
  [Warning] Legacy tag preserved in law-05-guard-your-reputation.md: `power`
  [Warning] Legacy tag preserved in law-05-guard-your-reputation.md: `psychology`
  [Warning] Legacy tag preserved in law-06-court-attention.md: `book`
  [Warning] Legacy tag preserved in law-06-court-attention.md: `power`
  [Warning] Legacy tag preserved in law-07-get-others-to-do-the-work.md: `book`
  [Warning] Legacy tag preserved in law-07-get-others-to-do-the-work.md: `power`
  [Warning] Legacy tag preserved in law-08-make-others-come-to-you.md: `book`
  [Warning] Legacy tag preserved in law-08-make-others-come-to-you.md: `power`
  [Warning] Legacy tag preserved in law-09-win-through-actions.md: `book`
  [Warning] Legacy tag preserved in law-09-win-through-actions.md: `power`
  [Warning] Legacy tag preserved in law-10-avoid-the-unhappy-and-unlucky.md: `book`
  [Warning] Legacy tag preserved in law-10-avoid-the-unhappy-and-unlucky.md: `power`
  [Warning] Legacy tag preserved in law-10-avoid-the-unhappy-and-unlucky.md: `psychology`
  [Warning] Legacy tag preserved in law-11-keep-people-dependent.md: `book`
  [Warning] Legacy tag preserved in law-11-keep-people-dependent.md: `power`
  [Warning] Legacy tag preserved in law-12-selective-honesty-to-disarm.md: `book`
  [Warning] Legacy tag preserved in law-12-selective-honesty-to-disarm.md: `power`
  [Warning] Legacy tag preserved in law-13-appeal-to-self-interest.md: `book`
  [Warning] Legacy tag preserved in law-13-appeal-to-self-interest.md: `power`
  [Warning] Legacy tag preserved in law-14-pose-as-friend-work-as-spy.md: `book`
  [Warning] Legacy tag preserved in law-14-pose-as-friend-work-as-spy.md: `power`
  [Warning] Legacy tag preserved in law-15-crush-your-enemy-totally.md: `book`
  [Warning] Legacy tag preserved in law-15-crush-your-enemy-totally.md: `power`
  [Warning] Legacy tag preserved in law-16-use-absence.md: `book`
  [Warning] Legacy tag preserved in law-16-use-absence.md: `power`
  [Warning] Legacy tag preserved in law-16-use-absence.md: `psychology`
  [Warning] Legacy tag preserved in law-17-cultivate-unpredictability.md: `book`
  [Warning] Legacy tag preserved in law-17-cultivate-unpredictability.md: `power`
  [Warning] Legacy tag preserved in law-17-cultivate-unpredictability.md: `psychology`
  [Warning] Legacy tag preserved in law-18-isolation-is-dangerous.md: `book`
  [Warning] Legacy tag preserved in law-18-isolation-is-dangerous.md: `power`
  [Warning] Legacy tag preserved in law-19-know-who-youre-dealing-with.md: `book`
  [Warning] Legacy tag preserved in law-19-know-who-youre-dealing-with.md: `power`
  [Warning] Legacy tag preserved in law-19-know-who-youre-dealing-with.md: `psychology`
  [Warning] Legacy tag preserved in law-20-do-not-commit-to-anyone.md: `book`
  [Warning] Legacy tag preserved in law-20-do-not-commit-to-anyone.md: `power`
  [Warning] Legacy tag preserved in law-21-play-a-sucker.md: `book`
  [Warning] Legacy tag preserved in law-21-play-a-sucker.md: `power`
  [Warning] Legacy tag preserved in law-21-play-a-sucker.md: `psychology`
  [Warning] Legacy tag preserved in law-22-surrender-tactic.md: `book`
  [Warning] Legacy tag preserved in law-22-surrender-tactic.md: `power`
  [Warning] Legacy tag preserved in law-23-concentrate-your-forces.md: `book`
  [Warning] Legacy tag preserved in law-23-concentrate-your-forces.md: `power`
  [Warning] Legacy tag preserved in law-24-play-the-perfect-courtier.md: `book`
  [Warning] Legacy tag preserved in law-24-play-the-perfect-courtier.md: `power`
  [Warning] Legacy tag preserved in law-25-recreate-yourself.md: `book`
  [Warning] Legacy tag preserved in law-25-recreate-yourself.md: `power`
  [Warning] Legacy tag preserved in law-25-recreate-yourself.md: `psychology`
  [Warning] Legacy tag preserved in law-26-keep-your-hands-clean.md: `book`
  [Warning] Legacy tag preserved in law-26-keep-your-hands-clean.md: `power`
  [Warning] Legacy tag preserved in law-27-create-a-cultlike-following.md: `book`
  [Warning] Legacy tag preserved in law-27-create-a-cultlike-following.md: `power`
  [Warning] Legacy tag preserved in law-27-create-a-cultlike-following.md: `psychology`
  [Warning] Legacy tag preserved in law-28-enter-action-with-boldness.md: `book`
  [Warning] Legacy tag preserved in law-28-enter-action-with-boldness.md: `power`
  [Warning] Legacy tag preserved in law-28-enter-action-with-boldness.md: `psychology`
  [Warning] Legacy tag preserved in law-29-plan-to-the-end.md: `book`
  [Warning] Legacy tag preserved in law-29-plan-to-the-end.md: `power`
  [Warning] Legacy tag preserved in law-30-make-accomplishments-seem-effortless.md: `book`
  [Warning] Legacy tag preserved in law-30-make-accomplishments-seem-effortless.md: `power`
  [Warning] Legacy tag preserved in law-31-control-the-options.md: `book`
  [Warning] Legacy tag preserved in law-31-control-the-options.md: `power`
  [Warning] Legacy tag preserved in law-32-play-to-peoples-fantasies.md: `book`
  [Warning] Legacy tag preserved in law-32-play-to-peoples-fantasies.md: `power`
  [Warning] Legacy tag preserved in law-32-play-to-peoples-fantasies.md: `psychology`
  [Warning] Legacy tag preserved in law-33-discover-each-mans-thumbscrew.md: `book`
  [Warning] Legacy tag preserved in law-33-discover-each-mans-thumbscrew.md: `power`
  [Warning] Legacy tag preserved in law-33-discover-each-mans-thumbscrew.md: `psychology`
  [Warning] Legacy tag preserved in law-34-be-royal.md: `book`
  [Warning] Legacy tag preserved in law-34-be-royal.md: `power`
  [Warning] Legacy tag preserved in law-35-master-the-art-of-timing.md: `book`
  [Warning] Legacy tag preserved in law-35-master-the-art-of-timing.md: `power`
  [Warning] Legacy tag preserved in law-36-disdain-things-you-cannot-have.md: `book`
  [Warning] Legacy tag preserved in law-36-disdain-things-you-cannot-have.md: `power`
  [Warning] Legacy tag preserved in law-37-create-compelling-spectacles.md: `book`
  [Warning] Legacy tag preserved in law-37-create-compelling-spectacles.md: `power`
  [Warning] Legacy tag preserved in law-38-think-as-you-like-behave-like-others.md: `book`
  [Warning] Legacy tag preserved in law-38-think-as-you-like-behave-like-others.md: `power`
  [Warning] Legacy tag preserved in law-39-stir-up-waters.md: `book`
  [Warning] Legacy tag preserved in law-39-stir-up-waters.md: `power`
  [Warning] Legacy tag preserved in law-39-stir-up-waters.md: `psychology`
  [Warning] Legacy tag preserved in law-40-despise-the-free-lunch.md: `book`
  [Warning] Legacy tag preserved in law-40-despise-the-free-lunch.md: `power`
  [Warning] Legacy tag preserved in law-41-avoid-stepping-into-great-mans-shoes.md: `book`
  [Warning] Legacy tag preserved in law-41-avoid-stepping-into-great-mans-shoes.md: `power`
  [Warning] Legacy tag preserved in law-41-avoid-stepping-into-great-mans-shoes.md: `psychology`
  [Warning] Legacy tag preserved in law-42-strike-the-shepherd.md: `book`
  [Warning] Legacy tag preserved in law-42-strike-the-shepherd.md: `power`
  [Warning] Legacy tag preserved in law-43-work-on-hearts-and-minds.md: `book`
  [Warning] Legacy tag preserved in law-43-work-on-hearts-and-minds.md: `power`
  [Warning] Legacy tag preserved in law-43-work-on-hearts-and-minds.md: `psychology`
  [Warning] Legacy tag preserved in law-44-mirror-effect.md: `book`
  [Warning] Legacy tag preserved in law-44-mirror-effect.md: `power`
  [Warning] Legacy tag preserved in law-44-mirror-effect.md: `psychology`
  [Warning] Legacy tag preserved in law-45-preach-change-reform-slowly.md: `book`
  [Warning] Legacy tag preserved in law-45-preach-change-reform-slowly.md: `power`
  [Warning] Legacy tag preserved in law-45-preach-change-reform-slowly.md: `study`
  [Warning] Legacy tag preserved in law-46-never-appear-too-perfect.md: `book`
  [Warning] Legacy tag preserved in law-46-never-appear-too-perfect.md: `power`
  [Warning] Legacy tag preserved in law-46-never-appear-too-perfect.md: `psychology`
  [Warning] Legacy tag preserved in law-47-learn-when-to-stop.md: `book`
  [Warning] Legacy tag preserved in law-47-learn-when-to-stop.md: `power`
  [Warning] Legacy tag preserved in law-48-assume-formlessness.md: `book`
  [Warning] Legacy tag preserved in law-48-assume-formlessness.md: `power`
  [Warning] Legacy tag preserved in law-of-least-effort.md: `book`
  [Warning] Legacy tag preserved in law-of-least-effort.md: `habits`
  [Warning] Legacy tag preserved in law-of-least-effort.md: `productivity`
  [Warning] Legacy tag preserved in law-of-least-effort.md: `psychology`
  [Warning] Legacy tag preserved in law-of-least-effort.md: `study`
  [Warning] Legacy tag preserved in learn-99-percent-claude-and-codex-in-25-mins-cheatsheet.md: `ai`
  [Warning] Legacy tag preserved in learn-99-percent-claude-and-codex-in-25-mins-cheatsheet.md: `ml`
  [Warning] Legacy tag preserved in learn-99-percent-claude-and-codex-in-25-mins-cheatsheet.md: `yt`
  [Warning] Legacy tag preserved in learn-99-percent-claude-and-codex-in-25-mins-cheatsheet.md: `productivity`
  [Warning] Legacy tag preserved in liking-loving-tendency.md: `psychology`
  [Warning] Legacy tag preserved in local-filesystem-agent-advantage.md: `ai`
  [Warning] Legacy tag preserved in local-filesystem-agent-advantage.md: `ml`
  [Warning] Legacy tag preserved in local-filesystem-agent-advantage.md: `yt`
  [Warning] Legacy tag preserved in local-filesystem-agent-advantage.md: `productivity`
  [Warning] Legacy tag preserved in lollapalooza-effect.md: `business`
  [Warning] Legacy tag preserved in lollapalooza-effect.md: `psychology`
  [Warning] Broken link in long-term-time-horizon.md: [[mars-colonization-mission]] (target does not exist)
  [Warning] Broken link in long-term-time-horizon.md: [[tesla-master-plan]] (target does not exist)
  [Warning] Legacy tag preserved in louis-xiv-versailles.md: `book`
  [Warning] Legacy tag preserved in louis-xiv-versailles.md: `power`
  [Warning] Legacy tag preserved in louis-xiv-versailles.md: `study`
  [Warning] Legacy tag preserved in lubrizol-acquisition.md: `business`
  [Warning] Legacy tag preserved in machiavelli-and-the-prince.md: `book`
  [Warning] Legacy tag preserved in machiavelli-and-the-prince.md: `power`
  [Warning] Legacy tag preserved in machiavelli-and-the-prince.md: `study`
  [Warning] Legacy tag preserved in make-it-invisible.md: `book`
  [Warning] Legacy tag preserved in make-it-invisible.md: `habits`
  [Warning] Legacy tag preserved in make-it-invisible.md: `power`
  [Warning] Legacy tag preserved in make-it-invisible.md: `productivity`
  [Warning] Legacy tag preserved in make-money-while-you-sleep.md: `business`
  [Warning] Legacy tag preserved in mao-zedong-formlessness.md: `book`
  [Warning] Legacy tag preserved in mao-zedong-formlessness.md: `power`
  [Warning] Legacy tag preserved in margin-of-safety.md: `business`
  [Warning] Legacy tag preserved in margin-of-safety.md: `philosophy`
  [Warning] Legacy tag preserved in marginal-gains-british-cycling.md: `book`
  [Warning] Legacy tag preserved in marginal-gains-british-cycling.md: `productivity`
  [Warning] Legacy tag preserved in marmon-group-acquisition.md: `business`
  [Warning] Legacy tag preserved in moral-nobility-as-tactical-vulnerability.md: `book`
  [Warning] Legacy tag preserved in moral-nobility-as-tactical-vulnerability.md: `power`
  [Warning] Legacy tag preserved in moral-nobility-as-tactical-vulnerability.md: `study`
  [Warning] Legacy tag preserved in motivation-and-inspiration.md: `Yt`
  [Warning] Legacy tag preserved in motivation-ritual.md: `productivity`
  [Warning] Legacy tag preserved in musk-ai-risk-philosophy.md: `elon-musk`
  [Warning] Legacy tag preserved in musk-ai-risk-philosophy.md: `ai`
  [Warning] Legacy tag preserved in musk-ai-risk-philosophy.md: `belief`
  [Warning] Legacy tag preserved in musk-ai-risk-philosophy.md: `philosophy`
  [Warning] Broken link in musk-ai-risk-philosophy.md: [[xai-founding]] (target does not exist)
  [Warning] Broken link in musk-ai-risk-philosophy.md: [[openai-founding]] (target does not exist)
  [Warning] Legacy tag preserved in musk-communication-pattern.md: `elon-musk`
  [Warning] Legacy tag preserved in musk-communication-pattern.md: `leadership`
  [Warning] Legacy tag preserved in musk-communication-pattern.md: `communication`
  [Warning] Legacy tag preserved in musk-communication-pattern.md: `rule`
  [Warning] Legacy tag preserved in musk-mars-colonization-vision.md: `elon-musk`
  [Warning] Legacy tag preserved in musk-mars-colonization-vision.md: `thinking`
  [Warning] Legacy tag preserved in musk-mars-colonization-vision.md: `philosophy`
  [Warning] Broken link in musk-mars-colonization-vision.md: [[starlink-business-strategy]] (target does not exist)
  [Warning] Legacy tag preserved in musk-on-failure-quote.md: `elon-musk`
  [Warning] Legacy tag preserved in musk-on-failure-quote.md: `quote`
  [Warning] Legacy tag preserved in musk-on-failure-quote.md: `innovation`
  [Warning] Legacy tag preserved in musk-on-first-principles-quote.md: `elon-musk`
  [Warning] Legacy tag preserved in musk-on-first-principles-quote.md: `quote`
  [Warning] Legacy tag preserved in musk-on-first-principles-quote.md: `thinking`
  [Warning] Legacy tag preserved in musk-time-blocking-habit.md: `elon-musk`
  [Warning] Legacy tag preserved in musk-time-blocking-habit.md: `productivity`
  [Warning] Legacy tag preserved in musk-time-blocking-habit.md: `habit`
  [Warning] Broken link in musk-time-blocking-habit.md: [[direct-communication-mandate]] (target does not exist)
  [Warning] Legacy tag preserved in musk-working-hours-expectation.md: `elon-musk`
  [Warning] Legacy tag preserved in musk-working-hours-expectation.md: `leadership`
  [Warning] Legacy tag preserved in musk-working-hours-expectation.md: `habit`
  [Warning] Broken link in musk-working-hours-expectation.md: [[direct-communication-mandate]] (target does not exist)
  [Warning] Legacy tag preserved in national-indemnity-acquisition.md: `business`
  [Warning] Legacy tag preserved in national-indemnity-acquisition.md: `biography`
  [Warning] Legacy tag preserved in netjets-acquisition.md: `business`
  [Warning] Legacy tag preserved in nicolas-fouquet-downfall.md: `book`
  [Warning] Legacy tag preserved in nicolas-fouquet-downfall.md: `power`
  [Warning] Legacy tag preserved in nicolas-fouquet-downfall.md: `study`
  [Warning] Legacy tag preserved in nols-tax-shield.md: `business`
  [Warning] Legacy tag preserved in one-percent-better-every-day.md: `book`
  [Warning] Legacy tag preserved in one-percent-better-every-day.md: `habits`
  [Warning] Legacy tag preserved in one-percent-better-every-day.md: `productivity`
  [Warning] Legacy tag preserved in operating-leverage.md: `business`
  [Warning] Legacy tag preserved in opportunity-cost-heuristic.md: `business`
  [Warning] Legacy tag preserved in opportunity-cost-heuristic.md: `productivity`
  [Warning] Legacy tag preserved in overcoming-obstacles-and-adversity.md: `Yt`
  [Warning] Legacy tag preserved in owner-earnings.md: `business`
  [Warning] Legacy tag preserved in pampered-chef-acquisition.md: `business`
  [Warning] Legacy tag preserved in pavlovian-association.md: `psychology`
  [Warning] Legacy tag preserved in pavlovian-association.md: `business`
  [Warning] Legacy tag preserved in personal-growth-and-development.md: `Yt`
  [Warning] Legacy tag preserved in phelps-and-el-guerrouj.md: `book`
  [Warning] Legacy tag preserved in phelps-and-el-guerrouj.md: `habits`
  [Warning] Legacy tag preserved in phelps-and-el-guerrouj.md: `productivity`
  [Warning] Legacy tag preserved in phelps-and-el-guerrouj.md: `psychology`
  [Warning] Legacy tag preserved in phil-carret-influence.md: `biography`
  [Warning] Legacy tag preserved in physics-constraint-test.md: `elon-musk`
  [Warning] Legacy tag preserved in physics-constraint-test.md: `thinking`
  [Warning] Legacy tag preserved in physics-constraint-test.md: `engineering`
  [Warning] Broken link in physics-constraint-test.md: [[mars-colonization-physics-basis]] (target does not exist)
  [Warning] Legacy tag preserved in pilot-flying-j-acquisition.md: `business`
  [Warning] Legacy tag preserved in pkm-development-phases.md: `ai`
  [Warning] Legacy tag preserved in pkm-development-phases.md: `ml`
  [Warning] Legacy tag preserved in pkm-development-phases.md: `yt`
  [Warning] Legacy tag preserved in pkm-development-phases.md: `productivity`
  [Warning] Legacy tag preserved in plateau-of-latent-potential.md: `book`
  [Warning] Legacy tag preserved in plateau-of-latent-potential.md: `habits`
  [Warning] Legacy tag preserved in plateau-of-latent-potential.md: `productivity`
  [Warning] Legacy tag preserved in plateau-of-latent-potential.md: `psychology`
  [Warning] Legacy tag preserved in pointing-and-calling.md: `book`
  [Warning] Legacy tag preserved in pointing-and-calling.md: `habits`
  [Warning] Legacy tag preserved in pointing-and-calling.md: `productivity`
  [Warning] Legacy tag preserved in poison-of-optionality.md: `optionality`
  [Warning] Legacy tag preserved in poison-of-optionality.md: `choice-paralysis`
  [Warning] Legacy tag preserved in poison-of-optionality.md: `commitment`
  [Warning] Legacy tag preserved in polgar-sisters-chess.md: `book`
  [Warning] Legacy tag preserved in polgar-sisters-chess.md: `habits`
  [Warning] Legacy tag preserved in polgar-sisters-chess.md: `productivity`
  [Warning] Legacy tag preserved in polgar-sisters-chess.md: `study`
  [Warning] Legacy tag preserved in power-abhors-a-vacuum.md: `book`
  [Warning] Legacy tag preserved in power-abhors-a-vacuum.md: `power`
  [Warning] Legacy tag preserved in power-as-a-social-game.md: `book`
  [Warning] Legacy tag preserved in power-as-a-social-game.md: `power`
  [Warning] Legacy tag preserved in power-as-a-social-game.md: `psychology`
  [Warning] Legacy tag preserved in power-as-a-social-game.md: `study`
  [Warning] Legacy tag preserved in powerful-mindset-shifts.md: `Yt`
  [Warning] Legacy tag preserved in precision-castparts-acquisition.md: `business`
  [Warning] Legacy tag preserved in premacks-principle.md: `psychology`
  [Warning] Legacy tag preserved in price-vs-value.md: `business`
  [Warning] Legacy tag preserved in prompt-combination-codes.md: `framework`
  [Warning] Legacy tag preserved in prompt-combination-codes.md: `ai`
  [Warning] Legacy tag preserved in prompt-combination-codes.md: `productivity`
  [Warning] Legacy tag preserved in prompt-combination-codes.md: `strategy`
  [Warning] Legacy tag preserved in prompt-combination-codes.md: `llm`
  [Warning] Legacy tag preserved in prompt-combination-codes.md: `processed`
  [Warning] Legacy tag preserved in prompt-honesty-codes.md: `technique`
  [Warning] Legacy tag preserved in prompt-honesty-codes.md: `ai`
  [Warning] Legacy tag preserved in prompt-honesty-codes.md: `productivity`
  [Warning] Legacy tag preserved in prompt-honesty-codes.md: `llm`
  [Warning] Legacy tag preserved in prompt-honesty-codes.md: `processed`
  [Warning] Legacy tag preserved in prompt-learning-codes.md: `technique`
  [Warning] Legacy tag preserved in prompt-learning-codes.md: `ai`
  [Warning] Legacy tag preserved in prompt-learning-codes.md: `learning`
  [Warning] Legacy tag preserved in prompt-learning-codes.md: `productivity`
  [Warning] Legacy tag preserved in prompt-learning-codes.md: `llm`
  [Warning] Legacy tag preserved in prompt-learning-codes.md: `processed`
  [Warning] Legacy tag preserved in prompt-meta-announce.md: `technique`
  [Warning] Legacy tag preserved in prompt-meta-announce.md: `ai`
  [Warning] Legacy tag preserved in prompt-meta-announce.md: `productivity`
  [Warning] Legacy tag preserved in prompt-meta-announce.md: `llm`
  [Warning] Legacy tag preserved in prompt-meta-announce.md: `processed`
  [Warning] Legacy tag preserved in prompt-output-control-codes.md: `technique`
  [Warning] Legacy tag preserved in prompt-output-control-codes.md: `ai`
  [Warning] Legacy tag preserved in prompt-output-control-codes.md: `writing`
  [Warning] Legacy tag preserved in prompt-output-control-codes.md: `productivity`
  [Warning] Legacy tag preserved in prompt-output-control-codes.md: `llm`
  [Warning] Legacy tag preserved in prompt-output-control-codes.md: `processed`
  [Warning] Legacy tag preserved in prompt-reasoning-codes.md: `technique`
  [Warning] Legacy tag preserved in prompt-reasoning-codes.md: `ai`
  [Warning] Legacy tag preserved in prompt-reasoning-codes.md: `strategy`
  [Warning] Legacy tag preserved in prompt-reasoning-codes.md: `productivity`
  [Warning] Legacy tag preserved in prompt-reasoning-codes.md: `llm`
  [Warning] Legacy tag preserved in prompt-reasoning-codes.md: `processed`
  [Warning] Legacy tag preserved in prompt-simplification-codes.md: `technique`
  [Warning] Legacy tag preserved in prompt-simplification-codes.md: `ai`
  [Warning] Legacy tag preserved in prompt-simplification-codes.md: `productivity`
  [Warning] Legacy tag preserved in prompt-simplification-codes.md: `llm`
  [Warning] Legacy tag preserved in prompt-simplification-codes.md: `processed`
  [Warning] Legacy tag preserved in prompt-strategy-codes.md: `technique`
  [Warning] Legacy tag preserved in prompt-strategy-codes.md: `ai`
  [Warning] Legacy tag preserved in prompt-strategy-codes.md: `strategy`
  [Warning] Legacy tag preserved in prompt-strategy-codes.md: `business`
  [Warning] Legacy tag preserved in prompt-strategy-codes.md: `productivity`
  [Warning] Legacy tag preserved in prompt-strategy-codes.md: `llm`
  [Warning] Legacy tag preserved in prompt-strategy-codes.md: `processed`
  [Warning] Legacy tag preserved in prompt-thinking-codes.md: `technique`
  [Warning] Legacy tag preserved in prompt-thinking-codes.md: `ai`
  [Warning] Legacy tag preserved in prompt-thinking-codes.md: `productivity`
  [Warning] Legacy tag preserved in prompt-thinking-codes.md: `llm`
  [Warning] Legacy tag preserved in prompt-thinking-codes.md: `processed`
  [Warning] Legacy tag preserved in prompt-voice-format-codes.md: `technique`
  [Warning] Legacy tag preserved in prompt-voice-format-codes.md: `ai`
  [Warning] Legacy tag preserved in prompt-voice-format-codes.md: `writing`
  [Warning] Legacy tag preserved in prompt-voice-format-codes.md: `productivity`
  [Warning] Legacy tag preserved in prompt-voice-format-codes.md: `llm`
  [Warning] Legacy tag preserved in prompt-voice-format-codes.md: `processed`
  [Warning] Legacy tag preserved in prototype-then-iterate.md: `elon-musk`
  [Warning] Legacy tag preserved in prototype-then-iterate.md: `engineering`
  [Warning] Legacy tag preserved in prototype-then-iterate.md: `principle`
  [Warning] Broken link in prototype-then-iterate.md: [[tesla-over-the-air-updates]] (target does not exist)
  [Warning] Legacy tag preserved in queen-elizabeth-i-power-image.md: `book`
  [Warning] Legacy tag preserved in queen-elizabeth-i-power-image.md: `power`
  [Warning] Legacy tag preserved in queen-elizabeth-i-power-image.md: `study`
  [Warning] Legacy tag preserved in question-every-requirement.md: `elon-musk`
  [Warning] Legacy tag preserved in question-every-requirement.md: `principle`
  [Warning] Legacy tag preserved in question-every-requirement.md: `engineering`
  [Warning] Legacy tag preserved in question-every-requirement.md: `rule`
  [Warning] Broken link in question-every-requirement.md: [[spacex-cost-reduction-strategy]] (target does not exist)
  [Warning] Broken link in question-every-requirement.md: [[traceability-of-requirements]] (target does not exist)
  [Warning] Legacy tag preserved in quiet-thinking-habit.md: `productivity`
  [Warning] Legacy tag preserved in quote-genes-predispose.md: `study`
  [Warning] Legacy tag preserved in quote-james-clear-clarity.md: `productivity`
  [Warning] Legacy tag preserved in quote-what-is-rewarded-is-repeated.md: `psychology`
  [Warning] Legacy tag preserved in race-prompt-framework.md: `framework`
  [Warning] Legacy tag preserved in race-prompt-framework.md: `ai`
  [Warning] Legacy tag preserved in race-prompt-framework.md: `productivity`
  [Warning] Legacy tag preserved in race-prompt-framework.md: `llm`
  [Warning] Legacy tag preserved in race-prompt-framework.md: `processed`
  [Warning] Legacy tag preserved in reasoning-by-analogy.md: `elon-musk`
  [Warning] Legacy tag preserved in reasoning-by-analogy.md: `thinking`
  [Warning] Legacy tag preserved in reasoning-by-analogy.md: `concept`
  [Warning] Broken link in reasoning-by-analogy.md: [[innovation-vs-optimization]] (target does not exist)
  [Warning] Legacy tag preserved in reciprocity-tendency.md: `psychology`
  [Warning] Legacy tag preserved in reclaiming-your-personal-power.md: `Yt`
  [Warning] Legacy tag preserved in red-team-technique.md: `technique`
  [Warning] Legacy tag preserved in red-team-technique.md: `ai`
  [Warning] Legacy tag preserved in red-team-technique.md: `strategy`
  [Warning] Legacy tag preserved in red-team-technique.md: `productivity`
  [Warning] Legacy tag preserved in red-team-technique.md: `llm`
  [Warning] Legacy tag preserved in red-team-technique.md: `processed`
  [Warning] Legacy tag preserved in reflection-and-review.md: `book`
  [Warning] Legacy tag preserved in reflection-and-review.md: `habits`
  [Warning] Legacy tag preserved in reflection-and-review.md: `productivity`
  [Warning] Legacy tag preserved in reflection-and-review.md: `psychology`
  [Warning] Legacy tag preserved in reframing-hard-habits.md: `productivity`
  [Warning] Legacy tag preserved in regret-minimization-framework.md: `productivity`
  [Warning] Legacy tag preserved in regret-minimization-framework.md: `philosophy`
  [Warning] Legacy tag preserved in reinforcement.md: `psychology`
  [Warning] Legacy tag preserved in reinvestment-moat.md: `business`
  [Warning] Legacy tag preserved in relationships.md: `Yt`
  [Warning] Legacy tag preserved in reputation-protection-heuristic.md: `business`
  [Warning] Legacy tag preserved in reputation-protection-heuristic.md: `philosophy`
  [Warning] Legacy tag preserved in reputation-twenty-years-to-build.md: `business`
  [Warning] Legacy tag preserved in reputation-twenty-years-to-build.md: `philosophy`
  [Warning] Legacy tag preserved in return-on-equity.md: `business`
  [Warning] Legacy tag preserved in risk-free-rate-hurdle.md: `business`
  [Warning] Legacy tag preserved in roger-fisher-nuclear-button.md: `book`
  [Warning] Legacy tag preserved in roger-fisher-nuclear-button.md: `habits`
  [Warning] Legacy tag preserved in roger-fisher-nuclear-button.md: `power`
  [Warning] Legacy tag preserved in roger-fisher-nuclear-button.md: `productivity`
  [Warning] Legacy tag preserved in rolls-royce-subway-analogy.md: `business`
  [Warning] Legacy tag preserved in rule-one-never-lose-money.md: `business`
  [Warning] Legacy tag preserved in rule-one-never-lose-money.md: `philosophy`
  [Warning] Legacy tag preserved in safeguard-soap-handwashing-study.md: `book`
  [Warning] Legacy tag preserved in safeguard-soap-handwashing-study.md: `habits`
  [Warning] Legacy tag preserved in safeguard-soap-handwashing-study.md: `productivity`
  [Warning] Legacy tag preserved in salomon-brothers-intervention.md: `business`
  [Warning] Legacy tag preserved in salomon-brothers-intervention.md: `biography`
  [Warning] Legacy tag preserved in sanborn-map-investment.md: `business`
  [Warning] Legacy tag preserved in scarcity-bias-investing.md: `psychology`
  [Warning] Legacy tag preserved in scarcity-bias-investing.md: `business`
  [Warning] Legacy tag preserved in sees-candies-investment-case-study.md: `business`
  [Warning] Legacy tag preserved in self-fixing-code-loops.md: `ai`
  [Warning] Legacy tag preserved in self-fixing-code-loops.md: `ml`
  [Warning] Legacy tag preserved in self-fixing-code-loops.md: `yt`
  [Warning] Legacy tag preserved in self-fixing-code-loops.md: `productivity`
  [Warning] Legacy tag preserved in self-improvement-strategies.md: `Yt`
  [Warning] Legacy tag preserved in shaw-industries-acquisition.md: `business`
  [Warning] Legacy tag preserved in skinner-box-variable-rewards.md: `book`
  [Warning] Legacy tag preserved in skinner-box-variable-rewards.md: `habits`
  [Warning] Legacy tag preserved in skinner-box-variable-rewards.md: `productivity`
  [Warning] Legacy tag preserved in skinner-box-variable-rewards.md: `psychology`
  [Warning] Legacy tag preserved in social-norms-and-habits.md: `book`
  [Warning] Legacy tag preserved in social-norms-and-habits.md: `habits`
  [Warning] Legacy tag preserved in social-norms-and-habits.md: `productivity`
  [Warning] Legacy tag preserved in social-norms-and-habits.md: `psychology`
  [Warning] Legacy tag preserved in social-norms-and-habits.md: `study`
  [Warning] Legacy tag preserved in social-proof-bias.md: `psychology`
  [Warning] Legacy tag preserved in social-proof-bias.md: `business`
  [Warning] Legacy tag preserved in socratic-prompting.md: `technique`
  [Warning] Legacy tag preserved in socratic-prompting.md: `ai`
  [Warning] Legacy tag preserved in socratic-prompting.md: `philosophy`
  [Warning] Legacy tag preserved in socratic-prompting.md: `learning`
  [Warning] Legacy tag preserved in socratic-prompting.md: `llm`
  [Warning] Legacy tag preserved in socratic-prompting.md: `processed`
  [Warning] Legacy tag preserved in solomon-asch-conformity.md: `book`
  [Warning] Legacy tag preserved in solomon-asch-conformity.md: `habits`
  [Warning] Legacy tag preserved in solomon-asch-conformity.md: `power`
  [Warning] Legacy tag preserved in solomon-asch-conformity.md: `productivity`
  [Warning] Legacy tag preserved in solomon-asch-conformity.md: `psychology`
  [Warning] Legacy tag preserved in sorites-paradox.md: `book`
  [Warning] Legacy tag preserved in sorites-paradox.md: `habits`
  [Warning] Legacy tag preserved in sorites-paradox.md: `productivity`
  [Warning] Legacy tag preserved in sorites-paradox.md: `study`
  [Warning] Legacy tag preserved in spacex-falcon-1-failures.md: `elon-musk`
  [Warning] Legacy tag preserved in spacex-falcon-1-failures.md: `failure`
  [Warning] Legacy tag preserved in spacex-falcon-1-failures.md: `engineering`
  [Warning] Legacy tag preserved in special-situations.md: `business`
  [Warning] Legacy tag preserved in speed-of-iteration-principle.md: `elon-musk`
  [Warning] Legacy tag preserved in speed-of-iteration-principle.md: `engineering`
  [Warning] Legacy tag preserved in speed-of-iteration-principle.md: `principle`
  [Warning] Broken link in speed-of-iteration-principle.md: [[tesla-over-the-air-updates]] (target does not exist)
  [Warning] Legacy tag preserved in sprezzatura.md: `book`
  [Warning] Legacy tag preserved in sprezzatura.md: `power`
  [Warning] Legacy tag preserved in steelman-technique.md: `technique`
  [Warning] Legacy tag preserved in steelman-technique.md: `ai`
  [Warning] Legacy tag preserved in steelman-technique.md: `philosophy`
  [Warning] Legacy tag preserved in steelman-technique.md: `productivity`
  [Warning] Legacy tag preserved in steelman-technique.md: `llm`
  [Warning] Legacy tag preserved in steelman-technique.md: `processed`
  [Warning] Legacy tag preserved in strategic-deception.md: `book`
  [Warning] Legacy tag preserved in strategic-deception.md: `power`
  [Warning] Legacy tag preserved in supernormal-stimulus.md: `book`
  [Warning] Legacy tag preserved in supernormal-stimulus.md: `habits`
  [Warning] Legacy tag preserved in supernormal-stimulus.md: `productivity`
  [Warning] Legacy tag preserved in supernormal-stimulus.md: `psychology`
  [Warning] Legacy tag preserved in susan-buffett-influence.md: `biography`
  [Warning] Legacy tag preserved in systems-vs-goals.md: `book`
  [Warning] Legacy tag preserved in systems-vs-goals.md: `habits`
  [Warning] Legacy tag preserved in systems-vs-goals.md: `productivity`
  [Warning] Legacy tag preserved in talent-density-principle.md: `elon-musk`
  [Warning] Legacy tag preserved in talent-density-principle.md: `leadership`
  [Warning] Legacy tag preserved in talent-density-principle.md: `principle`
  [Warning] Broken link in talent-density-principle.md: [[hire-for-evidence-of-exceptional-ability]] (target does not exist)
  [Warning] Broken link in talent-density-principle.md: [[small-teams-superiority]] (target does not exist)
  [Warning] Broken link in talent-density-principle.md: [[palo-alto-hiring-philosophy]] (target does not exist)
  [Warning] Broken link in talent-density-principle.md: [[spacex-hiring-process]] (target does not exist)
  [Warning] Legacy tag preserved in talleyrand-survival.md: `book`
  [Warning] Legacy tag preserved in talleyrand-survival.md: `power`
  [Warning] Legacy tag preserved in talleyrand-survival.md: `study`
  [Warning] Legacy tag preserved in ted-weschler-successor.md: `business`
  [Warning] Legacy tag preserved in ted-weschler-successor.md: `biography`
  [Warning] Legacy tag preserved in temptation-bundling.md: `book`
  [Warning] Legacy tag preserved in temptation-bundling.md: `habits`
  [Warning] Legacy tag preserved in temptation-bundling.md: `productivity`
  [Warning] Legacy tag preserved in temptation-bundling.md: `psychology`
  [Warning] Legacy tag preserved in temptation-bundling.md: `workflow`
  [Warning] Legacy tag preserved in tesla-production-hell.md: `elon-musk`
  [Warning] Legacy tag preserved in tesla-production-hell.md: `failure`
  [Warning] Legacy tag preserved in tesla-production-hell.md: `manufacturing`
  [Warning] Legacy tag preserved in tesla-production-hell.md: `engineering`
  [Warning] Legacy tag preserved in the-courtier-archetype.md: `book`
  [Warning] Legacy tag preserved in the-courtier-archetype.md: `power`
  [Warning] Legacy tag preserved in the-futility-of-gratitude.md: `book`
  [Warning] Legacy tag preserved in the-futility-of-gratitude.md: `power`
  [Warning] Legacy tag preserved in the-futility-of-gratitude.md: `psychology`
  [Warning] Legacy tag preserved in the-illusion-of-equality.md: `book`
  [Warning] Legacy tag preserved in the-illusion-of-equality.md: `power`
  [Warning] Legacy tag preserved in the-illusion-of-equality.md: `study`
  [Warning] Legacy tag preserved in the-law-of-reversal.md: `book`
  [Warning] Legacy tag preserved in the-law-of-reversal.md: `power`
  [Warning] Legacy tag preserved in the-law-of-reversal.md: `study`
  [Warning] Legacy tag preserved in the-myth-of-sincerity.md: `book`
  [Warning] Legacy tag preserved in the-myth-of-sincerity.md: `power`
  [Warning] Legacy tag preserved in the-myth-of-sincerity.md: `psychology`
  [Warning] Legacy tag preserved in the-reality-of-human-envy.md: `book`
  [Warning] Legacy tag preserved in the-reality-of-human-envy.md: `power`
  [Warning] Legacy tag preserved in the-reality-of-human-envy.md: `psychology`
  [Warning] Legacy tag preserved in tide-goes-out-naked-swimming.md: `business`
  [Warning] Legacy tag preserved in todd-combs-successor.md: `business`
  [Warning] Legacy tag preserved in todd-combs-successor.md: `biography`
  [Warning] Legacy tag preserved in tom-murphy-influence.md: `biography`
  [Warning] Legacy tag preserved in trent-dyrsmid-paperclips.md: `book`
  [Warning] Legacy tag preserved in trent-dyrsmid-paperclips.md: `habits`
  [Warning] Legacy tag preserved in trent-dyrsmid-paperclips.md: `productivity`
  [Warning] Legacy tag preserved in twenty-punches-card-rule.md: `productivity`
  [Warning] Legacy tag preserved in twenty-punches-card-rule.md: `business`
  [Warning] Legacy tag preserved in two-minute-rule.md: `book`
  [Warning] Legacy tag preserved in two-minute-rule.md: `habits`
  [Warning] Legacy tag preserved in two-minute-rule.md: `productivity`
  [Warning] Legacy tag preserved in two-slot-punch-card.md: `productivity`
  [Warning] Legacy tag preserved in two-slot-punch-card.md: `business`
  [Warning] Legacy tag preserved in two-step-identity-change.md: `book`
  [Warning] Legacy tag preserved in two-step-identity-change.md: `habits`
  [Warning] Legacy tag preserved in two-step-identity-change.md: `productivity`
  [Warning] Legacy tag preserved in two-way-vs-one-way-doors.md: `decision-making`
  [Warning] Legacy tag preserved in two-way-vs-one-way-doors.md: `mental-model`
  [Warning] Legacy tag preserved in two-way-vs-one-way-doors.md: `framework`
  [Warning] Legacy tag preserved in unemployment-optionality-paradox.md: `career`
  [Warning] Legacy tag preserved in unemployment-optionality-paradox.md: `choice-paralysis`
  [Warning] Legacy tag preserved in unemployment-optionality-paradox.md: `privilege`
  [Warning] Legacy tag preserved in us-air-investment-mistake.md: `business`
  [Warning] Legacy tag preserved in value-investing.md: `business`
  [Warning] Legacy tag preserved in value-investing.md: `philosophy`
  [Warning] Legacy tag preserved in vertical-integration-calculus.md: `elon-musk`
  [Warning] Legacy tag preserved in vertical-integration-calculus.md: `business`
  [Warning] Legacy tag preserved in vertical-integration-calculus.md: `mental-model`
  [Warning] Broken link in vertical-integration-calculus.md: [[tesla-manufacturing-philosophy]] (target does not exist)
  [Warning] Broken link in vertical-integration-calculus.md: [[spacex-supply-chain]] (target does not exist)
  [Warning] Broken link in vertical-integration-calculus.md: [[gigafactory-strategy]] (target does not exist)
  [Warning] Legacy tag preserved in victor-hugo-closet-lock.md: `book`
  [Warning] Legacy tag preserved in victor-hugo-closet-lock.md: `habits`
  [Warning] Legacy tag preserved in victor-hugo-closet-lock.md: `productivity`
  [Warning] Legacy tag preserved in vietnam-veterans-heroin-study.md: `book`
  [Warning] Legacy tag preserved in vietnam-veterans-heroin-study.md: `habits`
  [Warning] Legacy tag preserved in vietnam-veterans-heroin-study.md: `productivity`
  [Warning] Legacy tag preserved in vietnam-veterans-heroin-study.md: `study`
  [Warning] Legacy tag preserved in walter-schloss-contrast.md: `business`
  [Warning] Legacy tag preserved in walter-schloss-contrast.md: `biography`
  [Warning] Legacy tag preserved in warren-buffett-biography.md: `business`
  [Warning] Legacy tag preserved in warren-buffett-biography.md: `biography`
  [Warning] Legacy tag preserved in warren-buffett-quotes.md: `business`
  [Warning] Legacy tag preserved in washington-post-investment.md: `business`
  [Warning] Legacy tag preserved in wesco-financial-acquisition.md: `business`
  [Warning] Legacy tag preserved in why-you-are-feeling-stuck-in-your-20s-cheatsheet.md: `career`
  [Warning] Legacy tag preserved in why-you-are-feeling-stuck-in-your-20s-cheatsheet.md: `self-improvement`
  [Warning] Legacy tag preserved in why-you-are-feeling-stuck-in-your-20s-cheatsheet.md: `cheatsheet`
  [Warning] Legacy tag preserved in you-do-not-rise-to-the-level-of-your-goals.md: `book`
  [Warning] Legacy tag preserved in you-do-not-rise-to-the-level-of-your-goals.md: `habits`
  [Warning] Legacy tag preserved in you-do-not-rise-to-the-level-of-your-goals.md: `productivity`
  [Warning] Legacy tag preserved in 48-laws-of-power-moc.md: `power`
  [Warning] Legacy tag preserved in 48-laws-of-power-moc.md: `moc`
  [Warning] Legacy tag preserved in ai-ml-moc.md: `ai`
  [Warning] Legacy tag preserved in ai-ml-moc.md: `ml`
  [Warning] Legacy tag preserved in ai-ml-moc.md: `moc`
  [Warning] Legacy tag preserved in atomic-habits-moc.md: `habits`
  [Warning] Legacy tag preserved in atomic-habits-moc.md: `moc`
  [Warning] Legacy tag preserved in books-moc.md: `book`
  [Warning] Legacy tag preserved in books-moc.md: `moc`
  [Warning] Legacy tag preserved in elon-musk-moc.md: `elon-musk`
  [Warning] Legacy tag preserved in elon-musk-moc.md: `moc`
  [Warning] Legacy tag preserved in people-moc.md: `biography`
  [Warning] Legacy tag preserved in people-moc.md: `moc`
  [Warning] Legacy tag preserved in prompt-engineering-moc.md: `moc`
  [Warning] Legacy tag preserved in prompt-engineering-moc.md: `ai`
  [Warning] Legacy tag preserved in prompt-engineering-moc.md: `llm`
  [Warning] Legacy tag preserved in prompt-engineering-moc.md: `productivity`
  [Warning] Legacy tag preserved in study-moc.md: `study`
  [Warning] Legacy tag preserved in study-moc.md: `moc`
  [Warning] Legacy tag preserved in tools-moc.md: `tools`
  [Warning] Legacy tag preserved in tools-moc.md: `moc`
  [Warning] Legacy tag preserved in uncomfortable-truths-2-moc.md: `yt`
  [Warning] Legacy tag preserved in uncomfortable-truths-2-moc.md: `moc`
  [Warning] Legacy tag preserved in warren-buffett-moc.md: `moc`
  [Warning] Legacy tag preserved in warren-buffett-moc.md: `business`
  [Warning] Legacy tag preserved in warren-buffett-moc.md: `biography`
  [Warning] Legacy tag preserved in yt-moc.md: `yt`
  [Warning] Legacy tag preserved in yt-moc.md: `moc`
  [Warning] Legacy tag preserved in 48-laws-of-power.md: `books`
  [Warning] Legacy tag preserved in 48-laws-of-power.md: `power`
  [Warning] Legacy tag preserved in 48-laws-of-power.md: `strategy`
  [Warning] Legacy tag preserved in 48-laws-of-power.md: `leadership`
  [Warning] Legacy tag preserved in 48-laws-of-power.md: `psychology`
  [Warning] Legacy tag preserved in atomic-habits.md: `books`
  [Warning] Legacy tag preserved in atomic-habits.md: `habits`
  [Warning] Legacy tag preserved in atomic-habits.md: `productivity`
  [Warning] Legacy tag preserved in atomic-habits.md: `self-improvement`
  [Warning] Legacy tag preserved in atomic-habits_raw_1783875375.md: `books`
  [Warning] Legacy tag preserved in essential-algorithms.md: `books`
  [Warning] Legacy tag preserved in essential-algorithms.md: `dsa`
  [Warning] Legacy tag preserved in essential-algorithms.md: `study`
  [Warning] Legacy tag preserved in every-level-of-a-claude-second-brain-explained.md: `Yt`
  [Warning] Broken link in every-level-of-a-claude-second-brain-explained.md: [[Nate Herk ]] (target does not exist)
  [Warning] Legacy tag preserved in learn-99-percent-claude-and-codex-in-25-mins.md: `Yt`
  [Warning] Broken link in learn-99-percent-claude-and-codex-in-25-mins.md: [[Singh in USA]] (target does not exist)
  [Warning] Legacy tag preserved in python-for-ai-beginner-course.md: `Yt`
  [Warning] Broken link in python-for-ai-beginner-course.md: [[Dave Ebbelaar]] (target does not exist)
  [Warning] Legacy tag preserved in THIS IS WHY PEOPLE HURT YOU.md: `Yt`
  [Warning] Broken link in THIS IS WHY PEOPLE HURT YOU.md: [[Radhika Chopra]] (target does not exist)
  [Warning] Legacy tag preserved in Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md: `Yt`
  [Warning] Broken link in Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md: [[Prakhar Gupta]] (target does not exist)
  [Warning] Legacy tag preserved in warren-buffett-profile.md: `business`
  [Warning] Legacy tag preserved in warren-buffett-profile.md: `biography`
  [Warning] Legacy tag preserved in warren-buffett-profile.md: `philosophy`
  [Warning] Legacy tag preserved in This video is equal to reading 10 books.md: `Yt`
  [Warning] Broken link in This video is equal to reading 10 books.md: [[Radhika Chopra]] (target does not exist)
  [Warning] Legacy tag preserved in Time to Quit Claude  Codex is the New ChatGPT.md: `Yt`
  [Warning] Broken link in Time to Quit Claude  Codex is the New ChatGPT.md: [[Vivek Mishra]] (target does not exist)
  [Warning] Broken link in Untitled.md: [[0, 2, 4]] (target does not exist)
  [Warning] Legacy tag preserved in Wangchuk ki Wife ko Medical Report kyun nahi de rahe Safdarjung ka Suspicious Khel.md: `Yt`
  [Warning] Broken link in Wangchuk ki Wife ko Medical Report kyun nahi de rahe Safdarjung ka Suspicious Khel.md: [[Aditya Kakkar]] (target does not exist)
  [Warning] Legacy tag preserved in HOME-BASE.md: `moc`
  [Warning] Broken link in VAULT-STRUCTURE.md: [[Linear Regression]] (target does not exist)
  [Warning] Broken link in VAULT-STRUCTURE.md: [[Logistic Regression]] (target does not exist)
  [Warning] Broken link in VAULT-STRUCTURE.md: [[Neural Networks]] (target does not exist)
  [Warning] Broken link in VAULT-STRUCTURE.md: [[Transformers]] (target does not exist)
  [Warning] Broken link in VAULT-STRUCTURE.md: [[Reinforcement Learning]] (target does not exist)
  [Warning] Broken link in VAULT-STRUCTURE.md: [[Backpropagation]] (target does not exist)
  [Warning] Broken link in VAULT-STRUCTURE.md: [[Learning Rate]] (target does not exist)

```
### Duplicate Detection Details
```
Found 91 duplicate candidate pairs.

```
### Metadata Migration Details
```
Scanning notes in C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\NODES for migration...

Migration completed. Scanned 339 notes. Migrated 0 notes.

```
### Semantic Linking Details
```
[SemanticLinker] Scanning notes in C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\automations...
[SemanticLinker] Found 0 notes in NODES/.
[SemanticLinker] No notes found. Exiting.

```
### Promotion Check Details
```
{"reported": 339, "path": "C:\\Users\\offic\\OneDrive\\Desktop\\obsidean\\nexusdb\\.antigravity\\logs\\promotion-candidates.json", "mode": "read_only"}

```
### MOC Curation Details
```
[Curation] Thresholds: Soft Limit = 50, Hard Limit = 100

=== MOC Scalability & Curation Report ===
🟡 ⚡ 48 Laws of Power Map of Content (48-laws-of-power-moc.md): 73 links [WARNING]
🟢 🤖 AI & Machine Learning Map of Content (ai-ml-moc.md): 25 links [HEALTHY]
🟢 ⚡ Atomic Habits Map of Content (atomic-habits-moc.md): 47 links [HEALTHY]
🟢 📖 Books Map of Content (books-moc.md): 1 links [HEALTHY]
🟢 🚀 Elon Musk Map of Content (elon-musk-moc.md): 37 links [HEALTHY]
🟢 Finally. Agent Loops Clearly Explained MOC (finally-agent-loops-clearly-explained-moc.md): 0 links [HEALTHY]
🟢 learn-99-percent-claude-and-codex-in-25-mins-moc (learn-99-percent-claude-and-codex-in-25-mins-moc.md): 0 links [HEALTHY]
🟢 👥 People Map of Content (people-moc.md): 1 links [HEALTHY]
🟢 🧠 Prompt Engineering MOC (prompt-engineering-moc.md): 36 links [HEALTHY]
🟢 Python for AI Beginner Course MOC (python-for-ai-beginner-course-moc.md): 0 links [HEALTHY]
🟡 📚 Study Map of Content (study-moc.md): 78 links [WARNING]
🟢 THIS IS WHY PEOPLE HURT YOU (THIS IS WHY PEOPLE HURT YOU.md): 0 links [HEALTHY]
🟢 🛠️ Tools Map of Content (tools-moc.md): 1 links [HEALTHY]
🟢 Uncomfortable Truths 2 MOC (uncomfortable-truths-2-moc.md): 0 links [HEALTHY]
🟢 Warren Buffett MOC (warren-buffett-moc.md): 0 links [HEALTHY]
🟢 Map of Content — Why You Are Feeling STUCK In Your 20s (why-you-are-feeling-stuck-in-your-20s-moc.md): 0 links [HEALTHY]
🟢 📺 YouTube Map of Content (yt-moc.md): 23 links [HEALTHY]
Curation report saved to C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\logs\moc-curation.json

```
### MOC & Health Reports Details
```
Scanned 339 notes in NODES/
Generated/Updated MOC: ai-ml-moc.md with 25 notes.
Generated/Updated MOC: study-moc.md with 78 notes.
Generated/Updated MOC: books-moc.md with 1 notes.
Generated/Updated MOC: atomic-habits-moc.md with 47 notes.
Generated/Updated MOC: 48-laws-of-power-moc.md with 73 notes.
Generated/Updated MOC: people-moc.md with 1 notes.
Generated/Updated MOC: tools-moc.md with 1 notes.
Generated/Updated MOC: yt-moc.md with 23 notes.
Generated/Updated HOME-BASE.md.
[generate_mocs] No domain-level MOCs found; skipping INDEX.md generation.
Generated Orphan Report: C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\03_MOC\_orphans.md with 29 orphans.
Updated MOC Health Log: C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\logs\moc-health.md
MOC Generation completed successfully.

```
```
[Warning] MOC 'study-moc.md' has exceeded the soft limit of 50 links (current: 78 links). Consider splitting it.
[Warning] MOC '48-laws-of-power-moc.md' has exceeded the soft limit of 50 links (current: 73 links). Consider splitting it.

```
### Decay Scheduling Details
```
[decay_scheduler] [DRY RUN] Report written to C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\reports\decay-report.md
  Overdue (critical): 0
  Overdue (high): 0
  Expiring soon: 0
  Incubation timeouts: 0
  Run with --apply to write changes.

```
```
C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\automations\decay_scheduler.py:213: DeprecationWarning: datetime.datetime.utcnow() is deprecated and scheduled for removal in a future version. Use timezone-aware objects to represent datetimes in UTC: datetime.datetime.now(datetime.UTC).
  f"**Generated**: {datetime.utcnow().strftime('%Y-%m-%d %H:%M')} UTC  ",

```
### Health Dashboard Details
```
[health_dashboard] Dashboard written to C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\reports
  Active nodes: 339
  Alerts: 6
    [CRITICAL] orphan_pct = 52.51
    [CRITICAL] dead_link_count = 805
    [CRITICAL] domain_coverage_pct = 9.52
    [CRITICAL] source_utilization_pct = 20.0
    [CRITICAL] moc_coverage_pct = 47.49
    [CRITICAL] broken_ref_count = 7

```
```
C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\automations\health_dashboard.py:301: DeprecationWarning: datetime.datetime.utcnow() is deprecated and scheduled for removal in a future version. Use timezone-aware objects to represent datetimes in UTC: datetime.datetime.now(datetime.UTC).
  "generated_at": datetime.utcnow().isoformat() + "Z",
C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\automations\health_dashboard.py:314: DeprecationWarning: datetime.datetime.utcnow() is deprecated and scheduled for removal in a future version. Use timezone-aware objects to represent datetimes in UTC: datetime.datetime.now(datetime.UTC).
  f"**Generated**: {datetime.utcnow().strftime('%Y-%m-%d %H:%M')} UTC  ",

```
### Graph Analytics Details
```
[graph_analytics] Report written to C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\reports
  Active nodes: 339
  Knowledge velocity: 84.75 notes/week
  Top authority: books-cheatsheet
  Disconnected clusters: 6
  Knowledge gaps: 0

```
```
C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\automations\graph_analytics.py:275: DeprecationWarning: datetime.datetime.utcnow() is deprecated and scheduled for removal in a future version. Use timezone-aware objects to represent datetimes in UTC: datetime.datetime.now(datetime.UTC).
  "generated_at": datetime.utcnow().isoformat() + "Z",
C:\Users\offic\OneDrive\Desktop\obsidean\nexusdb\.antigravity\automations\graph_analytics.py:304: DeprecationWarning: datetime.datetime.utcnow() is deprecated and scheduled for removal in a future version. Use timezone-aware objects to represent datetimes in UTC: datetime.datetime.now(datetime.UTC).
  f"**Generated**: {datetime.utcnow().strftime('%Y-%m-%d %H:%M')} UTC  ",

```
