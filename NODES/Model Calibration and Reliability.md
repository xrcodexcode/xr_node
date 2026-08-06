---
id: 550e8400-e29b-41d4-a716-446655440007
title: Model Calibration and Reliability
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
  - Model Calibration
  - Expected Calibration Error
  - Probability Calibration
tags:
  - ai
  - ml
  - reference
owner_moc: 🤖 AI & Machine Learning Map of Content
sources:
  - 01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1.md
related:
  - [[NODES/overfitting]]
  - [[NODES/loss-function]]
schema_version: 4
---

# Model Calibration and Reliability

Model Calibration measures the degree to which a machine learning model's predicted output probabilities match true empirical event frequencies.

## Why it matters

A model can possess strong discrimination (high ROC-AUC) by ranking positive instances above negative instances, while remaining severely miscalibrated by overconfidently assigning probabilities of 0.95 to outcomes that occur only 70% of the time.

In risk-critical applications (fraud detection, medical diagnostics, insurance, automated decision thresholds), reliable probabilities are necessary for resource allocation and cost-optimal decision making.

Key calibration evaluation tools and metrics:
- **Reliability Diagrams**: Visualizing predicted probability confidence vs. observed accuracy across binned intervals.
- **Expected Calibration Error (ECE)**: Weighted average of absolute differences between predicted confidence and empirical accuracy across probability bins.
- **Brier Score**: Mean squared error between predicted probabilities and binary target labels ($BS = \frac{1}{N}\sum (f_i - o_i)^2$).

Post-hoc calibration techniques adjust miscalibrated models post-training:
- *Temperature Scaling*: Scales logits by temperature parameter $T$.
- *Platt Scaling*: Fits a logistic sigmoid transformation over model scores.
- *Isotonic Regression*: Non-parametric monotonic mapping.

## Related

- [[NODES/overfitting|Overfitting]]
- [[NODES/loss-function|Loss Function]]

Relationship: `evaluates_probability_trust`

## Source

- [[01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1|The AI/ML Engineer Interview Guide for 2026 - Part 1]]
