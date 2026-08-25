---
title: "Why Your RAG Chatbot Gives Wrong Answers: It's a Chunking Problem"
source: "https://www.youtube.com/watch?v=BX_ruyImEaY"
creater: "[[MLTut]]"
published: 2026-06-08
created: 2026-08-04
description: "Chunking in RAG is the reason your retrieval augmented generation pipeline gives wrong answers, and most people don't catch it until something breaks in production.In this video, you'll see exactly"
tags:
  - "Yt"
---
# Why Your RAG Chatbot Gives Wrong Answers: It's a Chunking Problem
Source: [YT](https://www.youtube.com/watch?v=BX_ruyImEaY)
![](https://www.youtube.com/watch?v=BX_ruyImEaY)

Chunking in RAG is the reason your retrieval augmented generation pipeline gives wrong answers, and most people don't catch it until something breaks in production.  
  
In this video, you'll see exactly how document chunking works inside a RAG system, why bad chunk boundaries silently destroy retrieval accuracy, and which chunking strategy to actually start with when you're building a RAG chatbot on your own docs.  
  
Most RAG tutorials walk you through setting up a vector database, picking an embedding model, wiring up LangChain or LlamaIndex, and connecting it to ChromaDB or Pinecone, but they skip over the part that quietly breaks everything: where your text splitter cuts the document. Whether you're using LangChain's RecursiveCharacterTextSplitter, a fixed-size splitter, or a semantic chunking approach, the wrong chunk size or zero overlap can send your retriever after the completely wrong piece of text, and the LLM will answer confidently with whatever it gets.  
  
This video covers the three main chunking strategies, fixed-size chunking, recursive chunking, and semantic chunking, and breaks down when each one makes sense. You'll also learn why chunk overlap matters, how to set chunk size for dense policy documents versus longer technical docs, and why most production RAG systems should start with recursive splitting before even thinking about semantic chunking.  
  
By the end you'll have a clear decision framework for RAG document chunking that works whether you're building on top of OpenAI, an open source LLM, or running a fully local pipeline.  
  
Want to go further and build the full pipeline?  
  
\- DeepLearning.AI's RAG course on Coursera walks you through the entire system end to end, document loading, chunking, embedding, retrieval, and deployment: https://imp.i384100.net/WOYm3M  
  
\- If your retrieval is still off even after fixing chunking, this one goes deeper, Advanced Retrieval for AI with Chroma covers exactly that: https://imp.i384100.net/aN2EvZ  
  
Some links above are affiliate links. If you enroll through them I may earn a small commission at no extra cost to you. I only recommend courses I've personally found worth it.  
  
#RAG #RetrievalAugmentedGeneration #Chunking #RAGChunking #LangChain #LlamaIndex #VectorDatabase #SemanticChunking #RecursiveChunking #ChunkingStrategies #RAGPipeline #RAGTutorial #AIEngineering #LLM #GenerativeAI #MachineLearning #DataScience #AIDevs #PythonAI #ChromaDB  
  
  
On this channel, I teach Python, NumPy, Machine Learning, Deep Learning, and practical AI tools like Claude Code in a clear and structured way.  
  
You’ll find beginner-friendly Python tutorials, data science fundamentals, real coding examples, and full course series focused on building strong technical foundations.  
  
I also cover modern AI workflows, developer tools, and applied machine learning concepts to help you move from basics to real-world implementation.  
  
If you are learning Python for data science, exploring AI tools like Claude Code, or building skills for a machine learning career, this channel is designed to guide you step by step.  
  
Subscribe for complete course series and consistent technical learning.

## Transcript

**0:04** · The easiest way to understand chunking is to see it break.

**0:08** · So, imagine this. You have built a rag chatbot on your company's docs. User comes in, asks a totally normal question. What's the refund window for enterprise customers? You have got the policy PDF answers in there.

**0:22** · The AI answers confidently, but it's wrong.

**0:26** · 30 days, it says. Real answer is 90.

**0:30** · And here's the part that gets me.

**0:32** · Nothing looked off. No error, no warning, no low confidence score.

**0:38** · Just a wrong answer that looked completely normal, which means every answer your chatbot gives, you genuinely can't tell which one to trust. That's what makes this so frustrating to debug.

**0:49** · You have probably heard people say chunking is the problem. And yeah, it usually is.

**0:55** · But just knowing that doesn't help you.

**0:57** · You need to actually see why it breaks and what to do instead.

**1:02** · By the end of this video, you will have a concrete strategy to start with, and you will know exactly when to switch things up.

**1:09** · All right, let's get into it. So, here is the thing. Before your documents go into the database, you have to cut them up into smaller pieces.

**1:18** · Those pieces are called chunks, and the way you cut them, where those boundaries land, that's what determines where your AI find the right information or not.

**1:28** · Let me show you what went wrong in that example.

**1:32** · The policy doc had two sentences right next to each other. First one said, "Refund policy for standard customers is 30 days."

**1:41** · Second one said, "Enterprise customers qualify for a 90-day refund window."

**1:47** · Now, with bad chunking, those two sentences end up in completely separate chunks.

**1:52** · So, when someone asks about enterprise refunds, the system goes looking for the best match. It finds a chunk that mentions refund policy and a number.

**2:02** · Looks great, right? Meanwhile, the enterprise chunk got cut off from the sentence before it.

**2:08** · Without that context, it doesn't look relevant anymore. So, it never gets retrieved, never reaches the model.

**2:15** · That's the whole failure right there.

**2:17** · Bad cut.

**2:18** · Wrong chunk retrieved, confidently wrong answer.

**2:22** · And the scary part is nothing in the output tells you that happened. Okay, so there are three main ways to chunk your documents. Simple to start, let's go through them.

**2:32** · First one is fixed-size chunking. You say, "Cut every 500 tokens." And that's exactly what it does.

**2:40** · Every 500 tokens, slice. Doesn't matter if you are mid-sentence, mid-thought, whatever.

**2:47** · Super simple to set up, but you are going to get some ugly cuts.

**2:51** · Second one is recursive chunking. This one is a smarter. Instead of just cutting at a fixed number, it looks for natural breaks point first. Paragraph breaks, line breaks, spaces. It's trying to find the cleanest place to cut that is still keeps your chunks under the size limit.

**3:10** · So, instead of slicing mid-sentence, you are getting complete thoughts.

**3:15** · This is the one most production systems should start with.

**3:19** · And the third one is semantic chunking.

**3:22** · This one actually reads the meaning of your text.

**3:25** · It groups sentences together based on how related they are and cut when the topic shifts. Really clean chunks, but it's expensive. It has to process every single sentence in your entire document library before you even start indexing.

**3:41** · So, the cost adds up fast.

**3:43** · Now, here is one more thing I want to cover here, and that is overlap. Instead of each chunk is starting right where the last one ended, you let them overlap a little.

**3:54** · Like 10 to 20% of your chunk size.

**3:57** · So, if you are at 500 tokens, you are overlapping by 50 to 100 tokens.

**4:02** · What that means is a sentence near the edge of a chunk shows up in the next chunk, too. So, nothing important gets stranded at a boundary. Okay, so three strategies, overlap as your safety net.

**4:14** · Which one do you actually go with? Start with recursive. Seriously, not semantic, not fixed, recursive.

**4:21** · Here is why. Semantic chunking is better, but only by a small margin. And to get that improvement, you have to process every sentence in your whole document corpus just to do the chunking before any user has even asked a question. That extra cost and extra time for a gain that probably won't matter until you're already in production and measuring things carefully. So, here is how I would think about it as a ladder. First rung, start with recursive chunking.

**4:49** · Chunk size somewhere between 200 and 500 tokens.

**4:53** · Overlap at 10 to 20%. If you have got something like a policy PDF, go smaller.

**4:59** · The info is dense and is fast-paced.

**5:02** · If you have got longer technical docs, go bigger. So, ideas don't get split across chunks.

**5:08** · This setup gets you accurate results fast without overcomplicating things.

**5:13** · Second rung, if your documents have real structure to them, like markdown headers or HTML hierarchy, switch to a structure-aware splitter.

**5:22** · These cut at actual section boundaries instead of guessing.

**5:26** · Just check your libraries' docs for the right one to use.

**5:30** · Third rung, semantic chunking. But only once you are live, you have actually measured your retrieval quality, and you have found a specific problem you are trying to solve.

**5:40** · Not on day one, seriously. Keep recursive first, see how it perform, then upgrade if you have got a real reason to. All right, so back to that chatbot. The original dog was chunk with fixed size of splitting at 200 tokens, zero overlap. The enterprise refund sentence got cut right in the middle two incomplete chunks. Neither one had the full answer. Switch to recursive chunking at 500 tokens with 10% overlap.

**6:08** · That sentence it stays together. The right chunk gets retrieved. And the AI gives the right answer. That's really all it is.

**6:16** · Chunking is not the exciting part of building rag systems.

**6:20** · Nobody demos it at conferences. But it is the part where things quietly go wrong. And now you know exactly where to look when they do. If you want to go further with this, like actually building a full pipeline, handling real documents, deploying it.

**6:36** · Deeplearning.AI has two short courses worth bookmarking. The first is their rag course on Coursera. Walks you through the whole system end to end. The second is called advanced retrieval for AI with Chroma.

**6:50** · That one goes deeper on exactly what we covered today.

**6:54** · What to do when your retrieval is still is not working even after you have fixed your chunking.

**6:59** · Both links are in the description. The links in the description are affiliate links, which means if you buy through them, I get a small commission at no extra cost to you.

**7:09** · I only link things I have actually gone through.

**7:12** · If you understood what is chunking, hit like. It helps other find this before they spend hours looking in the wrong place. Thanks for watching. I am Zafar and on ML Tube, I teach data science and machine learning in a simple step-by-step way.

**7:28** · Practice a little and I will see you in the next video. If you found this video helpful, don't forget to like, share and subscribe to ML Tube for more AI and machine learning tutorials.