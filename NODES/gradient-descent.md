---
id: 18264983-ed5b-4292-8895-6a17adb2bddd
title: Gradient Descent
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
related: ["Neural Network", "Loss Function", "Backpropagation"]
schema_version: 4
---

# Gradient Descent

## Definition
Gradient Descent is a first-order iterative optimization algorithm used to minimize a loss function by repeatedly moving in the direction of steepest descent, defined by the negative of the gradient of the function.

## Explanation
In machine learning, gradient descent is used to optimize the weights and biases:
1. **Calculate Gradients**: Computes the partial derivatives of the loss function with respect to each model parameter using backpropagation.
2. **Update Parameters**: Subtracts a fraction of the gradient from the current parameter values. The size of this step is controlled by the **learning rate** parameter.
3. **Iterate**: Repeats the process over multiple epochs or batches until the loss function converges to a minimum.

There are three main variants:
- **Batch Gradient Descent**: Computes the gradient using the entire dataset.
- **Stochastic Gradient Descent (SGD)**: Computes the gradient using a single random training sample.
- **Mini-batch Gradient Descent**: Computes the gradient using a small subset (batch) of samples, balancing speed and stability.

## Related
- [[neural-network-moc|Neural Network MOC]]
- [[neural-network|Neural Network]]
- [[loss-function|Loss Function]]
- [[backpropagation|Backpropagation]]

## Source
Original thought / General Machine Learning concepts.
