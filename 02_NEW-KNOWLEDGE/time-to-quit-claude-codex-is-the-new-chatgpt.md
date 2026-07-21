---
id: a2d1f435-0810-4f51-b844-8c858e391b17
title: "Detailed Study Notes — Time to Quit Claude | Codex is the New ChatGPT"
type: literature-note
status: learning
domain: self-improvement
source_type: youtube
created: 2026-07-21
updated: 2026-07-21
review: 2026-10-21
confidence: 100
version: 1
aliases: []
tags:
  - reference
  - beginner
owner_moc: YouTube Map of Content
sources:
  - 01_RAW/SOURCE/time-to-quit-claude-codex-is-the-new-chatgpt.md
related: []
schema_version: 4
---

# Detailed Study Notes — Time to Quit Claude | Codex is the New ChatGPT

## 📖 Ingestion Summary
This comprehensive note aggregates the complete, chronologically sequenced learnings from Vivek Mishra's video *"Time to Quit Claude | Codex is the New ChatGPT"*.

---


## 🎬 Part 1 Summary & Key Highlights

## 📖 Segment Overview
This detailed note covers the first 30 minutes of the transcript, introducing why the shift from standard ChatGPT/Claude to Codex is happening, explaining the 5-part Codex framework for real work, and detailing the installation of Codex and Wispr Flow.

---

## 📽️ Introduction: Why Codex Now (00:00:00 – 00:07:23)
- **The Shift**: While standard ChatGPT might feel limited compared to Claude, shifting to Codex (a project built on top of advanced AI execution) provides a much higher level of intelligence and automated control over the computer system.
- **Audience**: Codex is for everyone, not just programmers. Non-coders can leverage it by providing rich, structured context.
- **The Context-Outcome Handoff**: 
  - Handoffs require more than a simple prompt.
  - **Context**: Materials, background, examples, goals, files (CSV, PDF, e-books).
  - **Outcome**: The specific, tangible result you want (e.g. an Instagram caption that drives conversion for a launch).
  - **Review & Changes**: The AI's outcome is treated as a working draft to inspect, iterate, and refine.

---

## 🧠 The Codex Framework: 5 Ways to Get Real Work Done (00:07:23 – 00:13:11)
To utilize Codex effectively, workflows are organized into 5 levels:
1. **Make Sense**: Organizing files, summarizing context, preparing study paths, and comparing data.
2. **Make Decisions**: Conducting research, analyzing trends, and validation/proof-checking arguments.
3. **Make Deliverables**: Generating assets you can share (reports, task trackers, dashboards, presentations, websites).
4. **Make Changes**: Editing, iterating, and adapting files/deliverables dynamically.
5. **Make it Repeatable**: Converting one-off tasks into reusable assets (templates, skills, automations).

---

## 🛠️ Installing Codex and Wispr Flow (00:13:11 – 00:27:39)
- **Codex Desktop App**: Download the Codex desktop app. Keep "Codex" selected rather than "ChatGPT Work". 
  - *Key Difference*: Codex provides advanced control to run commands, debug code, and manage file operations directly at the project/folder level.
- **Wispr Flow**: A cross-platform voice dictation utility.
  - Allows you to hold the function key to dictate text instantly in any text area.
  - Setup includes promo options (VIVEKMISHRAXWISPR) for a free 60-day trial of Wispr Pro.
- **Project Structure in Codex**: Codex always operates at the folder/project level. Users create or import a folder (e.g., a project workspace) where all context, chats, and output files reside.

---

## 🔌 Understanding Plugins & Custom Plugins (00:27:39 – 00:30:00)
- **Plugins**: Used to hook Codex into local folders and tools.
- **Custom Plugins**: Can be built from scratch to extend Codex's capabilities (though the speaker notes that establishing custom Model Context Protocol (MCP) servers is often superior to building custom plugins).

---

## 🎬 Part 2 Summary & Key Highlights

## 📖 Segment Overview
This segment covers the second 30-minute block of the video transcript, detailing the usage of `AGENTS.md` for folder governance, converting PowerPoint slides into interactive websites, and the fundamental definition of a "Skill".

---

## 📜 What Is AGENTS.md (Setting Instruction Rules) (00:33:24 – 00:48:41)
- **Concept**: `AGENTS.md` is a Markdown file placed at the root of a project folder that dictates folder-specific rules, instructions, and behaviors for Codex.
- **How It Works**: Whenever a new chat session starts in that folder, Codex parses the `AGENTS.md` rules to govern its output format and tool constraints.
- **Workflow Control**: 
  - Allows you to set a rule (e.g. "always output reports in a specific format", "do not write code without explaining test metrics").
  - Helps organize files and schedule preparations automatically based on instructions.
