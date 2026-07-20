---
id: b1fed6e2-aff8-479d-97a4-3c14a6007dff
title: Loss Function
type: atomic-note
status: atomic
domain: ai
source_type: null
created: 2026-07-20
updated: 2026-07-20
review: 2026-10-20
confidence: 95
version: 1
aliases: ["Cost Function", "Objective Function"]
tags: [reference]
owner_moc: Neural Network Map of Content
sources: []
related: ["Neural Network", "Gradient Descent", "Backpropagation"]
schema_version: 4
---

# Loss Function

## Definition
A Loss Function (or cost function) is a mathematical function that measures the discrepancy between the neural network's predicted output and the actual target values, serving as the feedback signal to guide training.

## Explanation
The loss function quantifies how "wrong" the model's predictions are. The gradient of the loss function is calculated during backpropagation and used by the optimizer (e.g., gradient descent) to update network parameters.

Common loss functions include:
- **Mean Squared Error (MSE)**: Typically used for regression tasks, calculating the average squared difference between predictions and targets.
- **Binary Cross-Entropy**: Used for binary classification tasks, measuring performance whose output is a probability value between 0 and 1.
- **Categorical Cross-Entropy**: Used for multi-class classification tasks to evaluate probabilistic outputs across multiple categories.

## Related
- [[neural-network-moc|Neural Network MOC]]
- [[neural-network|Neural Network]]
- [[gradient-descent|Gradient Descent]]
- [[backpropagation|Backpropagation]]

## Source
Original thought / General Machine Learning concepts.
