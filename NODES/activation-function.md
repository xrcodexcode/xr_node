---
id: 36551c0f-9b73-4a00-89da-e11ea8a68d7e
title: Activation Function
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
related: ["Neural Network", "Backpropagation"]
schema_version: 4
---

# Activation Function

## Definition
An Activation Function is a mathematical function applied to the output of a neural network layer node, determining whether and to what extent the node should be activated (contribute to the next layer), introducing non-linearity into the network.

## Explanation
Without activation functions, a neural network is just a stack of linear operations (matrix multiplications), which is equivalent to a single linear transformation regardless of how many layers it has. Activation functions introduce non-linear mapping capabilities, enabling the network to learn complex, non-linear relationships in data.

Common activation functions include:
- **ReLU (Rectified Linear Unit)**: $f(x) = \max(0, x)$. Extremely popular due to its simplicity and computational efficiency, mitigating the vanishing gradient problem.
- **Sigmoid**: $f(x) = \frac{1}{1 + e^{-x}}$. Outputs values between 0 and 1, useful for binary classification outputs.
- **Tanh (Hyperbolic Tangent)**: $f(x) = \tanh(x)$. Outputs values between -1 and 1, zero-centered, facilitating faster convergence.

## Related
- [[neural-network-moc|Neural Network MOC]]
- [[neural-network|Neural Network]]
- [[backpropagation|Backpropagation]]

## Source
Original thought / General Machine Learning concepts.