- *Key Detail*: Markdown (`.md`) is the native language Codex reads best. Formatting constraints inside `AGENTS.md` are executed with high fidelity.

---

## 🌐 Turning a PPT Into a Deployable Slide Website (00:48:41 – 00:53:29)
- **Workflow**:
  - The user uploads a standard PowerPoint (.ppt) presentation.
  - Codex uses a slide-builder skill to parse the layout and slide text.
  - It generates a deployable, interactive web interface (a responsive HTML/CSS slide deck).
  - The website can be hosted and previewed directly within Codex's environment with zero external server dependencies.

---

## 🛠️ What Is a Skill? (Explained & Demoed) (00:53:29 – 01:00:00)
- **Definition**: A **Skill** is a single-purpose, highly focused, reusable instruction block or script that tells Codex *how* to perform one specific task.
- **Contrast**: 
  - *Prompts* are one-off messages.
  - *Skills* are installed assets in your Codex library, executed repeatedly across different projects.
- **Demonstration**: The speaker demonstrates the **Watch & Summarize Skill**, which:
  - Downloads a YouTube video transcript.
  - Parses and cleans ASR errors.
  - Outputs a high-yield summary document.
  - Publishes the document directly to a user's Google Doc using integrations.

---

## 🎬 Part 3 Summary & Key Highlights

## 📖 Segment Overview
This segment covers the third 30-minute block of the video transcript, detailing the installation and use of the Ultimate Prompt Builder skill, a tour of the personal skills library, and using desktop screenshot shortcuts to provide visual context.

---

## 🛠️ Installing the Ultimate Prompt Builder Skill (01:04:13 – 01:06:31)
- **Ultimate Prompt Builder**: A community-contributed skill that takes draft inputs and structures them into optimized, high-fidelity system prompts.
- **Workflow**:
  - Installed directly via Codex settings by linking the github repository.
  - Generates highly structured outputs containing prompt variables, format parameters, and constraints.
  - Used to build other skills and maintain prompt-engineering standards.

---

## 📂 Touring the Personal Skills Library (01:06:31 – 01:25:28)
- **Concept**: The personal skills library represents the core capabilities available to a user's Codex assistant.
- **Skill Modularity**: 
  - Skills are reusable and live in the `.antigravity/skills/` directory.
  - Examples shown include: App Builder, PDF Summarizer, Watch & Ingest, and Presentation Website.
- **Why it Matters**: Having a libraries of pre-coded skills prevents prompt redundancy and ensures that complex multi-step processes (e.g. running research and exporting it) are triggered with a simple command.

---

## 🖥️ Screenshot Shortcut via Computer Use Settings (01:25:28 – 01:30:00)
- **Workflow**:
  - The user configures a keyboard shortcut for taking screenshots in the computer settings.
  - Codex uses its visual understanding capabilities to parse the active screenshot image instantly.
  - **Use Case**: Taking a screenshot of an ongoing error or webpage layout and feeding it to Codex. It analyzes the visual structure (e.g. diagnosing CSS layout bugs or extracting text from a locked PDF view) and implements fixes directly.

---

## 🎬 Part 4 Summary & Key Highlights

## 📖 Segment Overview
This segment covers the fourth 30-minute block of the video transcript, explaining how to export AI research to Google Docs and how to build a reusable presentation skill.

---

## 📄 Exporting AI Research to Google Docs (01:33:33 – 01:40:10)
- **Workflow**:
  - Research files generated inside Codex (e.g. video summaries, parsed data reports) can be long and inconvenient to read in a raw text window.
  - Codex connects to Google Docs via API plugins.
  - With a simple instruction, Codex formats the entire text cleanly and publishes it directly as a new document in the user's Google Drive.
- **Benefits**: Encourages team collaboration, preserves clean document layout, and exports information easily out of the sandbox.

---

## 🎨 Creating a Reusable Presentation Skill (01:40:10 – 02:00:00)
- **Problem**: Manually designing slide presentations takes significant operational time.
- **Solution**: Create a custom, reusable **Presentation Builder Skill**.
- **Execution Details**:
  - The skill is defined with rules regarding layout, colors, and content structure.
  - It uses integration engines (like Gamma or slide HTML engines) to compile information into interactive presentations.
  - The user only needs to supply the basic raw topic or outline. The skill handles content framing, slide splits, headings, and formatting details automatically.
