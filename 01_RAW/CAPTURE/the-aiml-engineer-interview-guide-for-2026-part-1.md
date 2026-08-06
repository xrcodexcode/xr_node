---
id: 550e8400-e29b-41d4-a716-446655440000
title: "The AI/ML Engineer Interview Guide for 2026 - Part 1"
type: raw-source
status: captured
domain: ai
source_type: article
author: "Tech with Mak (@thecuriousmak)"
url: "https://thecuriousmak.substack.com/p/the-aiml-engineer-interview-guide"
created: 2026-08-06
updated: 2026-08-06
schema_version: 4
tags:
  - article
  - web-clip
  - ai
  - ml
---

# The AI/ML Engineer Interview Guide for 2026 - Part 1: Models, Mathematics, and Training

**Author**: Tech with Mak (@thecuriousmak)  
**Source URL**: https://thecuriousmak.substack.com/p/the-aiml-engineer-interview-guide  
**Date**: Jun 09, 2026  

![The AI/ML Engineer Interview Guide for 2026 - Part 1 Header](https://substack-post-media.s3.amazonaws.com/public/images/3797e221-46ba-4da7-b331-847e705c2563_1983x793.png)

---

AI/ML interviews have changed.

A few years ago, many candidates could prepare by revising supervised learning, recommendation systems, model evaluation, and a few deep-learning fundamentals.

That is no longer enough.

Modern AI/ML roles now span several overlapping areas:

1. Classical machine learning and statistics
2. LLM and multimodal model fundamentals
3. Fine-tuning and post-training
4. RAG, agents, and application architecture
5. Evals, safety, reliability, and observability
6. Inference infrastructure, latency, and cost

The mistake many candidates make is preparing only for the newest topics.

They study RAG, agents, embeddings, prompting, and fine-tuning, but forget that strong interview loops may still test bias-variance, gradient boosting, class imbalance, calibration, experimentation, and data leakage.

The opposite mistake is also common.

Some candidates understand traditional ML well, but struggle when asked about tokenization, long-context models, multimodal architecture, preference optimization, or the tradeoffs between prompting and fine-tuning.

This two-part guide covers both sides. Part 1 covers how models are built, trained, and adapted. Part 2 covers the production system around them - RAG, agents, evals, safety, infrastructure, and system design.

**Part 1 focuses on models, data, and training:**
- Classical machine learning
- Statistics and experimentation
- Calibration
- LLM fundamentals
- Multimodal systems
- Fine-tuning and post-training
- Prompting and context engineering

**Part 2 focuses on the surrounding system:**
- RAG
- Agents
- Evals
- Test-time compute
- Safety
- LLMOps
- Inference infrastructure
- ML system design

Before studying individual concepts, however, one distinction matters:

---

## First, identify the actual role

---

“AI/ML Engineer” is now too broad to describe one interview format.

Before preparing, determine the real job behind the title.

A **classical ML engineer** may be tested on supervised learning, ranking, recommendation systems, fraud detection, feature engineering, monitoring, and ML system design.

An **applied scientist** may face deeper questions on statistics, experimentation, modeling assumptions, causal reasoning, metric design, and research judgment.

An **LLM application engineer** may be tested on prompting, context engineering, RAG, evals, model routing, latency, cost, and production failure modes.

An **agent engineer** may be tested on tool use, orchestration, memory, planning, termination, permissions, guardrails, and observability.

A **multimodal engineer** may need to understand vision-language models, image-text retrieval, document AI, audio, video, visual grounding, and multimodal fine-tuning.

An **ML infrastructure or inference engineer** may be tested on serving systems, batching, caching, quantization, GPUs, distributed training, model deployment, and reliability.

A **research engineer** may need stronger depth in architecture, training pipelines, fine-tuning, post-training, evaluation design, and implementation details.

The best candidates do not answer every question from the same angle.

They first understand what kind of system they are being asked to build.

---

# Classical machine learning

---

## Bias and variance

LLMs did not remove classical ML from interviews.

Many production problems are still classification, ranking, regression, forecasting, retrieval, anomaly detection, or recommendation problems.

You should be able to explain the **bias-variance tradeoff** clearly.

High bias usually means the model is too simple or underfit. It performs poorly on both training and validation data.

Possible fixes include:
- Better features
- A more expressive model
- Less regularization
- Improved optimization
- More relevant training signal

High variance usually means the model has learned patterns that do not generalize. It performs well on training data but poorly on validation data.

Possible fixes include:
- Stronger regularization
- Simpler models
- More representative data
- Better validation splits
- Early stopping
- Ensembling
- Removing leakage-prone features

The important point is that underfitting and overfitting require different interventions.

## Random forests vs gradient-boosted trees

Random forests train many trees independently using bootstrapped samples and random feature subsets, then aggregate their predictions by averaging or majority vote.

They are generally robust, relatively easy to tune, and less sensitive to individual noisy observations.

Gradient boosting trains trees sequentially, each fitted to reduce the current ensemble's loss. For squared-error regression this means fitting residual errors directly, for other loss functions it means fitting pseudo-residuals, the negative gradient of the loss.

Boosted trees often perform extremely well on structured and tabular data, but can overfit when:
- Trees are too deep
- The learning rate is too high
- Too many boosting rounds are used
- Rare categorical identifiers are memorized
- Validation does not match production
- Leakage enters through engineered features

A strong answer does not simply say: Use XGBoost.

It explains why the model is appropriate for the data, latency constraints, feature types, and expected failure modes.

## The classic overfitting scenario

A common interview problem looks like this:

You train a model for click-through-rate prediction.

- Training AUC: 0.93
- Validation AUC: 0.78

The largest gap appears on rare categorical IDs such as `campaign_id`.

What do you do?

A weak answer says: Add regularization.

That may help, but it is not a diagnosis. A stronger answer proceeds systematically:

#### 1. Check the split
For CTR, fraud, ads, and recommendation systems, random train-validation splits may leak future behavior into the past. A time-based split is often more realistic. You should also check whether the same users, campaigns, products, or sessions appear in both datasets in ways that make validation artificially easy.

#### 2. Check leakage
High-cardinality categorical features can memorize labels, especially when target encoding is calculated incorrectly. Target encoding should use out-of-fold or time-aware computation, smoothing, and careful handling of rare and unseen categories.

#### 3. Inspect rare categories
Rare IDs produce unstable estimates. Possible treatments include:
- Minimum frequency thresholds
- Hashing
- Smoothing
- Grouping rare categories
- Regularized embeddings
- Removing identifiers that do not generalize

#### 4. Tune complexity
For boosted trees, possible changes include:
- Shallower trees
- Stronger minimum child constraints
- Lower learning rate
- Row and column subsampling
- Early stopping
- Stronger L1 or L2 regularization

#### 5. Verify that real signal remains
Run feature ablations, compare performance by segment, inspect calibration, and test on a realistic holdout.

The important part is not the exact hyperparameter. It is demonstrating that you can separate memorization, leakage, validation mismatch, distribution shift, and real predictive signal.

## Class imbalance and operating thresholds

Class imbalance is one of the easiest places to give a confident but wrong answer.

If fraud occurs in 0.1% of transactions, a model that always predicts “not fraud” can appear 99.9% accurate while catching no fraud.

That does not make ROC-AUC meaningless. ROC-AUC measures ranking quality across thresholds. But in highly imbalanced settings, it may not reveal performance at the threshold the business will actually use.

For rare-event detection, you should understand:
- Precision
- Recall
- PR-AUC
- F-beta
- False-positive cost
- False-negative cost
- Calibration
- Threshold selection
- Review-team capacity
- Segment-level performance

A good answer does not say “maximize recall” blindly. If every false positive triggers manual investigation, operational capacity matters. If every false negative is expensive or dangerous, optimizing only precision is also wrong. The correct operating point depends on the failure costs and business constraints.

## Calibration and reliable probabilities

Classification systems often use probabilities, not only labels.

A model is calibrated when its confidence matches observed outcomes. If a well-calibrated model assigns a probability of 0.8 to a large set of cases, approximately 80% of those cases should be positive.

Calibration is different from discrimination. A model can rank positive examples above negative examples and therefore achieve strong ROC-AUC while still producing unreliable probabilities. For example, it may assign 0.95 confidence to events that occur only 70% of the time.

This distinction matters in fraud detection, medical risk prediction, credit scoring, insurance, forecasting, human-review prioritization, or any system where probability influences resource allocation.

You should understand:
- Reliability diagrams
- Brier score
- Log loss
- Expected Calibration Error (ECE)
- Overconfidence and underconfidence
- Threshold selection
- Subgroup calibration
- Calibration under distribution shift

A **reliability diagram** compares predicted confidence with observed frequency.

The **Brier score** measures squared error between predicted probabilities and binary outcomes.

**Log loss** strongly penalizes confident incorrect predictions. It reflects probability quality, but it is not a pure calibration metric because it also depends on discrimination.

**Expected Calibration Error (ECE)** summarizes gaps between confidence and observed accuracy across bins. ECE is useful, but it is not definitive. Its value depends on the binning method, and a single aggregate number can hide severe miscalibration in important subgroups.

Common post-hoc calibration methods include:
- Temperature scaling (learns a scalar adjustment to logits)
- Platt scaling (fits a logistic mapping from scores to probabilities)
- Isotonic regression (learns a flexible monotonic mapping, but can overfit when calibration data is limited)

Calibration should be measured on data that resembles deployment. A model calibrated on its original test set may become miscalibrated after changes in class prevalence, geography, user behavior, sensors, data pipelines, or time.

A strong interview answer separates three questions:
1. Can the model rank cases correctly?
2. Are its probabilities trustworthy?
3. Does the chosen threshold produce acceptable outcomes?

These are related, but they are not the same question.

## Feature engineering and leakage

Feature engineering still matters, especially for tabular ML.

You should understand:
- High-cardinality categorical features
- Missing values
- Temporal features
- Historical aggregates
- Rolling windows
- Point-in-time correctness
- Training-serving consistency

Target encoding is a common interview trap. If a category is encoded using label statistics from the full dataset before splitting, information from validation examples leaks into training features. The model may look excellent offline and fail in production.

A safer design uses out-of-fold encoding, time-aware encoding, smoothing, clipping, and separate treatment for unseen categories.

The same principle applies to user-level aggregates, conversion rates, fraud histories, and rolling features. A feature is valid only if it would have been available at prediction time.

---

# Statistics and experimentation

---

A strong AI/ML candidate should know how to determine whether a change actually worked.

You should be comfortable discussing:
- Confidence intervals
- Hypothesis tests
- A/B testing
- Statistical power
- Sample size
- p-values and their limitations
- Multiple testing
- Simpson’s paradox
- Selection bias
- Offline-online metric mismatch
- Novelty effects
- Guardrail metrics
- Causal reasoning

The best offline model is not always the best product model. A ranking model may improve offline NDCG while reducing user satisfaction. A support bot may increase deflection while increasing complaints. A fraud model may improve recall while overwhelming investigators.

Interviewers often care less about whether you can recite a metric’s definition and more about whether you know when that metric can mislead you.

A confidence interval expresses uncertainty around an estimated quantity. It does not mean there is a 95% probability that a fixed population parameter lies inside one already-computed frequentist interval.

A p-value is not the probability that the null hypothesis is true. It measures how incompatible the observed data, or something more extreme, would be with the assumed null model.

Statistical power is the probability of detecting an effect of a specified size when that effect exists. It depends on effect size, sample size, variance, significance threshold, and experimental design. An underpowered experiment can miss a useful change, repeatedly testing many metrics can create false positives unless the team predefines primary outcomes or adjusts for multiple comparisons.

![Classical Machine Learning and Statistics Visual Recap](https://substack-post-media.s3.amazonaws.com/public/images/fb151920-156b-4f46-8434-541d1e0fdfaa_1402x1075.png)

---

# LLM fundamentals

---

## Tokenization

Modern LLMs usually use subword or byte-level tokenization.

Smaller vocabularies create:
- Longer sequences
- More fragmented representations
- Higher attention cost for the same text

Larger vocabularies improve compression but increase:
- Embedding-table size
- Output-layer size
- Memory requirements
- The number of rarely used tokens

A small vocabulary does not necessarily create frequent out-of-vocabulary failures. Subword and byte-level tokenizers are designed to represent rare text by breaking it into smaller units.

Tokenization also affects multilingual performance, code understanding, arithmetic, context usage, cost, and latency. A model may require many more tokens to express the same sentence in one language than another.

## Self-attention and FlashAttention

Standard self-attention compares each token with every other token in the sequence. That produces quadratic growth in the attention score matrix with sequence length ($O(N^2)$).

Sparse and linear-attention variants reduce or approximate those interactions.

FlashAttention solves a different problem. It keeps exact attention, but improves speed and memory efficiency by reducing expensive movement between GPU memory levels (HBM and SRAM tiling). FlashAttention therefore improves the practical implementation of attention. It does not turn standard dense attention into a linear-time algorithm.

## Positional encoding, RoPE, and long context

Absolute position embeddings assign each token position a learned or fixed representation.

RoPE, or Rotary Positional Embedding, applies position-dependent rotations to query and key vectors. The interaction between those rotated vectors gives attention a useful form of relative-position behavior. This is one reason RoPE became common in decoder-only LLMs.

But RoPE does not automatically provide reliable unlimited context. A model trained at one context length may degrade when pushed far beyond that range.

The issue is not only whether the API accepts more tokens. The model must still:
- Retrieve distant information
- Compare separated evidence
- Track entities
- Understand ordering
- Reason across long spans
- Avoid ignoring the middle of the context

Methods such as Position Interpolation, YaRN, LongRoPE, Entropy-Aware ABF, and other RoPE-scaling approaches extend or adapt positional behavior.

Long-context quality also depends on training data, attention implementation, position-scaling method, context packing, retrieval strategy, evaluation design, and the model’s actual ability to use distant evidence.

The context-window size is not the same thing as effective context utilization.

---

## Multimodal AI systems

---

Many production AI systems process more than text. They may need to understand:
- Images
- Screenshots
- Scanned documents
- Charts
- Diagrams
- Audio
- Video
- Combinations of these modalities

This introduces failure modes that do not appear in text-only systems.

## Vision-language model architecture

A common vision-language design includes:
1. A visual encoder
2. A connector or projection layer
3. A language model

The visual encoder turns the image into representations. The connector maps those representations into a form the language model can use. Other systems use cross-attention or more unified multimodal tokenization.

The important point is that the model does not receive an image exactly as a human sees it. The input is encoded, compressed, aligned with language, and then used for generation. Information can be lost at each stage.

The model may miss fine text, small objects, exact counts, spatial relationships, chart values, layout information, or rare domain-specific visual features. A model may correctly identify objects in an image but still misunderstand how they relate to each other.

## CLIP-style retrieval

CLIP-style systems learn separate image and text encoders whose embedding spaces are aligned using contrastive learning. This enables text-to-image retrieval (e.g. retrieving "A red car on a snowy road").

This approach supports image search, zero-shot classification, recommendation, deduplication, and multimodal retrieval.

But global image-text similarity is not equivalent to detailed visual understanding. CLIP-style embeddings may miss exact counts, small regions, text inside images, fine-grained product differences, complex spatial relationships, or subtle visual anomalies.

Some tasks therefore require OCR, region-level features, object detection, document-layout models, re-ranking, or a stronger vision-language model.

## Multimodal RAG

Text-only RAG usually retrieves text chunks. Multimodal RAG may retrieve text, images, page renderings, tables, figures, diagrams, audio segments, video frames, or transcript spans.

This matters when meaning depends on visual structure (e.g. a chart in a financial report, a figure in a paper, a diagram in a manual, or field positions on a form).

A multimodal RAG system may combine extracted text, OCR output, document structure, page metadata, page-image embeddings, region-level visual features, table extraction, figure captions, and generated visual descriptions.

Evaluation should measure whether the system retrieved the correct page/region, used correct visual evidence, interpreted OCR correctly, understood spatial relationships, and grounded its answer.

## Audio systems

Audio introduces temporal information (speech, music, environmental sound, speaker identity, emotion, timing, overlapping speakers).

Audio may be represented through raw waveforms, spectrograms, or audio encoder embeddings. The system must preserve temporal information while aligning audio with language.

Performance changes due to background noise, accents, microphone quality, compression, silence, multiple speakers, and domain terminology. Word Error Rate (WER) alone may not capture task quality if a critical term, number, or medical instruction is corrupted.

## Video systems

A video is not simply a collection of independent images. Meaning depends on motion, event order, duration, scene changes, object tracking, audio-visual alignment, and brief actions.

Processing every frame is expensive, so video systems sample or compress frames. Poor frame sampling can miss short events.

Video system design must address frame sampling, temporal resolution, scene segmentation, motion representation, object tracking, long-video context, audio-video alignment, timestamped retrieval, streaming vs offline processing, temporal grounding, and inference cost.

For video RAG, the system must retrieve the exact time range, frame sequence, transcript segment, speaker turn, or audio event.

## Multimodal fine-tuning

General-purpose vision-language models may perform poorly on specialized data (radiology, manufacturing defects, satellite imagery, retail products, scientific diagrams, handwritten forms, industrial inspection).

Multimodal fine-tuning strategies include:
- Freeze encoders and train connector
- Apply LoRA to selected components
- Tune language model
- Tune visual or audio encoder
- Tune connector and encoder together
- Fully fine-tune the full model

The correct choice depends on where the capability gap exists. If the visual encoder cannot represent features, tuning only the LM will not help. If representation is sufficient but domain terminology is missing, instruction tuning or adapters suffice.

Dataset design is critical: check modality alignment, label precision, hard negative examples, text-only shortcuts, resolution, and class balance.

Evaluation must cover domain performance, general multimodal capability, grounding, hallucination prevention, and robustness.

## Multimodal prompt injection

Images, documents, audio, and video must be treated as untrusted input. An image or screenshot may contain adversarial text ("Ignore previous instructions..."), documents may contain hidden small text, audio may contain spoken commands, and video may include malicious frames.

Defenses must be structural:
- Treat extracted content as untrusted data
- Separate media content from trusted system instructions
- Restrict tool execution outside the model
- Require approval for risky actions
- Validate actions before execution
- Log evidence influences
- Red-team visible and concealed injection attempts

---

# Fine-tuning and post-training

---

## Pretraining, SFT, and deployment

You should understand the distinction between:
- **Pretraining**: Teaches broad language and world patterns via next-token prediction over massive corpora.
- **Supervised Fine-Tuning (SFT)**: Teaches instruction-following and task formats from curated demonstrations.
- **Preference Optimization / RLHF**: Uses comparative feedback to align model preferences and behavior.
- **Deployment**: Solves serving latency, cost, safety, monitoring, rollback, drift, and regression detection.

## LoRA, QLoRA, and full fine-tuning

- **LoRA (Low-Rank Adaptation)**: Trains low-rank decomposition matrix updates ($\Delta W = B \cdot A$) instead of updating full weight matrices, saving memory and accelerating iteration.
- **QLoRA**: Combines 4-bit NormalFloat (NF4) base model quantization, double quantization, and paged optimizers with LoRA adapters.
- **Full Fine-Tuning**: Updates all parameters across all layers, providing high flexibility at higher compute cost and regression risk.

Decision criteria: data volume, data quality, compute, latency constraints, iteration speed, and whether prompting/RAG can solve the problem without fine-tuning.

## DPO, PPO, KTO, ORPO, and GRPO

Preference optimization is not a settled story where DPO simply replaced PPO.

PPO-style RLHF involves training a reward model, optimizing policy against that reward, and applying a KL divergence penalty against a reference model. It is complex and sensitive, but powerful when tuned well.

DPO became popular by optimizing directly from preference pairs $(y_w, y_l)$ using an implicit reward formulation without needing a separate reward model or PPO loop:

$$\mathcal{L}_{DPO}(\theta) = -\mathbb{E}_{(x, y_w, y_l)} \left[ \log \sigma \left( \beta \log \frac{\pi_\theta(y_w|x)}{\pi_{ref}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{ref}(y_l|x)} \right) \right]$$

Other post-training methods:
- **KTO**: Learns from un-paired binary desirable/undesirable signals via prospect theory.
- **ORPO**: Blends SFT cross-entropy loss with an odds-ratio preference penalty in one step without a reference model.
- **GRPO (Group Relative Policy Optimization)**: Generates a group of outputs per prompt and computes relative advantage across the group, eliminating the critic network (used in reasoning models like DeepSeek-R1).

A strong candidate evaluates feedback availability, reward verifiability, online exploration needs, compute constraints, and reward-hacking risks.

## Mixture of Experts (MoE)

Mixture-of-Experts models use sparse activation: a gating router directs each token to a top-$k$ subset of expert sub-networks. This allows high total parameter capacity without paying dense compute cost per token.

Challenges include routing stability, load balancing loss, expert specialization, memory capacity, and inter-GPU communication overhead.

---

# Prompting and context engineering

---

Prompting is interface design for a probabilistic system.

Few-shot prompting helps enforce output format and ambiguous task styles, but can hurt if examples are noisy, unrepresentative, or biased.

System prompts guide model behavior but are soft guidance, not hard security boundaries. Real systems require external permissions, policy validation, sandboxing, and execution controls.

## Temperature 0 and reproducibility

Temperature 0 selects greedy argmax tokens, but non-determinism can still occur due to floating-point non-associativity in parallel GPU reductions, dynamic batching, hardware differences, and provider backend changes.

Production reproducibility requires prompt versioning, fixed seeds, regression test suites, stored benchmark outputs, and rollback plans. Treat prompts like code.

![LLMs, Multimodal, and Post-Training Visual Recap](https://substack-post-media.s3.amazonaws.com/public/images/3fbef664-936b-4a18-912d-68053e8deee0_1402x1057.png)

---

# Where the model layer ends

---

Part 1 covered the model-facing side of AI/ML engineering:
- How classical models underfit and overfit
- How metrics behave under class imbalance
- Why calibration matters
- How statistical experiments can mislead
- How LLMs tokenize and attend to information
- Why long context is not the same as effective context use
- How multimodal models process images, audio, and video
- How fine-tuning and preference optimization change model behavior
- Why prompts influence behavior without becoming hard system boundaries

These foundations matter. But understanding the model is not the same as building a reliable AI product.

A capable model can still sit inside a weak system. The correct evidence may never reach it. An agent may call the wrong tool. A model-based judge may reward the wrong answer. A prompt may be mistaken for an access-control mechanism. Inference cost may grow without limits.

These are not primarily model problems. They are system problems.

**Part 2 moves beyond the model itself and examines RAG, agents, evals, test-time compute, safety, observability, inference economics, and production system design.**

Happy Learning!
