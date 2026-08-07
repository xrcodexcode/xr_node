---
id: 550e8400-e29b-41d4-a716-446655440005
title: Group Relative Policy Optimization
type: atomic-note
status: atomic
domain: ai
source_type: article
created: 2026-08-06
updated: 2026-08-06
review: 2026-11-06
confidence: 95
version: 1
aliases:
  - GRPO
  - Group Relative Advantage RL
tags:
  - ai
  - ml
  - llm
  - reference
owner_moc: 🤖 AI & Machine Learning Map of Content
sources:
  - [[02_NEW-KNOWLEDGE/the-aiml-engineer-interview-guide-2026-part-1-study-note|The AI/ML Engineer Interview Guide 2026 Part 1]]
related:
  - [[NODES/Direct Preference Optimization]]
  - [[NODES/agent-loop-mechanics]]
schema_version: 4
---

# Group Relative Policy Optimization

Group Relative Policy Optimization (GRPO) is a reinforcement learning algorithm for LLMs that computes baseline advantages by normalizing rewards across a group of candidate outputs generated for each prompt, eliminating the need for a separate critic neural network.

## Why it matters

Standard PPO requires maintaining a critic network equal in size to the policy network to estimate state-value baselines $V(s)$, doubling memory consumption during post-training.

GRPO samples a group of $G$ outputs $\{o_1, o_2, \dots, o_G\}$ for a single prompt $q$ from the old policy $\pi_{\theta_{old}}$. It calculates a reward for each output and normalizes these rewards within the group (subtracting group mean and dividing by group standard deviation) to serve as relative advantage scores:

$$\tilde{A}_{i} = \frac{r_i - \text{mean}(\mathbf{r})}{\text{std}(\mathbf{r}) + \epsilon}$$

GRPO optimizes the policy using clipped surrogate objectives with KL divergence penalties against a reference model. By omitting the critic network, GRPO enables large-scale reasoning model training (such as DeepSeek-R1) with substantially reduced GPU memory overhead.

## Related

- [[NODES/Direct Preference Optimization|Direct Preference Optimization]]
- [[NODES/agent-loop-mechanics|Agent Loop Mechanics]]

Relationship: `critic_free_rl`

## Source

- [[01_RAW/capture/the-aiml-engineer-interview-guide-for-2026-part-1|The AI/ML Engineer Interview Guide for 2026 - Part 1]]
