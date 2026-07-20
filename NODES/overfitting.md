---
id: 81f679f3-d18e-4047-bdc0-bb5c232ee993
title: Overfitting
type: atomic-note
status: atomic
domain: ai
source_type: null
created: 2026-07-20
updated: 2026-07-20
review: 2026-10-20
confidence: 95
version: 1
aliases: []
tags: [reference]
owner_moc: Neural Network Map of Content
sources: []
related: ["Neural Network"]
schema_version: 4
---

# Overfitting

## Definition
Overfitting is a modeling error that occurs when a machine learning model learns the training data too well, capturing its noise and random fluctuations rather than the underlying pattern, resulting in high training performance but poor generalization to unseen validation and testing data.

## Explanation
In neural networks, overfitting typically occurs when the model has too many parameters relative to the size of the training dataset, or when it is trained for too many epochs. It is diagnosed by monitoring training and validation performance:
- **Training Error**: Continues to decrease or stays near zero.
- **Validation Error**: Begins to increase after an initial decrease.

Common mitigation techniques include:
- **Regularization**: Adding a penalty term to the loss function (e.g. L1/L2 regularization) to prevent weight magnitudes from growing too large.
- **Dropout**: Randomly deactivating a fraction of neurons during each training step to prevent co-adaptation.
- **Early Stopping**: Halting training once validation performance begins to degrade.
- **Data Augmentation**: Artificially increasing the diversity of the training set.

## Related
- [[neural-network-moc|Neural Network MOC]]
- [[neural-network|Neural Network]]

## Source
Original thought / General Machine Learning concepts.
