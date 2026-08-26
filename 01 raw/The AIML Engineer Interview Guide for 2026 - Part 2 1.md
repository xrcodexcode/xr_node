---
tags:
  - "RAW"
tags:
---
![](https://substackcdn.com/image/fetch/$s_!2hJV!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe2428065-7cb8-4b26-8067-be64f1280fe0_1672x941.png)

> Why not just build a graph?

It sounds obvious once you see it.

Ask a vector database:

> What is the capital of France?

It searches for chunks that *sound like* the question. One chunk may mention France. Another may mention Paris. The retrieval system has candidates, but it does not inherently know how the facts connect.

A graph does:

**France → capital → Paris**

These paths make it easier to find the answers directly (basically multi hop).

That is the magic of GraphRAG: retrieval stops being a pile of similar passages and becomes a connected explanation.

![](https://substackcdn.com/image/fetch/$s_!40-H!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa8667db2-824a-4fdb-8480-1839c118bd1d_1906x1043.png)

For questions that cross documents, time periods, people, or events, this has structural and reasoning advantage rather than just hype. In the [GNN-RAG paper](https://arxiv.org/abs/2405.20139)

, graph-native retrieval beat an LLM-based retriever by 6.5 - 11.8 F1 points on questions requiring two or more hops.

The work from University of Minnesota is groundbreaking, first was posted in May 2024, was later accepted to [Findings of ACL 2025](https://aclanthology.org/2025.findings-acl.856/), and its [open-source implementation](https://github.com/cmavro/GNN-RAG) had more than 440 GitHub stars as of August 5, 2026.

![](https://substackcdn.com/image/fetch/$s_!xkne!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcc306180-075f-43fd-92ba-95d87cdba67f_1672x941.png)

*GNN-RAG gives us unusually clean evidence for where graph-native retrieval helps and where LLM traversal fails.*

## GraphRAG has three hidden bills

Most GraphRAG explanations begin with a finished graph. The entities are clean. Duplicate names have been merged. Relationships are typed. The query lands on the right node and follows a tidy path.

Production begins several expensive steps earlier.

![](https://substackcdn.com/image/fetch/$s_!IFlu!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa7a29f87-d4c7-454b-b662-60313856b866_1884x1006.png)

Bill #1: construction Bill #2: traversal Bill #3: Maintainance **When you pay** Before the query For every query For as long as the system runs **What does the work** Entity extraction, resolution, relation building, summaries Starting-point selection, path exploration, evidence checks Freshness, conflict resolution, retraining, monitoring **What it costs** Ingestion time, model calls, schema work Latency, tokens, orchestration, drift risk Compute, evaluations, migrations, engineering attention **What demos hide** The graph did not arrive pre-built “Traversal” may be a multi-step agent loop A useful graph never stays finished

## Bill #1: manufacturing structure from messy text

A useful graph over real text has to be engineered (was manually with Neo4j in the past)

The system must:

1. identify entities;
2. decide whether two mentions refer to the same entity;
3. extract and type relationships;
4. reconcile new facts with old ones;
5. often summarize local regions or communities of the graph.

Each step can require LLM calls over the corpus. That means the cost arrives before a user asks a single question.

You pay in three currencies:

- **Time:** a large corpus is processed chunk by chunk.
- **Money:** extraction and relation-building consume model calls across everything ingested.
- **Design effort:** somebody has to decide what counts as an entity, a relationship, and a contradiction.

The third cost is usually underestimated.

Wikipedia-shaped data makes graphs look easy. Real company data is rarely Wikipedia-shaped. Names drift. Teams rename projects. Acronyms collide. A sentence can imply a relationship without stating it. Two sources can disagree, and both can have been correct at different times.

Before retrieval can become elegant, extraction has to become reliable.

Reliable extraction is expensive.

## Bill #2: letting the LLM do the walking

Suppose the graph now exists. The next question is how the system uses it.

The cheap version looks up connected nodes with a bounded query.

The expensive version asks an LLM to:

1. choose a starting point;
2. inspect neighboring nodes;
3. select a promising path;
4. gather evidence;
5. decide whether to continue;
6. validate the path before answering.

That is an orchestrated reasoning loop, not merely search.

The [GNN-RAG paper](https://arxiv.org/abs/2405.20139) puts numbers on that loop.

**Reasoning on Graph (RoG) plans before it walks.** Given a question, the LLM generates several plausible sequences of relationship types, such as person → employer → headquarters, then maps those candidate paths onto the knowledge graph. Generating multiple alternatives improves coverage, but requires **three LLM retrieval calls** in the paper’s setup.

**Think on Graph (ToG) decides while it walks.** At each hop, the LLM inspects nearby relations and entities, chooses where to go next, and repeats until it has enough evidence. That makes traversal flexible, but every decision becomes another inference step: **up to 21 LLM retrieval calls**.

**GNN-RAG moves that search out of the LLM.** A graph neural network scores candidate nodes across the subgraph, extracts the shortest useful paths, and passes only those paths to the model for the final answer. Retrieval itself requires **zero LLM calls**.

Every extra step adds three risks:

- another model call;
- another slice of latency;
- another chance to drift.

Think of a ship leaving port one degree off course. At first the error looks trivial. Given enough distance, it lands miles from its destination. LLM-guided traversal behaves the same way: one weak entity match changes the next neighborhood, which changes the next choice, which changes the evidence the model eventually sees.

The larger the graph, the more expensive it becomes to let the model think by walking. In the paper’s efficiency analysis, reducing the number of LLM-generated paths made retrieval cheaper but dropped answer hit rate by 8.3–9.9 points. The model could buy broader path coverage, but only by generating more candidates.

## Bill #3: keeping the graph trustworthy

The graph is live. New documents arrive. People change roles. Products are renamed. Two entities that looked identical turn out to be different, while two others need to be merged. Relationships expire even when the underlying text remains in storage.

Keeping the graph useful means continuously:

- ingesting new facts without duplicating old ones;
- resolving conflicts and superseding stale relationships;
- monitoring extraction and entity-linking quality;
- migrating schemas when the domain changes;
- rerunning evaluations after model, prompt, or graph changes;
- retraining learned retrievers when their data distribution drifts.

GNN-RAG makes this third bill visible. Its graph retriever avoids LLM calls at query time, but it is trained on question-answer pairs and assumes that entity linking has already placed the answer inside the retrieved subgraph. That offline work can be amortized across many queries, but it is not free.

This is the trade: reducing Bill #2 can create work in Bill #3. A trained retriever may make each query dramatically cheaper, while adding a model that has to be evaluated, deployed, monitored, and eventually refreshed.

> **Storage is cheap. Keeping the graph trustworthy is the product.**

## Why scale makes all three bills worse

On a toy graph, none of the bills looks alarming. There are few documents to structure, few paths to explore, and little maintenance work.

![](https://substackcdn.com/image/fetch/$s_!Yv4m!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff5e86cf1-c739-4f42-9395-05cc2fd4bb97_972x669.png)

At millions of nodes, all three bills become architectural. Knowledge graphs commonly contain millions of facts, so the system first has to retrieve a much smaller, question-specific subgraph before reasoning can begin ([GNN-RAG](https://arxiv.org/abs/2405.20139)). At the same time, every ingestion error, stale edge, and schema change affects more downstream queries.

Scale is the reason teams reach for GraphRAG in the first place. Plain retrieval struggles when answers depend on relationships scattered across a huge corpus. A graph adds the missing structure; but a huge graph also makes exhaustive exploration impossible.

So a production system needs to avoid touching most of the graph at answer time.

If every answer requires rich graph construction, repeated LLM exploration, and path validation, the system has not eliminated retrieval complexity and at the same time has moved that complexity into a more capable and more expensive pipeline.

## What you are really buying

GraphRAG is not expensive because graphs are fashionable. It is expensive because **comprehensiveness requires work**.

Broad, synthesis-heavy questions may require the system to coordinate:

- entity identity;
- typed relationships;
- multi-hop paths;
- graph communities;
- temporal changes;
- conflicting evidence.

That is precisely why GraphRAG can beat simple similarity search. It does more.

But comprehensiveness is not the same as dumping more graph context into the prompt. GNN-RAG’s authors found that combining every available retrieval source increased the input length without improving answer quality; the extra information could confuse the LLM. The goal is not the largest subgraph. It is the **smallest sufficient subgraph**.

The useful question is not “Is GraphRAG better than vector RAG?”

It is:

> Does this workload need enough relationship-aware reasoning to justify the extra pipeline?

## The design that survives production

This is why hybrid systems keep winning.

Use a cheap method to find the neighborhood. Use graph-native traversal to connect the evidence. Let the LLM reason over the small result, not wander the entire city.

> **Cheap pruning first. Expensive intelligence last.**

The sequence matters:

**vector or lexical retrieval → bounded graph traversal → compact evidence → LLM answer**

GNN-RAG is a clean example. A lightweight graph neural network scores candidate answer nodes, shortest paths connect those candidates back to the entities in the question, and only those verbalized paths reach the LLM. On the paper’s WebQSP evaluation, graph-native retrieval reached an **87.2% answer hit rate with zero LLM calls for retrieval**. RoG used three retrieval calls for 85.7%; ToG used up to 21 for 76.2% ([paper, Table 6](https://arxiv.org/html/2405.20139#A1.T6)).

It also used the graph more efficiently. On two-hop WebQSP questions, the deep GNN retrieved paths with 88.5% answer coverage using a median 357 input tokens, compared with 82.1% coverage and 435 tokens for the LLM-based RoG retriever ([paper, Table 1](https://arxiv.org/html/2405.20139#S4.T1)).

The point is not that every production system needs a trained GNN. This study assumes a pre-built knowledge graph, linked entities, and task-specific training; it says nothing about making Bill #1 disappear. What it demonstrates is the architecture: graph-native machinery retrieves and prunes; the LLM reasons over the paths that survive.

That can look like academic complexity from a distance. Once you see where the calls, tokens, and latency accumulate, it looks like engineering necessity. The most expensive component should touch the least data.

## Why we chose this paper for HydraDB Paper reading session

HydraDB lives on the graph side of this tradeoff, so the honest version matters.

Bill #1: construction is already a different architecture

Typical GraphRAG treats construction as a separate batch pipeline: chunk the corpus, extract entities, resolve duplicates, infer relations, build summaries, then repeat enough of that process whenever the source changes.

HydraDB collapses ingestion and graph construction into add\_memory(infer=True). New prose can become typed nodes and edges without operating a separate extraction stack, while the resulting memory remains available to every future run.

The evidence is promising. In our open HydraBrain benchmark, when both systems had to auto-extract their graphs from prose, HydraDB reached **88.0% overall retrieval versus gbrain’s 50.0%**. On multi-hop questions the gap was **86.0% versus 29.4%**. That is a major improvement over a representative multi-stage graph-memory pipeline, although it is not yet a universal extraction-SOTA claim across every GraphRAG system and domain.

The honest boundary remains: infer=True removes pipeline complexity, not inference cost. Bad source text can still produce bad edges, and extraction quality still has to be evaluated on your data.

Bill #2: traversal is where the benchmarks are strongest

HydraDB keeps traversal inside recall() instead of asking an LLM to choose every hop. That is the same graph-first principle demonstrated by GNN-RAG, delivered as a database operation rather than a separately trained retriever.

On the relational HydraBrain benchmark, HydraDB reached **86.0% multi-hop retrieval versus gbrain’s 63.8% even when gbrain was handed a perfect, human-seeded graph**. On LongMemEval-S, HydraDB reports **90.79% overall**, leading Zep and mem0-OSS in the same shared harness, including **90.97% temporal reasoning** and **97.43% knowledge updates**.

Read “state of the art” narrowly and honestly: HydraDB leads those same-harness comparisons. It is not the top result on mixed cross-vendor leaderboards that use different models, retrieval depths, and evaluation setups. The claim we can defend is simpler: multi-hop and temporal traversal are demonstrated strengths, and they do not require an LLM to wander the graph at query time.

Bill #3: maintenance is the frontier

This is the part we are still evolving. Append-only history, temporal edges, and explicit supersession already let new facts replace stale ones without destroying the audit trail. The direction is toward better automatic deduplication, pruning, confidence scoring, provenance, and evaluation as the graph changes.

But we are not calling maintenance solved. HydraDB cannot decide whether your ontology is correct, retrain an external GNN, or manufacture ground truth from contradictory sources. The work now is making those operations more automatic, observable, and cheap. You will see that surface improve as the product and its benchmarks mature.

Put the three bills together and the real design question changes. It is no longer merely, “Can the system build and search a graph?” It becomes:

> **Does every change force another rebuild, or does the graph become more valuable every time you use it?**

That is the transition from GraphRAG as a recurring pipeline to a memory graph as durable infrastructure. A rebuild pays construction and cleanup costs again. A compounding graph appends the new fact, preserves what came before, and reuses the structure across future queries.

It narrows the operations bill; it does not erase it

Append-only history and explicit supersession reduce the need for destructive rebuilds: new facts can replace stale ones without deleting the audit trail. But HydraDB does not decide whether your ontology is correct, retrain an external GNN, or prove that extracted edges match reality. Bill #3 gets smaller and more auditable, not free.

## When is GraphRAG worth the bet?

Ask three questions before building anything.

1\. Are the questions actually multi-hop?

If users mostly ask for single facts from static documents, vector or lexical retrieval will usually be faster, cheaper, and easier to maintain.

Graphs earn their keep when the answer lives in a relationship: across people, events, documents, or time.

2\. Can the source data support a graph?

Stable entities and repeated relationship types make construction tractable. Noisy language, inconsistent naming, and ambiguous relations make extraction the project.

3\. What is the latency budget?

If answers must be fast, repeated LLM traversal is a poor foundation. Keep traversal in the database layer. If latency is flexible and exhaustive research quality matters more, agentic graph exploration may be justified.

## The takeaway

GraphRAG feels magical because it retrieves the path, not just the passages.

But the path has to be built. Then it has to be found.

That is the entire economics of GraphRAG:

> **Bill #1 builds the graph. Bill #2 searches it. Bill #3 keeps it trustworthy.**

The winning architecture does not pretend any bill disappears. It makes construction durable, traversal bounded, maintenance auditable, and LLM reasoning scarce.

If your agents need graph-shaped memory without rebuilding the graph on every run, explore how [HydraDB](https://hydradb.com/?utm_source=hydradb&utm_medium=blog&utm_campaign=blogs&utm_content=why-graphrag-feels-magical-and-why-it-gets-expensive-fast) turns the graph into a durable substrate that compounds over time.

## Frequently asked questions

Is GraphRAG better than vector RAG?

That is the wrong axis. Vector search is a fast primitive for finding similar text. GraphRAG is a heavier pipeline for relationship-aware and multi-hop retrieval. Vector RAG usually wins on simple lookups; graphs have an advantage when the answer depends on connecting facts.

What are the three bills?

**Construction** covers entity extraction, deduplication, relation building, and graph summaries before queries arrive. **Traversal** covers starting-point selection, path exploration, evidence gathering, and validation for each query. **Operations** covers freshness, conflict resolution, schema changes, retraining, evaluation, and monitoring after launch.

Does a memory graph eliminate extraction cost?

No. It changes when and how often you pay. An append-only memory graph extracts each new fact once, then reuses or supersedes it. The inference cost and quality-control work remain.

Why not let the LLM traverse the graph?

Because it is slower, paid per token, and vulnerable to compounding drift at each hop. GNN-RAG’s comparison needed up to 21 LLM calls for hop-by-hop retrieval versus zero for graph-native retrieval. Bounded database traversal is cheaper and more predictable. Use the LLM to reason over the retrieved subgraph.

When should I skip graphs entirely?

Skip them when the workload is dominated by single-hop lookups, when the corpus is static and simple, or when the domain is so noisy that reliable graph construction would dominate the project.