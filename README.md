# 🧠 NexusDB

> **An AI-native Personal Knowledge Management (PKM) system designed for agentic workflows, atomic knowledge, and long-term thinking.**

NexusDB is an AI-first Personal Knowledge Management (PKM) system that combines **Zettelkasten**, **Maps of Content (MOCs)**, knowledge engineering, and autonomous AI workflows to build a scalable knowledge graph for both humans and Large Language Models (LLMs).

---

## ✨ Features

- 🧩 Atomic knowledge architecture
- 🤖 AI-native workflow design
- 🔄 Automated knowledge lifecycle
- 📚 Structured knowledge ingestion
- 🗺️ Automatic Map of Content (MOC) generation
- 🔍 Duplicate detection
- ✅ Frontmatter and metadata validation
- 📈 Graph-friendly knowledge organization
- 🎯 Optimized for AI-assisted knowledge management

---

## 🏗️ Repository Structure

```text
nexusdb/
├── .antigravity/              # AI operating system
│   ├── archive/
│   ├── automations/
│   │   ├── lib/
│   │   ├── duplicate_detector.py
│   │   ├── generate_mocs.py
│   │   ├── raw_lifecycle.py
│   │   └── validate_tags.py
│   ├── rules/
│   ├── skills/
│   ├── templates/
│   └── GEMINI.md
│
├── .antigravity_backup/
├── .agents/
├── .obsidian/
│
├── 01_RAW/
│   ├── CAPTURE/
│   ├── PROCESS/
│   └── SOURCE/
│
├── 02_NEW-KNOWLEDGE/
├── 03_MOC/
├── NODES/
├── NOTES/
│
├── tests/
│
├── AGENT.md
├── config.yaml
├── GEMINI.md
├── HOME-BASE.md
├── README.md
├── requirements.txt
└── VAULT-STRUCTURE.md
```

---

## 🧠 Knowledge Pipeline

```text
Capture
   │
   ▼
01_RAW/CAPTURE
   │
   ▼
01_RAW/PROCESS
   │
   ▼
01_RAW/SOURCE
   │
   ▼
02_NEW-KNOWLEDGE
   │
   ├────────► NOTES
   │
   ├────────► NODES
   │
   ▼
03_MOC
```

Knowledge moves through a structured lifecycle before becoming part of the permanent knowledge graph.

---

##
```
