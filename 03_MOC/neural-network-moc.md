---
id: d159ff9a-5318-4141-950b-4eae7a7cfe81
title: Neural Network Map of Content
type: moc
status: curated
domain: ai
created: 2026-07-20
updated: 2026-07-20
review: null
confidence: 100
version: 1
aliases: ["Neural Networks MOC"]
tags: [reference]
owner_moc: null
sources: []
related: []
relations: []
schema_version: 4
parent_moc: 🤖 AI & Machine Learning Map of Content
moc_level: topic
---

# Neural Network Map of Content

## Overview
This Map of Content (MOC) indexes the core concepts and techniques related to neural networks and deep learning. It details the fundamental building blocks (activation and loss functions), optimization techniques (gradient descent and backpropagation), network variants (CNN), and training phenomena (overfitting).

## Conceptual Architecture

```mermaid
graph TD
    nn["[[neural-network|Neural Network]]"] --> gd["[[gradient-descent|Gradient Descent]]"]
    nn --> af["[[activation-function|Activation Function]]"]
    nn --> lf["[[loss-function|Loss Function]]"]
    nn --> bp["[[backpropagation|Backpropagation]]"]
    nn --> cnn["[[cnn|CNN]]"]
    nn --> of["[[overfitting|Overfitting]]"]
```

## Core Nodes
- [[neural-network|Neural Network]] — Central concept and network architecture
- [[gradient-descent|Gradient Descent]] — Weight optimization algorithm
- [[activation-function|Activation Function]] — Introduction of non-linearity
- [[loss-function|Loss Function]] — Discrepancy measurement
- [[backpropagation|Backpropagation]] — Gradient calculation algorithm
- [[overfitting|Overfitting]] — Generalization error handling
- [[cnn|CNN]] — Spatial grid-structured neural network

## Related MOCs
- [[ai-ml-moc|🤖 AI & Machine Learning MOC]]
- [[prompt-engineering-moc|🧠 Prompt Engineering MOC]]
- [[tools-moc|🛠️ Tools MOC]]
