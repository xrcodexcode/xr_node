import { NoteMetadata, NoteDetail, CategoryInfo, TagInfo, KnowledgeGraphData, VaultStats } from '@/types/wiki';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

// Static Fallback Vault Data for zero-dependency client execution
const FALLBACK_NOTES: NoteDetail[] = [
  {
    id: 'ai-001',
    title: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    filePath: 'artificial-intelligence.md',
    type: 'moc',
    status: 'verified',
    created: '2026-08-01',
    modified: '2026-08-06',
    confidence: 98,
    ownerMoc: 'Artificial Intelligence',
    category: 'Artificial Intelligence',
    tags: ['ai', 'computer-science', 'foundational'],
    summary: 'Comprehensive map of Artificial Intelligence, spanning symbolic reasoning, statistical learning, deep architectures, and modern generative foundation models.',
    aliases: ['AI', 'Machine Intelligence'],
    sources: [{ title: 'Artificial Intelligence: A Modern Approach', url: 'https://aima.cs.berkeley.edu/' }],
    wordCount: 420,
    readingTimeMinutes: 3,
    forwardLinks: [
      { target: 'machine-learning', targetSlug: 'machine-learning', alias: 'machine-learning' },
      { target: 'deep-learning', targetSlug: 'deep-learning', alias: 'deep-learning' },
      { target: 'transformers', targetSlug: 'transformers', alias: 'transformers' },
      { target: 'neural-networks', targetSlug: 'neural-networks', alias: 'neural-networks' },
      { target: 'prompt-engineering', targetSlug: 'prompt-engineering', alias: 'prompt-engineering' },
      { target: 'vector-databases', targetSlug: 'vector-databases', alias: 'vector-databases' },
      { target: 'python', targetSlug: 'python', alias: 'python' }
    ],
    content: `# Artificial Intelligence

**Artificial Intelligence (AI)** is the multi-disciplinary domain of computer science concerned with constructing computational systems capable of performing tasks that historically required human cognitive abilities—such as visual perception, natural language understanding, automated reasoning, and decision-making under uncertainty.

> [!NOTE]
> AI systems have evolved from rule-based symbolic engines to statistical paradigms driven by large-scale [[deep-learning]] models trained on massive datasets.

---

## Key Paradigms of AI

### 1. Symbolic Reasoning & Heuristic Search
Early AI research focused on formal logic, state-space exploration, and rule-based expert systems ($P \\implies Q$).

### 2. Statistical Machine Learning
Rather than hardcoding explicit rules, [[machine-learning]] enables algorithms to infer patterns from data. Given input vector $X \\in \\mathbb{R}^d$ and target $Y$, the goal is to learn a mapping function:

$$ f_{\\theta}(X) \\approx Y $$

where $\\theta$ represents trainable model parameters.

### 3. Deep Learning & Foundation Models
Deep learning utilizes multi-layer [[neural-networks]] to construct hierarchical feature representations directly from raw inputs.

The modern paradigm centers on foundation models like [[transformers]], which form the backbone of state-of-the-art Large Language Models (LLMs).

---

## Core Pillars & Subfields

| Subfield | Core Focus | Key Technologies |
| :--- | :--- | :--- |
| **Natural Language Processing** | Text understanding & generation | [[transformers]], [[prompt-engineering]] |
| **Computer Vision** | Image recognition & synthesis | CNNs, Vision Transformers (ViT) |
| **Information Retrieval** | Semantic search & embedding lookup | [[vector-databases]], HNSW indices |
| **Software Implementation** | Production deployment & scripting | [[python]], [[java]] |

---

## Mathematical Formulation of Intelligence

Modern statistical AI frames intelligence as optimal decision-making under uncertainty, often modeled via Markov Decision Processes (MDP):

$$ M = \\langle \\mathcal{S}, \\mathcal{A}, \\mathcal{P}, \\mathcal{R}, \\gamma \\rangle $$

where the objective is finding a policy $\\pi(a|s)$ that maximizes expected cumulative discounted reward:

$$ J(\\pi) = \\mathbb{E}_{\\pi} \\left[ \\sum_{t=0}^{\\infty} \\gamma^t \\mathcal{R}(s_t, a_t) \\right] $$

---

## Code Example: Simple Inference Pipeline in Python

\`\`\`python
import numpy as np

def softmax(logits: np.ndarray) -> np.ndarray:
    """Computes stable softmax probabilities for AI model output."""
    exp_logits = np.exp(logits - np.max(logits, axis=-1, keepdims=True))
    return exp_logits / np.sum(exp_logits, axis=-1, keepdims=True)

# Example output logits from an LLM classifier
raw_logits = np.array([2.5, 1.0, 0.1, 4.2])
probabilities = softmax(raw_logits)
print(f"Prediction Probabilities: {np.round(probabilities, 4)}")
\`\`\`

---

## Connected Concepts

- [[machine-learning]] — The dominant empirical approach within AI.
- [[deep-learning]] — Multi-layered neural network architectures.
- [[transformers]] — The foundational self-attention architecture powering modern NLP.
- [[prompt-engineering]] — Methods for steering LLM reasoning and behavior.
- [[vector-databases]] — Storage infrastructure for AI embeddings.`,
    rawText: '',
    backlinks: [
      { sourceSlug: 'machine-learning', sourceTitle: 'Machine Learning', sourceSummary: 'Core principles of statistical learning...', contextSnippet: 'Part of the broader [[artificial-intelligence]] framework.', alias: 'artificial-intelligence' },
      { sourceSlug: 'deep-learning', sourceTitle: 'Deep Learning', sourceSummary: 'Hierarchical representation learning...', contextSnippet: 'Subfield of [[artificial-intelligence]].', alias: 'artificial-intelligence' },
      { sourceSlug: 'prompt-engineering', sourceTitle: 'Prompt Engineering', sourceSummary: 'Systematic techniques for crafting inputs...', contextSnippet: 'Interface for [[artificial-intelligence]] applications.', alias: 'artificial-intelligence' }
    ],
    relatedArticles: [
      { slug: 'machine-learning', title: 'Machine Learning', category: 'Machine Learning', summary: 'Core principles of statistical learning, supervised/unsupervised paradigms, loss optimization, and generalization bounds.', tags: ['machine-learning', 'algorithms'], sharedScore: 5 },
      { slug: 'deep-learning', title: 'Deep Learning', category: 'Deep Learning', summary: 'Hierarchical representation learning using multi-layer artificial neural networks.', tags: ['deep-learning', 'neural-networks'], sharedScore: 4 },
      { slug: 'transformers', title: 'Transformers', category: 'Deep Learning', summary: 'The self-attention sequence architecture powering modern large language models.', tags: ['transformers', 'nlp'], sharedScore: 3 },
      { slug: 'prompt-engineering', title: 'Prompt Engineering', category: 'Generative AI', summary: 'Systematic techniques for crafting inputs to structure, guide, and optimize LLM outputs.', tags: ['prompt-engineering', 'llm'], sharedScore: 3 }
    ]
  },
  {
    id: 'ml-002',
    title: 'Machine Learning',
    slug: 'machine-learning',
    filePath: 'machine-learning.md',
    type: 'atomic-note',
    status: 'verified',
    created: '2026-08-01',
    modified: '2026-08-06',
    confidence: 96,
    ownerMoc: 'Artificial Intelligence',
    category: 'Machine Learning',
    tags: ['machine-learning', 'algorithms', 'statistics'],
    summary: 'Core principles of statistical learning, supervised/unsupervised paradigms, loss optimization, and generalization bounds.',
    aliases: ['ML', 'Statistical Learning'],
    sources: [{ title: 'The Elements of Statistical Learning', url: 'https://hastie.su.domains/ElemStatLearn/' }],
    wordCount: 380,
    readingTimeMinutes: 2,
    forwardLinks: [
      { target: 'artificial-intelligence', targetSlug: 'artificial-intelligence', alias: 'artificial-intelligence' },
      { target: 'deep-learning', targetSlug: 'deep-learning', alias: 'deep-learning' },
      { target: 'neural-networks', targetSlug: 'neural-networks', alias: 'neural-networks' },
      { target: 'python', targetSlug: 'python', alias: 'python' }
    ],
    content: `# Machine Learning

**Machine Learning (ML)** is a core branch of [[artificial-intelligence]] that studies algorithms capable of improving their performance on a specific task through empirical experience $E$ with respect to task $T$ and performance measure $P$.

> [!IMPORTANT]
> The defining challenge of machine learning is **generalization**—achieving low error on unseen test samples drawn from the underlying distribution $\\mathcal{D}$, not merely memorizing training data.

---

## Taxonomies of Machine Learning

### 1. Supervised Learning
Given pairs $(x_i, y_i)_{i=1}^N \\sim \\mathcal{D}$, the model minimizes Empirical Risk:

$$ \\mathcal{R}_{\\text{emp}}(\\theta) = \\frac{1}{N} \\sum_{i=1}^N \\mathcal{L}(f_\\theta(x_i), y_i) $$

- **Classification**: Discrete output targets (e.g., Logistic Regression, Support Vector Machines).
- **Regression**: Continuous real-valued targets (e.g., Mean Squared Error minimization).

### 2. Unsupervised Learning
Discovers latent structural properties in unlabeled data $\{x_i\}_{i=1}^N$:
- **Clustering**: K-Means, DBSCAN.
- **Dimensionality Reduction**: Principal Component Analysis (PCA), t-SNE.

---

## Regularization & The Bias-Variance Tradeoff

The expected generalization error decomposes into three fundamental components:

$$ \\mathbb{E}\\left[(y - \\hat{f}(x))^2\\right] = \\text{Bias}[\\hat{f}(x)]^2 + \\text{Var}[\\hat{f}(x)] + \\sigma^2_{\\text{irreducible}} $$

\`\`\`python
import numpy as np

def ridge_regression(X: np.ndarray, y: np.ndarray, alpha: float = 1.0) -> np.ndarray:
    """Computes closed-form Ridge Regression weights with L2 regularization."""
    n_features = X.shape[1]
    identity = np.eye(n_features)
    identity[0, 0] = 0.0 # Exclude bias term
    return np.linalg.inv(X.T @ X + alpha * identity) @ X.T @ y

# Dummy data test
X = np.array([[1.0, 0.5], [1.0, 1.1], [1.0, 2.1]])
y = np.array([2.1, 3.4, 6.1])
theta = ridge_regression(X, y, alpha=0.1)
print(f"Learned Ridge Weights: {np.round(theta, 3)}")
\`\`\``,
    rawText: '',
    backlinks: [
      { sourceSlug: 'artificial-intelligence', sourceTitle: 'Artificial Intelligence', sourceSummary: 'Comprehensive map of AI...', contextSnippet: 'Rather than hardcoding rules, [[machine-learning]] enables algorithms to infer patterns.', alias: 'machine-learning' },
      { sourceSlug: 'deep-learning', sourceTitle: 'Deep Learning', sourceSummary: 'Hierarchical representation learning...', contextSnippet: 'Specialized subfield of [[machine-learning]].', alias: 'machine-learning' }
    ],
    relatedArticles: [
      { slug: 'artificial-intelligence', title: 'Artificial Intelligence', category: 'Artificial Intelligence', summary: 'Comprehensive map of Artificial Intelligence.', tags: ['ai', 'foundational'], sharedScore: 5 },
      { slug: 'deep-learning', title: 'Deep Learning', category: 'Deep Learning', summary: 'Hierarchical representation learning using multi-layer artificial neural networks.', tags: ['deep-learning'], sharedScore: 4 }
    ]
  },
  {
    id: 'dl-003',
    title: 'Deep Learning',
    slug: 'deep-learning',
    filePath: 'deep-learning.md',
    type: 'atomic-note',
    status: 'verified',
    created: '2026-08-01',
    modified: '2026-08-06',
    confidence: 97,
    ownerMoc: 'Artificial Intelligence',
    category: 'Deep Learning',
    tags: ['deep-learning', 'neural-networks', 'ai'],
    summary: 'Hierarchical representation learning using multi-layer artificial neural networks, backpropagation, and non-linear activation functions.',
    aliases: ['DL', 'Deep Neural Networks'],
    sources: [{ title: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/' }],
    wordCount: 410,
    readingTimeMinutes: 2,
    forwardLinks: [
      { target: 'machine-learning', targetSlug: 'machine-learning', alias: 'machine-learning' },
      { target: 'artificial-intelligence', targetSlug: 'artificial-intelligence', alias: 'artificial-intelligence' },
      { target: 'neural-networks', targetSlug: 'neural-networks', alias: 'neural-networks' },
      { target: 'transformers', targetSlug: 'transformers', alias: 'transformers' }
    ],
    content: `# Deep Learning

**Deep Learning (DL)** is a specialized subfield of [[machine-learning]] and [[artificial-intelligence]] based on artificial [[neural-networks]] with multi-layered representations.

> [!TIP]
> The expressive power of deep networks stems from the **Universal Approximation Theorem**, which states that feedforward networks with non-linear activations can approximate any continuous function.

---

## Backpropagation & Gradient Descent

Training deep models relies on backpropagation, calculating loss gradients via the chain rule:

$$ \\frac{\\partial \\mathcal{L}}{\\partial W^{(l)}} = \\frac{\\partial \\mathcal{L}}{\\partial a^{(l)}} \\cdot \\frac{\\partial a^{(l)}}{\\partial z^{(l)}} \\cdot \\frac{\\partial z^{(l)}}{\\partial W^{(l)}} $$

\`\`\`python
import torch
import torch.nn as nn

class DeepClassifier(nn.Module):
    def __init__(self, input_dim: int, hidden_dim: int, num_classes: int):
        super().__init__()
        self.network = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, num_classes)
        )
        
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.network(x)

model = DeepClassifier(784, 256, 10)
print("Model initialized successfully.")
\`\`\``,
    rawText: '',
    backlinks: [
      { sourceSlug: 'artificial-intelligence', sourceTitle: 'Artificial Intelligence', sourceSummary: 'Map of AI...', contextSnippet: 'Driven by large-scale [[deep-learning]] models.', alias: 'deep-learning' }
    ],
    relatedArticles: [
      { slug: 'neural-networks', title: 'Neural Networks', category: 'Deep Learning', summary: 'Computational networks modeled after biological neurons.', tags: ['neural-networks'], sharedScore: 5 },
      { slug: 'transformers', title: 'Transformers', category: 'Deep Learning', summary: 'The self-attention sequence architecture.', tags: ['transformers'], sharedScore: 4 }
    ]
  },
  {
    id: 'trans-005',
    title: 'Transformers',
    slug: 'transformers',
    filePath: 'transformers.md',
    type: 'atomic-note',
    status: 'verified',
    created: '2026-08-01',
    modified: '2026-08-06',
    confidence: 99,
    ownerMoc: 'Artificial Intelligence',
    category: 'Deep Learning',
    tags: ['transformers', 'nlp', 'attention', 'deep-learning'],
    summary: 'The self-attention sequence architecture powering modern large language models, vision transformers, and multimodal AI.',
    aliases: ['Transformer Architecture', 'Self-Attention'],
    sources: [{ title: 'Attention Is All You Need', url: 'https://arxiv.org/abs/1706.03762' }],
    wordCount: 450,
    readingTimeMinutes: 3,
    forwardLinks: [
      { target: 'neural-networks', targetSlug: 'neural-networks', alias: 'neural-networks' },
      { target: 'deep-learning', targetSlug: 'deep-learning', alias: 'deep-learning' },
      { target: 'prompt-engineering', targetSlug: 'prompt-engineering', alias: 'prompt-engineering' },
      { target: 'vector-databases', targetSlug: 'vector-databases', alias: 'vector-databases' }
    ],
    content: `# Transformers

The **Transformer** is a deep learning architecture introduced by Vaswani et al. (2017) that relies entirely on self-attention mechanisms to model global dependencies between input tokens without recurrent operations.

---

## Scaled Dot-Product Attention

Given Query ($Q$), Key ($K$), and Value ($V$) matrices of dimension $d_k$:

$$ \\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{Q K^T}{\\sqrt{d_k}} \\right) V $$

\`\`\`python
import torch
import math

def attention(q, k, v):
    d_k = q.size(-1)
    scores = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(d_k)
    weights = torch.softmax(scores, dim=-1)
    return torch.matmul(weights, v)

q = k = v = torch.randn(1, 4, 64)
out = attention(q, k, v)
print(f"Attention Tensor Shape: {out.shape}")
\`\`\``,
    rawText: '',
    backlinks: [
      { sourceSlug: 'artificial-intelligence', sourceTitle: 'Artificial Intelligence', sourceSummary: 'Map of AI...', contextSnippet: 'Foundation models like [[transformers]] form the backbone of modern LLMs.', alias: 'transformers' },
      { sourceSlug: 'prompt-engineering', sourceTitle: 'Prompt Engineering', sourceSummary: 'Crafting inputs...', contextSnippet: 'Language models based on [[transformers]].', alias: 'transformers' }
    ],
    relatedArticles: [
      { slug: 'deep-learning', title: 'Deep Learning', category: 'Deep Learning', summary: 'Hierarchical representation learning.', tags: ['deep-learning'], sharedScore: 5 },
      { slug: 'vector-databases', title: 'Vector Databases', category: 'Database Systems', summary: 'Specialized storage for vector embeddings.', tags: ['vector-databases'], sharedScore: 4 }
    ]
  },
  {
    id: 'vdb-006',
    title: 'Vector Databases',
    slug: 'vector-databases',
    filePath: 'vector-databases.md',
    type: 'atomic-note',
    status: 'verified',
    created: '2026-08-01',
    modified: '2026-08-06',
    confidence: 97,
    ownerMoc: 'Artificial Intelligence',
    category: 'Database Systems',
    tags: ['vector-databases', 'search', 'index', 'ai'],
    summary: 'Specialized data storage optimized for high-dimensional vector embeddings, approximate nearest neighbor (ANN) search, and RAG architectures.',
    aliases: ['Vector Search Engines', 'Embedding Databases'],
    sources: [{ title: 'HNSW Graphs (Malkov & Yashunin)', url: 'https://arxiv.org/abs/1603.09320' }],
    wordCount: 390,
    readingTimeMinutes: 2,
    forwardLinks: [
      { target: 'deep-learning', targetSlug: 'deep-learning', alias: 'deep-learning' },
      { target: 'transformers', targetSlug: 'transformers', alias: 'transformers' },
      { target: 'prompt-engineering', targetSlug: 'prompt-engineering', alias: 'prompt-engineering' },
      { target: 'python', targetSlug: 'python', alias: 'python' }
    ],
    content: `# Vector Databases

A **Vector Database** is a specialized database system designed to index, store, and query high-dimensional vector embeddings generated by [[deep-learning]] and [[transformers]] models.

---

## Cosine Distance Formula

$$ \\text{Cosine Similarity} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|} = \\frac{\\sum_{i=1}^d u_i v_i}{\\sqrt{\\sum u_i^2} \\sqrt{\\sum v_i^2}} $$

\`\`\`python
import numpy as np

def cosine_similarity(u, v):
    return np.dot(u, v) / (np.linalg.norm(u) * np.linalg.norm(v) + 1e-9)

vec1 = np.array([0.1, 0.8, 0.4])
vec2 = np.array([0.2, 0.7, 0.5])
print(f"Similarity: {cosine_similarity(vec1, vec2):.4f}")
\`\`\``,
    rawText: '',
    backlinks: [
      { sourceSlug: 'prompt-engineering', sourceTitle: 'Prompt Engineering', sourceSummary: 'Crafting inputs...', contextSnippet: 'Query dense index in [[vector-databases]].', alias: 'vector-databases' }
    ],
    relatedArticles: [
      { slug: 'transformers', title: 'Transformers', category: 'Deep Learning', summary: 'Self-attention sequence architecture.', tags: ['transformers'], sharedScore: 5 },
      { slug: 'prompt-engineering', title: 'Prompt Engineering', category: 'Generative AI', summary: 'Systematic input techniques.', tags: ['prompt-engineering'], sharedScore: 4 }
    ]
  },
  {
    id: 'prompt-007',
    title: 'Prompt Engineering',
    slug: 'prompt-engineering',
    filePath: 'prompt-engineering.md',
    type: 'atomic-note',
    status: 'verified',
    created: '2026-08-01',
    modified: '2026-08-06',
    confidence: 94,
    ownerMoc: 'Artificial Intelligence',
    category: 'Generative AI',
    tags: ['prompt-engineering', 'llm', 'generative-ai'],
    summary: 'Systematic techniques for crafting inputs to structure, guide, and optimize output generation from Large Language Models.',
    aliases: ['In-Context Learning'],
    sources: [{ title: 'Chain-of-Thought Prompting', url: 'https://arxiv.org/abs/2201.11903' }],
    wordCount: 360,
    readingTimeMinutes: 2,
    forwardLinks: [
      { target: 'transformers', targetSlug: 'transformers', alias: 'transformers' },
      { target: 'vector-databases', targetSlug: 'vector-databases', alias: 'vector-databases' },
      { target: 'python', targetSlug: 'python', alias: 'python' }
    ],
    content: `# Prompt Engineering

**Prompt Engineering** is the discipline of designing, refining, and structuring textual inputs ("prompts") to steer Large Language Models based on [[transformers]] toward accurate, deterministic responses.

---

## Chain-of-Thought Formulation

$$ \\text{Prompt} \\implies \\text{Reasoning Steps } (r_1, r_2, \\dots, r_k) \\implies \\text{Final Answer } Y $$`,
    rawText: '',
    backlinks: [
      { sourceSlug: 'artificial-intelligence', sourceTitle: 'Artificial Intelligence', sourceSummary: 'Map of AI...', contextSnippet: 'Text understanding & generation via [[prompt-engineering]].', alias: 'prompt-engineering' }
    ],
    relatedArticles: [
      { slug: 'transformers', title: 'Transformers', category: 'Deep Learning', summary: 'Self-attention architecture.', tags: ['transformers'], sharedScore: 5 }
    ]
  },
  {
    id: 'py-008',
    title: 'Python',
    slug: 'python',
    filePath: 'python.md',
    type: 'atomic-note',
    status: 'verified',
    created: '2026-08-01',
    modified: '2026-08-06',
    confidence: 99,
    ownerMoc: 'Software Engineering',
    category: 'Programming Languages',
    tags: ['python', 'programming', 'software-engineering'],
    summary: 'High-level interpreted language renowned for data science, AI model development, concise syntax, and rich library ecosystem.',
    aliases: ['Python 3'],
    sources: [{ title: 'Python Docs', url: 'https://docs.python.org/3/' }],
    wordCount: 350,
    readingTimeMinutes: 2,
    forwardLinks: [
      { target: 'machine-learning', targetSlug: 'machine-learning', alias: 'machine-learning' },
      { target: 'deep-learning', targetSlug: 'deep-learning', alias: 'deep-learning' },
      { target: 'transformers', targetSlug: 'transformers', alias: 'transformers' },
      { target: 'vector-databases', targetSlug: 'vector-databases', alias: 'vector-databases' }
    ],
    content: `# Python

**Python** is a dynamically typed, high-level programming language that serves as the lingua franca of scientific computing, [[machine-learning]], and modern [[artificial-intelligence]] engineering.`,
    rawText: '',
    backlinks: [
      { sourceSlug: 'java', sourceTitle: 'Java', sourceSummary: 'JVM platform...', contextSnippet: 'Complements scientific modeling in [[python]].', alias: 'python' }
    ],
    relatedArticles: [
      { slug: 'java', title: 'Java', category: 'Programming Languages', summary: 'High-performance JVM language.', tags: ['java'], sharedScore: 5 }
    ]
  },
  {
    id: 'java-009',
    title: 'Java',
    slug: 'java',
    filePath: 'java.md',
    type: 'atomic-note',
    status: 'verified',
    created: '2026-08-01',
    modified: '2026-08-06',
    confidence: 97,
    ownerMoc: 'Software Engineering',
    category: 'Programming Languages',
    tags: ['java', 'backend', 'object-oriented'],
    summary: 'High-performance statically typed, class-based object-oriented programming language powered by the Java Virtual Machine (JVM).',
    aliases: ['JVM'],
    sources: [{ title: 'Effective Java', url: 'https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/' }],
    wordCount: 340,
    readingTimeMinutes: 2,
    forwardLinks: [
      { target: 'vector-databases', targetSlug: 'vector-databases', alias: 'vector-databases' },
      { target: 'python', targetSlug: 'python', alias: 'python' }
    ],
    content: `# Java

**Java** is a strongly typed, object-oriented programming language designed for platform independence ("Write Once, Run Anywhere") via bytecode execution on the **Java Virtual Machine (JVM)**.`,
    rawText: '',
    backlinks: [
      { sourceSlug: 'python', sourceTitle: 'Python', sourceSummary: 'Data science language...', contextSnippet: 'Interfaces with native engines like [[java]].', alias: 'java' }
    ],
    relatedArticles: [
      { slug: 'python', title: 'Python', category: 'Programming Languages', summary: 'High-level interpreted language.', tags: ['python'], sharedScore: 5 }
    ]
  },
  {
    id: 'nn-004',
    title: 'Neural Networks',
    slug: 'neural-networks',
    filePath: 'neural-networks.md',
    type: 'atomic-note',
    status: 'verified',
    created: '2026-08-01',
    modified: '2026-08-06',
    confidence: 95,
    ownerMoc: 'Artificial Intelligence',
    category: 'Deep Learning',
    tags: ['neural-networks', 'deep-learning', 'architecture'],
    summary: 'Computational networks modeled after biological neurons, consisting of activation units, weights, biases, and backpropagation.',
    aliases: ['ANN', 'Perceptron'],
    sources: [{ title: 'Neural Networks and Learning Machines', url: 'https://www.pearson.com/' }],
    wordCount: 370,
    readingTimeMinutes: 2,
    forwardLinks: [
      { target: 'deep-learning', targetSlug: 'deep-learning', alias: 'deep-learning' },
      { target: 'transformers', targetSlug: 'transformers', alias: 'transformers' }
    ],
    content: `# Neural Networks

An **Artificial Neural Network (ANN)** is a parallel computational framework composed of interconnected nodes ("neurons") that transmit signals to perform non-linear mathematical transformations.

---

## GELU Activation Function

$$ \\text{GELU}(x) = x \\Phi(x) \\approx 0.5x \\left( 1 + \\tanh\\left(\\sqrt{\\frac{2}{\\pi}} \\left(x + 0.044715 x^3\\right)\\right)\\right) $$`,
    rawText: '',
    backlinks: [
      { sourceSlug: 'deep-learning', sourceTitle: 'Deep Learning', sourceSummary: 'Hierarchical learning...', contextSnippet: 'Based on artificial [[neural-networks]].', alias: 'neural-networks' }
    ],
    relatedArticles: [
      { slug: 'deep-learning', title: 'Deep Learning', category: 'Deep Learning', summary: 'Hierarchical representation learning.', tags: ['deep-learning'], sharedScore: 5 }
    ]
  },
  {
    id: 'pkm-010',
    title: 'Personal Knowledge Management',
    slug: 'personal-knowledge-management',
    filePath: 'personal-knowledge-management.md',
    type: 'moc',
    status: 'verified',
    created: '2026-08-01',
    modified: '2026-08-06',
    confidence: 99,
    ownerMoc: 'Personal Knowledge Management',
    category: 'Knowledge Systems',
    tags: ['pkm', 'zettelkasten', 'second-brain', 'productivity'],
    summary: 'Methodologies for capturing, structuring, connecting, and retrieving atomic notes to build a lifelong digital second brain.',
    aliases: ['PKM', 'Second Brain', 'Zettelkasten'],
    sources: [{ title: 'How to Take Smart Notes', url: 'https://smartnotes.soenkeahrens.de/' }],
    wordCount: 400,
    readingTimeMinutes: 2,
    forwardLinks: [
      { target: 'artificial-intelligence', targetSlug: 'artificial-intelligence', alias: 'artificial-intelligence' },
      { target: 'machine-learning', targetSlug: 'machine-learning', alias: 'machine-learning' },
      { target: 'python', targetSlug: 'python', alias: 'python' }
    ],
    content: `# Personal Knowledge Management

**Personal Knowledge Management (PKM)** is the practice of systematically capturing, organizing, synthesizing, and retrieving personal information, insights, and mental models using atomic notes and graph connections.`,
    rawText: '',
    backlinks: [],
    relatedArticles: [
      { slug: 'artificial-intelligence', title: 'Artificial Intelligence', category: 'Artificial Intelligence', summary: 'Map of AI.', tags: ['ai'], sharedScore: 3 }
    ]
  }
];

export async function fetchNotes(params?: { category?: string; tag?: string; q?: string }): Promise<NoteMetadata[]> {
  try {
    const url = new URL(`${API_BASE_URL}/notes`);
    if (params?.category) url.searchParams.append('category', params.category);
    if (params?.tag) url.searchParams.append('tag', params.tag);
    if (params?.q) url.searchParams.append('q', params.q);

    const res = await fetch(url.toString(), { cache: 'no-store' });
    if (!res.ok) throw new Error('API offline');
    return await res.json();
  } catch {
    // Fallback logic
    let notes = FALLBACK_NOTES.map(({ content, rawText, backlinks, relatedArticles, ...meta }) => meta);
    if (params?.category) {
      notes = notes.filter(n => n.category.toLowerCase() === params.category!.toLowerCase());
    }
    if (params?.tag) {
      notes = notes.filter(n => n.tags.map(t => t.toLowerCase()).includes(params.tag!.toLowerCase()));
    }
    if (params?.q) {
      const q = params.q.toLowerCase();
      notes = notes.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return notes;
  }
}

export async function fetchNoteBySlug(slug: string): Promise<NoteDetail | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/notes/${slug}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Note not found');
    return await res.json();
  } catch {
    const found = FALLBACK_NOTES.find(n => n.slug.toLowerCase() === slug.toLowerCase());
    return found || null;
  }
}

export async function saveNoteContent(slug: string, content: string, title?: string): Promise<NoteDetail> {
  try {
    const res = await fetch(`${API_BASE_URL}/notes/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, title }),
    });
    if (!res.ok) throw new Error('Failed to save');
    return await res.json();
  } catch {
    const found = FALLBACK_NOTES.find(n => n.slug.toLowerCase() === slug.toLowerCase());
    if (found) {
      found.content = content;
      found.modified = new Date().toISOString().split('T')[0];
      return found;
    }
    const newNote: NoteDetail = {
      id: `note-${slug}`,
      title: title || slug.replace(/-/g, ' '),
      slug,
      filePath: `${slug}.md`,
      type: 'atomic-note',
      status: 'active',
      created: new Date().toISOString().split('T')[0],
      modified: new Date().toISOString().split('T')[0],
      confidence: 90,
      category: 'General',
      tags: ['knowledge'],
      summary: content.slice(0, 160),
      aliases: [],
      wordCount: content.split(/\s+/).length,
      readingTimeMinutes: 2,
      forwardLinks: [],
      content,
      rawText: content,
      backlinks: [],
      relatedArticles: []
    };
    FALLBACK_NOTES.push(newNote);
    return newNote;
  }
}

export async function fetchCategories(): Promise<CategoryInfo[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Offline');
    return await res.json();
  } catch {
    const catsMap: Record<string, any[]> = {};
    FALLBACK_NOTES.forEach(n => {
      if (!catsMap[n.category]) catsMap[n.category] = [];
      catsMap[n.category].push({ slug: n.slug, title: n.title, summary: n.summary });
    });
    return Object.entries(catsMap).map(([name, articles]) => ({ name, count: articles.length, articles }));
  }
}

export async function fetchTags(): Promise<TagInfo[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/tags`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Offline');
    return await res.json();
  } catch {
    const tagsMap: Record<string, any[]> = {};
    FALLBACK_NOTES.forEach(n => {
      n.tags.forEach(t => {
        if (!tagsMap[t]) tagsMap[t] = [];
        tagsMap[t].push({ slug: n.slug, title: n.title, summary: n.summary });
      });
    });
    return Object.entries(tagsMap).map(([name, articles]) => ({ name, count: articles.length, articles }));
  }
}

export async function fetchGraphData(): Promise<KnowledgeGraphData> {
  try {
    const res = await fetch(`${API_BASE_URL}/graph`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Offline');
    return await res.json();
  } catch {
    const nodes = FALLBACK_NOTES.map(n => ({
      id: n.slug,
      title: n.title,
      category: n.category,
      type: n.type,
      val: 1 + n.forwardLinks.length + (n.backlinks?.length || 0)
    }));
    const edges: Array<{ source: string; target: string; label: string }> = [];
    FALLBACK_NOTES.forEach(n => {
      n.forwardLinks.forEach(link => {
        edges.push({ source: n.slug, target: link.targetSlug, label: link.alias });
      });
    });
    return { nodes, edges };
  }
}

export async function fetchVaultStats(): Promise<VaultStats> {
  try {
    const res = await fetch(`${API_BASE_URL}/stats`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Offline');
    return await res.json();
  } catch {
    const totalWords = FALLBACK_NOTES.reduce((acc, n) => acc + n.wordCount, 0);
    const totalLinks = FALLBACK_NOTES.reduce((acc, n) => acc + n.forwardLinks.length, 0);
    return {
      totalNotes: FALLBACK_NOTES.length,
      totalWords,
      totalLinks,
      totalCategories: 5,
      totalTags: 18,
      avgReadingTimeMinutes: 2,
      lastIndexed: new Date().toISOString()
    };
  }
}
