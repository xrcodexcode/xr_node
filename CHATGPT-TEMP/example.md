# Folder: .antigravity/examples

## File: examples\bad-atomic-note.md

```markdown
---
title: Gradient descent notes
tags:
  - ml
  - concept
  - book
# Bad: Missing id (UUID)
# Bad: type 'concept' is legacy and not approved (should be atomic-note)
# Bad: status 'evergreen' is legacy (should be evergreen-note or atomic-note)
# Bad: tags contain legacy type tags (ml, concept, book) instead of only discovery tags
# Bad: Missing schema_version property
# Bad: Missing owner_moc field
---

# Gradient descent notes

This is my note on gradient descent and backpropagation.

## What is it?
It's how neural nets learn. Backprop calculates gradients, and GD updates weights.

## Learning rate
You need a good learning rate or it blows up.

# Bad: Contains multiple distinct ideas (Gradient Descent + Backpropagation)
# Bad: Missing claim/definition section
# Bad: Missing related nodes section
# Bad: Missing source quotes or provenance details
# Bad: Uses informal tags and headers
```

---

## File: examples\good-atomic-note.md

```markdown
---
id: 9a70659f-d336-47b2-a4e3-6a9c1404ea57
title: Gradient Descent
type: atomic-note
status: linked
domain: ml
source_type: paper
created: 2026-07-18
updated: 2026-07-18
review: 2026-10-16
confidence: 98
version: 1
aliases:
  - steepest descent
tags:
  - beginner
  - implementation
owner_moc: Machine Learning MOC
sources:
  - 01_RAW/SOURCE/intro-to-ml.md
related:
  - Learning Rate
schema_version: 3
---

# Gradient Descent

## Claim
Gradient descent is an optimization algorithm used to minimize a loss function by iteratively moving in the direction of steepest descent.

## Explanation
In machine learning, we use gradient descent to find the model parameters (weights) that yield the lowest loss value. At each iteration, the gradient of the loss function is calculated with respect to the parameters. The parameters are then updated by subtracting the product of the learning rate and the gradient:

\[\theta_{new} = \theta_{old} - \alpha \nabla L(\theta)\]

A small learning rate results in slow convergence, while a large learning rate can cause the algorithm to overshoot the minimum.

## Related
- [[Learning Rate]] — controls update step size
- [[Loss Function]] — optimization objective

## Source
> "Gradient descent is the standard method for training deep neural networks. It moves weights in the opposite direction of the gradient of the loss."
> — *Intro to Machine Learning*, p. 45
```

---

## File: examples\ideal-moc.md

```markdown
---
id: a8d5e86b-a8d2-430b-ab7d-9477e3845b4c
title: Machine Learning MOC
type: moc
status: curated
domain: ml
source_type: null
created: 2026-07-18
updated: 2026-07-18
review: 2026-10-16
confidence: 100
version: 1
aliases: []
tags:
  - reference
owner_moc: null
sources: []
related: []
schema_version: 3
---

# Machine Learning MOC

## Overview
This Map of Content acts as the navigation hub for concepts, methods, and algorithms within machine learning and numerical optimization.

## Core Nodes
- [[Gradient Descent]] — primary optimization technique
- [[Learning Rate]] — controlled step size
- [[Loss Function]] — definition of objective errors
- [[Backpropagation]] — calculation of parameter gradients

## Related MOCs
- [[Artificial Intelligence MOC]] — parent domain MOC
- [[Statistics MOC]] — mathematical foundations
```

---

## File: examples\merged-note.md

```markdown
---
id: bce43818-f29e-4e4b-9721-a3d8b2d18471
title: Steepest Descent (Merged)
type: atomic-note
status: archived
domain: ml
source_type: paper
created: 2026-07-18
updated: 2026-07-18
review: null
confidence: 100
version: 2
aliases:
  - steepest gradient descent
tags:
  - history
owner_moc: Machine Learning MOC
sources:
  - 01_RAW/SOURCE/intro-to-ml.md
related:
  - Gradient Descent
schema_version: 3
---

# Steepest Descent (Merged)

> [!NOTE]
> This note has been merged into [[Gradient Descent]] to prevent graph duplication. All unique content and references have been consolidated in the target node.

## Original Content Archive
Steepest descent is another term for gradient descent when optimizing functions in Euclidean spaces. It updates weights in the negative gradient direction:
\[x_{k+1} = x_k - \gamma_k \nabla f(x_k)\]
This is mathematically equivalent to standard Euclidean gradient descent.
```

---

## File: examples\perfect-source.md

```markdown
---
id: a8d5e86b-a8d2-430b-ab7d-9477e3845cde
title: Introduction to Machine Learning
type: raw-source
status: captured
domain: ml
source_type: book
created: 2026-07-18
updated: 2026-07-18
review: 2026-10-16
confidence: 100
version: 1
aliases: []
tags:
  - reference
owner_moc: null
sources: []
related: []
origin_path: C:\Users\offic\Downloads\intro-to-ml.pdf
captured_at: 2026-07-18
processed_at: null
ingested_at: null
linked_notes: []
disposition: pending
schema_version: 3
---

# Introduction to Machine Learning

## Metadata
- **Author**: John Doe
- **Year**: 2024
- **Publisher**: Tech Press

## Chapter 3: Optimization

Gradients form the foundation of model learning. Let's outline the core update equation:
> "Gradient descent is the standard method for training deep neural networks. It moves weights in the opposite direction of the gradient of the loss." (Page 45)

The size of the adjustment is governed by the learning rate:
> "Selecting a learning rate is critical: too large causes oscillations, too small leads to slow training." (Page 47)
```

---

