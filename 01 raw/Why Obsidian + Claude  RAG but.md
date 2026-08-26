---
tags:
  - "RAW"
tags:
---
![](https://substackcdn.com/image/fetch/$s_!qrbh!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe5252d4d-553e-4f90-81b8-2123062e2a61_2704x1540.png)

Obsidian + Claude is truly magical for sure, and because of that everyone’s declaring RAG dead now that Obsidian plus an LLM can auto-maintain your notes.

everyday it figures out based on blogs I have written in my Obsidian Wiki / LLM wiki and helps me come with new ideas next with a cron job intelligently now these days Fable haha, and tells me what else to learn

![Pasted image 20260702173401](https://substackcdn.com/image/fetch/$s_!on39!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8fc22d2b-b131-42fe-8dbe-c8db3f02b937_760x306.jpeg)

Pasted image 20260702173401

I go a step further make computer use upload those blogs to medium, linkedin, x and substack for me make it a superpowerful.

BUT.. that’s half right, let me explain..

Even Karpathy said the quiet part:

> \*”I thought I had to reach for fancy RAG, but the LLM has been pretty good about auto-maintaining index files and brief summaries... and it reads all the important related data fairly easily at
> 
> this ~small scale.”\* — [Andrej Karpathy](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)

![karpathy-llm-wiki](https://substackcdn.com/image/fetch/$s_!mmH6!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdece9773-936b-422f-a174-010b51984a52_538x760.jpeg)

karpathy-llm-wiki

Yes *small scale* that means for one person’s second brain this is the perfect solution and no other solution comes even closer.

After copying above prompt, that’s my exact setup. My whole research wiki lives in Obsidian, maintained by Claude Code: an agent that reads sources, writes structured pages, and links them by hand.

![singhwiki-mainpage](https://substackcdn.com/image/fetch/$s_!2TJI!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffeed60e3-a22f-409d-a580-6cf3789cf291_900x629.jpeg)

singhwiki-mainpage

now let me explain why the hell RAG still matters

## RAG shreds your notes

Vector RAG can’t embed whole docs, so a splitter cuts your text by counting ~512 tokens. Not by meaning. By counting. Take this sentence: *“He moved from Atlanta to India to China, then finally settled in San Francisco.”* The splitter happily cuts it in the middle:

```markup
CHUNK 1: "Harnoor moved from Atlanta to India to"
CHUNK 2: "China, then finally settled in San Francisco."
```

Now ask **“where did he settle?”** RAG grabs chunk 1, because it’s dense with his name and city names, and confidently answers **“India.”** Wrong. The word “settled” and the actual answer landed on opposite sides of a cut made by counting to 512 (split point for token splitting).

And it gets worse from there. Before storing a chunk, RAG turns it into an embedding: a long list of numbers (1,536 of them, typically) that captures the *gist* of the text. Your actual words are gone. All that’s left is a numeric fingerprint of the vibe.

To answer a question, RAG turns the question into the same kind of fingerprint and looks for the chunks whose fingerprints are closest. Two problems with that. First, “closest fingerprint” means “sounds similar,” not “is the correct answer,” which is how the cities chunk beat the answer chunk above. Second, at scale you can’t compare against every chunk, so it uses a shortcut index (HNSW) that only checks likely neighbors. That shortcut is approximate: about 95% recall, so roughly 1 in 20 lookups silently skips the right chunk entirely.

To paper over the sloppiness, production RAG bolts on a second pass called a reranker: a slower model that re-reads the top handful of chunks against your question and reorders them. It helps, but it adds about 150ms to every single query, forever. Add it all up and retrieval is a pile of statistics and patches, not understanding.

The Obsidian version of that same note stays readable markdown, and Claude authors the structure instead of inferring it: a person page that says `Now in: San Francisco`, a numbered relocation timeline (Atlanta→India→China→SF), real `[[wikilinks]]` as edges. Same question, exact answer, every time. And it can tell you which page it read.

This isn’t vibes, by the way. LongMemEval (Wu et al., ICLR 2025) measured assistants dropping ~30% accuracy on memory across sessions ([arXiv:2410.10813](https://arxiv.org/abs/2410.10813)).

![obsidian-vs-flatrag-diagram](https://substackcdn.com/image/fetch/$s_!Nnp9!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F87661125-29b7-4961-96ae-326524f85eea_900x506.jpeg)

obsidian-vs-flatrag-diagram

So yes, Obsidian wins here, and it isn’t close. For one person’s second brain, an agent reading authored markdown beats chunk-and-embed on every question that actually matters. Karpathy’s right, I’m living it, case closed. There’s just one catch.

## The “but”: it only works small

My vault is about 50 files I edit by hand a few times a day. Production agents don’t write like that. They write constantly: thousands of memories per user per hour, hundreds of edits a second across your fleet, forever. You can’t hand-link that, and it won’t fit in any context window.

The crossover is one line: **when the corpus stops fitting in context and writes stop being human-curated.** Below that line, skip RAG and just read. Above it, you need a database that can absorb writes at that rate while keeping the structure. Hold onto that number, hundreds of edits a second, because it’s what breaks everything downstream.

And the fix already has a name: **GraphRAG**. Once you accept that “sounds similar” isn’t good enough, the answer is obvious. Store the explicit links between facts and walk them, instead of only matching fingerprints. Vector search finds the neighborhood; the graph walks the actual relationships. This isn’t a fringe idea, it’s where the whole field landed. Basically every serious memory company runs *both* halves now: Zep, Mem0, Neo4j-backed stacks, and yes HydraDB, all pair vectors to find candidates with a graph to connect them.

![graphrag-vector-plus-graph](https://substackcdn.com/image/fetch/$s_!deAe!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa40c24c7-766b-46de-9002-3c39a07f1a19_900x612.jpeg)

graphrag-vector-plus-graph

Which means Obsidian was doing GraphRAG the whole time. Every `[[wikilink]]` is a hand-drawn edge, and Claude walking those links is graph traversal. The only real difference between my vault and a production memory layer is who draws the edges, and how many. That’s the catch, and it’s where HydraDB comes in. But before I explain how, let me show you the receipts.

## The honest leaderboard

Quick disclosure: I have joined HydraDB, GraphRAG is simple: both halves live in one system. Vectors, graph, and relational data sit behind a single `recall()` call, instead of a vector DB stitched to a graph DB with sync jobs and glue code holding the two in agreement. One write updates both the fingerprint and the edges, which is exactly what you want when memories arrive hundreds of times a second.

We ran LongMemEval-S ourselves, fairly, and posted 90.79% overall. You’ll see different numbers floating around for every system on every memory benchmark, and there are real reasons for that: the answering model matters (a stronger LLM lifts everyone’s score), retrieval depth matters (top-3 vs top-10 changes recall), and harness details like timestamps and speaker roles can swing results by double digits. That’s why cross-vendor scoreboards are noisy, and why the only comparison worth trusting is one where everything is held constant except the memory layer. So that’s what we did: one identical harness, same model, same depth, HydraDB against the two most-used open memory layers:

so yeah everyone should run their own benchmarks and test for their usecase

![](https://substackcdn.com/image/fetch/$s_!JXp_!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd4dd9f48-eab2-43b0-b81b-ad27523a7ec8_1544x738.png)

Look at knowledge updates and temporal reasoning, the two things flat RAG can’t do. That’s the graph earning its keep. A vector index physically cannot store “supersedes” or “before/after.” A graph stores almost nothing else. (Self-reported, sure, but it’s one identical harness you can rerun yourself: [hydradb.com](https://hydradb.com/?utm_source=harnoor&utm_medium=substack&utm_campaign=obsidian-claude-rag&utm_content=article).)

## The other “but”: HydraDB vs Neo4j

So you buy the argument and want authored structure at scale. You reach for Neo4j. Fair. It’s genuinely great at knowledge graphs. Agentic memory breaks it in two specific ways:

~57,600 nodes a day, millions a month ([Medium](https://medium.com/@roxane.fischer_50383/building-a-temporal-infrastructure-knowledge-graph-a-year-of-wrestling-with-neo4j-at-scale-949e989c98a2)). At hundreds of edits a second that’s not a graph anymore. It’s a landfill.

1. **Supernodes.** Edges are adjacency lists, so a user with 50k memory edges loads atomically on traversal. Now fire hundreds of edits a second at that same hot node and every write is fighting for the same list. Agents create exactly these hot nodes.
2. **Temporal explosion.** The new-node-per-snapshot pattern blows up. One engineer logged

HydraDB’s answer is an object-storage graph backbone. A 50k-edge supernode fetches in parallel chunks, and new edges append to new chunks, so there’s no write contention on hot nodes. That’s the design that actually sustains hundreds of edits a second without a lock. Add git-style versioned temporal edges (supersede, don’t explode) and temporal ordering comes free. There’s no public head-to-head yet, so take this as an architectural case, not a benchmark.

we’re getting to 90% cheaper than Neo4j

> A vector remembers what things *sound* like. A graph remembers how things *relate*, and *when*.

![harnoor-retro-computers](https://substackcdn.com/image/fetch/$s_!WnqD!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc0c09d95-3748-4bb3-a774-c38554c8d3db_760x570.jpeg)

harnoor-retro-computers

## Honestly? I just love doing this

Here’s the part no benchmark captures: I enjoy this. Writing blogs, maintaining a second brain, watching it compound. It’s the best part of my week, not a chore. Every paper or tweet I read gets distilled into a page, linked to everything it touches, and the next question answers itself.

I got hooked after seeing FarzaWiki, Farza’s public second brain, and thought: why is everything I learn trapped in scattered notes? So I turned my Obsidian vault into **SinghWiki**, a little Wikipedia for everything I’m figuring out about agent memory. Same markdown, same `[[wikilinks]]`, just rendered so anyone can read it.

Claude Code is the maintainer. I drop a source in; it writes the summary, files the entity, links the concepts, flags contradictions, and rewrites stale pages. The wiki gets smarter every day and I just curate. That loop (read, distill, link, publish) is genuinely addictive. It’s also this post’s thesis in miniature: authored structure, maintained by an agent, beating anything a vector index could infer.

![singhwiki-article](https://substackcdn.com/image/fetch/$s_!DH4H!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6322b17f-d6d5-4bd7-93b1-5099caa3b48b_900x629.jpeg)

singhwiki-article

## Bottom line

Memory is a structure problem, not a search problem. Links beat chunks. Pick by scale, not hype:

ScaleStackPersonal (~50 files)Obsidian + Claude Code. No DB. Just read.Team / static corpusHybrid: BM25 + vectors + reranker. RAG as a feature.Production agentsHydraDB: graph that absorbs 100s of edits/sec, versioned temporal edges.

RAG isn’t dead. It’s demoted, from architecture to feature. And HydraDB isn’t the top leaderboard cell; it’s the best score you can post while keeping the graph. Every number here is one you can rerun. If you can’t rerun it, don’t believe it. Including mine.