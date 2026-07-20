# Folder: .antigravity/logs

## File: logs\audit-log.md

```markdown
# NexusDB Audit Log

Append meaningful governance, automation, and knowledge-structure changes. This log is append-only.

| timestamp | actor | action | target | reason | rule | sources | confidence | result | rollback | exception_id |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
| 2026-07-18T18:54:00+05:30 | antigravity | update | .antigravity/automations/ | Centralize duplicate helpers (parse_list_value, clean_tag), fix jsonschema RefResolver warning, remove nested .antigravity directory, and wrap vault_paths.py | governance.md §12 | User request | 100 | applied | revert using git checkout .antigravity/ | none |
| 2026-07-18T14:35:00+05:30 | antigravity | create | README.md | Create repository-wide vault architecture and knowledge pipeline guide | governance.md §12 | User request | 100 | applied | revert using git checkout README.md | none |
| 2026-07-18T13:15:00+05:30 | antigravity | update | VAULT-STRUCTURE.md, AGENT.md, .antigravity/CLAUDE.md, GEMINI.md, .antigravity/GEMINI.md, .antigravity/rules/core/governance.md, .antigravity/rules/automation/ingestion-rules.md | Refactor 02_NEW-KNOWLEDGE/ to specify active learning and dual promotion workflow to NOTES/ and NODES/ | governance.md §6; ingestion-rules.md | User request | 100 | applied | restore prior per-file revisions | none |
| 2026-07-18T12:17:45.6669336+05:30 | codex | create | `.antigravity/rules/governance.md`, `.antigravity/rules/frontmatter-schema.md`, related rules, templates, `GEMINI.md`, `AGENT.md`, `config.yaml` | Establish decision thresholds, controlled metadata, ownership, audit, and safety governance | `governance.md` §§1–16 | User governance-upgrade request | 100 | applied | prior files preserved; reverse individual documented file revisions | none |
| 2026-07-18T12:25:29.4788703+05:30 | codex | update | `.antigravity/automations/semantic_linker_hook/`, templates, `config.yaml` | Enforce a 95% HIGH-priority auto-link floor; retain lower-priority candidates as suggestions; align UUID placeholders | `governance.md` §§3, 8, 12; `linking-rules.md` | User governance-upgrade request | 100 | applied | restore prior per-file revisions; automatic links remain individually revertible | none |
| 2026-07-18T12:33:49.6876898+05:30 | codex | update | `.antigravity/automations/promotion_enforcer.py` | Replace obsolete backlink-threshold scaffold with read-only 10-point promotion scorer; verified against 314 nodes | `governance.md` §§3, 9, 12; `promotion-rules.md` | User governance-upgrade request | 100 | applied | restore prior script revision; generated verification report is in temporary storage only | none |
| 2026-07-18T12:59:28.366833+05:30 | migrate-metadata | promote | NODES\agent-loop-architectures.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\agent-loop-architectures.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.377105+05:30 | migrate-metadata | promote | NODES\agent-loop-done-criteria.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\agent-loop-done-criteria.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.385891+05:30 | migrate-metadata | promote | NODES\agent-loop-mechanics.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\agent-loop-mechanics.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.393272+05:30 | migrate-metadata | promote | NODES\ajit-jain-successor.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\ajit-jain-successor.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.401420+05:30 | migrate-metadata | promote | NODES\algorithm-design-sequence.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\algorithm-design-sequence.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.409732+05:30 | migrate-metadata | promote | NODES\amex-salad-oil-investment.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\amex-salad-oil-investment.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.419910+05:30 | migrate-metadata | promote | NODES\anne-thorndike-cafeteria-study.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\anne-thorndike-cafeteria-study.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.430736+05:30 | migrate-metadata | promote | NODES\apple-investment-case-study.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\apple-investment-case-study.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.438337+05:30 | migrate-metadata | promote | NODES\arbitrage-workouts.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\arbitrage-workouts.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.449718+05:30 | migrate-metadata | promote | NODES\atomic-habit.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\atomic-habit.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.459500+05:30 | migrate-metadata | promote | NODES\authority-bias-investing.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\authority-bias-investing.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.469520+05:30 | migrate-metadata | promote | NODES\availability-bias-investing.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\availability-bias-investing.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.478379+05:30 | migrate-metadata | promote | NODES\bayesian-decision-making.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\bayesian-decision-making.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.485012+05:30 | migrate-metadata | promote | NODES\be-mentally-strong.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\be-mentally-strong.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.491848+05:30 | migrate-metadata | promote | NODES\beating-the-odds-when-things-get-hard.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\beating-the-odds-when-things-get-hard.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.501319+05:30 | migrate-metadata | promote | NODES\benjamin-moore-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\benjamin-moore-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.515697+05:30 | migrate-metadata | promote | NODES\berkshire-hathaway-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\berkshire-hathaway-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.527203+05:30 | migrate-metadata | promote | NODES\berkshire-hathaway-energy.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\berkshire-hathaway-energy.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.536740+05:30 | migrate-metadata | promote | NODES\berkshire-insurance-businesses.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\berkshire-insurance-businesses.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.550554+05:30 | migrate-metadata | promote | NODES\berkshire-shareholder-letters.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\berkshire-shareholder-letters.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.561639+05:30 | migrate-metadata | promote | NODES\bias-from-association.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\bias-from-association.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.570153+05:30 | migrate-metadata | promote | NODES\bill-gates-friendship.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\bill-gates-friendship.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.579282+05:30 | migrate-metadata | promote | NODES\bismarck-realpolitik.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\bismarck-realpolitik.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.589713+05:30 | migrate-metadata | promote | NODES\blue-chip-stamps-investment.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\blue-chip-stamps-investment.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.600934+05:30 | migrate-metadata | promote | NODES\bnsf-railway-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\bnsf-railway-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.613598+05:30 | migrate-metadata | promote | NODES\books-cheatsheet.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\books-cheatsheet.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.626214+05:30 | migrate-metadata | promote | NODES\brain-as-a-prediction-machine.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\brain-as-a-prediction-machine.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.635370+05:30 | migrate-metadata | promote | NODES\brian-clark-fingernail-biting.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\brian-clark-fingernail-biting.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.642962+05:30 | migrate-metadata | promote | NODES\bryan-harris-habit-contract.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\bryan-harris-habit-contract.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.652963+05:30 | migrate-metadata | promote | NODES\buffett-childhood-entrepreneurship.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\buffett-childhood-entrepreneurship.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.662518+05:30 | migrate-metadata | promote | NODES\buffett-decision-making-framework.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\buffett-decision-making-framework.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.689597+05:30 | migrate-metadata | promote | NODES\buffett-delegation-model.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\buffett-delegation-model.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.694749+05:30 | migrate-metadata | promote | NODES\buffett-education-and-graham-influence.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\buffett-education-and-graham-influence.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.701193+05:30 | migrate-metadata | promote | NODES\buffett-foundation.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\buffett-foundation.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.709527+05:30 | migrate-metadata | promote | NODES\buffett-frugal-lifestyle.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\buffett-frugal-lifestyle.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.715040+05:30 | migrate-metadata | promote | NODES\buffett-reading-habit.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\buffett-reading-habit.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.719817+05:30 | migrate-metadata | promote | NODES\building-resilience-and-grit.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\building-resilience-and-grit.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.727953+05:30 | migrate-metadata | promote | NODES\bypass-ask-permissions-mode.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\bypass-ask-permissions-mode.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.735655+05:30 | migrate-metadata | promote | NODES\capital-allocation.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\capital-allocation.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.741545+05:30 | migrate-metadata | promote | NODES\capital-intensity.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\capital-intensity.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.748540+05:30 | migrate-metadata | promote | NODES\cardinal-rule-of-behavior-change.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\cardinal-rule-of-behavior-change.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.756342+05:30 | migrate-metadata | promote | NODES\cash-register-automation.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\cash-register-automation.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.761314+05:30 | migrate-metadata | promote | NODES\cesare-borgia.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\cesare-borgia.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.769159+05:30 | migrate-metadata | promote | NODES\charlie-munger-influence-on-buffett.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\charlie-munger-influence-on-buffett.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.776737+05:30 | migrate-metadata | promote | NODES\cigar-butt-investing.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\cigar-butt-investing.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.784287+05:30 | migrate-metadata | promote | NODES\circle-of-competence.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\circle-of-competence.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.792888+05:30 | migrate-metadata | promote | NODES\claude-second-brain-levels.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\claude-second-brain-levels.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.798667+05:30 | migrate-metadata | promote | NODES\clayton-homes-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\clayton-homes-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.805560+05:30 | migrate-metadata | promote | NODES\coca-cola-investment-case-study.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\coca-cola-investment-case-study.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.813674+05:30 | migrate-metadata | promote | NODES\commitment-consistency-bias.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\commitment-consistency-bias.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.822680+05:30 | migrate-metadata | promote | NODES\commitment-devices.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\commitment-devices.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.831827+05:30 | migrate-metadata | promote | NODES\compounding-interest.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\compounding-interest.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.839265+05:30 | migrate-metadata | promote | NODES\con-artist-yellow-kid-weil.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\con-artist-yellow-kid-weil.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.848383+05:30 | migrate-metadata | promote | NODES\contrast-effect-bias.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\contrast-effect-bias.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.856260+05:30 | migrate-metadata | promote | NODES\court-power.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\court-power.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.863256+05:30 | migrate-metadata | promote | NODES\dairy-queen-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\dairy-queen-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.868396+05:30 | migrate-metadata | promote | NODES\dealing-with-failure-and-bouncing-back.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\dealing-with-failure-and-bouncing-back.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.875556+05:30 | migrate-metadata | promote | NODES\debt-aversion-principle.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\debt-aversion-principle.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.881268+05:30 | migrate-metadata | promote | NODES\decisive-moments.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\decisive-moments.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.886928+05:30 | migrate-metadata | promote | NODES\delayed-return-environment.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\delayed-return-environment.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.892332+05:30 | migrate-metadata | promote | NODES\delete-before-optimize.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\delete-before-optimize.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.899583+05:30 | migrate-metadata | promote | NODES\delete-then-optimize-loop.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\delete-then-optimize-loop.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.907030+05:30 | migrate-metadata | promote | NODES\dempster-mill-investment.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\dempster-mill-investment.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.910993+05:30 | migrate-metadata | promote | NODES\developing-mental-toughness.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\developing-mental-toughness.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.919286+05:30 | migrate-metadata | promote | NODES\dexter-shoe-investment-mistake.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\dexter-shoe-investment-mistake.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.926241+05:30 | migrate-metadata | promote | NODES\diderot-effect.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\diderot-effect.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.933229+05:30 | migrate-metadata | promote | NODES\disliking-hating-tendency.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\disliking-hating-tendency.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.940991+05:30 | migrate-metadata | promote | NODES\dopamine-driven-feedback-loop.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\dopamine-driven-feedback-loop.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.950058+05:30 | migrate-metadata | promote | NODES\economic-moat.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\economic-moat.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.958274+05:30 | migrate-metadata | promote | NODES\elon-musk-childhood.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\elon-musk-childhood.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.965452+05:30 | migrate-metadata | promote | NODES\elon-musk-education.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\elon-musk-education.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.973231+05:30 | migrate-metadata | promote | NODES\elon-musk-hiring-philosophy.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\elon-musk-hiring-philosophy.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.980862+05:30 | migrate-metadata | promote | NODES\elon-musk-neuralink.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\elon-musk-neuralink.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.988844+05:30 | migrate-metadata | promote | NODES\elon-musk-spacex-founding.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\elon-musk-spacex-founding.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:28.994481+05:30 | migrate-metadata | promote | NODES\elon-musk-starlink.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\elon-musk-starlink.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.002725+05:30 | migrate-metadata | promote | NODES\elon-musk-tesla-founding.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\elon-musk-tesla-founding.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.117568+05:30 | migrate-metadata | promote | NODES\elon-musk-the-boring-company.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\elon-musk-the-boring-company.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.166277+05:30 | migrate-metadata | promote | NODES\elon-musk-xai.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\elon-musk-xai.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.213079+05:30 | migrate-metadata | promote | NODES\elon-musk-xcom-paypal.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\elon-musk-xcom-paypal.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.260617+05:30 | migrate-metadata | promote | NODES\elon-musk-zip2.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\elon-musk-zip2.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.264330+05:30 | migrate-metadata | promote | NODES\emotional-healing-and-moving-forward.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\emotional-healing-and-moving-forward.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.269210+05:30 | migrate-metadata | promote | NODES\emotional-strength.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\emotional-strength.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.279067+05:30 | migrate-metadata | promote | NODES\environment-design.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\environment-design.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.304109+05:30 | migrate-metadata | promote | NODES\environment-priming.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\environment-priming.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.314295+05:30 | migrate-metadata | promote | NODES\estate-tax-support.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\estate-tax-support.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.322392+05:30 | migrate-metadata | promote | NODES\external-code-review-guardrails.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\external-code-review-guardrails.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.330849+05:30 | migrate-metadata | promote | NODES\failure-is-innovation-required.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\failure-is-innovation-required.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.339244+05:30 | migrate-metadata | promote | NODES\fermi-estimation.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\fermi-estimation.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.347942+05:30 | migrate-metadata | promote | NODES\fewshot-vs-zeroshot-prompting.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\fewshot-vs-zeroshot-prompting.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.356878+05:30 | migrate-metadata | promote | NODES\finally-agent-loops-clearly-explained-cheatsheet.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\finally-agent-loops-clearly-explained-cheatsheet.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.362586+05:30 | migrate-metadata | promote | NODES\finding-your-inner-strength.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\finding-your-inner-strength.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.369764+05:30 | migrate-metadata | promote | NODES\first-principles-build-rule.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\first-principles-build-rule.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.378696+05:30 | migrate-metadata | promote | NODES\first-principles-prompting.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\first-principles-prompting.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.386304+05:30 | migrate-metadata | promote | NODES\first-principles-thinking.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\first-principles-thinking.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.394798+05:30 | migrate-metadata | promote | NODES\five-twenty-five-rule.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\five-twenty-five-rule.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.403403+05:30 | migrate-metadata | promote | NODES\flightsafety-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\flightsafety-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.410629+05:30 | migrate-metadata | promote | NODES\fruit-of-the-loom-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\fruit-of-the-loom-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.418165+05:30 | migrate-metadata | promote | NODES\geeks-bearing-formulas.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\geeks-bearing-formulas.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.427284+05:30 | migrate-metadata | promote | NODES\geico-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\geico-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.433955+05:30 | migrate-metadata | promote | NODES\gen-re-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\gen-re-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.441017+05:30 | migrate-metadata | promote | NODES\genetics-and-environment.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\genetics-and-environment.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.448721+05:30 | migrate-metadata | promote | NODES\gillette-investment.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\gillette-investment.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.455958+05:30 | migrate-metadata | promote | NODES\giving-pledge.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\giving-pledge.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.465086+05:30 | migrate-metadata | promote | NODES\goldilocks-rule.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\goldilocks-rule.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.474283+05:30 | migrate-metadata | promote | NODES\greg-abel-successor.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\greg-abel-successor.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.479253+05:30 | migrate-metadata | promote | NODES\growth-mindset.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\growth-mindset.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.487937+05:30 | migrate-metadata | promote | NODES\habit-contracts.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\habit-contracts.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.497681+05:30 | migrate-metadata | promote | NODES\habit-loop.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\habit-loop.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.505309+05:30 | migrate-metadata | promote | NODES\habit-stacking.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\habit-stacking.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.514625+05:30 | migrate-metadata | promote | NODES\habit-tracking.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\habit-tracking.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.523428+05:30 | migrate-metadata | promote | NODES\habits-plus-deliberate-practice.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\habits-plus-deliberate-practice.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.532635+05:30 | migrate-metadata | promote | NODES\habits-scorecard.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\habits-scorecard.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.538739+05:30 | migrate-metadata | promote | NODES\haile-selassie-court.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\haile-selassie-court.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.547285+05:30 | migrate-metadata | promote | NODES\hebbs-law.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\hebbs-law.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.555275+05:30 | migrate-metadata | promote | NODES\honesty-expensive-gift.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\honesty-expensive-gift.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.564858+05:30 | migrate-metadata | promote | NODES\howard-buffett-influence.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\howard-buffett-influence.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.573320+05:30 | migrate-metadata | promote | NODES\hyperbolic-discounting.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\hyperbolic-discounting.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.583825+05:30 | migrate-metadata | promote | NODES\identity-based-habits.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\identity-based-habits.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.591739+05:30 | migrate-metadata | promote | NODES\idiot-index.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\idiot-index.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.598341+05:30 | migrate-metadata | promote | NODES\immediate-return-environment.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\immediate-return-environment.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.605606+05:30 | migrate-metadata | promote | NODES\implementation-intentions.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\implementation-intentions.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.612646+05:30 | migrate-metadata | promote | NODES\intrinsic-value.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\intrinsic-value.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.621004+05:30 | migrate-metadata | promote | NODES\inversion-mental-model.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\inversion-mental-model.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.629750+05:30 | migrate-metadata | promote | NODES\james-clear-injury-recovery.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\james-clear-injury-recovery.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.636930+05:30 | migrate-metadata | promote | NODES\jerry-uelsmann-photography.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\jerry-uelsmann-photography.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.644157+05:30 | migrate-metadata | promote | NODES\law-01-never-outshine-the-master.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-01-never-outshine-the-master.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.651484+05:30 | migrate-metadata | promote | NODES\law-02-never-trust-friends-use-enemies.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-02-never-trust-friends-use-enemies.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.660319+05:30 | migrate-metadata | promote | NODES\law-03-conceal-your-intentions.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-03-conceal-your-intentions.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.668963+05:30 | migrate-metadata | promote | NODES\law-04-say-less-than-necessary.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-04-say-less-than-necessary.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.677366+05:30 | migrate-metadata | promote | NODES\law-05-guard-your-reputation.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-05-guard-your-reputation.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.686538+05:30 | migrate-metadata | promote | NODES\law-06-court-attention.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-06-court-attention.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.695833+05:30 | migrate-metadata | promote | NODES\law-07-get-others-to-do-the-work.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-07-get-others-to-do-the-work.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.703022+05:30 | migrate-metadata | promote | NODES\law-08-make-others-come-to-you.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-08-make-others-come-to-you.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.711183+05:30 | migrate-metadata | promote | NODES\law-09-win-through-actions.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-09-win-through-actions.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.720550+05:30 | migrate-metadata | promote | NODES\law-10-avoid-the-unhappy-and-unlucky.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-10-avoid-the-unhappy-and-unlucky.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.729213+05:30 | migrate-metadata | promote | NODES\law-11-keep-people-dependent.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-11-keep-people-dependent.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.736007+05:30 | migrate-metadata | promote | NODES\law-12-selective-honesty-to-disarm.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-12-selective-honesty-to-disarm.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.741891+05:30 | migrate-metadata | promote | NODES\law-13-appeal-to-self-interest.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-13-appeal-to-self-interest.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.750001+05:30 | migrate-metadata | promote | NODES\law-14-pose-as-friend-work-as-spy.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-14-pose-as-friend-work-as-spy.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.757109+05:30 | migrate-metadata | promote | NODES\law-15-crush-your-enemy-totally.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-15-crush-your-enemy-totally.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.765767+05:30 | migrate-metadata | promote | NODES\law-16-use-absence.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-16-use-absence.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.774077+05:30 | migrate-metadata | promote | NODES\law-17-cultivate-unpredictability.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-17-cultivate-unpredictability.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.783075+05:30 | migrate-metadata | promote | NODES\law-18-isolation-is-dangerous.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-18-isolation-is-dangerous.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.790204+05:30 | migrate-metadata | promote | NODES\law-19-know-who-youre-dealing-with.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-19-know-who-youre-dealing-with.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.799221+05:30 | migrate-metadata | promote | NODES\law-20-do-not-commit-to-anyone.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-20-do-not-commit-to-anyone.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.806076+05:30 | migrate-metadata | promote | NODES\law-21-play-a-sucker.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-21-play-a-sucker.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.814593+05:30 | migrate-metadata | promote | NODES\law-22-surrender-tactic.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-22-surrender-tactic.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.823325+05:30 | migrate-metadata | promote | NODES\law-23-concentrate-your-forces.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-23-concentrate-your-forces.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.830742+05:30 | migrate-metadata | promote | NODES\law-24-play-the-perfect-courtier.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-24-play-the-perfect-courtier.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.856572+05:30 | migrate-metadata | promote | NODES\law-25-recreate-yourself.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-25-recreate-yourself.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.862824+05:30 | migrate-metadata | promote | NODES\law-26-keep-your-hands-clean.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-26-keep-your-hands-clean.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.871904+05:30 | migrate-metadata | promote | NODES\law-27-create-a-cultlike-following.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-27-create-a-cultlike-following.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.882454+05:30 | migrate-metadata | promote | NODES\law-28-enter-action-with-boldness.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-28-enter-action-with-boldness.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.889972+05:30 | migrate-metadata | promote | NODES\law-29-plan-to-the-end.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-29-plan-to-the-end.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.899014+05:30 | migrate-metadata | promote | NODES\law-30-make-accomplishments-seem-effortless.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-30-make-accomplishments-seem-effortless.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.906900+05:30 | migrate-metadata | promote | NODES\law-31-control-the-options.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-31-control-the-options.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.915582+05:30 | migrate-metadata | promote | NODES\law-32-play-to-peoples-fantasies.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-32-play-to-peoples-fantasies.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.924231+05:30 | migrate-metadata | promote | NODES\law-33-discover-each-mans-thumbscrew.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-33-discover-each-mans-thumbscrew.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.932177+05:30 | migrate-metadata | promote | NODES\law-34-be-royal.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-34-be-royal.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.941000+05:30 | migrate-metadata | promote | NODES\law-35-master-the-art-of-timing.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-35-master-the-art-of-timing.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.948229+05:30 | migrate-metadata | promote | NODES\law-36-disdain-things-you-cannot-have.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-36-disdain-things-you-cannot-have.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.956760+05:30 | migrate-metadata | promote | NODES\law-37-create-compelling-spectacles.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-37-create-compelling-spectacles.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.965873+05:30 | migrate-metadata | promote | NODES\law-38-think-as-you-like-behave-like-others.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-38-think-as-you-like-behave-like-others.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.975255+05:30 | migrate-metadata | promote | NODES\law-39-stir-up-waters.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-39-stir-up-waters.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.984160+05:30 | migrate-metadata | promote | NODES\law-40-despise-the-free-lunch.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-40-despise-the-free-lunch.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.991597+05:30 | migrate-metadata | promote | NODES\law-41-avoid-stepping-into-great-mans-shoes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-41-avoid-stepping-into-great-mans-shoes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:29.998364+05:30 | migrate-metadata | promote | NODES\law-42-strike-the-shepherd.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-42-strike-the-shepherd.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.004990+05:30 | migrate-metadata | promote | NODES\law-43-work-on-hearts-and-minds.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-43-work-on-hearts-and-minds.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.011686+05:30 | migrate-metadata | promote | NODES\law-44-mirror-effect.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-44-mirror-effect.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.018063+05:30 | migrate-metadata | promote | NODES\law-45-preach-change-reform-slowly.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-45-preach-change-reform-slowly.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.025018+05:30 | migrate-metadata | promote | NODES\law-46-never-appear-too-perfect.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-46-never-appear-too-perfect.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.033023+05:30 | migrate-metadata | promote | NODES\law-47-learn-when-to-stop.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-47-learn-when-to-stop.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.039884+05:30 | migrate-metadata | promote | NODES\law-48-assume-formlessness.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-48-assume-formlessness.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.048213+05:30 | migrate-metadata | promote | NODES\law-of-least-effort.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\law-of-least-effort.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.056377+05:30 | migrate-metadata | promote | NODES\learn-99-percent-claude-and-codex-in-25-mins-cheatsheet.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\learn-99-percent-claude-and-codex-in-25-mins-cheatsheet.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.063821+05:30 | migrate-metadata | promote | NODES\liking-loving-tendency.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\liking-loving-tendency.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.071260+05:30 | migrate-metadata | promote | NODES\local-filesystem-agent-advantage.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\local-filesystem-agent-advantage.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.080620+05:30 | migrate-metadata | promote | NODES\lollapalooza-effect.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\lollapalooza-effect.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.088691+05:30 | migrate-metadata | promote | NODES\long-term-time-horizon.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\long-term-time-horizon.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.097921+05:30 | migrate-metadata | promote | NODES\loop-engineering.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\loop-engineering.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.106439+05:30 | migrate-metadata | promote | NODES\loop-verification-importance.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\loop-verification-importance.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.114002+05:30 | migrate-metadata | promote | NODES\louis-xiv-versailles.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\louis-xiv-versailles.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.122806+05:30 | migrate-metadata | promote | NODES\lubrizol-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\lubrizol-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.129830+05:30 | migrate-metadata | promote | NODES\machiavelli-and-the-prince.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\machiavelli-and-the-prince.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.138149+05:30 | migrate-metadata | promote | NODES\make-it-invisible.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\make-it-invisible.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.147198+05:30 | migrate-metadata | promote | NODES\make-money-while-you-sleep.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\make-money-while-you-sleep.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.154450+05:30 | migrate-metadata | promote | NODES\mao-zedong-formlessness.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\mao-zedong-formlessness.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.163891+05:30 | migrate-metadata | promote | NODES\margin-of-safety.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\margin-of-safety.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.170914+05:30 | migrate-metadata | promote | NODES\marginal-gains-british-cycling.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\marginal-gains-british-cycling.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.179748+05:30 | migrate-metadata | promote | NODES\marmon-group-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\marmon-group-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.186487+05:30 | migrate-metadata | promote | NODES\moral-nobility-as-tactical-vulnerability.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\moral-nobility-as-tactical-vulnerability.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.192981+05:30 | migrate-metadata | promote | NODES\motivation-and-inspiration.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\motivation-and-inspiration.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.202286+05:30 | migrate-metadata | promote | NODES\motivation-ritual.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\motivation-ritual.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.210963+05:30 | migrate-metadata | promote | NODES\musk-ai-risk-philosophy.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\musk-ai-risk-philosophy.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.218642+05:30 | migrate-metadata | promote | NODES\musk-communication-pattern.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\musk-communication-pattern.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.226347+05:30 | migrate-metadata | promote | NODES\musk-mars-colonization-vision.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\musk-mars-colonization-vision.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.234364+05:30 | migrate-metadata | promote | NODES\musk-on-failure-quote.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\musk-on-failure-quote.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.242571+05:30 | migrate-metadata | promote | NODES\musk-on-first-principles-quote.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\musk-on-first-principles-quote.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.249878+05:30 | migrate-metadata | promote | NODES\musk-time-blocking-habit.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\musk-time-blocking-habit.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.257902+05:30 | migrate-metadata | promote | NODES\musk-working-hours-expectation.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\musk-working-hours-expectation.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.266261+05:30 | migrate-metadata | promote | NODES\national-indemnity-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\national-indemnity-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.277051+05:30 | migrate-metadata | promote | NODES\netjets-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\netjets-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.283712+05:30 | migrate-metadata | promote | NODES\nicolas-fouquet-downfall.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\nicolas-fouquet-downfall.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.290117+05:30 | migrate-metadata | promote | NODES\nols-tax-shield.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\nols-tax-shield.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.299433+05:30 | migrate-metadata | promote | NODES\one-percent-better-every-day.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\one-percent-better-every-day.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.309079+05:30 | migrate-metadata | promote | NODES\operating-leverage.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\operating-leverage.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.371753+05:30 | migrate-metadata | promote | NODES\opportunity-cost-heuristic.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\opportunity-cost-heuristic.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.496043+05:30 | migrate-metadata | promote | NODES\overcoming-obstacles-and-adversity.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\overcoming-obstacles-and-adversity.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.503718+05:30 | migrate-metadata | promote | NODES\owner-earnings.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\owner-earnings.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.510638+05:30 | migrate-metadata | promote | NODES\pampered-chef-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\pampered-chef-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.518889+05:30 | migrate-metadata | promote | NODES\pavlovian-association.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\pavlovian-association.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.524848+05:30 | migrate-metadata | promote | NODES\personal-growth-and-development.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\personal-growth-and-development.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.554728+05:30 | migrate-metadata | promote | NODES\phelps-and-el-guerrouj.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\phelps-and-el-guerrouj.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.562941+05:30 | migrate-metadata | promote | NODES\phil-carret-influence.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\phil-carret-influence.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.574340+05:30 | migrate-metadata | promote | NODES\physics-constraint-test.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\physics-constraint-test.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.582792+05:30 | migrate-metadata | promote | NODES\pilot-flying-j-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\pilot-flying-j-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.595919+05:30 | migrate-metadata | promote | NODES\pkm-development-phases.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\pkm-development-phases.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.604392+05:30 | migrate-metadata | promote | NODES\plateau-of-latent-potential.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\plateau-of-latent-potential.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.613746+05:30 | migrate-metadata | promote | NODES\pointing-and-calling.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\pointing-and-calling.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.622397+05:30 | migrate-metadata | promote | NODES\polgar-sisters-chess.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\polgar-sisters-chess.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.632205+05:30 | migrate-metadata | promote | NODES\power-abhors-a-vacuum.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\power-abhors-a-vacuum.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.639815+05:30 | migrate-metadata | promote | NODES\power-as-a-social-game.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\power-as-a-social-game.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.645844+05:30 | migrate-metadata | promote | NODES\powerful-mindset-shifts.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\powerful-mindset-shifts.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.655155+05:30 | migrate-metadata | promote | NODES\precision-castparts-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\precision-castparts-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.662856+05:30 | migrate-metadata | promote | NODES\premacks-principle.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\premacks-principle.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.669269+05:30 | migrate-metadata | promote | NODES\price-vs-value.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\price-vs-value.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.679127+05:30 | migrate-metadata | promote | NODES\prompt-combination-codes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\prompt-combination-codes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.688434+05:30 | migrate-metadata | promote | NODES\prompt-honesty-codes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\prompt-honesty-codes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.697431+05:30 | migrate-metadata | promote | NODES\prompt-learning-codes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\prompt-learning-codes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.706087+05:30 | migrate-metadata | promote | NODES\prompt-meta-announce.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\prompt-meta-announce.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.714665+05:30 | migrate-metadata | promote | NODES\prompt-output-control-codes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\prompt-output-control-codes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.727114+05:30 | migrate-metadata | promote | NODES\prompt-reasoning-codes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\prompt-reasoning-codes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.735974+05:30 | migrate-metadata | promote | NODES\prompt-simplification-codes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\prompt-simplification-codes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.744660+05:30 | migrate-metadata | promote | NODES\prompt-strategy-codes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\prompt-strategy-codes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.753729+05:30 | migrate-metadata | promote | NODES\prompt-thinking-codes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\prompt-thinking-codes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.762093+05:30 | migrate-metadata | promote | NODES\prompt-voice-format-codes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\prompt-voice-format-codes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.770377+05:30 | migrate-metadata | promote | NODES\prototype-then-iterate.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\prototype-then-iterate.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.778197+05:30 | migrate-metadata | promote | NODES\queen-elizabeth-i-power-image.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\queen-elizabeth-i-power-image.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.786422+05:30 | migrate-metadata | promote | NODES\question-every-requirement.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\question-every-requirement.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.793205+05:30 | migrate-metadata | promote | NODES\quiet-thinking-habit.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\quiet-thinking-habit.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.800210+05:30 | migrate-metadata | promote | NODES\quote-genes-predispose.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\quote-genes-predispose.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.806638+05:30 | migrate-metadata | promote | NODES\quote-james-clear-clarity.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\quote-james-clear-clarity.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.813448+05:30 | migrate-metadata | promote | NODES\quote-what-is-rewarded-is-repeated.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\quote-what-is-rewarded-is-repeated.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.820639+05:30 | migrate-metadata | promote | NODES\race-prompt-framework.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\race-prompt-framework.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.828272+05:30 | migrate-metadata | promote | NODES\reasoning-by-analogy.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\reasoning-by-analogy.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.836358+05:30 | migrate-metadata | promote | NODES\reciprocity-tendency.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\reciprocity-tendency.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.842053+05:30 | migrate-metadata | promote | NODES\reclaiming-your-personal-power.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\reclaiming-your-personal-power.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.851568+05:30 | migrate-metadata | promote | NODES\red-team-technique.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\red-team-technique.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.858855+05:30 | migrate-metadata | promote | NODES\reflection-and-review.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\reflection-and-review.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.867227+05:30 | migrate-metadata | promote | NODES\reframing-hard-habits.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\reframing-hard-habits.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.875466+05:30 | migrate-metadata | promote | NODES\regret-minimization-framework.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\regret-minimization-framework.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.882031+05:30 | migrate-metadata | promote | NODES\reinforcement.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\reinforcement.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.889605+05:30 | migrate-metadata | promote | NODES\reinvestment-moat.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\reinvestment-moat.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.894591+05:30 | migrate-metadata | promote | NODES\relationships.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\relationships.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.901486+05:30 | migrate-metadata | promote | NODES\reputation-protection-heuristic.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\reputation-protection-heuristic.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.907671+05:30 | migrate-metadata | promote | NODES\reputation-twenty-years-to-build.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\reputation-twenty-years-to-build.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.915032+05:30 | migrate-metadata | promote | NODES\return-on-equity.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\return-on-equity.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.921579+05:30 | migrate-metadata | promote | NODES\risk-free-rate-hurdle.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\risk-free-rate-hurdle.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.929403+05:30 | migrate-metadata | promote | NODES\roger-fisher-nuclear-button.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\roger-fisher-nuclear-button.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.938331+05:30 | migrate-metadata | promote | NODES\rolls-royce-subway-analogy.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\rolls-royce-subway-analogy.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.945528+05:30 | migrate-metadata | promote | NODES\rule-one-never-lose-money.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\rule-one-never-lose-money.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.953872+05:30 | migrate-metadata | promote | NODES\safeguard-soap-handwashing-study.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\safeguard-soap-handwashing-study.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.958715+05:30 | migrate-metadata | promote | NODES\salomon-brothers-intervention.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\salomon-brothers-intervention.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.966056+05:30 | migrate-metadata | promote | NODES\sanborn-map-investment.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\sanborn-map-investment.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.975457+05:30 | migrate-metadata | promote | NODES\scarcity-bias-investing.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\scarcity-bias-investing.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.984038+05:30 | migrate-metadata | promote | NODES\sees-candies-investment-case-study.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\sees-candies-investment-case-study.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.988963+05:30 | migrate-metadata | promote | NODES\self-fixing-code-loops.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\self-fixing-code-loops.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:30.994105+05:30 | migrate-metadata | promote | NODES\self-improvement-strategies.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, type, status, domain, source_type, created, updated, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\self-improvement-strategies.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.002152+05:30 | migrate-metadata | promote | NODES\shaw-industries-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\shaw-industries-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.008469+05:30 | migrate-metadata | promote | NODES\skinner-box-variable-rewards.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\skinner-box-variable-rewards.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.015330+05:30 | migrate-metadata | promote | NODES\social-norms-and-habits.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\social-norms-and-habits.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.021030+05:30 | migrate-metadata | promote | NODES\social-proof-bias.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\social-proof-bias.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.026645+05:30 | migrate-metadata | promote | NODES\socratic-prompting.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\socratic-prompting.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.033488+05:30 | migrate-metadata | promote | NODES\solomon-asch-conformity.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\solomon-asch-conformity.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.039554+05:30 | migrate-metadata | promote | NODES\sorites-paradox.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\sorites-paradox.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.044206+05:30 | migrate-metadata | promote | NODES\spacex-falcon-1-failures.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\spacex-falcon-1-failures.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.050090+05:30 | migrate-metadata | promote | NODES\special-situations.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\special-situations.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.058483+05:30 | migrate-metadata | promote | NODES\speed-of-iteration-principle.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\speed-of-iteration-principle.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.065358+05:30 | migrate-metadata | promote | NODES\sprezzatura.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\sprezzatura.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.074167+05:30 | migrate-metadata | promote | NODES\steelman-technique.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\steelman-technique.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.080848+05:30 | migrate-metadata | promote | NODES\strategic-deception.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\strategic-deception.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.089569+05:30 | migrate-metadata | promote | NODES\supernormal-stimulus.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\supernormal-stimulus.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.096306+05:30 | migrate-metadata | promote | NODES\susan-buffett-influence.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\susan-buffett-influence.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.105449+05:30 | migrate-metadata | promote | NODES\systems-vs-goals.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\systems-vs-goals.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.113524+05:30 | migrate-metadata | promote | NODES\talent-density-principle.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\talent-density-principle.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.121286+05:30 | migrate-metadata | promote | NODES\talleyrand-survival.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\talleyrand-survival.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.128295+05:30 | migrate-metadata | promote | NODES\ted-weschler-successor.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\ted-weschler-successor.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.136214+05:30 | migrate-metadata | promote | NODES\temptation-bundling.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\temptation-bundling.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.144399+05:30 | migrate-metadata | promote | NODES\tesla-production-hell.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\tesla-production-hell.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.151795+05:30 | migrate-metadata | promote | NODES\the-courtier-archetype.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\the-courtier-archetype.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.158476+05:30 | migrate-metadata | promote | NODES\the-futility-of-gratitude.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\the-futility-of-gratitude.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.165573+05:30 | migrate-metadata | promote | NODES\the-illusion-of-equality.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\the-illusion-of-equality.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.174130+05:30 | migrate-metadata | promote | NODES\the-law-of-reversal.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\the-law-of-reversal.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.181199+05:30 | migrate-metadata | promote | NODES\the-myth-of-sincerity.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\the-myth-of-sincerity.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.187677+05:30 | migrate-metadata | promote | NODES\the-reality-of-human-envy.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\the-reality-of-human-envy.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.194135+05:30 | migrate-metadata | promote | NODES\tide-goes-out-naked-swimming.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\tide-goes-out-naked-swimming.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.200905+05:30 | migrate-metadata | promote | NODES\todd-combs-successor.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\todd-combs-successor.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.208185+05:30 | migrate-metadata | promote | NODES\tom-murphy-influence.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\tom-murphy-influence.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.215455+05:30 | migrate-metadata | promote | NODES\trent-dyrsmid-paperclips.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\trent-dyrsmid-paperclips.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.223150+05:30 | migrate-metadata | promote | NODES\twenty-punches-card-rule.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\twenty-punches-card-rule.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.232439+05:30 | migrate-metadata | promote | NODES\two-minute-rule.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\two-minute-rule.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.239242+05:30 | migrate-metadata | promote | NODES\two-slot-punch-card.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\two-slot-punch-card.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.247389+05:30 | migrate-metadata | promote | NODES\two-step-identity-change.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\two-step-identity-change.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.256013+05:30 | migrate-metadata | promote | NODES\us-air-investment-mistake.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\us-air-investment-mistake.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.264164+05:30 | migrate-metadata | promote | NODES\value-investing.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\value-investing.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.271465+05:30 | migrate-metadata | promote | NODES\vertical-integration-calculus.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, domain, source_type, review, confidence, version, aliases, owner_moc, sources, related) | frontmatter-schema.md | NODES\vertical-integration-calculus.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.280164+05:30 | migrate-metadata | promote | NODES\victor-hugo-closet-lock.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\victor-hugo-closet-lock.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.287364+05:30 | migrate-metadata | promote | NODES\vietnam-veterans-heroin-study.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\vietnam-veterans-heroin-study.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.293872+05:30 | migrate-metadata | promote | NODES\walter-schloss-contrast.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\walter-schloss-contrast.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.302680+05:30 | migrate-metadata | promote | NODES\warren-buffett-biography.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\warren-buffett-biography.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.311074+05:30 | migrate-metadata | promote | NODES\warren-buffett-quotes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type (upgraded concept), status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\warren-buffett-quotes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.320114+05:30 | migrate-metadata | promote | NODES\washington-post-investment.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\washington-post-investment.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.327976+05:30 | migrate-metadata | promote | NODES\wesco-financial-acquisition.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\wesco-financial-acquisition.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:31.335286+05:30 | migrate-metadata | promote | NODES\you-do-not-rise-to-the-level-of-your-goals.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, status, domain, source_type, updated, review, confidence, version, aliases, owner_moc, sources) | frontmatter-schema.md | NODES\you-do-not-rise-to-the-level-of-your-goals.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T12:59:48.346895+05:30 | semantic-linker | link | NODES\algorithm-design-sequence.md | Applied 1 HIGH-priority link(s): depends_on | linking-rules.md | NODES\algorithm-design-sequence.md | 95 | applied | revert related links and related frontmatter entries | none |
| 2026-07-18T12:59:49.540886+05:30 | semantic-linker | link | NODES\books-cheatsheet.md | Applied 8 HIGH-priority link(s): depends_on | linking-rules.md | NODES\books-cheatsheet.md | 95 | applied | revert related links and related frontmatter entries | none |
| 2026-07-18T12:59:53.297059+05:30 | semantic-linker | link | NODES\failure-is-innovation-required.md | Applied 1 HIGH-priority link(s): depends_on | linking-rules.md | NODES\failure-is-innovation-required.md | 95 | applied | revert related links and related frontmatter entries | none |
| 2026-07-18T12:59:53.478249+05:30 | semantic-linker | link | NODES\first-principles-build-rule.md | Applied 1 HIGH-priority link(s): depends_on | linking-rules.md | NODES\first-principles-build-rule.md | 95 | applied | revert related links and related frontmatter entries | none |
| 2026-07-18T12:59:58.749294+05:30 | semantic-linker | link | NODES\long-term-time-horizon.md | Applied 1 HIGH-priority link(s): depends_on | linking-rules.md | NODES\long-term-time-horizon.md | 95 | applied | revert related links and related frontmatter entries | none |
| 2026-07-18T13:00:41.359944+05:30 | migrate-metadata | promote | NODES\algorithm-design-sequence.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type, status, domain, source_type, created, updated, review, confidence, version, aliases, tags, owner_moc, sources, related) | frontmatter-schema.md | NODES\algorithm-design-sequence.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T13:00:41.894776+05:30 | migrate-metadata | promote | NODES\books-cheatsheet.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type, status, domain, source_type, created, updated, review, confidence, version, aliases, tags, owner_moc, sources, related) | frontmatter-schema.md | NODES\books-cheatsheet.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T13:00:42.741989+05:30 | migrate-metadata | promote | NODES\failure-is-innovation-required.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type, status, domain, source_type, created, updated, review, confidence, version, aliases, tags, owner_moc, sources, related) | frontmatter-schema.md | NODES\failure-is-innovation-required.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T13:00:42.839838+05:30 | migrate-metadata | promote | NODES\first-principles-build-rule.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type, status, domain, source_type, created, updated, review, confidence, version, aliases, tags, owner_moc, sources, related) | frontmatter-schema.md | NODES\first-principles-build-rule.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T13:00:44.207867+05:30 | migrate-metadata | promote | NODES\long-term-time-horizon.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, id, title, type, status, domain, source_type, created, updated, review, confidence, version, aliases, tags, owner_moc, sources, related) | frontmatter-schema.md | NODES\long-term-time-horizon.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T14:08:00+05:30 | antigravity | update | VAULT-STRUCTURE.md | Add authority override disclaimer to VAULT-STRUCTURE.md to resolve dual-constitution conflict | GEMINI.md §9 (Rule Versioning) | VAULT-STRUCTURE.md | 100 | applied | revert changes via git checkout | none |
| 2026-07-18T14:09:00+05:30 | antigravity | observe | VAULT-STRUCTURE.md | Flagged tooling dependency (.venv/) inside vault root in directory layout | GEMINI.md §11; VAULT-STRUCTURE.md | VAULT-STRUCTURE.md | 100 | logged-observation | revert changes via git checkout | none |
| 2026-07-18T14:10:00+05:30 | antigravity | update | GEMINI.md | Ordered AI Commandments under Section 1 priority hierarchy | GEMINI.md §8 (AI Commandments) | GEMINI.md | 100 | applied | revert changes via git checkout | none |
| 2026-07-18T14:11:00+05:30 | antigravity | update | GEMINI.md | Added open decision note for owner_moc reference type under note schema | GEMINI.md §5 (Note Identity) | GEMINI.md | 100 | applied | revert changes via git checkout | none |
| 2026-07-18T14:12:00+05:30 | antigravity | update | GEMINI.md | Implemented confidence calibration framework under Section 3 | GEMINI.md §3 (Decision Engine) | GEMINI.md | 100 | applied | revert changes via git checkout | none |
| 2026-07-18T14:28:00+05:30 | antigravity | update | VAULT-STRUCTURE.md, GEMINI.md, .antigravity/CLAUDE.md | Updated directory layout structure to include tests/ and all subfolders under .antigravity/ | GEMINI.md §2 (Vault Structure) | VAULT-STRUCTURE.md | 100 | applied | revert changes via git checkout | none |
| 2026-07-18T09:25:00Z | antigravity (architecture-improvement) | create+update | 8 new rule files; 4 updated rule files; 2 new JSON schemas; 1 updated JSON schema; 3 new templates; 4 new automation scripts; 2 updated automation scripts; 2 updated hooks; GEMINI.md v2.5.0; governance.md v1.2.0 | Architecture improvement: 10 scalability upgrades — (1) multi-level MOC hierarchy navigation-hierarchy.md; (2) 18-type semantic relationship system relations-schema.md; (3) permanent concept identity concept-identity.md; (4) 15-metric health dashboard health-metrics.md + health_dashboard.py; (5) 8-stage knowledge maturity model maturity-model.md; (6) knowledge decay management knowledge-decay.md + decay_scheduler.py; (7) decision context metadata decision-context.md; (8) idea incubation workflow incubation-rules.md; (9) relationship confidence in relations block; (10) graph analytics graph_analytics.py. All changes additive; backward compatible with schema_version 3; governed by user /goal request. | governance.md §12; all rule files updated with versioned change_reason | User /goal architecture improvement prompt | 100 | applied | All new files: delete new files. All updated files: revert via git diff. Existing notes unmodified. | none |

| 2026-07-18T19:17:43.096490+05:30 | antigravity-agent | create | 01_RAW\SOURCE\finally-agent-loops-clearly-explained.md | Archive source with schema_version 4 | governance.md | 01_RAW/CAPTURE/finally-agent-loops-clearly-explained.md | 100 | applied | git revert | none |
| 2026-07-18T19:17:43.100897+05:30 | antigravity-agent | archive | 01_RAW/CAPTURE/finally-agent-loops-clearly-explained.md | Moved to SOURCE | governance.md | 01_RAW/CAPTURE/finally-agent-loops-clearly-explained.md | 100 | applied | git revert | none |
| 2026-07-18T19:17:43.181525+05:30 | antigravity-agent | promote | NODES\loop-engineering.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:17:43.229699+05:30 | antigravity-agent | promote | NODES\agent-loop-mechanics.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:17:43.285870+05:30 | antigravity-agent | promote | NODES\loop-verification-importance.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:17:43.350265+05:30 | antigravity-agent | promote | NODES\agent-loop-architectures.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:17:43.435205+05:30 | antigravity-agent | promote | NODES\agent-loop-done-criteria.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:17:43.563099+05:30 | antigravity-agent | promote | NODES\finally-agent-loops-clearly-explained-cheatsheet.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:17:43.574698+05:30 | antigravity-agent | promote | 03_MOC\finally-agent-loops-clearly-explained-moc.md | Migrate MOC to schema_version 4 | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 100 | applied | git revert | none |
| 2026-07-18T19:18:24.244542+05:30 | antigravity-agent | create | 01_RAW\SOURCE\finally-agent-loops-clearly-explained.md | Archive source with schema_version 4 | governance.md | 01_RAW/CAPTURE/finally-agent-loops-clearly-explained.md | 100 | applied | git revert | none |
| 2026-07-18T19:18:24.265187+05:30 | antigravity-agent | promote | NODES\loop-engineering.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:18:24.290079+05:30 | antigravity-agent | promote | NODES\agent-loop-mechanics.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:18:24.312103+05:30 | antigravity-agent | promote | NODES\loop-verification-importance.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:18:24.337520+05:30 | antigravity-agent | promote | NODES\agent-loop-architectures.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:18:24.359619+05:30 | antigravity-agent | promote | NODES\agent-loop-done-criteria.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:18:24.387072+05:30 | antigravity-agent | promote | NODES\finally-agent-loops-clearly-explained-cheatsheet.md | Migrate to schema_version 4 and update source references | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 95 | applied | git revert | none |
| 2026-07-18T19:18:24.402367+05:30 | antigravity-agent | promote | 03_MOC\finally-agent-loops-clearly-explained-moc.md | Migrate MOC to schema_version 4 | governance.md | 01_RAW/SOURCE/finally-agent-loops-clearly-explained.md | 100 | applied | git revert | none |
| 2026-07-18T19:18:47.022714+05:30 | migrate-metadata | promote | NODES\agent-loop-architectures.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\agent-loop-architectures.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T19:18:47.029856+05:30 | migrate-metadata | promote | NODES\agent-loop-done-criteria.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\agent-loop-done-criteria.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T19:18:47.040949+05:30 | migrate-metadata | promote | NODES\agent-loop-mechanics.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\agent-loop-mechanics.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T19:18:47.391489+05:30 | migrate-metadata | promote | NODES\finally-agent-loops-clearly-explained-cheatsheet.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\finally-agent-loops-clearly-explained-cheatsheet.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T19:18:47.783668+05:30 | migrate-metadata | promote | NODES\loop-engineering.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\loop-engineering.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-18T19:18:47.794384+05:30 | migrate-metadata | promote | NODES\loop-verification-importance.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\loop-verification-importance.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T10:40:00+05:30 | antigravity-agent | create | 01_RAW/SOURCE/python-for-ai-beginner-course.md | Archive raw source | ingestion-rules.md | 01_RAW/CAPTURE/Python for AI - Full Beginner Course.md | 100 | applied | Move back to CAPTURE | none |
| 2026-07-19T10:41:00+05:30 | antigravity-agent | create | 02_NEW-KNOWLEDGE/python-for-ai-beginner-course.md | Create exhaustive study guide in learning status | maturity-model.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete study guide note | none |
| 2026-07-19T10:42:00+05:30 | antigravity-agent | promote | NOTES/python-for-ai-beginner-course.md | Promote synthesis note from NEW-KNOWLEDGE | maturity-model.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete synthesis note | none |
| 2026-07-19T10:43:00+05:30 | antigravity-agent | create | 03_MOC/python-for-ai-beginner-course-moc.md | Create video MOC for Python for AI Course | moc-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete MOC file | none |
| 2026-07-19T10:44:00+05:30 | antigravity-agent | create | NODES/python-for-ai-beginner-course-cheatsheet.md | Create cheatsheet for Python for AI Course | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete cheatsheet note | none |
| 2026-07-19T10:45:00+05:30 | antigravity-agent | create | NODES/python-programming-language.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete concept note | none |
| 2026-07-19T10:45:05+05:30 | antigravity-agent | create | NODES/vs-code-workspace.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete concept note | none |
| 2026-07-19T10:45:10+05:30 | antigravity-agent | create | NODES/python-virtual-environment.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete concept note | none |
| 2026-07-19T10:45:15+05:30 | antigravity-agent | create | NODES/python-package-installer.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete concept note | none |
| 2026-07-19T10:45:20+05:30 | antigravity-agent | create | NODES/interactive-python-jupyter.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete concept note | none |
| 2026-07-19T10:45:25+05:30 | antigravity-agent | create | NODES/python-variable-scope.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete concept note | none |
| 2026-07-19T10:45:30+05:30 | antigravity-agent | create | NODES/python-object-oriented-programming.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete concept note | none |
| 2026-07-19T10:45:35+05:30 | antigravity-agent | create | NODES/git-version-control-system.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete concept note | none |
| 2026-07-19T10:45:40+05:30 | antigravity-agent | create | NODES/environment-variables-python.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete concept note | none |
| 2026-07-19T10:45:45+05:30 | antigravity-agent | create | NODES/ruff-linter-formatter.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete concept note | none |
| 2026-07-19T10:45:50+05:30 | antigravity-agent | create | NODES/uv-package-manager.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/python-for-ai-beginner-course.md | 100 | applied | Delete concept note | none |
| 2026-07-19T17:32:00+05:30 | antigravity-agent | create | 01_RAW/SOURCE/Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md | Archive processed YouTube transcript | ingestion-rules.md | 01_RAW/CAPTURE/Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md | 100 | applied | Move back to CAPTURE | none |
| 2026-07-19T17:32:10+05:30 | antigravity-agent | create | 03_MOC/uncomfortable-truths-2-moc.md | Create video MOC for Uncomfortable Truths #2 | moc-schema.md | 01_RAW/SOURCE/Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md | 100 | applied | Delete MOC file | none |
| 2026-07-19T17:32:20+05:30 | antigravity-agent | create | NODES/uncomfortable-truths-2-cheatsheet.md | Create cheatsheet for Uncomfortable Truths #2 | node-schema.md | 01_RAW/SOURCE/Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md | 100 | applied | Delete cheatsheet note | none |
| 2026-07-19T17:32:30+05:30 | antigravity-agent | create | NODES/state-intervention-hunger-strikes.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md | 100 | applied | Delete concept note | none |
| 2026-07-19T17:32:35+05:30 | antigravity-agent | create | NODES/moral-sacrifice-social-protests.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md | 100 | applied | Delete concept note | none |
| 2026-07-19T17:32:40+05:30 | antigravity-agent | create | NODES/state-tactics-protest-containment.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md | 100 | applied | Delete concept note | none |
| 2026-07-19T17:32:45+05:30 | antigravity-agent | create | NODES/e20-fuel-policy-india.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md | 100 | applied | Delete concept note | none |
| 2026-07-19T17:32:50+05:30 | antigravity-agent | create | NODES/ethanol-blending-economic-inefficiency.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md | 100 | applied | Delete concept note | none |
| 2026-07-19T17:32:55+05:30 | antigravity-agent | create | NODES/citizen-exit-vs-voice.md | Create atomic concept note | node-schema.md | 01_RAW/SOURCE/Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md | 100 | applied | Delete concept note | none |

| 2026-07-19T17:32:20.378737+05:30 | migrate-metadata | promote | NODES\citizen-exit-vs-voice.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, related) | frontmatter-schema.md | NODES\citizen-exit-vs-voice.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:20.554369+05:30 | migrate-metadata | promote | NODES\e20-fuel-policy-india.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, related) | frontmatter-schema.md | NODES\e20-fuel-policy-india.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:20.712703+05:30 | migrate-metadata | promote | NODES\ethanol-blending-economic-inefficiency.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, related) | frontmatter-schema.md | NODES\ethanol-blending-economic-inefficiency.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:20.959381+05:30 | migrate-metadata | promote | NODES\hell-yes-or-no-filter.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\hell-yes-or-no-filter.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:21.099187+05:30 | migrate-metadata | promote | NODES\keep-moving-heuristic.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\keep-moving-heuristic.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:21.722039+05:30 | migrate-metadata | promote | NODES\moral-sacrifice-social-protests.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, related) | frontmatter-schema.md | NODES\moral-sacrifice-social-protests.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:21.988040+05:30 | migrate-metadata | promote | NODES\poison-of-optionality.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\poison-of-optionality.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:22.590795+05:30 | migrate-metadata | promote | NODES\state-intervention-hunger-strikes.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, related) | frontmatter-schema.md | NODES\state-intervention-hunger-strikes.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:22.605216+05:30 | migrate-metadata | promote | NODES\state-tactics-protest-containment.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, related) | frontmatter-schema.md | NODES\state-tactics-protest-containment.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:22.768662+05:30 | migrate-metadata | promote | NODES\two-way-vs-one-way-doors.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\two-way-vs-one-way-doors.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:22.776640+05:30 | migrate-metadata | promote | NODES\uncomfortable-truths-2-cheatsheet.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version, related) | frontmatter-schema.md | NODES\uncomfortable-truths-2-cheatsheet.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:22.790404+05:30 | migrate-metadata | promote | NODES\unemployment-optionality-paradox.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\unemployment-optionality-paradox.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T17:32:22.907282+05:30 | migrate-metadata | promote | NODES\why-you-are-feeling-stuck-in-your-20s-cheatsheet.md | Migrated frontmatter to schema_version 3 (Added/fixed fields: schema_version) | frontmatter-schema.md | NODES\why-you-are-feeling-stuck-in-your-20s-cheatsheet.md | 100 | applied | revert metadata change using git checkout | none |
| 2026-07-19T18:10:00+05:30 | antigravity-agent | update | .antigravity/modules/automation/ingestion-rules.md, .antigravity/modules/metadata/source-schema.md, .antigravity/modules/quality/maturity-model.md, .antigravity/modules/workflow/incubation-rules.md, GEMINI.md, VAULT-STRUCTURE.md, README.md, .antigravity/CLAUDE.md | Update knowledge pipeline rules to enforce CAPTURE immutability, PROCESS workspace boundary, source archival after promotion, and NOTES to NODES workflow | core_governance | User request | 100 | applied | git revert | none |

```

