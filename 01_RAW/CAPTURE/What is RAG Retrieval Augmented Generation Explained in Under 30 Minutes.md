---
title: "What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"
source: "https://www.youtube.com/watch?v=MBDiJAWx8xk"
creater: "[[MLTut]]"
published: 2026-05-04
created: 2026-08-02
description: "What is RAG? In this video, I break down Retrieval Augmented Generation from scratch, what it is, how it works step by step, and where it fails, in under 30 minutes.If you've been hearing the term R"
tags:
  - "Yt"
---
# What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes
Source: [YT](https://www.youtube.com/watch?v=MBDiJAWx8xk)
![](https://www.youtube.com/watch?v=MBDiJAWx8xk)

What is RAG? In this video, I break down Retrieval Augmented Generation from scratch, what it is, how it works step by step, and where it fails, in under 30 minutes.  
  
If you've been hearing the term RAG everywhere and you're still not 100% sure what it actually means, this is the only video you need. I've put together a complete guide to RAG that takes you from zero to actually understanding the full pipeline, without any of the jargon that usually makes this stuff harder than it needs to be.  
  
We start with the basics, what an LLM is, why it hallucinates, and why just pasting your documents into ChatGPT doesn't really solve the problem. Then we get into RAG, explained the way it should be explained: retrieval, augmentation, generation, and walked through one piece at a time. You'll see exactly how chunking works, what embeddings actually are, how a vector database fits in, and why semantic search beats keyword search for most real use cases.  
  
After that, we get into the part most beginner videos skip, where RAG breaks. Bad retrieval, stale data, missing information, context overload, and what to do about each one. If you've ever built a RAG chatbot that gave weird answers, this section will tell you why.  
  
Then we go one level deeper into advanced RAG, reranking, query expansion, contextual retrieval, HyDE, agentic RAG, and Graph RAG. These are the techniques that separate a RAG system that frustrates everyone from one that actually works in production. I also cover the "is RAG dead?" question honestly, long context windows vs RAG, where each one wins, and why the answer isn't as simple as Twitter makes it sound.  
  
Whether you're a developer trying to build your first RAG pipeline, someone using tools like Perplexity, ChatGPT Search, Notion AI, or Microsoft Copilot and wondering how they actually work under the hood, or you're just trying to understand retrieval augmented generation for AI work in general, this video has you covered. No code required to follow along. By the end, you'll know what RAG is, how RAG works, and how to start using it today.  
  
If this helped, drop a comment and tell me what you want me to cover next: chunking strategies, building your first RAG app, vector databases, or going deeper into agentic RAG. I'll make the next video based on what you ask for.  
  
Affiliate Disclosure: Some links below are affiliate links. If you purchase through them, I earn a small commission at no additional cost to you. I only recommend courses I've personally reviewed.  
  
📚 Courses mentioned in this video  
🟢 Beginner — Retrieval Augmented Generation (RAG) by DeepLearning.AI on Coursera → https://imp.i384100.net/WOYm3M  
🟡 Beginner to Intermediate — Introduction to RAG, Duke University Guided Project → https://imp.i384100.net/21x9yO  
🟠 Intermediate — RAG, AI Agents and Generative AI with Python and OpenAI 2026 by Diogo Resende → https://trk.udemy.com/DWkmMa  
🔴 Advanced — Ultimate RAG Bootcamp Using LangChain, LangGraph & LangSmith → https://trk.udemy.com/m44Lry  
  
#RAG #RetrievalAugmentedGeneration #WhatIsRAG #RAGExplained #LLM #AI #VectorDatabase #GenerativeAI  
  
Timestamps:  
0:00 Intro  
1:08 What LLMs actually are  
4:19 Why pasting documents doesn't work  
5:45 What RAG is  
6:54 The RAG pipeline step by step  
11:16 Chunking explained  
14:05 Where RAG breaks  
16:48 Advanced RAG techniques  
21:56 Is RAG dead?  
23:26 Tools you can use today  
25:00 Recap  
  
On this channel, I teach Python, NumPy, Machine Learning, Deep Learning, and practical AI tools like Claude Code in a clear and structured way.  
  
You’ll find beginner-friendly Python tutorials, data science fundamentals, real coding examples, and full course series focused on building strong technical foundations.  
  
I also cover modern AI workflows, developer tools, and applied machine learning concepts to help you move from basics to real-world implementation.  
  
If you are learning Python for data science, exploring AI tools like Claude Code, or building skills for a machine learning career, this channel is designed to guide you step by step.  
  
Subscribe for complete course series and consistent technical learning.

## Transcript

### Intro

**0:04** · Here is something that almost nobody tells you when you start using AI tools.

**0:09** · You can give an AI your documents, your files, your entire company's knowledge base, and it will still make things up.

**0:17** · Look at that. Confident, fluent, professional-sounding, and also completely fabricated. This is not a glitch. This is not a bad model. This is how every large language model works by default.

**0:30** · And once you understand why, you will never trust an AI answer the same way again. The thing that fixes this is called rag, and it is the reason why some AI tools can actually answer questions about your documents, your company data, your private files, while others just guess.

**0:49** · By the end of this video, you will understand exactly what's happening inside those tools.

**0:55** · You will know what rag is, how it works step-by-step, where it fails, and how to actually use it.

**1:02** · Whether you are a developer or not, no prior experience needed. So, let's get into it. Before we can understand rag, we need to understand the thing rag is trying to fix.

### What LLMs actually are

**1:14** · So, what is an LLM? LLM stands for large language model. Things like GPT-5, Claude, Gemini, Llama, these are all LLMs.

**1:27** · Here is the honest, simplified version of how they are made. A big company takes a massive amount of text and feeds it into a computer. We are talking about most of the internet. Wikipedia, books, news articles, code, forums, all of it.

**1:43** · The computer goes through all that text and looks for patterns.

**1:47** · Which words appear together, how sentences are usually built, what a question looks like, and what a good answer looks like.

**1:56** · After that process, you have a model.

**1:59** · Something that has absorbed so many patterns that it can hold a conversation, answer questions, write code, and explain ideas.

**2:08** · That's it. Learn from a massive amount of text.

**2:12** · Now, here's the part that trips almost everyone up, and this matters.

**2:17** · When you ask the AI a question, it doesn't go search the internet. It doesn't look anything up. It doesn't read anything new.

**2:26** · It just uses the patterns it already learned to predict what a good answer would look like.

**2:32** · Think of it like autocomplete on your phone. You type two words, and your phone guesses the third.

**2:39** · Because it learned from millions of messages what word usually comes next.

**2:43** · An LLM does the exact same thing.

**2:46** · Just a much bigger scale.

**2:48** · Instead of finishing one word, it finishes a whole thought, a whole answer.

**2:53** · And that's where the problem starts.

**2:56** · Because those patterns were learned at a specific point in time. After that, the model is stopped learning.

**3:03** · The world keeps moving. New things happen. Prices change. Policies update.

**3:09** · The model has no idea.

**3:11** · It's frozen exactly where it was when training ended.

**3:15** · That's problem number one, the knowledge cut off. Problem number two is actually worse. Even for things the model did learn, it can still get facts wrong.

**3:25** · Why? Because it didn't store information like a spreadsheet where every fact has its own cell. It absorbed patterns, and patterns are not the same as precise facts. So, when you ask something very specific, the model fills in the gaps with whatever sounds most likely, and sometimes that's wrong. This is called hallucination. The AI is not lying. It doesn't know it's wrong. It just gave the most pattern matching answer it could find and that answer happened to be incorrect.

**3:55** · So when someone paste their documents into a chat and expects the AI to know them, it doesn't work like that. The model doesn't carefully read your document. It mixes what it sees with everything it already learned and sometimes the old training overrides what's right in front of it. That's the core problem and that's exactly what rag fixes. Now you might be thinking, wait, can't I just paste my documents into the chat and then ask questions?

### Why pasting documents doesn't work

**4:26** · And the answer is sometimes yes for short things.

**4:30** · But here is what breaks down fast. Every AI model has something called a context window. Think of it like a whiteboard.

**4:39** · There is only so much you can write on it at one time.

**4:42** · Early models could only handle a few thousand words at a time. Newer models can handle hundreds of thousands, sometimes over a million.

**4:53** · The problem is most real document collections are massive. Your company wiki, your product documentation, your research papers, you can't paste all of it into a single prompt.

**5:05** · Even when you can, putting everything in doesn't mean the model will pay attention to the right part. There is a well documented issue called lost in the middle. Models tend to pay more attention to the beginning and end of a long prompt and can miss things buried in the center. Newer models have improved on this but it hasn't fully gone away and it's expensive. Every word you put in the context window costs money in API calls. So just pasting everything is not the answer.

**5:34** · What you need is a smarter approach, one where the AI only sees the specific information relevant to the specific question being asked. That's rag. Rag stands for retrieval augmented generation. Three words, let's break them down. Retrieval means find and fetch the right information. Augmented means add that information to what the AI sees.

### What RAG is

**5:58** · And generation means let the AI generate an answer based on it. Put simply, instead of the AI trying to remember everything, you build a system that finds the right documents first, then hands them to the AI to reason over.

**6:12** · Think of it like this.

**6:14** · You hire a new employee, a smart person, but they don't know your company yet.

**6:20** · You don't spend a year teaching them everything before they can do their job.

**6:25** · Instead, you give them access to a filing cabinet, your knowledge base, and when a customer asks a question, they go look it up, pull the relevant file, and answer from that.

**6:36** · That's RAG. The filing cabinet is your vector database, the employee is the LLM, and the process of finding the right file, that's retrieval.

**6:46** · The AI job is not to memorize. Its job is to read and reason. RAG gives it something real to read. Now, let's walk through exactly how this works step-by-step.

### The RAG pipeline step by step

**6:58** · There are two phases in RAG. The first happens before any user ever asks a question. The second happens in the real time when they do.

**7:07** · So, the first phase is indexing.

**7:10** · And the step one is you gather your documents. These could be PDFs, Word files, web pages, Notion pages, support articles, anything.

**7:21** · This is your knowledge base, everything you want the AI to be able to answer questions about.

**7:27** · Step two, you split them into chunks.

**7:30** · You don't store whole documents, you split them into smaller pieces, maybe a few paragraphs each. We will talk more about why this matters in a minute. Step three, each chunk gets converted into an embedding.

**7:44** · This is where most explanations lose people. So, let me be really precise here.

**7:50** · An embedding is just a list of numbers that represents the meaning of a piece of text.

**7:56** · Here is the intuition. Imagine you had to describe every word in English using only three numbers.

**8:02** · Like coordinates on a map. Words with similar meanings would end up close together.

**8:08** · Happy and joyful, close.

**8:10** · Happy and carburetor, far apart.

**8:14** · Embeddings models do this, but instead of three numbers, they use hundreds or thousands.

**8:20** · That gives them enough dimensions to capture really subtle differences in meaning.

**8:26** · So, what's the return window for damaged item? And how many days do I have to send back a broken product? Different words, same meaning, would produce very similar embeddings.

**8:37** · Very close together on this map.

**8:40** · Step four is you will store all these embeddings in a vector database.

**8:45** · A vector database is designed specifically to handle this kind of data.

**8:50** · When you ask it, find me the chunks closest in meaning to this query, it can do that search extremely fast across millions of chunks in milliseconds.

**9:01** · Popular ones, Pinecone, Weaviate, Qdrant, all production-ready and scalable.

**9:07** · Chroma is a great option for getting started locally. And if you're already using PostgreSQL, the PG vector extension lets you skip a separate database entirely.

**9:18** · The phase two is retrieval and generation.

**9:22** · And step five is user ask a question.

**9:25** · What's your refund policy for digital products?

**9:29** · Step six is that question gets converted into an embedding, too.

**9:34** · Same process, same model. Now it's a set of numbers representing what the user is asking about.

**9:41** · Step seven, we search the vector database. We are looking for the chunks whose embeddings are closest to the question's embedding.

**9:50** · Closest in meaning, not just matching keywords.

**9:54** · This is called semantic search, and it's fundamentally different from keyword search.

**9:59** · With keyword search, if the user types "return window" and your document says "refund period", no match.

**10:07** · With semantic search, those mean the same thing, match. This is huge. Most of the time, it means the system understands what someone is asking even when they don't use the exact words in your documents. Though for very niche or technical domains, this can still break down, which is one reason domain-specific embedding model exists.

**10:28** · Step eight is the top results get added to the prompt. Let's say we retrieve three relevant chunks, the system now builds a prompt that looks something like "Here are some relevant passages from our documentation, chunk one, chunk two, and chunk three.

**10:47** · Based on these, please answer, what's the refund policy for digital products?"

**10:53** · Step nine, the LLM reads and responds.

**10:56** · Now, the AI is not guessing. It's reading actual relevant content and producing an answer grounded in it.

**11:03** · If the answer is not in the retrieved chunks, a good system will say, "I don't have that information."

**11:10** · rather than making something up.

**11:12** · That's the whole thing, that's RAG.

### Chunking explained

**11:16** · Here is a step that every beginner underestimates, and it's honestly the thing that separates a RAG system that works from one that frustrates everyone, chunking. When you split your documents into pieces, you are making a decision that affects everything downstream. Two small chunks. Imagine splitting a document about your refund policy into individual sentences.

**11:40** · You retrieve, "Refunds are processed within five business days."

**11:45** · But there is no context.

**11:47** · Five business days for what? Under what conditions?

**11:51** · The AI answers, but misses the nuance.

**11:54** · Two large chunks. Now you keep huge sections, entire pages.

**12:00** · Your retrieval finds the right section, but you are stuffing too much irrelevant text into the prompt.

**12:06** · The relevant sentence is buried, cost goes up, quality goes down.

**12:12** · The goal is chunks that are small enough to be specific, large enough to contain context.

**12:19** · These are a few common chunking strategies.

**12:22** · Fixed-size chunking. It split every 500 tokens or so, roughly 350 to 400 words.

**12:29** · Simple, works okay.

**12:32** · Doesn't care about sentence boundaries, which causes problem.

**12:36** · Next is sentence-based chunking.

**12:39** · It split at sentence boundaries. Better, preserves meaning within sentences.

**12:45** · Next is paragraph-based chunking. It split at paragraph breaks. Usually a good default for documents. Next is semantic chunking.

**12:54** · Use an AI model to detect where meaning shift in the text and split there.

**12:59** · Most accurate, most expensive. Next is sliding window with overlap. Each chunk overlaps with the next by some amount.

**13:08** · So important context near a boundary doesn't get cut off. Very common in practice. There is no single right answer here. The right chunk size depends on your documents. Short FAQ entries, smaller chunks. Long legal documents, bigger chunks with overlap.

**13:24** · And this is exactly the kind of thing you tune, you test, you look at where answers go wrong, you adjust.

**13:31** · Quick heads-up before the next section.

**13:34** · The links in the description are affiliate links, which means if you buy through them, I get a small commission at no extra cost to you.

**13:42** · If you're watching this and thinking, I want to actually build one of these, I have linked a couple of courses in the description that go hands-on with real code.

**13:52** · One on Coursera by deeplearning.ai, one on Udemy. Both pick up exactly where this video leaves off.

**14:00** · Links are below. I will mention them again at the end.

**14:04** · Every explanation of rag I have seen stops at, here is how it works.

### Where RAG breaks

**14:10** · But that's not enough. You need to know where it breaks, because it does break, and why.

**14:17** · So, the failure one is bad retrieval.

**14:20** · The retrieval step finds the wrong chunks. This happens when your chunks are too small and lose context. Your embedding model is weak or poorly suited to your domain.

**14:32** · Or the user's question uses vocabulary very different from your documents.

**14:37** · The LLM sees irrelevant content and produces a bad answer, or confidently answers using the wrong information.

**14:45** · The fix is better chunking, better embedding models, and sometimes re-ranking.

**14:51** · The failure two is missing information.

**14:54** · The answer to a question generally is not in your documents. The retriever returned the closest thing it found, which might be somewhat related, but not actually the answer.

**15:05** · A well-designed rag system will say, I couldn't find that information.

**15:09** · A poorly designed one will hallucinate anyway using the closest retrieval chunk as a springboard.

**15:16** · The fix is good prompt design that tells the LLM to say, I don't know." when it doesn't have the answer.

**15:24** · Failure three is context overload. You retrieve too many chunks or your chunks are too big. The prompt gets massive.

**15:33** · The LLM starts to lose track of what matters. Cost goes up, response times goes up, answer qualities goes down.

**15:41** · The fix is retrieve fewer chunks. Use a re-ranker to filter down to the truly relevant ones before they go into the prompt.

**15:50** · Failure four is stale index. Your documents change, you add a new pricing page, you update a policy. But your vector database hasn't been updated. A user asks about the new pricing, the old document gets retrieved, wrong answer.

**16:06** · The fix is a pipeline that re-indexes documents whenever they change. This is an operational problem, not just a technical one.

**16:15** · Failure five is semantic search doesn't always win.

**16:20** · Sometimes you want exact keyword matching, not fuzzy semantic similarity.

**16:24** · Product codes, order numbers, names, specific model numbers. If a user asks, "What's the warranty on model XR4421?"

**16:34** · Semantic search might return information about similar models. You needed exact match. The fix, hybrid search.

**16:43** · Combining semantic and keyword search.

**16:45** · Many production systems use both. Once you understand this crap, there is a whole layer of techniques that make it dramatically better.

### Advanced RAG techniques

**16:55** · I will walk through the ones that matter most in plain English. So, the first one is re-ranking.

**17:01** · Basic retrieval gets you maybe the top 10 or 20 chunks, but the order is not always right. The most semantically similar chunk is not always the most relevant answer.

**17:13** · Re-ranking adds a second model, specifically trained to score how well does this chunk actually answer this question? To re-sort the results before they go into the prompt.

**17:25** · It's like retrieval is a first-round filter and the re-ranker is a specialist who picks the best from that short list.

**17:33** · Result is significantly better answer quality with the same documents.

**17:38** · Second is query expansion and multi-query rerank. Instead of one search query, the system generates multiple versions, each rephrasing the question from a different angle.

**17:50** · The results are combined and deduplicated before going to the LLM.

**17:55** · You get broader, more complete retrieval, especially useful for vague questions.

**18:01** · Tell me about pricing.

**18:02** · Where one phrasing might miss relevant chunks that a different phrasing would catch.

**18:08** · Also useful for complex questions with multiple components, where a single query can't capture everything the user needs.

**18:17** · The third is contextual retrieval.

**18:20** · Here is one that's often missed.

**18:23** · When you chunk a document, each chunk loses context about where it came from.

**18:28** · A chunk that says, "The exception to this is exception to what?"

**18:34** · Contextual retrieval fixes this by passing each chunk alongside the full original document into an AI model, which writes a short description of what that chunk is about in the context of the whole document.

**18:48** · That description gets prepended to the chunk before it's embedded.

**18:53** · Something like, "This passage is from our returns policy document, section three, discussing exceptions for digital goods."

**19:01** · And in brackets, "Original chunk text."

**19:04** · The key insight is that the context is generated with awareness of the entire document, not just the chunk itself.

**19:12** · That's makes it work. Now the chunk carries its own context wherever it goes.

**19:18** · Anthropic reported up to 67% reduction in retrieval failures using this technique combined with re-ranking.

**19:27** · Especially impactful on long complex documents.

**19:31** · Next is hide, hypothetical document embedding.

**19:35** · This one is clever. Instead of searching for chunks similar to the user's question, you first ask the LLM to generate a hypothetical answer to the question.

**19:46** · Then you search for chunks similar to that hypothetical answer. Why? Because a hypothetical answer is written in the style of an answer, which is often much closer to how your document chunks are written than the original question was.

**20:02** · It sounds circular, but it works.

**20:04** · Particularly well for open-ended or conceptually deep questions. For very specific fact-bound queries, it can backfire. If the hypothetical answer hallucinate details that point retrieval in the wrong direction.

**20:19** · Worth testing in your specific use case before committing to it.

**20:24** · The next one is agentic rag.

**20:26** · In simple rag, the pipeline is fixed.

**20:29** · User ask, retrieve, and answer.

**20:32** · Agentic rag gives the LLM some control.

**20:35** · The AI can decide, should I search, search again, ask a clarifying question, use a different search strategy?

**20:43** · This is where rag meets AI agents.

**20:46** · The model actively directs the retrieval process rather than passively receiving retrieved chunks.

**20:52** · For complex questions that require multiple lookups or synthesizing information from different sources, this is where it goes.

**21:00** · The last one is graph rag.

**21:03** · Standard rag treats documents as independent chunks, but many real knowledge bases have relationships. Topic A connects to topic B. Policy X references exception Y.

**21:15** · GraphRAG builds a knowledge graph, a network of concepts and their relationships.

**21:21** · And uses that structure to find connections that pure vector search would miss.

**21:27** · GraphRAG was popularized by Microsoft Research in 2024 and is now widely used in enterprise knowledge systems.

**21:35** · It works especially well for questions that require connecting multiple pieces of information across documents.

**21:42** · If the techniques in this section are the ones you want to actually implement, reranking, agentic pipelines, evaluations, the courses I mentioned earlier go deep on exactly this. The link's in the description.

### Is RAG dead?

**21:56** · You might have seen headlines recently.

**21:58** · RAG is dead. Long context windows will replace RAG.

**22:02** · Agents don't need retrieval. Let's be honest about this.

**22:07** · Context windows have gotten huge.

**22:09** · Gemini's current models handle up to million tokens.

**22:12** · Claude's standard context window is 200K tokens with 1 million available via the API.

**22:18** · So, can you just dump everything into the context and skip RAG?

**22:22** · Sometimes, yes.

**22:24** · For small, well-defined knowledge bases that fit comfortably in context, that might work fine.

**22:30** · But, here is what RAG is dead misses.

**22:33** · One, cost.

**22:35** · Sending a million tokens every single API call is expensive, especially at a scale.

**22:41** · Two, latency. More tokens equals slower responses. In a customer-facing product, that matters.

**22:49** · Three, the lost in the middle problem doesn't fully go away just because the window is bigger.

**22:56** · Four, private, constantly changing data.

**22:58** · If your knowledge base gets updated daily, you don't want to re-upload a million tokens every time.

**23:05** · The honest answer is rag is evolving, not dying. The future is a smarter retrieval combined with larger context.

**23:13** · Not one replacing the other.

**23:15** · Simple rag with fixed chunking, that's becoming outdated. Agentic rag, graph rag, contextual retrieval, these are getting more important every month.

### Tools you can use today

**23:26** · Here is something I want to say clearly.

**23:28** · You do not need to be a developer to use rag.

**23:32** · The technique is everywhere.

**23:34** · Here is where you are already using it, maybe without knowing.

**23:39** · Perplexity AI, when you ask a question and it sites sources and shows you links, that's rag.

**23:46** · It retrieves web pages in real time and grounds answer in them.

**23:50** · ChatGPT search, ChatGPT can now search the web automatically and site its sources.

**23:57** · That's real-time retrieval feeding into generation. Rag in action.

**24:01** · Notion AI, when you ask it questions about your workspace, it retrieves from your pages, rag.

**24:08** · Microsoft Copilot retrieves from your organization's documents in SharePoint and Teams.

**24:14** · Now for building your own without code.

**24:17** · First is Flowise. Visual drag and drop rag builder. You connect nodes, document loader, chunker, embedder, vector store, LLM. No coding, free and open source.

**24:30** · Next is Diffy. Similar, more polished UI, has a free tier.

**24:35** · Great for building a rag chatbot over your own documents in under an hour.

**24:40** · Next is Anyscale. Automation platform with rag components built in.

**24:45** · Better for workflows like automatically indexing new documents when they are added to a folder.

**24:51** · If you want to go deeper into any of these tools, drop a comment. I will make dedicated videos on whichever gets the most request. Now, let's bring it all together.

### Recap

**25:02** · LLMs are powerful, but they have two fundamental limits. They don't know anything after their training cut-off, and they can't reliably answer questions about information they were never trained on, like your private documents. RAG fixes this by separating memory from reasoning.

**25:19** · You build an index, you split your documents into chunks, convert those chunks into embeddings, store them in a vector database.

**25:28** · When a user asks a question, that question gets converted into an embedding, too.

**25:33** · You search the vector database for the most relevant chunks.

**25:37** · Those chunks go into the prompt. The LLM reads them and answers.

**25:41** · The LLM job is to reason, not memorize.

**25:44** · RAG gives it something real to reason over.

**25:48** · Good RAG needs good chunking, good embeddings, and you need to know where it breaks.

**25:53** · Bad retrieval, stale data, missing information, and semantic search limitations.

**25:58** · Advanced techniques, re-ranking, contextual retrieval, height, agentic RAG, graph RAG, make it measurably better.

**26:07** · And no, RAG is not dead. It's becoming more sophisticated.

**26:11** · You can start using it today without writing a single line of code.

**26:16** · If you understand RAG and you want to go deeper, two things.

**26:20** · First, drop a comment. Tell me which part confused you or which part you want expanded into its own video. Chunking strategies, how to actually set up Flowise, building your first RAG pipeline in Python.

**26:34** · I will build a series based on what you actually need.

**26:37** · Second, if you want to go from understanding RAG to actually building it, I have linked two courses in the description. I've gone through them before recommending them. They are not free, but they are the most practical ones I found. Hands-on code, real projects. There is a note in the description on what each one covers, so you can pick the right one for your level.

**27:00** · And if the video was useful, share this video with whoever on your team is building with AI right now.

**27:07** · Most people escape this foundation.

**27:09** · Thanks for watching. I am Hadel Zafar and on ML Tube, I teach data science and machine learning in a simple step-by-step way.

**27:18** · Practice a little and I will see you in the next video. If you found this video helpful, don't forget to like, share, and subscribe to ML Tube for more AI and machine learning tutorials.