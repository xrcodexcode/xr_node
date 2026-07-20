---
id: d72732ca-44e6-4ee1-b70d-1ae4bfef9684
title: Backpropagation
type: atomic-note
status: atomic
domain: ai
source_type: null
created: 2026-07-20
updated: 2026-07-20
review: 2026-10-20
confidence: 95
version: 1
aliases: ["Backward Propagation of Errors"]
tags: [reference]
owner_moc: Neural Network Map of Content
sources: []
related: ["Neural Network", "Gradient Descent", "Activation Function", "Loss Function"]
schema_version: 4
---

# Backpropagation

## Definition
Backpropagation is an algorithm used in training neural networks to calculate the gradient of the loss function with respect to the network's weights and biases, using the chain rule of calculus.

## Explanation
Backpropagation works by calculating the loss at the output layer and propagating the error backwards through the network:
1. **Forward Pass**: Data is passed through the network to generate a prediction and calculate the loss.
2. **Backward Pass**: Starting at the output layer, the algorithm calculates the partial derivative of the loss with respect to each weight and bias in each layer.
3. **Chain Rule**: The calculus chain rule is recursively applied to link derivatives from the output layer back to the input layer.
4. **Parameter Updates**: The calculated gradients are passed to an optimizer (like gradient descent) to adjust the weights and biases in the direction that minimizes the loss.

## Related
- [[neural-network-moc|Neural Network MOC]]
- [[neural-network|Neural Network]]
- [[gradient-descent|Gradient Descent]]
- [[activation-function|Activation Function]]
- [[loss-function|Loss Function]]

## Source
Original thought / General Machine Learning concepts.