---

## File: logs\concept-id-migration-2026-07-18.json

```json
{
  "generated_at": "2026-07-18T13:24:27.509523Z",
  "mode": "dry-run",
  "stats": {
    "total_processed": 329,
    "updated": 0,
    "skipped_already_set": 0,
    "collisions_resolved": 0
  },
  "entries": [
    {
      "path": "NODES\\agent-loop-architectures.md",
      "stem": "agent-loop-architectures",
      "concept_id": "agent-loop-architectures-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\agent-loop-done-criteria.md",
      "stem": "agent-loop-done-criteria",
      "concept_id": "agent-loop-done-criteria-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\agent-loop-mechanics.md",
      "stem": "agent-loop-mechanics",
      "concept_id": "agent-loop-mechanics-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\ajit-jain-successor.md",
      "stem": "ajit-jain-successor",
      "concept_id": "ajit-jain-successor-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\algorithm-design-sequence.md",
      "stem": "algorithm-design-sequence",
      "concept_id": "algorithm-design-sequence-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\amex-salad-oil-investment.md",
      "stem": "amex-salad-oil-investment",
      "concept_id": "amex-salad-oil-investment-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\anne-thorndike-cafeteria-study.md",
      "stem": "anne-thorndike-cafeteria-study",
      "concept_id": "anne-thorndike-cafeteria-study-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\apple-investment-case-study.md",
      "stem": "apple-investment-case-study",
      "concept_id": "apple-investment-case-study-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\arbitrage-workouts.md",
      "stem": "arbitrage-workouts",
      "concept_id": "arbitrage-workouts-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\atomic-habit.md",
      "stem": "atomic-habit",
      "concept_id": "atomic-habit-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\authority-bias-investing.md",
      "stem": "authority-bias-investing",
      "concept_id": "authority-bias-investing-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\availability-bias-investing.md",
      "stem": "availability-bias-investing",
      "concept_id": "availability-bias-investing-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\bayesian-decision-making.md",
      "stem": "bayesian-decision-making",
      "concept_id": "bayesian-decision-making-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\be-mentally-strong.md",
      "stem": "be-mentally-strong",
      "concept_id": "be-mentally-strong-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\beating-the-odds-when-things-get-hard.md",
      "stem": "beating-the-odds-when-things-get-hard",
      "concept_id": "beating-the-odds-when-things-get-hard-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\benjamin-moore-acquisition.md",
      "stem": "benjamin-moore-acquisition",
      "concept_id": "benjamin-moore-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\berkshire-hathaway-acquisition.md",
      "stem": "berkshire-hathaway-acquisition",
      "concept_id": "berkshire-hathaway-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\berkshire-hathaway-energy.md",
      "stem": "berkshire-hathaway-energy",
      "concept_id": "berkshire-hathaway-energy-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\berkshire-insurance-businesses.md",
      "stem": "berkshire-insurance-businesses",
      "concept_id": "berkshire-insurance-businesses-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\berkshire-shareholder-letters.md",
      "stem": "berkshire-shareholder-letters",
      "concept_id": "berkshire-shareholder-letters-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\bias-from-association.md",
      "stem": "bias-from-association",
      "concept_id": "bias-from-association-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\bill-gates-friendship.md",
      "stem": "bill-gates-friendship",
      "concept_id": "bill-gates-friendship-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\bismarck-realpolitik.md",
      "stem": "bismarck-realpolitik",
      "concept_id": "bismarck-realpolitik-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\blue-chip-stamps-investment.md",
      "stem": "blue-chip-stamps-investment",
      "concept_id": "blue-chip-stamps-investment-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\bnsf-railway-acquisition.md",
      "stem": "bnsf-railway-acquisition",
      "concept_id": "bnsf-railway-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\books-cheatsheet.md",
      "stem": "books-cheatsheet",
      "concept_id": "books-cheatsheet-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\brain-as-a-prediction-machine.md",
      "stem": "brain-as-a-prediction-machine",
      "concept_id": "brain-as-a-prediction-machine-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\brian-clark-fingernail-biting.md",
      "stem": "brian-clark-fingernail-biting",
      "concept_id": "brian-clark-fingernail-biting-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\bryan-harris-habit-contract.md",
      "stem": "bryan-harris-habit-contract",
      "concept_id": "bryan-harris-habit-contract-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\buffett-childhood-entrepreneurship.md",
      "stem": "buffett-childhood-entrepreneurship",
      "concept_id": "buffett-childhood-entrepreneurship-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\buffett-decision-making-framework.md",
      "stem": "buffett-decision-making-framework",
      "concept_id": "buffett-decision-making-framework-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\buffett-delegation-model.md",
      "stem": "buffett-delegation-model",
      "concept_id": "buffett-delegation-model-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\buffett-education-and-graham-influence.md",
      "stem": "buffett-education-and-graham-influence",
      "concept_id": "buffett-education-and-graham-influence-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\buffett-foundation.md",
      "stem": "buffett-foundation",
      "concept_id": "buffett-foundation-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\buffett-frugal-lifestyle.md",
      "stem": "buffett-frugal-lifestyle",
      "concept_id": "buffett-frugal-lifestyle-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\buffett-reading-habit.md",
      "stem": "buffett-reading-habit",
      "concept_id": "buffett-reading-habit-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\building-resilience-and-grit.md",
      "stem": "building-resilience-and-grit",
      "concept_id": "building-resilience-and-grit-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\bypass-ask-permissions-mode.md",
      "stem": "bypass-ask-permissions-mode",
      "concept_id": "bypass-ask-permissions-mode-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\capital-allocation.md",
      "stem": "capital-allocation",
      "concept_id": "capital-allocation-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\capital-intensity.md",
      "stem": "capital-intensity",
      "concept_id": "capital-intensity-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\cardinal-rule-of-behavior-change.md",
      "stem": "cardinal-rule-of-behavior-change",
      "concept_id": "cardinal-rule-of-behavior-change-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\cash-register-automation.md",
      "stem": "cash-register-automation",
      "concept_id": "cash-register-automation-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\cesare-borgia.md",
      "stem": "cesare-borgia",
      "concept_id": "cesare-borgia-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\charlie-munger-influence-on-buffett.md",
      "stem": "charlie-munger-influence-on-buffett",
      "concept_id": "charlie-munger-influence-on-buffett-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\cigar-butt-investing.md",
      "stem": "cigar-butt-investing",
      "concept_id": "cigar-butt-investing-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\circle-of-competence.md",
      "stem": "circle-of-competence",
      "concept_id": "circle-of-competence-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\claude-second-brain-levels.md",
      "stem": "claude-second-brain-levels",
      "concept_id": "claude-second-brain-levels-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\clayton-homes-acquisition.md",
      "stem": "clayton-homes-acquisition",
      "concept_id": "clayton-homes-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\coca-cola-investment-case-study.md",
      "stem": "coca-cola-investment-case-study",
      "concept_id": "coca-cola-investment-case-study-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\commitment-consistency-bias.md",
      "stem": "commitment-consistency-bias",
      "concept_id": "commitment-consistency-bias-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\commitment-devices.md",
      "stem": "commitment-devices",
      "concept_id": "commitment-devices-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\compounding-interest.md",
      "stem": "compounding-interest",
      "concept_id": "compounding-interest-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\con-artist-yellow-kid-weil.md",
      "stem": "con-artist-yellow-kid-weil",
      "concept_id": "con-artist-yellow-kid-weil-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\contrast-effect-bias.md",
      "stem": "contrast-effect-bias",
      "concept_id": "contrast-effect-bias-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\court-power.md",
      "stem": "court-power",
      "concept_id": "court-power-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\dairy-queen-acquisition.md",
      "stem": "dairy-queen-acquisition",
      "concept_id": "dairy-queen-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\dealing-with-failure-and-bouncing-back.md",
      "stem": "dealing-with-failure-and-bouncing-back",
      "concept_id": "dealing-with-failure-and-bouncing-back-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\debt-aversion-principle.md",
      "stem": "debt-aversion-principle",
      "concept_id": "debt-aversion-principle-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\decisive-moments.md",
      "stem": "decisive-moments",
      "concept_id": "decisive-moments-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\delayed-return-environment.md",
      "stem": "delayed-return-environment",
      "concept_id": "delayed-return-environment-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\delete-before-optimize.md",
      "stem": "delete-before-optimize",
      "concept_id": "delete-before-optimize-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\delete-then-optimize-loop.md",
      "stem": "delete-then-optimize-loop",
      "concept_id": "delete-then-optimize-loop-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\dempster-mill-investment.md",
      "stem": "dempster-mill-investment",
      "concept_id": "dempster-mill-investment-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\developing-mental-toughness.md",
      "stem": "developing-mental-toughness",
      "concept_id": "developing-mental-toughness-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\dexter-shoe-investment-mistake.md",
      "stem": "dexter-shoe-investment-mistake",
      "concept_id": "dexter-shoe-investment-mistake-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\diderot-effect.md",
      "stem": "diderot-effect",
      "concept_id": "diderot-effect-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\disliking-hating-tendency.md",
      "stem": "disliking-hating-tendency",
      "concept_id": "disliking-hating-tendency-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\dopamine-driven-feedback-loop.md",
      "stem": "dopamine-driven-feedback-loop",
      "concept_id": "dopamine-driven-feedback-loop-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\economic-moat.md",
      "stem": "economic-moat",
      "concept_id": "economic-moat-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\elon-musk-childhood.md",
      "stem": "elon-musk-childhood",
      "concept_id": "elon-musk-childhood-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\elon-musk-education.md",
      "stem": "elon-musk-education",
      "concept_id": "elon-musk-education-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\elon-musk-hiring-philosophy.md",
      "stem": "elon-musk-hiring-philosophy",
      "concept_id": "elon-musk-hiring-philosophy-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\elon-musk-neuralink.md",
      "stem": "elon-musk-neuralink",
      "concept_id": "elon-musk-neuralink-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\elon-musk-spacex-founding.md",
      "stem": "elon-musk-spacex-founding",
      "concept_id": "elon-musk-spacex-founding-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\elon-musk-starlink.md",
      "stem": "elon-musk-starlink",
      "concept_id": "elon-musk-starlink-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\elon-musk-tesla-founding.md",
      "stem": "elon-musk-tesla-founding",
      "concept_id": "elon-musk-tesla-founding-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\elon-musk-the-boring-company.md",
      "stem": "elon-musk-the-boring-company",
      "concept_id": "elon-musk-the-boring-company-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\elon-musk-xai.md",
      "stem": "elon-musk-xai",
      "concept_id": "elon-musk-xai-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\elon-musk-xcom-paypal.md",
      "stem": "elon-musk-xcom-paypal",
      "concept_id": "elon-musk-xcom-paypal-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\elon-musk-zip2.md",
      "stem": "elon-musk-zip2",
      "concept_id": "elon-musk-zip2-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\emotional-healing-and-moving-forward.md",
      "stem": "emotional-healing-and-moving-forward",
      "concept_id": "emotional-healing-and-moving-forward-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\emotional-strength.md",
      "stem": "emotional-strength",
      "concept_id": "emotional-strength-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\environment-design.md",
      "stem": "environment-design",
      "concept_id": "environment-design-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\environment-priming.md",
      "stem": "environment-priming",
      "concept_id": "environment-priming-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\estate-tax-support.md",
      "stem": "estate-tax-support",
      "concept_id": "estate-tax-support-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\external-code-review-guardrails.md",
      "stem": "external-code-review-guardrails",
      "concept_id": "external-code-review-guardrails-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\failure-is-innovation-required.md",
      "stem": "failure-is-innovation-required",
      "concept_id": "failure-is-innovation-required-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\fermi-estimation.md",
      "stem": "fermi-estimation",
      "concept_id": "fermi-estimation-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\fewshot-vs-zeroshot-prompting.md",
      "stem": "fewshot-vs-zeroshot-prompting",
      "concept_id": "fewshot-vs-zeroshot-prompting-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\finally-agent-loops-clearly-explained-cheatsheet.md",
      "stem": "finally-agent-loops-clearly-explained-cheatsheet",
      "concept_id": "finally-agent-loops-clearly-explained-cheatsheet-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\finding-your-inner-strength.md",
      "stem": "finding-your-inner-strength",
      "concept_id": "finding-your-inner-strength-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\first-principles-build-rule.md",
      "stem": "first-principles-build-rule",
      "concept_id": "first-principles-build-rule-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\first-principles-prompting.md",
      "stem": "first-principles-prompting",
      "concept_id": "first-principles-prompting-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\first-principles-thinking.md",
      "stem": "first-principles-thinking",
      "concept_id": "first-principles-thinking-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\five-twenty-five-rule.md",
      "stem": "five-twenty-five-rule",
      "concept_id": "five-twenty-five-rule-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\flightsafety-acquisition.md",
      "stem": "flightsafety-acquisition",
      "concept_id": "flightsafety-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\fruit-of-the-loom-acquisition.md",
      "stem": "fruit-of-the-loom-acquisition",
      "concept_id": "fruit-of-the-loom-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\geeks-bearing-formulas.md",
      "stem": "geeks-bearing-formulas",
      "concept_id": "geeks-bearing-formulas-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\geico-acquisition.md",
      "stem": "geico-acquisition",
      "concept_id": "geico-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\gen-re-acquisition.md",
      "stem": "gen-re-acquisition",
      "concept_id": "gen-re-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\genetics-and-environment.md",
      "stem": "genetics-and-environment",
      "concept_id": "genetics-and-environment-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\gillette-investment.md",
      "stem": "gillette-investment",
      "concept_id": "gillette-investment-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\giving-pledge.md",
      "stem": "giving-pledge",
      "concept_id": "giving-pledge-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\goldilocks-rule.md",
      "stem": "goldilocks-rule",
      "concept_id": "goldilocks-rule-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\greg-abel-successor.md",
      "stem": "greg-abel-successor",
      "concept_id": "greg-abel-successor-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\growth-mindset.md",
      "stem": "growth-mindset",
      "concept_id": "growth-mindset-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\habit-contracts.md",
      "stem": "habit-contracts",
      "concept_id": "habit-contracts-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\habit-loop.md",
      "stem": "habit-loop",
      "concept_id": "habit-loop-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\habit-stacking.md",
      "stem": "habit-stacking",
      "concept_id": "habit-stacking-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\habit-tracking.md",
      "stem": "habit-tracking",
      "concept_id": "habit-tracking-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\habits-plus-deliberate-practice.md",
      "stem": "habits-plus-deliberate-practice",
      "concept_id": "habits-plus-deliberate-practice-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\habits-scorecard.md",
      "stem": "habits-scorecard",
      "concept_id": "habits-scorecard-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\haile-selassie-court.md",
      "stem": "haile-selassie-court",
      "concept_id": "haile-selassie-court-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\hebbs-law.md",
      "stem": "hebbs-law",
      "concept_id": "hebbs-law-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\honesty-expensive-gift.md",
      "stem": "honesty-expensive-gift",
      "concept_id": "honesty-expensive-gift-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\howard-buffett-influence.md",
      "stem": "howard-buffett-influence",
      "concept_id": "howard-buffett-influence-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\hyperbolic-discounting.md",
      "stem": "hyperbolic-discounting",
      "concept_id": "hyperbolic-discounting-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\identity-based-habits.md",
      "stem": "identity-based-habits",
      "concept_id": "identity-based-habits-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\idiot-index.md",
      "stem": "idiot-index",
      "concept_id": "idiot-index-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\immediate-return-environment.md",
      "stem": "immediate-return-environment",
      "concept_id": "immediate-return-environment-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\implementation-intentions.md",
      "stem": "implementation-intentions",
      "concept_id": "implementation-intentions-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\intrinsic-value.md",
      "stem": "intrinsic-value",
      "concept_id": "intrinsic-value-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\inversion-mental-model.md",
      "stem": "inversion-mental-model",
      "concept_id": "inversion-mental-model-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\james-clear-injury-recovery.md",
      "stem": "james-clear-injury-recovery",
      "concept_id": "james-clear-injury-recovery-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\jerry-uelsmann-photography.md",
      "stem": "jerry-uelsmann-photography",
      "concept_id": "jerry-uelsmann-photography-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-01-never-outshine-the-master.md",
      "stem": "law-01-never-outshine-the-master",
      "concept_id": "law-01-never-outshine-the-master-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-02-never-trust-friends-use-enemies.md",
      "stem": "law-02-never-trust-friends-use-enemies",
      "concept_id": "law-02-never-trust-friends-use-enemies-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-03-conceal-your-intentions.md",
      "stem": "law-03-conceal-your-intentions",
      "concept_id": "law-03-conceal-your-intentions-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-04-say-less-than-necessary.md",
      "stem": "law-04-say-less-than-necessary",
      "concept_id": "law-04-say-less-than-necessary-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-05-guard-your-reputation.md",
      "stem": "law-05-guard-your-reputation",
      "concept_id": "law-05-guard-your-reputation-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-06-court-attention.md",
      "stem": "law-06-court-attention",
      "concept_id": "law-06-court-attention-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-07-get-others-to-do-the-work.md",
      "stem": "law-07-get-others-to-do-the-work",
      "concept_id": "law-07-get-others-to-do-the-work-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-08-make-others-come-to-you.md",
      "stem": "law-08-make-others-come-to-you",
      "concept_id": "law-08-make-others-come-to-you-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-09-win-through-actions.md",
      "stem": "law-09-win-through-actions",
      "concept_id": "law-09-win-through-actions-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-10-avoid-the-unhappy-and-unlucky.md",
      "stem": "law-10-avoid-the-unhappy-and-unlucky",
      "concept_id": "law-10-avoid-the-unhappy-and-unlucky-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-11-keep-people-dependent.md",
      "stem": "law-11-keep-people-dependent",
      "concept_id": "law-11-keep-people-dependent-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-12-selective-honesty-to-disarm.md",
      "stem": "law-12-selective-honesty-to-disarm",
      "concept_id": "law-12-selective-honesty-to-disarm-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-13-appeal-to-self-interest.md",
      "stem": "law-13-appeal-to-self-interest",
      "concept_id": "law-13-appeal-to-self-interest-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-14-pose-as-friend-work-as-spy.md",
      "stem": "law-14-pose-as-friend-work-as-spy",
      "concept_id": "law-14-pose-as-friend-work-as-spy-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-15-crush-your-enemy-totally.md",
      "stem": "law-15-crush-your-enemy-totally",
      "concept_id": "law-15-crush-your-enemy-totally-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-16-use-absence.md",
      "stem": "law-16-use-absence",
      "concept_id": "law-16-use-absence-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-17-cultivate-unpredictability.md",
      "stem": "law-17-cultivate-unpredictability",
      "concept_id": "law-17-cultivate-unpredictability-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-18-isolation-is-dangerous.md",
      "stem": "law-18-isolation-is-dangerous",
      "concept_id": "law-18-isolation-is-dangerous-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-19-know-who-youre-dealing-with.md",
      "stem": "law-19-know-who-youre-dealing-with",
      "concept_id": "law-19-know-who-youre-dealing-with-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-20-do-not-commit-to-anyone.md",
      "stem": "law-20-do-not-commit-to-anyone",
      "concept_id": "law-20-do-not-commit-to-anyone-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-21-play-a-sucker.md",
      "stem": "law-21-play-a-sucker",
      "concept_id": "law-21-play-a-sucker-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-22-surrender-tactic.md",
      "stem": "law-22-surrender-tactic",
      "concept_id": "law-22-surrender-tactic-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-23-concentrate-your-forces.md",
      "stem": "law-23-concentrate-your-forces",
      "concept_id": "law-23-concentrate-your-forces-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-24-play-the-perfect-courtier.md",
      "stem": "law-24-play-the-perfect-courtier",
      "concept_id": "law-24-play-the-perfect-courtier-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-25-recreate-yourself.md",
      "stem": "law-25-recreate-yourself",
      "concept_id": "law-25-recreate-yourself-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-26-keep-your-hands-clean.md",
      "stem": "law-26-keep-your-hands-clean",
      "concept_id": "law-26-keep-your-hands-clean-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-27-create-a-cultlike-following.md",
      "stem": "law-27-create-a-cultlike-following",
      "concept_id": "law-27-create-a-cultlike-following-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-28-enter-action-with-boldness.md",
      "stem": "law-28-enter-action-with-boldness",
      "concept_id": "law-28-enter-action-with-boldness-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-29-plan-to-the-end.md",
      "stem": "law-29-plan-to-the-end",
      "concept_id": "law-29-plan-to-the-end-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-30-make-accomplishments-seem-effortless.md",
      "stem": "law-30-make-accomplishments-seem-effortless",
      "concept_id": "law-30-make-accomplishments-seem-effortless-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-31-control-the-options.md",
      "stem": "law-31-control-the-options",
      "concept_id": "law-31-control-the-options-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-32-play-to-peoples-fantasies.md",
      "stem": "law-32-play-to-peoples-fantasies",
      "concept_id": "law-32-play-to-peoples-fantasies-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-33-discover-each-mans-thumbscrew.md",
      "stem": "law-33-discover-each-mans-thumbscrew",
      "concept_id": "law-33-discover-each-mans-thumbscrew-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-34-be-royal.md",
      "stem": "law-34-be-royal",
      "concept_id": "law-34-be-royal-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-35-master-the-art-of-timing.md",
      "stem": "law-35-master-the-art-of-timing",
      "concept_id": "law-35-master-the-art-of-timing-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-36-disdain-things-you-cannot-have.md",
      "stem": "law-36-disdain-things-you-cannot-have",
      "concept_id": "law-36-disdain-things-you-cannot-have-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-37-create-compelling-spectacles.md",
      "stem": "law-37-create-compelling-spectacles",
      "concept_id": "law-37-create-compelling-spectacles-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-38-think-as-you-like-behave-like-others.md",
      "stem": "law-38-think-as-you-like-behave-like-others",
      "concept_id": "law-38-think-as-you-like-behave-like-others-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-39-stir-up-waters.md",
      "stem": "law-39-stir-up-waters",
      "concept_id": "law-39-stir-up-waters-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-40-despise-the-free-lunch.md",
      "stem": "law-40-despise-the-free-lunch",
      "concept_id": "law-40-despise-the-free-lunch-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-41-avoid-stepping-into-great-mans-shoes.md",
      "stem": "law-41-avoid-stepping-into-great-mans-shoes",
      "concept_id": "law-41-avoid-stepping-into-great-mans-shoes-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-42-strike-the-shepherd.md",
      "stem": "law-42-strike-the-shepherd",
      "concept_id": "law-42-strike-the-shepherd-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-43-work-on-hearts-and-minds.md",
      "stem": "law-43-work-on-hearts-and-minds",
      "concept_id": "law-43-work-on-hearts-and-minds-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-44-mirror-effect.md",
      "stem": "law-44-mirror-effect",
      "concept_id": "law-44-mirror-effect-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-45-preach-change-reform-slowly.md",
      "stem": "law-45-preach-change-reform-slowly",
      "concept_id": "law-45-preach-change-reform-slowly-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-46-never-appear-too-perfect.md",
      "stem": "law-46-never-appear-too-perfect",
      "concept_id": "law-46-never-appear-too-perfect-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-47-learn-when-to-stop.md",
      "stem": "law-47-learn-when-to-stop",
      "concept_id": "law-47-learn-when-to-stop-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-48-assume-formlessness.md",
      "stem": "law-48-assume-formlessness",
      "concept_id": "law-48-assume-formlessness-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\law-of-least-effort.md",
      "stem": "law-of-least-effort",
      "concept_id": "law-of-least-effort-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\learn-99-percent-claude-and-codex-in-25-mins-cheatsheet.md",
      "stem": "learn-99-percent-claude-and-codex-in-25-mins-cheatsheet",
      "concept_id": "learn-99-percent-claude-and-codex-in-25-mins-cheatsheet-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\liking-loving-tendency.md",
      "stem": "liking-loving-tendency",
      "concept_id": "liking-loving-tendency-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\local-filesystem-agent-advantage.md",
      "stem": "local-filesystem-agent-advantage",
      "concept_id": "local-filesystem-agent-advantage-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\lollapalooza-effect.md",
      "stem": "lollapalooza-effect",
      "concept_id": "lollapalooza-effect-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\long-term-time-horizon.md",
      "stem": "long-term-time-horizon",
      "concept_id": "long-term-time-horizon-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\loop-engineering.md",
      "stem": "loop-engineering",
      "concept_id": "loop-engineering-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\loop-verification-importance.md",
      "stem": "loop-verification-importance",
      "concept_id": "loop-verification-importance-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\louis-xiv-versailles.md",
      "stem": "louis-xiv-versailles",
      "concept_id": "louis-xiv-versailles-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\lubrizol-acquisition.md",
      "stem": "lubrizol-acquisition",
      "concept_id": "lubrizol-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\machiavelli-and-the-prince.md",
      "stem": "machiavelli-and-the-prince",
      "concept_id": "machiavelli-and-the-prince-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\make-it-invisible.md",
      "stem": "make-it-invisible",
      "concept_id": "make-it-invisible-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\make-money-while-you-sleep.md",
      "stem": "make-money-while-you-sleep",
      "concept_id": "make-money-while-you-sleep-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\mao-zedong-formlessness.md",
      "stem": "mao-zedong-formlessness",
      "concept_id": "mao-zedong-formlessness-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\margin-of-safety.md",
      "stem": "margin-of-safety",
      "concept_id": "margin-of-safety-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\marginal-gains-british-cycling.md",
      "stem": "marginal-gains-british-cycling",
      "concept_id": "marginal-gains-british-cycling-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\marmon-group-acquisition.md",
      "stem": "marmon-group-acquisition",
      "concept_id": "marmon-group-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\moral-nobility-as-tactical-vulnerability.md",
      "stem": "moral-nobility-as-tactical-vulnerability",
      "concept_id": "moral-nobility-as-tactical-vulnerability-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\motivation-and-inspiration.md",
      "stem": "motivation-and-inspiration",
      "concept_id": "motivation-and-inspiration-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\motivation-ritual.md",
      "stem": "motivation-ritual",
      "concept_id": "motivation-ritual-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\musk-ai-risk-philosophy.md",
      "stem": "musk-ai-risk-philosophy",
      "concept_id": "musk-ai-risk-philosophy-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\musk-communication-pattern.md",
      "stem": "musk-communication-pattern",
      "concept_id": "musk-communication-pattern-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\musk-mars-colonization-vision.md",
      "stem": "musk-mars-colonization-vision",
      "concept_id": "musk-mars-colonization-vision-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\musk-on-failure-quote.md",
      "stem": "musk-on-failure-quote",
      "concept_id": "musk-on-failure-quote-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\musk-on-first-principles-quote.md",
      "stem": "musk-on-first-principles-quote",
      "concept_id": "musk-on-first-principles-quote-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\musk-time-blocking-habit.md",
      "stem": "musk-time-blocking-habit",
      "concept_id": "musk-time-blocking-habit-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\musk-working-hours-expectation.md",
      "stem": "musk-working-hours-expectation",
      "concept_id": "musk-working-hours-expectation-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\national-indemnity-acquisition.md",
      "stem": "national-indemnity-acquisition",
      "concept_id": "national-indemnity-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\netjets-acquisition.md",
      "stem": "netjets-acquisition",
      "concept_id": "netjets-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\nicolas-fouquet-downfall.md",
      "stem": "nicolas-fouquet-downfall",
      "concept_id": "nicolas-fouquet-downfall-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\nols-tax-shield.md",
      "stem": "nols-tax-shield",
      "concept_id": "nols-tax-shield-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\one-percent-better-every-day.md",
      "stem": "one-percent-better-every-day",
      "concept_id": "one-percent-better-every-day-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\operating-leverage.md",
      "stem": "operating-leverage",
      "concept_id": "operating-leverage-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\opportunity-cost-heuristic.md",
      "stem": "opportunity-cost-heuristic",
      "concept_id": "opportunity-cost-heuristic-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\overcoming-obstacles-and-adversity.md",
      "stem": "overcoming-obstacles-and-adversity",
      "concept_id": "overcoming-obstacles-and-adversity-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\owner-earnings.md",
      "stem": "owner-earnings",
      "concept_id": "owner-earnings-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\pampered-chef-acquisition.md",
      "stem": "pampered-chef-acquisition",
      "concept_id": "pampered-chef-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\pavlovian-association.md",
      "stem": "pavlovian-association",
      "concept_id": "pavlovian-association-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\personal-growth-and-development.md",
      "stem": "personal-growth-and-development",
      "concept_id": "personal-growth-and-development-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\phelps-and-el-guerrouj.md",
      "stem": "phelps-and-el-guerrouj",
      "concept_id": "phelps-and-el-guerrouj-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\phil-carret-influence.md",
      "stem": "phil-carret-influence",
      "concept_id": "phil-carret-influence-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\physics-constraint-test.md",
      "stem": "physics-constraint-test",
      "concept_id": "physics-constraint-test-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\pilot-flying-j-acquisition.md",
      "stem": "pilot-flying-j-acquisition",
      "concept_id": "pilot-flying-j-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\pkm-development-phases.md",
      "stem": "pkm-development-phases",
      "concept_id": "pkm-development-phases-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\plateau-of-latent-potential.md",
      "stem": "plateau-of-latent-potential",
      "concept_id": "plateau-of-latent-potential-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\pointing-and-calling.md",
      "stem": "pointing-and-calling",
      "concept_id": "pointing-and-calling-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\polgar-sisters-chess.md",
      "stem": "polgar-sisters-chess",
      "concept_id": "polgar-sisters-chess-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\power-abhors-a-vacuum.md",
      "stem": "power-abhors-a-vacuum",
      "concept_id": "power-abhors-a-vacuum-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\power-as-a-social-game.md",
      "stem": "power-as-a-social-game",
      "concept_id": "power-as-a-social-game-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\powerful-mindset-shifts.md",
      "stem": "powerful-mindset-shifts",
      "concept_id": "powerful-mindset-shifts-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\precision-castparts-acquisition.md",
      "stem": "precision-castparts-acquisition",
      "concept_id": "precision-castparts-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\premacks-principle.md",
      "stem": "premacks-principle",
      "concept_id": "premacks-principle-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\price-vs-value.md",
      "stem": "price-vs-value",
      "concept_id": "price-vs-value-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\prompt-combination-codes.md",
      "stem": "prompt-combination-codes",
      "concept_id": "prompt-combination-codes-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\prompt-honesty-codes.md",
      "stem": "prompt-honesty-codes",
      "concept_id": "prompt-honesty-codes-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\prompt-learning-codes.md",
      "stem": "prompt-learning-codes",
      "concept_id": "prompt-learning-codes-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\prompt-meta-announce.md",
      "stem": "prompt-meta-announce",
      "concept_id": "prompt-meta-announce-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\prompt-output-control-codes.md",
      "stem": "prompt-output-control-codes",
      "concept_id": "prompt-output-control-codes-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\prompt-reasoning-codes.md",
      "stem": "prompt-reasoning-codes",
      "concept_id": "prompt-reasoning-codes-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\prompt-simplification-codes.md",
      "stem": "prompt-simplification-codes",
      "concept_id": "prompt-simplification-codes-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\prompt-strategy-codes.md",
      "stem": "prompt-strategy-codes",
      "concept_id": "prompt-strategy-codes-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\prompt-thinking-codes.md",
      "stem": "prompt-thinking-codes",
      "concept_id": "prompt-thinking-codes-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\prompt-voice-format-codes.md",
      "stem": "prompt-voice-format-codes",
      "concept_id": "prompt-voice-format-codes-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\prototype-then-iterate.md",
      "stem": "prototype-then-iterate",
      "concept_id": "prototype-then-iterate-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\queen-elizabeth-i-power-image.md",
      "stem": "queen-elizabeth-i-power-image",
      "concept_id": "queen-elizabeth-i-power-image-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\question-every-requirement.md",
      "stem": "question-every-requirement",
      "concept_id": "question-every-requirement-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\quiet-thinking-habit.md",
      "stem": "quiet-thinking-habit",
      "concept_id": "quiet-thinking-habit-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\quote-genes-predispose.md",
      "stem": "quote-genes-predispose",
      "concept_id": "quote-genes-predispose-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\quote-james-clear-clarity.md",
      "stem": "quote-james-clear-clarity",
      "concept_id": "quote-james-clear-clarity-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\quote-what-is-rewarded-is-repeated.md",
      "stem": "quote-what-is-rewarded-is-repeated",
      "concept_id": "quote-what-is-rewarded-is-repeated-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\race-prompt-framework.md",
      "stem": "race-prompt-framework",
      "concept_id": "race-prompt-framework-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\reasoning-by-analogy.md",
      "stem": "reasoning-by-analogy",
      "concept_id": "reasoning-by-analogy-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\reciprocity-tendency.md",
      "stem": "reciprocity-tendency",
      "concept_id": "reciprocity-tendency-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\reclaiming-your-personal-power.md",
      "stem": "reclaiming-your-personal-power",
      "concept_id": "reclaiming-your-personal-power-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\red-team-technique.md",
      "stem": "red-team-technique",
      "concept_id": "red-team-technique-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\reflection-and-review.md",
      "stem": "reflection-and-review",
      "concept_id": "reflection-and-review-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\reframing-hard-habits.md",
      "stem": "reframing-hard-habits",
      "concept_id": "reframing-hard-habits-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\regret-minimization-framework.md",
      "stem": "regret-minimization-framework",
      "concept_id": "regret-minimization-framework-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\reinforcement.md",
      "stem": "reinforcement",
      "concept_id": "reinforcement-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\reinvestment-moat.md",
      "stem": "reinvestment-moat",
      "concept_id": "reinvestment-moat-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\relationships.md",
      "stem": "relationships",
      "concept_id": "relationships-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\reputation-protection-heuristic.md",
      "stem": "reputation-protection-heuristic",
      "concept_id": "reputation-protection-heuristic-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\reputation-twenty-years-to-build.md",
      "stem": "reputation-twenty-years-to-build",
      "concept_id": "reputation-twenty-years-to-build-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\return-on-equity.md",
      "stem": "return-on-equity",
      "concept_id": "return-on-equity-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\risk-free-rate-hurdle.md",
      "stem": "risk-free-rate-hurdle",
      "concept_id": "risk-free-rate-hurdle-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\roger-fisher-nuclear-button.md",
      "stem": "roger-fisher-nuclear-button",
      "concept_id": "roger-fisher-nuclear-button-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\rolls-royce-subway-analogy.md",
      "stem": "rolls-royce-subway-analogy",
      "concept_id": "rolls-royce-subway-analogy-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\rule-one-never-lose-money.md",
      "stem": "rule-one-never-lose-money",
      "concept_id": "rule-one-never-lose-money-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\safeguard-soap-handwashing-study.md",
      "stem": "safeguard-soap-handwashing-study",
      "concept_id": "safeguard-soap-handwashing-study-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\salomon-brothers-intervention.md",
      "stem": "salomon-brothers-intervention",
      "concept_id": "salomon-brothers-intervention-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\sanborn-map-investment.md",
      "stem": "sanborn-map-investment",
      "concept_id": "sanborn-map-investment-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\scarcity-bias-investing.md",
      "stem": "scarcity-bias-investing",
      "concept_id": "scarcity-bias-investing-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\sees-candies-investment-case-study.md",
      "stem": "sees-candies-investment-case-study",
      "concept_id": "sees-candies-investment-case-study-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\self-fixing-code-loops.md",
      "stem": "self-fixing-code-loops",
      "concept_id": "self-fixing-code-loops-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\self-improvement-strategies.md",
      "stem": "self-improvement-strategies",
      "concept_id": "self-improvement-strategies-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\shaw-industries-acquisition.md",
      "stem": "shaw-industries-acquisition",
      "concept_id": "shaw-industries-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\skinner-box-variable-rewards.md",
      "stem": "skinner-box-variable-rewards",
      "concept_id": "skinner-box-variable-rewards-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\social-norms-and-habits.md",
      "stem": "social-norms-and-habits",
      "concept_id": "social-norms-and-habits-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\social-proof-bias.md",
      "stem": "social-proof-bias",
      "concept_id": "social-proof-bias-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\socratic-prompting.md",
      "stem": "socratic-prompting",
      "concept_id": "socratic-prompting-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\solomon-asch-conformity.md",
      "stem": "solomon-asch-conformity",
      "concept_id": "solomon-asch-conformity-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\sorites-paradox.md",
      "stem": "sorites-paradox",
      "concept_id": "sorites-paradox-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\spacex-falcon-1-failures.md",
      "stem": "spacex-falcon-1-failures",
      "concept_id": "spacex-falcon-1-failures-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\special-situations.md",
      "stem": "special-situations",
      "concept_id": "special-situations-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\speed-of-iteration-principle.md",
      "stem": "speed-of-iteration-principle",
      "concept_id": "speed-of-iteration-principle-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\sprezzatura.md",
      "stem": "sprezzatura",
      "concept_id": "sprezzatura-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\steelman-technique.md",
      "stem": "steelman-technique",
      "concept_id": "steelman-technique-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\strategic-deception.md",
      "stem": "strategic-deception",
      "concept_id": "strategic-deception-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\supernormal-stimulus.md",
      "stem": "supernormal-stimulus",
      "concept_id": "supernormal-stimulus-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\susan-buffett-influence.md",
      "stem": "susan-buffett-influence",
      "concept_id": "susan-buffett-influence-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\systems-vs-goals.md",
      "stem": "systems-vs-goals",
      "concept_id": "systems-vs-goals-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\talent-density-principle.md",
      "stem": "talent-density-principle",
      "concept_id": "talent-density-principle-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\talleyrand-survival.md",
      "stem": "talleyrand-survival",
      "concept_id": "talleyrand-survival-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\ted-weschler-successor.md",
      "stem": "ted-weschler-successor",
      "concept_id": "ted-weschler-successor-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\temptation-bundling.md",
      "stem": "temptation-bundling",
      "concept_id": "temptation-bundling-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\tesla-production-hell.md",
      "stem": "tesla-production-hell",
      "concept_id": "tesla-production-hell-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\the-courtier-archetype.md",
      "stem": "the-courtier-archetype",
      "concept_id": "the-courtier-archetype-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\the-futility-of-gratitude.md",
      "stem": "the-futility-of-gratitude",
      "concept_id": "the-futility-of-gratitude-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\the-illusion-of-equality.md",
      "stem": "the-illusion-of-equality",
      "concept_id": "the-illusion-of-equality-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\the-law-of-reversal.md",
      "stem": "the-law-of-reversal",
      "concept_id": "the-law-of-reversal-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\the-myth-of-sincerity.md",
      "stem": "the-myth-of-sincerity",
      "concept_id": "the-myth-of-sincerity-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\the-reality-of-human-envy.md",
      "stem": "the-reality-of-human-envy",
      "concept_id": "the-reality-of-human-envy-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\tide-goes-out-naked-swimming.md",
      "stem": "tide-goes-out-naked-swimming",
      "concept_id": "tide-goes-out-naked-swimming-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\todd-combs-successor.md",
      "stem": "todd-combs-successor",
      "concept_id": "todd-combs-successor-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\tom-murphy-influence.md",
      "stem": "tom-murphy-influence",
      "concept_id": "tom-murphy-influence-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\trent-dyrsmid-paperclips.md",
      "stem": "trent-dyrsmid-paperclips",
      "concept_id": "trent-dyrsmid-paperclips-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\twenty-punches-card-rule.md",
      "stem": "twenty-punches-card-rule",
      "concept_id": "twenty-punches-card-rule-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\two-minute-rule.md",
      "stem": "two-minute-rule",
      "concept_id": "two-minute-rule-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\two-slot-punch-card.md",
      "stem": "two-slot-punch-card",
      "concept_id": "two-slot-punch-card-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\two-step-identity-change.md",
      "stem": "two-step-identity-change",
      "concept_id": "two-step-identity-change-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\us-air-investment-mistake.md",
      "stem": "us-air-investment-mistake",
      "concept_id": "us-air-investment-mistake-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\value-investing.md",
      "stem": "value-investing",
      "concept_id": "value-investing-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\vertical-integration-calculus.md",
      "stem": "vertical-integration-calculus",
      "concept_id": "vertical-integration-calculus-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\victor-hugo-closet-lock.md",
      "stem": "victor-hugo-closet-lock",
      "concept_id": "victor-hugo-closet-lock-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\vietnam-veterans-heroin-study.md",
      "stem": "vietnam-veterans-heroin-study",
      "concept_id": "vietnam-veterans-heroin-study-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\walter-schloss-contrast.md",
      "stem": "walter-schloss-contrast",
      "concept_id": "walter-schloss-contrast-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\warren-buffett-biography.md",
      "stem": "warren-buffett-biography",
      "concept_id": "warren-buffett-biography-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\warren-buffett-quotes.md",
      "stem": "warren-buffett-quotes",
      "concept_id": "warren-buffett-quotes-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\washington-post-investment.md",
      "stem": "washington-post-investment",
      "concept_id": "washington-post-investment-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\wesco-financial-acquisition.md",
      "stem": "wesco-financial-acquisition",
      "concept_id": "wesco-financial-acquisition-v1",
      "collision_resolved": false
    },
    {
      "path": "NODES\\you-do-not-rise-to-the-level-of-your-goals.md",
      "stem": "you-do-not-rise-to-the-level-of-your-goals",
      "concept_id": "you-do-not-rise-to-the-level-of-your-goals-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\48-laws-of-power-moc.md",
      "stem": "48-laws-of-power-moc",
      "concept_id": "48-laws-of-power-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\_orphans.md",
      "stem": "_orphans",
      "concept_id": "orphans-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\ai-ml-moc.md",
      "stem": "ai-ml-moc",
      "concept_id": "ai-ml-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\atomic-habits-moc.md",
      "stem": "atomic-habits-moc",
      "concept_id": "atomic-habits-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\books-moc.md",
      "stem": "books-moc",
      "concept_id": "books-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\elon-musk-moc.md",
      "stem": "elon-musk-moc",
      "concept_id": "elon-musk-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\finally-agent-loops-clearly-explained-moc.md",
      "stem": "finally-agent-loops-clearly-explained-moc",
      "concept_id": "finally-agent-loops-clearly-explained-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\learn-99-percent-claude-and-codex-in-25-mins-moc.md",
      "stem": "learn-99-percent-claude-and-codex-in-25-mins-moc",
      "concept_id": "learn-99-percent-claude-and-codex-in-25-mins-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\people-moc.md",
      "stem": "people-moc",
      "concept_id": "people-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\prompt-engineering-moc.md",
      "stem": "prompt-engineering-moc",
      "concept_id": "prompt-engineering-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\study-moc.md",
      "stem": "study-moc",
      "concept_id": "study-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\THIS IS WHY PEOPLE HURT YOU.md",
      "stem": "THIS IS WHY PEOPLE HURT YOU",
      "concept_id": "this-is-why-people-hurt-you-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\tools-moc.md",
      "stem": "tools-moc",
      "concept_id": "tools-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\warren-buffett-moc.md",
      "stem": "warren-buffett-moc",
      "concept_id": "warren-buffett-moc-v1",
      "collision_resolved": false
    },
    {
      "path": "03_MOC\\yt-moc.md",
      "stem": "yt-moc",
      "concept_id": "yt-moc-v1",
      "collision_resolved": false
    }
  ]
}
```

