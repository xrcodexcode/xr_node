---
id: "b8c9d0e1-f2a3-4456-789a-bcdef0123456"
title: Agentic RAG
type: atomic-note
status: active
created: "2026-08-02T17:39:00"
modified: "2026-08-02T17:43:00"
review: "2026-09-02"
confidence: 95
tags:
  - concept
  - ai
  - rag
  - agent
aliases:
  - Autonomous RAG
owner_moc: "[[yt-moc]]"
source:
  title: "What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"
  author: "MLTut (Hadel Zafar)"
  url: "https://www.youtube.com/watch?v=MBDiJAWx8xk"
  published: "2026-05-04"
  accessed: "2026-08-02"
  locator: "20:24 - 20:59"
---

# Definition
**Agentic RAG** is an advanced RAG paradigm where an autonomous AI agent dynamically directs the retrieval process using tool calls, evaluating retrieved results, executing sub-queries, and iteratively refining retrieval paths rather than following a static single-pass retrieval pipeline.

---

# Python Implementation (LangChain Tool Calling Agent)

```python
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_tool_calling_agent
from langchain_core.prompts import ChatPromptTemplate

# 1. Define Vector Search Tool for the Agent
@tool
def search_knowledge_base(query: str) -> str:
    """Searches the vector database for corporate policy and documentation."""
    # Simulated vector retrieval
    return f"Retrieved Chunk: Policy for {query} specifies 14-day refund window."

tools = [search_knowledge_base]

# 2. Agent Controller Initialization
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.0)
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are an AI research assistant. Use search tools as needed to gather facts before answering."),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}"),
])

agent = create_tool_calling_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

# 3. Execution Call (Agent decides tool usage dynamically)
response = agent_executor.invoke({"input": "What is our policy for software refunds?"})
```

---

# Related Notes
- [[Retrieval Augmented Generation]] — Next-generation evolution.
- [[RAG Pipeline Architecture]] — Dynamic vs static pipeline comparison.
- [[GraphRAG]] — Multi-document relational knowledge retrieval.

---

# Source
- MLTut (Hadel Zafar), *"What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes"*, [YouTube](https://www.youtube.com/watch?v=MBDiJAWx8xk).
