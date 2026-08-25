---
tags:
  - "RAW"
tags:
---
![](https://substackcdn.com/image/fetch/$s_!D4mm!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa0136ff8-f08a-459b-ae12-91e128c64fac_1536x1024.png)

So let me start with a story you’ve probably lived.

It’s a Saturday. You’ve got a free afternoon. You take a folder of PDFs, chunk them, drop them into a vector database, wire up a model, and thirty minutes later you have a working RAG app. You ask it a question. It answers. The answer is good. You feel great. You ship a little prototype on Tuesday and tell your team it works.

Now fast forward three months. The same app is in front of real users. And the complaints are coming in. The answers are wrong sometimes. It quotes a document that has nothing to do with the question. It makes stuff up in the gaps. And the worst part? Nobody on the team can tell you why. It’s the same code that worked so well on Saturday.

If that sounds familiar, this post is for you.

Because in 2026, there’s this loud fight going on. Half the internet is yelling that RAG is dead. Context windows are huge now, they say. You can fit a million tokens in a prompt. So just dump everything in and forget retrieval.

And the other half is yelling back that RAG is very much alive and you’re all wrong.

I want to give you the honest version. Not a hot take. The version that actually helps you build something that survives contact with real users.

Quick heads up before we start. If you’ve never built a RAG app in your life and you’re reading this going “wait what’s a vector database,” don’t worry. I made a full beginner walkthrough that explains what RAG is in under 30 minutes, no jargon. Go watch that first, then come back here. Link’s at the bottom. This post is the next step up. It’s for the person who already built the Saturday version and watched it fall apart.

Okay. Let’s get into it.

## The “RAG is dead” fight, in plain words

So why is everyone saying RAG is dead?

Because context windows got big. A year or two ago, you could only fit a few thousand tokens into a model. Now some models take a million or more. So the argument goes: if I can fit my whole knowledge base into the prompt, why do I need a vector database, embeddings, chunking, all of that? Just paste it all in and let the model read it.

And you know what? For small stuff, they’re right. If you have one 40-page document and a question about it, you don’t need a retrieval pipeline. Paste the document in. Ask your question. Done. Building a whole RAG system for that is like renting a warehouse to store one shoebox.

So the people saying “you’re overcomplicating this” have a real point.

But this is where they’re wrong. And it’s a big where.

The naive RAG pipeline is dead. The idea of retrieval is not.

Let me explain the difference, because this is the whole thing.

Naive RAG is the Saturday version. Chunk everything into equal pieces. Turn each piece into an embedding. When a question comes in, grab the top few pieces that look similar. Stuff them in the prompt. Generate. That pipeline is what’s dying. It works in a demo and it breaks in production, and I’ll show you exactly why in a minute.

Retrieval itself, the general idea of “go find the right information before you answer,” is more alive than ever. It just got smarter. It stopped being one dumb step and turned into a proper system.

So when someone says RAG is dead, ask them which RAG. If they mean chunk-and-pray, sure. If they mean retrieval, they haven’t looked at what production teams are actually doing this year.

## Why does your app work in the demo and break in production?

Now the important question. Why does the exact same code go from great to garbage?

Because in a demo, you ask the questions you already know the answer to. You test it on the easy stuff. Real users don’t do that. Real users ask weird questions, edge cases, things phrased in ways you never imagined. And that’s when the retrieval starts missing.

And this is the part most people get backwards. They think their model is the problem. It hallucinated, so the model must be bad, let me swap in a bigger model. No. Most of the time, when a RAG app gives a wrong answer, the model did its job fine. It got fed the wrong documents. So it wrote a confident, clean, well-structured answer based on the wrong stuff.

People who actually measure this keep landing on the same result. When RAG fails, the failure is in retrieval far more often than in generation. Some teams have put a number on it and it lands north of 70%. So most of your wrong answers are not a model problem. They’re a “you handed the model the wrong pages” problem.

Let me give you the analogy I’ll use for the rest of this post, because it makes everything fall into place.

Think of your RAG app as a student taking an open-book exam.

A closed-book exam is a plain model with no retrieval. It only knows what it memorized. If the question is about something it never studied, it guesses, and it guesses confidently, and it’s wrong. That’s a hallucination.

An open-book exam is RAG. The student is allowed to look things up. So far so good. But this is the part nobody tells you. Being allowed to look things up doesn’t help if your notes are a mess.

Picture a student who walks into the exam with a backpack full of loose photocopied pages, no order, no labels, some pages torn in half. When a question comes, they dig through the pile, grab whatever page looks kind of right, and write an answer from it. Sometimes they grab the right page. Often they grab a page that mentions the same words but says something totally different. And they still write a confident answer, because they don’t know they grabbed the wrong page.

That messy backpack is naive RAG. That’s your Saturday app.

Everything I’m about to show you is about turning that messy backpack into a well-organized set of notes, with tabs, an index, and a smart way of deciding what to look up.

Let’s go through what breaks and how you fix each one.

## Failure 1: Your chunking cuts ideas in half

![](https://substackcdn.com/image/fetch/$s_!OZNz!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbbcb4142-7ca0-488a-b7b5-6a49ff8f685a_1431x839.png)

So the first thing you did on Saturday was chunk your documents. You probably split them every 500 characters or every 1000 characters. Simple. Even. Clean.

And that’s the problem.

Documents don’t have ideas that are neatly 500 characters long. A single explanation might run 1400 characters. So your fixed chunker cuts it right in the middle. Now the first half of the idea is in one chunk and the second half is in another. And when a question comes in that needs the whole idea, you retrieve half of it. The model gets half the story and fills in the rest by guessing.

In our exam analogy, this is like photocopying a textbook but cutting every page in the same spot regardless of what’s on it. Half your sentences end mid-thought.

So what’s the fix? You chunk by meaning, not by character count. Split on natural boundaries. Paragraphs. Sections. Headings. Keep an idea together in one chunk. This is called semantic chunking, and it does exactly what the name says. It splits where the meaning splits, not where the ruler says.

One quick note. There’s no perfect chunk size for everything. A legal contract chunks differently than a chat log. So test it on your actual documents and actual questions. Don’t copy a chunk size off a blog post and assume it fits your data.

## Failure 2: Your search misses the exact words

![](https://substackcdn.com/image/fetch/$s_!G92J!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F18331520-2e48-44d3-9e8e-4c4d796698a2_1458x831.png)

Now the second one, and this one surprises people.

You built your search on embeddings. Embeddings are great. They find things by meaning. So if someone asks “how do I reset my login,” it can find a document about “recovering account access” even though none of the words match. That’s the whole point of semantic search and it feels kind of unreal the first time you see it.

But semantic search has a blind spot. It’s bad at exact matches.

Say your documents mention a specific error code, like “ERR\_4021.” Or a specific product name, or a part number, or a person’s name. A user types that exact code into the search. And semantic search goes “hmm, ERR\_4021, that’s semantically kind of near a bunch of other error codes” and hands back the wrong one. Because to an embedding, exact strings like that tend to look roughly similar. It’s not really built to lock onto the precise characters. It’s built for the overall meaning. So a rare exact code is the kind of thing it slips on.

In the exam, this is a student who’s amazing at understanding concepts but can’t find the one page with the specific formula on it, because they’re searching by theme instead of by keyword.

So what’s the fix? You use both kinds of search at the same time. This is called hybrid search. You run the meaning-based search (dense) and you also run an old-school keyword search (this is often BM25) side by side. Then you combine the results. The keyword side catches the exact codes and names. The meaning side catches the “reset login equals recover access” stuff. Together they cover each other’s blind spots.

Hybrid search is one of those upgrades that feels boring and turns out to fix a huge chunk of your wrong answers. I actually build hybrid search from scratch in one of my videos, running fully local, and you can watch each piece go in. I’ll point you to it at the end.

## Failure 3: Your top results aren’t actually your best results

![](https://substackcdn.com/image/fetch/$s_!v1Zp!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcfcace0-34bb-4050-b77a-8aeff8a649c5_1460x780.png)

Okay, third failure. This one’s sneaky.

When you retrieve, you grab the top few chunks. Top 3, top 5, whatever number you picked. And you assume those top few are the most relevant. But they’re not. They’re the most similar by embedding math, and that is a different thing from most relevant to the actual question.

Let me say that again because it’s the core of it. A chunk can have the right answer inside it and still rank low, because its embedding happens to sit a little farther away than some other chunk that just shares surface-level words. So the good chunk sits at position 8. And you only grabbed the top 5. You never even looked at it.

In exam terms, your student pulled out the five pages that looked most familiar at a glance and never checked page eight, which had the actual answer.

So what’s the fix? You add a reranker.

A reranker is a second, smarter pass. First you retrieve a bigger pile, say the top 20 or top 50. Then the reranker looks at each one against the actual question and re-scores them based on real relevance, not just embedding distance. Then you keep the true top few after that re-scoring.

Why does this help so much? Because your first retrieval step is fast and rough. It’s good at casting a wide net. The reranker is slower and sharper. It’s good at picking the real winners out of that net. You use the fast one to get candidates and the sharp one to make the final call. That’s the pattern.

And one honest thing about rerankers. Don’t go crazy pushing your top number higher and higher thinking more is better. Past a point, extra chunks are just repeats of the same thing, and the reranker flattens out, and you’ve spent money for nothing. Wide net, then sharp pick. That’s the move.

## Failure 4: The question needs two documents and you only fetched one

![](https://substackcdn.com/image/fetch/$s_!7Q5e!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b5c0e72-b895-4ecf-9af3-4280fb1218f8_1463x854.png)

Now this one is about the hard questions.

Some questions can’t be answered from one chunk. The answer lives across two or three documents that you have to connect. This is called multi-hop, because you hop from one piece of information to another to get the final answer.

Let me give you an example. A user asks “what’s the refund policy for the plan our biggest customer is on.” To answer that, you first need to know who the biggest customer is. Then you need to know which plan they’re on. Then you need the refund policy for that plan. That’s three hops. Three separate lookups that chain together.

Naive RAG does one lookup. It grabs the chunks that look most like the question and stops. So it grabs something about refunds, misses the customer-to-plan link entirely, and gives a generic wrong answer.

In the exam, the student needs to flip to page 4, use what’s there to know they now need page 40, and use that to find page 55. But our messy-backpack student just grabs one page and writes.

So what’s the fix? Two ideas that go together.

First, query decomposition. You break the big question into smaller sub-questions and retrieve for each one. Who’s the biggest customer? What plan are they on? What’s the refund policy for that plan? Three small clean lookups instead of one hopeless big one.

Second, and this is where it gets interesting, you let the system loop. Retrieve, look at what you got, notice you still don’t have enough, retrieve again with what you just learned. Keep going until you actually have the pieces. That looping behavior is the start of something bigger, and I’ll come to it in a second.

There’s a cousin of this problem worth naming. Entity resolution. Your biggest customer might be written five different ways across your documents. Full company name in one place. An abbreviation in another. A parent company name. An internal deal codename. A client ID number. To a human they’re obviously the same company. To plain semantic search they’re five different things. The fix here is a knowledge graph, which is a structure that knows “these five names all point to the same entity.” That’s a bigger build, so I won’t go deep on it here, but know that it exists and know what problem it solves, so you recognize it when you hit it.

## Failure 5: You stuffed too much in and the model got sloppy

![](https://substackcdn.com/image/fetch/$s_!HOwN!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd269dc56-606b-4a58-975e-a51743b38b00_1494x830.png)

Okay, failure five, and it’s almost funny because it’s the opposite of what you’d expect.

You’d think more context is always better. Grab 30 chunks, stuff them all in, give the model everything, let it sort it out. More information, better answer, right?

Wrong. When you overload the prompt with a big pile of chunks, the model gets worse, not better. It starts missing things that are sitting right there in the context. It follows your instructions less carefully. The important chunk is buried in the middle of twenty mediocre ones, and the model kind of glazes over it.

This connects straight back to the “RAG is dead, just use a million-token window” crowd. Because this is the exact reason dumping everything in doesn’t work as well as they claim. A giant context isn’t free. It adds cost, it adds delay, and it adds noise the model has to see past. Even with a huge window, when the real answer is buried inside a wall of similar-looking text, the model can walk right past it.

In the exam, this is handing the student the entire library for one question. They don’t read better with more books on the desk. They read worse, because now they’re overwhelmed and skimming.

So what’s the fix? Send less, but send the right stuff. This is why good chunking, hybrid search, and reranking all feed into each other. The whole point of doing those well is that you can hand the model a small, clean, high-quality set of chunks instead of a giant messy pile. Retrieval focuses the model’s attention on what actually helps. That’s the real value of retrieval even when context windows are huge. Clean input makes the model do better work. A giant messy pile makes it do worse. So you send the small clean set on purpose, and you get a better answer for less money.

And yes, this is also why RAG is usually cheaper than the “just paste everything” approach. People have measured it, and depending on the job, retrieval can come out anywhere from around 8 times to 80-something times cheaper than shoving a giant context in on every single call. Because you’re not paying to process a million tokens every time someone asks a question. You’re paying to process the handful that count.

## Failure 6: You’re flying blind because you never measured anything

![](https://substackcdn.com/image/fetch/$s_!RktG!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F233c869d-ecf5-4f0e-b0c5-c64efc62570a_1511x814.png)

This is the last failure and honestly it’s the one that ties every other failure together.

On Saturday, you tested your app by asking it a few questions and eyeballing the answers. “Yeah, looks good.” That’s it. That was your entire evaluation.

So three months later when things break, you have no idea what changed or where the problem is. You can’t tell if it’s your chunking, your search, your reranker, your prompt. You’re just poking at it and hoping.

You need evaluation. Real, boring, numbers-on-a-dashboard evaluation.

The key move here is to measure each stage separately. Not just “was the final answer good.” That tells you something’s wrong but not where. You want to measure the retrieval on its own. Did it fetch the right chunks? And measure the generation on its own. Given the right chunks, did the model write a good answer? When you split it up like that, you can actually see which piece is failing. There are tools built for exactly this kind of stage-by-stage scoring, and one you’ll hear about a lot is RAGAS. Use whatever you like, but use something.

Why does this beat eyeballing? Because you can’t improve what you can’t see. When you have numbers per stage, fixing the app stops being guesswork. You look at the dashboard, you see retrieval dropped, you go fix retrieval. That’s the difference between a real system and a Saturday demo that got lucky.

## The thing that pulls it all together: agentic RAG

So now let me connect all of this to the biggest shift of 2026.

Remember failure 4, where I said “let the system loop, retrieve again with what it just learned”? That looping idea, taken all the way, is what people call agentic RAG. And it’s the pattern most serious teams are moving to this year.

Let me give you the plain-English version. In naive RAG, retrieval is one fixed step that always happens the same way. Question comes in, you always do one search, you always grab the top few, you always stuff them in. It’s a straight line with no thinking.

In agentic RAG, you put a small decision-maker in charge of retrieval. An agent. And this agent gets to decide things. Does this question even need a lookup, or do I already know it? If it needs one, what should I search for? Did the results actually answer it, or should I search again with a better query? Do I need to break this into sub-questions first?

Back to the exam one more time. Naive RAG is a student who grabs one page for every question, every time, without thinking. Agentic RAG is a student who thinks first. “This question is easy, I know it, no need to look anything up.” Or “this is a tricky multi-part question, let me look up the first part, then use that to look up the second part.” Or “the page I found doesn’t actually answer this, let me search again.” It’s a student who uses judgment instead of running the same reflex every time.

Why is this the direction everything is going? Because it fixes the deepest flaw in naive RAG. Naive RAG decides what’s relevant before the model has even started thinking about the problem. And often you just can’t know that up front. What’s relevant only becomes clear once the reasoning is underway. An agent can go fetch things in the middle of reasoning, exactly when it figures out what it actually needs. That’s strictly more capable than deciding everything before you start.

There’s a related idea worth a mention. Memory. An agent that remembers your past questions, your preferences, the documents you keep coming back to, gets to give you answers shaped by all of that. Retrieval plus memory is how these assistants start feeling like they actually know you instead of resetting every single time. I build retrieval with memory into a local app in one of my videos, so if that idea interests you, that’s the one to watch.

## When you should NOT build all this

Now let me be honest with you, because I don’t want you over-building.

You do not need hybrid search, reranking, agentic loops, knowledge graphs, and a full eval dashboard for every project. If you build all of that for a tiny use case, you’ve made your life harder for no reason.

So when do you skip it?

If your data is small and fits comfortably in a context window, and your questions are simple, just paste the data in and ask. No retrieval pipeline. The “RAG is dead” people are correct for this case, and you should listen to them here.

If you’re building a weekend project or a quick internal tool that five people will use for low-stakes questions, the Saturday version is fine. Ship it. Don’t over-build it.

You start adding these upgrades when the stakes go up and the corpus gets big. When wrong answers actually cost something. When you have thousands of documents. When real users are asking real questions and trusting the output. That’s when naive RAG starts hurting you and each upgrade starts paying for itself.

The real skill in 2026 is not “always use RAG” and it’s not “RAG is dead.” It’s knowing which tool fits which job. Simple case, paste it in. Big serious case, build the proper retrieval system. Multi-hop reasoning, go agentic. You pick based on what the problem actually needs, and you keep it as simple as the problem allows.

That judgment is what separates a RAG app that works from one that quietly gives people wrong answers. And it’s exactly what I try to teach.

## Where to go from here

So if you’ve read this far, you already get more about production RAG than most people arguing about it online. Let me give you a clear path to actually build this stuff, from beginner to the good version.

If you’re brand new, start with my full walkthrough that explains what RAG is in under 30 minutes. That’s here: [What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes](https://www.youtube.com/watch?v=MBDiJAWx8xk&t=896s)

Then build the Saturday version yourself, on your own machine, fully local. I created a video and build a local RAG app with Ollama, ChromaDB, and Flask, and you can follow along line by line: [Build a Local RAG App In 26 Minutes (Ollama + ChromaDB + Flask)](https://www.youtube.com/watch?v=Q1GnzRs3RbI&t=1437s)

And when you’re ready for the upgrade path, this is the one. I build a local RAG app with hybrid search, reranking, and memory, using Ollama and FastAPI: [Build a Local RAG App with Hybrid Search, Reranking & Memory (Ollama + FastAPI)](https://www.youtube.com/watch?v=d6ieC2pHikk)

If you like how I explain things and you want a proper structured course to go deeper than a video can, these are the ones I point people to.

- For the concepts done really well, [Retrieval Augmented Generation by DeepLearning.AI](https://imp.i384100.net/WOYm3M).
- For a full certificate that covers RAG and agentic AI together, the [IBM RAG and Agentic AI Professional Certificate](https://imp.i384100.net/DW334o).
- For a focused specialization on retrieval specifically, [Retrieval Augmented Generation Specialization by Packt](https://imp.i384100.net/DWAxBd).
- For LLMs and RAG from the ground up, [Large Language Models and RAG by Udacity](https://click.linksynergy.com/deeplink?id=Vrr1tRSwXGM&mid=53187&murl=https%3A%2F%2Fwww.udacity.com%2Fcourse%2Flarge-language-models-llms-and-retrieval-augmented-generation-rag--cd13318).
- For hands-on building with LangChain, [RAG with LangChain by DataCamp](https://datacamp.pxf.io/yZrd52).
- And if you want the wide engineering track, LLMs, RAG, QLoRA, and agents in one, the [AI Engineer Core Track by Udemy](https://trk.udemy.com/MKoego).

So that’s the full rundown. The Saturday pipeline falls apart in production, and now you know the six reasons it falls apart and the fix for each one. You chunk by meaning instead of by character count. You search by meaning and by keyword at the same time. You rerank so your top results are actually your best ones. You let the system loop when a question needs more than one lookup. You hand the model a small clean set of chunks instead of a giant pile. And you measure each stage so you can see what broke when something breaks. Then you build only as much of this as your project actually needs.

Try one of these fixes on your own app this week. Start with reranking, honestly, because it’s the smallest change with the biggest payoff. Add it, measure before and after, and watch how many of your wrong answers just quietly disappear.

And if you build something with it, come tell me. I read the comments.