---

## File: logs\moc-curation.json

```json
{
  "status": "success",
  "timestamp": "2026-07-19T18:09:18.974066",
  "soft_limit": 50,
  "hard_limit": 100,
  "analyses": [
    {
      "moc_file": "48-laws-of-power-moc.md",
      "title": "\u26a1 48 Laws of Power Map of Content",
      "link_count": 73,
      "status": "warning",
      "suggestions": []
    },
    {
      "moc_file": "ai-ml-moc.md",
      "title": "\ud83e\udd16 AI & Machine Learning Map of Content",
      "link_count": 25,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "atomic-habits-moc.md",
      "title": "\u26a1 Atomic Habits Map of Content",
      "link_count": 47,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "books-moc.md",
      "title": "\ud83d\udcd6 Books Map of Content",
      "link_count": 1,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "elon-musk-moc.md",
      "title": "\ud83d\ude80 Elon Musk Map of Content",
      "link_count": 37,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "finally-agent-loops-clearly-explained-moc.md",
      "title": "Finally. Agent Loops Clearly Explained MOC",
      "link_count": 0,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "learn-99-percent-claude-and-codex-in-25-mins-moc.md",
      "title": "learn-99-percent-claude-and-codex-in-25-mins-moc",
      "link_count": 0,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "people-moc.md",
      "title": "\ud83d\udc65 People Map of Content",
      "link_count": 1,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "prompt-engineering-moc.md",
      "title": "\ud83e\udde0 Prompt Engineering MOC",
      "link_count": 36,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "python-for-ai-beginner-course-moc.md",
      "title": "Python for AI Beginner Course MOC",
      "link_count": 0,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "study-moc.md",
      "title": "\ud83d\udcda Study Map of Content",
      "link_count": 78,
      "status": "warning",
      "suggestions": []
    },
    {
      "moc_file": "THIS IS WHY PEOPLE HURT YOU.md",
      "title": "THIS IS WHY PEOPLE HURT YOU",
      "link_count": 0,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "tools-moc.md",
      "title": "\ud83d\udee0\ufe0f Tools Map of Content",
      "link_count": 1,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "uncomfortable-truths-2-moc.md",
      "title": "Uncomfortable Truths 2 MOC",
      "link_count": 0,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "warren-buffett-moc.md",
      "title": "Warren Buffett MOC",
      "link_count": 0,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "why-you-are-feeling-stuck-in-your-20s-moc.md",
      "title": "Map of Content \u2014 Why You Are Feeling STUCK In Your 20s",
      "link_count": 0,
      "status": "healthy",
      "suggestions": []
    },
    {
      "moc_file": "yt-moc.md",
      "title": "\ud83d\udcfa YouTube Map of Content",
      "link_count": 23,
      "status": "healthy",
      "suggestions": []
    }
  ]
}
```

