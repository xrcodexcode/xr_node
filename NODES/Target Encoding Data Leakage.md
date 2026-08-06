---
id: 550e8400-e29b-41d4-a716-446655440008
title: Target Encoding Data Leakage
type: atomic-note
status: atomic
domain: ai
source_type: article
created: 2026-08-06
updated: 2026-08-06
review: 2026-11-06
confidence: 95
version: 1
aliases:
  - Target Encoding Leakage
  - Categorical Target Leakage
tags:
  - ai
  - ml
  - reference
owner_moc: 🤖 AI & Machine Learning Map of Content
sources:
  - 01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1.md
related:
  - [[NODES/overfitting]]
schema_version: 4
---

# Target Encoding Data Leakage

Target Encoding Data Leakage occurs when target statistics for high-cardinality categorical features are computed over the full dataset prior to splitting, leaking validation labels into training features.

## Why it matters

Target encoding replaces categorical values (e.g., `user_id`, `campaign_id`) with the mean target value of that category. If this mean is calculated across the whole dataset before cross-validation or temporal splitting, the target value of validation samples directly influences training feature values.

This causes extreme overfitting: the model achieves artificially high training metrics (e.g., Train AUC 0.95) but degrades rapidly in production or on holdout validation data (e.g., Val AUC 0.70).

Prevention techniques:
1. **Out-of-Fold (OOF) Target Encoding**: Calculate target statistics inside cross-validation folds using only training fold target values.
2. **Time-Aware Target Encoding**: For temporal data (CTR, recsys, fraud), calculate statistics strictly using past time windows relative to each sample.
3. **Smoothing & Noise**: Apply Bayesian smoothing ($\frac{n \cdot \bar{y} + m \cdot y_{global}}{n + m}$) and add random Gaussian noise to prevent memorization of low-frequency categories.

## Related

- [[NODES/overfitting|Overfitting]]

Relationship: `causes_overfitting`

## Source

- [[01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1|The AI/ML Engineer Interview Guide for 2026 - Part 1]]
