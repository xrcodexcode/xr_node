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

# Folder: .antigravity/reports

## File: reports\broken-links.md

```markdown
# Broken Links

Generated by automation.
```

---

## File: reports\decay-report.md

```markdown
# Knowledge Decay Report

**Generated**: 2026-07-19 12:39 UTC  
**Mode**: DRY RUN  
**Notes with decay tracking**: updated 0 (of those needing it)

## Critical & High Priority (Overdue Reviews)

No overdue notes. ✅

## Expiring Soon (Next 30 Days)

No notes expiring in the next 30 days. ✅

## Incubation Timeouts

No incubating notes past timeout thresholds. ✅

---
_Governed by `.antigravity/rules/quality/knowledge-decay.md`. `confidence` field is never automatically modified._
_Run with `--apply` to write `review_priority` and `stale_after` updates to files._
```

---

## File: reports\duplicate-candidates.md

```markdown
# Duplicate Candidates Report

Last scanned on 339 notes.

| Note A | Note B | Similarity Reason | Action Suggested |
| :--- | :--- | :--- | :--- |
| [[atomic-habit\|Atomic Habit]] | [[habit-contracts\|Habit Contracts]] | Shared tags (productivity, habits, book) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[atomic-habit\|Atomic Habit]] | [[habit-loop\|Habit Loop]] | Shared tags (productivity, habits, book) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[atomic-habit\|Atomic Habit]] | [[habit-tracking\|Habit Tracking]] | Shared tags (productivity, habits, book) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[authority-bias-investing\|Authority Bias in Investing]] | [[availability-bias-investing\|Availability Bias in Investing]] | Shared tags (business, psychology) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[authority-bias-investing\|Authority Bias in Investing]] | [[scarcity-bias-investing\|Scarcity Bias in Investing]] | Shared tags (business, psychology) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[availability-bias-investing\|Availability Bias in Investing]] | [[scarcity-bias-investing\|Scarcity Bias in Investing]] | Shared tags (business, psychology) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[delete-before-optimize\|Delete Before Optimize]] | [[delete-then-optimize-loop\|Delete-Then-Optimize Loop]] | Shared tags (elon-musk, engineering) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-childhood\|Elon Musk Childhood]] | [[elon-musk-education\|Elon Musk Education]] | Shared tags (biography, elon-musk) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[elon-musk-childhood\|Elon Musk Childhood]] | [[elon-musk-spacex-founding\|Elon Musk SpaceX Founding]] | Shared tags (biography, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-childhood\|Elon Musk Childhood]] | [[elon-musk-tesla-founding\|Elon Musk Tesla Founding]] | Shared tags (biography, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-childhood\|Elon Musk Childhood]] | [[elon-musk-xcom-paypal\|Elon Musk X.com PayPal]] | Shared tags (biography, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-childhood\|Elon Musk Childhood]] | [[elon-musk-zip2\|Elon Musk Zip2]] | Shared tags (biography, elon-musk) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[elon-musk-education\|Elon Musk Education]] | [[elon-musk-spacex-founding\|Elon Musk SpaceX Founding]] | Shared tags (biography, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-education\|Elon Musk Education]] | [[elon-musk-tesla-founding\|Elon Musk Tesla Founding]] | Shared tags (biography, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-education\|Elon Musk Education]] | [[elon-musk-xcom-paypal\|Elon Musk X.com PayPal]] | Shared tags (biography, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-education\|Elon Musk Education]] | [[elon-musk-zip2\|Elon Musk Zip2]] | Shared tags (biography, elon-musk) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[elon-musk-neuralink\|Neuralink Mission]] | [[elon-musk-spacex-founding\|Elon Musk SpaceX Founding]] | Shared tags (business, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-neuralink\|Neuralink Mission]] | [[elon-musk-starlink\|Starlink Business Strategy]] | Shared tags (business, elon-musk) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[elon-musk-neuralink\|Neuralink Mission]] | [[elon-musk-tesla-founding\|Elon Musk Tesla Founding]] | Shared tags (business, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-neuralink\|Neuralink Mission]] | [[elon-musk-the-boring-company\|The Boring Company Concept]] | Shared tags (business, elon-musk, innovation) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[elon-musk-neuralink\|Neuralink Mission]] | [[elon-musk-xai\|xAI Founding]] | Shared tags (business, elon-musk) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[elon-musk-neuralink\|Neuralink Mission]] | [[elon-musk-xcom-paypal\|Elon Musk X.com PayPal]] | Shared tags (business, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-neuralink\|Neuralink Mission]] | [[elon-musk-zip2\|Elon Musk Zip2]] | Shared tags (business, elon-musk) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[elon-musk-spacex-founding\|Elon Musk SpaceX Founding]] | [[elon-musk-starlink\|Starlink Business Strategy]] | Shared tags (business, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-spacex-founding\|Elon Musk SpaceX Founding]] | [[elon-musk-tesla-founding\|Elon Musk Tesla Founding]] | High filename similarity (60% word overlap) | Evaluate if they cover the same concept. |
| [[elon-musk-spacex-founding\|Elon Musk SpaceX Founding]] | [[elon-musk-xai\|xAI Founding]] | Shared tags (business, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-spacex-founding\|Elon Musk SpaceX Founding]] | [[elon-musk-xcom-paypal\|Elon Musk X.com PayPal]] | Shared tags (business, biography, elon-musk) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[elon-musk-spacex-founding\|Elon Musk SpaceX Founding]] | [[elon-musk-zip2\|Elon Musk Zip2]] | Shared tags (business, biography, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-starlink\|Starlink Business Strategy]] | [[elon-musk-tesla-founding\|Elon Musk Tesla Founding]] | Shared tags (business, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-starlink\|Starlink Business Strategy]] | [[elon-musk-the-boring-company\|The Boring Company Concept]] | Shared tags (business, elon-musk) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[elon-musk-starlink\|Starlink Business Strategy]] | [[elon-musk-xai\|xAI Founding]] | Shared tags (business, elon-musk) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[elon-musk-starlink\|Starlink Business Strategy]] | [[elon-musk-xcom-paypal\|Elon Musk X.com PayPal]] | Shared tags (business, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-starlink\|Starlink Business Strategy]] | [[elon-musk-zip2\|Elon Musk Zip2]] | Shared tags (business, elon-musk) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[elon-musk-tesla-founding\|Elon Musk Tesla Founding]] | [[elon-musk-xai\|xAI Founding]] | Shared tags (business, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-tesla-founding\|Elon Musk Tesla Founding]] | [[elon-musk-xcom-paypal\|Elon Musk X.com PayPal]] | Shared tags (business, biography, elon-musk) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[elon-musk-tesla-founding\|Elon Musk Tesla Founding]] | [[elon-musk-zip2\|Elon Musk Zip2]] | Shared tags (business, biography, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-the-boring-company\|The Boring Company Concept]] | [[elon-musk-xai\|xAI Founding]] | Shared tags (business, elon-musk) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[elon-musk-the-boring-company\|The Boring Company Concept]] | [[elon-musk-zip2\|Elon Musk Zip2]] | Shared tags (business, elon-musk) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[elon-musk-xai\|xAI Founding]] | [[elon-musk-xcom-paypal\|Elon Musk X.com PayPal]] | Shared tags (business, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[elon-musk-xai\|xAI Founding]] | [[elon-musk-zip2\|Elon Musk Zip2]] | Shared tags (business, elon-musk) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[elon-musk-xcom-paypal\|Elon Musk X.com PayPal]] | [[elon-musk-zip2\|Elon Musk Zip2]] | Shared tags (business, biography, elon-musk) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[environment-design\|Environment Design]] | [[environment-priming\|Environment Priming]] | Shared tags (productivity, habits, book) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[first-principles-thinking\|First Principles Thinking]] | [[musk-on-first-principles-quote\|"I think it's important to reason from first principles rather than by analogy. The normal way we conduct our lives is we reason by analogy. You boil things down to the most fundamental truths you can imagine, and then reason up from there."]] | Shared tags (thinking, elon-musk) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[habit-contracts\|Habit Contracts]] | [[habit-loop\|Habit Loop]] | Shared tags (productivity, habits, book) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[habit-contracts\|Habit Contracts]] | [[habit-tracking\|Habit Tracking]] | Shared tags (productivity, habits, book) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[habit-loop\|Habit Loop]] | [[habit-tracking\|Habit Tracking]] | Shared tags (productivity, habits, book) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[law-35-master-the-art-of-timing\|Master the Art of Timing]] | [[the-law-of-reversal\|The Law of Reversal]] | Shared tags (book, power) & filename overlap (37%) | Check if Note B is a subset of Note A. |
| [[law-of-least-effort\|Law of Least Effort]] | [[the-law-of-reversal\|The Law of Reversal]] | Shared tags (study, book) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[musk-on-failure-quote\|"Failure is an option here. If things are not failing, you are not innovating enough."]] | [[musk-on-first-principles-quote\|"I think it's important to reason from first principles rather than by analogy. The normal way we conduct our lives is we reason by analogy. You boil things down to the most fundamental truths you can imagine, and then reason up from there."]] | Shared tags (quote, elon-musk) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-combination-codes\|Prompt Combination Codes]] | [[prompt-honesty-codes\|Prompt Honesty and Directness Codes]] | Shared tags (productivity, llm, processed, ai) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-combination-codes\|Prompt Combination Codes]] | [[prompt-learning-codes\|Prompt Learning Codes]] | Shared tags (productivity, llm, processed, ai) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-combination-codes\|Prompt Combination Codes]] | [[prompt-output-control-codes\|Prompt Output Control Codes]] | Shared tags (productivity, llm, processed, ai) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-combination-codes\|Prompt Combination Codes]] | [[prompt-reasoning-codes\|Prompt Reasoning and Simulation Codes]] | Shared tags (processed, ai, productivity, llm, strategy) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-combination-codes\|Prompt Combination Codes]] | [[prompt-simplification-codes\|Prompt Simplification Codes]] | Shared tags (productivity, llm, processed, ai) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-combination-codes\|Prompt Combination Codes]] | [[prompt-strategy-codes\|Prompt Strategy and Founder Codes]] | Shared tags (processed, ai, productivity, llm, strategy) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-combination-codes\|Prompt Combination Codes]] | [[prompt-thinking-codes\|Prompt Thinking Mode Codes]] | Shared tags (productivity, llm, processed, ai) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-combination-codes\|Prompt Combination Codes]] | [[prompt-voice-format-codes\|Prompt Voice and Format Codes]] | Shared tags (productivity, llm, processed, ai) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-honesty-codes\|Prompt Honesty and Directness Codes]] | [[prompt-learning-codes\|Prompt Learning Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-honesty-codes\|Prompt Honesty and Directness Codes]] | [[prompt-output-control-codes\|Prompt Output Control Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-honesty-codes\|Prompt Honesty and Directness Codes]] | [[prompt-reasoning-codes\|Prompt Reasoning and Simulation Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-honesty-codes\|Prompt Honesty and Directness Codes]] | [[prompt-simplification-codes\|Prompt Simplification Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-honesty-codes\|Prompt Honesty and Directness Codes]] | [[prompt-strategy-codes\|Prompt Strategy and Founder Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-honesty-codes\|Prompt Honesty and Directness Codes]] | [[prompt-thinking-codes\|Prompt Thinking Mode Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-honesty-codes\|Prompt Honesty and Directness Codes]] | [[prompt-voice-format-codes\|Prompt Voice and Format Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-learning-codes\|Prompt Learning Codes]] | [[prompt-output-control-codes\|Prompt Output Control Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-learning-codes\|Prompt Learning Codes]] | [[prompt-reasoning-codes\|Prompt Reasoning and Simulation Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-learning-codes\|Prompt Learning Codes]] | [[prompt-simplification-codes\|Prompt Simplification Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-learning-codes\|Prompt Learning Codes]] | [[prompt-strategy-codes\|Prompt Strategy and Founder Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-learning-codes\|Prompt Learning Codes]] | [[prompt-thinking-codes\|Prompt Thinking Mode Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-learning-codes\|Prompt Learning Codes]] | [[prompt-voice-format-codes\|Prompt Voice and Format Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-output-control-codes\|Prompt Output Control Codes]] | [[prompt-reasoning-codes\|Prompt Reasoning and Simulation Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-output-control-codes\|Prompt Output Control Codes]] | [[prompt-simplification-codes\|Prompt Simplification Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-output-control-codes\|Prompt Output Control Codes]] | [[prompt-strategy-codes\|Prompt Strategy and Founder Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-output-control-codes\|Prompt Output Control Codes]] | [[prompt-thinking-codes\|Prompt Thinking Mode Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-output-control-codes\|Prompt Output Control Codes]] | [[prompt-voice-format-codes\|Prompt Voice and Format Codes]] | Shared tags (processed, ai, productivity, llm, writing, technique) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[prompt-reasoning-codes\|Prompt Reasoning and Simulation Codes]] | [[prompt-simplification-codes\|Prompt Simplification Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-reasoning-codes\|Prompt Reasoning and Simulation Codes]] | [[prompt-strategy-codes\|Prompt Strategy and Founder Codes]] | Shared tags (processed, ai, productivity, llm, technique, strategy) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-reasoning-codes\|Prompt Reasoning and Simulation Codes]] | [[prompt-thinking-codes\|Prompt Thinking Mode Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-reasoning-codes\|Prompt Reasoning and Simulation Codes]] | [[prompt-voice-format-codes\|Prompt Voice and Format Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-simplification-codes\|Prompt Simplification Codes]] | [[prompt-strategy-codes\|Prompt Strategy and Founder Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-simplification-codes\|Prompt Simplification Codes]] | [[prompt-thinking-codes\|Prompt Thinking Mode Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-simplification-codes\|Prompt Simplification Codes]] | [[prompt-voice-format-codes\|Prompt Voice and Format Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-strategy-codes\|Prompt Strategy and Founder Codes]] | [[prompt-thinking-codes\|Prompt Thinking Mode Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (50%) | Check if Note B is a subset of Note A. |
| [[prompt-strategy-codes\|Prompt Strategy and Founder Codes]] | [[prompt-voice-format-codes\|Prompt Voice and Format Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[prompt-thinking-codes\|Prompt Thinking Mode Codes]] | [[prompt-voice-format-codes\|Prompt Voice and Format Codes]] | Shared tags (processed, ai, productivity, llm, technique) & filename overlap (40%) | Check if Note B is a subset of Note A. |
| [[the-futility-of-gratitude\|The Futility of Gratitude]] | [[the-illusion-of-equality\|The Illusion of Equality]] | Shared tags (book, power) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[the-futility-of-gratitude\|The Futility of Gratitude]] | [[the-law-of-reversal\|The Law of Reversal]] | Shared tags (book, power) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[the-futility-of-gratitude\|The Futility of Gratitude]] | [[the-myth-of-sincerity\|The Myth of Sincerity]] | Shared tags (book, psychology, power) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[the-illusion-of-equality\|The Illusion of Equality]] | [[the-law-of-reversal\|The Law of Reversal]] | Shared tags (book, study, power) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[the-illusion-of-equality\|The Illusion of Equality]] | [[the-myth-of-sincerity\|The Myth of Sincerity]] | Shared tags (book, power) & filename overlap (33%) | Check if Note B is a subset of Note A. |
| [[the-law-of-reversal\|The Law of Reversal]] | [[the-myth-of-sincerity\|The Myth of Sincerity]] | Shared tags (book, power) & filename overlap (33%) | Check if Note B is a subset of Note A. |
```

---

## File: reports\graph-analytics.json

```json
{
  "generated_at": "2026-07-19T12:39:34.664751Z",
  "vault_root": "C:\\Users\\offic\\OneDrive\\Desktop\\obsidean\\nexusdb",
  "active_nodes": 339,
  "authority_nodes": [
    {
      "slug": "books-cheatsheet",
      "inbound": 79,
      "title": "Books Cheatsheet"
    },
    {
      "slug": "capital-allocation",
      "inbound": 45,
      "title": "Capital Allocation"
    },
    {
      "slug": "value-investing",
      "inbound": 39,
      "title": "Value Investing"
    },
    {
      "slug": "habit-loop",
      "inbound": 29,
      "title": "Habit Loop"
    },
    {
      "slug": "habit-tracking",
      "inbound": 27,
      "title": "Habit Tracking"
    },
    {
      "slug": "sees-candies-investment-case-study",
      "inbound": 25,
      "title": "Sees Candies Investment Case Study"
    },
    {
      "slug": "identity-based-habits",
      "inbound": 24,
      "title": "Identity Based Habits"
    },
    {
      "slug": "buffett-decision-making-framework",
      "inbound": 24,
      "title": "Buffett Decision Making Framework"
    },
    {
      "slug": "margin-of-safety",
      "inbound": 24,
      "title": "Margin Of Safety"
    },
    {
      "slug": "economic-moat",
      "inbound": 23,
      "title": "Economic Moat"
    }
  ],
  "hub_nodes": [
    {
      "slug": "books-cheatsheet",
      "outbound": 82,
      "title": "Books Cheatsheet"
    },
    {
      "slug": "capital-allocation",
      "outbound": 38,
      "title": "Capital Allocation"
    },
    {
      "slug": "value-investing",
      "outbound": 34,
      "title": "Value Investing"
    },
    {
      "slug": "atomic-habit",
      "outbound": 21,
      "title": "Atomic Habit"
    },
    {
      "slug": "economic-moat",
      "outbound": 20,
      "title": "Economic Moat"
    },
    {
      "slug": "berkshire-shareholder-letters",
      "outbound": 19,
      "title": "Berkshire Shareholder Letters"
    },
    {
      "slug": "buffett-decision-making-framework",
      "outbound": 17,
      "title": "Buffett Decision Making Framework"
    },
    {
      "slug": "apple-investment-case-study",
      "outbound": 17,
      "title": "Apple Investment Case Study"
    },
    {
      "slug": "berkshire-hathaway-acquisition",
      "outbound": 17,
      "title": "Berkshire Hathaway Acquisition"
    },
    {
      "slug": "margin-of-safety",
      "outbound": 17,
      "title": "Margin Of Safety"
    }
  ],
  "bridge_nodes": [
    {
      "slug": "yt-moc",
      "betweenness": 48865.63,
      "title": "Yt Moc"
    },
    {
      "slug": "study-moc",
      "betweenness": 43328.04,
      "title": "Study Moc"
    },
    {
      "slug": "elon-musk-moc",
      "betweenness": 31225.97,
      "title": "Elon Musk Moc"
    },
    {
      "slug": "warren-buffett-moc",
      "betweenness": 30239.55,
      "title": "Warren Buffett Moc"
    },
    {
      "slug": "home-base",
      "betweenness": 15026.12,
      "title": "Home Base"
    },
    {
      "slug": "prompt-engineering-moc",
      "betweenness": 12803.95,
      "title": "Prompt Engineering Moc"
    },
    {
      "slug": "books-moc",
      "betweenness": 10397.88,
      "title": "Books Moc"
    },
    {
      "slug": "warren-buffett-profile",
      "betweenness": 8120.52,
      "title": "Warren Buffett Profile"
    },
    {
      "slug": "python-for-ai-beginner-course-moc",
      "betweenness": 7443.11,
      "title": "Python For Ai Beginner Course Moc"
    },
    {
      "slug": "why-you-are-feeling-stuck-in-your-20s-moc",
      "betweenness": 6841.23,
      "title": "Why You Are Feeling Stuck In Your 20S Moc"
    }
  ],
  "disconnected_clusters": [
    {
      "size": 37,
      "sample": [
        "speed-of-iteration-principle",
        "question-every-requirement",
        "musk-working-hours-expectation",
        "musk-ai-risk-philosophy",
        "talent-density-principle"
      ]
    },
    {
      "size": 10,
      "sample": [
        "python-virtual-environment",
        "ruff-linter-formatter",
        "python-object-oriented-programming",
        "interactive-python-jupyter",
        "python-package-installer"
      ]
    },
    {
      "size": 2,
      "sample": [
        "e20-fuel-policy-india",
        "ethanol-blending-economic-inefficiency"
      ]
    },
    {
      "size": 2,
      "sample": [
        "state-intervention-hunger-strikes",
        "state-tactics-protest-containment"
      ]
    },
    {
      "size": 2,
      "sample": [
        "environment-variables-python",
        "git-version-control-system"
      ]
    },
    {
      "size": 2,
      "sample": [
        "moral-sacrifice-social-protests",
        "citizen-exit-vs-voice"
      ]
    }
  ],
  "emerging_topics": [
    {
      "domain": "general",
      "new_notes_last_30d": 309
    },
    {
      "domain": "tools",
      "new_notes_last_30d": 12
    },
    {
      "domain": "ai",
      "new_notes_last_30d": 6
    },
    {
      "domain": "self-improvement",
      "new_notes_last_30d": 6
    },
    {
      "domain": "philosophy",
      "new_notes_last_30d": 2
    },
    {
      "domain": "business",
      "new_notes_last_30d": 2
    },
    {
      "domain": "risk",
      "new_notes_last_30d": 1
    },
    {
      "domain": "strategy",
      "new_notes_last_30d": 1
    }
  ],
  "knowledge_gaps": [],
  "most_reused_concepts": [
    {
      "slug": "books-cheatsheet",
      "reference_count": 79,
      "title": "Books Cheatsheet"
    },
    {
      "slug": "capital-allocation",
      "reference_count": 45,
      "title": "Capital Allocation"
    },
    {
      "slug": "value-investing",
      "reference_count": 39,
      "title": "Value Investing"
    },
    {
      "slug": "habit-loop",
      "reference_count": 29,
      "title": "Habit Loop"
    },
    {
      "slug": "habit-tracking",
      "reference_count": 27,
      "title": "Habit Tracking"
    },
    {
      "slug": "sees-candies-investment-case-study",
      "reference_count": 25,
      "title": "Sees Candies Investment Case Study"
    },
    {
      "slug": "identity-based-habits",
      "reference_count": 24,
      "title": "Identity Based Habits"
    },
    {
      "slug": "buffett-decision-making-framework",
      "reference_count": 24,
      "title": "Buffett Decision Making Framework"
    },
    {
      "slug": "margin-of-safety",
      "reference_count": 24,
      "title": "Margin Of Safety"
    },
    {
      "slug": "economic-moat",
      "reference_count": 23,
      "title": "Economic Moat"
    }
  ],
  "most_cited_sources": [
    {
      "source": "[['warren-buffett-profile']]",
      "citation_count": 102
    },
    {
      "source": "[['48-laws-of-power']]",
      "citation_count": 70
    },
    {
      "source": "[['atomic-habits']]",
      "citation_count": 59
    },
    {
      "source": "python-ai-ml-projects']",
      "citation_count": 33
    },
    {
      "source": "THIS IS WHY PEOPLE HURT YOU.md",
      "citation_count": 16
    },
    {
      "source": "[['prompt-codes-reference']]",
      "citation_count": 16
    },
    {
      "source": "python-for-ai-beginner-course.md",
      "citation_count": 12
    },
    {
      "source": "Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md",
      "citation_count": 7
    },
    {
      "source": "finally-agent-loops-clearly-explained.md",
      "citation_count": 6
    },
    {
      "source": "[['learn-99-percent-claude-and-codex-in-25-mins']]",
      "citation_count": 6
    }
  ],
  "graph_growth_by_week": {
    "2026-07-12": 314,
    "2026-07-05": 0,
    "2026-06-28": 0,
    "2026-06-21": 0,
    "2026-06-14": 0,
    "2026-06-07": 0,
    "2026-05-31": 0,
    "2026-05-24": 0
  },
  "domain_distribution": {
    "general": 309,
    "tools": 12,
    "ai": 6,
    "self-improvement": 6,
    "philosophy": 2,
    "business": 2,
    "risk": 1,
    "strategy": 1
  },
  "knowledge_velocity_notes_per_week": 84.75
}
```

---

## File: reports\graph-analytics.md

```markdown
# Vault Graph Analytics

**Generated**: 2026-07-19 12:39 UTC  
**Active nodes**: 339  
**Knowledge velocity**: 84.75 notes/week

## Authority Nodes (Most Inbound Links)

| Rank | Slug | Inbound Links |
| --- | --- | --- |
| 1 | books-cheatsheet | 79 |
| 2 | capital-allocation | 45 |
| 3 | value-investing | 39 |
| 4 | habit-loop | 29 |
| 5 | habit-tracking | 27 |
| 6 | sees-candies-investment-case-study | 25 |
| 7 | identity-based-habits | 24 |
| 8 | buffett-decision-making-framework | 24 |
| 9 | margin-of-safety | 24 |
| 10 | economic-moat | 23 |

## Hub Nodes (Most Outbound Links)

| Rank | Slug | Outbound Links |
| --- | --- | --- |
| 1 | books-cheatsheet | 82 |
| 2 | capital-allocation | 38 |
| 3 | value-investing | 34 |
| 4 | atomic-habit | 21 |
| 5 | economic-moat | 20 |
| 6 | berkshire-shareholder-letters | 19 |
| 7 | buffett-decision-making-framework | 17 |
| 8 | apple-investment-case-study | 17 |
| 9 | berkshire-hathaway-acquisition | 17 |
| 10 | margin-of-safety | 17 |

## Bridge Nodes (Highest Betweenness — connects clusters)

| Rank | Slug | Score |
| --- | --- | --- |
| 1 | yt-moc | 48865.63 |
| 2 | study-moc | 43328.04 |
| 3 | elon-musk-moc | 31225.97 |
| 4 | warren-buffett-moc | 30239.55 |
| 5 | home-base | 15026.12 |
| 6 | prompt-engineering-moc | 12803.95 |
| 7 | books-moc | 10397.88 |
| 8 | warren-buffett-profile | 8120.52 |
| 9 | python-for-ai-beginner-course-moc | 7443.11 |
| 10 | why-you-are-feeling-stuck-in-your-20s-moc | 6841.23 |

## Disconnected Clusters

- **Cluster** (37 nodes): speed-of-iteration-principle, question-every-requirement, musk-working-hours-expectation...
- **Cluster** (10 nodes): python-virtual-environment, ruff-linter-formatter, python-object-oriented-programming...
- **Cluster** (2 nodes): e20-fuel-policy-india, ethanol-blending-economic-inefficiency
- **Cluster** (2 nodes): state-intervention-hunger-strikes, state-tactics-protest-containment
- **Cluster** (2 nodes): environment-variables-python, git-version-control-system
- **Cluster** (2 nodes): moral-sacrifice-social-protests, citizen-exit-vs-voice

## Emerging Topics (Last 30 Days)

| Domain | New Notes |
| --- | --- |
| general | 309 |
| tools | 12 |
| ai | 6 |
| self-improvement | 6 |
| philosophy | 2 |
| business | 2 |
| risk | 1 |
| strategy | 1 |

## Knowledge Gaps (Domains with < 5 Nodes)

No knowledge gaps detected. ✅

## Most Reused Concepts (> 3 References)

| Slug | Reference Count |
| --- | --- |
| books-cheatsheet | 79 |
| capital-allocation | 45 |
| value-investing | 39 |
| habit-loop | 29 |
| habit-tracking | 27 |
| sees-candies-investment-case-study | 25 |
| identity-based-habits | 24 |
| buffett-decision-making-framework | 24 |
| margin-of-safety | 24 |
| economic-moat | 23 |

## Most Cited Sources

| Source | Citations |
| --- | --- |
| [['warren-buffett-profile']] | 102 |
| [['48-laws-of-power']] | 70 |
| [['atomic-habits']] | 59 |
| python-ai-ml-projects'] | 33 |
| THIS IS WHY PEOPLE HURT YOU.md | 16 |
| [['prompt-codes-reference']] | 16 |
| python-for-ai-beginner-course.md | 12 |
| Uncomfortable Truths 2 Sonam Wangchuk's Hunger Strike, Jantar Mantar Protests and Indian State.md | 7 |
| finally-agent-loops-clearly-explained.md | 6 |
| [['learn-99-percent-claude-and-codex-in-25-mins']] | 6 |

## Domain Distribution

| Domain | Node Count |
| --- | --- |
| general | 309 |
| tools | 12 |
| ai | 6 |
| self-improvement | 6 |
| philosophy | 2 |
| business | 2 |
| risk | 1 |
| strategy | 1 |

---
_Read-only report. Governed by `.antigravity/rules/quality/health-metrics.md`._
```

---

## File: reports\health-dashboard.json

```json
{
  "generated_at": "2026-07-19T12:39:32.097067Z",
  "vault_root": "C:\\Users\\offic\\OneDrive\\Desktop\\obsidean\\nexusdb",
  "active_nodes": 339,
  "metrics": {
    "orphan_pct": 52.51,
    "dead_link_count": 805,
    "avg_backlinks": 8.5,
    "avg_outgoing": 7.14,
    "cluster_density": 7.822,
    "duplicate_pct": 0.0,
    "review_freshness_pct": 100.0,
    "domain_coverage_pct": 9.52,
    "source_utilization_pct": 20.0,
    "tag_entropy": 0.751,
    "moc_coverage_pct": 47.49,
    "source_traceability_pct": 100.0,
    "broken_ref_count": 7,
    "schema_compliance_pct": 100.0,
    "avg_freshness_days": 1.2
  },
  "alerts": [
    {
      "metric": "orphan_pct",
      "value": 52.51,
      "severity": "critical",
      "thresholds": {
        "healthy": 5,
        "warning": 10,
        "critical": 20,
        "direction": "below"
      }
    },
    {
      "metric": "dead_link_count",
      "value": 805,
      "severity": "critical",
      "thresholds": {
        "healthy": 0,
        "warning": 1,
        "critical": 10,
        "direction": "below"
      }
    },
    {
      "metric": "domain_coverage_pct",
      "value": 9.52,
      "severity": "critical",
      "thresholds": {
        "healthy": 100,
        "warning": 80,
        "critical": 60,
        "direction": "above"
      }
    },
    {
      "metric": "source_utilization_pct",
      "value": 20.0,
      "severity": "critical",
      "thresholds": {
        "healthy": 80,
        "warning": 50,
        "critical": 30,
        "direction": "above"
      }
    },
    {
      "metric": "moc_coverage_pct",
      "value": 47.49,
      "severity": "critical",
      "thresholds": {
        "healthy": 95,
        "warning": 90,
        "critical": 70,
        "direction": "above"
      }
    },
    {
      "metric": "broken_ref_count",
      "value": 7,
      "severity": "critical",
      "thresholds": {
        "healthy": 0,
        "warning": 1,
        "critical": 10,
        "direction": "below"
      }
    }
  ]
}
```

---

## File: reports\health-dashboard.md

```markdown
# Vault Health Dashboard

**Generated**: 2026-07-19 12:39 UTC  
**Active nodes**: 339

## Metrics

| # | Metric | Value | Status |
|---|--------|-------|--------|
| 1 | Orphan % | 52.51 | 🔴 |
| 2 | Dead Link Count | 805 | 🔴 |
| 3 | Avg Backlinks / Node | 8.5 | ✅ |
| 4 | Avg Outgoing Links / Node | 7.14 | ✅ |
| 5 | Cluster Density | 7.822 | ✅ |
| 6 | Duplicate Probability % | 0.0 | ✅ |
| 7 | Review Freshness % | 100.0 | ✅ |
| 8 | Domain Coverage % | 9.52 | 🔴 |
| 9 | Source Utilization % | 20.0 | 🔴 |
| 10 | Tag Entropy (normalised) | 0.751 | ❓ |
| 11 | MOC Coverage % | 47.49 | 🔴 |
| 12 | Source Traceability % | 100.0 | ✅ |
| 13 | Broken Reference Count | 7 | 🔴 |
| 14 | Schema Compliance % | 100.0 | ✅ |
| 15 | Avg Freshness (days) | 1.2 | ✅ |

## Alerts

- **🔴 Critical**: `orphan_pct` = 52.51
- **🔴 Critical**: `dead_link_count` = 805
- **🔴 Critical**: `domain_coverage_pct` = 9.52
- **🔴 Critical**: `source_utilization_pct` = 20.0
- **🔴 Critical**: `moc_coverage_pct` = 47.49
- **🔴 Critical**: `broken_ref_count` = 7

---

_Governed by `.antigravity/rules/quality/health-metrics.md`. Metrics inform review; they never authorise automatic cleanup._
```

---

## File: reports\invalid-tags.md

```markdown
# Invalid Tags Report

Last scanned on 339 notes.

| Note Title | File Link | Invalid Tags |
| :--- | :--- | :--- |
| Ajit Jain Successor | [[ajit-jain-successor\|ajit-jain-successor.md]] | `business`, `biography` |
| AmEx Salad Oil Scandal Investment | [[amex-salad-oil-investment\|amex-salad-oil-investment.md]] | `business` |
| Anne Thorndike Cafeteria Study | [[anne-thorndike-cafeteria-study\|anne-thorndike-cafeteria-study.md]] | `book`, `habits`, `productivity`, `study` |
| Apple Investment Case Study | [[apple-investment-case-study\|apple-investment-case-study.md]] | `business` |
| Arbitrage and Workout Investments | [[arbitrage-workouts\|arbitrage-workouts.md]] | `business` |
| Atomic Habit | [[atomic-habit\|atomic-habit.md]] | `book`, `habits`, `productivity` |
| Authority Bias in Investing | [[authority-bias-investing\|authority-bias-investing.md]] | `psychology`, `business` |
| Availability Bias in Investing | [[availability-bias-investing\|availability-bias-investing.md]] | `psychology`, `business` |
| Bayesian Decision Making | [[bayesian-decision-making\|bayesian-decision-making.md]] | `elon-musk`, `thinking`, `mental-model` |
| be-mentally-strong | [[be-mentally-strong\|be-mentally-strong.md]] | `Yt` |
| beating-the-odds-when-things-get-hard | [[beating-the-odds-when-things-get-hard\|beating-the-odds-when-things-get-hard.md]] | `Yt` |
| Benjamin Moore Acquisition | [[benjamin-moore-acquisition\|benjamin-moore-acquisition.md]] | `business` |
| Berkshire Hathaway Acquisition | [[berkshire-hathaway-acquisition\|berkshire-hathaway-acquisition.md]] | `business`, `biography` |
| Berkshire Hathaway Energy | [[berkshire-hathaway-energy\|berkshire-hathaway-energy.md]] | `business` |
| Berkshire's Insurance Float | [[berkshire-insurance-businesses\|berkshire-insurance-businesses.md]] | `business` |
| Berkshire Shareholder Letters | [[berkshire-shareholder-letters\|berkshire-shareholder-letters.md]] | `business`, `productivity` |
| Bias from Association | [[bias-from-association\|bias-from-association.md]] | `psychology` |
| Bill Gates Friendship | [[bill-gates-friendship\|bill-gates-friendship.md]] | `biography` |
| Otto von Bismarck and Realpolitik | [[bismarck-realpolitik\|bismarck-realpolitik.md]] | `book`, `power`, `study` |
| Blue Chip Stamps Investment | [[blue-chip-stamps-investment\|blue-chip-stamps-investment.md]] | `business` |
| BNSF Railway Acquisition | [[bnsf-railway-acquisition\|bnsf-railway-acquisition.md]] | `business` |
| Brain as a Prediction Machine | [[brain-as-a-prediction-machine\|brain-as-a-prediction-machine.md]] | `book`, `habits`, `psychology` |
| Brian Clark Fingernail Biting Example | [[brian-clark-fingernail-biting\|brian-clark-fingernail-biting.md]] | `productivity` |
| Bryan Harris Habit Contract | [[bryan-harris-habit-contract\|bryan-harris-habit-contract.md]] | `book`, `habits`, `productivity` |
| Warren Buffett's Childhood Entrepreneurship | [[buffett-childhood-entrepreneurship\|buffett-childhood-entrepreneurship.md]] | `business`, `biography` |
| Warren Buffett's Decision-Making Framework | [[buffett-decision-making-framework\|buffett-decision-making-framework.md]] | `productivity`, `business` |
| Warren Buffett's Delegation Model | [[buffett-delegation-model\|buffett-delegation-model.md]] | `business`, `productivity` |
| Warren Buffett's Education and Benjamin Graham's Influence | [[buffett-education-and-graham-influence\|buffett-education-and-graham-influence.md]] | `business`, `philosophy`, `biography` |
| Buffett Foundation | [[buffett-foundation\|buffett-foundation.md]] | `business` |
| Warren Buffett's Frugality | [[buffett-frugal-lifestyle\|buffett-frugal-lifestyle.md]] | `business`, `biography` |
| Warren Buffett's Reading Habit | [[buffett-reading-habit\|buffett-reading-habit.md]] | `productivity`, `business` |
| building-resilience-and-grit | [[building-resilience-and-grit\|building-resilience-and-grit.md]] | `Yt` |
| Bypass Ask Permissions Mode | [[bypass-ask-permissions-mode\|bypass-ask-permissions-mode.md]] | `ai`, `ml`, `yt`, `productivity` |
| Rational Capital Allocation | [[capital-allocation\|capital-allocation.md]] | `business`, `productivity` |
| Low Capital Intensity | [[capital-intensity\|capital-intensity.md]] | `business` |
| The Cardinal Rule of Behavior Change | [[cardinal-rule-of-behavior-change\|cardinal-rule-of-behavior-change.md]] | `book`, `habits`, `productivity` |
| Cash Register Automation | [[cash-register-automation\|cash-register-automation.md]] | `book`, `habits`, `productivity`, `tools` |
| Cesare Borgia | [[cesare-borgia\|cesare-borgia.md]] | `book`, `power`, `study` |
| Charlie Munger's Influence on Warren Buffett | [[charlie-munger-influence-on-buffett\|charlie-munger-influence-on-buffett.md]] | `business`, `biography` |
| Cigar Butt Investing | [[cigar-butt-investing\|cigar-butt-investing.md]] | `business` |
| Circle of Competence Heuristic | [[circle-of-competence\|circle-of-competence.md]] | `business`, `philosophy` |
| Every Level of a Claude Second Brain Explained | [[claude-second-brain-levels\|claude-second-brain-levels.md]] | `ai`, `ml`, `productivity`, `yt` |
| Clayton Homes Acquisition | [[clayton-homes-acquisition\|clayton-homes-acquisition.md]] | `business` |
| Coca-Cola Investment Case Study | [[coca-cola-investment-case-study\|coca-cola-investment-case-study.md]] | `business` |
| Commitment and Consistency Bias | [[commitment-consistency-bias\|commitment-consistency-bias.md]] | `psychology`, `business` |
| Commitment Devices | [[commitment-devices\|commitment-devices.md]] | `book`, `habits`, `productivity`, `psychology` |
| Long-Term Compounding | [[compounding-interest\|compounding-interest.md]] | `business` |
| Joseph 'Yellow Kid' Weil | [[con-artist-yellow-kid-weil\|con-artist-yellow-kid-weil.md]] | `book`, `power`, `psychology` |
| Contrast Effect Bias | [[contrast-effect-bias\|contrast-effect-bias.md]] | `psychology` |
| Court Power | [[court-power\|court-power.md]] | `book`, `power` |
| Dairy Queen Acquisition | [[dairy-queen-acquisition\|dairy-queen-acquisition.md]] | `business` |
| dealing-with-failure-and-bouncing-back | [[dealing-with-failure-and-bouncing-back\|dealing-with-failure-and-bouncing-back.md]] | `Yt` |
| Debt Aversion Principle | [[debt-aversion-principle\|debt-aversion-principle.md]] | `business`, `philosophy` |
| Decisive Moments | [[decisive-moments\|decisive-moments.md]] | `book`, `habits`, `productivity`, `psychology` |
| Delayed-Return Environment | [[delayed-return-environment\|delayed-return-environment.md]] | `psychology` |
| Delete Before Optimize | [[delete-before-optimize\|delete-before-optimize.md]] | `elon-musk`, `principle`, `engineering`, `rule` |
| Delete-Then-Optimize Loop | [[delete-then-optimize-loop\|delete-then-optimize-loop.md]] | `elon-musk`, `engineering`, `framework` |
| Dempster Mill Investment | [[dempster-mill-investment\|dempster-mill-investment.md]] | `business` |
| developing-mental-toughness | [[developing-mental-toughness\|developing-mental-toughness.md]] | `Yt` |
| Dexter Shoe Acquisition Mistake | [[dexter-shoe-investment-mistake\|dexter-shoe-investment-mistake.md]] | `business` |
| The Diderot Effect | [[diderot-effect\|diderot-effect.md]] | `book`, `habits`, `productivity`, `psychology` |
| Disliking and Hating Tendency | [[disliking-hating-tendency\|disliking-hating-tendency.md]] | `psychology` |
| The Dopamine-Driven Feedback Loop | [[dopamine-driven-feedback-loop\|dopamine-driven-feedback-loop.md]] | `book`, `habits`, `productivity`, `psychology` |
| Concept of the Economic Moat | [[economic-moat\|economic-moat.md]] | `business` |
| Elon Musk Childhood | [[elon-musk-childhood\|elon-musk-childhood.md]] | `elon-musk`, `biography` |
| Elon Musk Education | [[elon-musk-education\|elon-musk-education.md]] | `elon-musk`, `biography` |
| Evidence of Exceptional Ability Hiring | [[elon-musk-hiring-philosophy\|elon-musk-hiring-philosophy.md]] | `elon-musk`, `leadership`, `hiring` |
| Neuralink Mission | [[elon-musk-neuralink\|elon-musk-neuralink.md]] | `elon-musk`, `business`, `innovation` |
| Elon Musk SpaceX Founding | [[elon-musk-spacex-founding\|elon-musk-spacex-founding.md]] | `elon-musk`, `biography`, `business` |
| Starlink Business Strategy | [[elon-musk-starlink\|elon-musk-starlink.md]] | `elon-musk`, `business`, `strategy` |
| Elon Musk Tesla Founding | [[elon-musk-tesla-founding\|elon-musk-tesla-founding.md]] | `elon-musk`, `biography`, `business` |
| The Boring Company Concept | [[elon-musk-the-boring-company\|elon-musk-the-boring-company.md]] | `elon-musk`, `business`, `innovation` |
| xAI Founding | [[elon-musk-xai\|elon-musk-xai.md]] | `elon-musk`, `business`, `ai` |
| Elon Musk X.com PayPal | [[elon-musk-xcom-paypal\|elon-musk-xcom-paypal.md]] | `elon-musk`, `biography`, `business` |
| Elon Musk Zip2 | [[elon-musk-zip2\|elon-musk-zip2.md]] | `elon-musk`, `biography`, `business` |
| emotional-healing-and-moving-forward | [[emotional-healing-and-moving-forward\|emotional-healing-and-moving-forward.md]] | `Yt` |
| emotional-strength | [[emotional-strength\|emotional-strength.md]] | `Yt` |
| Environment Design | [[environment-design\|environment-design.md]] | `book`, `habits`, `productivity` |
| Environment Priming | [[environment-priming\|environment-priming.md]] | `book`, `habits`, `productivity` |
| Estate Tax Support | [[estate-tax-support\|estate-tax-support.md]] | `business`, `philosophy` |
| External Code Review Guardrails | [[external-code-review-guardrails\|external-code-review-guardrails.md]] | `ai`, `ml`, `yt`, `productivity` |
| Fermi Estimation | [[fermi-estimation\|fermi-estimation.md]] | `elon-musk`, `thinking`, `mental-model` |
| Few-Shot vs Zero-Shot Prompting | [[fewshot-vs-zeroshot-prompting\|fewshot-vs-zeroshot-prompting.md]] | `technique`, `ai`, `llm`, `productivity`, `processed` |
| finding-your-inner-strength | [[finding-your-inner-strength\|finding-your-inner-strength.md]] | `Yt` |
| First Principles Prompting | [[first-principles-prompting\|first-principles-prompting.md]] | `technique`, `ai`, `philosophy`, `strategy`, `llm`, `processed` |
| First Principles Thinking | [[first-principles-thinking\|first-principles-thinking.md]] | `elon-musk`, `thinking`, `mental-model` |
| The Five-Twenty-Five Rule | [[five-twenty-five-rule\|five-twenty-five-rule.md]] | `productivity` |
| FlightSafety Acquisition | [[flightsafety-acquisition\|flightsafety-acquisition.md]] | `business` |
| Fruit of the Loom Acquisition | [[fruit-of-the-loom-acquisition\|fruit-of-the-loom-acquisition.md]] | `business` |
| Geeks Bearing Formulas | [[geeks-bearing-formulas\|geeks-bearing-formulas.md]] | `business` |
| GEICO Acquisition | [[geico-acquisition\|geico-acquisition.md]] | `business`, `biography` |
| General Reinsurance Acquisition | [[gen-re-acquisition\|gen-re-acquisition.md]] | `business` |
| Genetics and Environment | [[genetics-and-environment\|genetics-and-environment.md]] | `book`, `habits`, `productivity`, `psychology` |
| Gillette Investment | [[gillette-investment\|gillette-investment.md]] | `business` |
| The Giving Pledge | [[giving-pledge\|giving-pledge.md]] | `business` |
| Goldilocks Rule | [[goldilocks-rule\|goldilocks-rule.md]] | `book`, `habits`, `productivity`, `psychology` |
| Greg Abel Successor | [[greg-abel-successor\|greg-abel-successor.md]] | `business`, `biography` |
| growth-mindset | [[growth-mindset\|growth-mindset.md]] | `Yt` |
| Habit Contracts | [[habit-contracts\|habit-contracts.md]] | `book`, `habits`, `productivity` |
| Habit Loop | [[habit-loop\|habit-loop.md]] | `book`, `framework`, `habits`, `productivity`, `psychology` |
| Habit Stacking Method | [[habit-stacking\|habit-stacking.md]] | `productivity` |
| Habit Tracking | [[habit-tracking\|habit-tracking.md]] | `book`, `habits`, `productivity` |
| Habits Plus Deliberate Practice | [[habits-plus-deliberate-practice\|habits-plus-deliberate-practice.md]] | `book`, `habits`, `productivity` |
| Habits Scorecard | [[habits-scorecard\|habits-scorecard.md]] | `book`, `habits`, `productivity` |
| Haile Selassie's Court of Dependency | [[haile-selassie-court\|haile-selassie-court.md]] | `book`, `power`, `study` |
| Hebb's Law | [[hebbs-law\|hebbs-law.md]] | `book`, `habits`, `productivity`, `psychology` |
| Hell Yes or No Filter | [[hell-yes-or-no-filter\|hell-yes-or-no-filter.md]] | `essentialism`, `decision-making`, `filter` |
| Honesty is an Expensive Gift | [[honesty-expensive-gift\|honesty-expensive-gift.md]] | `philosophy` |
| Howard Buffett's Influence | [[howard-buffett-influence\|howard-buffett-influence.md]] | `biography` |
| Hyperbolic Discounting in Finance | [[hyperbolic-discounting\|hyperbolic-discounting.md]] | `psychology`, `business` |
| Identity-based Habits | [[identity-based-habits\|identity-based-habits.md]] | `book`, `habits`, `productivity` |
| Idiot Index | [[idiot-index\|idiot-index.md]] | `elon-musk`, `mental-model`, `engineering` |
| Immediate-Return Environment | [[immediate-return-environment\|immediate-return-environment.md]] | `psychology` |
| Implementation Intentions | [[implementation-intentions\|implementation-intentions.md]] | `book`, `habits`, `productivity`, `psychology` |
| Concept of Intrinsic Value | [[intrinsic-value\|intrinsic-value.md]] | `business` |
| Inversion Principle | [[inversion-mental-model\|inversion-mental-model.md]] | `productivity`, `business` |
| James Clear Injury Recovery | [[james-clear-injury-recovery\|james-clear-injury-recovery.md]] | `book`, `habits`, `productivity` |
| Jerry Uelsmann Photography Experiment | [[jerry-uelsmann-photography\|jerry-uelsmann-photography.md]] | `book`, `habits`, `productivity`, `study` |
| Keep Moving Heuristic | [[keep-moving-heuristic\|keep-moving-heuristic.md]] | `action`, `career`, `heuristic` |
| Never Outshine the Master | [[law-01-never-outshine-the-master\|law-01-never-outshine-the-master.md]] | `book`, `power` |
| Never Put Too Much Trust in Friends, Learn How to Use Enemies | [[law-02-never-trust-friends-use-enemies\|law-02-never-trust-friends-use-enemies.md]] | `book`, `power`, `psychology` |
| Conceal Your Intentions | [[law-03-conceal-your-intentions\|law-03-conceal-your-intentions.md]] | `book`, `power`, `psychology` |
| Always Say Less Than Necessary | [[law-04-say-less-than-necessary\|law-04-say-less-than-necessary.md]] | `book`, `power` |
| So Much Depends on Reputation — Guard It with Your Life | [[law-05-guard-your-reputation\|law-05-guard-your-reputation.md]] | `book`, `power`, `psychology` |
| Court Attention at All Costs | [[law-06-court-attention\|law-06-court-attention.md]] | `book`, `power` |
| Get Others to Do the Work for You, but Always Take the Credit | [[law-07-get-others-to-do-the-work\|law-07-get-others-to-do-the-work.md]] | `book`, `power` |
| Make Other People Come to You — Use Bait if Necessary | [[law-08-make-others-come-to-you\|law-08-make-others-come-to-you.md]] | `book`, `power` |
| Win Through Your Actions, Never Through Argument | [[law-09-win-through-actions\|law-09-win-through-actions.md]] | `book`, `power` |
| Infection: Avoid the Unhappy and Unlucky | [[law-10-avoid-the-unhappy-and-unlucky\|law-10-avoid-the-unhappy-and-unlucky.md]] | `book`, `power`, `psychology` |
| Learn to Keep People Dependent on You | [[law-11-keep-people-dependent\|law-11-keep-people-dependent.md]] | `book`, `power` |
| Use Selective Honesty and Generosity to Disarm Your Victim | [[law-12-selective-honesty-to-disarm\|law-12-selective-honesty-to-disarm.md]] | `book`, `power` |
| When Asking for Help, Appeal to Self-Interest, Never to Mercy or Gratitude | [[law-13-appeal-to-self-interest\|law-13-appeal-to-self-interest.md]] | `book`, `power` |
| Pose as a Friend, Work as a Spy | [[law-14-pose-as-friend-work-as-spy\|law-14-pose-as-friend-work-as-spy.md]] | `book`, `power` |
| Crush Your Enemy Totally | [[law-15-crush-your-enemy-totally\|law-15-crush-your-enemy-totally.md]] | `book`, `power` |
| Use Absence to Increase Respect and Honor | [[law-16-use-absence\|law-16-use-absence.md]] | `book`, `power`, `psychology` |
| Keep Others in Suspended Terror — Cultivate an Air of Unpredictability | [[law-17-cultivate-unpredictability\|law-17-cultivate-unpredictability.md]] | `book`, `power`, `psychology` |
| Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous | [[law-18-isolation-is-dangerous\|law-18-isolation-is-dangerous.md]] | `book`, `power` |
| Know Who You're Dealing With — Do Not Offend the Wrong Person | [[law-19-know-who-youre-dealing-with\|law-19-know-who-youre-dealing-with.md]] | `book`, `power`, `psychology` |
| Do Not Commit to Anyone | [[law-20-do-not-commit-to-anyone\|law-20-do-not-commit-to-anyone.md]] | `book`, `power` |
| Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark | [[law-21-play-a-sucker\|law-21-play-a-sucker.md]] | `book`, `power`, `psychology` |
| Use the Surrender Tactic — Transform Weakness into Power | [[law-22-surrender-tactic\|law-22-surrender-tactic.md]] | `book`, `power` |
| Concentrate Your Forces | [[law-23-concentrate-your-forces\|law-23-concentrate-your-forces.md]] | `book`, `power` |
| Play the Perfect Courtier | [[law-24-play-the-perfect-courtier\|law-24-play-the-perfect-courtier.md]] | `book`, `power` |
| Re-Create Yourself | [[law-25-recreate-yourself\|law-25-recreate-yourself.md]] | `book`, `power`, `psychology` |
| Keep Your Hands Clean | [[law-26-keep-your-hands-clean\|law-26-keep-your-hands-clean.md]] | `book`, `power` |
| Play on People's Need to Believe to Create a Cultlike Following | [[law-27-create-a-cultlike-following\|law-27-create-a-cultlike-following.md]] | `book`, `power`, `psychology` |
| Enter Action with Boldness | [[law-28-enter-action-with-boldness\|law-28-enter-action-with-boldness.md]] | `book`, `power`, `psychology` |
| Plan All the Way to the End | [[law-29-plan-to-the-end\|law-29-plan-to-the-end.md]] | `book`, `power` |
| Make Your Accomplishments Seem Effortless | [[law-30-make-accomplishments-seem-effortless\|law-30-make-accomplishments-seem-effortless.md]] | `book`, `power` |
| Control the Options — Get Others to Play with the Cards You Deal | [[law-31-control-the-options\|law-31-control-the-options.md]] | `book`, `power` |
| Play to People's Fantasies | [[law-32-play-to-peoples-fantasies\|law-32-play-to-peoples-fantasies.md]] | `book`, `power`, `psychology` |
| Discover Each Man's Thumbscrew | [[law-33-discover-each-mans-thumbscrew\|law-33-discover-each-mans-thumbscrew.md]] | `book`, `power`, `psychology` |
| Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One | [[law-34-be-royal\|law-34-be-royal.md]] | `book`, `power` |
| Master the Art of Timing | [[law-35-master-the-art-of-timing\|law-35-master-the-art-of-timing.md]] | `book`, `power` |
| Disdain Things You Cannot Have — Ignoring Them is the Best Revenge | [[law-36-disdain-things-you-cannot-have\|law-36-disdain-things-you-cannot-have.md]] | `book`, `power` |
| Create Compelling Spectacles | [[law-37-create-compelling-spectacles\|law-37-create-compelling-spectacles.md]] | `book`, `power` |
| Think as You Like but Behave Like Others | [[law-38-think-as-you-like-behave-like-others\|law-38-think-as-you-like-behave-like-others.md]] | `book`, `power` |
| Stir Up Waters to Catch Fish | [[law-39-stir-up-waters\|law-39-stir-up-waters.md]] | `book`, `power`, `psychology` |
| Despise the Free Lunch | [[law-40-despise-the-free-lunch\|law-40-despise-the-free-lunch.md]] | `book`, `power` |
| Avoid Stepping into a Great Man's Shoes | [[law-41-avoid-stepping-into-great-mans-shoes\|law-41-avoid-stepping-into-great-mans-shoes.md]] | `book`, `power`, `psychology` |
| Strike the Shepherd and the Sheep Will Scatter | [[law-42-strike-the-shepherd\|law-42-strike-the-shepherd.md]] | `book`, `power` |
| Work on the Hearts and Minds of Others | [[law-43-work-on-hearts-and-minds\|law-43-work-on-hearts-and-minds.md]] | `book`, `power`, `psychology` |
| Disarm and Infuriate with the Mirror Effect | [[law-44-mirror-effect\|law-44-mirror-effect.md]] | `book`, `power`, `psychology` |
| Preach the Need for Change, but Never Reform Too Much at Once | [[law-45-preach-change-reform-slowly\|law-45-preach-change-reform-slowly.md]] | `book`, `power`, `study` |
| Never Appear Too Perfect | [[law-46-never-appear-too-perfect\|law-46-never-appear-too-perfect.md]] | `book`, `power`, `psychology` |
| Do Not Go Past the Mark You Aimed For — In Victory, Learn When to Stop | [[law-47-learn-when-to-stop\|law-47-learn-when-to-stop.md]] | `book`, `power` |
| Assume Formlessness | [[law-48-assume-formlessness\|law-48-assume-formlessness.md]] | `book`, `power` |
| Law of Least Effort | [[law-of-least-effort\|law-of-least-effort.md]] | `book`, `habits`, `productivity`, `psychology`, `study` |
| Cheatsheet — Learn 99% Claude & Codex in 25 mins | [[learn-99-percent-claude-and-codex-in-25-mins-cheatsheet\|learn-99-percent-claude-and-codex-in-25-mins-cheatsheet.md]] | `ai`, `ml`, `yt`, `productivity` |
| Liking and Loving Tendency | [[liking-loving-tendency\|liking-loving-tendency.md]] | `psychology` |
| Local File System Access Advantage | [[local-filesystem-agent-advantage\|local-filesystem-agent-advantage.md]] | `ai`, `ml`, `yt`, `productivity` |
| Lollapalooza Effect | [[lollapalooza-effect\|lollapalooza-effect.md]] | `business`, `psychology` |
| Louis XIV and Versailles | [[louis-xiv-versailles\|louis-xiv-versailles.md]] | `book`, `power`, `study` |
| Lubrizol Acquisition | [[lubrizol-acquisition\|lubrizol-acquisition.md]] | `business` |
| Machiavelli and The Prince | [[machiavelli-and-the-prince\|machiavelli-and-the-prince.md]] | `book`, `power`, `study` |
| Make It Invisible | [[make-it-invisible\|make-it-invisible.md]] | `book`, `habits`, `power`, `productivity` |
| Make Money While You Sleep | [[make-money-while-you-sleep\|make-money-while-you-sleep.md]] | `business` |
| Mao Zedong's Guerrilla Formlessness | [[mao-zedong-formlessness\|mao-zedong-formlessness.md]] | `book`, `power` |
| Margin of Safety Principle | [[margin-of-safety\|margin-of-safety.md]] | `business`, `philosophy` |
| Marginal Gains British Cycling | [[marginal-gains-british-cycling\|marginal-gains-british-cycling.md]] | `book`, `productivity` |
| Marmon Group Acquisition | [[marmon-group-acquisition\|marmon-group-acquisition.md]] | `business` |
| Moral Nobility as Tactical Vulnerability | [[moral-nobility-as-tactical-vulnerability\|moral-nobility-as-tactical-vulnerability.md]] | `book`, `power`, `study` |
| motivation-and-inspiration | [[motivation-and-inspiration\|motivation-and-inspiration.md]] | `Yt` |
| Motivation Ritual | [[motivation-ritual\|motivation-ritual.md]] | `productivity` |
| AI Existential Risk Philosophy | [[musk-ai-risk-philosophy\|musk-ai-risk-philosophy.md]] | `elon-musk`, `ai`, `belief`, `philosophy` |
| Direct Communication Mandate | [[musk-communication-pattern\|musk-communication-pattern.md]] | `elon-musk`, `leadership`, `communication`, `rule` |
| Mars Colonization Mission | [[musk-mars-colonization-vision\|musk-mars-colonization-vision.md]] | `elon-musk`, `thinking`, `philosophy` |
| "Failure is an option here. If things are not failing, you are not innovating enough." | [[musk-on-failure-quote\|musk-on-failure-quote.md]] | `elon-musk`, `quote`, `innovation` |
| "I think it's important to reason from first principles rather than by analogy. The normal way we conduct our lives is we reason by analogy. You boil things down to the most fundamental truths you can imagine, and then reason up from there." | [[musk-on-first-principles-quote\|musk-on-first-principles-quote.md]] | `elon-musk`, `quote`, `thinking` |
| Time Blocking Productivity Method | [[musk-time-blocking-habit\|musk-time-blocking-habit.md]] | `elon-musk`, `productivity`, `habit` |
| Leadership by Immersion Expectation | [[musk-working-hours-expectation\|musk-working-hours-expectation.md]] | `elon-musk`, `leadership`, `habit` |
| National Indemnity Acquisition | [[national-indemnity-acquisition\|national-indemnity-acquisition.md]] | `business`, `biography` |
| NetJets Acquisition | [[netjets-acquisition\|netjets-acquisition.md]] | `business` |
| The Downfall of Nicolas Fouquet | [[nicolas-fouquet-downfall\|nicolas-fouquet-downfall.md]] | `book`, `power`, `study` |
| Net Operating Loss Tax Shield | [[nols-tax-shield\|nols-tax-shield.md]] | `business` |
| One Percent Better Every Day | [[one-percent-better-every-day\|one-percent-better-every-day.md]] | `book`, `habits`, `productivity` |
| Concept of Operating Leverage | [[operating-leverage\|operating-leverage.md]] | `business` |
| Opportunity Cost Heuristic | [[opportunity-cost-heuristic\|opportunity-cost-heuristic.md]] | `business`, `productivity` |
| overcoming-obstacles-and-adversity | [[overcoming-obstacles-and-adversity\|overcoming-obstacles-and-adversity.md]] | `Yt` |
| Concept of Owner Earnings | [[owner-earnings\|owner-earnings.md]] | `business` |
| Pampered Chef Acquisition | [[pampered-chef-acquisition\|pampered-chef-acquisition.md]] | `business` |
| Pavlovian Association in Branding | [[pavlovian-association\|pavlovian-association.md]] | `psychology`, `business` |
| personal-growth-and-development | [[personal-growth-and-development\|personal-growth-and-development.md]] | `Yt` |
| Phelps and El Guerrouj | [[phelps-and-el-guerrouj\|phelps-and-el-guerrouj.md]] | `book`, `habits`, `productivity`, `psychology` |
| Phil Carret Influence | [[phil-carret-influence\|phil-carret-influence.md]] | `biography` |
| Physics Constraint Test | [[physics-constraint-test\|physics-constraint-test.md]] | `elon-musk`, `thinking`, `engineering` |
| Pilot Flying J Acquisition | [[pilot-flying-j-acquisition\|pilot-flying-j-acquisition.md]] | `business` |
| PKM Development Phases | [[pkm-development-phases\|pkm-development-phases.md]] | `ai`, `ml`, `yt`, `productivity` |
| Plateau of Latent Potential | [[plateau-of-latent-potential\|plateau-of-latent-potential.md]] | `book`, `habits`, `productivity`, `psychology` |
| Pointing-and-Calling | [[pointing-and-calling\|pointing-and-calling.md]] | `book`, `habits`, `productivity` |
| Poison of Optionality | [[poison-of-optionality\|poison-of-optionality.md]] | `optionality`, `choice-paralysis`, `commitment` |
| Polgar Sisters Chess | [[polgar-sisters-chess\|polgar-sisters-chess.md]] | `book`, `habits`, `productivity`, `study` |
| Power Abhors a Vacuum | [[power-abhors-a-vacuum\|power-abhors-a-vacuum.md]] | `book`, `power` |
| Power as an Amoral Social Game | [[power-as-a-social-game\|power-as-a-social-game.md]] | `book`, `power`, `psychology`, `study` |
| powerful-mindset-shifts | [[powerful-mindset-shifts\|powerful-mindset-shifts.md]] | `Yt` |
| Precision Castparts Acquisition | [[precision-castparts-acquisition\|precision-castparts-acquisition.md]] | `business` |
| Premack's Principle | [[premacks-principle\|premacks-principle.md]] | `psychology` |
| Price is What You Pay Value is What You Get | [[price-vs-value\|price-vs-value.md]] | `business` |
| Prompt Combination Codes | [[prompt-combination-codes\|prompt-combination-codes.md]] | `framework`, `ai`, `productivity`, `strategy`, `llm`, `processed` |
| Prompt Honesty and Directness Codes | [[prompt-honesty-codes\|prompt-honesty-codes.md]] | `technique`, `ai`, `productivity`, `llm`, `processed` |
| Prompt Learning Codes | [[prompt-learning-codes\|prompt-learning-codes.md]] | `technique`, `ai`, `learning`, `productivity`, `llm`, `processed` |
| Prompt Meta Announce Code | [[prompt-meta-announce\|prompt-meta-announce.md]] | `technique`, `ai`, `productivity`, `llm`, `processed` |
| Prompt Output Control Codes | [[prompt-output-control-codes\|prompt-output-control-codes.md]] | `technique`, `ai`, `writing`, `productivity`, `llm`, `processed` |
| Prompt Reasoning and Simulation Codes | [[prompt-reasoning-codes\|prompt-reasoning-codes.md]] | `technique`, `ai`, `strategy`, `productivity`, `llm`, `processed` |
| Prompt Simplification Codes | [[prompt-simplification-codes\|prompt-simplification-codes.md]] | `technique`, `ai`, `productivity`, `llm`, `processed` |
| Prompt Strategy and Founder Codes | [[prompt-strategy-codes\|prompt-strategy-codes.md]] | `technique`, `ai`, `strategy`, `business`, `productivity`, `llm`, `processed` |
| Prompt Thinking Mode Codes | [[prompt-thinking-codes\|prompt-thinking-codes.md]] | `technique`, `ai`, `productivity`, `llm`, `processed` |
| Prompt Voice and Format Codes | [[prompt-voice-format-codes\|prompt-voice-format-codes.md]] | `technique`, `ai`, `writing`, `productivity`, `llm`, `processed` |
| Prototype-Then-Iterate | [[prototype-then-iterate\|prototype-then-iterate.md]] | `elon-musk`, `engineering`, `principle` |
| Queen Elizabeth I's Power Image | [[queen-elizabeth-i-power-image\|queen-elizabeth-i-power-image.md]] | `book`, `power`, `study` |
| Question Every Requirement | [[question-every-requirement\|question-every-requirement.md]] | `elon-musk`, `principle`, `engineering`, `rule` |
| Quiet Thinking Habit | [[quiet-thinking-habit\|quiet-thinking-habit.md]] | `productivity` |
| Genes Predispose but Do Not Determine | [[quote-genes-predispose\|quote-genes-predispose.md]] | `study` |
| James Clear on Clarity | [[quote-james-clear-clarity\|quote-james-clear-clarity.md]] | `productivity` |
| What is Rewarded is Repeated | [[quote-what-is-rewarded-is-repeated\|quote-what-is-rewarded-is-repeated.md]] | `psychology` |
| RACE Prompt Framework | [[race-prompt-framework\|race-prompt-framework.md]] | `framework`, `ai`, `productivity`, `llm`, `processed` |
| Reasoning by Analogy | [[reasoning-by-analogy\|reasoning-by-analogy.md]] | `elon-musk`, `thinking`, `concept` |
| Reciprocity Tendency | [[reciprocity-tendency\|reciprocity-tendency.md]] | `psychology` |
| reclaiming-your-personal-power | [[reclaiming-your-personal-power\|reclaiming-your-personal-power.md]] | `Yt` |
| Red Team Technique | [[red-team-technique\|red-team-technique.md]] | `technique`, `ai`, `strategy`, `productivity`, `llm`, `processed` |
| Reflection and Review | [[reflection-and-review\|reflection-and-review.md]] | `book`, `habits`, `productivity`, `psychology` |
| Reframing Hard Habits | [[reframing-hard-habits\|reframing-hard-habits.md]] | `productivity` |
| Regret Minimization Framework | [[regret-minimization-framework\|regret-minimization-framework.md]] | `productivity`, `philosophy` |
| Reinforcement Principle | [[reinforcement\|reinforcement.md]] | `psychology` |
| Reinvestment Moat vs Legacy Moat | [[reinvestment-moat\|reinvestment-moat.md]] | `business` |
| relationships | [[relationships\|relationships.md]] | `Yt` |
| Reputation Protection Heuristic | [[reputation-protection-heuristic\|reputation-protection-heuristic.md]] | `business`, `philosophy` |
| Reputation Durability Principle | [[reputation-twenty-years-to-build\|reputation-twenty-years-to-build.md]] | `business`, `philosophy` |
| Return on Equity Metric | [[return-on-equity\|return-on-equity.md]] | `business` |
| Risk-Free Rate Benchmark | [[risk-free-rate-hurdle\|risk-free-rate-hurdle.md]] | `business` |
| Roger Fisher Nuclear Button | [[roger-fisher-nuclear-button\|roger-fisher-nuclear-button.md]] | `book`, `habits`, `power`, `productivity` |
| Rolls-Royce and Subway Analogy | [[rolls-royce-subway-analogy\|rolls-royce-subway-analogy.md]] | `business` |
| Rule Number One | [[rule-one-never-lose-money\|rule-one-never-lose-money.md]] | `business`, `philosophy` |
| Safeguard Soap Handwashing Study | [[safeguard-soap-handwashing-study\|safeguard-soap-handwashing-study.md]] | `book`, `habits`, `productivity` |
| Salomon Brothers Crisis Intervention | [[salomon-brothers-intervention\|salomon-brothers-intervention.md]] | `business`, `biography` |
| Sanborn Map Company Investment | [[sanborn-map-investment\|sanborn-map-investment.md]] | `business` |
| Scarcity Bias in Investing | [[scarcity-bias-investing\|scarcity-bias-investing.md]] | `psychology`, `business` |
| See's Candies Case Study | [[sees-candies-investment-case-study\|sees-candies-investment-case-study.md]] | `business` |
| Self-Fixing Code Loops | [[self-fixing-code-loops\|self-fixing-code-loops.md]] | `ai`, `ml`, `yt`, `productivity` |
| self-improvement-strategies | [[self-improvement-strategies\|self-improvement-strategies.md]] | `Yt` |
| Shaw Industries Acquisition | [[shaw-industries-acquisition\|shaw-industries-acquisition.md]] | `business` |
| Skinner Box Variable Rewards | [[skinner-box-variable-rewards\|skinner-box-variable-rewards.md]] | `book`, `habits`, `productivity`, `psychology` |
| Social Norms and Habits | [[social-norms-and-habits\|social-norms-and-habits.md]] | `book`, `habits`, `productivity`, `psychology`, `study` |
| Social Proof in Investing | [[social-proof-bias\|social-proof-bias.md]] | `psychology`, `business` |
| Socratic Prompting | [[socratic-prompting\|socratic-prompting.md]] | `technique`, `ai`, `philosophy`, `learning`, `llm`, `processed` |
| Solomon Asch Conformity Experiment | [[solomon-asch-conformity\|solomon-asch-conformity.md]] | `book`, `habits`, `power`, `productivity`, `psychology` |
| Sorites Paradox | [[sorites-paradox\|sorites-paradox.md]] | `book`, `habits`, `productivity`, `study` |
| SpaceX Falcon 1 Launch Failures | [[spacex-falcon-1-failures\|spacex-falcon-1-failures.md]] | `elon-musk`, `failure`, `engineering` |
| Special Situations Investing | [[special-situations\|special-situations.md]] | `business` |
| Speed of Iteration Principle | [[speed-of-iteration-principle\|speed-of-iteration-principle.md]] | `elon-musk`, `engineering`, `principle` |
| Sprezzatura | [[sprezzatura\|sprezzatura.md]] | `book`, `power` |
| Steelman Technique | [[steelman-technique\|steelman-technique.md]] | `technique`, `ai`, `philosophy`, `productivity`, `llm`, `processed` |
| Strategic Deception | [[strategic-deception\|strategic-deception.md]] | `book`, `power` |
| Supernormal Stimulus | [[supernormal-stimulus\|supernormal-stimulus.md]] | `book`, `habits`, `productivity`, `psychology` |
| Susan Thompson Buffett's Influence | [[susan-buffett-influence\|susan-buffett-influence.md]] | `biography` |
| Systems vs Goals | [[systems-vs-goals\|systems-vs-goals.md]] | `book`, `habits`, `productivity` |
| Talent Density Principle | [[talent-density-principle\|talent-density-principle.md]] | `elon-musk`, `leadership`, `principle` |
| The Diplomatic Survival of Talleyrand | [[talleyrand-survival\|talleyrand-survival.md]] | `book`, `power`, `study` |
| Ted Weschler Successor | [[ted-weschler-successor\|ted-weschler-successor.md]] | `business`, `biography` |
| Temptation Bundling | [[temptation-bundling\|temptation-bundling.md]] | `book`, `habits`, `productivity`, `psychology`, `workflow` |
| Tesla Model 3 Production Hell | [[tesla-production-hell\|tesla-production-hell.md]] | `elon-musk`, `failure`, `manufacturing`, `engineering` |
| The Courtier Archetype | [[the-courtier-archetype\|the-courtier-archetype.md]] | `book`, `power` |
| The Futility of Gratitude | [[the-futility-of-gratitude\|the-futility-of-gratitude.md]] | `book`, `power`, `psychology` |
| The Illusion of Equality | [[the-illusion-of-equality\|the-illusion-of-equality.md]] | `book`, `power`, `study` |
| The Law of Reversal | [[the-law-of-reversal\|the-law-of-reversal.md]] | `book`, `power`, `study` |
| The Myth of Sincerity | [[the-myth-of-sincerity\|the-myth-of-sincerity.md]] | `book`, `power`, `psychology` |
| The Reality of Human Envy | [[the-reality-of-human-envy\|the-reality-of-human-envy.md]] | `book`, `power`, `psychology` |
| Swimming Naked Heuristic | [[tide-goes-out-naked-swimming\|tide-goes-out-naked-swimming.md]] | `business` |
| Todd Combs Successor | [[todd-combs-successor\|todd-combs-successor.md]] | `business`, `biography` |
| Tom Murphy Influence | [[tom-murphy-influence\|tom-murphy-influence.md]] | `biography` |
| Trent Dyrsmid Paper Clips | [[trent-dyrsmid-paperclips\|trent-dyrsmid-paperclips.md]] | `book`, `habits`, `productivity` |
| Twenty Punches Card Rule | [[twenty-punches-card-rule\|twenty-punches-card-rule.md]] | `productivity`, `business` |
| Two-Minute Rule | [[two-minute-rule\|two-minute-rule.md]] | `book`, `habits`, `productivity` |
| Two Slot Punch Card Heuristic | [[two-slot-punch-card\|two-slot-punch-card.md]] | `productivity`, `business` |
| Two-Step Process to Identity Change | [[two-step-identity-change\|two-step-identity-change.md]] | `book`, `habits`, `productivity` |
| Two-Way vs One-Way Doors | [[two-way-vs-one-way-doors\|two-way-vs-one-way-doors.md]] | `decision-making`, `mental-model`, `framework` |
| Unemployment Optionality Paradox | [[unemployment-optionality-paradox\|unemployment-optionality-paradox.md]] | `career`, `choice-paralysis`, `privilege` |
| US Air Investment Mistake | [[us-air-investment-mistake\|us-air-investment-mistake.md]] | `business` |
| Value Investing Philosophy | [[value-investing\|value-investing.md]] | `business`, `philosophy` |
| Vertical Integration Calculus | [[vertical-integration-calculus\|vertical-integration-calculus.md]] | `elon-musk`, `business`, `mental-model` |
| Victor Hugo Closet Lock | [[victor-hugo-closet-lock\|victor-hugo-closet-lock.md]] | `book`, `habits`, `productivity` |
| Vietnam Veterans Heroin Study | [[vietnam-veterans-heroin-study\|vietnam-veterans-heroin-study.md]] | `book`, `habits`, `productivity`, `study` |
| Walter Schloss Comparison | [[walter-schloss-contrast\|walter-schloss-contrast.md]] | `business`, `biography` |
| Warren Buffett Biography | [[warren-buffett-biography\|warren-buffett-biography.md]] | `business`, `biography` |
| Selected Warren Buffett Quotes | [[warren-buffett-quotes\|warren-buffett-quotes.md]] | `business` |
| Washington Post Investment | [[washington-post-investment\|washington-post-investment.md]] | `business` |
| Wesco Financial | [[wesco-financial-acquisition\|wesco-financial-acquisition.md]] | `business` |
| Cheatsheet — Why You Are Feeling STUCK In Your 20s | [[why-you-are-feeling-stuck-in-your-20s-cheatsheet\|why-you-are-feeling-stuck-in-your-20s-cheatsheet.md]] | `career`, `self-improvement`, `cheatsheet` |
| You Do Not Rise to the Level of Your Goals | [[you-do-not-rise-to-the-level-of-your-goals\|you-do-not-rise-to-the-level-of-your-goals.md]] | `book`, `habits`, `productivity` |
```

---

## File: reports\link-suggestions.md

```markdown
# Link Suggestions

Generated by automation.
```

---

## File: reports\moc-split-candidates.md

```markdown
# MOC Split Candidates

Generated by automation.
```

---

## File: reports\pipeline_run.md

```markdown
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
```

---

## File: reports\promotion-candidates.md

```markdown
# Promotion Candidates

Generated by automation.
```

---

## File: reports\semantic_link_report.md

```markdown
# Semantic Link Report
New Notes Processed:
314
Links Suggested:
1570
High Confidence:
986
Medium:
584
Low:
0

---

### Agent Loop Architectures
→ [[agent-loop-mechanics]]
Confidence: 0.95
Reason:
Note 'Agent Loop Architectures' extends the principles discussed in 'Agent Loop Mechanics'.

---
→ [[external-code-review-guardrails]]
Confidence: 0.95
Reason:
Note 'Agent Loop Architectures' extends the principles discussed in 'External Code Review Guardrails'.

---
→ [[finally-agent-loops-clearly-explained-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Agent Loop Architectures' extends the principles discussed in 'Cheatsheet — Finally. Agent Loops Clearly Explained'.

---
→ [[loop-engineering]]
Confidence: 0.95
Reason:
Note 'Agent Loop Architectures' extends the principles discussed in 'Loop Engineering'.

---
→ [[loop-verification-importance]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---

### Done Criteria in Agent Loops
→ [[finally-agent-loops-clearly-explained-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Done Criteria in Agent Loops' extends the principles discussed in 'Cheatsheet — Finally. Agent Loops Clearly Explained'.

---
→ [[loop-verification-importance]]
Confidence: 0.95
Reason:
Note 'Done Criteria in Agent Loops' extends the principles discussed in 'Importance of the Verification Step'.

---
→ [[agent-loop-mechanics]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### Agent Loop Mechanics
→ [[agent-loop-architectures]]
Confidence: 0.95
Reason:
Note 'Agent Loop Mechanics' extends the principles discussed in 'Agent Loop Architectures'.

---
→ [[finally-agent-loops-clearly-explained-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Agent Loop Mechanics' extends the principles discussed in 'Cheatsheet — Finally. Agent Loops Clearly Explained'.

---
→ [[loop-engineering]]
Confidence: 0.95
Reason:
Note 'Agent Loop Mechanics' extends the principles discussed in 'Loop Engineering'.

---
→ [[loop-verification-importance]]
Confidence: 0.95
Reason:
Note 'Agent Loop Mechanics' extends the principles discussed in 'Importance of the Verification Step'.

---
→ [[agent-loop-done-criteria]]
Confidence: 0.83
Reason:
High conceptual similarity score of 82%.

---

### Ajit Jain Successor
→ [[berkshire-insurance-businesses]]
Confidence: 0.95
Reason:
Note 'Ajit Jain Successor' functions as an illustrative example of 'Berkshire's Insurance Float'.

---
→ [[national-indemnity-acquisition]]
Confidence: 0.95
Reason:
Note 'Ajit Jain Successor' functions as an illustrative example of 'National Indemnity Acquisition'.

---
→ [[warren-buffett-biography]]
Confidence: 0.95
Reason:
Note 'Ajit Jain Successor' functions as an illustrative example of 'Warren Buffett Biography'.

---

### Algorithm Design Sequence
→ [[question-every-requirement]]
Confidence: 0.95
Reason:
Note 'Algorithm Design Sequence' indicates a functional dependency on 'Question Every Requirement'.

---
→ [[delete-then-optimize-loop]]
Confidence: 0.90
Reason:
Note 'Algorithm Design Sequence' indicates a functional dependency on 'Delete-Then-Optimize Loop'.

---

### AmEx Salad Oil Scandal Investment
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'AmEx Salad Oil Scandal Investment' functions as an illustrative example of 'Concept of the Economic Moat'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'AmEx Salad Oil Scandal Investment' functions as an illustrative example of 'Margin of Safety Principle'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'AmEx Salad Oil Scandal Investment' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[special-situations]]
Confidence: 0.90
Reason:
Note 'AmEx Salad Oil Scandal Investment' functions as an illustrative example of 'Special Situations Investing'.

---

### Anne Thorndike Cafeteria Study
→ [[apple-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Anne Thorndike Cafeteria Study' functions as an illustrative example of 'Apple Investment Case Study'.

---
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Anne Thorndike Cafeteria Study' functions as an illustrative example of 'Atomic Habit'.

---
→ [[authority-bias-investing]]
Confidence: 0.95
Reason:
Note 'Anne Thorndike Cafeteria Study' functions as an illustrative example of 'Authority Bias in Investing'.

---
→ [[availability-bias-investing]]
Confidence: 0.95
Reason:
Note 'Anne Thorndike Cafeteria Study' functions as an illustrative example of 'Availability Bias in Investing'.

---
→ [[environment-design]]
Confidence: 0.95
Reason:
Note 'Anne Thorndike Cafeteria Study' functions as an illustrative example of 'Environment Design'.

---
→ [[safeguard-soap-handwashing-study]]
Confidence: 0.90
Reason:
Note 'Anne Thorndike Cafeteria Study' functions as an illustrative example of 'Safeguard Soap Handwashing Study'.

---
→ [[make-it-invisible]]
Confidence: 0.83
Reason:
Note 'Anne Thorndike Cafeteria Study' functions as an illustrative example of 'Make It Invisible'.

---

### Apple Investment Case Study
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.95
Reason:
Note 'Apple Investment Case Study' functions as an illustrative example of 'Berkshire Hathaway Acquisition'.

---
→ [[berkshire-hathaway-energy]]
Confidence: 0.95
Reason:
Note 'Apple Investment Case Study' functions as an illustrative example of 'Berkshire Hathaway Energy'.

---
→ [[berkshire-shareholder-letters]]
Confidence: 0.95
Reason:
Note 'Apple Investment Case Study' functions as an illustrative example of 'Berkshire Shareholder Letters'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Apple Investment Case Study' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[circle-of-competence]]
Confidence: 0.95
Reason:
Note 'Apple Investment Case Study' functions as an illustrative example of 'Circle of Competence Heuristic'.

---
→ [[coca-cola-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Apple Investment Case Study' functions as an illustrative example of 'Coca-Cola Investment Case Study'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Apple Investment Case Study' functions as an illustrative example of 'Concept of the Economic Moat'.

---
→ [[opportunity-cost-heuristic]]
Confidence: 0.95
Reason:
Note 'Apple Investment Case Study' functions as an illustrative example of 'Opportunity Cost Heuristic'.

---

### Arbitrage and Workout Investments
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Arbitrage and Workout Investments' indicates a functional dependency on 'Rational Capital Allocation'.

---
→ [[opportunity-cost-heuristic]]
Confidence: 0.95
Reason:
Note 'Arbitrage and Workout Investments' indicates a functional dependency on 'Opportunity Cost Heuristic'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Arbitrage and Workout Investments' indicates a functional dependency on 'Value Investing Philosophy'.

---

### Atomic Habit
→ [[authority-bias-investing]]
Confidence: 0.95
Reason:
Note 'Atomic Habit' functions as an illustrative example of 'Authority Bias in Investing'.

---
→ [[availability-bias-investing]]
Confidence: 0.95
Reason:
Note 'Atomic Habit' functions as an illustrative example of 'Availability Bias in Investing'.

---
→ [[berkshire-shareholder-letters]]
Confidence: 0.95
Reason:
Note 'Atomic Habit' functions as an illustrative example of 'Berkshire Shareholder Letters'.

---
→ [[sorites-paradox]]
Confidence: 0.95
Reason:
Note 'Atomic Habit' functions as an illustrative example of 'Sorites Paradox'.

---
→ [[you-do-not-rise-to-the-level-of-your-goals]]
Confidence: 0.95
Reason:
Note 'Atomic Habit' functions as an illustrative example of 'You Do Not Rise to the Level of Your Goals'.

---
→ [[habit-stacking]]
Confidence: 0.90
Reason:
Note 'Atomic Habit' functions as an illustrative example of 'Habit Stacking Method'.

---
→ [[motivation-ritual]]
Confidence: 0.87
Reason:
Note 'Atomic Habit' functions as an illustrative example of 'Motivation Ritual'.

---
→ [[anne-thorndike-cafeteria-study]]
Confidence: 0.86
Reason:
Note 'Atomic Habit' functions as an illustrative example of 'Anne Thorndike Cafeteria Study'.

---

### Authority Bias in Investing
→ [[availability-bias-investing]]
Confidence: 0.95
Reason:
Note 'Authority Bias in Investing' extends the principles discussed in 'Availability Bias in Investing'.

---
→ [[buffett-reading-habit]]
Confidence: 0.95
Reason:
Note 'Authority Bias in Investing' extends the principles discussed in 'Warren Buffett's Reading Habit'.

---
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Authority Bias in Investing' extends the principles discussed in 'Lollapalooza Effect'.

---
→ [[scarcity-bias-investing]]
Confidence: 0.95
Reason:
Note 'Authority Bias in Investing' extends the principles discussed in 'Scarcity Bias in Investing'.

---

### Availability Bias in Investing
→ [[authority-bias-investing]]
Confidence: 0.95
Reason:
Note 'Availability Bias in Investing' functions as an illustrative example of 'Authority Bias in Investing'.

---
→ [[buffett-reading-habit]]
Confidence: 0.95
Reason:
Note 'Availability Bias in Investing' functions as an illustrative example of 'Warren Buffett's Reading Habit'.

---
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Availability Bias in Investing' functions as an illustrative example of 'Lollapalooza Effect'.

---
→ [[quiet-thinking-habit]]
Confidence: 0.95
Reason:
Note 'Availability Bias in Investing' functions as an illustrative example of 'Quiet Thinking Habit'.

---
→ [[scarcity-bias-investing]]
Confidence: 0.81
Reason:
Note 'Availability Bias in Investing' functions as an illustrative example of 'Scarcity Bias in Investing'.

---

### Bayesian Decision Making
→ [[elon-musk-spacex-founding]]
Confidence: 0.90
Reason:
Note 'Bayesian Decision Making' extends the principles discussed in 'Elon Musk SpaceX Founding'.

---
→ [[failure-is-innovation-required]]
Confidence: 0.87
Reason:
Note 'Bayesian Decision Making' extends the principles discussed in 'Failure Is Innovation Required'.

---
→ [[spacex-falcon-1-failures]]
Confidence: 0.86
Reason:
Note 'Bayesian Decision Making' extends the principles discussed in 'SpaceX Falcon 1 Launch Failures'.

---
→ [[elon-musk-hiring-philosophy]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---
→ [[musk-mars-colonization-vision]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---
→ [[long-term-time-horizon]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---
→ [[prototype-then-iterate]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---
→ [[talent-density-principle]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### Be mentally strong
→ [[relationships]]
Confidence: 0.90
Reason:
Note 'Be mentally strong' extends the principles discussed in 'Relationships'.

---
→ [[emotional-strength]]
Confidence: 0.90
Reason:
Note 'Be mentally strong' extends the principles discussed in 'Emotional strength'.

---
→ [[growth-mindset]]
Confidence: 0.90
Reason:
Note 'Be mentally strong' extends the principles discussed in 'Growth mindset'.

---
→ [[self-improvement-strategies]]
Confidence: 0.90
Reason:
Note 'Be mentally strong' extends the principles discussed in 'Self-improvement strategies'.

---
→ [[developing-mental-toughness]]
Confidence: 0.89
Reason:
Note 'Be mentally strong' extends the principles discussed in 'Developing mental toughness'.

---
→ [[motivation-and-inspiration]]
Confidence: 0.89
Reason:
Note 'Be mentally strong' extends the principles discussed in 'Motivation and inspiration'.

---
→ [[powerful-mindset-shifts]]
Confidence: 0.89
Reason:
Note 'Be mentally strong' extends the principles discussed in 'Powerful mindset shifts'.

---
→ [[building-resilience-and-grit]]
Confidence: 0.89
Reason:
Note 'Be mentally strong' extends the principles discussed in 'Building resilience and grit'.

---

### Beating the odds when things get hard
→ [[reframing-hard-habits]]
Confidence: 0.90
Reason:
Note 'Beating the odds when things get hard' extends the principles discussed in 'Reframing Hard Habits'.

---
→ [[law-36-disdain-things-you-cannot-have]]
Confidence: 0.85
Reason:
Note 'Beating the odds when things get hard' extends the principles discussed in 'Disdain Things You Cannot Have — Ignoring Them is the Best Revenge'.

---
→ [[relationships]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---
→ [[emotional-strength]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---
→ [[growth-mindset]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---
→ [[self-improvement-strategies]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---
→ [[be-mentally-strong]]
Confidence: 0.84
Reason:
High conceptual similarity score of 84%.

---
→ [[developing-mental-toughness]]
Confidence: 0.84
Reason:
High conceptual similarity score of 84%.

---

### Benjamin Moore Acquisition
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Benjamin Moore Acquisition' extends the principles discussed in 'Concept of the Economic Moat'.

---
→ [[sees-candies-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Benjamin Moore Acquisition' extends the principles discussed in 'See's Candies Case Study'.

---
→ [[apple-investment-case-study]]
Confidence: 0.86
Reason:
Note 'Benjamin Moore Acquisition' extends the principles discussed in 'Apple Investment Case Study'.

---
→ [[gillette-investment]]
Confidence: 0.85
Reason:
Note 'Benjamin Moore Acquisition' extends the principles discussed in 'Gillette Investment'.

---
→ [[coca-cola-investment-case-study]]
Confidence: 0.84
Reason:
High conceptual similarity score of 84%.

---
→ [[flightsafety-acquisition]]
Confidence: 0.83
Reason:
High conceptual similarity score of 83%.

---
→ [[precision-castparts-acquisition]]
Confidence: 0.83
Reason:
High conceptual similarity score of 83%.

---
→ [[dexter-shoe-investment-mistake]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---

### Berkshire Hathaway Acquisition
→ [[berkshire-insurance-businesses]]
Confidence: 0.95
Reason:
Note 'Berkshire Hathaway Acquisition' functions as an illustrative example of 'Berkshire's Insurance Float'.

---
→ [[berkshire-shareholder-letters]]
Confidence: 0.95
Reason:
Note 'Berkshire Hathaway Acquisition' functions as an illustrative example of 'Berkshire Shareholder Letters'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Berkshire Hathaway Acquisition' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'Berkshire Hathaway Acquisition' functions as an illustrative example of 'Charlie Munger's Influence on Warren Buffett'.

---
→ [[national-indemnity-acquisition]]
Confidence: 0.95
Reason:
Note 'Berkshire Hathaway Acquisition' functions as an illustrative example of 'National Indemnity Acquisition'.

---
→ [[nols-tax-shield]]
Confidence: 0.95
Reason:
Note 'Berkshire Hathaway Acquisition' functions as an illustrative example of 'Net Operating Loss Tax Shield'.

---
→ [[gen-re-acquisition]]
Confidence: 0.89
Reason:
Note 'Berkshire Hathaway Acquisition' functions as an illustrative example of 'General Reinsurance Acquisition'.

---
→ [[dexter-shoe-investment-mistake]]
Confidence: 0.87
Reason:
Note 'Berkshire Hathaway Acquisition' functions as an illustrative example of 'Dexter Shoe Acquisition Mistake'.

---

### Berkshire Hathaway Energy
→ [[bnsf-railway-acquisition]]
Confidence: 0.95
Reason:
Note 'Berkshire Hathaway Energy' functions as an illustrative example of 'BNSF Railway Acquisition'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Berkshire Hathaway Energy' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Berkshire Hathaway Energy' functions as an illustrative example of 'Long-Term Compounding'.

---
→ [[greg-abel-successor]]
Confidence: 0.95
Reason:
Note 'Berkshire Hathaway Energy' functions as an illustrative example of 'Greg Abel Successor'.

---
→ [[reinvestment-moat]]
Confidence: 0.88
Reason:
Note 'Berkshire Hathaway Energy' functions as an illustrative example of 'Reinvestment Moat vs Legacy Moat'.

---
→ [[apple-investment-case-study]]
Confidence: 0.87
Reason:
Note 'Berkshire Hathaway Energy' functions as an illustrative example of 'Apple Investment Case Study'.

---
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.84
Reason:
Note 'Berkshire Hathaway Energy' functions as an illustrative example of 'Berkshire Hathaway Acquisition'.

---
→ [[berkshire-shareholder-letters]]
Confidence: 0.83
Reason:
Note 'Berkshire Hathaway Energy' functions as an illustrative example of 'Berkshire Shareholder Letters'.

---

### Berkshire's Insurance Float
→ [[ajit-jain-successor]]
Confidence: 0.95
Reason:
Note 'Berkshire's Insurance Float' extends the principles discussed in 'Ajit Jain Successor'.

---
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.95
Reason:
Note 'Berkshire's Insurance Float' extends the principles discussed in 'Berkshire Hathaway Acquisition'.

---
→ [[blue-chip-stamps-investment]]
Confidence: 0.95
Reason:
Note 'Berkshire's Insurance Float' extends the principles discussed in 'Blue Chip Stamps Investment'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Berkshire's Insurance Float' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[clayton-homes-acquisition]]
Confidence: 0.95
Reason:
Note 'Berkshire's Insurance Float' extends the principles discussed in 'Clayton Homes Acquisition'.

---
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Berkshire's Insurance Float' extends the principles discussed in 'Long-Term Compounding'.

---
→ [[geico-acquisition]]
Confidence: 0.95
Reason:
Note 'Berkshire's Insurance Float' extends the principles discussed in 'GEICO Acquisition'.

---
→ [[gen-re-acquisition]]
Confidence: 0.95
Reason:
Note 'Berkshire's Insurance Float' extends the principles discussed in 'General Reinsurance Acquisition'.

---

### Berkshire Shareholder Letters
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.95
Reason:
Note 'Berkshire Shareholder Letters' functions as an illustrative example of 'Berkshire Hathaway Acquisition'.

---
→ [[dexter-shoe-investment-mistake]]
Confidence: 0.95
Reason:
Note 'Berkshire Shareholder Letters' functions as an illustrative example of 'Dexter Shoe Acquisition Mistake'.

---
→ [[warren-buffett-quotes]]
Confidence: 0.95
Reason:
Note 'Berkshire Shareholder Letters' functions as an illustrative example of 'Selected Warren Buffett Quotes'.

---
→ [[apple-investment-case-study]]
Confidence: 0.84
Reason:
Note 'Berkshire Shareholder Letters' functions as an illustrative example of 'Apple Investment Case Study'.

---
→ [[berkshire-hathaway-energy]]
Confidence: 0.80
Reason:
Note 'Berkshire Shareholder Letters' functions as an illustrative example of 'Berkshire Hathaway Energy'.

---

### Bias from Association
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Bias from Association' extends the principles discussed in 'Lollapalooza Effect'.

---
→ [[pavlovian-association]]
Confidence: 0.90
Reason:
Note 'Bias from Association' extends the principles discussed in 'Pavlovian Association in Branding'.

---
→ [[liking-loving-tendency]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---
→ [[authority-bias-investing]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### Bill Gates Friendship
→ [[giving-pledge]]
Confidence: 0.95
Reason:
Note 'Bill Gates Friendship' discusses comparisons or tradeoffs with 'The Giving Pledge'.

---
→ [[warren-buffett-biography]]
Confidence: 0.95
Reason:
Note 'Bill Gates Friendship' discusses comparisons or tradeoffs with 'Warren Buffett Biography'.

---

### Otto von Bismarck and Realpolitik
→ [[law-29-plan-to-the-end]]
Confidence: 0.90
Reason:
Note 'Otto von Bismarck and Realpolitik' extends the principles discussed in 'Plan All the Way to the End'.

---
→ [[law-11-keep-people-dependent]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---
→ [[law-15-crush-your-enemy-totally]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### Blue Chip Stamps Investment
→ [[berkshire-insurance-businesses]]
Confidence: 0.95
Reason:
Note 'Blue Chip Stamps Investment' functions as an illustrative example of 'Berkshire's Insurance Float'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Blue Chip Stamps Investment' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[sees-candies-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Blue Chip Stamps Investment' functions as an illustrative example of 'See's Candies Case Study'.

---
→ [[wesco-financial-acquisition]]
Confidence: 0.95
Reason:
Note 'Blue Chip Stamps Investment' functions as an illustrative example of 'Wesco Financial'.

---

### BNSF Railway Acquisition
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'BNSF Railway Acquisition' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'BNSF Railway Acquisition' extends the principles discussed in 'Concept of the Economic Moat'.

---
→ [[reinvestment-moat]]
Confidence: 0.90
Reason:
Note 'BNSF Railway Acquisition' extends the principles discussed in 'Reinvestment Moat vs Legacy Moat'.

---
→ [[berkshire-hathaway-energy]]
Confidence: 0.87
Reason:
Note 'BNSF Railway Acquisition' extends the principles discussed in 'Berkshire Hathaway Energy'.

---

### 📖 Books Cheatsheet: The Duality of Habits & Power
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note '📖 Books Cheatsheet: The Duality of Habits & Power' indicates a functional dependency on 'Atomic Habit'.

---
→ [[cesare-borgia]]
Confidence: 0.95
Reason:
Note '📖 Books Cheatsheet: The Duality of Habits & Power' indicates a functional dependency on 'Cesare Borgia'.

---
→ [[commitment-devices]]
Confidence: 0.95
Reason:
Note '📖 Books Cheatsheet: The Duality of Habits & Power' indicates a functional dependency on 'Commitment Devices'.

---
→ [[environment-design]]
Confidence: 0.95
Reason:
Note '📖 Books Cheatsheet: The Duality of Habits & Power' indicates a functional dependency on 'Environment Design'.

---
→ [[goldilocks-rule]]
Confidence: 0.95
Reason:
Note '📖 Books Cheatsheet: The Duality of Habits & Power' indicates a functional dependency on 'Goldilocks Rule'.

---
→ [[growth-mindset]]
Confidence: 0.95
Reason:
Note '📖 Books Cheatsheet: The Duality of Habits & Power' indicates a functional dependency on 'Growth mindset'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note '📖 Books Cheatsheet: The Duality of Habits & Power' indicates a functional dependency on 'Habit Loop'.

---
→ [[law-01-never-outshine-the-master]]
Confidence: 0.95
Reason:
Note '📖 Books Cheatsheet: The Duality of Habits & Power' indicates a functional dependency on 'Never Outshine the Master'.

---

### Brain as a Prediction Machine
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Brain as a Prediction Machine' functions as an illustrative example of 'Habit Loop'.

---
→ [[pointing-and-calling]]
Confidence: 0.95
Reason:
Note 'Brain as a Prediction Machine' functions as an illustrative example of 'Pointing-and-Calling'.

---
→ [[habits-scorecard]]
Confidence: 0.87
Reason:
Note 'Brain as a Prediction Machine' functions as an illustrative example of 'Habits Scorecard'.

---
→ [[make-it-invisible]]
Confidence: 0.84
Reason:
Note 'Brain as a Prediction Machine' functions as an illustrative example of 'Make It Invisible'.

---
→ [[supernormal-stimulus]]
Confidence: 0.84
Reason:
Note 'Brain as a Prediction Machine' functions as an illustrative example of 'Supernormal Stimulus'.

---
→ [[habit-contracts]]
Confidence: 0.82
Reason:
Note 'Brain as a Prediction Machine' functions as an illustrative example of 'Habit Contracts'.

---
→ [[social-norms-and-habits]]
Confidence: 0.82
Reason:
Note 'Brain as a Prediction Machine' functions as an illustrative example of 'Social Norms and Habits'.

---
→ [[hebbs-law]]
Confidence: 0.82
Reason:
Note 'Brain as a Prediction Machine' functions as an illustrative example of 'Hebb's Law'.

---

### Brian Clark Fingernail Biting Example
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Brian Clark Fingernail Biting Example' functions as an illustrative example of 'Atomic Habit'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Brian Clark Fingernail Biting Example' functions as an illustrative example of 'Habit Loop'.

---
→ [[identity-based-habits]]
Confidence: 0.95
Reason:
Note 'Brian Clark Fingernail Biting Example' functions as an illustrative example of 'Identity-based Habits'.

---
→ [[reframing-hard-habits]]
Confidence: 0.95
Reason:
Note 'Brian Clark Fingernail Biting Example' functions as an illustrative example of 'Reframing Hard Habits'.

---
→ [[motivation-ritual]]
Confidence: 0.81
Reason:
Note 'Brian Clark Fingernail Biting Example' functions as an illustrative example of 'Motivation Ritual'.

---

### Bryan Harris Habit Contract
→ [[habit-contracts]]
Confidence: 0.90
Reason:
Note 'Bryan Harris Habit Contract' functions as an illustrative example of 'Habit Contracts'.

---

### Warren Buffett's Childhood Entrepreneurship
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Childhood Entrepreneurship' functions as an illustrative example of 'Long-Term Compounding'.

---
→ [[warren-buffett-biography]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Childhood Entrepreneurship' functions as an illustrative example of 'Warren Buffett Biography'.

---
→ [[buffett-frugal-lifestyle]]
Confidence: 0.90
Reason:
Note 'Warren Buffett's Childhood Entrepreneurship' functions as an illustrative example of 'Warren Buffett's Frugality'.

---
→ [[phil-carret-influence]]
Confidence: 0.88
Reason:
Note 'Warren Buffett's Childhood Entrepreneurship' functions as an illustrative example of 'Phil Carret Influence'.

---
→ [[make-money-while-you-sleep]]
Confidence: 0.84
Reason:
Note 'Warren Buffett's Childhood Entrepreneurship' functions as an illustrative example of 'Make Money While You Sleep'.

---
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.84
Reason:
Note 'Warren Buffett's Childhood Entrepreneurship' functions as an illustrative example of 'Berkshire Hathaway Acquisition'.

---
→ [[berkshire-shareholder-letters]]
Confidence: 0.83
Reason:
Note 'Warren Buffett's Childhood Entrepreneurship' functions as an illustrative example of 'Berkshire Shareholder Letters'.

---
→ [[rule-one-never-lose-money]]
Confidence: 0.83
Reason:
Note 'Warren Buffett's Childhood Entrepreneurship' functions as an illustrative example of 'Rule Number One'.

---

### Warren Buffett's Decision-Making Framework
→ [[buffett-reading-habit]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Decision-Making Framework' discusses concepts that contradict or contrast with 'Warren Buffett's Reading Habit'.

---
→ [[circle-of-competence]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Decision-Making Framework' discusses concepts that contradict or contrast with 'Circle of Competence Heuristic'.

---
→ [[commitment-consistency-bias]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Decision-Making Framework' discusses concepts that contradict or contrast with 'Commitment and Consistency Bias'.

---
→ [[debt-aversion-principle]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Decision-Making Framework' discusses concepts that contradict or contrast with 'Debt Aversion Principle'.

---
→ [[disliking-hating-tendency]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Decision-Making Framework' discusses concepts that contradict or contrast with 'Disliking and Hating Tendency'.

---
→ [[five-twenty-five-rule]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Decision-Making Framework' discusses concepts that contradict or contrast with 'The Five-Twenty-Five Rule'.

---
→ [[inversion-mental-model]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Decision-Making Framework' discusses concepts that contradict or contrast with 'Inversion Principle'.

---
→ [[liking-loving-tendency]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Decision-Making Framework' discusses concepts that contradict or contrast with 'Liking and Loving Tendency'.

---

### Warren Buffett's Delegation Model
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Delegation Model' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Delegation Model' functions as an illustrative example of 'Charlie Munger's Influence on Warren Buffett'.

---
→ [[greg-abel-successor]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Delegation Model' functions as an illustrative example of 'Greg Abel Successor'.

---
→ [[honesty-expensive-gift]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Delegation Model' functions as an illustrative example of 'Honesty is an Expensive Gift'.

---
→ [[marmon-group-acquisition]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Delegation Model' functions as an illustrative example of 'Marmon Group Acquisition'.

---
→ [[reciprocity-tendency]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Delegation Model' functions as an illustrative example of 'Reciprocity Tendency'.

---
→ [[tom-murphy-influence]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Delegation Model' functions as an illustrative example of 'Tom Murphy Influence'.

---
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.80
Reason:
Note 'Warren Buffett's Delegation Model' functions as an illustrative example of 'Berkshire Hathaway Acquisition'.

---

### Warren Buffett's Education and Benjamin Graham's Influence
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Education and Benjamin Graham's Influence' discusses comparisons or tradeoffs with 'Charlie Munger's Influence on Warren Buffett'.

---
→ [[cigar-butt-investing]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Education and Benjamin Graham's Influence' discusses comparisons or tradeoffs with 'Cigar Butt Investing'.

---
→ [[geico-acquisition]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Education and Benjamin Graham's Influence' discusses comparisons or tradeoffs with 'GEICO Acquisition'.

---
→ [[intrinsic-value]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Education and Benjamin Graham's Influence' discusses comparisons or tradeoffs with 'Concept of Intrinsic Value'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Education and Benjamin Graham's Influence' discusses comparisons or tradeoffs with 'Margin of Safety Principle'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Education and Benjamin Graham's Influence' discusses comparisons or tradeoffs with 'Value Investing Philosophy'.

---
→ [[walter-schloss-contrast]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Education and Benjamin Graham's Influence' discusses comparisons or tradeoffs with 'Walter Schloss Comparison'.

---
→ [[rule-one-never-lose-money]]
Confidence: 0.81
Reason:
Note 'Warren Buffett's Education and Benjamin Graham's Influence' discusses comparisons or tradeoffs with 'Rule Number One'.

---

### Buffett Foundation
→ [[giving-pledge]]
Confidence: 0.95
Reason:
Note 'Buffett Foundation' functions as an illustrative example of 'The Giving Pledge'.

---
→ [[susan-buffett-influence]]
Confidence: 0.90
Reason:
Note 'Buffett Foundation' functions as an illustrative example of 'Susan Thompson Buffett's Influence'.

---
→ [[estate-tax-support]]
Confidence: 0.82
Reason:
Note 'Buffett Foundation' functions as an illustrative example of 'Estate Tax Support'.

---

### Warren Buffett's Frugality
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Frugality' functions as an illustrative example of 'Long-Term Compounding'.

---
→ [[warren-buffett-biography]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Frugality' functions as an illustrative example of 'Warren Buffett Biography'.

---
→ [[buffett-childhood-entrepreneurship]]
Confidence: 0.90
Reason:
Note 'Warren Buffett's Frugality' functions as an illustrative example of 'Warren Buffett's Childhood Entrepreneurship'.

---
→ [[phil-carret-influence]]
Confidence: 0.89
Reason:
Note 'Warren Buffett's Frugality' functions as an illustrative example of 'Phil Carret Influence'.

---
→ [[make-money-while-you-sleep]]
Confidence: 0.87
Reason:
Note 'Warren Buffett's Frugality' functions as an illustrative example of 'Make Money While You Sleep'.

---
→ [[washington-post-investment]]
Confidence: 0.87
Reason:
Note 'Warren Buffett's Frugality' functions as an illustrative example of 'Washington Post Investment'.

---
→ [[berkshire-shareholder-letters]]
Confidence: 0.86
Reason:
Note 'Warren Buffett's Frugality' functions as an illustrative example of 'Berkshire Shareholder Letters'.

---
→ [[wesco-financial-acquisition]]
Confidence: 0.86
Reason:
Note 'Warren Buffett's Frugality' functions as an illustrative example of 'Wesco Financial'.

---

### Warren Buffett's Reading Habit
→ [[authority-bias-investing]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Reading Habit' extends the principles discussed in 'Authority Bias in Investing'.

---
→ [[availability-bias-investing]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Reading Habit' extends the principles discussed in 'Availability Bias in Investing'.

---
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Reading Habit' extends the principles discussed in 'Warren Buffett's Decision-Making Framework'.

---
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Reading Habit' extends the principles discussed in 'Long-Term Compounding'.

---
→ [[quiet-thinking-habit]]
Confidence: 0.95
Reason:
Note 'Warren Buffett's Reading Habit' extends the principles discussed in 'Quiet Thinking Habit'.

---

### Building resilience and grit
→ [[motivation-and-inspiration]]
Confidence: 0.90
Reason:
Note 'Building resilience and grit' extends the principles discussed in 'Motivation and inspiration'.

---
→ [[overcoming-obstacles-and-adversity]]
Confidence: 0.90
Reason:
Note 'Building resilience and grit' extends the principles discussed in 'Overcoming obstacles and adversity'.

---
→ [[personal-growth-and-development]]
Confidence: 0.90
Reason:
Note 'Building resilience and grit' extends the principles discussed in 'Personal growth and development'.

---
→ [[relationships]]
Confidence: 0.90
Reason:
Note 'Building resilience and grit' extends the principles discussed in 'Relationships'.

---
→ [[emotional-healing-and-moving-forward]]
Confidence: 0.89
Reason:
Note 'Building resilience and grit' extends the principles discussed in 'Emotional healing and moving forward'.

---
→ [[emotional-strength]]
Confidence: 0.89
Reason:
Note 'Building resilience and grit' extends the principles discussed in 'Emotional strength'.

---
→ [[growth-mindset]]
Confidence: 0.89
Reason:
Note 'Building resilience and grit' extends the principles discussed in 'Growth mindset'.

---
→ [[self-improvement-strategies]]
Confidence: 0.89
Reason:
Note 'Building resilience and grit' extends the principles discussed in 'Self-improvement strategies'.

---

### Bypass Ask Permissions Mode
→ [[learn-99-percent-claude-and-codex-in-25-mins-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Bypass Ask Permissions Mode' extends the principles discussed in 'Cheatsheet — Learn 99% Claude & Codex in 25 mins'.

---
→ [[loop-engineering]]
Confidence: 0.95
Reason:
Note 'Bypass Ask Permissions Mode' extends the principles discussed in 'Loop Engineering'.

---

### Rational Capital Allocation
→ [[apple-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Rational Capital Allocation' discusses comparisons or tradeoffs with 'Apple Investment Case Study'.

---
→ [[arbitrage-workouts]]
Confidence: 0.95
Reason:
Note 'Rational Capital Allocation' discusses comparisons or tradeoffs with 'Arbitrage and Workout Investments'.

---
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.95
Reason:
Note 'Rational Capital Allocation' discusses comparisons or tradeoffs with 'Berkshire Hathaway Acquisition'.

---
→ [[berkshire-hathaway-energy]]
Confidence: 0.95
Reason:
Note 'Rational Capital Allocation' discusses comparisons or tradeoffs with 'Berkshire Hathaway Energy'.

---
→ [[berkshire-insurance-businesses]]
Confidence: 0.95
Reason:
Note 'Rational Capital Allocation' discusses comparisons or tradeoffs with 'Berkshire's Insurance Float'.

---
→ [[blue-chip-stamps-investment]]
Confidence: 0.95
Reason:
Note 'Rational Capital Allocation' discusses comparisons or tradeoffs with 'Blue Chip Stamps Investment'.

---
→ [[bnsf-railway-acquisition]]
Confidence: 0.95
Reason:
Note 'Rational Capital Allocation' discusses comparisons or tradeoffs with 'BNSF Railway Acquisition'.

---
→ [[buffett-delegation-model]]
Confidence: 0.95
Reason:
Note 'Rational Capital Allocation' discusses comparisons or tradeoffs with 'Warren Buffett's Delegation Model'.

---

### Low Capital Intensity
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Low Capital Intensity' indicates a functional dependency on 'Rational Capital Allocation'.

---
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Low Capital Intensity' indicates a functional dependency on 'Long-Term Compounding'.

---
→ [[dairy-queen-acquisition]]
Confidence: 0.95
Reason:
Note 'Low Capital Intensity' indicates a functional dependency on 'Dairy Queen Acquisition'.

---
→ [[pampered-chef-acquisition]]
Confidence: 0.95
Reason:
Note 'Low Capital Intensity' indicates a functional dependency on 'Pampered Chef Acquisition'.

---
→ [[sees-candies-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Low Capital Intensity' indicates a functional dependency on 'See's Candies Case Study'.

---
→ [[us-air-investment-mistake]]
Confidence: 0.95
Reason:
Note 'Low Capital Intensity' indicates a functional dependency on 'US Air Investment Mistake'.

---
→ [[return-on-equity]]
Confidence: 0.86
Reason:
Note 'Low Capital Intensity' indicates a functional dependency on 'Return on Equity Metric'.

---
→ [[operating-leverage]]
Confidence: 0.85
Reason:
Note 'Low Capital Intensity' indicates a functional dependency on 'Concept of Operating Leverage'.

---

### The Cardinal Rule of Behavior Change
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'The Cardinal Rule of Behavior Change' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'The Cardinal Rule of Behavior Change' extends the principles discussed in 'Habit Loop'.

---
→ [[quote-what-is-rewarded-is-repeated]]
Confidence: 0.90
Reason:
Note 'The Cardinal Rule of Behavior Change' extends the principles discussed in 'What is Rewarded is Repeated'.

---
→ [[reinforcement]]
Confidence: 0.86
Reason:
Note 'The Cardinal Rule of Behavior Change' extends the principles discussed in 'Reinforcement Principle'.

---

### Cash Register Automation
→ [[habit-tracking]]
Confidence: 0.95
Reason:
Note 'Cash Register Automation' functions as an illustrative example of 'Habit Tracking'.

---
→ [[make-it-invisible]]
Confidence: 0.95
Reason:
Note 'Cash Register Automation' functions as an illustrative example of 'Make It Invisible'.

---
→ [[victor-hugo-closet-lock]]
Confidence: 0.95
Reason:
Note 'Cash Register Automation' functions as an illustrative example of 'Victor Hugo Closet Lock'.

---

### Cesare Borgia
→ [[law-26-keep-your-hands-clean]]
Confidence: 0.90
Reason:
Note 'Cesare Borgia' extends the principles discussed in 'Keep Your Hands Clean'.

---

### Charlie Munger's Influence on Warren Buffett
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.95
Reason:
Note 'Charlie Munger's Influence on Warren Buffett' functions as an illustrative example of 'Berkshire Hathaway Acquisition'.

---
→ [[buffett-delegation-model]]
Confidence: 0.95
Reason:
Note 'Charlie Munger's Influence on Warren Buffett' functions as an illustrative example of 'Warren Buffett's Delegation Model'.

---
→ [[buffett-education-and-graham-influence]]
Confidence: 0.95
Reason:
Note 'Charlie Munger's Influence on Warren Buffett' functions as an illustrative example of 'Warren Buffett's Education and Benjamin Graham's Influence'.

---
→ [[cigar-butt-investing]]
Confidence: 0.95
Reason:
Note 'Charlie Munger's Influence on Warren Buffett' functions as an illustrative example of 'Cigar Butt Investing'.

---
→ [[coca-cola-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Charlie Munger's Influence on Warren Buffett' functions as an illustrative example of 'Coca-Cola Investment Case Study'.

---
→ [[inversion-mental-model]]
Confidence: 0.95
Reason:
Note 'Charlie Munger's Influence on Warren Buffett' functions as an illustrative example of 'Inversion Principle'.

---
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Charlie Munger's Influence on Warren Buffett' functions as an illustrative example of 'Lollapalooza Effect'.

---
→ [[sees-candies-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Charlie Munger's Influence on Warren Buffett' functions as an illustrative example of 'See's Candies Case Study'.

---

### Cigar Butt Investing
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'Cigar Butt Investing' discusses comparisons or tradeoffs with 'Charlie Munger's Influence on Warren Buffett'.

---
→ [[dempster-mill-investment]]
Confidence: 0.95
Reason:
Note 'Cigar Butt Investing' discusses comparisons or tradeoffs with 'Dempster Mill Investment'.

---
→ [[sanborn-map-investment]]
Confidence: 0.95
Reason:
Note 'Cigar Butt Investing' discusses comparisons or tradeoffs with 'Sanborn Map Company Investment'.

---
→ [[sees-candies-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Cigar Butt Investing' discusses comparisons or tradeoffs with 'See's Candies Case Study'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Cigar Butt Investing' discusses comparisons or tradeoffs with 'Value Investing Philosophy'.

---
→ [[walter-schloss-contrast]]
Confidence: 0.95
Reason:
Note 'Cigar Butt Investing' discusses comparisons or tradeoffs with 'Walter Schloss Comparison'.

---
→ [[buffett-education-and-graham-influence]]
Confidence: 0.81
Reason:
Note 'Cigar Butt Investing' discusses comparisons or tradeoffs with 'Warren Buffett's Education and Benjamin Graham's Influence'.

---

### Circle of Competence Heuristic
→ [[apple-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Circle of Competence Heuristic' extends the principles discussed in 'Apple Investment Case Study'.

---
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Circle of Competence Heuristic' extends the principles discussed in 'Warren Buffett's Decision-Making Framework'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Circle of Competence Heuristic' extends the principles discussed in 'Margin of Safety Principle'.

---
→ [[risk-free-rate-hurdle]]
Confidence: 0.95
Reason:
Note 'Circle of Competence Heuristic' extends the principles discussed in 'Risk-Free Rate Benchmark'.

---
→ [[twenty-punches-card-rule]]
Confidence: 0.95
Reason:
Note 'Circle of Competence Heuristic' extends the principles discussed in 'Twenty Punches Card Rule'.

---
→ [[us-air-investment-mistake]]
Confidence: 0.95
Reason:
Note 'Circle of Competence Heuristic' extends the principles discussed in 'US Air Investment Mistake'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Circle of Competence Heuristic' extends the principles discussed in 'Value Investing Philosophy'.

---
→ [[warren-buffett-quotes]]
Confidence: 0.95
Reason:
Note 'Circle of Competence Heuristic' extends the principles discussed in 'Selected Warren Buffett Quotes'.

---

### Every Level of a Claude Second Brain Explained
→ [[local-filesystem-agent-advantage]]
Confidence: 0.95
Reason:
Note 'Every Level of a Claude Second Brain Explained' functions as an illustrative example of 'Local File System Access Advantage'.

---
→ [[loop-engineering]]
Confidence: 0.95
Reason:
Note 'Every Level of a Claude Second Brain Explained' functions as an illustrative example of 'Loop Engineering'.

---
→ [[pkm-development-phases]]
Confidence: 0.95
Reason:
Note 'Every Level of a Claude Second Brain Explained' functions as an illustrative example of 'PKM Development Phases'.

---
→ [[relationships]]
Confidence: 0.95
Reason:
Note 'Every Level of a Claude Second Brain Explained' functions as an illustrative example of 'Relationships'.

---
→ [[learn-99-percent-claude-and-codex-in-25-mins-cheatsheet]]
Confidence: 0.83
Reason:
Note 'Every Level of a Claude Second Brain Explained' functions as an illustrative example of 'Cheatsheet — Learn 99% Claude & Codex in 25 mins'.

---

### Clayton Homes Acquisition
→ [[berkshire-insurance-businesses]]
Confidence: 0.95
Reason:
Note 'Clayton Homes Acquisition' functions as an illustrative example of 'Berkshire's Insurance Float'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Clayton Homes Acquisition' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Clayton Homes Acquisition' functions as an illustrative example of 'Concept of the Economic Moat'.

---
→ [[netjets-acquisition]]
Confidence: 0.90
Reason:
Note 'Clayton Homes Acquisition' functions as an illustrative example of 'NetJets Acquisition'.

---
→ [[shaw-industries-acquisition]]
Confidence: 0.90
Reason:
Note 'Clayton Homes Acquisition' functions as an illustrative example of 'Shaw Industries Acquisition'.

---
→ [[geico-acquisition]]
Confidence: 0.88
Reason:
Note 'Clayton Homes Acquisition' functions as an illustrative example of 'GEICO Acquisition'.

---
→ [[precision-castparts-acquisition]]
Confidence: 0.85
Reason:
Note 'Clayton Homes Acquisition' functions as an illustrative example of 'Precision Castparts Acquisition'.

---
→ [[flightsafety-acquisition]]
Confidence: 0.84
Reason:
Note 'Clayton Homes Acquisition' functions as an illustrative example of 'FlightSafety Acquisition'.

---

### Coca-Cola Investment Case Study
→ [[apple-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Coca-Cola Investment Case Study' extends the principles discussed in 'Apple Investment Case Study'.

---
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'Coca-Cola Investment Case Study' extends the principles discussed in 'Charlie Munger's Influence on Warren Buffett'.

---
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Coca-Cola Investment Case Study' extends the principles discussed in 'Long-Term Compounding'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Coca-Cola Investment Case Study' extends the principles discussed in 'Concept of the Economic Moat'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Coca-Cola Investment Case Study' extends the principles discussed in 'Margin of Safety Principle'.

---
→ [[pavlovian-association]]
Confidence: 0.95
Reason:
Note 'Coca-Cola Investment Case Study' extends the principles discussed in 'Pavlovian Association in Branding'.

---
→ [[sees-candies-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Coca-Cola Investment Case Study' extends the principles discussed in 'See's Candies Case Study'.

---
→ [[gillette-investment]]
Confidence: 0.83
Reason:
High conceptual similarity score of 83%.

---

### Commitment and Consistency Bias
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Commitment and Consistency Bias' indicates a functional dependency on 'Warren Buffett's Decision-Making Framework'.

---
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Commitment and Consistency Bias' indicates a functional dependency on 'Lollapalooza Effect'.

---
→ [[availability-bias-investing]]
Confidence: 0.90
Reason:
Note 'Commitment and Consistency Bias' indicates a functional dependency on 'Availability Bias in Investing'.

---
→ [[scarcity-bias-investing]]
Confidence: 0.89
Reason:
Note 'Commitment and Consistency Bias' indicates a functional dependency on 'Scarcity Bias in Investing'.

---
→ [[authority-bias-investing]]
Confidence: 0.88
Reason:
Note 'Commitment and Consistency Bias' indicates a functional dependency on 'Authority Bias in Investing'.

---
→ [[liking-loving-tendency]]
Confidence: 0.87
Reason:
Note 'Commitment and Consistency Bias' indicates a functional dependency on 'Liking and Loving Tendency'.

---
→ [[social-proof-bias]]
Confidence: 0.86
Reason:
Note 'Commitment and Consistency Bias' indicates a functional dependency on 'Social Proof in Investing'.

---
→ [[bias-from-association]]
Confidence: 0.85
Reason:
Note 'Commitment and Consistency Bias' indicates a functional dependency on 'Bias from Association'.

---

### Commitment Devices
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Commitment Devices' functions as an illustrative example of '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[make-it-invisible]]
Confidence: 0.95
Reason:
Note 'Commitment Devices' functions as an illustrative example of 'Make It Invisible'.

---
→ [[pointing-and-calling]]
Confidence: 0.95
Reason:
Note 'Commitment Devices' functions as an illustrative example of 'Pointing-and-Calling'.

---
→ [[decisive-moments]]
Confidence: 0.90
Reason:
Note 'Commitment Devices' functions as an illustrative example of 'Decisive Moments'.

---
→ [[victor-hugo-closet-lock]]
Confidence: 0.89
Reason:
Note 'Commitment Devices' functions as an illustrative example of 'Victor Hugo Closet Lock'.

---
→ [[habit-contracts]]
Confidence: 0.86
Reason:
Note 'Commitment Devices' functions as an illustrative example of 'Habit Contracts'.

---
→ [[habits-scorecard]]
Confidence: 0.85
Reason:
Note 'Commitment Devices' functions as an illustrative example of 'Habits Scorecard'.

---
→ [[supernormal-stimulus]]
Confidence: 0.84
Reason:
Note 'Commitment Devices' functions as an illustrative example of 'Supernormal Stimulus'.

---

### Long-Term Compounding
→ [[berkshire-hathaway-energy]]
Confidence: 0.95
Reason:
Note 'Long-Term Compounding' indicates a functional dependency on 'Berkshire Hathaway Energy'.

---
→ [[berkshire-insurance-businesses]]
Confidence: 0.95
Reason:
Note 'Long-Term Compounding' indicates a functional dependency on 'Berkshire's Insurance Float'.

---
→ [[buffett-childhood-entrepreneurship]]
Confidence: 0.95
Reason:
Note 'Long-Term Compounding' indicates a functional dependency on 'Warren Buffett's Childhood Entrepreneurship'.

---
→ [[buffett-frugal-lifestyle]]
Confidence: 0.95
Reason:
Note 'Long-Term Compounding' indicates a functional dependency on 'Warren Buffett's Frugality'.

---
→ [[buffett-reading-habit]]
Confidence: 0.95
Reason:
Note 'Long-Term Compounding' indicates a functional dependency on 'Warren Buffett's Reading Habit'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Long-Term Compounding' indicates a functional dependency on 'Rational Capital Allocation'.

---
→ [[capital-intensity]]
Confidence: 0.95
Reason:
Note 'Long-Term Compounding' indicates a functional dependency on 'Low Capital Intensity'.

---
→ [[coca-cola-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Long-Term Compounding' indicates a functional dependency on 'Coca-Cola Investment Case Study'.

---

### Joseph 'Yellow Kid' Weil
→ [[strategic-deception]]
Confidence: 0.90
Reason:
Note 'Joseph 'Yellow Kid' Weil' extends the principles discussed in 'Strategic Deception'.

---

### Contrast Effect Bias
→ [[intrinsic-value]]
Confidence: 0.95
Reason:
Note 'Contrast Effect Bias' discusses concepts that contradict or contrast with 'Concept of Intrinsic Value'.

---
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Contrast Effect Bias' discusses concepts that contradict or contrast with 'Lollapalooza Effect'.

---
→ [[opportunity-cost-heuristic]]
Confidence: 0.95
Reason:
Note 'Contrast Effect Bias' discusses concepts that contradict or contrast with 'Opportunity Cost Heuristic'.

---
→ [[liking-loving-tendency]]
Confidence: 0.90
Reason:
Note 'Contrast Effect Bias' discusses concepts that contradict or contrast with 'Liking and Loving Tendency'.

---
→ [[scarcity-bias-investing]]
Confidence: 0.89
Reason:
Note 'Contrast Effect Bias' discusses concepts that contradict or contrast with 'Scarcity Bias in Investing'.

---
→ [[authority-bias-investing]]
Confidence: 0.89
Reason:
Note 'Contrast Effect Bias' discusses concepts that contradict or contrast with 'Authority Bias in Investing'.

---
→ [[availability-bias-investing]]
Confidence: 0.88
Reason:
Note 'Contrast Effect Bias' discusses concepts that contradict or contrast with 'Availability Bias in Investing'.

---
→ [[commitment-consistency-bias]]
Confidence: 0.85
Reason:
Note 'Contrast Effect Bias' discusses concepts that contradict or contrast with 'Commitment and Consistency Bias'.

---

### Court Power
→ [[haile-selassie-court]]
Confidence: 0.95
Reason:
Note 'Court Power' extends the principles discussed in 'Haile Selassie's Court of Dependency'.

---
→ [[power-as-a-social-game]]
Confidence: 0.95
Reason:
Note 'Court Power' extends the principles discussed in 'Power as an Amoral Social Game'.

---
→ [[the-illusion-of-equality]]
Confidence: 0.95
Reason:
Note 'Court Power' extends the principles discussed in 'The Illusion of Equality'.

---
→ [[law-24-play-the-perfect-courtier]]
Confidence: 0.90
Reason:
Note 'Court Power' extends the principles discussed in 'Play the Perfect Courtier'.

---
→ [[louis-xiv-versailles]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---

### Dairy Queen Acquisition
→ [[capital-intensity]]
Confidence: 0.95
Reason:
Note 'Dairy Queen Acquisition' extends the principles discussed in 'Low Capital Intensity'.

---
→ [[pampered-chef-acquisition]]
Confidence: 0.95
Reason:
Note 'Dairy Queen Acquisition' extends the principles discussed in 'Pampered Chef Acquisition'.

---
→ [[sees-candies-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Dairy Queen Acquisition' extends the principles discussed in 'See's Candies Case Study'.

---
→ [[return-on-equity]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### Dealing with failure and bouncing back
→ [[law-19-know-who-youre-dealing-with]]
Confidence: 0.90
Reason:
Note 'Dealing with failure and bouncing back' extends the principles discussed in 'Know Who You're Dealing With — Do Not Offend the Wrong Person'.

---
→ [[musk-on-failure-quote]]
Confidence: 0.86
Reason:
Note 'Dealing with failure and bouncing back' extends the principles discussed in 'Failure Is Not An Option — It Is Built In'.

---
→ [[failure-is-innovation-required]]
Confidence: 0.80
Reason:
High conceptual similarity score of 80%.

---

### Debt Aversion Principle
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Debt Aversion Principle' indicates a functional dependency on 'Warren Buffett's Decision-Making Framework'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Debt Aversion Principle' indicates a functional dependency on 'Rational Capital Allocation'.

---
→ [[geeks-bearing-formulas]]
Confidence: 0.95
Reason:
Note 'Debt Aversion Principle' indicates a functional dependency on 'Geeks Bearing Formulas'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Debt Aversion Principle' indicates a functional dependency on 'Margin of Safety Principle'.

---
→ [[tide-goes-out-naked-swimming]]
Confidence: 0.95
Reason:
Note 'Debt Aversion Principle' indicates a functional dependency on 'Swimming Naked Heuristic'.

---

### Decisive Moments
→ [[commitment-devices]]
Confidence: 0.95
Reason:
Note 'Decisive Moments' functions as an illustrative example of 'Commitment Devices'.

---
→ [[environment-priming]]
Confidence: 0.95
Reason:
Note 'Decisive Moments' functions as an illustrative example of 'Environment Priming'.

---
→ [[one-percent-better-every-day]]
Confidence: 0.95
Reason:
Note 'Decisive Moments' functions as an illustrative example of 'One Percent Better Every Day'.

---
→ [[you-do-not-rise-to-the-level-of-your-goals]]
Confidence: 0.95
Reason:
Note 'Decisive Moments' functions as an illustrative example of 'You Do Not Rise to the Level of Your Goals'.

---
→ [[two-minute-rule]]
Confidence: 0.86
Reason:
Note 'Decisive Moments' functions as an illustrative example of 'Two-Minute Rule'.

---
→ [[law-of-least-effort]]
Confidence: 0.84
Reason:
Note 'Decisive Moments' functions as an illustrative example of 'Law of Least Effort'.

---
→ [[law-33-discover-each-mans-thumbscrew]]
Confidence: 0.84
Reason:
Note 'Decisive Moments' functions as an illustrative example of 'Discover Each Man's Thumbscrew'.

---
→ [[atomic-habit]]
Confidence: 0.83
Reason:
Note 'Decisive Moments' functions as an illustrative example of 'Atomic Habit'.

---

### Delayed-Return Environment
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Delayed-Return Environment' functions as an illustrative example of 'Atomic Habit'.

---
→ [[immediate-return-environment]]
Confidence: 0.90
Reason:
Note 'Delayed-Return Environment' functions as an illustrative example of 'Immediate-Return Environment'.

---

### Delete Before Optimize
→ [[delete-then-optimize-loop]]
Confidence: 0.90
Reason:
Note 'Delete Before Optimize' indicates a functional dependency on 'Delete-Then-Optimize Loop'.

---
→ [[algorithm-design-sequence]]
Confidence: 0.85
Reason:
Note 'Delete Before Optimize' indicates a functional dependency on 'Algorithm Design Sequence'.

---

### Delete-Then-Optimize Loop
→ [[question-every-requirement]]
Confidence: 0.95
Reason:
Note 'Delete-Then-Optimize Loop' extends the principles discussed in 'Question Every Requirement'.

---
→ [[algorithm-design-sequence]]
Confidence: 0.90
Reason:
Note 'Delete-Then-Optimize Loop' extends the principles discussed in 'Algorithm Design Sequence'.

---
→ [[delete-before-optimize]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---

### Dempster Mill Investment
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Dempster Mill Investment' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[cigar-butt-investing]]
Confidence: 0.95
Reason:
Note 'Dempster Mill Investment' functions as an illustrative example of 'Cigar Butt Investing'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Dempster Mill Investment' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[sanborn-map-investment]]
Confidence: 0.90
Reason:
Note 'Dempster Mill Investment' functions as an illustrative example of 'Sanborn Map Company Investment'.

---

### Developing mental toughness
→ [[relationships]]
Confidence: 0.90
Reason:
Note 'Developing mental toughness' extends the principles discussed in 'Relationships'.

---
→ [[emotional-strength]]
Confidence: 0.90
Reason:
Note 'Developing mental toughness' extends the principles discussed in 'Emotional strength'.

---
→ [[growth-mindset]]
Confidence: 0.90
Reason:
Note 'Developing mental toughness' extends the principles discussed in 'Growth mindset'.

---
→ [[self-improvement-strategies]]
Confidence: 0.90
Reason:
Note 'Developing mental toughness' extends the principles discussed in 'Self-improvement strategies'.

---
→ [[be-mentally-strong]]
Confidence: 0.89
Reason:
Note 'Developing mental toughness' extends the principles discussed in 'Be mentally strong'.

---
→ [[motivation-and-inspiration]]
Confidence: 0.89
Reason:
Note 'Developing mental toughness' extends the principles discussed in 'Motivation and inspiration'.

---
→ [[powerful-mindset-shifts]]
Confidence: 0.89
Reason:
Note 'Developing mental toughness' extends the principles discussed in 'Powerful mindset shifts'.

---
→ [[building-resilience-and-grit]]
Confidence: 0.89
Reason:
Note 'Developing mental toughness' extends the principles discussed in 'Building resilience and grit'.

---

### Dexter Shoe Acquisition Mistake
→ [[berkshire-shareholder-letters]]
Confidence: 0.95
Reason:
Note 'Dexter Shoe Acquisition Mistake' functions as an illustrative example of 'Berkshire Shareholder Letters'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Dexter Shoe Acquisition Mistake' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[sees-candies-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Dexter Shoe Acquisition Mistake' functions as an illustrative example of 'See's Candies Case Study'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Dexter Shoe Acquisition Mistake' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[us-air-investment-mistake]]
Confidence: 0.90
Reason:
Note 'Dexter Shoe Acquisition Mistake' functions as an illustrative example of 'US Air Investment Mistake'.

---
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.84
Reason:
Note 'Dexter Shoe Acquisition Mistake' functions as an illustrative example of 'Berkshire Hathaway Acquisition'.

---
→ [[apple-investment-case-study]]
Confidence: 0.83
Reason:
Note 'Dexter Shoe Acquisition Mistake' functions as an illustrative example of 'Apple Investment Case Study'.

---
→ [[gen-re-acquisition]]
Confidence: 0.81
Reason:
Note 'Dexter Shoe Acquisition Mistake' functions as an illustrative example of 'General Reinsurance Acquisition'.

---

### The Diderot Effect
→ [[habit-stacking]]
Confidence: 0.90
Reason:
Note 'The Diderot Effect' functions as an illustrative example of 'Habit Stacking Method'.

---
→ [[two-minute-rule]]
Confidence: 0.81
Reason:
Note 'The Diderot Effect' functions as an illustrative example of 'Two-Minute Rule'.

---

### Disliking and Hating Tendency
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Disliking and Hating Tendency' extends the principles discussed in 'Warren Buffett's Decision-Making Framework'.

---
→ [[liking-loving-tendency]]
Confidence: 0.95
Reason:
Note 'Disliking and Hating Tendency' extends the principles discussed in 'Liking and Loving Tendency'.

---
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Disliking and Hating Tendency' extends the principles discussed in 'Lollapalooza Effect'.

---

### The Dopamine-Driven Feedback Loop
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'The Dopamine-Driven Feedback Loop' functions as an illustrative example of 'Habit Loop'.

---
→ [[motivation-ritual]]
Confidence: 0.95
Reason:
Note 'The Dopamine-Driven Feedback Loop' functions as an illustrative example of 'Motivation Ritual'.

---
→ [[premacks-principle]]
Confidence: 0.95
Reason:
Note 'The Dopamine-Driven Feedback Loop' functions as an illustrative example of 'Premack's Principle'.

---
→ [[skinner-box-variable-rewards]]
Confidence: 0.95
Reason:
Note 'The Dopamine-Driven Feedback Loop' functions as an illustrative example of 'Skinner Box Variable Rewards'.

---
→ [[temptation-bundling]]
Confidence: 0.95
Reason:
Note 'The Dopamine-Driven Feedback Loop' functions as an illustrative example of 'Temptation Bundling'.

---

### Concept of the Economic Moat
→ [[amex-salad-oil-investment]]
Confidence: 0.95
Reason:
Note 'Concept of the Economic Moat' discusses comparisons or tradeoffs with 'AmEx Salad Oil Scandal Investment'.

---
→ [[apple-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Concept of the Economic Moat' discusses comparisons or tradeoffs with 'Apple Investment Case Study'.

---
→ [[benjamin-moore-acquisition]]
Confidence: 0.95
Reason:
Note 'Concept of the Economic Moat' discusses comparisons or tradeoffs with 'Benjamin Moore Acquisition'.

---
→ [[bnsf-railway-acquisition]]
Confidence: 0.95
Reason:
Note 'Concept of the Economic Moat' discusses comparisons or tradeoffs with 'BNSF Railway Acquisition'.

---
→ [[clayton-homes-acquisition]]
Confidence: 0.95
Reason:
Note 'Concept of the Economic Moat' discusses comparisons or tradeoffs with 'Clayton Homes Acquisition'.

---
→ [[coca-cola-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Concept of the Economic Moat' discusses comparisons or tradeoffs with 'Coca-Cola Investment Case Study'.

---
→ [[flightsafety-acquisition]]
Confidence: 0.95
Reason:
Note 'Concept of the Economic Moat' discusses comparisons or tradeoffs with 'FlightSafety Acquisition'.

---
→ [[geico-acquisition]]
Confidence: 0.95
Reason:
Note 'Concept of the Economic Moat' discusses comparisons or tradeoffs with 'GEICO Acquisition'.

---

### Elon Musk Childhood
→ [[elon-musk-zip2]]
Confidence: 0.90
Reason:
Note 'Elon Musk Childhood' extends the principles discussed in 'Elon Musk Zip2'.

---
→ [[elon-musk-spacex-founding]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---
→ [[tesla-production-hell]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---
→ [[elon-musk-tesla-founding]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---
→ [[elon-musk-education]]
Confidence: 0.81
Reason:
High conceptual similarity score of 80%.

---

### Elon Musk Education
→ [[elon-musk-zip2]]
Confidence: 0.90
Reason:
Note 'Elon Musk Education' extends the principles discussed in 'Elon Musk Zip2'.

---
→ [[elon-musk-hiring-philosophy]]
Confidence: 0.89
Reason:
Note 'Elon Musk Education' extends the principles discussed in 'Evidence of Exceptional Ability Hiring'.

---
→ [[physics-constraint-test]]
Confidence: 0.88
Reason:
Note 'Elon Musk Education' extends the principles discussed in 'Physics Constraint Test'.

---
→ [[first-principles-thinking]]
Confidence: 0.87
Reason:
Note 'Elon Musk Education' extends the principles discussed in 'First Principles Thinking'.

---
→ [[reasoning-by-analogy]]
Confidence: 0.86
Reason:
Note 'Elon Musk Education' extends the principles discussed in 'Reasoning by Analogy'.

---
→ [[long-term-time-horizon]]
Confidence: 0.86
Reason:
Note 'Elon Musk Education' extends the principles discussed in 'Long-Term Time Horizon'.

---
→ [[elon-musk-childhood]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---
→ [[elon-musk-spacex-founding]]
Confidence: 0.83
Reason:
High conceptual similarity score of 82%.

---

### Evidence of Exceptional Ability Hiring
→ [[talent-density-principle]]
Confidence: 0.90
Reason:
Note 'Evidence of Exceptional Ability Hiring' extends the principles discussed in 'Talent Density Principle'.

---
→ [[musk-time-blocking-habit]]
Confidence: 0.84
Reason:
High conceptual similarity score of 84%.

---
→ [[musk-working-hours-expectation]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---

### Neuralink Mission
→ [[musk-ai-risk-philosophy]]
Confidence: 0.90
Reason:
Note 'Neuralink Mission' discusses concepts that contradict or contrast with 'AI Existential Risk Philosophy'.

---

### Elon Musk SpaceX Founding
→ [[prototype-then-iterate]]
Confidence: 0.95
Reason:
Note 'Elon Musk SpaceX Founding' extends the principles discussed in 'Prototype-Then-Iterate'.

---
→ [[spacex-falcon-1-failures]]
Confidence: 0.90
Reason:
Note 'Elon Musk SpaceX Founding' extends the principles discussed in 'SpaceX Falcon 1 Launch Failures'.

---

### Starlink Business Strategy
→ [[musk-mars-colonization-vision]]
Confidence: 0.90
Reason:
Note 'Starlink Business Strategy' indicates a functional dependency on 'Mars Colonization Mission'.

---

### Elon Musk Tesla Founding
→ [[elon-musk-xcom-paypal]]
Confidence: 0.90
Reason:
Note 'Elon Musk Tesla Founding' extends the principles discussed in 'Elon Musk X.com PayPal'.

---
→ [[elon-musk-spacex-founding]]
Confidence: 0.90
Reason:
Note 'Elon Musk Tesla Founding' extends the principles discussed in 'Elon Musk SpaceX Founding'.

---
→ [[tesla-production-hell]]
Confidence: 0.89
Reason:
Note 'Elon Musk Tesla Founding' extends the principles discussed in 'Tesla Model 3 Production Hell'.

---
→ [[long-term-time-horizon]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---

### The Boring Company Concept
→ [[idiot-index]]
Confidence: 0.95
Reason:
Note 'The Boring Company Concept' extends the principles discussed in 'Idiot Index'.

---
→ [[prototype-then-iterate]]
Confidence: 0.95
Reason:
Note 'The Boring Company Concept' extends the principles discussed in 'Prototype-Then-Iterate'.

---
→ [[speed-of-iteration-principle]]
Confidence: 0.90
Reason:
Note 'The Boring Company Concept' extends the principles discussed in 'Speed of Iteration Principle'.

---
→ [[musk-time-blocking-habit]]
Confidence: 0.87
Reason:
Note 'The Boring Company Concept' extends the principles discussed in 'Time Blocking Productivity Method'.

---
→ [[elon-musk-spacex-founding]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---

### xAI Founding
→ [[musk-ai-risk-philosophy]]
Confidence: 0.90
Reason:
Note 'xAI Founding' extends the principles discussed in 'AI Existential Risk Philosophy'.

---

### Elon Musk X.com PayPal
→ [[elon-musk-tesla-founding]]
Confidence: 0.90
Reason:
Note 'Elon Musk X.com PayPal' extends the principles discussed in 'Elon Musk Tesla Founding'.

---
→ [[elon-musk-spacex-founding]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---
→ [[elon-musk-zip2]]
Confidence: 0.81
Reason:
High conceptual similarity score of 80%.

---

### Elon Musk Zip2
→ [[prototype-then-iterate]]
Confidence: 0.95
Reason:
Note 'Elon Musk Zip2' extends the principles discussed in 'Prototype-Then-Iterate'.

---
→ [[elon-musk-xcom-paypal]]
Confidence: 0.90
Reason:
Note 'Elon Musk Zip2' extends the principles discussed in 'Elon Musk X.com PayPal'.

---
→ [[elon-musk-childhood]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---
→ [[elon-musk-education]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---

### Emotional healing and moving forward
→ [[emotional-strength]]
Confidence: 0.90
Reason:
Note 'Emotional healing and moving forward' extends the principles discussed in 'Emotional strength'.

---

### Emotional strength
→ [[finding-your-inner-strength]]
Confidence: 0.90
Reason:
Note 'Emotional strength' extends the principles discussed in 'Finding your inner strength'.

---
→ [[emotional-healing-and-moving-forward]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---

### Environment Design
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Environment Design' functions as an illustrative example of '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[environment-priming]]
Confidence: 0.95
Reason:
Note 'Environment Design' functions as an illustrative example of 'Environment Priming'.

---
→ [[pointing-and-calling]]
Confidence: 0.95
Reason:
Note 'Environment Design' functions as an illustrative example of 'Pointing-and-Calling'.

---
→ [[vietnam-veterans-heroin-study]]
Confidence: 0.95
Reason:
Note 'Environment Design' functions as an illustrative example of 'Vietnam Veterans Heroin Study'.

---
→ [[anne-thorndike-cafeteria-study]]
Confidence: 0.82
Reason:
Note 'Environment Design' functions as an illustrative example of 'Anne Thorndike Cafeteria Study'.

---
→ [[make-it-invisible]]
Confidence: 0.81
Reason:
Note 'Environment Design' functions as an illustrative example of 'Make It Invisible'.

---

### Environment Priming
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Environment Priming' functions as an illustrative example of '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[environment-design]]
Confidence: 0.90
Reason:
Note 'Environment Priming' functions as an illustrative example of 'Environment Design'.

---

### Estate Tax Support
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Estate Tax Support' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[giving-pledge]]
Confidence: 0.95
Reason:
Note 'Estate Tax Support' functions as an illustrative example of 'The Giving Pledge'.

---
→ [[buffett-foundation]]
Confidence: 0.90
Reason:
Note 'Estate Tax Support' functions as an illustrative example of 'Buffett Foundation'.

---
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.87
Reason:
Note 'Estate Tax Support' functions as an illustrative example of 'Berkshire Hathaway Acquisition'.

---
→ [[berkshire-hathaway-energy]]
Confidence: 0.87
Reason:
Note 'Estate Tax Support' functions as an illustrative example of 'Berkshire Hathaway Energy'.

---
→ [[berkshire-shareholder-letters]]
Confidence: 0.85
Reason:
Note 'Estate Tax Support' functions as an illustrative example of 'Berkshire Shareholder Letters'.

---
→ [[greg-abel-successor]]
Confidence: 0.83
Reason:
Note 'Estate Tax Support' functions as an illustrative example of 'Greg Abel Successor'.

---
→ [[marmon-group-acquisition]]
Confidence: 0.83
Reason:
Note 'Estate Tax Support' functions as an illustrative example of 'Marmon Group Acquisition'.

---

### External Code Review Guardrails
→ [[agent-loop-architectures]]
Confidence: 0.95
Reason:
Note 'External Code Review Guardrails' extends the principles discussed in 'Agent Loop Architectures'.

---
→ [[learn-99-percent-claude-and-codex-in-25-mins-cheatsheet]]
Confidence: 0.95
Reason:
Note 'External Code Review Guardrails' extends the principles discussed in 'Cheatsheet — Learn 99% Claude & Codex in 25 mins'.

---
→ [[self-fixing-code-loops]]
Confidence: 0.95
Reason:
Note 'External Code Review Guardrails' extends the principles discussed in 'Self-Fixing Code Loops'.

---

### Failure Is Innovation Required
→ [[prototype-then-iterate]]
Confidence: 0.95
Reason:
Note 'Failure Is Innovation Required' indicates a functional dependency on 'Prototype-Then-Iterate'.

---
→ [[musk-on-failure-quote]]
Confidence: 0.90
Reason:
Note 'Failure Is Innovation Required' indicates a functional dependency on 'Failure Is Not An Option — It Is Built In'.

---
→ [[spacex-falcon-1-failures]]
Confidence: 0.84
Reason:
Note 'Failure Is Innovation Required' indicates a functional dependency on 'SpaceX Falcon 1 Launch Failures'.

---

### Fermi Estimation
→ [[physics-constraint-test]]
Confidence: 0.90
Reason:
Note 'Fermi Estimation' extends the principles discussed in 'Physics Constraint Test'.

---

### Few-Shot vs Zero-Shot Prompting
→ [[prompt-learning-codes]]
Confidence: 0.90
Reason:
Note 'Few-Shot vs Zero-Shot Prompting' discusses comparisons or tradeoffs with 'Prompt Learning Codes'.

---
→ [[race-prompt-framework]]
Confidence: 0.84
Reason:
Note 'Few-Shot vs Zero-Shot Prompting' discusses comparisons or tradeoffs with 'RACE Prompt Framework'.

---

### Cheatsheet — Finally. Agent Loops Clearly Explained
→ [[agent-loop-architectures]]
Confidence: 0.95
Reason:
Note 'Cheatsheet — Finally. Agent Loops Clearly Explained' extends the principles discussed in 'Agent Loop Architectures'.

---
→ [[agent-loop-done-criteria]]
Confidence: 0.95
Reason:
Note 'Cheatsheet — Finally. Agent Loops Clearly Explained' extends the principles discussed in 'Done Criteria in Agent Loops'.

---
→ [[agent-loop-mechanics]]
Confidence: 0.95
Reason:
Note 'Cheatsheet — Finally. Agent Loops Clearly Explained' extends the principles discussed in 'Agent Loop Mechanics'.

---
→ [[loop-engineering]]
Confidence: 0.95
Reason:
Note 'Cheatsheet — Finally. Agent Loops Clearly Explained' extends the principles discussed in 'Loop Engineering'.

---
→ [[loop-verification-importance]]
Confidence: 0.95
Reason:
Note 'Cheatsheet — Finally. Agent Loops Clearly Explained' extends the principles discussed in 'Importance of the Verification Step'.

---

### Finding your inner strength
→ [[emotional-strength]]
Confidence: 0.90
Reason:
Note 'Finding your inner strength' extends the principles discussed in 'Emotional strength'.

---

### First Principles Build Rule
→ [[reasoning-by-analogy]]
Confidence: 0.95
Reason:
Note 'First Principles Build Rule' indicates a functional dependency on 'Reasoning by Analogy'.

---
→ [[musk-on-first-principles-quote]]
Confidence: 0.90
Reason:
Note 'First Principles Build Rule' indicates a functional dependency on 'Reasoning from First Principles'.

---
→ [[first-principles-thinking]]
Confidence: 0.86
Reason:
Note 'First Principles Build Rule' indicates a functional dependency on 'First Principles Thinking'.

---

### First Principles Prompting
→ [[reasoning-by-analogy]]
Confidence: 0.95
Reason:
Note 'First Principles Prompting' functions as an illustrative example of 'Reasoning by Analogy'.

---
→ [[socratic-prompting]]
Confidence: 0.90
Reason:
Note 'First Principles Prompting' functions as an illustrative example of 'Socratic Prompting'.

---
→ [[prompt-thinking-codes]]
Confidence: 0.89
Reason:
Note 'First Principles Prompting' functions as an illustrative example of 'Prompt Thinking Mode Codes'.

---
→ [[musk-on-first-principles-quote]]
Confidence: 0.89
Reason:
Note 'First Principles Prompting' functions as an illustrative example of 'Reasoning from First Principles'.

---
→ [[red-team-technique]]
Confidence: 0.86
Reason:
Note 'First Principles Prompting' functions as an illustrative example of 'Red Team Technique'.

---
→ [[first-principles-thinking]]
Confidence: 0.82
Reason:
Note 'First Principles Prompting' functions as an illustrative example of 'First Principles Thinking'.

---
→ [[prompt-combination-codes]]
Confidence: 0.82
Reason:
Note 'First Principles Prompting' functions as an illustrative example of 'Prompt Combination Codes'.

---
→ [[prompt-reasoning-codes]]
Confidence: 0.81
Reason:
Note 'First Principles Prompting' functions as an illustrative example of 'Prompt Reasoning and Simulation Codes'.

---

### First Principles Thinking
→ [[reasoning-by-analogy]]
Confidence: 0.95
Reason:
Note 'First Principles Thinking' functions as an illustrative example of 'Reasoning by Analogy'.

---
→ [[musk-on-first-principles-quote]]
Confidence: 0.90
Reason:
Note 'First Principles Thinking' functions as an illustrative example of 'Reasoning from First Principles'.

---
→ [[first-principles-build-rule]]
Confidence: 0.85
Reason:
Note 'First Principles Thinking' functions as an illustrative example of 'First Principles Build Rule'.

---

### The Five-Twenty-Five Rule
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'The Five-Twenty-Five Rule' extends the principles discussed in 'Warren Buffett's Decision-Making Framework'.

---
→ [[twenty-punches-card-rule]]
Confidence: 0.95
Reason:
Note 'The Five-Twenty-Five Rule' extends the principles discussed in 'Twenty Punches Card Rule'.

---
→ [[regret-minimization-framework]]
Confidence: 0.90
Reason:
Note 'The Five-Twenty-Five Rule' extends the principles discussed in 'Regret Minimization Framework'.

---
→ [[rolls-royce-subway-analogy]]
Confidence: 0.89
Reason:
Note 'The Five-Twenty-Five Rule' extends the principles discussed in 'Rolls-Royce and Subway Analogy'.

---
→ [[rule-one-never-lose-money]]
Confidence: 0.88
Reason:
Note 'The Five-Twenty-Five Rule' extends the principles discussed in 'Rule Number One'.

---
→ [[inversion-mental-model]]
Confidence: 0.86
Reason:
Note 'The Five-Twenty-Five Rule' extends the principles discussed in 'Inversion Principle'.

---
→ [[howard-buffett-influence]]
Confidence: 0.86
Reason:
Note 'The Five-Twenty-Five Rule' extends the principles discussed in 'Howard Buffett's Influence'.

---
→ [[pilot-flying-j-acquisition]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---

### FlightSafety Acquisition
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'FlightSafety Acquisition' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'FlightSafety Acquisition' extends the principles discussed in 'Concept of the Economic Moat'.

---
→ [[precision-castparts-acquisition]]
Confidence: 0.95
Reason:
Note 'FlightSafety Acquisition' extends the principles discussed in 'Precision Castparts Acquisition'.

---
→ [[lubrizol-acquisition]]
Confidence: 0.86
Reason:
Note 'FlightSafety Acquisition' extends the principles discussed in 'Lubrizol Acquisition'.

---
→ [[pilot-flying-j-acquisition]]
Confidence: 0.85
Reason:
Note 'FlightSafety Acquisition' extends the principles discussed in 'Pilot Flying J Acquisition'.

---
→ [[shaw-industries-acquisition]]
Confidence: 0.84
Reason:
High conceptual similarity score of 84%.

---
→ [[netjets-acquisition]]
Confidence: 0.83
Reason:
High conceptual similarity score of 82%.

---

### Fruit of the Loom Acquisition
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Fruit of the Loom Acquisition' extends the principles discussed in 'Margin of Safety Principle'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Fruit of the Loom Acquisition' extends the principles discussed in 'Value Investing Philosophy'.

---
→ [[special-situations]]
Confidence: 0.90
Reason:
Note 'Fruit of the Loom Acquisition' extends the principles discussed in 'Special Situations Investing'.

---

### Geeks Bearing Formulas
→ [[debt-aversion-principle]]
Confidence: 0.95
Reason:
Note 'Geeks Bearing Formulas' functions as an illustrative example of 'Debt Aversion Principle'.

---
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Geeks Bearing Formulas' functions as an illustrative example of 'Lollapalooza Effect'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Geeks Bearing Formulas' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[scarcity-bias-investing]]
Confidence: 0.83
Reason:
Note 'Geeks Bearing Formulas' functions as an illustrative example of 'Scarcity Bias in Investing'.

---
→ [[rule-one-never-lose-money]]
Confidence: 0.83
Reason:
Note 'Geeks Bearing Formulas' functions as an illustrative example of 'Rule Number One'.

---
→ [[availability-bias-investing]]
Confidence: 0.81
Reason:
Note 'Geeks Bearing Formulas' functions as an illustrative example of 'Availability Bias in Investing'.

---
→ [[contrast-effect-bias]]
Confidence: 0.81
Reason:
Note 'Geeks Bearing Formulas' functions as an illustrative example of 'Contrast Effect Bias'.

---
→ [[tide-goes-out-naked-swimming]]
Confidence: 0.80
Reason:
Note 'Geeks Bearing Formulas' functions as an illustrative example of 'Swimming Naked Heuristic'.

---

### GEICO Acquisition
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.95
Reason:
Note 'GEICO Acquisition' functions as an illustrative example of 'Berkshire Hathaway Acquisition'.

---
→ [[berkshire-insurance-businesses]]
Confidence: 0.95
Reason:
Note 'GEICO Acquisition' functions as an illustrative example of 'Berkshire's Insurance Float'.

---
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'GEICO Acquisition' functions as an illustrative example of 'Charlie Munger's Influence on Warren Buffett'.

---
→ [[clayton-homes-acquisition]]
Confidence: 0.95
Reason:
Note 'GEICO Acquisition' functions as an illustrative example of 'Clayton Homes Acquisition'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'GEICO Acquisition' functions as an illustrative example of 'Concept of the Economic Moat'.

---
→ [[gen-re-acquisition]]
Confidence: 0.95
Reason:
Note 'GEICO Acquisition' functions as an illustrative example of 'General Reinsurance Acquisition'.

---
→ [[shaw-industries-acquisition]]
Confidence: 0.84
Reason:
Note 'GEICO Acquisition' functions as an illustrative example of 'Shaw Industries Acquisition'.

---
→ [[netjets-acquisition]]
Confidence: 0.83
Reason:
Note 'GEICO Acquisition' functions as an illustrative example of 'NetJets Acquisition'.

---

### General Reinsurance Acquisition
→ [[berkshire-insurance-businesses]]
Confidence: 0.95
Reason:
Note 'General Reinsurance Acquisition' functions as an illustrative example of 'Berkshire's Insurance Float'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'General Reinsurance Acquisition' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[geico-acquisition]]
Confidence: 0.90
Reason:
Note 'General Reinsurance Acquisition' functions as an illustrative example of 'GEICO Acquisition'.

---
→ [[ajit-jain-successor]]
Confidence: 0.84
Reason:
Note 'General Reinsurance Acquisition' functions as an illustrative example of 'Ajit Jain Successor'.

---
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.84
Reason:
Note 'General Reinsurance Acquisition' functions as an illustrative example of 'Berkshire Hathaway Acquisition'.

---
→ [[national-indemnity-acquisition]]
Confidence: 0.81
Reason:
Note 'General Reinsurance Acquisition' functions as an illustrative example of 'National Indemnity Acquisition'.

---
→ [[clayton-homes-acquisition]]
Confidence: 0.80
Reason:
Note 'General Reinsurance Acquisition' functions as an illustrative example of 'Clayton Homes Acquisition'.

---

### Genetics and Environment
→ [[quote-genes-predispose]]
Confidence: 0.90
Reason:
Note 'Genetics and Environment' extends the principles discussed in 'Genes Predispose but Do Not Determine'.

---

### Gillette Investment
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Gillette Investment' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Gillette Investment' extends the principles discussed in 'Concept of the Economic Moat'.

---
→ [[sees-candies-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Gillette Investment' extends the principles discussed in 'See's Candies Case Study'.

---
→ [[coca-cola-investment-case-study]]
Confidence: 0.90
Reason:
Note 'Gillette Investment' extends the principles discussed in 'Coca-Cola Investment Case Study'.

---
→ [[apple-investment-case-study]]
Confidence: 0.89
Reason:
Note 'Gillette Investment' extends the principles discussed in 'Apple Investment Case Study'.

---
→ [[us-air-investment-mistake]]
Confidence: 0.89
Reason:
Note 'Gillette Investment' extends the principles discussed in 'US Air Investment Mistake'.

---
→ [[dexter-shoe-investment-mistake]]
Confidence: 0.87
Reason:
Note 'Gillette Investment' extends the principles discussed in 'Dexter Shoe Acquisition Mistake'.

---
→ [[benjamin-moore-acquisition]]
Confidence: 0.86
Reason:
Note 'Gillette Investment' extends the principles discussed in 'Benjamin Moore Acquisition'.

---

### The Giving Pledge
→ [[bill-gates-friendship]]
Confidence: 0.95
Reason:
Note 'The Giving Pledge' extends the principles discussed in 'Bill Gates Friendship'.

---
→ [[buffett-foundation]]
Confidence: 0.95
Reason:
Note 'The Giving Pledge' extends the principles discussed in 'Buffett Foundation'.

---
→ [[estate-tax-support]]
Confidence: 0.95
Reason:
Note 'The Giving Pledge' extends the principles discussed in 'Estate Tax Support'.

---
→ [[regret-minimization-framework]]
Confidence: 0.95
Reason:
Note 'The Giving Pledge' extends the principles discussed in 'Regret Minimization Framework'.

---
→ [[salomon-brothers-intervention]]
Confidence: 0.95
Reason:
Note 'The Giving Pledge' extends the principles discussed in 'Salomon Brothers Crisis Intervention'.

---
→ [[susan-buffett-influence]]
Confidence: 0.95
Reason:
Note 'The Giving Pledge' extends the principles discussed in 'Susan Thompson Buffett's Influence'.

---
→ [[warren-buffett-biography]]
Confidence: 0.95
Reason:
Note 'The Giving Pledge' extends the principles discussed in 'Warren Buffett Biography'.

---

### Goldilocks Rule
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Goldilocks Rule' discusses concepts that contradict or contrast with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Goldilocks Rule' discusses concepts that contradict or contrast with 'Habit Loop'.

---
→ [[two-minute-rule]]
Confidence: 0.95
Reason:
Note 'Goldilocks Rule' discusses concepts that contradict or contrast with 'Two-Minute Rule'.

---
→ [[law-of-least-effort]]
Confidence: 0.89
Reason:
Note 'Goldilocks Rule' discusses concepts that contradict or contrast with 'Law of Least Effort'.

---
→ [[habit-tracking]]
Confidence: 0.85
Reason:
Note 'Goldilocks Rule' discusses concepts that contradict or contrast with 'Habit Tracking'.

---
→ [[cardinal-rule-of-behavior-change]]
Confidence: 0.82
Reason:
Note 'Goldilocks Rule' discusses concepts that contradict or contrast with 'The Cardinal Rule of Behavior Change'.

---
→ [[hebbs-law]]
Confidence: 0.81
Reason:
Note 'Goldilocks Rule' discusses concepts that contradict or contrast with 'Hebb's Law'.

---

### Greg Abel Successor
→ [[berkshire-hathaway-energy]]
Confidence: 0.95
Reason:
Note 'Greg Abel Successor' functions as an illustrative example of 'Berkshire Hathaway Energy'.

---
→ [[buffett-delegation-model]]
Confidence: 0.95
Reason:
Note 'Greg Abel Successor' functions as an illustrative example of 'Warren Buffett's Delegation Model'.

---
→ [[warren-buffett-biography]]
Confidence: 0.95
Reason:
Note 'Greg Abel Successor' functions as an illustrative example of 'Warren Buffett Biography'.

---
→ [[ajit-jain-successor]]
Confidence: 0.82
Reason:
Note 'Greg Abel Successor' functions as an illustrative example of 'Ajit Jain Successor'.

---
→ [[gen-re-acquisition]]
Confidence: 0.80
Reason:
Note 'Greg Abel Successor' functions as an illustrative example of 'General Reinsurance Acquisition'.

---
→ [[marmon-group-acquisition]]
Confidence: 0.80
Reason:
Note 'Greg Abel Successor' functions as an illustrative example of 'Marmon Group Acquisition'.

---

### Growth mindset
→ [[powerful-mindset-shifts]]
Confidence: 0.90
Reason:
Note 'Growth mindset' extends the principles discussed in 'Powerful mindset shifts'.

---
→ [[personal-growth-and-development]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---

### Habit Contracts
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Habit Contracts' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[habit-tracking]]
Confidence: 0.95
Reason:
Note 'Habit Contracts' extends the principles discussed in 'Habit Tracking'.

---
→ [[bryan-harris-habit-contract]]
Confidence: 0.87
Reason:
Note 'Habit Contracts' extends the principles discussed in 'Bryan Harris Habit Contract'.

---
→ [[habits-scorecard]]
Confidence: 0.85
Reason:
Note 'Habit Contracts' extends the principles discussed in 'Habits Scorecard'.

---
→ [[social-norms-and-habits]]
Confidence: 0.85
Reason:
Note 'Habit Contracts' extends the principles discussed in 'Social Norms and Habits'.

---
→ [[goldilocks-rule]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---
→ [[commitment-devices]]
Confidence: 0.83
Reason:
High conceptual similarity score of 83%.

---
→ [[two-minute-rule]]
Confidence: 0.83
Reason:
High conceptual similarity score of 82%.

---

### Habit Loop
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Habit Loop' functions as an illustrative example of '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[brian-clark-fingernail-biting]]
Confidence: 0.95
Reason:
Note 'Habit Loop' functions as an illustrative example of 'Brian Clark Fingernail Biting Example'.

---
→ [[cardinal-rule-of-behavior-change]]
Confidence: 0.95
Reason:
Note 'Habit Loop' functions as an illustrative example of 'The Cardinal Rule of Behavior Change'.

---
→ [[habit-stacking]]
Confidence: 0.95
Reason:
Note 'Habit Loop' functions as an illustrative example of 'Habit Stacking Method'.

---
→ [[make-it-invisible]]
Confidence: 0.95
Reason:
Note 'Habit Loop' functions as an illustrative example of 'Make It Invisible'.

---
→ [[motivation-ritual]]
Confidence: 0.95
Reason:
Note 'Habit Loop' functions as an illustrative example of 'Motivation Ritual'.

---
→ [[premacks-principle]]
Confidence: 0.95
Reason:
Note 'Habit Loop' functions as an illustrative example of 'Premack's Principle'.

---
→ [[quote-what-is-rewarded-is-repeated]]
Confidence: 0.95
Reason:
Note 'Habit Loop' functions as an illustrative example of 'What is Rewarded is Repeated'.

---

### Habit Stacking Method
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Habit Stacking Method' extends the principles discussed in 'Atomic Habit'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Habit Stacking Method' extends the principles discussed in 'Habit Loop'.

---
→ [[habit-tracking]]
Confidence: 0.95
Reason:
Note 'Habit Stacking Method' extends the principles discussed in 'Habit Tracking'.

---
→ [[implementation-intentions]]
Confidence: 0.95
Reason:
Note 'Habit Stacking Method' extends the principles discussed in 'Implementation Intentions'.

---
→ [[motivation-ritual]]
Confidence: 0.95
Reason:
Note 'Habit Stacking Method' extends the principles discussed in 'Motivation Ritual'.

---
→ [[reframing-hard-habits]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---

### Habit Tracking
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Habit Tracking' functions as an illustrative example of '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[habit-contracts]]
Confidence: 0.95
Reason:
Note 'Habit Tracking' functions as an illustrative example of 'Habit Contracts'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Habit Tracking' functions as an illustrative example of 'Habit Loop'.

---
→ [[habits-scorecard]]
Confidence: 0.95
Reason:
Note 'Habit Tracking' functions as an illustrative example of 'Habits Scorecard'.

---
→ [[temptation-bundling]]
Confidence: 0.95
Reason:
Note 'Habit Tracking' functions as an illustrative example of 'Temptation Bundling'.

---
→ [[two-minute-rule]]
Confidence: 0.95
Reason:
Note 'Habit Tracking' functions as an illustrative example of 'Two-Minute Rule'.

---
→ [[habit-stacking]]
Confidence: 0.87
Reason:
Note 'Habit Tracking' functions as an illustrative example of 'Habit Stacking Method'.

---
→ [[hebbs-law]]
Confidence: 0.83
Reason:
Note 'Habit Tracking' functions as an illustrative example of 'Hebb's Law'.

---

### Habits Plus Deliberate Practice
→ [[identity-based-habits]]
Confidence: 0.95
Reason:
Note 'Habits Plus Deliberate Practice' functions as an illustrative example of 'Identity-based Habits'.

---
→ [[one-percent-better-every-day]]
Confidence: 0.95
Reason:
Note 'Habits Plus Deliberate Practice' functions as an illustrative example of 'One Percent Better Every Day'.

---
→ [[pointing-and-calling]]
Confidence: 0.95
Reason:
Note 'Habits Plus Deliberate Practice' functions as an illustrative example of 'Pointing-and-Calling'.

---
→ [[sorites-paradox]]
Confidence: 0.95
Reason:
Note 'Habits Plus Deliberate Practice' functions as an illustrative example of 'Sorites Paradox'.

---
→ [[polgar-sisters-chess]]
Confidence: 0.90
Reason:
Note 'Habits Plus Deliberate Practice' functions as an illustrative example of 'Polgar Sisters Chess'.

---
→ [[habits-scorecard]]
Confidence: 0.82
Reason:
Note 'Habits Plus Deliberate Practice' functions as an illustrative example of 'Habits Scorecard'.

---

### Habits Scorecard
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Habits Scorecard' indicates a functional dependency on 'Habit Loop'.

---
→ [[habit-tracking]]
Confidence: 0.95
Reason:
Note 'Habits Scorecard' indicates a functional dependency on 'Habit Tracking'.

---
→ [[pointing-and-calling]]
Confidence: 0.95
Reason:
Note 'Habits Scorecard' indicates a functional dependency on 'Pointing-and-Calling'.

---
→ [[identity-based-habits]]
Confidence: 0.83
Reason:
Note 'Habits Scorecard' indicates a functional dependency on 'Identity-based Habits'.

---
→ [[two-minute-rule]]
Confidence: 0.82
Reason:
Note 'Habits Scorecard' indicates a functional dependency on 'Two-Minute Rule'.

---
→ [[habit-contracts]]
Confidence: 0.80
Reason:
Note 'Habits Scorecard' indicates a functional dependency on 'Habit Contracts'.

---

### Haile Selassie's Court of Dependency
→ [[law-18-isolation-is-dangerous]]
Confidence: 0.90
Reason:
Note 'Haile Selassie's Court of Dependency' extends the principles discussed in 'Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous'.

---
→ [[court-power]]
Confidence: 0.88
Reason:
Note 'Haile Selassie's Court of Dependency' extends the principles discussed in 'Court Power'.

---

### Hebb's Law
→ [[cardinal-rule-of-behavior-change]]
Confidence: 0.95
Reason:
Note 'Hebb's Law' extends the principles discussed in 'The Cardinal Rule of Behavior Change'.

---
→ [[habit-tracking]]
Confidence: 0.95
Reason:
Note 'Hebb's Law' extends the principles discussed in 'Habit Tracking'.

---
→ [[law-of-least-effort]]
Confidence: 0.95
Reason:
Note 'Hebb's Law' extends the principles discussed in 'Law of Least Effort'.

---
→ [[goldilocks-rule]]
Confidence: 0.86
Reason:
Note 'Hebb's Law' extends the principles discussed in 'Goldilocks Rule'.

---
→ [[two-minute-rule]]
Confidence: 0.84
Reason:
High conceptual similarity score of 84%.

---
→ [[safeguard-soap-handwashing-study]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---
→ [[habits-plus-deliberate-practice]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---
→ [[habits-scorecard]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### Honesty is an Expensive Gift
→ [[buffett-delegation-model]]
Confidence: 0.95
Reason:
Note 'Honesty is an Expensive Gift' functions as an illustrative example of 'Warren Buffett's Delegation Model'.

---
→ [[relationships]]
Confidence: 0.95
Reason:
Note 'Honesty is an Expensive Gift' functions as an illustrative example of 'Relationships'.

---
→ [[reputation-protection-heuristic]]
Confidence: 0.95
Reason:
Note 'Honesty is an Expensive Gift' functions as an illustrative example of 'Reputation Protection Heuristic'.

---

### Howard Buffett's Influence
→ [[reputation-protection-heuristic]]
Confidence: 0.95
Reason:
Note 'Howard Buffett's Influence' functions as an illustrative example of 'Reputation Protection Heuristic'.

---
→ [[salomon-brothers-intervention]]
Confidence: 0.95
Reason:
Note 'Howard Buffett's Influence' functions as an illustrative example of 'Salomon Brothers Crisis Intervention'.

---
→ [[warren-buffett-biography]]
Confidence: 0.95
Reason:
Note 'Howard Buffett's Influence' functions as an illustrative example of 'Warren Buffett Biography'.

---
→ [[phil-carret-influence]]
Confidence: 0.90
Reason:
Note 'Howard Buffett's Influence' functions as an illustrative example of 'Phil Carret Influence'.

---
→ [[rolls-royce-subway-analogy]]
Confidence: 0.90
Reason:
Note 'Howard Buffett's Influence' functions as an illustrative example of 'Rolls-Royce and Subway Analogy'.

---
→ [[authority-bias-investing]]
Confidence: 0.89
Reason:
Note 'Howard Buffett's Influence' functions as an illustrative example of 'Authority Bias in Investing'.

---
→ [[inversion-mental-model]]
Confidence: 0.88
Reason:
Note 'Howard Buffett's Influence' functions as an illustrative example of 'Inversion Principle'.

---
→ [[five-twenty-five-rule]]
Confidence: 0.88
Reason:
Note 'Howard Buffett's Influence' functions as an illustrative example of 'The Five-Twenty-Five Rule'.

---

### Hyperbolic Discounting in Finance
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Hyperbolic Discounting in Finance' functions as an illustrative example of 'Long-Term Compounding'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Hyperbolic Discounting in Finance' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[authority-bias-investing]]
Confidence: 0.90
Reason:
Note 'Hyperbolic Discounting in Finance' functions as an illustrative example of 'Authority Bias in Investing'.

---
→ [[availability-bias-investing]]
Confidence: 0.88
Reason:
Note 'Hyperbolic Discounting in Finance' functions as an illustrative example of 'Availability Bias in Investing'.

---
→ [[rule-one-never-lose-money]]
Confidence: 0.88
Reason:
Note 'Hyperbolic Discounting in Finance' functions as an illustrative example of 'Rule Number One'.

---
→ [[scarcity-bias-investing]]
Confidence: 0.87
Reason:
Note 'Hyperbolic Discounting in Finance' functions as an illustrative example of 'Scarcity Bias in Investing'.

---
→ [[make-money-while-you-sleep]]
Confidence: 0.85
Reason:
Note 'Hyperbolic Discounting in Finance' functions as an illustrative example of 'Make Money While You Sleep'.

---
→ [[contrast-effect-bias]]
Confidence: 0.85
Reason:
Note 'Hyperbolic Discounting in Finance' functions as an illustrative example of 'Contrast Effect Bias'.

---

### Identity-based Habits
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Identity-based Habits' discusses comparisons or tradeoffs with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[habit-tracking]]
Confidence: 0.95
Reason:
Note 'Identity-based Habits' discusses comparisons or tradeoffs with 'Habit Tracking'.

---
→ [[reflection-and-review]]
Confidence: 0.95
Reason:
Note 'Identity-based Habits' discusses comparisons or tradeoffs with 'Reflection and Review'.

---
→ [[reframing-hard-habits]]
Confidence: 0.95
Reason:
Note 'Identity-based Habits' discusses comparisons or tradeoffs with 'Reframing Hard Habits'.

---
→ [[two-step-identity-change]]
Confidence: 0.90
Reason:
Note 'Identity-based Habits' discusses comparisons or tradeoffs with 'Two-Step Process to Identity Change'.

---
→ [[habits-scorecard]]
Confidence: 0.86
Reason:
Note 'Identity-based Habits' discusses comparisons or tradeoffs with 'Habits Scorecard'.

---
→ [[systems-vs-goals]]
Confidence: 0.83
Reason:
Note 'Identity-based Habits' discusses comparisons or tradeoffs with 'Systems vs Goals'.

---
→ [[two-minute-rule]]
Confidence: 0.83
Reason:
Note 'Identity-based Habits' discusses comparisons or tradeoffs with 'Two-Minute Rule'.

---

### Idiot Index
→ [[vertical-integration-calculus]]
Confidence: 0.90
Reason:
Note 'Idiot Index' discusses comparisons or tradeoffs with 'Vertical Integration Calculus'.

---

### Immediate-Return Environment
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Immediate-Return Environment' extends the principles discussed in 'Atomic Habit'.

---
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Immediate-Return Environment' extends the principles discussed in 'Long-Term Compounding'.

---
→ [[delayed-return-environment]]
Confidence: 0.90
Reason:
Note 'Immediate-Return Environment' extends the principles discussed in 'Delayed-Return Environment'.

---

### Implementation Intentions
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Implementation Intentions' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[diderot-effect]]
Confidence: 0.95
Reason:
Note 'Implementation Intentions' extends the principles discussed in 'The Diderot Effect'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Implementation Intentions' extends the principles discussed in 'Habit Loop'.

---
→ [[quote-james-clear-clarity]]
Confidence: 0.90
Reason:
Note 'Implementation Intentions' extends the principles discussed in 'James Clear on Clarity'.

---

### Concept of Intrinsic Value
→ [[buffett-education-and-graham-influence]]
Confidence: 0.95
Reason:
Note 'Concept of Intrinsic Value' discusses comparisons or tradeoffs with 'Warren Buffett's Education and Benjamin Graham's Influence'.

---
→ [[contrast-effect-bias]]
Confidence: 0.95
Reason:
Note 'Concept of Intrinsic Value' discusses comparisons or tradeoffs with 'Contrast Effect Bias'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Concept of Intrinsic Value' discusses comparisons or tradeoffs with 'Concept of the Economic Moat'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Concept of Intrinsic Value' discusses comparisons or tradeoffs with 'Margin of Safety Principle'.

---
→ [[owner-earnings]]
Confidence: 0.95
Reason:
Note 'Concept of Intrinsic Value' discusses comparisons or tradeoffs with 'Concept of Owner Earnings'.

---
→ [[price-vs-value]]
Confidence: 0.95
Reason:
Note 'Concept of Intrinsic Value' discusses comparisons or tradeoffs with 'Price is What You Pay Value is What You Get'.

---
→ [[risk-free-rate-hurdle]]
Confidence: 0.95
Reason:
Note 'Concept of Intrinsic Value' discusses comparisons or tradeoffs with 'Risk-Free Rate Benchmark'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Concept of Intrinsic Value' discusses comparisons or tradeoffs with 'Value Investing Philosophy'.

---

### Inversion Principle
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Inversion Principle' functions as an illustrative example of 'Warren Buffett's Decision-Making Framework'.

---
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'Inversion Principle' functions as an illustrative example of 'Charlie Munger's Influence on Warren Buffett'.

---
→ [[circle-of-competence]]
Confidence: 0.95
Reason:
Note 'Inversion Principle' functions as an illustrative example of 'Circle of Competence Heuristic'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Inversion Principle' functions as an illustrative example of 'Margin of Safety Principle'.

---
→ [[rule-one-never-lose-money]]
Confidence: 0.90
Reason:
Note 'Inversion Principle' functions as an illustrative example of 'Rule Number One'.

---
→ [[washington-post-investment]]
Confidence: 0.87
Reason:
Note 'Inversion Principle' functions as an illustrative example of 'Washington Post Investment'.

---
→ [[warren-buffett-quotes]]
Confidence: 0.86
Reason:
Note 'Inversion Principle' functions as an illustrative example of 'Selected Warren Buffett Quotes'.

---
→ [[scarcity-bias-investing]]
Confidence: 0.86
Reason:
Note 'Inversion Principle' functions as an illustrative example of 'Scarcity Bias in Investing'.

---

### James Clear Injury Recovery
→ [[marginal-gains-british-cycling]]
Confidence: 0.95
Reason:
Note 'James Clear Injury Recovery' functions as an illustrative example of 'Marginal Gains British Cycling'.

---
→ [[trent-dyrsmid-paperclips]]
Confidence: 0.95
Reason:
Note 'James Clear Injury Recovery' functions as an illustrative example of 'Trent Dyrsmid Paper Clips'.

---
→ [[victor-hugo-closet-lock]]
Confidence: 0.90
Reason:
Note 'James Clear Injury Recovery' functions as an illustrative example of 'Victor Hugo Closet Lock'.

---
→ [[one-percent-better-every-day]]
Confidence: 0.88
Reason:
Note 'James Clear Injury Recovery' functions as an illustrative example of 'One Percent Better Every Day'.

---
→ [[systems-vs-goals]]
Confidence: 0.86
Reason:
Note 'James Clear Injury Recovery' functions as an illustrative example of 'Systems vs Goals'.

---

### Jerry Uelsmann Photography Experiment
→ [[solomon-asch-conformity]]
Confidence: 0.95
Reason:
Note 'Jerry Uelsmann Photography Experiment' functions as an illustrative example of 'Solomon Asch Conformity Experiment'.

---

### Never Outshine the Master
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Never Outshine the Master' discusses concepts that contradict or contrast with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-46-never-appear-too-perfect]]
Confidence: 0.95
Reason:
Note 'Never Outshine the Master' discusses concepts that contradict or contrast with 'Never Appear Too Perfect'.

---
→ [[the-courtier-archetype]]
Confidence: 0.95
Reason:
Note 'Never Outshine the Master' discusses concepts that contradict or contrast with 'The Courtier Archetype'.

---
→ [[the-reality-of-human-envy]]
Confidence: 0.95
Reason:
Note 'Never Outshine the Master' discusses concepts that contradict or contrast with 'The Reality of Human Envy'.

---
→ [[nicolas-fouquet-downfall]]
Confidence: 0.90
Reason:
Note 'Never Outshine the Master' discusses concepts that contradict or contrast with 'The Downfall of Nicolas Fouquet'.

---

### Never Put Too Much Trust in Friends, Learn How to Use Enemies
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Never Put Too Much Trust in Friends, Learn How to Use Enemies' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-15-crush-your-enemy-totally]]
Confidence: 0.95
Reason:
Note 'Never Put Too Much Trust in Friends, Learn How to Use Enemies' extends the principles discussed in 'Crush Your Enemy Totally'.

---
→ [[law-16-use-absence]]
Confidence: 0.90
Reason:
Note 'Never Put Too Much Trust in Friends, Learn How to Use Enemies' extends the principles discussed in 'Use Absence to Increase Respect and Honor'.

---
→ [[law-14-pose-as-friend-work-as-spy]]
Confidence: 0.85
Reason:
Note 'Never Put Too Much Trust in Friends, Learn How to Use Enemies' extends the principles discussed in 'Pose as a Friend, Work as a Spy'.

---

### Conceal Your Intentions
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Conceal Your Intentions' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-12-selective-honesty-to-disarm]]
Confidence: 0.95
Reason:
Note 'Conceal Your Intentions' extends the principles discussed in 'Use Selective Honesty and Generosity to Disarm Your Victim'.

---
→ [[law-14-pose-as-friend-work-as-spy]]
Confidence: 0.95
Reason:
Note 'Conceal Your Intentions' extends the principles discussed in 'Pose as a Friend, Work as a Spy'.

---
→ [[law-21-play-a-sucker]]
Confidence: 0.95
Reason:
Note 'Conceal Your Intentions' extends the principles discussed in 'Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark'.

---
→ [[law-26-keep-your-hands-clean]]
Confidence: 0.95
Reason:
Note 'Conceal Your Intentions' extends the principles discussed in 'Keep Your Hands Clean'.

---
→ [[law-38-think-as-you-like-behave-like-others]]
Confidence: 0.95
Reason:
Note 'Conceal Your Intentions' extends the principles discussed in 'Think as You Like but Behave Like Others'.

---
→ [[the-myth-of-sincerity]]
Confidence: 0.95
Reason:
Note 'Conceal Your Intentions' extends the principles discussed in 'The Myth of Sincerity'.

---
→ [[law-30-make-accomplishments-seem-effortless]]
Confidence: 0.89
Reason:
Note 'Conceal Your Intentions' extends the principles discussed in 'Make Your Accomplishments Seem Effortless'.

---

### Always Say Less Than Necessary
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Always Say Less Than Necessary' discusses concepts that contradict or contrast with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-09-win-through-actions]]
Confidence: 0.95
Reason:
Note 'Always Say Less Than Necessary' discusses concepts that contradict or contrast with 'Win Through Your Actions, Never Through Argument'.

---
→ [[law-16-use-absence]]
Confidence: 0.95
Reason:
Note 'Always Say Less Than Necessary' discusses concepts that contradict or contrast with 'Use Absence to Increase Respect and Honor'.

---

### So Much Depends on Reputation — Guard It with Your Life
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'So Much Depends on Reputation — Guard It with Your Life' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-34-be-royal]]
Confidence: 0.95
Reason:
Note 'So Much Depends on Reputation — Guard It with Your Life' indicates a functional dependency on 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One'.

---
→ [[law-41-avoid-stepping-into-great-mans-shoes]]
Confidence: 0.95
Reason:
Note 'So Much Depends on Reputation — Guard It with Your Life' indicates a functional dependency on 'Avoid Stepping into a Great Man's Shoes'.

---
→ [[power-abhors-a-vacuum]]
Confidence: 0.95
Reason:
Note 'So Much Depends on Reputation — Guard It with Your Life' indicates a functional dependency on 'Power Abhors a Vacuum'.

---
→ [[law-10-avoid-the-unhappy-and-unlucky]]
Confidence: 0.90
Reason:
Note 'So Much Depends on Reputation — Guard It with Your Life' indicates a functional dependency on 'Infection: Avoid the Unhappy and Unlucky'.

---
→ [[law-25-recreate-yourself]]
Confidence: 0.85
Reason:
Note 'So Much Depends on Reputation — Guard It with Your Life' indicates a functional dependency on 'Re-Create Yourself'.

---

### Court Attention at All Costs
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Court Attention at All Costs' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-16-use-absence]]
Confidence: 0.95
Reason:
Note 'Court Attention at All Costs' extends the principles discussed in 'Use Absence to Increase Respect and Honor'.

---
→ [[law-25-recreate-yourself]]
Confidence: 0.95
Reason:
Note 'Court Attention at All Costs' extends the principles discussed in 'Re-Create Yourself'.

---
→ [[law-32-play-to-peoples-fantasies]]
Confidence: 0.95
Reason:
Note 'Court Attention at All Costs' extends the principles discussed in 'Play to People's Fantasies'.

---
→ [[pointing-and-calling]]
Confidence: 0.95
Reason:
Note 'Court Attention at All Costs' extends the principles discussed in 'Pointing-and-Calling'.

---
→ [[queen-elizabeth-i-power-image]]
Confidence: 0.95
Reason:
Note 'Court Attention at All Costs' extends the principles discussed in 'Queen Elizabeth I's Power Image'.

---
→ [[law-37-create-compelling-spectacles]]
Confidence: 0.87
Reason:
Note 'Court Attention at All Costs' extends the principles discussed in 'Create Compelling Spectacles'.

---
→ [[law-04-say-less-than-necessary]]
Confidence: 0.85
Reason:
Note 'Court Attention at All Costs' extends the principles discussed in 'Always Say Less Than Necessary'.

---

### Get Others to Do the Work for You, but Always Take the Credit
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Get Others to Do the Work for You, but Always Take the Credit' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-14-pose-as-friend-work-as-spy]]
Confidence: 0.95
Reason:
Note 'Get Others to Do the Work for You, but Always Take the Credit' extends the principles discussed in 'Pose as a Friend, Work as a Spy'.

---
→ [[law-20-do-not-commit-to-anyone]]
Confidence: 0.95
Reason:
Note 'Get Others to Do the Work for You, but Always Take the Credit' extends the principles discussed in 'Do Not Commit to Anyone'.

---
→ [[law-25-recreate-yourself]]
Confidence: 0.95
Reason:
Note 'Get Others to Do the Work for You, but Always Take the Credit' extends the principles discussed in 'Re-Create Yourself'.

---

### Make Other People Come to You — Use Bait if Necessary
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Make Other People Come to You — Use Bait if Necessary' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-31-control-the-options]]
Confidence: 0.95
Reason:
Note 'Make Other People Come to You — Use Bait if Necessary' extends the principles discussed in 'Control the Options — Get Others to Play with the Cards You Deal'.

---

### Win Through Your Actions, Never Through Argument
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Win Through Your Actions, Never Through Argument' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-04-say-less-than-necessary]]
Confidence: 0.90
Reason:
Note 'Win Through Your Actions, Never Through Argument' extends the principles discussed in 'Always Say Less Than Necessary'.

---

### Infection: Avoid the Unhappy and Unlucky
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Infection: Avoid the Unhappy and Unlucky' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-05-guard-your-reputation]]
Confidence: 0.95
Reason:
Note 'Infection: Avoid the Unhappy and Unlucky' indicates a functional dependency on 'So Much Depends on Reputation — Guard It with Your Life'.

---
→ [[law-16-use-absence]]
Confidence: 0.95
Reason:
Note 'Infection: Avoid the Unhappy and Unlucky' indicates a functional dependency on 'Use Absence to Increase Respect and Honor'.

---
→ [[law-34-be-royal]]
Confidence: 0.95
Reason:
Note 'Infection: Avoid the Unhappy and Unlucky' indicates a functional dependency on 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One'.

---
→ [[law-37-create-compelling-spectacles]]
Confidence: 0.95
Reason:
Note 'Infection: Avoid the Unhappy and Unlucky' indicates a functional dependency on 'Create Compelling Spectacles'.

---
→ [[law-41-avoid-stepping-into-great-mans-shoes]]
Confidence: 0.95
Reason:
Note 'Infection: Avoid the Unhappy and Unlucky' indicates a functional dependency on 'Avoid Stepping into a Great Man's Shoes'.

---
→ [[law-11-keep-people-dependent]]
Confidence: 0.89
Reason:
Note 'Infection: Avoid the Unhappy and Unlucky' indicates a functional dependency on 'Learn to Keep People Dependent on You'.

---
→ [[law-23-concentrate-your-forces]]
Confidence: 0.88
Reason:
Note 'Infection: Avoid the Unhappy and Unlucky' indicates a functional dependency on 'Concentrate Your Forces'.

---

### Learn to Keep People Dependent on You
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Learn to Keep People Dependent on You' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-03-conceal-your-intentions]]
Confidence: 0.95
Reason:
Note 'Learn to Keep People Dependent on You' indicates a functional dependency on 'Conceal Your Intentions'.

---
→ [[law-16-use-absence]]
Confidence: 0.95
Reason:
Note 'Learn to Keep People Dependent on You' indicates a functional dependency on 'Use Absence to Increase Respect and Honor'.

---
→ [[law-34-be-royal]]
Confidence: 0.95
Reason:
Note 'Learn to Keep People Dependent on You' indicates a functional dependency on 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One'.

---
→ [[the-futility-of-gratitude]]
Confidence: 0.95
Reason:
Note 'Learn to Keep People Dependent on You' indicates a functional dependency on 'The Futility of Gratitude'.

---
→ [[law-10-avoid-the-unhappy-and-unlucky]]
Confidence: 0.90
Reason:
Note 'Learn to Keep People Dependent on You' indicates a functional dependency on 'Infection: Avoid the Unhappy and Unlucky'.

---
→ [[law-04-say-less-than-necessary]]
Confidence: 0.85
Reason:
Note 'Learn to Keep People Dependent on You' indicates a functional dependency on 'Always Say Less Than Necessary'.

---
→ [[law-30-make-accomplishments-seem-effortless]]
Confidence: 0.84
Reason:
Note 'Learn to Keep People Dependent on You' indicates a functional dependency on 'Make Your Accomplishments Seem Effortless'.

---

### Use Selective Honesty and Generosity to Disarm Your Victim
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Use Selective Honesty and Generosity to Disarm Your Victim' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-21-play-a-sucker]]
Confidence: 0.95
Reason:
Note 'Use Selective Honesty and Generosity to Disarm Your Victim' extends the principles discussed in 'Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark'.

---
→ [[law-40-despise-the-free-lunch]]
Confidence: 0.95
Reason:
Note 'Use Selective Honesty and Generosity to Disarm Your Victim' extends the principles discussed in 'Despise the Free Lunch'.

---
→ [[the-myth-of-sincerity]]
Confidence: 0.95
Reason:
Note 'Use Selective Honesty and Generosity to Disarm Your Victim' extends the principles discussed in 'The Myth of Sincerity'.

---
→ [[law-03-conceal-your-intentions]]
Confidence: 0.90
Reason:
Note 'Use Selective Honesty and Generosity to Disarm Your Victim' extends the principles discussed in 'Conceal Your Intentions'.

---

### When Asking for Help, Appeal to Self-Interest, Never to Mercy or Gratitude
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'When Asking for Help, Appeal to Self-Interest, Never to Mercy or Gratitude' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[the-futility-of-gratitude]]
Confidence: 0.95
Reason:
Note 'When Asking for Help, Appeal to Self-Interest, Never to Mercy or Gratitude' indicates a functional dependency on 'The Futility of Gratitude'.

---
→ [[law-20-do-not-commit-to-anyone]]
Confidence: 0.84
Reason:
Note 'When Asking for Help, Appeal to Self-Interest, Never to Mercy or Gratitude' indicates a functional dependency on 'Do Not Commit to Anyone'.

---
→ [[law-33-discover-each-mans-thumbscrew]]
Confidence: 0.82
Reason:
Note 'When Asking for Help, Appeal to Self-Interest, Never to Mercy or Gratitude' indicates a functional dependency on 'Discover Each Man's Thumbscrew'.

---

### Pose as a Friend, Work as a Spy
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Pose as a Friend, Work as a Spy' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-02-never-trust-friends-use-enemies]]
Confidence: 0.95
Reason:
Note 'Pose as a Friend, Work as a Spy' extends the principles discussed in 'Never Put Too Much Trust in Friends, Learn How to Use Enemies'.

---
→ [[law-19-know-who-youre-dealing-with]]
Confidence: 0.95
Reason:
Note 'Pose as a Friend, Work as a Spy' extends the principles discussed in 'Know Who You're Dealing With — Do Not Offend the Wrong Person'.

---
→ [[strategic-deception]]
Confidence: 0.95
Reason:
Note 'Pose as a Friend, Work as a Spy' extends the principles discussed in 'Strategic Deception'.

---
→ [[law-03-conceal-your-intentions]]
Confidence: 0.90
Reason:
Note 'Pose as a Friend, Work as a Spy' extends the principles discussed in 'Conceal Your Intentions'.

---
→ [[law-07-get-others-to-do-the-work]]
Confidence: 0.86
Reason:
Note 'Pose as a Friend, Work as a Spy' extends the principles discussed in 'Get Others to Do the Work for You, but Always Take the Credit'.

---
→ [[law-33-discover-each-mans-thumbscrew]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---

### Crush Your Enemy Totally
→ [[bismarck-realpolitik]]
Confidence: 0.95
Reason:
Note 'Crush Your Enemy Totally' extends the principles discussed in 'Otto von Bismarck and Realpolitik'.

---
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Crush Your Enemy Totally' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[cesare-borgia]]
Confidence: 0.95
Reason:
Note 'Crush Your Enemy Totally' extends the principles discussed in 'Cesare Borgia'.

---
→ [[law-22-surrender-tactic]]
Confidence: 0.95
Reason:
Note 'Crush Your Enemy Totally' extends the principles discussed in 'Use the Surrender Tactic — Transform Weakness into Power'.

---
→ [[law-28-enter-action-with-boldness]]
Confidence: 0.95
Reason:
Note 'Crush Your Enemy Totally' extends the principles discussed in 'Enter Action with Boldness'.

---
→ [[law-42-strike-the-shepherd]]
Confidence: 0.95
Reason:
Note 'Crush Your Enemy Totally' extends the principles discussed in 'Strike the Shepherd and the Sheep Will Scatter'.

---
→ [[machiavelli-and-the-prince]]
Confidence: 0.95
Reason:
Note 'Crush Your Enemy Totally' extends the principles discussed in 'Machiavelli and The Prince'.

---
→ [[law-02-never-trust-friends-use-enemies]]
Confidence: 0.90
Reason:
Note 'Crush Your Enemy Totally' extends the principles discussed in 'Never Put Too Much Trust in Friends, Learn How to Use Enemies'.

---

### Use Absence to Increase Respect and Honor
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Use Absence to Increase Respect and Honor' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-02-never-trust-friends-use-enemies]]
Confidence: 0.95
Reason:
Note 'Use Absence to Increase Respect and Honor' extends the principles discussed in 'Never Put Too Much Trust in Friends, Learn How to Use Enemies'.

---
→ [[law-04-say-less-than-necessary]]
Confidence: 0.95
Reason:
Note 'Use Absence to Increase Respect and Honor' extends the principles discussed in 'Always Say Less Than Necessary'.

---
→ [[law-11-keep-people-dependent]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### Keep Others in Suspended Terror — Cultivate an Air of Unpredictability
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Keep Others in Suspended Terror — Cultivate an Air of Unpredictability' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-03-conceal-your-intentions]]
Confidence: 0.95
Reason:
Note 'Keep Others in Suspended Terror — Cultivate an Air of Unpredictability' indicates a functional dependency on 'Conceal Your Intentions'.

---
→ [[law-16-use-absence]]
Confidence: 0.95
Reason:
Note 'Keep Others in Suspended Terror — Cultivate an Air of Unpredictability' indicates a functional dependency on 'Use Absence to Increase Respect and Honor'.

---
→ [[law-39-stir-up-waters]]
Confidence: 0.95
Reason:
Note 'Keep Others in Suspended Terror — Cultivate an Air of Unpredictability' indicates a functional dependency on 'Stir Up Waters to Catch Fish'.

---
→ [[law-27-create-a-cultlike-following]]
Confidence: 0.90
Reason:
Note 'Keep Others in Suspended Terror — Cultivate an Air of Unpredictability' indicates a functional dependency on 'Play on People's Need to Believe to Create a Cultlike Following'.

---
→ [[polgar-sisters-chess]]
Confidence: 0.84
Reason:
Note 'Keep Others in Suspended Terror — Cultivate an Air of Unpredictability' indicates a functional dependency on 'Polgar Sisters Chess'.

---

### Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[haile-selassie-court]]
Confidence: 0.95
Reason:
Note 'Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous' extends the principles discussed in 'Haile Selassie's Court of Dependency'.

---
→ [[law-28-enter-action-with-boldness]]
Confidence: 0.90
Reason:
Note 'Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous' extends the principles discussed in 'Enter Action with Boldness'.

---
→ [[law-16-use-absence]]
Confidence: 0.88
Reason:
Note 'Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous' extends the principles discussed in 'Use Absence to Increase Respect and Honor'.

---
→ [[law-02-never-trust-friends-use-enemies]]
Confidence: 0.87
Reason:
Note 'Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous' extends the principles discussed in 'Never Put Too Much Trust in Friends, Learn How to Use Enemies'.

---
→ [[law-39-stir-up-waters]]
Confidence: 0.86
Reason:
Note 'Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous' extends the principles discussed in 'Stir Up Waters to Catch Fish'.

---
→ [[law-04-say-less-than-necessary]]
Confidence: 0.86
Reason:
Note 'Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous' extends the principles discussed in 'Always Say Less Than Necessary'.

---
→ [[law-35-master-the-art-of-timing]]
Confidence: 0.86
Reason:
Note 'Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous' extends the principles discussed in 'Master the Art of Timing'.

---

### Know Who You're Dealing With — Do Not Offend the Wrong Person
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Know Who You're Dealing With — Do Not Offend the Wrong Person' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-14-pose-as-friend-work-as-spy]]
Confidence: 0.90
Reason:
Note 'Know Who You're Dealing With — Do Not Offend the Wrong Person' extends the principles discussed in 'Pose as a Friend, Work as a Spy'.

---

### Do Not Commit to Anyone
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Do Not Commit to Anyone' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-04-say-less-than-necessary]]
Confidence: 0.95
Reason:
Note 'Do Not Commit to Anyone' indicates a functional dependency on 'Always Say Less Than Necessary'.

---
→ [[law-07-get-others-to-do-the-work]]
Confidence: 0.95
Reason:
Note 'Do Not Commit to Anyone' indicates a functional dependency on 'Get Others to Do the Work for You, but Always Take the Credit'.

---
→ [[law-13-appeal-to-self-interest]]
Confidence: 0.95
Reason:
Note 'Do Not Commit to Anyone' indicates a functional dependency on 'When Asking for Help, Appeal to Self-Interest, Never to Mercy or Gratitude'.

---
→ [[law-38-think-as-you-like-behave-like-others]]
Confidence: 0.95
Reason:
Note 'Do Not Commit to Anyone' indicates a functional dependency on 'Think as You Like but Behave Like Others'.

---
→ [[law-45-preach-change-reform-slowly]]
Confidence: 0.95
Reason:
Note 'Do Not Commit to Anyone' indicates a functional dependency on 'Preach the Need for Change, but Never Reform Too Much at Once'.

---
→ [[talleyrand-survival]]
Confidence: 0.95
Reason:
Note 'Do Not Commit to Anyone' indicates a functional dependency on 'The Diplomatic Survival of Talleyrand'.

---

### Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-38-think-as-you-like-behave-like-others]]
Confidence: 0.95
Reason:
Note 'Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark' extends the principles discussed in 'Think as You Like but Behave Like Others'.

---
→ [[law-44-mirror-effect]]
Confidence: 0.95
Reason:
Note 'Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark' extends the principles discussed in 'Disarm and Infuriate with the Mirror Effect'.

---
→ [[law-03-conceal-your-intentions]]
Confidence: 0.90
Reason:
Note 'Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark' extends the principles discussed in 'Conceal Your Intentions'.

---
→ [[law-12-selective-honesty-to-disarm]]
Confidence: 0.89
Reason:
Note 'Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark' extends the principles discussed in 'Use Selective Honesty and Generosity to Disarm Your Victim'.

---
→ [[law-23-concentrate-your-forces]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---

### Use the Surrender Tactic — Transform Weakness into Power
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Use the Surrender Tactic — Transform Weakness into Power' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-20-do-not-commit-to-anyone]]
Confidence: 0.95
Reason:
Note 'Use the Surrender Tactic — Transform Weakness into Power' extends the principles discussed in 'Do Not Commit to Anyone'.

---
→ [[mao-zedong-formlessness]]
Confidence: 0.95
Reason:
Note 'Use the Surrender Tactic — Transform Weakness into Power' extends the principles discussed in 'Mao Zedong's Guerrilla Formlessness'.

---
→ [[the-law-of-reversal]]
Confidence: 0.95
Reason:
Note 'Use the Surrender Tactic — Transform Weakness into Power' extends the principles discussed in 'The Law of Reversal'.

---
→ [[law-16-use-absence]]
Confidence: 0.89
Reason:
Note 'Use the Surrender Tactic — Transform Weakness into Power' extends the principles discussed in 'Use Absence to Increase Respect and Honor'.

---
→ [[law-15-crush-your-enemy-totally]]
Confidence: 0.87
Reason:
Note 'Use the Surrender Tactic — Transform Weakness into Power' extends the principles discussed in 'Crush Your Enemy Totally'.

---
→ [[law-35-master-the-art-of-timing]]
Confidence: 0.87
Reason:
Note 'Use the Surrender Tactic — Transform Weakness into Power' extends the principles discussed in 'Master the Art of Timing'.

---
→ [[law-07-get-others-to-do-the-work]]
Confidence: 0.87
Reason:
Note 'Use the Surrender Tactic — Transform Weakness into Power' extends the principles discussed in 'Get Others to Do the Work for You, but Always Take the Credit'.

---

### Concentrate Your Forces
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Concentrate Your Forces' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-15-crush-your-enemy-totally]]
Confidence: 0.95
Reason:
Note 'Concentrate Your Forces' extends the principles discussed in 'Crush Your Enemy Totally'.

---
→ [[law-21-play-a-sucker]]
Confidence: 0.95
Reason:
Note 'Concentrate Your Forces' extends the principles discussed in 'Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark'.

---
→ [[law-28-enter-action-with-boldness]]
Confidence: 0.95
Reason:
Note 'Concentrate Your Forces' extends the principles discussed in 'Enter Action with Boldness'.

---
→ [[law-41-avoid-stepping-into-great-mans-shoes]]
Confidence: 0.95
Reason:
Note 'Concentrate Your Forces' extends the principles discussed in 'Avoid Stepping into a Great Man's Shoes'.

---
→ [[pointing-and-calling]]
Confidence: 0.95
Reason:
Note 'Concentrate Your Forces' extends the principles discussed in 'Pointing-and-Calling'.

---
→ [[sorites-paradox]]
Confidence: 0.95
Reason:
Note 'Concentrate Your Forces' extends the principles discussed in 'Sorites Paradox'.

---
→ [[law-10-avoid-the-unhappy-and-unlucky]]
Confidence: 0.90
Reason:
Note 'Concentrate Your Forces' extends the principles discussed in 'Infection: Avoid the Unhappy and Unlucky'.

---

### Play the Perfect Courtier
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Play the Perfect Courtier' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-18-isolation-is-dangerous]]
Confidence: 0.95
Reason:
Note 'Play the Perfect Courtier' indicates a functional dependency on 'Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous'.

---
→ [[sprezzatura]]
Confidence: 0.95
Reason:
Note 'Play the Perfect Courtier' indicates a functional dependency on 'Sprezzatura'.

---
→ [[the-illusion-of-equality]]
Confidence: 0.95
Reason:
Note 'Play the Perfect Courtier' indicates a functional dependency on 'The Illusion of Equality'.

---
→ [[the-courtier-archetype]]
Confidence: 0.90
Reason:
Note 'Play the Perfect Courtier' indicates a functional dependency on 'The Courtier Archetype'.

---
→ [[court-power]]
Confidence: 0.87
Reason:
Note 'Play the Perfect Courtier' indicates a functional dependency on 'Court Power'.

---

### Re-Create Yourself
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Re-Create Yourself' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-34-be-royal]]
Confidence: 0.95
Reason:
Note 'Re-Create Yourself' extends the principles discussed in 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One'.

---
→ [[law-37-create-compelling-spectacles]]
Confidence: 0.95
Reason:
Note 'Re-Create Yourself' extends the principles discussed in 'Create Compelling Spectacles'.

---
→ [[law-41-avoid-stepping-into-great-mans-shoes]]
Confidence: 0.95
Reason:
Note 'Re-Create Yourself' extends the principles discussed in 'Avoid Stepping into a Great Man's Shoes'.

---
→ [[power-abhors-a-vacuum]]
Confidence: 0.95
Reason:
Note 'Re-Create Yourself' extends the principles discussed in 'Power Abhors a Vacuum'.

---
→ [[law-05-guard-your-reputation]]
Confidence: 0.90
Reason:
Note 'Re-Create Yourself' extends the principles discussed in 'So Much Depends on Reputation — Guard It with Your Life'.

---
→ [[law-10-avoid-the-unhappy-and-unlucky]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---
→ [[law-06-court-attention]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---

### Keep Your Hands Clean
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Keep Your Hands Clean' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[cesare-borgia]]
Confidence: 0.95
Reason:
Note 'Keep Your Hands Clean' extends the principles discussed in 'Cesare Borgia'.

---

### Play on People's Need to Believe to Create a Cultlike Following
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Play on People's Need to Believe to Create a Cultlike Following' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-17-cultivate-unpredictability]]
Confidence: 0.95
Reason:
Note 'Play on People's Need to Believe to Create a Cultlike Following' indicates a functional dependency on 'Keep Others in Suspended Terror — Cultivate an Air of Unpredictability'.

---
→ [[law-45-preach-change-reform-slowly]]
Confidence: 0.95
Reason:
Note 'Play on People's Need to Believe to Create a Cultlike Following' indicates a functional dependency on 'Preach the Need for Change, but Never Reform Too Much at Once'.

---
→ [[law-11-keep-people-dependent]]
Confidence: 0.84
Reason:
Note 'Play on People's Need to Believe to Create a Cultlike Following' indicates a functional dependency on 'Learn to Keep People Dependent on You'.

---
→ [[law-20-do-not-commit-to-anyone]]
Confidence: 0.84
Reason:
Note 'Play on People's Need to Believe to Create a Cultlike Following' indicates a functional dependency on 'Do Not Commit to Anyone'.

---
→ [[law-23-concentrate-your-forces]]
Confidence: 0.83
Reason:
Note 'Play on People's Need to Believe to Create a Cultlike Following' indicates a functional dependency on 'Concentrate Your Forces'.

---
→ [[law-37-create-compelling-spectacles]]
Confidence: 0.83
Reason:
Note 'Play on People's Need to Believe to Create a Cultlike Following' indicates a functional dependency on 'Create Compelling Spectacles'.

---
→ [[law-04-say-less-than-necessary]]
Confidence: 0.81
Reason:
Note 'Play on People's Need to Believe to Create a Cultlike Following' indicates a functional dependency on 'Always Say Less Than Necessary'.

---

### Enter Action with Boldness
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Enter Action with Boldness' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[power-abhors-a-vacuum]]
Confidence: 0.95
Reason:
Note 'Enter Action with Boldness' extends the principles discussed in 'Power Abhors a Vacuum'.

---
→ [[law-23-concentrate-your-forces]]
Confidence: 0.87
Reason:
Note 'Enter Action with Boldness' extends the principles discussed in 'Concentrate Your Forces'.

---
→ [[law-35-master-the-art-of-timing]]
Confidence: 0.86
Reason:
Note 'Enter Action with Boldness' extends the principles discussed in 'Master the Art of Timing'.

---
→ [[law-18-isolation-is-dangerous]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---
→ [[law-38-think-as-you-like-behave-like-others]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---
→ [[law-32-play-to-peoples-fantasies]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---
→ [[law-16-use-absence]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---

### Plan All the Way to the End
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Plan All the Way to the End' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-35-master-the-art-of-timing]]
Confidence: 0.95
Reason:
Note 'Plan All the Way to the End' indicates a functional dependency on 'Master the Art of Timing'.

---
→ [[law-47-learn-when-to-stop]]
Confidence: 0.90
Reason:
Note 'Plan All the Way to the End' indicates a functional dependency on 'Do Not Go Past the Mark You Aimed For — In Victory, Learn When to Stop'.

---
→ [[bismarck-realpolitik]]
Confidence: 0.84
Reason:
Note 'Plan All the Way to the End' indicates a functional dependency on 'Otto von Bismarck and Realpolitik'.

---

### Make Your Accomplishments Seem Effortless
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Make Your Accomplishments Seem Effortless' discusses concepts that contradict or contrast with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-03-conceal-your-intentions]]
Confidence: 0.95
Reason:
Note 'Make Your Accomplishments Seem Effortless' discusses concepts that contradict or contrast with 'Conceal Your Intentions'.

---
→ [[sprezzatura]]
Confidence: 0.95
Reason:
Note 'Make Your Accomplishments Seem Effortless' discusses concepts that contradict or contrast with 'Sprezzatura'.

---
→ [[law-11-keep-people-dependent]]
Confidence: 0.87
Reason:
Note 'Make Your Accomplishments Seem Effortless' discusses concepts that contradict or contrast with 'Learn to Keep People Dependent on You'.

---
→ [[law-04-say-less-than-necessary]]
Confidence: 0.87
Reason:
Note 'Make Your Accomplishments Seem Effortless' discusses concepts that contradict or contrast with 'Always Say Less Than Necessary'.

---
→ [[law-34-be-royal]]
Confidence: 0.85
Reason:
Note 'Make Your Accomplishments Seem Effortless' discusses concepts that contradict or contrast with 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One'.

---
→ [[law-10-avoid-the-unhappy-and-unlucky]]
Confidence: 0.85
Reason:
Note 'Make Your Accomplishments Seem Effortless' discusses concepts that contradict or contrast with 'Infection: Avoid the Unhappy and Unlucky'.

---
→ [[law-38-think-as-you-like-behave-like-others]]
Confidence: 0.84
Reason:
Note 'Make Your Accomplishments Seem Effortless' discusses concepts that contradict or contrast with 'Think as You Like but Behave Like Others'.

---

### Control the Options — Get Others to Play with the Cards You Deal
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Control the Options — Get Others to Play with the Cards You Deal' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-08-make-others-come-to-you]]
Confidence: 0.90
Reason:
Note 'Control the Options — Get Others to Play with the Cards You Deal' extends the principles discussed in 'Make Other People Come to You — Use Bait if Necessary'.

---

### Play to People's Fantasies
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Play to People's Fantasies' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-43-work-on-hearts-and-minds]]
Confidence: 0.95
Reason:
Note 'Play to People's Fantasies' extends the principles discussed in 'Work on the Hearts and Minds of Others'.

---
→ [[law-37-create-compelling-spectacles]]
Confidence: 0.90
Reason:
Note 'Play to People's Fantasies' extends the principles discussed in 'Create Compelling Spectacles'.

---
→ [[law-38-think-as-you-like-behave-like-others]]
Confidence: 0.89
Reason:
Note 'Play to People's Fantasies' extends the principles discussed in 'Think as You Like but Behave Like Others'.

---
→ [[law-06-court-attention]]
Confidence: 0.88
Reason:
Note 'Play to People's Fantasies' extends the principles discussed in 'Court Attention at All Costs'.

---
→ [[law-28-enter-action-with-boldness]]
Confidence: 0.86
Reason:
Note 'Play to People's Fantasies' extends the principles discussed in 'Enter Action with Boldness'.

---
→ [[law-27-create-a-cultlike-following]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---
→ [[law-34-be-royal]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---

### Discover Each Man's Thumbscrew
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Discover Each Man's Thumbscrew' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-13-appeal-to-self-interest]]
Confidence: 0.95
Reason:
Note 'Discover Each Man's Thumbscrew' indicates a functional dependency on 'When Asking for Help, Appeal to Self-Interest, Never to Mercy or Gratitude'.

---
→ [[law-44-mirror-effect]]
Confidence: 0.95
Reason:
Note 'Discover Each Man's Thumbscrew' indicates a functional dependency on 'Disarm and Infuriate with the Mirror Effect'.

---
→ [[the-futility-of-gratitude]]
Confidence: 0.95
Reason:
Note 'Discover Each Man's Thumbscrew' indicates a functional dependency on 'The Futility of Gratitude'.

---
→ [[law-40-despise-the-free-lunch]]
Confidence: 0.90
Reason:
Note 'Discover Each Man's Thumbscrew' indicates a functional dependency on 'Despise the Free Lunch'.

---

### Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-40-despise-the-free-lunch]]
Confidence: 0.95
Reason:
Note 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One' extends the principles discussed in 'Despise the Free Lunch'.

---
→ [[law-25-recreate-yourself]]
Confidence: 0.90
Reason:
Note 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One' extends the principles discussed in 'Re-Create Yourself'.

---
→ [[law-05-guard-your-reputation]]
Confidence: 0.89
Reason:
Note 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One' extends the principles discussed in 'So Much Depends on Reputation — Guard It with Your Life'.

---
→ [[law-11-keep-people-dependent]]
Confidence: 0.88
Reason:
Note 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One' extends the principles discussed in 'Learn to Keep People Dependent on You'.

---
→ [[law-10-avoid-the-unhappy-and-unlucky]]
Confidence: 0.87
Reason:
Note 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One' extends the principles discussed in 'Infection: Avoid the Unhappy and Unlucky'.

---
→ [[law-30-make-accomplishments-seem-effortless]]
Confidence: 0.80
Reason:
High conceptual similarity score of 80%.

---

### Master the Art of Timing
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Master the Art of Timing' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-20-do-not-commit-to-anyone]]
Confidence: 0.95
Reason:
Note 'Master the Art of Timing' extends the principles discussed in 'Do Not Commit to Anyone'.

---
→ [[law-28-enter-action-with-boldness]]
Confidence: 0.95
Reason:
Note 'Master the Art of Timing' extends the principles discussed in 'Enter Action with Boldness'.

---
→ [[talleyrand-survival]]
Confidence: 0.90
Reason:
Note 'Master the Art of Timing' extends the principles discussed in 'The Diplomatic Survival of Talleyrand'.

---
→ [[law-29-plan-to-the-end]]
Confidence: 0.83
Reason:
High conceptual similarity score of 83%.

---
→ [[law-47-learn-when-to-stop]]
Confidence: 0.83
Reason:
High conceptual similarity score of 82%.

---

### Disdain Things You Cannot Have — Ignoring Them is the Best Revenge
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Disdain Things You Cannot Have — Ignoring Them is the Best Revenge' discusses concepts that contradict or contrast with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[the-reality-of-human-envy]]
Confidence: 0.95
Reason:
Note 'Disdain Things You Cannot Have — Ignoring Them is the Best Revenge' discusses concepts that contradict or contrast with 'The Reality of Human Envy'.

---
→ [[law-39-stir-up-waters]]
Confidence: 0.90
Reason:
Note 'Disdain Things You Cannot Have — Ignoring Them is the Best Revenge' discusses concepts that contradict or contrast with 'Stir Up Waters to Catch Fish'.

---

### Create Compelling Spectacles
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Create Compelling Spectacles' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-32-play-to-peoples-fantasies]]
Confidence: 0.95
Reason:
Note 'Create Compelling Spectacles' extends the principles discussed in 'Play to People's Fantasies'.

---
→ [[queen-elizabeth-i-power-image]]
Confidence: 0.95
Reason:
Note 'Create Compelling Spectacles' extends the principles discussed in 'Queen Elizabeth I's Power Image'.

---

### Think as You Like but Behave Like Others
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Think as You Like but Behave Like Others' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-45-preach-change-reform-slowly]]
Confidence: 0.95
Reason:
Note 'Think as You Like but Behave Like Others' indicates a functional dependency on 'Preach the Need for Change, but Never Reform Too Much at Once'.

---
→ [[law-03-conceal-your-intentions]]
Confidence: 0.90
Reason:
Note 'Think as You Like but Behave Like Others' indicates a functional dependency on 'Conceal Your Intentions'.

---
→ [[law-20-do-not-commit-to-anyone]]
Confidence: 0.88
Reason:
Note 'Think as You Like but Behave Like Others' indicates a functional dependency on 'Do Not Commit to Anyone'.

---
→ [[law-30-make-accomplishments-seem-effortless]]
Confidence: 0.86
Reason:
Note 'Think as You Like but Behave Like Others' indicates a functional dependency on 'Make Your Accomplishments Seem Effortless'.

---
→ [[law-04-say-less-than-necessary]]
Confidence: 0.86
Reason:
Note 'Think as You Like but Behave Like Others' indicates a functional dependency on 'Always Say Less Than Necessary'.

---
→ [[law-02-never-trust-friends-use-enemies]]
Confidence: 0.85
Reason:
Note 'Think as You Like but Behave Like Others' indicates a functional dependency on 'Never Put Too Much Trust in Friends, Learn How to Use Enemies'.

---
→ [[law-16-use-absence]]
Confidence: 0.84
Reason:
Note 'Think as You Like but Behave Like Others' indicates a functional dependency on 'Use Absence to Increase Respect and Honor'.

---

### Stir Up Waters to Catch Fish
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Stir Up Waters to Catch Fish' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-36-disdain-things-you-cannot-have]]
Confidence: 0.95
Reason:
Note 'Stir Up Waters to Catch Fish' extends the principles discussed in 'Disdain Things You Cannot Have — Ignoring Them is the Best Revenge'.

---
→ [[talleyrand-survival]]
Confidence: 0.90
Reason:
Note 'Stir Up Waters to Catch Fish' extends the principles discussed in 'The Diplomatic Survival of Talleyrand'.

---
→ [[law-17-cultivate-unpredictability]]
Confidence: 0.87
Reason:
Note 'Stir Up Waters to Catch Fish' extends the principles discussed in 'Keep Others in Suspended Terror — Cultivate an Air of Unpredictability'.

---
→ [[law-08-make-others-come-to-you]]
Confidence: 0.85
Reason:
Note 'Stir Up Waters to Catch Fish' extends the principles discussed in 'Make Other People Come to You — Use Bait if Necessary'.

---
→ [[law-03-conceal-your-intentions]]
Confidence: 0.83
Reason:
High conceptual similarity score of 83%.

---
→ [[law-02-never-trust-friends-use-enemies]]
Confidence: 0.83
Reason:
High conceptual similarity score of 82%.

---
→ [[law-16-use-absence]]
Confidence: 0.83
Reason:
High conceptual similarity score of 82%.

---

### Despise the Free Lunch
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Despise the Free Lunch' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[con-artist-yellow-kid-weil]]
Confidence: 0.95
Reason:
Note 'Despise the Free Lunch' indicates a functional dependency on 'Joseph 'Yellow Kid' Weil'.

---
→ [[law-33-discover-each-mans-thumbscrew]]
Confidence: 0.95
Reason:
Note 'Despise the Free Lunch' indicates a functional dependency on 'Discover Each Man's Thumbscrew'.

---
→ [[the-futility-of-gratitude]]
Confidence: 0.95
Reason:
Note 'Despise the Free Lunch' indicates a functional dependency on 'The Futility of Gratitude'.

---
→ [[law-34-be-royal]]
Confidence: 0.81
Reason:
Note 'Despise the Free Lunch' indicates a functional dependency on 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One'.

---

### Avoid Stepping into a Great Man's Shoes
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Avoid Stepping into a Great Man's Shoes' discusses comparisons or tradeoffs with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-25-recreate-yourself]]
Confidence: 0.90
Reason:
Note 'Avoid Stepping into a Great Man's Shoes' discusses comparisons or tradeoffs with 'Re-Create Yourself'.

---
→ [[law-10-avoid-the-unhappy-and-unlucky]]
Confidence: 0.86
Reason:
Note 'Avoid Stepping into a Great Man's Shoes' discusses comparisons or tradeoffs with 'Infection: Avoid the Unhappy and Unlucky'.

---
→ [[law-05-guard-your-reputation]]
Confidence: 0.83
Reason:
Note 'Avoid Stepping into a Great Man's Shoes' discusses comparisons or tradeoffs with 'So Much Depends on Reputation — Guard It with Your Life'.

---
→ [[law-34-be-royal]]
Confidence: 0.83
Reason:
Note 'Avoid Stepping into a Great Man's Shoes' discusses comparisons or tradeoffs with 'Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One'.

---
→ [[law-23-concentrate-your-forces]]
Confidence: 0.82
Reason:
Note 'Avoid Stepping into a Great Man's Shoes' discusses comparisons or tradeoffs with 'Concentrate Your Forces'.

---
→ [[louis-xiv-versailles]]
Confidence: 0.82
Reason:
Note 'Avoid Stepping into a Great Man's Shoes' discusses comparisons or tradeoffs with 'Louis XIV and Versailles'.

---

### Strike the Shepherd and the Sheep Will Scatter
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Strike the Shepherd and the Sheep Will Scatter' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-15-crush-your-enemy-totally]]
Confidence: 0.90
Reason:
Note 'Strike the Shepherd and the Sheep Will Scatter' extends the principles discussed in 'Crush Your Enemy Totally'.

---
→ [[law-35-master-the-art-of-timing]]
Confidence: 0.86
Reason:
Note 'Strike the Shepherd and the Sheep Will Scatter' extends the principles discussed in 'Master the Art of Timing'.

---
→ [[you-do-not-rise-to-the-level-of-your-goals]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---
→ [[power-abhors-a-vacuum]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---
→ [[law-20-do-not-commit-to-anyone]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---
→ [[law-07-get-others-to-do-the-work]]
Confidence: 0.81
Reason:
High conceptual similarity score of 80%.

---
→ [[law-41-avoid-stepping-into-great-mans-shoes]]
Confidence: 0.81
Reason:
High conceptual similarity score of 80%.

---

### Work on the Hearts and Minds of Others
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Work on the Hearts and Minds of Others' discusses concepts that contradict or contrast with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-32-play-to-peoples-fantasies]]
Confidence: 0.90
Reason:
Note 'Work on the Hearts and Minds of Others' discusses concepts that contradict or contrast with 'Play to People's Fantasies'.

---
→ [[law-44-mirror-effect]]
Confidence: 0.81
Reason:
Note 'Work on the Hearts and Minds of Others' discusses concepts that contradict or contrast with 'Disarm and Infuriate with the Mirror Effect'.

---

### Disarm and Infuriate with the Mirror Effect
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Disarm and Infuriate with the Mirror Effect' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-33-discover-each-mans-thumbscrew]]
Confidence: 0.90
Reason:
Note 'Disarm and Infuriate with the Mirror Effect' extends the principles discussed in 'Discover Each Man's Thumbscrew'.

---
→ [[law-21-play-a-sucker]]
Confidence: 0.90
Reason:
Note 'Disarm and Infuriate with the Mirror Effect' extends the principles discussed in 'Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark'.

---

### Preach the Need for Change, but Never Reform Too Much at Once
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Preach the Need for Change, but Never Reform Too Much at Once' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-38-think-as-you-like-behave-like-others]]
Confidence: 0.90
Reason:
Note 'Preach the Need for Change, but Never Reform Too Much at Once' indicates a functional dependency on 'Think as You Like but Behave Like Others'.

---
→ [[law-27-create-a-cultlike-following]]
Confidence: 0.87
Reason:
Note 'Preach the Need for Change, but Never Reform Too Much at Once' indicates a functional dependency on 'Play on People's Need to Believe to Create a Cultlike Following'.

---
→ [[law-20-do-not-commit-to-anyone]]
Confidence: 0.82
Reason:
Note 'Preach the Need for Change, but Never Reform Too Much at Once' indicates a functional dependency on 'Do Not Commit to Anyone'.

---

### Never Appear Too Perfect
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Never Appear Too Perfect' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-38-think-as-you-like-behave-like-others]]
Confidence: 0.95
Reason:
Note 'Never Appear Too Perfect' extends the principles discussed in 'Think as You Like but Behave Like Others'.

---
→ [[nicolas-fouquet-downfall]]
Confidence: 0.95
Reason:
Note 'Never Appear Too Perfect' extends the principles discussed in 'The Downfall of Nicolas Fouquet'.

---
→ [[the-reality-of-human-envy]]
Confidence: 0.95
Reason:
Note 'Never Appear Too Perfect' extends the principles discussed in 'The Reality of Human Envy'.

---
→ [[law-01-never-outshine-the-master]]
Confidence: 0.85
Reason:
Note 'Never Appear Too Perfect' extends the principles discussed in 'Never Outshine the Master'.

---

### Do Not Go Past the Mark You Aimed For — In Victory, Learn When to Stop
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Do Not Go Past the Mark You Aimed For — In Victory, Learn When to Stop' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-35-master-the-art-of-timing]]
Confidence: 0.95
Reason:
Note 'Do Not Go Past the Mark You Aimed For — In Victory, Learn When to Stop' extends the principles discussed in 'Master the Art of Timing'.

---
→ [[law-29-plan-to-the-end]]
Confidence: 0.90
Reason:
Note 'Do Not Go Past the Mark You Aimed For — In Victory, Learn When to Stop' extends the principles discussed in 'Plan All the Way to the End'.

---

### Assume Formlessness
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Assume Formlessness' extends the principles discussed in '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[talleyrand-survival]]
Confidence: 0.95
Reason:
Note 'Assume Formlessness' extends the principles discussed in 'The Diplomatic Survival of Talleyrand'.

---
→ [[mao-zedong-formlessness]]
Confidence: 0.90
Reason:
Note 'Assume Formlessness' extends the principles discussed in 'Mao Zedong's Guerrilla Formlessness'.

---

### Law of Least Effort
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Law of Least Effort' functions as an illustrative example of '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[goldilocks-rule]]
Confidence: 0.95
Reason:
Note 'Law of Least Effort' functions as an illustrative example of 'Goldilocks Rule'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Law of Least Effort' functions as an illustrative example of 'Habit Loop'.

---
→ [[two-minute-rule]]
Confidence: 0.95
Reason:
Note 'Law of Least Effort' functions as an illustrative example of 'Two-Minute Rule'.

---
→ [[hebbs-law]]
Confidence: 0.90
Reason:
Note 'Law of Least Effort' functions as an illustrative example of 'Hebb's Law'.

---
→ [[habit-tracking]]
Confidence: 0.81
Reason:
Note 'Law of Least Effort' functions as an illustrative example of 'Habit Tracking'.

---
→ [[environment-priming]]
Confidence: 0.81
Reason:
Note 'Law of Least Effort' functions as an illustrative example of 'Environment Priming'.

---

### Cheatsheet — Learn 99% Claude & Codex in 25 mins
→ [[bypass-ask-permissions-mode]]
Confidence: 0.95
Reason:
Note 'Cheatsheet — Learn 99% Claude & Codex in 25 mins' extends the principles discussed in 'Bypass Ask Permissions Mode'.

---
→ [[external-code-review-guardrails]]
Confidence: 0.95
Reason:
Note 'Cheatsheet — Learn 99% Claude & Codex in 25 mins' extends the principles discussed in 'External Code Review Guardrails'.

---
→ [[local-filesystem-agent-advantage]]
Confidence: 0.95
Reason:
Note 'Cheatsheet — Learn 99% Claude & Codex in 25 mins' extends the principles discussed in 'Local File System Access Advantage'.

---
→ [[loop-engineering]]
Confidence: 0.95
Reason:
Note 'Cheatsheet — Learn 99% Claude & Codex in 25 mins' extends the principles discussed in 'Loop Engineering'.

---
→ [[pkm-development-phases]]
Confidence: 0.95
Reason:
Note 'Cheatsheet — Learn 99% Claude & Codex in 25 mins' extends the principles discussed in 'PKM Development Phases'.

---
→ [[self-fixing-code-loops]]
Confidence: 0.95
Reason:
Note 'Cheatsheet — Learn 99% Claude & Codex in 25 mins' extends the principles discussed in 'Self-Fixing Code Loops'.

---

### Liking and Loving Tendency
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Liking and Loving Tendency' extends the principles discussed in 'Warren Buffett's Decision-Making Framework'.

---
→ [[disliking-hating-tendency]]
Confidence: 0.95
Reason:
Note 'Liking and Loving Tendency' extends the principles discussed in 'Disliking and Hating Tendency'.

---
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Liking and Loving Tendency' extends the principles discussed in 'Lollapalooza Effect'.

---

### Local File System Access Advantage
→ [[learn-99-percent-claude-and-codex-in-25-mins-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Local File System Access Advantage' extends the principles discussed in 'Cheatsheet — Learn 99% Claude & Codex in 25 mins'.

---
→ [[pkm-development-phases]]
Confidence: 0.84
Reason:
High conceptual similarity score of 84%.

---
→ [[bypass-ask-permissions-mode]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---

### Lollapalooza Effect
→ [[authority-bias-investing]]
Confidence: 0.95
Reason:
Note 'Lollapalooza Effect' functions as an illustrative example of 'Authority Bias in Investing'.

---
→ [[availability-bias-investing]]
Confidence: 0.95
Reason:
Note 'Lollapalooza Effect' functions as an illustrative example of 'Availability Bias in Investing'.

---
→ [[bias-from-association]]
Confidence: 0.95
Reason:
Note 'Lollapalooza Effect' functions as an illustrative example of 'Bias from Association'.

---
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Lollapalooza Effect' functions as an illustrative example of 'Warren Buffett's Decision-Making Framework'.

---
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'Lollapalooza Effect' functions as an illustrative example of 'Charlie Munger's Influence on Warren Buffett'.

---
→ [[commitment-consistency-bias]]
Confidence: 0.95
Reason:
Note 'Lollapalooza Effect' functions as an illustrative example of 'Commitment and Consistency Bias'.

---
→ [[contrast-effect-bias]]
Confidence: 0.95
Reason:
Note 'Lollapalooza Effect' functions as an illustrative example of 'Contrast Effect Bias'.

---
→ [[disliking-hating-tendency]]
Confidence: 0.95
Reason:
Note 'Lollapalooza Effect' functions as an illustrative example of 'Disliking and Hating Tendency'.

---

### Long-Term Time Horizon
→ [[musk-mars-colonization-vision]]
Confidence: 0.95
Reason:
Note 'Long-Term Time Horizon' indicates a functional dependency on 'Mars Colonization Mission'.

---
→ [[elon-musk-tesla-founding]]
Confidence: 0.89
Reason:
Note 'Long-Term Time Horizon' indicates a functional dependency on 'Elon Musk Tesla Founding'.

---
→ [[speed-of-iteration-principle]]
Confidence: 0.89
Reason:
Note 'Long-Term Time Horizon' indicates a functional dependency on 'Speed of Iteration Principle'.

---
→ [[elon-musk-spacex-founding]]
Confidence: 0.88
Reason:
Note 'Long-Term Time Horizon' indicates a functional dependency on 'Elon Musk SpaceX Founding'.

---
→ [[elon-musk-hiring-philosophy]]
Confidence: 0.87
Reason:
Note 'Long-Term Time Horizon' indicates a functional dependency on 'Evidence of Exceptional Ability Hiring'.

---
→ [[bayesian-decision-making]]
Confidence: 0.84
Reason:
Note 'Long-Term Time Horizon' indicates a functional dependency on 'Bayesian Decision Making'.

---
→ [[elon-musk-education]]
Confidence: 0.84
Reason:
Note 'Long-Term Time Horizon' indicates a functional dependency on 'Elon Musk Education'.

---
→ [[elon-musk-xcom-paypal]]
Confidence: 0.83
Reason:
Note 'Long-Term Time Horizon' indicates a functional dependency on 'Elon Musk X.com PayPal'.

---

### Loop Engineering
→ [[agent-loop-architectures]]
Confidence: 0.95
Reason:
Note 'Loop Engineering' extends the principles discussed in 'Agent Loop Architectures'.

---
→ [[agent-loop-mechanics]]
Confidence: 0.95
Reason:
Note 'Loop Engineering' extends the principles discussed in 'Agent Loop Mechanics'.

---
→ [[bypass-ask-permissions-mode]]
Confidence: 0.95
Reason:
Note 'Loop Engineering' extends the principles discussed in 'Bypass Ask Permissions Mode'.

---
→ [[finally-agent-loops-clearly-explained-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Loop Engineering' extends the principles discussed in 'Cheatsheet — Finally. Agent Loops Clearly Explained'.

---
→ [[pkm-development-phases]]
Confidence: 0.95
Reason:
Note 'Loop Engineering' extends the principles discussed in 'PKM Development Phases'.

---
→ [[self-fixing-code-loops]]
Confidence: 0.95
Reason:
Note 'Loop Engineering' extends the principles discussed in 'Self-Fixing Code Loops'.

---
→ [[agent-loop-done-criteria]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---
→ [[loop-verification-importance]]
Confidence: 0.83
Reason:
High conceptual similarity score of 83%.

---

### Importance of the Verification Step
→ [[agent-loop-done-criteria]]
Confidence: 0.95
Reason:
Note 'Importance of the Verification Step' extends the principles discussed in 'Done Criteria in Agent Loops'.

---
→ [[agent-loop-mechanics]]
Confidence: 0.95
Reason:
Note 'Importance of the Verification Step' extends the principles discussed in 'Agent Loop Mechanics'.

---
→ [[finally-agent-loops-clearly-explained-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Importance of the Verification Step' extends the principles discussed in 'Cheatsheet — Finally. Agent Loops Clearly Explained'.

---
→ [[agent-loop-architectures]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### Louis XIV and Versailles
→ [[law-41-avoid-stepping-into-great-mans-shoes]]
Confidence: 0.95
Reason:
Note 'Louis XIV and Versailles' extends the principles discussed in 'Avoid Stepping into a Great Man's Shoes'.

---
→ [[court-power]]
Confidence: 0.90
Reason:
Note 'Louis XIV and Versailles' extends the principles discussed in 'Court Power'.

---
→ [[nicolas-fouquet-downfall]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---
→ [[law-18-isolation-is-dangerous]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### Lubrizol Acquisition
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Lubrizol Acquisition' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Lubrizol Acquisition' extends the principles discussed in 'Concept of the Economic Moat'.

---
→ [[flightsafety-acquisition]]
Confidence: 0.95
Reason:
Note 'Lubrizol Acquisition' extends the principles discussed in 'FlightSafety Acquisition'.

---
→ [[precision-castparts-acquisition]]
Confidence: 0.95
Reason:
Note 'Lubrizol Acquisition' extends the principles discussed in 'Precision Castparts Acquisition'.

---
→ [[shaw-industries-acquisition]]
Confidence: 0.95
Reason:
Note 'Lubrizol Acquisition' extends the principles discussed in 'Shaw Industries Acquisition'.

---
→ [[netjets-acquisition]]
Confidence: 0.86
Reason:
Note 'Lubrizol Acquisition' extends the principles discussed in 'NetJets Acquisition'.

---

### Machiavelli and The Prince
→ [[cesare-borgia]]
Confidence: 0.95
Reason:
Note 'Machiavelli and The Prince' extends the principles discussed in 'Cesare Borgia'.

---
→ [[moral-nobility-as-tactical-vulnerability]]
Confidence: 0.95
Reason:
Note 'Machiavelli and The Prince' extends the principles discussed in 'Moral Nobility as Tactical Vulnerability'.

---
→ [[power-as-a-social-game]]
Confidence: 0.90
Reason:
Note 'Machiavelli and The Prince' extends the principles discussed in 'Power as an Amoral Social Game'.

---
→ [[law-15-crush-your-enemy-totally]]
Confidence: 0.89
Reason:
Note 'Machiavelli and The Prince' extends the principles discussed in 'Crush Your Enemy Totally'.

---

### Make It Invisible
→ [[anne-thorndike-cafeteria-study]]
Confidence: 0.95
Reason:
Note 'Make It Invisible' indicates a functional dependency on 'Anne Thorndike Cafeteria Study'.

---
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Make It Invisible' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[commitment-devices]]
Confidence: 0.90
Reason:
Note 'Make It Invisible' indicates a functional dependency on 'Commitment Devices'.

---
→ [[vietnam-veterans-heroin-study]]
Confidence: 0.89
Reason:
Note 'Make It Invisible' indicates a functional dependency on 'Vietnam Veterans Heroin Study'.

---
→ [[habit-loop]]
Confidence: 0.86
Reason:
Note 'Make It Invisible' indicates a functional dependency on 'Habit Loop'.

---
→ [[supernormal-stimulus]]
Confidence: 0.85
Reason:
Note 'Make It Invisible' indicates a functional dependency on 'Supernormal Stimulus'.

---
→ [[cash-register-automation]]
Confidence: 0.84
Reason:
Note 'Make It Invisible' indicates a functional dependency on 'Cash Register Automation'.

---
→ [[environment-design]]
Confidence: 0.84
Reason:
Note 'Make It Invisible' indicates a functional dependency on 'Environment Design'.

---

### Make Money While You Sleep
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Make Money While You Sleep' functions as an illustrative example of 'Long-Term Compounding'.

---
→ [[rule-one-never-lose-money]]
Confidence: 0.95
Reason:
Note 'Make Money While You Sleep' functions as an illustrative example of 'Rule Number One'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Make Money While You Sleep' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[phil-carret-influence]]
Confidence: 0.85
Reason:
Note 'Make Money While You Sleep' functions as an illustrative example of 'Phil Carret Influence'.

---
→ [[washington-post-investment]]
Confidence: 0.83
Reason:
Note 'Make Money While You Sleep' functions as an illustrative example of 'Washington Post Investment'.

---
→ [[hyperbolic-discounting]]
Confidence: 0.83
Reason:
Note 'Make Money While You Sleep' functions as an illustrative example of 'Hyperbolic Discounting in Finance'.

---
→ [[buffett-frugal-lifestyle]]
Confidence: 0.82
Reason:
Note 'Make Money While You Sleep' functions as an illustrative example of 'Warren Buffett's Frugality'.

---
→ [[scarcity-bias-investing]]
Confidence: 0.81
Reason:
Note 'Make Money While You Sleep' functions as an illustrative example of 'Scarcity Bias in Investing'.

---

### Mao Zedong's Guerrilla Formlessness
→ [[law-48-assume-formlessness]]
Confidence: 0.90
Reason:
Note 'Mao Zedong's Guerrilla Formlessness' extends the principles discussed in 'Assume Formlessness'.

---

### Margin of Safety Principle
→ [[amex-salad-oil-investment]]
Confidence: 0.95
Reason:
Note 'Margin of Safety Principle' discusses comparisons or tradeoffs with 'AmEx Salad Oil Scandal Investment'.

---
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Margin of Safety Principle' discusses comparisons or tradeoffs with 'Warren Buffett's Decision-Making Framework'.

---
→ [[buffett-education-and-graham-influence]]
Confidence: 0.95
Reason:
Note 'Margin of Safety Principle' discusses comparisons or tradeoffs with 'Warren Buffett's Education and Benjamin Graham's Influence'.

---
→ [[circle-of-competence]]
Confidence: 0.95
Reason:
Note 'Margin of Safety Principle' discusses comparisons or tradeoffs with 'Circle of Competence Heuristic'.

---
→ [[coca-cola-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Margin of Safety Principle' discusses comparisons or tradeoffs with 'Coca-Cola Investment Case Study'.

---
→ [[debt-aversion-principle]]
Confidence: 0.95
Reason:
Note 'Margin of Safety Principle' discusses comparisons or tradeoffs with 'Debt Aversion Principle'.

---
→ [[fruit-of-the-loom-acquisition]]
Confidence: 0.95
Reason:
Note 'Margin of Safety Principle' discusses comparisons or tradeoffs with 'Fruit of the Loom Acquisition'.

---
→ [[intrinsic-value]]
Confidence: 0.95
Reason:
Note 'Margin of Safety Principle' discusses comparisons or tradeoffs with 'Concept of Intrinsic Value'.

---

### Marginal Gains British Cycling
→ [[one-percent-better-every-day]]
Confidence: 0.90
Reason:
Note 'Marginal Gains British Cycling' discusses comparisons or tradeoffs with 'One Percent Better Every Day'.

---
→ [[james-clear-injury-recovery]]
Confidence: 0.87
Reason:
Note 'Marginal Gains British Cycling' discusses comparisons or tradeoffs with 'James Clear Injury Recovery'.

---
→ [[systems-vs-goals]]
Confidence: 0.83
Reason:
Note 'Marginal Gains British Cycling' discusses comparisons or tradeoffs with 'Systems vs Goals'.

---

### Marmon Group Acquisition
→ [[buffett-delegation-model]]
Confidence: 0.95
Reason:
Note 'Marmon Group Acquisition' functions as an illustrative example of 'Warren Buffett's Delegation Model'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Marmon Group Acquisition' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[capital-intensity]]
Confidence: 0.95
Reason:
Note 'Marmon Group Acquisition' functions as an illustrative example of 'Low Capital Intensity'.

---
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.82
Reason:
Note 'Marmon Group Acquisition' functions as an illustrative example of 'Berkshire Hathaway Acquisition'.

---
→ [[gen-re-acquisition]]
Confidence: 0.81
Reason:
Note 'Marmon Group Acquisition' functions as an illustrative example of 'General Reinsurance Acquisition'.

---
→ [[flightsafety-acquisition]]
Confidence: 0.81
Reason:
Note 'Marmon Group Acquisition' functions as an illustrative example of 'FlightSafety Acquisition'.

---
→ [[precision-castparts-acquisition]]
Confidence: 0.81
Reason:
Note 'Marmon Group Acquisition' functions as an illustrative example of 'Precision Castparts Acquisition'.

---
→ [[bnsf-railway-acquisition]]
Confidence: 0.81
Reason:
Note 'Marmon Group Acquisition' functions as an illustrative example of 'BNSF Railway Acquisition'.

---

### Moral Nobility as Tactical Vulnerability
→ [[power-as-a-social-game]]
Confidence: 0.90
Reason:
Note 'Moral Nobility as Tactical Vulnerability' indicates a functional dependency on 'Power as an Amoral Social Game'.

---

### Motivation and inspiration
→ [[implementation-intentions]]
Confidence: 0.90
Reason:
Note 'Motivation and inspiration' extends the principles discussed in 'Implementation Intentions'.

---
→ [[building-resilience-and-grit]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---
→ [[overcoming-obstacles-and-adversity]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---
→ [[personal-growth-and-development]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---
→ [[relationships]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---
→ [[emotional-healing-and-moving-forward]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---
→ [[emotional-strength]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---
→ [[growth-mindset]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---

### Motivation Ritual
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Motivation Ritual' functions as an illustrative example of 'Atomic Habit'.

---
→ [[dopamine-driven-feedback-loop]]
Confidence: 0.95
Reason:
Note 'Motivation Ritual' functions as an illustrative example of 'The Dopamine-Driven Feedback Loop'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Motivation Ritual' functions as an illustrative example of 'Habit Loop'.

---
→ [[premacks-principle]]
Confidence: 0.95
Reason:
Note 'Motivation Ritual' functions as an illustrative example of 'Premack's Principle'.

---
→ [[temptation-bundling]]
Confidence: 0.95
Reason:
Note 'Motivation Ritual' functions as an illustrative example of 'Temptation Bundling'.

---
→ [[habit-stacking]]
Confidence: 0.90
Reason:
Note 'Motivation Ritual' functions as an illustrative example of 'Habit Stacking Method'.

---
→ [[reframing-hard-habits]]
Confidence: 0.83
Reason:
Note 'Motivation Ritual' functions as an illustrative example of 'Reframing Hard Habits'.

---

### AI Existential Risk Philosophy
→ [[elon-musk-xai]]
Confidence: 0.90
Reason:
Note 'AI Existential Risk Philosophy' functions as an illustrative example of 'xAI Founding'.

---
→ [[elon-musk-neuralink]]
Confidence: 0.85
Reason:
Note 'AI Existential Risk Philosophy' functions as an illustrative example of 'Neuralink Mission'.

---

### Direct Communication Mandate
→ [[musk-working-hours-expectation]]
Confidence: 0.90
Reason:
Note 'Direct Communication Mandate' indicates a functional dependency on 'Leadership by Immersion Expectation'.

---
→ [[talent-density-principle]]
Confidence: 0.90
Reason:
Note 'Direct Communication Mandate' indicates a functional dependency on 'Talent Density Principle'.

---
→ [[delete-then-optimize-loop]]
Confidence: 0.86
Reason:
Note 'Direct Communication Mandate' indicates a functional dependency on 'Delete-Then-Optimize Loop'.

---
→ [[question-every-requirement]]
Confidence: 0.83
Reason:
Note 'Direct Communication Mandate' indicates a functional dependency on 'Question Every Requirement'.

---
→ [[elon-musk-hiring-philosophy]]
Confidence: 0.80
Reason:
Note 'Direct Communication Mandate' indicates a functional dependency on 'Evidence of Exceptional Ability Hiring'.

---

### Mars Colonization Mission
→ [[elon-musk-starlink]]
Confidence: 0.90
Reason:
Note 'Mars Colonization Mission' extends the principles discussed in 'Starlink Business Strategy'.

---
→ [[elon-musk-spacex-founding]]
Confidence: 0.87
Reason:
Note 'Mars Colonization Mission' extends the principles discussed in 'Elon Musk SpaceX Founding'.

---

### Failure Is Not An Option — It Is Built In
→ [[failure-is-innovation-required]]
Confidence: 0.90
Reason:
Note 'Failure Is Not An Option — It Is Built In' indicates a functional dependency on 'Failure Is Innovation Required'.

---

### Reasoning from First Principles
→ [[first-principles-thinking]]
Confidence: 0.95
Reason:
Note 'Reasoning from First Principles' extends the principles discussed in 'First Principles Thinking'.

---
→ [[first-principles-build-rule]]
Confidence: 0.86
Reason:
Note 'Reasoning from First Principles' extends the principles discussed in 'First Principles Build Rule'.

---
→ [[reasoning-by-analogy]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---

### Time Blocking Productivity Method
→ [[elon-musk-hiring-philosophy]]
Confidence: 0.90
Reason:
Note 'Time Blocking Productivity Method' extends the principles discussed in 'Evidence of Exceptional Ability Hiring'.

---

### Leadership by Immersion Expectation
→ [[elon-musk-hiring-philosophy]]
Confidence: 0.90
Reason:
Note 'Leadership by Immersion Expectation' extends the principles discussed in 'Evidence of Exceptional Ability Hiring'.

---
→ [[tesla-production-hell]]
Confidence: 0.88
Reason:
Note 'Leadership by Immersion Expectation' extends the principles discussed in 'Tesla Model 3 Production Hell'.

---
→ [[elon-musk-childhood]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---

### National Indemnity Acquisition
→ [[ajit-jain-successor]]
Confidence: 0.95
Reason:
Note 'National Indemnity Acquisition' extends the principles discussed in 'Ajit Jain Successor'.

---
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.95
Reason:
Note 'National Indemnity Acquisition' extends the principles discussed in 'Berkshire Hathaway Acquisition'.

---
→ [[berkshire-insurance-businesses]]
Confidence: 0.95
Reason:
Note 'National Indemnity Acquisition' extends the principles discussed in 'Berkshire's Insurance Float'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'National Indemnity Acquisition' extends the principles discussed in 'Rational Capital Allocation'.

---

### NetJets Acquisition
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'NetJets Acquisition' indicates a functional dependency on 'Rational Capital Allocation'.

---
→ [[clayton-homes-acquisition]]
Confidence: 0.95
Reason:
Note 'NetJets Acquisition' indicates a functional dependency on 'Clayton Homes Acquisition'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'NetJets Acquisition' indicates a functional dependency on 'Concept of the Economic Moat'.

---
→ [[flightsafety-acquisition]]
Confidence: 0.95
Reason:
Note 'NetJets Acquisition' indicates a functional dependency on 'FlightSafety Acquisition'.

---
→ [[lubrizol-acquisition]]
Confidence: 0.95
Reason:
Note 'NetJets Acquisition' indicates a functional dependency on 'Lubrizol Acquisition'.

---
→ [[shaw-industries-acquisition]]
Confidence: 0.95
Reason:
Note 'NetJets Acquisition' indicates a functional dependency on 'Shaw Industries Acquisition'.

---
→ [[pilot-flying-j-acquisition]]
Confidence: 0.83
Reason:
Note 'NetJets Acquisition' indicates a functional dependency on 'Pilot Flying J Acquisition'.

---
→ [[precision-castparts-acquisition]]
Confidence: 0.82
Reason:
Note 'NetJets Acquisition' indicates a functional dependency on 'Precision Castparts Acquisition'.

---

### The Downfall of Nicolas Fouquet
→ [[law-01-never-outshine-the-master]]
Confidence: 0.90
Reason:
Note 'The Downfall of Nicolas Fouquet' discusses concepts that contradict or contrast with 'Never Outshine the Master'.

---

### Net Operating Loss Tax Shield
→ [[berkshire-hathaway-acquisition]]
Confidence: 0.95
Reason:
Note 'Net Operating Loss Tax Shield' extends the principles discussed in 'Berkshire Hathaway Acquisition'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Net Operating Loss Tax Shield' extends the principles discussed in 'Rational Capital Allocation'.

---

### One Percent Better Every Day
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'One Percent Better Every Day' discusses comparisons or tradeoffs with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[goldilocks-rule]]
Confidence: 0.95
Reason:
Note 'One Percent Better Every Day' discusses comparisons or tradeoffs with 'Goldilocks Rule'.

---
→ [[james-clear-injury-recovery]]
Confidence: 0.95
Reason:
Note 'One Percent Better Every Day' discusses comparisons or tradeoffs with 'James Clear Injury Recovery'.

---
→ [[marginal-gains-british-cycling]]
Confidence: 0.95
Reason:
Note 'One Percent Better Every Day' discusses comparisons or tradeoffs with 'Marginal Gains British Cycling'.

---
→ [[sorites-paradox]]
Confidence: 0.95
Reason:
Note 'One Percent Better Every Day' discusses comparisons or tradeoffs with 'Sorites Paradox'.

---
→ [[systems-vs-goals]]
Confidence: 0.95
Reason:
Note 'One Percent Better Every Day' discusses comparisons or tradeoffs with 'Systems vs Goals'.

---
→ [[two-step-identity-change]]
Confidence: 0.95
Reason:
Note 'One Percent Better Every Day' discusses comparisons or tradeoffs with 'Two-Step Process to Identity Change'.

---
→ [[habits-plus-deliberate-practice]]
Confidence: 0.85
Reason:
Note 'One Percent Better Every Day' discusses comparisons or tradeoffs with 'Habits Plus Deliberate Practice'.

---

### Concept of Operating Leverage
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Concept of Operating Leverage' discusses comparisons or tradeoffs with 'Rational Capital Allocation'.

---
→ [[capital-intensity]]
Confidence: 0.95
Reason:
Note 'Concept of Operating Leverage' discusses comparisons or tradeoffs with 'Low Capital Intensity'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Concept of Operating Leverage' discusses comparisons or tradeoffs with 'Concept of the Economic Moat'.

---
→ [[reinvestment-moat]]
Confidence: 0.95
Reason:
Note 'Concept of Operating Leverage' discusses comparisons or tradeoffs with 'Reinvestment Moat vs Legacy Moat'.

---
→ [[sees-candies-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Concept of Operating Leverage' discusses comparisons or tradeoffs with 'See's Candies Case Study'.

---
→ [[precision-castparts-acquisition]]
Confidence: 0.84
Reason:
Note 'Concept of Operating Leverage' discusses comparisons or tradeoffs with 'Precision Castparts Acquisition'.

---
→ [[apple-investment-case-study]]
Confidence: 0.83
Reason:
Note 'Concept of Operating Leverage' discusses comparisons or tradeoffs with 'Apple Investment Case Study'.

---
→ [[flightsafety-acquisition]]
Confidence: 0.83
Reason:
Note 'Concept of Operating Leverage' discusses comparisons or tradeoffs with 'FlightSafety Acquisition'.

---

### Opportunity Cost Heuristic
→ [[apple-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Opportunity Cost Heuristic' discusses comparisons or tradeoffs with 'Apple Investment Case Study'.

---
→ [[arbitrage-workouts]]
Confidence: 0.95
Reason:
Note 'Opportunity Cost Heuristic' discusses comparisons or tradeoffs with 'Arbitrage and Workout Investments'.

---
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Opportunity Cost Heuristic' discusses comparisons or tradeoffs with 'Warren Buffett's Decision-Making Framework'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Opportunity Cost Heuristic' discusses comparisons or tradeoffs with 'Rational Capital Allocation'.

---
→ [[contrast-effect-bias]]
Confidence: 0.95
Reason:
Note 'Opportunity Cost Heuristic' discusses comparisons or tradeoffs with 'Contrast Effect Bias'.

---
→ [[risk-free-rate-hurdle]]
Confidence: 0.95
Reason:
Note 'Opportunity Cost Heuristic' discusses comparisons or tradeoffs with 'Risk-Free Rate Benchmark'.

---
→ [[twenty-punches-card-rule]]
Confidence: 0.95
Reason:
Note 'Opportunity Cost Heuristic' discusses comparisons or tradeoffs with 'Twenty Punches Card Rule'.

---

### Overcoming obstacles and adversity
→ [[motivation-and-inspiration]]
Confidence: 0.90
Reason:
Note 'Overcoming obstacles and adversity' extends the principles discussed in 'Motivation and inspiration'.

---
→ [[building-resilience-and-grit]]
Confidence: 0.90
Reason:
Note 'Overcoming obstacles and adversity' extends the principles discussed in 'Building resilience and grit'.

---
→ [[personal-growth-and-development]]
Confidence: 0.90
Reason:
Note 'Overcoming obstacles and adversity' extends the principles discussed in 'Personal growth and development'.

---
→ [[relationships]]
Confidence: 0.90
Reason:
Note 'Overcoming obstacles and adversity' extends the principles discussed in 'Relationships'.

---
→ [[emotional-healing-and-moving-forward]]
Confidence: 0.89
Reason:
Note 'Overcoming obstacles and adversity' extends the principles discussed in 'Emotional healing and moving forward'.

---
→ [[emotional-strength]]
Confidence: 0.89
Reason:
Note 'Overcoming obstacles and adversity' extends the principles discussed in 'Emotional strength'.

---
→ [[growth-mindset]]
Confidence: 0.89
Reason:
Note 'Overcoming obstacles and adversity' extends the principles discussed in 'Growth mindset'.

---
→ [[self-improvement-strategies]]
Confidence: 0.89
Reason:
Note 'Overcoming obstacles and adversity' extends the principles discussed in 'Self-improvement strategies'.

---

### Concept of Owner Earnings
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Concept of Owner Earnings' indicates a functional dependency on 'Rational Capital Allocation'.

---
→ [[intrinsic-value]]
Confidence: 0.95
Reason:
Note 'Concept of Owner Earnings' indicates a functional dependency on 'Concept of Intrinsic Value'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Concept of Owner Earnings' indicates a functional dependency on 'Value Investing Philosophy'.

---
→ [[reinvestment-moat]]
Confidence: 0.83
Reason:
Note 'Concept of Owner Earnings' indicates a functional dependency on 'Reinvestment Moat vs Legacy Moat'.

---
→ [[make-money-while-you-sleep]]
Confidence: 0.81
Reason:
Note 'Concept of Owner Earnings' indicates a functional dependency on 'Make Money While You Sleep'.

---
→ [[capital-intensity]]
Confidence: 0.80
Reason:
Note 'Concept of Owner Earnings' indicates a functional dependency on 'Low Capital Intensity'.

---

### Pampered Chef Acquisition
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Pampered Chef Acquisition' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[capital-intensity]]
Confidence: 0.95
Reason:
Note 'Pampered Chef Acquisition' extends the principles discussed in 'Low Capital Intensity'.

---
→ [[dairy-queen-acquisition]]
Confidence: 0.95
Reason:
Note 'Pampered Chef Acquisition' extends the principles discussed in 'Dairy Queen Acquisition'.

---
→ [[return-on-equity]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---

### Pavlovian Association in Branding
→ [[bias-from-association]]
Confidence: 0.95
Reason:
Note 'Pavlovian Association in Branding' extends the principles discussed in 'Bias from Association'.

---
→ [[coca-cola-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Pavlovian Association in Branding' extends the principles discussed in 'Coca-Cola Investment Case Study'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Pavlovian Association in Branding' extends the principles discussed in 'Concept of the Economic Moat'.

---

### Personal growth and development
→ [[growth-mindset]]
Confidence: 0.90
Reason:
Note 'Personal growth and development' extends the principles discussed in 'Growth mindset'.

---
→ [[reclaiming-your-personal-power]]
Confidence: 0.87
Reason:
Note 'Personal growth and development' extends the principles discussed in 'Reclaiming your personal power'.

---

### Phelps and El Guerrouj
→ [[quote-genes-predispose]]
Confidence: 0.95
Reason:
Note 'Phelps and El Guerrouj' functions as an illustrative example of 'Genes Predispose but Do Not Determine'.

---

### Phil Carret Influence
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Phil Carret Influence' functions as an illustrative example of 'Long-Term Compounding'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Phil Carret Influence' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[warren-buffett-biography]]
Confidence: 0.95
Reason:
Note 'Phil Carret Influence' functions as an illustrative example of 'Warren Buffett Biography'.

---
→ [[make-money-while-you-sleep]]
Confidence: 0.90
Reason:
Note 'Phil Carret Influence' functions as an illustrative example of 'Make Money While You Sleep'.

---
→ [[rule-one-never-lose-money]]
Confidence: 0.90
Reason:
Note 'Phil Carret Influence' functions as an illustrative example of 'Rule Number One'.

---
→ [[wesco-financial-acquisition]]
Confidence: 0.90
Reason:
Note 'Phil Carret Influence' functions as an illustrative example of 'Wesco Financial'.

---
→ [[buffett-frugal-lifestyle]]
Confidence: 0.89
Reason:
Note 'Phil Carret Influence' functions as an illustrative example of 'Warren Buffett's Frugality'.

---
→ [[warren-buffett-quotes]]
Confidence: 0.89
Reason:
Note 'Phil Carret Influence' functions as an illustrative example of 'Selected Warren Buffett Quotes'.

---

### Physics Constraint Test
→ [[fermi-estimation]]
Confidence: 0.90
Reason:
Note 'Physics Constraint Test' functions as an illustrative example of 'Fermi Estimation'.

---
→ [[reasoning-by-analogy]]
Confidence: 0.81
Reason:
Note 'Physics Constraint Test' functions as an illustrative example of 'Reasoning by Analogy'.

---
→ [[elon-musk-education]]
Confidence: 0.81
Reason:
Note 'Physics Constraint Test' functions as an illustrative example of 'Elon Musk Education'.

---

### Pilot Flying J Acquisition
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Pilot Flying J Acquisition' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Pilot Flying J Acquisition' extends the principles discussed in 'Concept of the Economic Moat'.

---
→ [[flightsafety-acquisition]]
Confidence: 0.95
Reason:
Note 'Pilot Flying J Acquisition' extends the principles discussed in 'FlightSafety Acquisition'.

---
→ [[precision-castparts-acquisition]]
Confidence: 0.86
Reason:
Note 'Pilot Flying J Acquisition' extends the principles discussed in 'Precision Castparts Acquisition'.

---
→ [[shaw-industries-acquisition]]
Confidence: 0.86
Reason:
Note 'Pilot Flying J Acquisition' extends the principles discussed in 'Shaw Industries Acquisition'.

---
→ [[lubrizol-acquisition]]
Confidence: 0.86
Reason:
Note 'Pilot Flying J Acquisition' extends the principles discussed in 'Lubrizol Acquisition'.

---
→ [[netjets-acquisition]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---
→ [[clayton-homes-acquisition]]
Confidence: 0.83
Reason:
High conceptual similarity score of 83%.

---

### PKM Development Phases
→ [[learn-99-percent-claude-and-codex-in-25-mins-cheatsheet]]
Confidence: 0.95
Reason:
Note 'PKM Development Phases' extends the principles discussed in 'Cheatsheet — Learn 99% Claude & Codex in 25 mins'.

---
→ [[loop-engineering]]
Confidence: 0.95
Reason:
Note 'PKM Development Phases' extends the principles discussed in 'Loop Engineering'.

---

### Plateau of Latent Potential
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Plateau of Latent Potential' functions as an illustrative example of '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[sorites-paradox]]
Confidence: 0.95
Reason:
Note 'Plateau of Latent Potential' functions as an illustrative example of 'Sorites Paradox'.

---
→ [[systems-vs-goals]]
Confidence: 0.90
Reason:
Note 'Plateau of Latent Potential' functions as an illustrative example of 'Systems vs Goals'.

---
→ [[identity-based-habits]]
Confidence: 0.82
Reason:
Note 'Plateau of Latent Potential' functions as an illustrative example of 'Identity-based Habits'.

---
→ [[you-do-not-rise-to-the-level-of-your-goals]]
Confidence: 0.82
Reason:
Note 'Plateau of Latent Potential' functions as an illustrative example of 'You Do Not Rise to the Level of Your Goals'.

---
→ [[one-percent-better-every-day]]
Confidence: 0.80
Reason:
Note 'Plateau of Latent Potential' functions as an illustrative example of 'One Percent Better Every Day'.

---

### Pointing-and-Calling
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Pointing-and-Calling' functions as an illustrative example of '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[environment-design]]
Confidence: 0.95
Reason:
Note 'Pointing-and-Calling' functions as an illustrative example of 'Environment Design'.

---
→ [[habits-plus-deliberate-practice]]
Confidence: 0.90
Reason:
Note 'Pointing-and-Calling' functions as an illustrative example of 'Habits Plus Deliberate Practice'.

---
→ [[habits-scorecard]]
Confidence: 0.87
Reason:
Note 'Pointing-and-Calling' functions as an illustrative example of 'Habits Scorecard'.

---
→ [[brain-as-a-prediction-machine]]
Confidence: 0.86
Reason:
Note 'Pointing-and-Calling' functions as an illustrative example of 'Brain as a Prediction Machine'.

---
→ [[commitment-devices]]
Confidence: 0.83
Reason:
Note 'Pointing-and-Calling' functions as an illustrative example of 'Commitment Devices'.

---
→ [[habit-contracts]]
Confidence: 0.80
Reason:
Note 'Pointing-and-Calling' functions as an illustrative example of 'Habit Contracts'.

---

### Polgar Sisters Chess
→ [[habits-plus-deliberate-practice]]
Confidence: 0.95
Reason:
Note 'Polgar Sisters Chess' functions as an illustrative example of 'Habits Plus Deliberate Practice'.

---
→ [[identity-based-habits]]
Confidence: 0.95
Reason:
Note 'Polgar Sisters Chess' functions as an illustrative example of 'Identity-based Habits'.

---
→ [[law-17-cultivate-unpredictability]]
Confidence: 0.95
Reason:
Note 'Polgar Sisters Chess' functions as an illustrative example of 'Keep Others in Suspended Terror — Cultivate an Air of Unpredictability'.

---

### Power Abhors a Vacuum
→ [[law-28-enter-action-with-boldness]]
Confidence: 0.90
Reason:
Note 'Power Abhors a Vacuum' extends the principles discussed in 'Enter Action with Boldness'.

---
→ [[law-30-make-accomplishments-seem-effortless]]
Confidence: 0.83
Reason:
High conceptual similarity score of 83%.

---
→ [[you-do-not-rise-to-the-level-of-your-goals]]
Confidence: 0.83
Reason:
High conceptual similarity score of 83%.

---
→ [[habit-contracts]]
Confidence: 0.83
Reason:
High conceptual similarity score of 82%.

---
→ [[law-07-get-others-to-do-the-work]]
Confidence: 0.83
Reason:
High conceptual similarity score of 82%.

---
→ [[the-law-of-reversal]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---
→ [[two-step-identity-change]]
Confidence: 0.81
Reason:
High conceptual similarity score of 80%.

---
→ [[law-41-avoid-stepping-into-great-mans-shoes]]
Confidence: 0.81
Reason:
High conceptual similarity score of 80%.

---

### Power as an Amoral Social Game
→ [[moral-nobility-as-tactical-vulnerability]]
Confidence: 0.95
Reason:
Note 'Power as an Amoral Social Game' extends the principles discussed in 'Moral Nobility as Tactical Vulnerability'.

---
→ [[court-power]]
Confidence: 0.85
Reason:
Note 'Power as an Amoral Social Game' extends the principles discussed in 'Court Power'.

---
→ [[machiavelli-and-the-prince]]
Confidence: 0.83
Reason:
High conceptual similarity score of 82%.

---

### Powerful mindset shifts
→ [[growth-mindset]]
Confidence: 0.90
Reason:
Note 'Powerful mindset shifts' extends the principles discussed in 'Growth mindset'.

---

### Precision Castparts Acquisition
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Precision Castparts Acquisition' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Precision Castparts Acquisition' extends the principles discussed in 'Concept of the Economic Moat'.

---
→ [[flightsafety-acquisition]]
Confidence: 0.95
Reason:
Note 'Precision Castparts Acquisition' extends the principles discussed in 'FlightSafety Acquisition'.

---
→ [[lubrizol-acquisition]]
Confidence: 0.85
Reason:
Note 'Precision Castparts Acquisition' extends the principles discussed in 'Lubrizol Acquisition'.

---
→ [[shaw-industries-acquisition]]
Confidence: 0.84
Reason:
High conceptual similarity score of 83%.

---

### Premack's Principle
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Premack's Principle' indicates a functional dependency on 'Atomic Habit'.

---
→ [[dopamine-driven-feedback-loop]]
Confidence: 0.95
Reason:
Note 'Premack's Principle' indicates a functional dependency on 'The Dopamine-Driven Feedback Loop'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Premack's Principle' indicates a functional dependency on 'Habit Loop'.

---
→ [[temptation-bundling]]
Confidence: 0.95
Reason:
Note 'Premack's Principle' indicates a functional dependency on 'Temptation Bundling'.

---
→ [[motivation-ritual]]
Confidence: 0.89
Reason:
Note 'Premack's Principle' indicates a functional dependency on 'Motivation Ritual'.

---

### Price is What You Pay Value is What You Get
→ [[intrinsic-value]]
Confidence: 0.95
Reason:
Note 'Price is What You Pay Value is What You Get' extends the principles discussed in 'Concept of Intrinsic Value'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Price is What You Pay Value is What You Get' extends the principles discussed in 'Margin of Safety Principle'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Price is What You Pay Value is What You Get' extends the principles discussed in 'Value Investing Philosophy'.

---

### Prompt Combination Codes
→ [[prompt-voice-format-codes]]
Confidence: 0.90
Reason:
Note 'Prompt Combination Codes' indicates a functional dependency on 'Prompt Voice and Format Codes'.

---
→ [[red-team-technique]]
Confidence: 0.87
Reason:
Note 'Prompt Combination Codes' indicates a functional dependency on 'Red Team Technique'.

---
→ [[prompt-thinking-codes]]
Confidence: 0.85
Reason:
Note 'Prompt Combination Codes' indicates a functional dependency on 'Prompt Thinking Mode Codes'.

---
→ [[steelman-technique]]
Confidence: 0.82
Reason:
Note 'Prompt Combination Codes' indicates a functional dependency on 'Steelman Technique'.

---
→ [[prompt-strategy-codes]]
Confidence: 0.82
Reason:
Note 'Prompt Combination Codes' indicates a functional dependency on 'Prompt Strategy and Founder Codes'.

---
→ [[prompt-simplification-codes]]
Confidence: 0.81
Reason:
Note 'Prompt Combination Codes' indicates a functional dependency on 'Prompt Simplification Codes'.

---
→ [[prompt-meta-announce]]
Confidence: 0.81
Reason:
Note 'Prompt Combination Codes' indicates a functional dependency on 'Prompt Meta Announce Code'.

---
→ [[prompt-output-control-codes]]
Confidence: 0.81
Reason:
Note 'Prompt Combination Codes' indicates a functional dependency on 'Prompt Output Control Codes'.

---

### Prompt Honesty and Directness Codes
→ [[prompt-strategy-codes]]
Confidence: 0.90
Reason:
Note 'Prompt Honesty and Directness Codes' indicates a functional dependency on 'Prompt Strategy and Founder Codes'.

---
→ [[prompt-simplification-codes]]
Confidence: 0.87
Reason:
Note 'Prompt Honesty and Directness Codes' indicates a functional dependency on 'Prompt Simplification Codes'.

---
→ [[prompt-output-control-codes]]
Confidence: 0.87
Reason:
Note 'Prompt Honesty and Directness Codes' indicates a functional dependency on 'Prompt Output Control Codes'.

---
→ [[prompt-voice-format-codes]]
Confidence: 0.86
Reason:
Note 'Prompt Honesty and Directness Codes' indicates a functional dependency on 'Prompt Voice and Format Codes'.

---
→ [[prompt-meta-announce]]
Confidence: 0.84
Reason:
Note 'Prompt Honesty and Directness Codes' indicates a functional dependency on 'Prompt Meta Announce Code'.

---
→ [[prompt-combination-codes]]
Confidence: 0.83
Reason:
Note 'Prompt Honesty and Directness Codes' indicates a functional dependency on 'Prompt Combination Codes'.

---
→ [[prompt-learning-codes]]
Confidence: 0.81
Reason:
Note 'Prompt Honesty and Directness Codes' indicates a functional dependency on 'Prompt Learning Codes'.

---
→ [[first-principles-prompting]]
Confidence: 0.80
Reason:
Note 'Prompt Honesty and Directness Codes' indicates a functional dependency on 'First Principles Prompting'.

---

### Prompt Learning Codes
→ [[relationships]]
Confidence: 0.95
Reason:
Note 'Prompt Learning Codes' discusses comparisons or tradeoffs with 'Relationships'.

---
→ [[prompt-simplification-codes]]
Confidence: 0.90
Reason:
Note 'Prompt Learning Codes' discusses comparisons or tradeoffs with 'Prompt Simplification Codes'.

---
→ [[fewshot-vs-zeroshot-prompting]]
Confidence: 0.83
Reason:
Note 'Prompt Learning Codes' discusses comparisons or tradeoffs with 'Few-Shot vs Zero-Shot Prompting'.

---
→ [[socratic-prompting]]
Confidence: 0.83
Reason:
Note 'Prompt Learning Codes' discusses comparisons or tradeoffs with 'Socratic Prompting'.

---

### Prompt Meta Announce Code
→ [[prompt-thinking-codes]]
Confidence: 0.90
Reason:
Note 'Prompt Meta Announce Code' discusses concepts that contradict or contrast with 'Prompt Thinking Mode Codes'.

---
→ [[red-team-technique]]
Confidence: 0.90
Reason:
Note 'Prompt Meta Announce Code' discusses concepts that contradict or contrast with 'Red Team Technique'.

---
→ [[prompt-combination-codes]]
Confidence: 0.89
Reason:
Note 'Prompt Meta Announce Code' discusses concepts that contradict or contrast with 'Prompt Combination Codes'.

---
→ [[prompt-reasoning-codes]]
Confidence: 0.88
Reason:
Note 'Prompt Meta Announce Code' discusses concepts that contradict or contrast with 'Prompt Reasoning and Simulation Codes'.

---
→ [[socratic-prompting]]
Confidence: 0.88
Reason:
Note 'Prompt Meta Announce Code' discusses concepts that contradict or contrast with 'Socratic Prompting'.

---
→ [[prompt-strategy-codes]]
Confidence: 0.87
Reason:
Note 'Prompt Meta Announce Code' discusses concepts that contradict or contrast with 'Prompt Strategy and Founder Codes'.

---
→ [[fewshot-vs-zeroshot-prompting]]
Confidence: 0.87
Reason:
Note 'Prompt Meta Announce Code' discusses concepts that contradict or contrast with 'Few-Shot vs Zero-Shot Prompting'.

---
→ [[steelman-technique]]
Confidence: 0.84
Reason:
Note 'Prompt Meta Announce Code' discusses concepts that contradict or contrast with 'Steelman Technique'.

---

### Prompt Output Control Codes
→ [[prompt-voice-format-codes]]
Confidence: 0.90
Reason:
Note 'Prompt Output Control Codes' functions as an illustrative example of 'Prompt Voice and Format Codes'.

---
→ [[prompt-simplification-codes]]
Confidence: 0.82
Reason:
Note 'Prompt Output Control Codes' functions as an illustrative example of 'Prompt Simplification Codes'.

---
→ [[prompt-combination-codes]]
Confidence: 0.81
Reason:
Note 'Prompt Output Control Codes' functions as an illustrative example of 'Prompt Combination Codes'.

---

### Prompt Reasoning and Simulation Codes
→ [[prompt-combination-codes]]
Confidence: 0.90
Reason:
Note 'Prompt Reasoning and Simulation Codes' discusses comparisons or tradeoffs with 'Prompt Combination Codes'.

---
→ [[prompt-thinking-codes]]
Confidence: 0.89
Reason:
Note 'Prompt Reasoning and Simulation Codes' discusses comparisons or tradeoffs with 'Prompt Thinking Mode Codes'.

---
→ [[prompt-strategy-codes]]
Confidence: 0.86
Reason:
Note 'Prompt Reasoning and Simulation Codes' discusses comparisons or tradeoffs with 'Prompt Strategy and Founder Codes'.

---
→ [[red-team-technique]]
Confidence: 0.83
Reason:
Note 'Prompt Reasoning and Simulation Codes' discusses comparisons or tradeoffs with 'Red Team Technique'.

---
→ [[race-prompt-framework]]
Confidence: 0.83
Reason:
Note 'Prompt Reasoning and Simulation Codes' discusses comparisons or tradeoffs with 'RACE Prompt Framework'.

---
→ [[steelman-technique]]
Confidence: 0.81
Reason:
Note 'Prompt Reasoning and Simulation Codes' discusses comparisons or tradeoffs with 'Steelman Technique'.

---

### Prompt Simplification Codes
→ [[prompt-learning-codes]]
Confidence: 0.90
Reason:
Note 'Prompt Simplification Codes' indicates a functional dependency on 'Prompt Learning Codes'.

---
→ [[prompt-output-control-codes]]
Confidence: 0.84
Reason:
Note 'Prompt Simplification Codes' indicates a functional dependency on 'Prompt Output Control Codes'.

---
→ [[prompt-combination-codes]]
Confidence: 0.80
Reason:
Note 'Prompt Simplification Codes' indicates a functional dependency on 'Prompt Combination Codes'.

---

### Prompt Strategy and Founder Codes
→ [[prompt-thinking-codes]]
Confidence: 0.90
Reason:
Note 'Prompt Strategy and Founder Codes' functions as an illustrative example of 'Prompt Thinking Mode Codes'.

---
→ [[red-team-technique]]
Confidence: 0.86
Reason:
Note 'Prompt Strategy and Founder Codes' functions as an illustrative example of 'Red Team Technique'.

---

### Prompt Thinking Mode Codes
→ [[red-team-technique]]
Confidence: 0.90
Reason:
Note 'Prompt Thinking Mode Codes' discusses comparisons or tradeoffs with 'Red Team Technique'.

---
→ [[prompt-strategy-codes]]
Confidence: 0.81
Reason:
Note 'Prompt Thinking Mode Codes' discusses comparisons or tradeoffs with 'Prompt Strategy and Founder Codes'.

---
→ [[steelman-technique]]
Confidence: 0.81
Reason:
Note 'Prompt Thinking Mode Codes' discusses comparisons or tradeoffs with 'Steelman Technique'.

---

### Prompt Voice and Format Codes
→ [[prompt-combination-codes]]
Confidence: 0.90
Reason:
Note 'Prompt Voice and Format Codes' functions as an illustrative example of 'Prompt Combination Codes'.

---
→ [[prompt-output-control-codes]]
Confidence: 0.88
Reason:
Note 'Prompt Voice and Format Codes' functions as an illustrative example of 'Prompt Output Control Codes'.

---

### Prototype-Then-Iterate
→ [[failure-is-innovation-required]]
Confidence: 0.90
Reason:
Note 'Prototype-Then-Iterate' extends the principles discussed in 'Failure Is Innovation Required'.

---
→ [[spacex-falcon-1-failures]]
Confidence: 0.86
Reason:
Note 'Prototype-Then-Iterate' extends the principles discussed in 'SpaceX Falcon 1 Launch Failures'.

---
→ [[speed-of-iteration-principle]]
Confidence: 0.84
Reason:
High conceptual similarity score of 84%.

---

### Queen Elizabeth I's Power Image
→ [[law-37-create-compelling-spectacles]]
Confidence: 0.95
Reason:
Note 'Queen Elizabeth I's Power Image' extends the principles discussed in 'Create Compelling Spectacles'.

---

### Question Every Requirement
→ [[delete-then-optimize-loop]]
Confidence: 0.90
Reason:
Note 'Question Every Requirement' extends the principles discussed in 'Delete-Then-Optimize Loop'.

---
→ [[algorithm-design-sequence]]
Confidence: 0.84
Reason:
High conceptual similarity score of 84%.

---

### Quiet Thinking Habit
→ [[availability-bias-investing]]
Confidence: 0.95
Reason:
Note 'Quiet Thinking Habit' extends the principles discussed in 'Availability Bias in Investing'.

---
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Quiet Thinking Habit' extends the principles discussed in 'Warren Buffett's Decision-Making Framework'.

---
→ [[buffett-reading-habit]]
Confidence: 0.95
Reason:
Note 'Quiet Thinking Habit' extends the principles discussed in 'Warren Buffett's Reading Habit'.

---

### Genes Predispose but Do Not Determine
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Genes Predispose but Do Not Determine' functions as an illustrative example of 'Atomic Habit'.

---
→ [[genetics-and-environment]]
Confidence: 0.95
Reason:
Note 'Genes Predispose but Do Not Determine' functions as an illustrative example of 'Genetics and Environment'.

---
→ [[phelps-and-el-guerrouj]]
Confidence: 0.95
Reason:
Note 'Genes Predispose but Do Not Determine' functions as an illustrative example of 'Phelps and El Guerrouj'.

---

### James Clear on Clarity
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'James Clear on Clarity' indicates a functional dependency on 'Atomic Habit'.

---
→ [[implementation-intentions]]
Confidence: 0.95
Reason:
Note 'James Clear on Clarity' indicates a functional dependency on 'Implementation Intentions'.

---
→ [[systems-vs-goals]]
Confidence: 0.81
Reason:
Note 'James Clear on Clarity' indicates a functional dependency on 'Systems vs Goals'.

---
→ [[habit-loop]]
Confidence: 0.80
Reason:
Note 'James Clear on Clarity' indicates a functional dependency on 'Habit Loop'.

---

### What is Rewarded is Repeated
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'What is Rewarded is Repeated' extends the principles discussed in 'Atomic Habit'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'What is Rewarded is Repeated' extends the principles discussed in 'Habit Loop'.

---
→ [[reinforcement]]
Confidence: 0.90
Reason:
Note 'What is Rewarded is Repeated' extends the principles discussed in 'Reinforcement Principle'.

---
→ [[cardinal-rule-of-behavior-change]]
Confidence: 0.90
Reason:
Note 'What is Rewarded is Repeated' extends the principles discussed in 'The Cardinal Rule of Behavior Change'.

---

### RACE Prompt Framework
→ [[fewshot-vs-zeroshot-prompting]]
Confidence: 0.90
Reason:
Note 'RACE Prompt Framework' discusses comparisons or tradeoffs with 'Few-Shot vs Zero-Shot Prompting'.

---
→ [[prompt-reasoning-codes]]
Confidence: 0.87
Reason:
Note 'RACE Prompt Framework' discusses comparisons or tradeoffs with 'Prompt Reasoning and Simulation Codes'.

---

### Reasoning by Analogy
→ [[first-principles-thinking]]
Confidence: 0.95
Reason:
Note 'Reasoning by Analogy' discusses comparisons or tradeoffs with 'First Principles Thinking'.

---
→ [[musk-on-first-principles-quote]]
Confidence: 0.95
Reason:
Note 'Reasoning by Analogy' discusses comparisons or tradeoffs with 'Reasoning from First Principles'.

---
→ [[first-principles-build-rule]]
Confidence: 0.88
Reason:
Note 'Reasoning by Analogy' discusses comparisons or tradeoffs with 'First Principles Build Rule'.

---

### Reciprocity Tendency
→ [[buffett-delegation-model]]
Confidence: 0.95
Reason:
Note 'Reciprocity Tendency' functions as an illustrative example of 'Warren Buffett's Delegation Model'.

---
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Reciprocity Tendency' functions as an illustrative example of 'Lollapalooza Effect'.

---
→ [[authority-bias-investing]]
Confidence: 0.90
Reason:
Note 'Reciprocity Tendency' functions as an illustrative example of 'Authority Bias in Investing'.

---
→ [[liking-loving-tendency]]
Confidence: 0.88
Reason:
Note 'Reciprocity Tendency' functions as an illustrative example of 'Liking and Loving Tendency'.

---
→ [[scarcity-bias-investing]]
Confidence: 0.87
Reason:
Note 'Reciprocity Tendency' functions as an illustrative example of 'Scarcity Bias in Investing'.

---
→ [[availability-bias-investing]]
Confidence: 0.87
Reason:
Note 'Reciprocity Tendency' functions as an illustrative example of 'Availability Bias in Investing'.

---
→ [[contrast-effect-bias]]
Confidence: 0.86
Reason:
Note 'Reciprocity Tendency' functions as an illustrative example of 'Contrast Effect Bias'.

---
→ [[bias-from-association]]
Confidence: 0.85
Reason:
Note 'Reciprocity Tendency' functions as an illustrative example of 'Bias from Association'.

---

### Reclaiming your personal power
→ [[personal-growth-and-development]]
Confidence: 0.90
Reason:
Note 'Reclaiming your personal power' extends the principles discussed in 'Personal growth and development'.

---
→ [[finding-your-inner-strength]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### Red Team Technique
→ [[prompt-thinking-codes]]
Confidence: 0.90
Reason:
Note 'Red Team Technique' discusses concepts that contradict or contrast with 'Prompt Thinking Mode Codes'.

---

### Reflection and Review
→ [[identity-based-habits]]
Confidence: 0.90
Reason:
Note 'Reflection and Review' functions as an illustrative example of 'Identity-based Habits'.

---
→ [[two-step-identity-change]]
Confidence: 0.82
Reason:
Note 'Reflection and Review' functions as an illustrative example of 'Two-Step Process to Identity Change'.

---
→ [[systems-vs-goals]]
Confidence: 0.82
Reason:
Note 'Reflection and Review' functions as an illustrative example of 'Systems vs Goals'.

---

### Reframing Hard Habits
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Reframing Hard Habits' functions as an illustrative example of 'Atomic Habit'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Reframing Hard Habits' functions as an illustrative example of 'Habit Loop'.

---
→ [[identity-based-habits]]
Confidence: 0.95
Reason:
Note 'Reframing Hard Habits' functions as an illustrative example of 'Identity-based Habits'.

---
→ [[supernormal-stimulus]]
Confidence: 0.95
Reason:
Note 'Reframing Hard Habits' functions as an illustrative example of 'Supernormal Stimulus'.

---
→ [[brian-clark-fingernail-biting]]
Confidence: 0.90
Reason:
Note 'Reframing Hard Habits' functions as an illustrative example of 'Brian Clark Fingernail Biting Example'.

---
→ [[motivation-ritual]]
Confidence: 0.85
Reason:
Note 'Reframing Hard Habits' functions as an illustrative example of 'Motivation Ritual'.

---
→ [[habit-stacking]]
Confidence: 0.81
Reason:
Note 'Reframing Hard Habits' functions as an illustrative example of 'Habit Stacking Method'.

---

### Regret Minimization Framework
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Regret Minimization Framework' extends the principles discussed in 'Warren Buffett's Decision-Making Framework'.

---
→ [[giving-pledge]]
Confidence: 0.95
Reason:
Note 'Regret Minimization Framework' extends the principles discussed in 'The Giving Pledge'.

---
→ [[rolls-royce-subway-analogy]]
Confidence: 0.90
Reason:
Note 'Regret Minimization Framework' extends the principles discussed in 'Rolls-Royce and Subway Analogy'.

---
→ [[five-twenty-five-rule]]
Confidence: 0.89
Reason:
Note 'Regret Minimization Framework' extends the principles discussed in 'The Five-Twenty-Five Rule'.

---
→ [[availability-bias-investing]]
Confidence: 0.87
Reason:
Note 'Regret Minimization Framework' extends the principles discussed in 'Availability Bias in Investing'.

---
→ [[buffett-frugal-lifestyle]]
Confidence: 0.87
Reason:
Note 'Regret Minimization Framework' extends the principles discussed in 'Warren Buffett's Frugality'.

---
→ [[commitment-consistency-bias]]
Confidence: 0.86
Reason:
Note 'Regret Minimization Framework' extends the principles discussed in 'Commitment and Consistency Bias'.

---
→ [[make-money-while-you-sleep]]
Confidence: 0.86
Reason:
Note 'Regret Minimization Framework' extends the principles discussed in 'Make Money While You Sleep'.

---

### Reinforcement Principle
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Reinforcement Principle' extends the principles discussed in 'Atomic Habit'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Reinforcement Principle' extends the principles discussed in 'Habit Loop'.

---
→ [[quote-what-is-rewarded-is-repeated]]
Confidence: 0.95
Reason:
Note 'Reinforcement Principle' extends the principles discussed in 'What is Rewarded is Repeated'.

---
→ [[cardinal-rule-of-behavior-change]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---

### Reinvestment Moat vs Legacy Moat
→ [[berkshire-hathaway-energy]]
Confidence: 0.95
Reason:
Note 'Reinvestment Moat vs Legacy Moat' discusses comparisons or tradeoffs with 'Berkshire Hathaway Energy'.

---
→ [[bnsf-railway-acquisition]]
Confidence: 0.95
Reason:
Note 'Reinvestment Moat vs Legacy Moat' discusses comparisons or tradeoffs with 'BNSF Railway Acquisition'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Reinvestment Moat vs Legacy Moat' discusses comparisons or tradeoffs with 'Rational Capital Allocation'.

---
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Reinvestment Moat vs Legacy Moat' discusses comparisons or tradeoffs with 'Long-Term Compounding'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Reinvestment Moat vs Legacy Moat' discusses comparisons or tradeoffs with 'Concept of the Economic Moat'.

---
→ [[sees-candies-investment-case-study]]
Confidence: 0.95
Reason:
Note 'Reinvestment Moat vs Legacy Moat' discusses comparisons or tradeoffs with 'See's Candies Case Study'.

---
→ [[operating-leverage]]
Confidence: 0.86
Reason:
Note 'Reinvestment Moat vs Legacy Moat' discusses comparisons or tradeoffs with 'Concept of Operating Leverage'.

---

### Relationships
→ [[emotional-strength]]
Confidence: 0.90
Reason:
Note 'Relationships' extends the principles discussed in 'Emotional strength'.

---
→ [[growth-mindset]]
Confidence: 0.90
Reason:
Note 'Relationships' extends the principles discussed in 'Growth mindset'.

---
→ [[self-improvement-strategies]]
Confidence: 0.90
Reason:
Note 'Relationships' extends the principles discussed in 'Self-improvement strategies'.

---
→ [[be-mentally-strong]]
Confidence: 0.90
Reason:
Note 'Relationships' extends the principles discussed in 'Be mentally strong'.

---
→ [[developing-mental-toughness]]
Confidence: 0.90
Reason:
Note 'Relationships' extends the principles discussed in 'Developing mental toughness'.

---
→ [[motivation-and-inspiration]]
Confidence: 0.90
Reason:
Note 'Relationships' extends the principles discussed in 'Motivation and inspiration'.

---
→ [[powerful-mindset-shifts]]
Confidence: 0.90
Reason:
Note 'Relationships' extends the principles discussed in 'Powerful mindset shifts'.

---
→ [[building-resilience-and-grit]]
Confidence: 0.89
Reason:
Note 'Relationships' extends the principles discussed in 'Building resilience and grit'.

---

### Reputation Protection Heuristic
→ [[honesty-expensive-gift]]
Confidence: 0.95
Reason:
Note 'Reputation Protection Heuristic' extends the principles discussed in 'Honesty is an Expensive Gift'.

---
→ [[howard-buffett-influence]]
Confidence: 0.95
Reason:
Note 'Reputation Protection Heuristic' extends the principles discussed in 'Howard Buffett's Influence'.

---
→ [[salomon-brothers-intervention]]
Confidence: 0.90
Reason:
Note 'Reputation Protection Heuristic' extends the principles discussed in 'Salomon Brothers Crisis Intervention'.

---
→ [[reputation-twenty-years-to-build]]
Confidence: 0.85
Reason:
Note 'Reputation Protection Heuristic' extends the principles discussed in 'Reputation Durability Principle'.

---

### Reputation Durability Principle
→ [[reputation-protection-heuristic]]
Confidence: 0.95
Reason:
Note 'Reputation Durability Principle' extends the principles discussed in 'Reputation Protection Heuristic'.

---
→ [[salomon-brothers-intervention]]
Confidence: 0.87
Reason:
Note 'Reputation Durability Principle' extends the principles discussed in 'Salomon Brothers Crisis Intervention'.

---

### Return on Equity Metric
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Return on Equity Metric' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[capital-intensity]]
Confidence: 0.95
Reason:
Note 'Return on Equity Metric' extends the principles discussed in 'Low Capital Intensity'.

---
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Return on Equity Metric' extends the principles discussed in 'Long-Term Compounding'.

---
→ [[dairy-queen-acquisition]]
Confidence: 0.95
Reason:
Note 'Return on Equity Metric' extends the principles discussed in 'Dairy Queen Acquisition'.

---
→ [[pampered-chef-acquisition]]
Confidence: 0.95
Reason:
Note 'Return on Equity Metric' extends the principles discussed in 'Pampered Chef Acquisition'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Return on Equity Metric' extends the principles discussed in 'Value Investing Philosophy'.

---

### Risk-Free Rate Benchmark
→ [[circle-of-competence]]
Confidence: 0.95
Reason:
Note 'Risk-Free Rate Benchmark' indicates a functional dependency on 'Circle of Competence Heuristic'.

---
→ [[intrinsic-value]]
Confidence: 0.95
Reason:
Note 'Risk-Free Rate Benchmark' indicates a functional dependency on 'Concept of Intrinsic Value'.

---
→ [[opportunity-cost-heuristic]]
Confidence: 0.95
Reason:
Note 'Risk-Free Rate Benchmark' indicates a functional dependency on 'Opportunity Cost Heuristic'.

---

### Roger Fisher Nuclear Button
→ [[habit-contracts]]
Confidence: 0.90
Reason:
Note 'Roger Fisher Nuclear Button' functions as an illustrative example of 'Habit Contracts'.

---
→ [[social-norms-and-habits]]
Confidence: 0.83
Reason:
Note 'Roger Fisher Nuclear Button' functions as an illustrative example of 'Social Norms and Habits'.

---
→ [[goldilocks-rule]]
Confidence: 0.83
Reason:
Note 'Roger Fisher Nuclear Button' functions as an illustrative example of 'Goldilocks Rule'.

---
→ [[plateau-of-latent-potential]]
Confidence: 0.82
Reason:
Note 'Roger Fisher Nuclear Button' functions as an illustrative example of 'Plateau of Latent Potential'.

---
→ [[brain-as-a-prediction-machine]]
Confidence: 0.82
Reason:
Note 'Roger Fisher Nuclear Button' functions as an illustrative example of 'Brain as a Prediction Machine'.

---
→ [[sorites-paradox]]
Confidence: 0.81
Reason:
Note 'Roger Fisher Nuclear Button' functions as an illustrative example of 'Sorites Paradox'.

---
→ [[the-law-of-reversal]]
Confidence: 0.81
Reason:
Note 'Roger Fisher Nuclear Button' functions as an illustrative example of 'The Law of Reversal'.

---
→ [[commitment-devices]]
Confidence: 0.80
Reason:
Note 'Roger Fisher Nuclear Button' functions as an illustrative example of 'Commitment Devices'.

---

### Rolls-Royce and Subway Analogy
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Rolls-Royce and Subway Analogy' functions as an illustrative example of 'Warren Buffett's Decision-Making Framework'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Rolls-Royce and Subway Analogy' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[scarcity-bias-investing]]
Confidence: 0.90
Reason:
Note 'Rolls-Royce and Subway Analogy' functions as an illustrative example of 'Scarcity Bias in Investing'.

---
→ [[regret-minimization-framework]]
Confidence: 0.90
Reason:
Note 'Rolls-Royce and Subway Analogy' functions as an illustrative example of 'Regret Minimization Framework'.

---
→ [[authority-bias-investing]]
Confidence: 0.89
Reason:
Note 'Rolls-Royce and Subway Analogy' functions as an illustrative example of 'Authority Bias in Investing'.

---
→ [[five-twenty-five-rule]]
Confidence: 0.87
Reason:
Note 'Rolls-Royce and Subway Analogy' functions as an illustrative example of 'The Five-Twenty-Five Rule'.

---
→ [[availability-bias-investing]]
Confidence: 0.86
Reason:
Note 'Rolls-Royce and Subway Analogy' functions as an illustrative example of 'Availability Bias in Investing'.

---
→ [[howard-buffett-influence]]
Confidence: 0.86
Reason:
Note 'Rolls-Royce and Subway Analogy' functions as an illustrative example of 'Howard Buffett's Influence'.

---

### Rule Number One
→ [[buffett-education-and-graham-influence]]
Confidence: 0.95
Reason:
Note 'Rule Number One' indicates a functional dependency on 'Warren Buffett's Education and Benjamin Graham's Influence'.

---
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Rule Number One' indicates a functional dependency on 'Long-Term Compounding'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Rule Number One' indicates a functional dependency on 'Margin of Safety Principle'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Rule Number One' indicates a functional dependency on 'Value Investing Philosophy'.

---
→ [[make-money-while-you-sleep]]
Confidence: 0.90
Reason:
Note 'Rule Number One' indicates a functional dependency on 'Make Money While You Sleep'.

---
→ [[washington-post-investment]]
Confidence: 0.83
Reason:
Note 'Rule Number One' indicates a functional dependency on 'Washington Post Investment'.

---
→ [[warren-buffett-quotes]]
Confidence: 0.83
Reason:
Note 'Rule Number One' indicates a functional dependency on 'Selected Warren Buffett Quotes'.

---
→ [[circle-of-competence]]
Confidence: 0.82
Reason:
Note 'Rule Number One' indicates a functional dependency on 'Circle of Competence Heuristic'.

---

### Safeguard Soap Handwashing Study
→ [[anne-thorndike-cafeteria-study]]
Confidence: 0.95
Reason:
Note 'Safeguard Soap Handwashing Study' functions as an illustrative example of 'Anne Thorndike Cafeteria Study'.

---
→ [[habit-tracking]]
Confidence: 0.95
Reason:
Note 'Safeguard Soap Handwashing Study' functions as an illustrative example of 'Habit Tracking'.

---
→ [[vietnam-veterans-heroin-study]]
Confidence: 0.95
Reason:
Note 'Safeguard Soap Handwashing Study' functions as an illustrative example of 'Vietnam Veterans Heroin Study'.

---
→ [[hebbs-law]]
Confidence: 0.81
Reason:
Note 'Safeguard Soap Handwashing Study' functions as an illustrative example of 'Hebb's Law'.

---
→ [[polgar-sisters-chess]]
Confidence: 0.81
Reason:
Note 'Safeguard Soap Handwashing Study' functions as an illustrative example of 'Polgar Sisters Chess'.

---
→ [[cash-register-automation]]
Confidence: 0.81
Reason:
Note 'Safeguard Soap Handwashing Study' functions as an illustrative example of 'Cash Register Automation'.

---
→ [[apple-investment-case-study]]
Confidence: 0.80
Reason:
Note 'Safeguard Soap Handwashing Study' functions as an illustrative example of 'Apple Investment Case Study'.

---

### Salomon Brothers Crisis Intervention
→ [[giving-pledge]]
Confidence: 0.95
Reason:
Note 'Salomon Brothers Crisis Intervention' extends the principles discussed in 'The Giving Pledge'.

---
→ [[reputation-protection-heuristic]]
Confidence: 0.95
Reason:
Note 'Salomon Brothers Crisis Intervention' extends the principles discussed in 'Reputation Protection Heuristic'.

---
→ [[reputation-twenty-years-to-build]]
Confidence: 0.95
Reason:
Note 'Salomon Brothers Crisis Intervention' extends the principles discussed in 'Reputation Durability Principle'.

---

### Sanborn Map Company Investment
→ [[cigar-butt-investing]]
Confidence: 0.95
Reason:
Note 'Sanborn Map Company Investment' functions as an illustrative example of 'Cigar Butt Investing'.

---
→ [[dempster-mill-investment]]
Confidence: 0.95
Reason:
Note 'Sanborn Map Company Investment' functions as an illustrative example of 'Dempster Mill Investment'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Sanborn Map Company Investment' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[special-situations]]
Confidence: 0.88
Reason:
Note 'Sanborn Map Company Investment' functions as an illustrative example of 'Special Situations Investing'.

---
→ [[amex-salad-oil-investment]]
Confidence: 0.82
Reason:
Note 'Sanborn Map Company Investment' functions as an illustrative example of 'AmEx Salad Oil Scandal Investment'.

---
→ [[washington-post-investment]]
Confidence: 0.81
Reason:
Note 'Sanborn Map Company Investment' functions as an illustrative example of 'Washington Post Investment'.

---

### Scarcity Bias in Investing
→ [[authority-bias-investing]]
Confidence: 0.95
Reason:
Note 'Scarcity Bias in Investing' extends the principles discussed in 'Authority Bias in Investing'.

---
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Scarcity Bias in Investing' extends the principles discussed in 'Lollapalooza Effect'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Scarcity Bias in Investing' extends the principles discussed in 'Margin of Safety Principle'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Scarcity Bias in Investing' extends the principles discussed in 'Value Investing Philosophy'.

---
→ [[availability-bias-investing]]
Confidence: 0.82
Reason:
High conceptual similarity score of 81%.

---

### See's Candies Case Study
→ [[apple-investment-case-study]]
Confidence: 0.95
Reason:
Note 'See's Candies Case Study' discusses comparisons or tradeoffs with 'Apple Investment Case Study'.

---
→ [[benjamin-moore-acquisition]]
Confidence: 0.95
Reason:
Note 'See's Candies Case Study' discusses comparisons or tradeoffs with 'Benjamin Moore Acquisition'.

---
→ [[blue-chip-stamps-investment]]
Confidence: 0.95
Reason:
Note 'See's Candies Case Study' discusses comparisons or tradeoffs with 'Blue Chip Stamps Investment'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'See's Candies Case Study' discusses comparisons or tradeoffs with 'Rational Capital Allocation'.

---
→ [[capital-intensity]]
Confidence: 0.95
Reason:
Note 'See's Candies Case Study' discusses comparisons or tradeoffs with 'Low Capital Intensity'.

---
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'See's Candies Case Study' discusses comparisons or tradeoffs with 'Charlie Munger's Influence on Warren Buffett'.

---
→ [[cigar-butt-investing]]
Confidence: 0.95
Reason:
Note 'See's Candies Case Study' discusses comparisons or tradeoffs with 'Cigar Butt Investing'.

---
→ [[dairy-queen-acquisition]]
Confidence: 0.95
Reason:
Note 'See's Candies Case Study' discusses comparisons or tradeoffs with 'Dairy Queen Acquisition'.

---

### Self-Fixing Code Loops
→ [[external-code-review-guardrails]]
Confidence: 0.95
Reason:
Note 'Self-Fixing Code Loops' extends the principles discussed in 'External Code Review Guardrails'.

---
→ [[learn-99-percent-claude-and-codex-in-25-mins-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Self-Fixing Code Loops' extends the principles discussed in 'Cheatsheet — Learn 99% Claude & Codex in 25 mins'.

---
→ [[loop-engineering]]
Confidence: 0.95
Reason:
Note 'Self-Fixing Code Loops' extends the principles discussed in 'Loop Engineering'.

---

### Self-improvement strategies
→ [[relationships]]
Confidence: 0.90
Reason:
Note 'Self-improvement strategies' extends the principles discussed in 'Relationships'.

---
→ [[emotional-strength]]
Confidence: 0.90
Reason:
Note 'Self-improvement strategies' extends the principles discussed in 'Emotional strength'.

---
→ [[growth-mindset]]
Confidence: 0.90
Reason:
Note 'Self-improvement strategies' extends the principles discussed in 'Growth mindset'.

---
→ [[be-mentally-strong]]
Confidence: 0.89
Reason:
Note 'Self-improvement strategies' extends the principles discussed in 'Be mentally strong'.

---
→ [[developing-mental-toughness]]
Confidence: 0.89
Reason:
Note 'Self-improvement strategies' extends the principles discussed in 'Developing mental toughness'.

---
→ [[motivation-and-inspiration]]
Confidence: 0.89
Reason:
Note 'Self-improvement strategies' extends the principles discussed in 'Motivation and inspiration'.

---
→ [[powerful-mindset-shifts]]
Confidence: 0.89
Reason:
Note 'Self-improvement strategies' extends the principles discussed in 'Powerful mindset shifts'.

---
→ [[building-resilience-and-grit]]
Confidence: 0.89
Reason:
Note 'Self-improvement strategies' extends the principles discussed in 'Building resilience and grit'.

---

### Shaw Industries Acquisition
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Shaw Industries Acquisition' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[clayton-homes-acquisition]]
Confidence: 0.95
Reason:
Note 'Shaw Industries Acquisition' extends the principles discussed in 'Clayton Homes Acquisition'.

---
→ [[economic-moat]]
Confidence: 0.95
Reason:
Note 'Shaw Industries Acquisition' extends the principles discussed in 'Concept of the Economic Moat'.

---
→ [[flightsafety-acquisition]]
Confidence: 0.95
Reason:
Note 'Shaw Industries Acquisition' extends the principles discussed in 'FlightSafety Acquisition'.

---
→ [[lubrizol-acquisition]]
Confidence: 0.95
Reason:
Note 'Shaw Industries Acquisition' extends the principles discussed in 'Lubrizol Acquisition'.

---
→ [[precision-castparts-acquisition]]
Confidence: 0.95
Reason:
Note 'Shaw Industries Acquisition' extends the principles discussed in 'Precision Castparts Acquisition'.

---
→ [[netjets-acquisition]]
Confidence: 0.88
Reason:
Note 'Shaw Industries Acquisition' extends the principles discussed in 'NetJets Acquisition'.

---

### Skinner Box Variable Rewards
→ [[dopamine-driven-feedback-loop]]
Confidence: 0.90
Reason:
Note 'Skinner Box Variable Rewards' extends the principles discussed in 'The Dopamine-Driven Feedback Loop'.

---

### Social Norms and Habits
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Social Norms and Habits' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[two-step-identity-change]]
Confidence: 0.95
Reason:
Note 'Social Norms and Habits' indicates a functional dependency on 'Two-Step Process to Identity Change'.

---
→ [[solomon-asch-conformity]]
Confidence: 0.87
Reason:
Note 'Social Norms and Habits' indicates a functional dependency on 'Solomon Asch Conformity Experiment'.

---
→ [[habit-contracts]]
Confidence: 0.86
Reason:
Note 'Social Norms and Habits' indicates a functional dependency on 'Habit Contracts'.

---
→ [[supernormal-stimulus]]
Confidence: 0.83
Reason:
Note 'Social Norms and Habits' indicates a functional dependency on 'Supernormal Stimulus'.

---
→ [[brain-as-a-prediction-machine]]
Confidence: 0.82
Reason:
Note 'Social Norms and Habits' indicates a functional dependency on 'Brain as a Prediction Machine'.

---
→ [[identity-based-habits]]
Confidence: 0.81
Reason:
Note 'Social Norms and Habits' indicates a functional dependency on 'Identity-based Habits'.

---
→ [[sorites-paradox]]
Confidence: 0.81
Reason:
Note 'Social Norms and Habits' indicates a functional dependency on 'Sorites Paradox'.

---

### Social Proof in Investing
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Social Proof in Investing' extends the principles discussed in 'Warren Buffett's Decision-Making Framework'.

---
→ [[lollapalooza-effect]]
Confidence: 0.95
Reason:
Note 'Social Proof in Investing' extends the principles discussed in 'Lollapalooza Effect'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Social Proof in Investing' extends the principles discussed in 'Value Investing Philosophy'.

---
→ [[commitment-consistency-bias]]
Confidence: 0.83
Reason:
High conceptual similarity score of 82%.

---
→ [[availability-bias-investing]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---
→ [[scarcity-bias-investing]]
Confidence: 0.81
Reason:
High conceptual similarity score of 80%.

---

### Socratic Prompting
→ [[prompt-learning-codes]]
Confidence: 0.90
Reason:
Note 'Socratic Prompting' discusses comparisons or tradeoffs with 'Prompt Learning Codes'.

---

### Solomon Asch Conformity Experiment
→ [[social-norms-and-habits]]
Confidence: 0.90
Reason:
Note 'Solomon Asch Conformity Experiment' functions as an illustrative example of 'Social Norms and Habits'.

---
→ [[jerry-uelsmann-photography]]
Confidence: 0.89
Reason:
Note 'Solomon Asch Conformity Experiment' functions as an illustrative example of 'Jerry Uelsmann Photography Experiment'.

---

### Sorites Paradox
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Sorites Paradox' discusses comparisons or tradeoffs with 'Atomic Habit'.

---
→ [[habits-plus-deliberate-practice]]
Confidence: 0.87
Reason:
Note 'Sorites Paradox' discusses comparisons or tradeoffs with 'Habits Plus Deliberate Practice'.

---
→ [[one-percent-better-every-day]]
Confidence: 0.87
Reason:
Note 'Sorites Paradox' discusses comparisons or tradeoffs with 'One Percent Better Every Day'.

---
→ [[plateau-of-latent-potential]]
Confidence: 0.83
Reason:
Note 'Sorites Paradox' discusses comparisons or tradeoffs with 'Plateau of Latent Potential'.

---
→ [[systems-vs-goals]]
Confidence: 0.83
Reason:
Note 'Sorites Paradox' discusses comparisons or tradeoffs with 'Systems vs Goals'.

---
→ [[identity-based-habits]]
Confidence: 0.82
Reason:
Note 'Sorites Paradox' discusses comparisons or tradeoffs with 'Identity-based Habits'.

---
→ [[two-step-identity-change]]
Confidence: 0.82
Reason:
Note 'Sorites Paradox' discusses comparisons or tradeoffs with 'Two-Step Process to Identity Change'.

---
→ [[law-23-concentrate-your-forces]]
Confidence: 0.81
Reason:
Note 'Sorites Paradox' discusses comparisons or tradeoffs with 'Concentrate Your Forces'.

---

### SpaceX Falcon 1 Launch Failures
→ [[prototype-then-iterate]]
Confidence: 0.95
Reason:
Note 'SpaceX Falcon 1 Launch Failures' extends the principles discussed in 'Prototype-Then-Iterate'.

---
→ [[elon-musk-spacex-founding]]
Confidence: 0.90
Reason:
Note 'SpaceX Falcon 1 Launch Failures' extends the principles discussed in 'Elon Musk SpaceX Founding'.

---
→ [[failure-is-innovation-required]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---

### Special Situations Investing
→ [[fruit-of-the-loom-acquisition]]
Confidence: 0.95
Reason:
Note 'Special Situations Investing' extends the principles discussed in 'Fruit of the Loom Acquisition'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Special Situations Investing' extends the principles discussed in 'Margin of Safety Principle'.

---
→ [[salomon-brothers-intervention]]
Confidence: 0.95
Reason:
Note 'Special Situations Investing' extends the principles discussed in 'Salomon Brothers Crisis Intervention'.

---
→ [[sanborn-map-investment]]
Confidence: 0.95
Reason:
Note 'Special Situations Investing' extends the principles discussed in 'Sanborn Map Company Investment'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Special Situations Investing' extends the principles discussed in 'Value Investing Philosophy'.

---
→ [[amex-salad-oil-investment]]
Confidence: 0.87
Reason:
Note 'Special Situations Investing' extends the principles discussed in 'AmEx Salad Oil Scandal Investment'.

---

### Speed of Iteration Principle
→ [[prototype-then-iterate]]
Confidence: 0.95
Reason:
Note 'Speed of Iteration Principle' discusses comparisons or tradeoffs with 'Prototype-Then-Iterate'.

---

### Sprezzatura
→ [[the-courtier-archetype]]
Confidence: 0.90
Reason:
Note 'Sprezzatura' extends the principles discussed in 'The Courtier Archetype'.

---
→ [[law-24-play-the-perfect-courtier]]
Confidence: 0.84
Reason:
High conceptual similarity score of 84%.

---

### Steelman Technique
→ [[prompt-thinking-codes]]
Confidence: 0.90
Reason:
Note 'Steelman Technique' functions as an illustrative example of 'Prompt Thinking Mode Codes'.

---
→ [[red-team-technique]]
Confidence: 0.84
Reason:
Note 'Steelman Technique' functions as an illustrative example of 'Red Team Technique'.

---

### Strategic Deception
→ [[con-artist-yellow-kid-weil]]
Confidence: 0.95
Reason:
Note 'Strategic Deception' extends the principles discussed in 'Joseph 'Yellow Kid' Weil'.

---
→ [[moral-nobility-as-tactical-vulnerability]]
Confidence: 0.95
Reason:
Note 'Strategic Deception' extends the principles discussed in 'Moral Nobility as Tactical Vulnerability'.

---
→ [[the-myth-of-sincerity]]
Confidence: 0.95
Reason:
Note 'Strategic Deception' extends the principles discussed in 'The Myth of Sincerity'.

---
→ [[law-14-pose-as-friend-work-as-spy]]
Confidence: 0.82
Reason:
High conceptual similarity score of 82%.

---

### Supernormal Stimulus
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Supernormal Stimulus' functions as an illustrative example of '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[habit-loop]]
Confidence: 0.95
Reason:
Note 'Supernormal Stimulus' functions as an illustrative example of 'Habit Loop'.

---
→ [[make-it-invisible]]
Confidence: 0.90
Reason:
Note 'Supernormal Stimulus' functions as an illustrative example of 'Make It Invisible'.

---
→ [[commitment-devices]]
Confidence: 0.88
Reason:
Note 'Supernormal Stimulus' functions as an illustrative example of 'Commitment Devices'.

---
→ [[social-norms-and-habits]]
Confidence: 0.88
Reason:
Note 'Supernormal Stimulus' functions as an illustrative example of 'Social Norms and Habits'.

---
→ [[brain-as-a-prediction-machine]]
Confidence: 0.85
Reason:
Note 'Supernormal Stimulus' functions as an illustrative example of 'Brain as a Prediction Machine'.

---
→ [[law-of-least-effort]]
Confidence: 0.85
Reason:
Note 'Supernormal Stimulus' functions as an illustrative example of 'Law of Least Effort'.

---
→ [[reframing-hard-habits]]
Confidence: 0.85
Reason:
Note 'Supernormal Stimulus' functions as an illustrative example of 'Reframing Hard Habits'.

---

### Susan Thompson Buffett's Influence
→ [[buffett-foundation]]
Confidence: 0.95
Reason:
Note 'Susan Thompson Buffett's Influence' extends the principles discussed in 'Buffett Foundation'.

---
→ [[giving-pledge]]
Confidence: 0.95
Reason:
Note 'Susan Thompson Buffett's Influence' extends the principles discussed in 'The Giving Pledge'.

---
→ [[warren-buffett-biography]]
Confidence: 0.95
Reason:
Note 'Susan Thompson Buffett's Influence' extends the principles discussed in 'Warren Buffett Biography'.

---

### Systems vs Goals
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'Systems vs Goals' discusses comparisons or tradeoffs with 'Atomic Habit'.

---
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Systems vs Goals' discusses comparisons or tradeoffs with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[james-clear-injury-recovery]]
Confidence: 0.95
Reason:
Note 'Systems vs Goals' discusses comparisons or tradeoffs with 'James Clear Injury Recovery'.

---
→ [[marginal-gains-british-cycling]]
Confidence: 0.95
Reason:
Note 'Systems vs Goals' discusses comparisons or tradeoffs with 'Marginal Gains British Cycling'.

---
→ [[plateau-of-latent-potential]]
Confidence: 0.95
Reason:
Note 'Systems vs Goals' discusses comparisons or tradeoffs with 'Plateau of Latent Potential'.

---
→ [[sorites-paradox]]
Confidence: 0.95
Reason:
Note 'Systems vs Goals' discusses comparisons or tradeoffs with 'Sorites Paradox'.

---
→ [[you-do-not-rise-to-the-level-of-your-goals]]
Confidence: 0.90
Reason:
Note 'Systems vs Goals' discusses comparisons or tradeoffs with 'You Do Not Rise to the Level of Your Goals'.

---
→ [[one-percent-better-every-day]]
Confidence: 0.88
Reason:
Note 'Systems vs Goals' discusses comparisons or tradeoffs with 'One Percent Better Every Day'.

---

### Talent Density Principle
→ [[elon-musk-hiring-philosophy]]
Confidence: 0.90
Reason:
Note 'Talent Density Principle' extends the principles discussed in 'Evidence of Exceptional Ability Hiring'.

---
→ [[musk-communication-pattern]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### The Diplomatic Survival of Talleyrand
→ [[law-14-pose-as-friend-work-as-spy]]
Confidence: 0.95
Reason:
Note 'The Diplomatic Survival of Talleyrand' extends the principles discussed in 'Pose as a Friend, Work as a Spy'.

---
→ [[law-39-stir-up-waters]]
Confidence: 0.95
Reason:
Note 'The Diplomatic Survival of Talleyrand' extends the principles discussed in 'Stir Up Waters to Catch Fish'.

---
→ [[law-35-master-the-art-of-timing]]
Confidence: 0.90
Reason:
Note 'The Diplomatic Survival of Talleyrand' extends the principles discussed in 'Master the Art of Timing'.

---
→ [[law-20-do-not-commit-to-anyone]]
Confidence: 0.81
Reason:
High conceptual similarity score of 80%.

---

### Ted Weschler Successor
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Ted Weschler Successor' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[todd-combs-successor]]
Confidence: 0.95
Reason:
Note 'Ted Weschler Successor' extends the principles discussed in 'Todd Combs Successor'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Ted Weschler Successor' extends the principles discussed in 'Value Investing Philosophy'.

---

### Temptation Bundling
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Temptation Bundling' functions as an illustrative example of '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[motivation-ritual]]
Confidence: 0.95
Reason:
Note 'Temptation Bundling' functions as an illustrative example of 'Motivation Ritual'.

---
→ [[premacks-principle]]
Confidence: 0.95
Reason:
Note 'Temptation Bundling' functions as an illustrative example of 'Premack's Principle'.

---
→ [[habit-tracking]]
Confidence: 0.84
Reason:
Note 'Temptation Bundling' functions as an illustrative example of 'Habit Tracking'.

---
→ [[two-step-identity-change]]
Confidence: 0.80
Reason:
Note 'Temptation Bundling' functions as an illustrative example of 'Two-Step Process to Identity Change'.

---

### Tesla Model 3 Production Hell
→ [[prototype-then-iterate]]
Confidence: 0.95
Reason:
Note 'Tesla Model 3 Production Hell' extends the principles discussed in 'Prototype-Then-Iterate'.

---
→ [[musk-working-hours-expectation]]
Confidence: 0.90
Reason:
Note 'Tesla Model 3 Production Hell' extends the principles discussed in 'Leadership by Immersion Expectation'.

---
→ [[elon-musk-tesla-founding]]
Confidence: 0.87
Reason:
Note 'Tesla Model 3 Production Hell' extends the principles discussed in 'Elon Musk Tesla Founding'.

---
→ [[delete-then-optimize-loop]]
Confidence: 0.87
Reason:
Note 'Tesla Model 3 Production Hell' extends the principles discussed in 'Delete-Then-Optimize Loop'.

---
→ [[delete-before-optimize]]
Confidence: 0.81
Reason:
High conceptual similarity score of 81%.

---

### The Courtier Archetype
→ [[law-30-make-accomplishments-seem-effortless]]
Confidence: 0.95
Reason:
Note 'The Courtier Archetype' extends the principles discussed in 'Make Your Accomplishments Seem Effortless'.

---
→ [[sprezzatura]]
Confidence: 0.95
Reason:
Note 'The Courtier Archetype' extends the principles discussed in 'Sprezzatura'.

---
→ [[the-illusion-of-equality]]
Confidence: 0.95
Reason:
Note 'The Courtier Archetype' extends the principles discussed in 'The Illusion of Equality'.

---
→ [[law-24-play-the-perfect-courtier]]
Confidence: 0.88
Reason:
Note 'The Courtier Archetype' extends the principles discussed in 'Play the Perfect Courtier'.

---

### The Futility of Gratitude
→ [[law-13-appeal-to-self-interest]]
Confidence: 0.90
Reason:
Note 'The Futility of Gratitude' indicates a functional dependency on 'When Asking for Help, Appeal to Self-Interest, Never to Mercy or Gratitude'.

---

### The Illusion of Equality
→ [[court-power]]
Confidence: 0.90
Reason:
Note 'The Illusion of Equality' extends the principles discussed in 'Court Power'.

---
→ [[law-24-play-the-perfect-courtier]]
Confidence: 0.80
Reason:
High conceptual similarity score of 80%.

---

### The Law of Reversal
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'The Law of Reversal' discusses concepts that contradict or contrast with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[law-01-never-outshine-the-master]]
Confidence: 0.95
Reason:
Note 'The Law of Reversal' discusses concepts that contradict or contrast with 'Never Outshine the Master'.

---
→ [[moral-nobility-as-tactical-vulnerability]]
Confidence: 0.95
Reason:
Note 'The Law of Reversal' discusses concepts that contradict or contrast with 'Moral Nobility as Tactical Vulnerability'.

---
→ [[law-22-surrender-tactic]]
Confidence: 0.90
Reason:
Note 'The Law of Reversal' discusses concepts that contradict or contrast with 'Use the Surrender Tactic — Transform Weakness into Power'.

---
→ [[law-of-least-effort]]
Confidence: 0.87
Reason:
Note 'The Law of Reversal' discusses concepts that contradict or contrast with 'Law of Least Effort'.

---
→ [[hebbs-law]]
Confidence: 0.86
Reason:
Note 'The Law of Reversal' discusses concepts that contradict or contrast with 'Hebb's Law'.

---
→ [[goldilocks-rule]]
Confidence: 0.86
Reason:
Note 'The Law of Reversal' discusses concepts that contradict or contrast with 'Goldilocks Rule'.

---
→ [[two-minute-rule]]
Confidence: 0.85
Reason:
Note 'The Law of Reversal' discusses concepts that contradict or contrast with 'Two-Minute Rule'.

---

### The Myth of Sincerity
→ [[strategic-deception]]
Confidence: 0.90
Reason:
Note 'The Myth of Sincerity' extends the principles discussed in 'Strategic Deception'.

---
→ [[law-12-selective-honesty-to-disarm]]
Confidence: 0.85
Reason:
High conceptual similarity score of 84%.

---
→ [[law-03-conceal-your-intentions]]
Confidence: 0.83
Reason:
High conceptual similarity score of 83%.

---

### The Reality of Human Envy
→ [[law-46-never-appear-too-perfect]]
Confidence: 0.95
Reason:
Note 'The Reality of Human Envy' extends the principles discussed in 'Never Appear Too Perfect'.

---

### Swimming Naked Heuristic
→ [[debt-aversion-principle]]
Confidence: 0.95
Reason:
Note 'Swimming Naked Heuristic' extends the principles discussed in 'Debt Aversion Principle'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Swimming Naked Heuristic' extends the principles discussed in 'Margin of Safety Principle'.

---

### Todd Combs Successor
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Todd Combs Successor' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Todd Combs Successor' extends the principles discussed in 'Margin of Safety Principle'.

---
→ [[ted-weschler-successor]]
Confidence: 0.95
Reason:
Note 'Todd Combs Successor' extends the principles discussed in 'Ted Weschler Successor'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Todd Combs Successor' extends the principles discussed in 'Value Investing Philosophy'.

---
→ [[warren-buffett-biography]]
Confidence: 0.95
Reason:
Note 'Todd Combs Successor' extends the principles discussed in 'Warren Buffett Biography'.

---

### Tom Murphy Influence
→ [[buffett-delegation-model]]
Confidence: 0.95
Reason:
Note 'Tom Murphy Influence' functions as an illustrative example of 'Warren Buffett's Delegation Model'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Tom Murphy Influence' functions as an illustrative example of 'Rational Capital Allocation'.

---

### Trent Dyrsmid Paper Clips
→ [[james-clear-injury-recovery]]
Confidence: 0.90
Reason:
Note 'Trent Dyrsmid Paper Clips' functions as an illustrative example of 'James Clear Injury Recovery'.

---
→ [[habit-tracking]]
Confidence: 0.89
Reason:
Note 'Trent Dyrsmid Paper Clips' functions as an illustrative example of 'Habit Tracking'.

---

### Twenty Punches Card Rule
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Twenty Punches Card Rule' extends the principles discussed in 'Warren Buffett's Decision-Making Framework'.

---
→ [[circle-of-competence]]
Confidence: 0.95
Reason:
Note 'Twenty Punches Card Rule' extends the principles discussed in 'Circle of Competence Heuristic'.

---
→ [[opportunity-cost-heuristic]]
Confidence: 0.95
Reason:
Note 'Twenty Punches Card Rule' extends the principles discussed in 'Opportunity Cost Heuristic'.

---
→ [[two-slot-punch-card]]
Confidence: 0.95
Reason:
Note 'Twenty Punches Card Rule' extends the principles discussed in 'Two Slot Punch Card Heuristic'.

---

### Two-Minute Rule
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Two-Minute Rule' functions as an illustrative example of '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[habit-tracking]]
Confidence: 0.95
Reason:
Note 'Two-Minute Rule' functions as an illustrative example of 'Habit Tracking'.

---
→ [[law-of-least-effort]]
Confidence: 0.87
Reason:
Note 'Two-Minute Rule' functions as an illustrative example of 'Law of Least Effort'.

---
→ [[goldilocks-rule]]
Confidence: 0.86
Reason:
Note 'Two-Minute Rule' functions as an illustrative example of 'Goldilocks Rule'.

---
→ [[habits-scorecard]]
Confidence: 0.83
Reason:
Note 'Two-Minute Rule' functions as an illustrative example of 'Habits Scorecard'.

---
→ [[identity-based-habits]]
Confidence: 0.81
Reason:
Note 'Two-Minute Rule' functions as an illustrative example of 'Identity-based Habits'.

---

### Two Slot Punch Card Heuristic
→ [[buffett-decision-making-framework]]
Confidence: 0.95
Reason:
Note 'Two Slot Punch Card Heuristic' extends the principles discussed in 'Warren Buffett's Decision-Making Framework'.

---
→ [[twenty-punches-card-rule]]
Confidence: 0.95
Reason:
Note 'Two Slot Punch Card Heuristic' extends the principles discussed in 'Twenty Punches Card Rule'.

---

### Two-Step Process to Identity Change
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'Two-Step Process to Identity Change' indicates a functional dependency on '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[identity-based-habits]]
Confidence: 0.90
Reason:
Note 'Two-Step Process to Identity Change' indicates a functional dependency on 'Identity-based Habits'.

---
→ [[social-norms-and-habits]]
Confidence: 0.88
Reason:
Note 'Two-Step Process to Identity Change' indicates a functional dependency on 'Social Norms and Habits'.

---
→ [[one-percent-better-every-day]]
Confidence: 0.83
Reason:
Note 'Two-Step Process to Identity Change' indicates a functional dependency on 'One Percent Better Every Day'.

---
→ [[habits-scorecard]]
Confidence: 0.83
Reason:
Note 'Two-Step Process to Identity Change' indicates a functional dependency on 'Habits Scorecard'.

---
→ [[reflection-and-review]]
Confidence: 0.82
Reason:
Note 'Two-Step Process to Identity Change' indicates a functional dependency on 'Reflection and Review'.

---
→ [[habit-tracking]]
Confidence: 0.82
Reason:
Note 'Two-Step Process to Identity Change' indicates a functional dependency on 'Habit Tracking'.

---
→ [[sorites-paradox]]
Confidence: 0.82
Reason:
Note 'Two-Step Process to Identity Change' indicates a functional dependency on 'Sorites Paradox'.

---

### US Air Investment Mistake
→ [[circle-of-competence]]
Confidence: 0.95
Reason:
Note 'US Air Investment Mistake' functions as an illustrative example of 'Circle of Competence Heuristic'.

---
→ [[dexter-shoe-investment-mistake]]
Confidence: 0.95
Reason:
Note 'US Air Investment Mistake' functions as an illustrative example of 'Dexter Shoe Acquisition Mistake'.

---
→ [[gillette-investment]]
Confidence: 0.95
Reason:
Note 'US Air Investment Mistake' functions as an illustrative example of 'Gillette Investment'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'US Air Investment Mistake' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[capital-intensity]]
Confidence: 0.86
Reason:
Note 'US Air Investment Mistake' functions as an illustrative example of 'Low Capital Intensity'.

---
→ [[apple-investment-case-study]]
Confidence: 0.84
Reason:
Note 'US Air Investment Mistake' functions as an illustrative example of 'Apple Investment Case Study'.

---
→ [[berkshire-shareholder-letters]]
Confidence: 0.81
Reason:
Note 'US Air Investment Mistake' functions as an illustrative example of 'Berkshire Shareholder Letters'.

---
→ [[washington-post-investment]]
Confidence: 0.81
Reason:
Note 'US Air Investment Mistake' functions as an illustrative example of 'Washington Post Investment'.

---

### Value Investing Philosophy
→ [[amex-salad-oil-investment]]
Confidence: 0.95
Reason:
Note 'Value Investing Philosophy' discusses comparisons or tradeoffs with 'AmEx Salad Oil Scandal Investment'.

---
→ [[arbitrage-workouts]]
Confidence: 0.95
Reason:
Note 'Value Investing Philosophy' discusses comparisons or tradeoffs with 'Arbitrage and Workout Investments'.

---
→ [[buffett-education-and-graham-influence]]
Confidence: 0.95
Reason:
Note 'Value Investing Philosophy' discusses comparisons or tradeoffs with 'Warren Buffett's Education and Benjamin Graham's Influence'.

---
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'Value Investing Philosophy' discusses comparisons or tradeoffs with 'Charlie Munger's Influence on Warren Buffett'.

---
→ [[cigar-butt-investing]]
Confidence: 0.95
Reason:
Note 'Value Investing Philosophy' discusses comparisons or tradeoffs with 'Cigar Butt Investing'.

---
→ [[circle-of-competence]]
Confidence: 0.95
Reason:
Note 'Value Investing Philosophy' discusses comparisons or tradeoffs with 'Circle of Competence Heuristic'.

---
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Value Investing Philosophy' discusses comparisons or tradeoffs with 'Long-Term Compounding'.

---
→ [[dempster-mill-investment]]
Confidence: 0.95
Reason:
Note 'Value Investing Philosophy' discusses comparisons or tradeoffs with 'Dempster Mill Investment'.

---

### Vertical Integration Calculus
→ [[first-principles-thinking]]
Confidence: 0.95
Reason:
Note 'Vertical Integration Calculus' extends the principles discussed in 'First Principles Thinking'.

---
→ [[idiot-index]]
Confidence: 0.95
Reason:
Note 'Vertical Integration Calculus' extends the principles discussed in 'Idiot Index'.

---

### Victor Hugo Closet Lock
→ [[cash-register-automation]]
Confidence: 0.95
Reason:
Note 'Victor Hugo Closet Lock' functions as an illustrative example of 'Cash Register Automation'.

---
→ [[james-clear-injury-recovery]]
Confidence: 0.95
Reason:
Note 'Victor Hugo Closet Lock' functions as an illustrative example of 'James Clear Injury Recovery'.

---

### Vietnam Veterans Heroin Study
→ [[safeguard-soap-handwashing-study]]
Confidence: 0.90
Reason:
Note 'Vietnam Veterans Heroin Study' functions as an illustrative example of 'Safeguard Soap Handwashing Study'.

---
→ [[make-it-invisible]]
Confidence: 0.83
Reason:
Note 'Vietnam Veterans Heroin Study' functions as an illustrative example of 'Make It Invisible'.

---
→ [[environment-design]]
Confidence: 0.82
Reason:
Note 'Vietnam Veterans Heroin Study' functions as an illustrative example of 'Environment Design'.

---

### Walter Schloss Comparison
→ [[cigar-butt-investing]]
Confidence: 0.95
Reason:
Note 'Walter Schloss Comparison' functions as an illustrative example of 'Cigar Butt Investing'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Walter Schloss Comparison' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[buffett-education-and-graham-influence]]
Confidence: 0.90
Reason:
Note 'Walter Schloss Comparison' functions as an illustrative example of 'Warren Buffett's Education and Benjamin Graham's Influence'.

---
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.83
Reason:
Note 'Walter Schloss Comparison' functions as an illustrative example of 'Charlie Munger's Influence on Warren Buffett'.

---

### Warren Buffett Biography
→ [[ajit-jain-successor]]
Confidence: 0.95
Reason:
Note 'Warren Buffett Biography' extends the principles discussed in 'Ajit Jain Successor'.

---
→ [[berkshire-insurance-businesses]]
Confidence: 0.95
Reason:
Note 'Warren Buffett Biography' extends the principles discussed in 'Berkshire's Insurance Float'.

---
→ [[bill-gates-friendship]]
Confidence: 0.95
Reason:
Note 'Warren Buffett Biography' extends the principles discussed in 'Bill Gates Friendship'.

---
→ [[buffett-childhood-entrepreneurship]]
Confidence: 0.95
Reason:
Note 'Warren Buffett Biography' extends the principles discussed in 'Warren Buffett's Childhood Entrepreneurship'.

---
→ [[buffett-frugal-lifestyle]]
Confidence: 0.95
Reason:
Note 'Warren Buffett Biography' extends the principles discussed in 'Warren Buffett's Frugality'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Warren Buffett Biography' extends the principles discussed in 'Rational Capital Allocation'.

---
→ [[giving-pledge]]
Confidence: 0.95
Reason:
Note 'Warren Buffett Biography' extends the principles discussed in 'The Giving Pledge'.

---
→ [[greg-abel-successor]]
Confidence: 0.95
Reason:
Note 'Warren Buffett Biography' extends the principles discussed in 'Greg Abel Successor'.

---

### Selected Warren Buffett Quotes
→ [[berkshire-shareholder-letters]]
Confidence: 0.95
Reason:
Note 'Selected Warren Buffett Quotes' functions as an illustrative example of 'Berkshire Shareholder Letters'.

---
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'Selected Warren Buffett Quotes' functions as an illustrative example of 'Charlie Munger's Influence on Warren Buffett'.

---
→ [[circle-of-competence]]
Confidence: 0.95
Reason:
Note 'Selected Warren Buffett Quotes' functions as an illustrative example of 'Circle of Competence Heuristic'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Selected Warren Buffett Quotes' functions as an illustrative example of 'Margin of Safety Principle'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Selected Warren Buffett Quotes' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[warren-buffett-biography]]
Confidence: 0.95
Reason:
Note 'Selected Warren Buffett Quotes' functions as an illustrative example of 'Warren Buffett Biography'.

---
→ [[apple-investment-case-study]]
Confidence: 0.82
Reason:
Note 'Selected Warren Buffett Quotes' functions as an illustrative example of 'Apple Investment Case Study'.

---
→ [[coca-cola-investment-case-study]]
Confidence: 0.81
Reason:
Note 'Selected Warren Buffett Quotes' functions as an illustrative example of 'Coca-Cola Investment Case Study'.

---

### Washington Post Investment
→ [[compounding-interest]]
Confidence: 0.95
Reason:
Note 'Washington Post Investment' functions as an illustrative example of 'Long-Term Compounding'.

---
→ [[margin-of-safety]]
Confidence: 0.95
Reason:
Note 'Washington Post Investment' functions as an illustrative example of 'Margin of Safety Principle'.

---
→ [[value-investing]]
Confidence: 0.95
Reason:
Note 'Washington Post Investment' functions as an illustrative example of 'Value Investing Philosophy'.

---
→ [[us-air-investment-mistake]]
Confidence: 0.90
Reason:
Note 'Washington Post Investment' functions as an illustrative example of 'US Air Investment Mistake'.

---
→ [[gillette-investment]]
Confidence: 0.88
Reason:
Note 'Washington Post Investment' functions as an illustrative example of 'Gillette Investment'.

---
→ [[coca-cola-investment-case-study]]
Confidence: 0.88
Reason:
Note 'Washington Post Investment' functions as an illustrative example of 'Coca-Cola Investment Case Study'.

---
→ [[rule-one-never-lose-money]]
Confidence: 0.88
Reason:
Note 'Washington Post Investment' functions as an illustrative example of 'Rule Number One'.

---
→ [[dexter-shoe-investment-mistake]]
Confidence: 0.87
Reason:
Note 'Washington Post Investment' functions as an illustrative example of 'Dexter Shoe Acquisition Mistake'.

---

### Wesco Financial
→ [[blue-chip-stamps-investment]]
Confidence: 0.95
Reason:
Note 'Wesco Financial' functions as an illustrative example of 'Blue Chip Stamps Investment'.

---
→ [[capital-allocation]]
Confidence: 0.95
Reason:
Note 'Wesco Financial' functions as an illustrative example of 'Rational Capital Allocation'.

---
→ [[charlie-munger-influence-on-buffett]]
Confidence: 0.95
Reason:
Note 'Wesco Financial' functions as an illustrative example of 'Charlie Munger's Influence on Warren Buffett'.

---

### You Do Not Rise to the Level of Your Goals
→ [[atomic-habit]]
Confidence: 0.95
Reason:
Note 'You Do Not Rise to the Level of Your Goals' discusses comparisons or tradeoffs with 'Atomic Habit'.

---
→ [[books-cheatsheet]]
Confidence: 0.95
Reason:
Note 'You Do Not Rise to the Level of Your Goals' discusses comparisons or tradeoffs with '📖 Books Cheatsheet: The Duality of Habits & Power'.

---
→ [[plateau-of-latent-potential]]
Confidence: 0.95
Reason:
Note 'You Do Not Rise to the Level of Your Goals' discusses comparisons or tradeoffs with 'Plateau of Latent Potential'.

---
→ [[systems-vs-goals]]
Confidence: 0.90
Reason:
Note 'You Do Not Rise to the Level of Your Goals' discusses comparisons or tradeoffs with 'Systems vs Goals'.

---
→ [[decisive-moments]]
Confidence: 0.84
Reason:
Note 'You Do Not Rise to the Level of Your Goals' discusses comparisons or tradeoffs with 'Decisive Moments'.

---
→ [[identity-based-habits]]
Confidence: 0.80
Reason:
Note 'You Do Not Rise to the Level of Your Goals' discusses comparisons or tradeoffs with 'Identity-based Habits'.
```

---

## File: reports\vault-summary.md

```markdown
# Vault Summary

Generated by automation.
```

---

## File: reports\_orphans.md

```markdown
# Orphans

Generated by automation.
```

---

