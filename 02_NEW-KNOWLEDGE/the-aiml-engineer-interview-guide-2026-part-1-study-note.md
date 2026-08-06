---
id: 550e8400-e29b-41d4-a716-446655440001
title: "The AI/ML Engineer Interview Guide for 2026 - Part 1 Study Note"
type: literature-note
status: learning
domain: ai
source_type: article
author: "Tech with Mak (@thecuriousmak)"
created: 2026-08-06
updated: 2026-08-06
review: 2026-11-06
confidence: 95
version: 1
aliases:
  - "AI ML Engineer Interview Guide 2026 Part 1"
  - "The Curious Mak Interview Guide Part 1"
tags:
  - article
  - ai
  - ml
  - llm
  - reference
owner_moc: 🤖 AI & Machine Learning Map of Content
sources:
  - 01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1.md
related:
  - [[NODES/FlashAttention]]
  - [[NODES/Rotary Positional Embedding]]
  - [[NODES/Direct Preference Optimization]]
  - [[NODES/Group Relative Policy Optimization]]
  - [[NODES/Multimodal RAG Architecture]]
  - [[NODES/Model Calibration and Reliability]]
  - [[NODES/Target Encoding Data Leakage]]
schema_version: 4
---

# 📖 The AI/ML Engineer Interview Guide for 2026 - Part 1 Study Note

> **Author**: Tech with Mak (@thecuriousmak)  
> **Source Type**: Substack Newsletter Article  
> **Canonical URL**: https://thecuriousmak.substack.com/p/the-aiml-engineer-interview-guide  
> **Source Capture**: [[01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1|Raw Capture]]  

