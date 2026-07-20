---
id: f504666a-eecf-41a1-86c8-af65329e9e18
title: Neural Network
type: atomic-note
status: atomic
domain: ai
source_type: null
created: 2026-07-20
updated: 2026-07-20
review: 2026-10-20
confidence: 95
version: 1
aliases: ["Artificial Neural Network", "ANN"]
tags: [reference]
owner_moc: Neural Network Map of Content
sources: []
related: ["Gradient Descent", "Activation Function", "Loss Function", "Backpropagation", "Overfitting", "CNN"]
schema_version: 4
---

# Neural Network

## Definition
A Neural Network (or Artificial Neural Network) is a computational model inspired by the structure and function of biological brains, consisting of interconnected layers of nodes (neurons) that process data, extract features, and learn representations through weighted connections.

## Explanation
A basic neural network consists of three main layer types:
1. **Input Layer**: Receives the initial raw data features.
2. **Hidden Layer(s)**: Intermediate layers that perform mathematical transformations to extract patterns.
3. **Output Layer**: Produces the final prediction or decision.

At each neuron, incoming values are multiplied by their corresponding **weights**, summed, combined with a **bias**, and then passed through an **activation function** to introduce non-linearity. During training, the network's prediction error is measured by a **loss function**, and the model parameters (weights and biases) are adjusted via **backpropagation** and **gradient descent** to minimize error.

## Related
- [[neural-network-moc|Neural Network MOC]]
- [[gradient-descent|Gradient Descent]]
- [[activation-function|Activation Function]]
- [[loss-function|Loss Function]]
- [[backpropagation|Backpropagation]]
- [[overfitting|Overfitting]]
- [[cnn|CNN]]

## Source
Original thought / General Machine Learning concepts.