---

## File: logs\moc-health.md

```markdown
# MOC Health Log

| Date | Nodes | MOCs | Orphans | Unknown Tags | Duplicate Candidates | Broken Links | Avg Backlinks | Notes |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-07-14 | 0 | 0 | 0 | 0 | 0 | 0 | 0.0 | Initial placeholder |
| 2026-07-14 | 149 | 12 | 15 | 0 | 0 | 0 | 2.90 | rebuild |
| 2026-07-14 | 149 | 12 | 14 | 0 | 0 | 0 | 2.91 | rebuild |
| 2026-07-14 | 156 | 12 | 20 | 0 | 0 | 0 | 2.90 | rebuild |
| 2026-07-14 | 156 | 12 | 14 | 0 | 0 | 0 | 2.96 | rebuild |
| 2026-07-14 | 234 | 12 | 70 | 0 | 0 | 0 | 2.83 | rebuild |
| 2026-07-14 | 234 | 12 | 0 | 0 | 0 | 0 | 4.62 | rebuild |
| 2026-07-14 | 245 | 12 | 0 | 0 | 0 | 0 | 4.61 | rebuild |
| 2026-07-15 | 245 | 12 | 0 | 0 | 0 | 0 | 4.61 | rebuild |
| 2026-07-15 | 245 | 12 | 0 | 0 | 0 | 0 | 8.94 | rebuild |
| 2026-07-15 | 245 | 12 | 0 | 0 | 21 | 6 | 8.94 | rebuild |
| 2026-07-15 | 246 | 12 | 1 | 1 | 21 | 6 | 8.90 | rebuild |
| 2026-07-16 | 261 | 13 | 1 | 2 | 57 | 9 | 8.62 | rebuild |
| 2026-07-16 | 261 | 13 | 5 | 2 | 57 | 9 | 8.62 | rebuild |
| 2026-07-18 | 314 | 15 | 25 | 309 | 94 | 0 | 7.58 | rebuild |

## MOC Size Warnings
- [Warning] MOC 'study-moc.md' has exceeded the soft limit of 50 links (current: 78 links). Consider splitting it.
- [Warning] MOC '48-laws-of-power-moc.md' has exceeded the soft limit of 50 links (current: 73 links). Consider splitting it.
```