- **Example Shown**: A custom Independence Day presentation outlining "Freedom with Responsibility" and "Eco-Friendly Independence Day," built in seconds using the custom skill.

---

## 🎬 Part 5 Summary & Key Highlights

## 📖 Segment Overview
This segment covers the fifth 30-minute block of the video transcript, detailing the automation of expense tracking via Gmail, a comparison between custom plugins and MCP servers, and the active execution of desktop control (Computer Use).

---

## 📧 Automating Daily Gmail Expense Tracking (02:00:47 – 02:17:52)
- **Workflow**:
  - Setting up connection protocols to Gmail to parse transaction receipts.
  - Codex reviews incoming emails from linked bank accounts.
  - It extracts the exact expenditures and income for the past 30 days.
  - The results are compiled and posted directly to a financial tracking dashboard (e.g. tracking payments to Anthropic, Wispr Flow, etc.).
- **Value**: Automates manual accounting and aggregates multi-bank transactions into a single, clean overview.

---

## 🔌 Custom Plugins vs. MCP Servers (02:17:52 – 02:20:03)
- **Plugin Protocol**: Classic custom plugins use standard HTTP endpoints and API keys. They can be slow to configure and require manual backend hosting.
- **Model Context Protocol (MCP)**:
  - An open-standard connector introduced by Anthropic.
  - Connects Codex or other AI clients to external databases, filesystems, and APIs instantly.
  - Acts as a unified "connector" interface for the AI, similar to software drivers.
  - *Key Difference*: MCP servers are much faster to set up and run, allowing AI to interact with system tools with minimal token overhead.

---

## 🖥️ Computer Use: Letting Codex Control Your Desktop (02:20:03 – 02:30:00)
- **Concept**: Computer Use enables Codex to control your Chrome browser and operating system desktop directly.
- **How It Works**:
  - The AI captures screenshots, detects coordinates of screen elements (buttons, inputs), and executes mouse movements, clicks, and keystrokes.
  - **Demonstration**: Codex controls the desktop to navigate a browser and automatically create a complex mind map.
  - **Capability**: Can execute scheduled workflows even when the laptop is in sleep mode.

---

## 🎬 Part 6 Summary & Key Highlights

## 📖 Segment Overview
This final segment covers the last part of the video transcript, detailing how scheduled/recurring tasks operate, explaining MCP configuration settings, and demonstrating building an automated study plan via the Arizal MCP server.

---

## ⏱️ How Scheduled/Recurring Tasks Work (02:30:25 – 02:39:34)
- **Concept**: Users can schedule Codex or ChatGPT to execute recurring tasks (e.g. daily audits or weekly reports) without manual intervention.
- **Workflow**:
  - The AI runs background polling loops or cron jobs.
  - When the scheduler fires, the AI wakes up, processes the target workspace, and compiles logs.
  - Helps automate routine workflows (like expense sorting or graph health scans).

---

## 🔌 Connecting MCP Servers (02:39:34 – 02:44:16)
- **Arizal.app**: A life planning tool that exposes an MCP server for task and goal management.
- **Configuration**:
  - Users copy the API and MCP URL from the Arizal settings page.
  - Add the custom URL to Codex's MCP configuration settings.
  - Codex prompts for authorization (e.g. OAuth or Bearer Token redirects) to establish the client-server connection.
  - *Analogy*: *"MCP is the interface built specifically for the AI, while standard web pages are the interface built for humans."*

---

## 🎓 Building an Exam Study Plan with Arizal MCP (02:44:16 – 02:55:04)
- **Scenario**: A student needs to prepare for comprehensive exams (Maths, English, Biology, Physics, Chemistry) in exactly two months and feels overwhelmed.
- **Workflow**:
  - The user asks Codex to organize their preparation.
  - Codex calls the Arizal MCP server to create a dedicated education workspace.
  - **Plan Generation**: Codex automatically writes and structures:
    - **Goals**: Exam readiness across all 5 subjects.
    - **Subgoals**: Topic splits (e.g. past paper revisions, formula checks).
    - **Tasks**: Daily dated tasks automatically mapped out.
    - **Time Blocking**: Scheduling specific study hours.
    - **Habits**: Tracking learning consistency.
  - **Outcome**: The entire structure is written directly to the Arizal database by the AI, saving hours of manual data entry.

---