![The AI/ML Engineer Interview Guide for 2026 - Part 1 Header](https://substack-post-media.s3.amazonaws.com/public/images/3797e221-46ba-4da7-b331-847e705c2563_1983x793.png)

---

## 📖 Executive Summary & Scope

This study note provides an exhaustive synthesis of Part 1 of Tech with Mak's 2026 AI/ML Engineer Interview Guide. Modern AI/ML interview loops no longer evaluate candidates solely on classic supervised learning or basic deep learning. Instead, interview loops now test a spectrum spanning classical ML, statistical rigor, LLM mechanics, multimodal architectures, parameter-efficient fine-tuning (PEFT), preference optimization (RLHF/DPO/GRPO), and context engineering.

Part 1 addresses **Models, Mathematics, and Training**, laying the technical foundations for 7 core AI/ML sub-roles. Part 2 addresses the surrounding production system (RAG, Agents, Evals, Test-Time Compute, Safety, LLMOps, and System Design).

---

## 📌 Detailed Section Breakdown

### 1. Role Identification & Specialized Interview Loops
"AI/ML Engineer" is too broad to describe one interview format. Candidates must identify the real job target:
- **Classical ML Engineer**: Evaluated on supervised algorithms (GBDT, Random Forests), ranking, recommendation systems, fraud detection, feature engineering, monitoring, and tabular system design.
- **Applied Scientist**: Evaluated on statistical depth, hypothesis testing, causal inference, experimental design, metric definition, and modeling assumptions.
- **LLM Application Engineer**: Evaluated on prompt engineering, context management, RAG pipelines, LLM routing, latency/cost trade-offs, and failure modes.
- **Agent Engineer**: Evaluated on tool orchestration, agent memory, planning loops, termination criteria, permissions, guardrails, and observability.
- **Multimodal Engineer**: Evaluated on Vision-Language Models (VLMs), CLIP contrastive retrieval, document AI, OCR, audio/video modeling, and visual grounding.
- **ML Infrastructure / Inference Engineer**: Evaluated on GPU serving, KV-caching, quantization (AWQ/FP8), FlashAttention, batching (vLLM), distributed training, and serving reliability.
- **Research Engineer**: Evaluated on model architecture details, pretraining pipelines, fine-tuning, post-training algorithms, evaluation design, and custom training dynamics.

---

### 2. Classical Machine Learning

#### Bias and Variance Tradeoff
- **Underfitting (High Bias)**: The model is insufficiently expressive to capture data structure, resulting in high training and validation error.
  - *Remediations*: Engineer higher-quality features, select a more expressive architecture, decrease regularization penalties, optimize learning rate/optimizers, or obtain cleaner training signals.
- **Overfitting (High Variance)**: The model memorizes training noise, resulting in low training error but high validation error.
  - *Remediations*: Apply stronger L1/L2 regularization, reduce model capacity, use representative time-based validation splits, enforce early stopping, ensemble models, or prune leaky features.

#### Random Forests vs. Gradient-Boosted Trees (GBDT)
- **Random Forests**: Bagging ensemble that trains decision trees independently over bootstrap samples and random feature subsets. Aggregates via voting/averaging; highly robust to noise and outliers.
- **Gradient Boosting (XGBoost, LightGBM, CatBoost)**: Boosting ensemble that trains trees sequentially to fit pseudo-residuals (negative loss gradients) of the current ensemble. State-of-the-art for tabular data, but risks severe overfitting when trees are too deep, learning rates are high, or rare categorical IDs are memorized.

#### Overfitting Diagnosis & Remediation Scenario (CTR Prediction: Train AUC 0.93 vs. Val AUC 0.78)
1. **Split Audit**: Ensure time-based splitting is used for temporal data (ads, recsys, fraud) to prevent future data leakage into the past.
2. **Target Encoding Leakage**: High-cardinality features (e.g., `campaign_id`) target-encoded without out-of-fold or time-aware statistics leak validation labels. Apply smoothing and out-of-fold calculation.
3. **Rare Categorical IDs**: Apply minimum frequency thresholds, feature hashing, categorical grouping, or regularized embeddings.
4. **Tree Complexity**: Reduce max depth, increase min child weight, lower learning rate, apply row/column subsampling, and enforce early stopping.
5. **Signal Verification**: Perform feature ablations, segment calibration checks, and test on realistic holdout sets.

#### Class Imbalance & Operating Thresholds
- Accuracy is misleading in rare-event settings (e.g., 0.1% fraud).
- ROC-AUC measures ranking ability across all thresholds, but does not specify performance at the actual operational threshold.
- Evaluate Precision, Recall, PR-AUC, and F-beta score. Select thresholds based on asymmetric business costs (False Positive investigation cost vs. False Negative fraud loss).

#### Calibration and Reliable Probabilities
- **Discrimination**: Ability to rank positive instances above negative instances (measured by ROC-AUC/PR-AUC).
- **Calibration**: Degree to which predicted confidence scores match empirical event frequencies ($P(\hat{y}=1) = y$).
- **Metrics**: Reliability Diagrams, Brier Score ($BS = \frac{1}{N}\sum(f_i-o_i)^2$), Log Loss, Expected Calibration Error (ECE).
- **Post-Hoc Methods**:
  - *Temperature Scaling*: Rescales logits using scalar parameter $T$.
  - *Platt Scaling*: Fits a logistic sigmoid mapping.
  - *Isotonic Regression*: Non-parametric monotonic mapping.
- **Drift**: Calibration degrades under distribution shift (prevalence changes, user behavior drift, sensor noise).

#### Feature Engineering & Leakage
- Features must satisfy **point-in-time correctness** (available at prediction time).
- Prevent target encoding leakage via out-of-fold and time-aware statistics.

---

### 3. Statistics and Experimentation

- **Confidence Intervals**: A 95% confidence interval is a frequentist coverage interval; it does not mean a fixed parameter has a 95% probability of residing within one computed interval.
- **p-values**: Measures the probability of observing data as extreme as observed assuming the null hypothesis is true; it is not the probability that the null hypothesis is true.
- **Statistical Power & Sample Size**: Power ($1-\beta$) is the probability of detecting a real effect. Underpowered tests miss real wins. Testing multiple metrics without correction (Bonferroni, FDR) inflates Type I false positive rates.
- **Online vs. Offline Metric Mismatch**: Offline NDCG/AUC gains may fail online due to Simpson's paradox, novelty effects, selection bias, or guardrail metric violations.

![Classical Machine Learning and Statistics Visual Recap](https://substack-post-media.s3.amazonaws.com/public/images/fb151920-156b-4f46-8434-541d1e0fdfaa_1402x1075.png)

---

### 4. LLM Fundamentals

#### Subword Tokenization Dynamics
- **Vocabulary Size Trade-offs**: Small vocabs produce longer token sequences (increasing $O(N^2)$ self-attention compute); large vocabs reduce sequence lengths but inflate embedding and LM head memory.
- **Cross-Lingual & Code Impacts**: Subwords fragment non-English text and code differently, impacting cost, latency, and context window efficiency.

#### Self-Attention & FlashAttention
- Standard self-attention requires materializing $N \times N$ attention matrices in GPU High Bandwidth Memory (HBM), scaling quadratically $O(N^2)$ in memory and compute.
- **FlashAttention**: Reorganizes attention computation using GPU SRAM tiling and online softmax re-scaling. Reduces HBM read/write IO bottlenecks, achieving linear memory scaling without approximating attention scores.

#### Positional Embeddings & Long Context
- **Rotary Positional Embedding (RoPE)**: Applies position-dependent rotation matrices to Query and Key vectors in 2D subspaces, naturally conferring relative position decay to dot-product attention.
- **Context Scaling**: Techniques like Position Interpolation, YaRN, and LongRoPE adjust rotational frequencies to extrapolate context windows.
- **Effective Context**: Context window size $\neq$ effective utilization. Models suffer from "Needle in a Haystack" degradation and "Lost in the Middle" bias.

---

### 5. Multimodal AI Systems

- **Vision-Language Model (VLM) Architecture**: Visual Encoder (ViT) + Projection Connector (MLP/Cross-Attention) + LLM. Compression across alignment leads to information loss (fine text, layout, small objects, counts).
- **CLIP Dual-Encoder Retrieval**: Aligns separate image and text encoders into a shared embedding space using contrastive loss. Excellent for zero-shot search, but lacks spatial, layout, OCR, and granular object detail.
- **Multimodal RAG**: Combines page-image renderings, document layout parsers, OCR text extraction, visual feature vectors, and VLM generation to answer queries over complex diagrams, tables, and forms.
- **Audio & Video Systems**:
  - *Audio*: Processes waveforms/spectrograms, diarization, background noise. Word Error Rate (WER) does not capture semantic domain correctness.
  - *Video*: Temporal dimension. Requires frame sampling, motion representation, scene segmentation, and timestamped retrieval.
- **Multimodal Fine-Tuning**: Strategies include freezing encoders/LLM while training the connector, applying LoRA, or full fine-tuning. Prevents modality imbalance (LLM ignoring visual input).
- **Multimodal Prompt Injection**: Images, PDF attachments, and audio can contain hidden indirect prompt injection attacks. Systems must structurally separate media content from trusted system instructions.

---

### 6. Fine-Tuning and Post-Training

#### Stages
Pretraining (base knowledge) $\rightarrow$ Supervised Fine-Tuning (SFT / instruction following) $\rightarrow$ Preference Optimization / RLHF $\rightarrow$ Deployment.

#### Parameter-Efficient Fine-Tuning (PEFT)
- **LoRA (Low-Rank Adaptation)**: Freezes base model weights $W_0 \in \mathbb{R}^{d \times k}$ and attaches trainable low-rank rank decomposition matrices $A \in \mathbb{R}^{r \times k}$ and $B \in \mathbb{R}^{d \times r}$ ($r \ll \min(d, k)$), updating weights via $\Delta W = B \cdot A$.
- **QLoRA**: Quantizes base model weights to 4-bit NormalFloat (NF4), uses Double Quantization to compress constants, and adds Paged Optimizers to eliminate memory spikes.

#### Preference Optimization Algorithms
- **PPO (RLHF)**: Uses a learned Reward Model and PPO policy optimization with a KL divergence penalty to constrain policy drift. Highly effective but computationally heavy and sensitive to tuning.
- **DPO (Direct Preference Optimization)**: Bypasses explicit reward model fitting by deriving implicit rewards directly from policy $\pi_\theta$ and reference model $\pi_{ref}$ log likelihood ratios over preferred ($y_w$) and dispreferred ($y_l$) response pairs:
  $$\mathcal{L}_{DPO}(\theta) = -\mathbb{E}_{(x, y_w, y_l)} \left[ \log \sigma \left( \beta \log \frac{\pi_\theta(y_w|x)}{\pi_{ref}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{ref}(y_l|x)} \right) \right]$$
- **KTO**: Learns from un-paired binary desirable/undesirable signals via prospect theory.
- **ORPO**: Combines SFT cross-entropy loss with an odds-ratio preference penalty in a single training step without requiring a reference model.
- **GRPO (Group Relative Policy Optimization)**: Generates a group of outputs per prompt and computes relative advantage across the group, eliminating the critic network (used in DeepSeek-R1).

#### Mixture of Experts (MoE)
Sparse activation where a router network directs tokens to top-$k$ expert sub-networks. Provides high parameter capacity with reduced active compute per token, but increases memory footprint, router load balancing challenges, and inter-GPU communication overhead.

---

### 7. Prompting, Context Engineering & Temperature 0

- **Few-Shot vs. Zero-Shot**: Few-shot enforces schema/style, but risks example noise, bias, and context overhead.
- **System Prompts**: System prompts provide soft instruction guidance, not hard security boundaries.
- **Temperature 0 & Non-Determinism**: Setting temperature to 0 performs greedy argmax token selection, but non-determinism can still occur due to floating-point non-associativity in parallel GPU reductions, batch size variations, and provider backend routing. Version prompts, fix seeds, and maintain evaluation benchmarks.

![LLMs, Multimodal, and Post-Training Visual Recap](https://substack-post-media.s3.amazonaws.com/public/images/3fbef664-936b-4a18-912d-68053e8deee0_1402x1057.png)

---

## 🧠 Extracted Atomic Notes

- [[NODES/FlashAttention|FlashAttention]] — IO-aware exact self-attention algorithm optimizing GPU memory transfers.
- [[NODES/Rotary Positional Embedding|Rotary Positional Embedding]] — Relative positional encoding mechanism via complex vector rotations.
- [[NODES/Direct Preference Optimization|Direct Preference Optimization]] — Reference-model based preference optimization without explicit reward model training.
- [[NODES/Group Relative Policy Optimization|Group Relative Policy Optimization]] — Group-sampled relative reward policy optimization eliminating learned critic networks.
- [[NODES/Multimodal RAG Architecture|Multimodal RAG Architecture]] — Retrieval and generation framework across text, document layout, images, and audio/video.
- [[NODES/Model Calibration and Reliability|Model Calibration and Reliability]] — Alignment of predicted model confidence scores with true empirical event frequencies.
- [[NODES/Target Encoding Data Leakage|Target Encoding Data Leakage]] — Overfitting vulnerability caused by improper target statistic calculation across cross-validation splits.

---

## 🔗 Related MOCs & Sources

- [[03_MOC/ai-ml-moc|🤖 AI & Machine Learning Map of Content]]
- [[03_MOC/machine-learning-mastery-moc|Machine Learning Mastery Map of Content]]
- [[03_MOC/prompt-engineering-moc|Prompt Engineering Map of Content]]
- [[01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1|Raw Source Capture File]]