---

## File: logs\promotion-candidates.json

```json
{
  "generated_at": "2026-07-19T18:09:17.386998+05:30",
  "mode": "read_only",
  "rubric": {
    "source_backed_and_verified": 2,
    "atomic": 2,
    "reusable": 2,
    "linked": 2,
    "stable_title": 1,
    "not_duplicate": 1
  },
  "decision_thresholds": {
    "automatic_promotion": "score >= 8 and confidence >= 95",
    "suggestion": "score >= 8 and confidence 80\u201394",
    "manual_review": "score 6\u20137",
    "keep_current_state": "score < 6"
  },
  "candidates": [
    {
      "path": "NODES\\agent-loop-architectures.md",
      "title": "Agent Loop Architectures",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable"
      ]
    },
    {
      "path": "NODES\\agent-loop-done-criteria.md",
      "title": "Done Criteria in Agent Loops",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\agent-loop-mechanics.md",
      "title": "Agent Loop Mechanics",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable"
      ]
    },
    {
      "path": "NODES\\ajit-jain-successor.md",
      "title": "Ajit Jain Successor",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\algorithm-design-sequence.md",
      "title": "Algorithm Design Sequence",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "linked"
      ]
    },
    {
      "path": "NODES\\amex-salad-oil-investment.md",
      "title": "AmEx Salad Oil Scandal Investment",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\anne-thorndike-cafeteria-study.md",
      "title": "Anne Thorndike Cafeteria Study",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\apple-investment-case-study.md",
      "title": "Apple Investment Case Study",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\arbitrage-workouts.md",
      "title": "Arbitrage and Workout Investments",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\atomic-habit.md",
      "title": "Atomic Habit",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "atomic",
        "reusable",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\authority-bias-investing.md",
      "title": "Authority Bias in Investing",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\availability-bias-investing.md",
      "title": "Availability Bias in Investing",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\bayesian-decision-making.md",
      "title": "Bayesian Decision Making",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\be-mentally-strong.md",
      "title": "Be mentally strong",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\beating-the-odds-when-things-get-hard.md",
      "title": "Beating the odds when things get hard",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\benjamin-moore-acquisition.md",
      "title": "Benjamin Moore Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\berkshire-hathaway-acquisition.md",
      "title": "Berkshire Hathaway Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\berkshire-hathaway-energy.md",
      "title": "Berkshire Hathaway Energy",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\berkshire-insurance-businesses.md",
      "title": "Berkshire's Insurance Float",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\berkshire-shareholder-letters.md",
      "title": "Berkshire Shareholder Letters",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\bias-from-association.md",
      "title": "Bias from Association",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\bill-gates-friendship.md",
      "title": "Bill Gates Friendship",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\bismarck-realpolitik.md",
      "title": "Otto von Bismarck and Realpolitik",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\blue-chip-stamps-investment.md",
      "title": "Blue Chip Stamps Investment",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\bnsf-railway-acquisition.md",
      "title": "BNSF Railway Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\books-cheatsheet.md",
      "title": "\ud83d\udcd6 Books Cheatsheet: The Duality of Habits & Power",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\brain-as-a-prediction-machine.md",
      "title": "Brain as a Prediction Machine",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\brian-clark-fingernail-biting.md",
      "title": "Brian Clark Fingernail Biting Example",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\bryan-harris-habit-contract.md",
      "title": "Bryan Harris Habit Contract",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\buffett-childhood-entrepreneurship.md",
      "title": "Warren Buffett's Childhood Entrepreneurship",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\buffett-decision-making-framework.md",
      "title": "Warren Buffett's Decision-Making Framework",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\buffett-delegation-model.md",
      "title": "Warren Buffett's Delegation Model",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\buffett-education-and-graham-influence.md",
      "title": "Warren Buffett's Education and Benjamin Graham's Influence",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\buffett-foundation.md",
      "title": "Buffett Foundation",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\buffett-frugal-lifestyle.md",
      "title": "Warren Buffett's Frugality",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\buffett-reading-habit.md",
      "title": "Warren Buffett's Reading Habit",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\building-resilience-and-grit.md",
      "title": "Building resilience and grit",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\bypass-ask-permissions-mode.md",
      "title": "Bypass Ask Permissions Mode",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\capital-allocation.md",
      "title": "Rational Capital Allocation",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\capital-intensity.md",
      "title": "Low Capital Intensity",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\cardinal-rule-of-behavior-change.md",
      "title": "The Cardinal Rule of Behavior Change",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\cash-register-automation.md",
      "title": "Cash Register Automation",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\cesare-borgia.md",
      "title": "Cesare Borgia",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\charlie-munger-influence-on-buffett.md",
      "title": "Charlie Munger's Influence on Warren Buffett",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\cigar-butt-investing.md",
      "title": "Cigar Butt Investing",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\circle-of-competence.md",
      "title": "Circle of Competence Heuristic",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\citizen-exit-vs-voice.md",
      "title": "Citizen Exit vs Voice",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "reusable"
      ]
    },
    {
      "path": "NODES\\claude-second-brain-levels.md",
      "title": "Every Level of a Claude Second Brain Explained",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\clayton-homes-acquisition.md",
      "title": "Clayton Homes Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\coca-cola-investment-case-study.md",
      "title": "Coca-Cola Investment Case Study",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\commitment-consistency-bias.md",
      "title": "Commitment and Consistency Bias",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\commitment-devices.md",
      "title": "Commitment Devices",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\compounding-interest.md",
      "title": "Long-Term Compounding",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\con-artist-yellow-kid-weil.md",
      "title": "Joseph 'Yellow Kid' Weil",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\contrast-effect-bias.md",
      "title": "Contrast Effect Bias",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\court-power.md",
      "title": "Court Power",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\dairy-queen-acquisition.md",
      "title": "Dairy Queen Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\dealing-with-failure-and-bouncing-back.md",
      "title": "Dealing with failure and bouncing back",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\debt-aversion-principle.md",
      "title": "Debt Aversion Principle",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\decisive-moments.md",
      "title": "Decisive Moments",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\delayed-return-environment.md",
      "title": "Delayed-Return Environment",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\delete-before-optimize.md",
      "title": "Delete Before Optimize",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "linked",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\delete-then-optimize-loop.md",
      "title": "Delete-Then-Optimize Loop",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\dempster-mill-investment.md",
      "title": "Dempster Mill Investment",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\developing-mental-toughness.md",
      "title": "Developing mental toughness",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\dexter-shoe-investment-mistake.md",
      "title": "Dexter Shoe Acquisition Mistake",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\diderot-effect.md",
      "title": "The Diderot Effect",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\disliking-hating-tendency.md",
      "title": "Disliking and Hating Tendency",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\dopamine-driven-feedback-loop.md",
      "title": "The Dopamine-Driven Feedback Loop",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\e20-fuel-policy-india.md",
      "title": "E20 Fuel Policy in India",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\economic-moat.md",
      "title": "Concept of the Economic Moat",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\elon-musk-childhood.md",
      "title": "Elon Musk Childhood",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\elon-musk-education.md",
      "title": "Elon Musk Education",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\elon-musk-hiring-philosophy.md",
      "title": "Evidence of Exceptional Ability Hiring",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\elon-musk-neuralink.md",
      "title": "Neuralink Mission",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\elon-musk-spacex-founding.md",
      "title": "Elon Musk SpaceX Founding",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\elon-musk-starlink.md",
      "title": "Starlink Business Strategy",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\elon-musk-tesla-founding.md",
      "title": "Elon Musk Tesla Founding",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\elon-musk-the-boring-company.md",
      "title": "The Boring Company Concept",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\elon-musk-xai.md",
      "title": "xAI Founding",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\elon-musk-xcom-paypal.md",
      "title": "Elon Musk X.com PayPal",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\elon-musk-zip2.md",
      "title": "Elon Musk Zip2",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\emotional-healing-and-moving-forward.md",
      "title": "Emotional healing and moving forward",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\emotional-strength.md",
      "title": "Emotional strength",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\environment-design.md",
      "title": "Environment Design",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\environment-priming.md",
      "title": "Environment Priming",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\environment-variables-python.md",
      "title": "Environment Variables in Python",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\estate-tax-support.md",
      "title": "Estate Tax Support",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\ethanol-blending-economic-inefficiency.md",
      "title": "Economic Inefficiencies of Ethanol Blending",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\external-code-review-guardrails.md",
      "title": "External Code Review Guardrails",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable"
      ]
    },
    {
      "path": "NODES\\failure-is-innovation-required.md",
      "title": "Failure Is Innovation Required",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "linked"
      ]
    },
    {
      "path": "NODES\\fermi-estimation.md",
      "title": "Fermi Estimation",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\fewshot-vs-zeroshot-prompting.md",
      "title": "Few-Shot vs Zero-Shot Prompting",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\finally-agent-loops-clearly-explained-cheatsheet.md",
      "title": "Cheatsheet \u2014 Finally. Agent Loops Clearly Explained",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\finding-your-inner-strength.md",
      "title": "Finding your inner strength",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\first-principles-build-rule.md",
      "title": "First Principles Build Rule",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "linked"
      ]
    },
    {
      "path": "NODES\\first-principles-prompting.md",
      "title": "First Principles Prompting",
      "score": 10,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\first-principles-thinking.md",
      "title": "First Principles Thinking",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "linked",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\five-twenty-five-rule.md",
      "title": "The Five-Twenty-Five Rule",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\flightsafety-acquisition.md",
      "title": "FlightSafety Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\fruit-of-the-loom-acquisition.md",
      "title": "Fruit of the Loom Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\geeks-bearing-formulas.md",
      "title": "Geeks Bearing Formulas",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\geico-acquisition.md",
      "title": "GEICO Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\gen-re-acquisition.md",
      "title": "General Reinsurance Acquisition",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\genetics-and-environment.md",
      "title": "Genetics and Environment",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\gillette-investment.md",
      "title": "Gillette Investment",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\git-version-control-system.md",
      "title": "Git Version Control System",
      "score": 10,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\giving-pledge.md",
      "title": "The Giving Pledge",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\goldilocks-rule.md",
      "title": "Goldilocks Rule",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\greg-abel-successor.md",
      "title": "Greg Abel Successor",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\growth-mindset.md",
      "title": "Growth mindset",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\habit-contracts.md",
      "title": "Habit Contracts",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "atomic",
        "reusable",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\habit-loop.md",
      "title": "Habit Loop",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\habit-stacking.md",
      "title": "Habit Stacking Method",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\habit-tracking.md",
      "title": "Habit Tracking",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "atomic",
        "reusable",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\habits-plus-deliberate-practice.md",
      "title": "Habits Plus Deliberate Practice",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable"
      ]
    },
    {
      "path": "NODES\\habits-scorecard.md",
      "title": "Habits Scorecard",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\haile-selassie-court.md",
      "title": "Haile Selassie's Court of Dependency",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\hebbs-law.md",
      "title": "Hebb's Law",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\hell-yes-or-no-filter.md",
      "title": "Hell Yes or No Filter",
      "score": 10,
      "confidence": 96,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\honesty-expensive-gift.md",
      "title": "Honesty is an Expensive Gift",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\howard-buffett-influence.md",
      "title": "Howard Buffett's Influence",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\hyperbolic-discounting.md",
      "title": "Hyperbolic Discounting in Finance",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\identity-based-habits.md",
      "title": "Identity-based Habits",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable"
      ]
    },
    {
      "path": "NODES\\idiot-index.md",
      "title": "Idiot Index",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\immediate-return-environment.md",
      "title": "Immediate-Return Environment",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\implementation-intentions.md",
      "title": "Implementation Intentions",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\interactive-python-jupyter.md",
      "title": "Interactive Python with Jupyter",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\intrinsic-value.md",
      "title": "Concept of Intrinsic Value",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\inversion-mental-model.md",
      "title": "Inversion Principle",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\james-clear-injury-recovery.md",
      "title": "James Clear Injury Recovery",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\jerry-uelsmann-photography.md",
      "title": "Jerry Uelsmann Photography Experiment",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\keep-moving-heuristic.md",
      "title": "Keep Moving Heuristic",
      "score": 10,
      "confidence": 96,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\law-01-never-outshine-the-master.md",
      "title": "Never Outshine the Master",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-02-never-trust-friends-use-enemies.md",
      "title": "Never Put Too Much Trust in Friends, Learn How to Use Enemies",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-03-conceal-your-intentions.md",
      "title": "Conceal Your Intentions",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-04-say-less-than-necessary.md",
      "title": "Always Say Less Than Necessary",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-05-guard-your-reputation.md",
      "title": "So Much Depends on Reputation \u2014 Guard It with Your Life",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-06-court-attention.md",
      "title": "Court Attention at All Costs",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-07-get-others-to-do-the-work.md",
      "title": "Get Others to Do the Work for You, but Always Take the Credit",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-08-make-others-come-to-you.md",
      "title": "Make Other People Come to You \u2014 Use Bait if Necessary",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-09-win-through-actions.md",
      "title": "Win Through Your Actions, Never Through Argument",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-10-avoid-the-unhappy-and-unlucky.md",
      "title": "Infection: Avoid the Unhappy and Unlucky",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-11-keep-people-dependent.md",
      "title": "Learn to Keep People Dependent on You",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-12-selective-honesty-to-disarm.md",
      "title": "Use Selective Honesty and Generosity to Disarm Your Victim",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-13-appeal-to-self-interest.md",
      "title": "When Asking for Help, Appeal to Self-Interest, Never to Mercy or Gratitude",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-14-pose-as-friend-work-as-spy.md",
      "title": "Pose as a Friend, Work as a Spy",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-15-crush-your-enemy-totally.md",
      "title": "Crush Your Enemy Totally",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-16-use-absence.md",
      "title": "Use Absence to Increase Respect and Honor",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-17-cultivate-unpredictability.md",
      "title": "Keep Others in Suspended Terror \u2014 Cultivate an Air of Unpredictability",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-18-isolation-is-dangerous.md",
      "title": "Do Not Build Fortresses to Protect Yourself \u2014 Isolation is Dangerous",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-19-know-who-youre-dealing-with.md",
      "title": "Know Who You're Dealing With \u2014 Do Not Offend the Wrong Person",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-20-do-not-commit-to-anyone.md",
      "title": "Do Not Commit to Anyone",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-21-play-a-sucker.md",
      "title": "Play a Sucker to Catch a Sucker \u2014 Seem Dumber Than Your Mark",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-22-surrender-tactic.md",
      "title": "Use the Surrender Tactic \u2014 Transform Weakness into Power",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-23-concentrate-your-forces.md",
      "title": "Concentrate Your Forces",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-24-play-the-perfect-courtier.md",
      "title": "Play the Perfect Courtier",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-25-recreate-yourself.md",
      "title": "Re-Create Yourself",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-26-keep-your-hands-clean.md",
      "title": "Keep Your Hands Clean",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-27-create-a-cultlike-following.md",
      "title": "Play on People's Need to Believe to Create a Cultlike Following",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-28-enter-action-with-boldness.md",
      "title": "Enter Action with Boldness",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-29-plan-to-the-end.md",
      "title": "Plan All the Way to the End",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-30-make-accomplishments-seem-effortless.md",
      "title": "Make Your Accomplishments Seem Effortless",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-31-control-the-options.md",
      "title": "Control the Options \u2014 Get Others to Play with the Cards You Deal",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-32-play-to-peoples-fantasies.md",
      "title": "Play to People's Fantasies",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-33-discover-each-mans-thumbscrew.md",
      "title": "Discover Each Man's Thumbscrew",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-34-be-royal.md",
      "title": "Be Royal in Your Own Fashion \u2014 Act Like a King to Be Treated Like One",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-35-master-the-art-of-timing.md",
      "title": "Master the Art of Timing",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\law-36-disdain-things-you-cannot-have.md",
      "title": "Disdain Things You Cannot Have \u2014 Ignoring Them is the Best Revenge",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-37-create-compelling-spectacles.md",
      "title": "Create Compelling Spectacles",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-38-think-as-you-like-behave-like-others.md",
      "title": "Think as You Like but Behave Like Others",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-39-stir-up-waters.md",
      "title": "Stir Up Waters to Catch Fish",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-40-despise-the-free-lunch.md",
      "title": "Despise the Free Lunch",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-41-avoid-stepping-into-great-mans-shoes.md",
      "title": "Avoid Stepping into a Great Man's Shoes",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-42-strike-the-shepherd.md",
      "title": "Strike the Shepherd and the Sheep Will Scatter",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-43-work-on-hearts-and-minds.md",
      "title": "Work on the Hearts and Minds of Others",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-44-mirror-effect.md",
      "title": "Disarm and Infuriate with the Mirror Effect",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-45-preach-change-reform-slowly.md",
      "title": "Preach the Need for Change, but Never Reform Too Much at Once",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-46-never-appear-too-perfect.md",
      "title": "Never Appear Too Perfect",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-47-learn-when-to-stop.md",
      "title": "Do Not Go Past the Mark You Aimed For \u2014 In Victory, Learn When to Stop",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-48-assume-formlessness.md",
      "title": "Assume Formlessness",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\law-of-least-effort.md",
      "title": "Law of Least Effort",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\learn-99-percent-claude-and-codex-in-25-mins-cheatsheet.md",
      "title": "Cheatsheet \u2014 Learn 99% Claude & Codex in 25 mins",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\liking-loving-tendency.md",
      "title": "Liking and Loving Tendency",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\local-filesystem-agent-advantage.md",
      "title": "Local File System Access Advantage",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\lollapalooza-effect.md",
      "title": "Lollapalooza Effect",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\long-term-time-horizon.md",
      "title": "Long-Term Time Horizon",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "linked"
      ]
    },
    {
      "path": "NODES\\loop-engineering.md",
      "title": "Loop Engineering",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable"
      ]
    },
    {
      "path": "NODES\\loop-verification-importance.md",
      "title": "Importance of the Verification Step",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\louis-xiv-versailles.md",
      "title": "Louis XIV and Versailles",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\lubrizol-acquisition.md",
      "title": "Lubrizol Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\machiavelli-and-the-prince.md",
      "title": "Machiavelli and The Prince",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\make-it-invisible.md",
      "title": "Make It Invisible",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\make-money-while-you-sleep.md",
      "title": "Make Money While You Sleep",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\mao-zedong-formlessness.md",
      "title": "Mao Zedong's Guerrilla Formlessness",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\margin-of-safety.md",
      "title": "Margin of Safety Principle",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\marginal-gains-british-cycling.md",
      "title": "Marginal Gains British Cycling",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\marmon-group-acquisition.md",
      "title": "Marmon Group Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\moral-nobility-as-tactical-vulnerability.md",
      "title": "Moral Nobility as Tactical Vulnerability",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\moral-sacrifice-social-protests.md",
      "title": "Moral Sacrifice in Social Protests",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\motivation-and-inspiration.md",
      "title": "Motivation and inspiration",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\motivation-ritual.md",
      "title": "Motivation Ritual",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\musk-ai-risk-philosophy.md",
      "title": "AI Existential Risk Philosophy",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\musk-communication-pattern.md",
      "title": "Direct Communication Mandate",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\musk-mars-colonization-vision.md",
      "title": "Mars Colonization Mission",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\musk-on-failure-quote.md",
      "title": "Failure Is Not An Option \u2014 It Is Built In",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\musk-on-first-principles-quote.md",
      "title": "Reasoning from First Principles",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\musk-time-blocking-habit.md",
      "title": "Time Blocking Productivity Method",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\musk-working-hours-expectation.md",
      "title": "Leadership by Immersion Expectation",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\national-indemnity-acquisition.md",
      "title": "National Indemnity Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\netjets-acquisition.md",
      "title": "NetJets Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\nicolas-fouquet-downfall.md",
      "title": "The Downfall of Nicolas Fouquet",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\nols-tax-shield.md",
      "title": "Net Operating Loss Tax Shield",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\one-percent-better-every-day.md",
      "title": "One Percent Better Every Day",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\operating-leverage.md",
      "title": "Concept of Operating Leverage",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\opportunity-cost-heuristic.md",
      "title": "Opportunity Cost Heuristic",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\overcoming-obstacles-and-adversity.md",
      "title": "Overcoming obstacles and adversity",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\owner-earnings.md",
      "title": "Concept of Owner Earnings",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\pampered-chef-acquisition.md",
      "title": "Pampered Chef Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\pavlovian-association.md",
      "title": "Pavlovian Association in Branding",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\personal-growth-and-development.md",
      "title": "Personal growth and development",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\phelps-and-el-guerrouj.md",
      "title": "Phelps and El Guerrouj",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\phil-carret-influence.md",
      "title": "Phil Carret Influence",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\physics-constraint-test.md",
      "title": "Physics Constraint Test",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\pilot-flying-j-acquisition.md",
      "title": "Pilot Flying J Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\pkm-development-phases.md",
      "title": "PKM Development Phases",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\plateau-of-latent-potential.md",
      "title": "Plateau of Latent Potential",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\pointing-and-calling.md",
      "title": "Pointing-and-Calling",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\poison-of-optionality.md",
      "title": "Poison of Optionality",
      "score": 10,
      "confidence": 96,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\polgar-sisters-chess.md",
      "title": "Polgar Sisters Chess",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\power-abhors-a-vacuum.md",
      "title": "Power Abhors a Vacuum",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable"
      ]
    },
    {
      "path": "NODES\\power-as-a-social-game.md",
      "title": "Power as an Amoral Social Game",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\powerful-mindset-shifts.md",
      "title": "Powerful mindset shifts",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable"
      ]
    },
    {
      "path": "NODES\\precision-castparts-acquisition.md",
      "title": "Precision Castparts Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\premacks-principle.md",
      "title": "Premack's Principle",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\price-vs-value.md",
      "title": "Price is What You Pay Value is What You Get",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\prompt-combination-codes.md",
      "title": "Prompt Combination Codes",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\prompt-honesty-codes.md",
      "title": "Prompt Honesty and Directness Codes",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\prompt-learning-codes.md",
      "title": "Prompt Learning Codes",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\prompt-meta-announce.md",
      "title": "Prompt Meta Announce Code",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\prompt-output-control-codes.md",
      "title": "Prompt Output Control Codes",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\prompt-reasoning-codes.md",
      "title": "Prompt Reasoning and Simulation Codes",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\prompt-simplification-codes.md",
      "title": "Prompt Simplification Codes",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\prompt-strategy-codes.md",
      "title": "Prompt Strategy and Founder Codes",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\prompt-thinking-codes.md",
      "title": "Prompt Thinking Mode Codes",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\prompt-voice-format-codes.md",
      "title": "Prompt Voice and Format Codes",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\prototype-then-iterate.md",
      "title": "Prototype-Then-Iterate",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\python-for-ai-beginner-course-cheatsheet.md",
      "title": "Cheatsheet \u2014 Python for AI Beginner Course",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\python-object-oriented-programming.md",
      "title": "Python Object-Oriented Programming",
      "score": 10,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\python-package-installer.md",
      "title": "Python Package Installer (pip)",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\python-programming-language.md",
      "title": "Python Programming Language",
      "score": 10,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\python-variable-scope.md",
      "title": "Python Variable Scope",
      "score": 10,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\python-virtual-environment.md",
      "title": "Python Virtual Environment",
      "score": 10,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\queen-elizabeth-i-power-image.md",
      "title": "Queen Elizabeth I's Power Image",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\question-every-requirement.md",
      "title": "Question Every Requirement",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\quiet-thinking-habit.md",
      "title": "Quiet Thinking Habit",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\quote-genes-predispose.md",
      "title": "Genes Predispose but Do Not Determine",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\quote-james-clear-clarity.md",
      "title": "James Clear on Clarity",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\quote-what-is-rewarded-is-repeated.md",
      "title": "What is Rewarded is Repeated",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\race-prompt-framework.md",
      "title": "RACE Prompt Framework",
      "score": 10,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\reasoning-by-analogy.md",
      "title": "Reasoning by Analogy",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\reciprocity-tendency.md",
      "title": "Reciprocity Tendency",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\reclaiming-your-personal-power.md",
      "title": "Reclaiming your personal power",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable"
      ]
    },
    {
      "path": "NODES\\red-team-technique.md",
      "title": "Red Team Technique",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\reflection-and-review.md",
      "title": "Reflection and Review",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\reframing-hard-habits.md",
      "title": "Reframing Hard Habits",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\regret-minimization-framework.md",
      "title": "Regret Minimization Framework",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\reinforcement.md",
      "title": "Reinforcement Principle",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\reinvestment-moat.md",
      "title": "Reinvestment Moat vs Legacy Moat",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\relationships.md",
      "title": "Relationships",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\reputation-protection-heuristic.md",
      "title": "Reputation Protection Heuristic",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\reputation-twenty-years-to-build.md",
      "title": "Reputation Durability Principle",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\return-on-equity.md",
      "title": "Return on Equity Metric",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\risk-free-rate-hurdle.md",
      "title": "Risk-Free Rate Benchmark",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\roger-fisher-nuclear-button.md",
      "title": "Roger Fisher Nuclear Button",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\rolls-royce-subway-analogy.md",
      "title": "Rolls-Royce and Subway Analogy",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\ruff-linter-formatter.md",
      "title": "Ruff Linter and Formatter",
      "score": 9,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "stable_title"
      ]
    },
    {
      "path": "NODES\\rule-one-never-lose-money.md",
      "title": "Rule Number One",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\safeguard-soap-handwashing-study.md",
      "title": "Safeguard Soap Handwashing Study",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\salomon-brothers-intervention.md",
      "title": "Salomon Brothers Crisis Intervention",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\sanborn-map-investment.md",
      "title": "Sanborn Map Company Investment",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\scarcity-bias-investing.md",
      "title": "Scarcity Bias in Investing",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\sees-candies-investment-case-study.md",
      "title": "See's Candies Case Study",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\self-fixing-code-loops.md",
      "title": "Self-Fixing Code Loops",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable"
      ]
    },
    {
      "path": "NODES\\self-improvement-strategies.md",
      "title": "Self-improvement strategies",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\shaw-industries-acquisition.md",
      "title": "Shaw Industries Acquisition",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\skinner-box-variable-rewards.md",
      "title": "Skinner Box Variable Rewards",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\social-norms-and-habits.md",
      "title": "Social Norms and Habits",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable"
      ]
    },
    {
      "path": "NODES\\social-proof-bias.md",
      "title": "Social Proof in Investing",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\socratic-prompting.md",
      "title": "Socratic Prompting",
      "score": 10,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\solomon-asch-conformity.md",
      "title": "Solomon Asch Conformity Experiment",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\sorites-paradox.md",
      "title": "Sorites Paradox",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\spacex-falcon-1-failures.md",
      "title": "SpaceX Falcon 1 Launch Failures",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\special-situations.md",
      "title": "Special Situations Investing",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\speed-of-iteration-principle.md",
      "title": "Speed of Iteration Principle",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\sprezzatura.md",
      "title": "Sprezzatura",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\state-intervention-hunger-strikes.md",
      "title": "State Intervention in Hunger Strikes",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\state-tactics-protest-containment.md",
      "title": "State Tactics for Protest Containment",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\steelman-technique.md",
      "title": "Steelman Technique",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\strategic-deception.md",
      "title": "Strategic Deception",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\supernormal-stimulus.md",
      "title": "Supernormal Stimulus",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\susan-buffett-influence.md",
      "title": "Susan Thompson Buffett's Influence",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\systems-vs-goals.md",
      "title": "Systems vs Goals",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\talent-density-principle.md",
      "title": "Talent Density Principle",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\talleyrand-survival.md",
      "title": "The Diplomatic Survival of Talleyrand",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\ted-weschler-successor.md",
      "title": "Ted Weschler Successor",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\temptation-bundling.md",
      "title": "Temptation Bundling",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\tesla-production-hell.md",
      "title": "Tesla Model 3 Production Hell",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\the-courtier-archetype.md",
      "title": "The Courtier Archetype",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\the-futility-of-gratitude.md",
      "title": "The Futility of Gratitude",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "linked",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\the-illusion-of-equality.md",
      "title": "The Illusion of Equality",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "linked",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\the-law-of-reversal.md",
      "title": "The Law of Reversal",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\the-myth-of-sincerity.md",
      "title": "The Myth of Sincerity",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": false
      },
      "missing": [
        "reusable",
        "linked",
        "not_duplicate"
      ]
    },
    {
      "path": "NODES\\the-reality-of-human-envy.md",
      "title": "The Reality of Human Envy",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\tide-goes-out-naked-swimming.md",
      "title": "Swimming Naked Heuristic",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\todd-combs-successor.md",
      "title": "Todd Combs Successor",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\tom-murphy-influence.md",
      "title": "Tom Murphy Influence",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\trent-dyrsmid-paperclips.md",
      "title": "Trent Dyrsmid Paper Clips",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\twenty-punches-card-rule.md",
      "title": "Twenty Punches Card Rule",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\two-minute-rule.md",
      "title": "Two-Minute Rule",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\two-slot-punch-card.md",
      "title": "Two Slot Punch Card Heuristic",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\two-step-identity-change.md",
      "title": "Two-Step Process to Identity Change",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\two-way-vs-one-way-doors.md",
      "title": "Two-Way vs One-Way Doors",
      "score": 10,
      "confidence": 96,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\uncomfortable-truths-2-cheatsheet.md",
      "title": "Uncomfortable Truths 2 Cheatsheet",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": false,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "source_backed_and_verified",
        "reusable"
      ]
    },
    {
      "path": "NODES\\unemployment-optionality-paradox.md",
      "title": "Unemployment Optionality Paradox",
      "score": 10,
      "confidence": 96,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\us-air-investment-mistake.md",
      "title": "US Air Investment Mistake",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\uv-package-manager.md",
      "title": "Uv Package Manager",
      "score": 10,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\value-investing.md",
      "title": "Value Investing Philosophy",
      "score": 5,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\vertical-integration-calculus.md",
      "title": "Vertical Integration Calculus",
      "score": 8,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "linked"
      ]
    },
    {
      "path": "NODES\\victor-hugo-closet-lock.md",
      "title": "Victor Hugo Closet Lock",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\vietnam-veterans-heroin-study.md",
      "title": "Vietnam Veterans Heroin Study",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    },
    {
      "path": "NODES\\vs-code-workspace.md",
      "title": "VS Code Workspace",
      "score": 10,
      "confidence": 95,
      "decision": "promote",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": true,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": []
    },
    {
      "path": "NODES\\walter-schloss-contrast.md",
      "title": "Walter Schloss Comparison",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\warren-buffett-biography.md",
      "title": "Warren Buffett Biography",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\warren-buffett-quotes.md",
      "title": "Selected Warren Buffett Quotes",
      "score": 7,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\washington-post-investment.md",
      "title": "Washington Post Investment",
      "score": 6,
      "confidence": 95,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": true,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable"
      ]
    },
    {
      "path": "NODES\\wesco-financial-acquisition.md",
      "title": "Wesco Financial",
      "score": 3,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\why-you-are-feeling-stuck-in-your-20s-cheatsheet.md",
      "title": "Cheatsheet \u2014 Why You Are Feeling STUCK In Your 20s",
      "score": 7,
      "confidence": 96,
      "decision": "manual_review",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": true,
        "reusable": false,
        "linked": true,
        "stable_title": false,
        "not_duplicate": true
      },
      "missing": [
        "reusable",
        "stable_title"
      ]
    },
    {
      "path": "NODES\\you-do-not-rise-to-the-level-of-your-goals.md",
      "title": "You Do Not Rise to the Level of Your Goals",
      "score": 4,
      "confidence": 95,
      "decision": "keep_current_state",
      "criteria": {
        "source_backed_and_verified": true,
        "atomic": false,
        "reusable": false,
        "linked": false,
        "stable_title": true,
        "not_duplicate": true
      },
      "missing": [
        "atomic",
        "reusable",
        "linked"
      ]
    }
  ]
}
```

---

