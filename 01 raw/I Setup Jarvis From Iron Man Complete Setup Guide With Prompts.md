---
tags:
  - "RAW"
tags:
---
Hey folks,

This article will walk you through the steps to setup your own Jarvis. If you are a fan of the Iron Man series, you know Jarvis, the AI agent. But I want to highlight that the voice part of Jarvis which looks cool is the LEAST value adding. What’s most important are the tools and skills Jarvis has access to, and voice is just the interface.

A side note: A bunch of you DM me every week about F1, OPT, STEM OPT, and H-1B timing. I

I’m not a lawyer. But I work closely with the team at Manifest Law. Most immigration lawyers don’t actually understand what it’s like to be on a visa and trying to job hunt at the same time. The Manifest team does.

If you have questions around:

F1, OPT, STEM OPT timing

H1B, cap-gap, or employer sponsorship

Job change, layoff, or status planning

Long-term green card pathways

They offer a free 15-minute consultation for everyone who fills out this form [HERE](https://gomanifestlaw.com/abhijay-quiz)

Let’s dive right into it.

It would mean the world to me if you can subscribe as it helps me keep going!

![](https://substackcdn.com/image/fetch/$s_!ZXsh!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff72a56ed-84c9-4356-ab57-b457468e2112_1536x1024.png)

**Research note:** I checked the official source, documentation, paper, release files, and open bug tracker on August 22, 2026. OpenJarvis changes quickly, so use `jarvis update` carefully and check the [current install guide](https://open-jarvis.github.io/OpenJarvis/getting-started/install/) if you’re reading this much later.

## First, What Are We Building?

[OpenJarvis](https://github.com/open-jarvis/OpenJarvis) is an open-source framework for running a personal AI assistant on your own computer.

It can give you:

- **Local chat** through models running in Ollama
- **A terminal, browser, or desktop interface**
- **Document memory** that indexes files on your machine
- **Tools** for search, calculations, files, Python, and shell commands
- **Connectors** for services such as Google Drive, Gmail, Calendar, Slack, Notion, Oura, and Spotify
- **Voice input and spoken output**, with some setup
- **Scheduled agents** for recurring work

The project comes from researchers connected to Stanford Hazy Research, the Scaling Intelligence Lab, and Stanford SAIL. The code uses the Apache 2.0 license. You can read the [project page](https://openjarvis.stanford.edu/) and the [research paper](https://arxiv.org/abs/2605.17172) yourself.

But OpenJarvis is still alpha software. The package says so in its own [project configuration](https://github.com/open-jarvis/OpenJarvis/blob/main/pyproject.toml).

That matters.

## What OpenJarvis Is Not

OpenJarvis is not an always-listening butler that wakes up when you say its name.

It doesn’t automatically see your desktop, move your mouse, or click around Mac and Windows apps. The official [system access guide](https://open-jarvis.github.io/OpenJarvis/user-guide/system-access/) says there is no general computer-use tool in the current codebase.

There is a `jarvis chat --voice` mode. It records when you press Enter, transcribes your speech, and can read the answer aloud. That’s useful. But the broader voice interface is still marked “Research-Stage” on the [roadmap](https://open-jarvis.github.io/OpenJarvis/development/roadmap/).

It also isn’t automatically private just because the model runs locally.

Cloud model keys, web search, cloud text-to-speech, Google connectors, Slack, remote MCP servers, and anonymous product analytics can all create outbound network traffic.

Local-first is a design choice.

Local-only is a configuration you have to verify.

## The Honest Model Quality Story

The project often cites a Stanford finding that local language models can handle **88.7% of single-turn chat and reasoning queries**. That’s encouraging, but “single-turn” is doing a lot of work in that sentence. A quick summary and a long tool-using workflow aren’t the same task.

The OpenJarvis paper is more direct. When researchers swapped Claude Opus 4.6 for Qwen3.5-9B inside existing personal agent stacks, accuracy fell by **25 to 39 percentage points** across agent benchmarks. Their more advanced configuration search closed much of that gap, but that isn’t what you get from a basic install.

My practical read:

- A small local model is good for private notes, basic summaries, drafting, and simple questions.
- A stronger local model can handle useful research and tool work, if your computer has enough memory.
- Complex coding, long multi-step jobs, and subtle judgment can still expose a real gap.
- A hybrid setup can use a cloud model for hard work, but then the relevant prompt and context may leave your machine.

Don’t judge the whole project by the tiny starter model. And don’t assume a larger model makes every agent action safe.

## What You Need Before Starting

You need a Mac, Linux computer, or Windows PC. A phone or tablet won’t work as the host.

You also need:

- A stable internet connection for the first install and model downloads
- Several gigabytes of free disk space
- A terminal window
- Time for background downloads to finish
- A backup of any OpenJarvis data before changing presets, updating, or uninstalling

**Windows users:** use WSL2 unless you have a specific reason to stay native. The project’s own [WSL2 guide](https://open-jarvis.github.io/OpenJarvis/getting-started/wsl2/) calls it the smoother path. Native Windows support exists, but the official guide still labels it advanced.

### A simple model sizing guide

The installer starts small. That’s good for proving the setup works.

The current [Ollama Qwen3.5 catalog](https://ollama.com/library/qwen3.5/tags) lists these approximate download sizes:

- **Qwen3.5 2B:** 2.7 GB for the default tag. Fine for a smoke test. Expect limited reasoning.
- **Qwen3.5 4B:** 3.4 GB. My default recommendation for a modest laptop.
- **Qwen3.5 9B:** 6.6 GB. A more useful general assistant if you have enough memory.
- **Qwen3.5 27B:** 17 GB. Better hardware territory.
- **Qwen3.5 35B:** 24 GB. The project’s Mac preset suggests 32 GB or more total memory.

Those are model file sizes, not complete runtime memory requirements. The model also needs working memory for its context and generation. Leave headroom for your operating system.

If you have 8 GB of total system memory, stay small.

If you have 16 GB, start with 4B and try 9B only after watching memory pressure.

If you have 32 GB or more, 9B is a sensible starting point. Larger models may work, but speed can fall hard.

## Step 1: Inspect the Installer Before You Run It

The shortest install command downloads a script and sends it straight into your shell.

That’s common. It’s also code execution.

If you want to inspect the Mac, Linux, or WSL2 installer first, run:

```markup
curl -fsSL https://open-jarvis.github.io/OpenJarvis/install.sh | less
```

Press `q` to exit the viewer.

The official installer currently does the following:

1. Installs `uv`, a Python project manager.
2. Clones OpenJarvis into `~/.openjarvis/src/`.
3. Creates a managed Python 3.11 environment.
4. Installs Ollama if needed.
5. Pulls a small starter model.
6. Writes your config to `~/.openjarvis/config.toml`.
7. Adds a `jarvis` command under `~/.local/bin/`.
8. Builds memory and security components in the background.

It may add one PATH line to `.bashrc` or `.zshrc`. It doesn’t replace your existing Python installation.

## Step 2: Install on Your Computer

### Mac

Open Terminal and run:

```markup
curl -fsSL https://open-jarvis.github.io/OpenJarvis/install.sh | bash
```

If macOS asks for the Xcode Command Line Tools, accept. You can also trigger that install yourself:

```markup
xcode-select --install
```

The installer supports Intel and Apple Silicon Macs.

### Linux

Open a terminal and run:

```markup
curl -fsSL https://open-jarvis.github.io/OpenJarvis/install.sh | bash
```

The project reports testing on Ubuntu 22.04 and 24.04, Fedora 40, Debian 12, and Arch.

If `git` or `curl` is missing on Ubuntu or Debian:

```markup
sudo apt update
sudo apt install git curl
```

Then run the installer again.

### Windows With WSL2 (Recommended)

Open PowerShell as Administrator and run:

```markup
wsl --install
```

Restart if Windows asks you to.

Open the Ubuntu app that WSL installed. Inside that Ubuntu terminal, run:

```markup
curl -fsSL https://open-jarvis.github.io/OpenJarvis/install.sh | bash
```

Your OpenJarvis files and models will live inside the WSL filesystem. That’s expected.

### Native Windows (Advanced)

Native Windows requires Windows 10 build 1809 or newer, Python 3.10 through 3.13, Git on PATH, and roughly 5 GB of free space before larger models.

Python 3.14 isn’t supported on this path today.

Open PowerShell and run:

```markup
irm https://open-jarvis.github.io/OpenJarvis/install.ps1 | iex
```

The full requirements and service commands are in the [native Windows guide](https://open-jarvis.github.io/OpenJarvis/getting-started/windows-native/).

## Step 3: Verify the Install Before Customizing Anything

Open a fresh terminal. Then run these one at a time:

```markup
jarvis --version
jarvis config path
ollama list
jarvis doctor
```

You want to see:

- A working `jarvis` command
- A config path under `~/.openjarvis/`
- At least one Ollama model
- A healthy local inference engine

The Rust extension and larger model downloads may still be running in the background. `jarvis doctor` reports their status.

One current bug can make `jarvis doctor` take roughly 160 seconds when inference engines aren’t responding. That’s documented in [open issue #766](https://github.com/open-jarvis/OpenJarvis/issues/766). If it seems frozen, give it a couple of minutes before assuming the whole install failed.

Now send a tiny test:

```markup
jarvis ask "Reply with exactly these five words: my local assistant is working"
```

If that returns a response, you have the base system.

Small win.

### If jarvis says command not found

Open a new terminal first.

If that doesn’t work, reload your shell:

```markup
source ~/.zshrc
```

For Bash:

```markup
source ~/.bashrc
```

You can also test the wrapper directly:

```markup
~/.local/bin/jarvis --version
```

### If it says no running engine was found

Start Ollama:

```markup
ollama serve
```

Leave that terminal open. In a second terminal, run:

```markup
ollama list
jarvis ask "Say hello"
```

### If no model appears

Pull one manually:

```markup
ollama pull qwen3.5:4b
```

Then test it directly:

```markup
jarvis ask -m qwen3.5:4b "Explain what a local language model is in two sentences"
```

## Step 4: Create a Clean Chat Setup

The installer already creates a config file. Back it up before switching presets:

```markup
cp ~/.openjarvis/config.toml ~/.openjarvis/config.toml.backup
```

Use the simple chat preset:

```markup
jarvis init --preset chat-simple --force
```

The `--force` flag matters right now. A current bug blocks preset changes when a config already exists unless you pass it. You can follow [issue #767](https://github.com/open-jarvis/OpenJarvis/issues/767) for the fix.

This command overwrites the active config. That’s why we made the backup first.

Pull the model you want:

```markup
ollama pull qwen3.5:4b
```

Start a multi-turn conversation:

```markup
jarvis chat -m qwen3.5:4b
```

Useful chat commands:

- `/model` shows the active model.
- `/history` shows the current conversation.
- `/clear` clears that chat session.
- `/quit` exits.

At this point, stop and use it for a day.

Seriously.

Don’t connect Gmail, grant shell access, import 200 skills, and create five scheduled agents in your first hour. When something fails, you won’t know which layer caused it.

## Step 5: Tighten Privacy Before Adding Personal Data

OpenJarvis has three data systems people often mix up:

- **Anonymous analytics:** outbound product usage events. These are on by default. The project says chat content, names, file paths, keys, and IP addresses are filtered out. Read the [analytics disclosure](https://open-jarvis.github.io/OpenJarvis/telemetry/) yourself.
- **Local telemetry:** latency, tokens, estimated cost, energy, and power measurements stored in `~/.openjarvis/telemetry.db`.
- **Traces:** records of agent steps and interactions stored locally. These can include your original query, tool activity, and final response.

If you don’t want outbound analytics, edit your config:

```markup
nano ~/.openjarvis/config.toml
```

Add this section if it doesn’t already exist:

```markup
[analytics]
enabled = false
```

If `[analytics]` already exists, change its existing `enabled` line. Don’t create the same TOML section twice.

Then find the `[server]` section and use a loopback address:

```markup
[server]
host = "127.0.0.1"
port = 8000
```

Why bother? Some generated presets currently use `0.0.0.0`, which listens on every network interface. The project has an open bug for that behavior in [issue #770](https://github.com/open-jarvis/OpenJarvis/issues/770).

Save in Nano with `Ctrl+O`, press Enter, then exit with `Ctrl+X`.

Run both security checks:

```markup
jarvis scan
jarvis scan --data-boundaries
```

For a conservative check:

```markup
jarvis scan --data-boundaries --strict
```

The strict command returns an error status for both warnings and failures. A warning doesn’t prove data was sent anywhere. It means the current config contains a possible path outside the local runtime or a sensitive local store.

Read the full [data boundary scan guide](https://open-jarvis.github.io/OpenJarvis/user-guide/data-boundary-scan/) before indexing confidential files.

## Step 6: Pick Your Interface

### Option A: Terminal

Use this first. Errors are visible, and tool confirmations work better here.

```markup
jarvis chat
```

### Option B: Browser App

The browser interface needs Node.js 18 or newer and installs extra Python packages.

Run:

```markup
cd ~/.openjarvis/src
OPENJARVIS_MODEL=qwen3.5:4b ./scripts/quickstart.sh
```

The script starts:

- The OpenJarvis API on

http://localhost:8000

- The browser app on

http://localhost:5173

- Ollama on

http://localhost:11434

Press `Ctrl+C` in that terminal to stop the browser and API services.

If port 8000 is already used on Mac or Linux:

```markup
lsof -i :8000
```

Stop the old OpenJarvis process before running quickstart again.

### Option C: Desktop App

I wouldn’t start here. Get the terminal test working first.

Then install the local server packages into the managed environment:

```markup
cd ~/.openjarvis/src
uv pip install --python ~/.openjarvis/.venv/bin/python -e ".[server]"
jarvis serve --host 127.0.0.1 --port 8000
```

Leave that terminal open. Download the correct desktop package from the [official releases page](https://github.com/open-jarvis/OpenJarvis/releases).

The desktop app connects to the local server on port 8000.

If macOS says the app is damaged after you move it into Applications, the official workaround is:

```markup
xattr -cr /Applications/OpenJarvis.app
```

Only run that for the app you downloaded from the official release page.

## Step 7: Upgrade the Model Without Rebuilding Anything

Ollama makes model changes simple.

Pull a model:

```markup
ollama pull qwen3.5:9b
```

Test it for one request:

```markup
jarvis ask -m qwen3.5:9b "Summarize the pros and cons of running AI locally"
```

Compare it against 4B:

```markup
jarvis ask -m qwen3.5:4b "Summarize the pros and cons of running AI locally"
```

Use the same prompt. Look at response quality, time to first word, total time, and memory pressure.

Pick the smallest model that does your real work well.

That’s a much better rule than downloading the biggest file your machine can barely open.

## Step 8: Add Local Document Memory

Document memory is where OpenJarvis starts feeling personal.

First, confirm the Rust extension finished:

```markup
jarvis doctor
```

If it reports that memory features are unavailable, retry the official background setup:

```markup
~/.openjarvis/.scripts/install-rust.sh
~/.openjarvis/.scripts/build-extension.sh
```

Back up your current config again:

```markup
cp ~/.openjarvis/config.toml ~/.openjarvis/config.before-research.toml
```

Switch to the deep research preset:

```markup
jarvis init --preset deep-research --force
ollama pull qwen3.5:9b
```

Create a small test folder. Put three or four non-sensitive documents inside it.

Index only that folder:

```markup
jarvis memory index ~/Documents/JarvisTest
jarvis memory stats
```

Ask a question that only those files can answer:

```markup
jarvis ask --agent deep_research "What are the main decisions across my JarvisTest documents? Cite the source filenames."
```

OpenJarvis stores its default document index in a local SQLite database. It supports text, Markdown, PDFs, Python, JSON, CSV, and other common formats.

For scanned PDFs, run OCR first. A PDF that only contains page images won’t magically become searchable text.

**Don’t index your entire home folder.** Start with a narrow directory. Check the answer quality. Then expand.

The built-in file policy skips common secret filenames such as `.env`, private key files, and credential files. But it isn’t a complete content scanner, and shell tools can bypass filename checks.

## Step 9: Add Voice Input and Spoken Responses

This is the closest current path to the “talk to Jarvis” experience.

Install local speech input packages into the managed environment:

```markup
cd ~/.openjarvis/src
uv pip install --python ~/.openjarvis/.venv/bin/python -e ".[speech]"
```

Open your config:

```markup
nano ~/.openjarvis/config.toml
```

Add:

```markup
[speech]
backend = "faster-whisper"
model = "base"
language = ""
device = "auto"
compute_type = "int8"
```

`int8` is the safer starting point for CPU use. A supported NVIDIA GPU can use other settings later.

For local spoken output, install Kokoro:

```markup
uv pip install --python ~/.openjarvis/.venv/bin/python kokoro
```

Start voice chat:

```markup
jarvis chat --voice
```

The interaction works like this:

1. Press Enter at the prompt.
2. Speak.
3. Recording stops after silence.
4. Faster Whisper transcribes locally.
5. The model answers.
6. A healthy text-to-speech backend reads the response.

The first run may download speech models.

On macOS, grant microphone permission to Terminal under System Settings, Privacy & Security, Microphone.

If local spoken output doesn’t load, OpenJarvis can fall back to OpenAI or Cartesia text-to-speech when their API keys are available. That audio path is cloud-based, so the response text leaves your computer.

And remember: there is no wake word in this workflow. You press Enter to record.

## Step 10: Build a Morning Briefing

Start with text only. Add audio after the data collection works.

Back up the config:

```markup
cp ~/.openjarvis/config.toml ~/.openjarvis/config.before-digest.toml
```

Use the minimal digest preset:

```markup
jarvis init --preset morning-digest-minimal --force
ollama pull qwen3.5:4b
```

### Set up Google access

Open [Google Cloud Credentials](https://console.cloud.google.com/apis/credentials) and:

1. Create or select a Google Cloud project.
2. Configure the OAuth consent screen.
3. Add your own Google account as a test user if the app is in testing mode.
4. Enable the Google APIs you plan to use, including Gmail, Calendar, Tasks, and Drive.
5. Create an OAuth 2.0 Client ID with **Desktop app** as the application type.
6. Copy the client ID and client secret.

Run:

```markup
jarvis connect gdrive
```

The current CLI asks for the client ID and client secret separately, opens your browser, and stores the resulting tokens under `~/.openjarvis/connectors/`.

One Google authorization covers Drive, Calendar, Contacts, Gmail, and Tasks.

Read the consent screen carefully. The current source requests `gmail.modify` and calendar write access so proactive agents can archive email or respond to events after approval. This is broader than simple read-only access. You can inspect the exact [Google scopes in the source](https://github.com/open-jarvis/OpenJarvis/blob/main/src/openjarvis/connectors/oauth.py).

Check connection status:

```markup
jarvis connect --list
```

Generate a text briefing:

```markup
jarvis digest --text-only --fresh
```

Don’t add weather, Slack, health data, news feeds, and music until this basic Gmail and Calendar version works.

### Add audio later

The official digest supports Cartesia or OpenAI text-to-speech.

For a temporary Cartesia session on Mac, Linux, or WSL2:

```markup
export CARTESIA_API_KEY="your_key_here"
jarvis digest --fresh
```

Don’t paste a real key into screenshots, public bug reports, or shared shell history.

If you don’t want cloud audio, keep using `--text-only` or experiment with the local voice path from the previous section.

The full list of digest sources and settings lives in the [morning digest guide](https://open-jarvis.github.io/OpenJarvis/user-guide/morning-digest/).

## Step 11: Add a Scheduled Agent Carefully

Scheduled agents are useful, but this is one part I wouldn’t trust for critical reminders yet.

Install the scheduler package explicitly:

```markup
cd ~/.openjarvis/src
uv pip install --python ~/.openjarvis/.venv/bin/python -e ".[scheduler]"
```

This explicit install matters because [issue #777](https://github.com/open-jarvis/OpenJarvis/issues/777) reports that a missing cron package can silently turn a cron schedule into an hourly task.

Back up and switch presets:

```markup
cp ~/.openjarvis/config.toml ~/.openjarvis/config.before-scheduler.toml
jarvis init --preset scheduled-monitor --force
```

Start the scheduler:

```markup
jarvis scheduler start
```

Create a low-risk test task:

```markup
jarvis scheduler create \
  --prompt "Review my indexed JarvisTest documents and write a short change summary" \
  --schedule "0 9 * * 1-5" \
  --agent operative \
  --tools "knowledge_search,memory_store,think"
```

List tasks:

```markup
jarvis scheduler list
```

Run the new task manually before trusting its schedule:

```markup
jarvis scheduler run YOUR_TASK_ID
```

Check its status:

```markup
jarvis scheduler status YOUR_TASK_ID
```

Your computer must be awake. Ollama must be running. The scheduler service must also be running.

There is another current bug here. [Issue #776](https://github.com/open-jarvis/OpenJarvis/issues/776) says configured time zones can be ignored, with one scheduler evaluating cron in UTC. Verify the actual fire time yourself.

Don’t use this for medication, legal deadlines, financial transfers, or anything where a missed or repeated run creates real harm.

## Step 12: Understand Tool Permissions Before Enabling Them

The code assistant preset can read files, write files, execute Python, and run shell commands.

Real commands.

The official system access guide states that `shell_exec` runs as your current user without a command allowlist or denylist. It can do what you can do in a terminal.

Confirmation behavior also changes by interface:

- `jarvis chat`**:** asks before tools marked as requiring confirmation.
- `jarvis ask`**:** auto-approves them.
- **Browser and desktop server:** enabled tools count as pre-approved.
- **Custom embedded use:** confirmation may fail closed when no callback exists.

So I recommend using `jarvis chat` for early tool experiments.

Back up files first. Work inside a disposable project copy. Keep sensitive folders out of scope.

For container isolation, OpenJarvis supports:

```markup
[sandbox]
enabled = true
runtime = "docker"
```

You need Docker installed and running for that option.

There is also an open security report stating that the current capability gate doesn’t enforce tool permissions across several execution paths. Read [issue #836](https://github.com/open-jarvis/OpenJarvis/issues/836) before giving a server-based agent shell access.

My opinion is simple: don’t enable `shell_exec` in the browser or desktop app on a machine full of irreplaceable data.

## Step 13: Treat Third-Party Skills Like Code

OpenJarvis can install agent skills from public collections and GitHub repositories.

For example:

```markup
jarvis skill install hermes:arxiv
```

But a skill can guide an agent toward tools that read files, call networks, or execute commands.

The project has an open request for security scanning before imported skills run. [Issue #472](https://github.com/open-jarvis/OpenJarvis/issues/472) explains the risk clearly.

Before installing a skill:

1. Read its source.
2. Check who maintains it.
3. Check what tools it expects.
4. Avoid anything that asks for broad shell or credential access without a clear reason.
5. Test it in a sandbox or disposable user account.

More skills don’t automatically make an assistant better.

Sometimes they just give it more ways to make a mess.

## Known Limitations You Should Accept Before Building More

### 1\. This is alpha software

The main branch changes fast. The latest desktop release can lag behind the documentation and source.

Expect config changes, incomplete features, and fixes that create new friction elsewhere.

### 2\. The smallest model is a demo, not a genius

The starter model proves the pipeline works. It may miss instructions, produce weak tool calls, and struggle with long context.

Model quality and model speed pull in opposite directions on the same hardware.

### 3\. Local inference still costs something

There may be no per-request API bill, but you already paid for the computer. You also use electricity, disk, memory, and your own time.

### 4\. Connectors expand the privacy boundary

OAuth tokens live under `~/.openjarvis/connectors/`. Cloud TTS receives text. Cloud models receive prompts. Messaging channels send data through their providers.

Run the data boundary scan after every major connector or model change.

### 5\. Security scanners aren’t magic

OpenJarvis can detect common secrets, PII formats, and sensitive filenames. Regex checks won’t catch every secret or every harmful instruction.

Streaming output is also scanned after tokens have already been delivered, so output blocking can’t rewind what was shown.

### 6\. Scheduling has open correctness bugs

Timezone handling and missing cron dependencies are active concerns. Test every scheduled task manually and watch its first real run.

### 7\. Voice is useful but incomplete

Voice chat needs extra packages and microphone permissions. Local speech models take disk and memory. There is no finished wake-word assistant loop.

### 8\. The assistant can’t control your whole desktop by itself

Shell commands and AppleScript can automate specific actions. That isn’t the same as an agent that sees your screen and decides where to click.

### 9\. Google permissions are broad

The combined OAuth flow is convenient, but it requests more than passive reading. Use a test Google account first if you’re uncomfortable connecting your primary inbox.

### 10\. Updates can move your target

The installer tracks source code rather than giving every user a frozen, long-supported build. A command that works today may change.

## The Troubleshooting Checklist I Would Follow

### jarvis isn’t found

Open a new terminal, reload `.zshrc` or `.bashrc`, then try `~/.local/bin/jarvis` directly.

### Ollama isn’t responding

Run:

```markup
ollama serve
```

Then test:

```markup
curl http://localhost:11434/api/tags
```

### The model isn’t found

Run:

```markup
ollama list
ollama pull qwen3.5:4b
```

### Memory commands fail

Run `jarvis doctor`, then rebuild the Rust extension with the two official scripts shown earlier.

### A preset says the config already exists

Back up `config.toml`, then add `--force` to the preset command.

### The server won’t start

Set the host to `127.0.0.1`. Check whether port 8000 is occupied. Install the server extra if FastAPI or Uvicorn is missing.

### Native Windows fails during setup

Check that you’re on Python 3.10 through 3.13 and that Git is on PATH. If you don’t need native Windows, switch to WSL2.

### The Mac app says it is damaged

Confirm you downloaded it from the official release page, move it into Applications, then use the `xattr` command from the desktop section.

### A Google connection fails

Confirm you created a Desktop OAuth client, added yourself as a test user, enabled every requested API, and authorized the account that you intended to connect.

### Voice hears nothing

Check microphone permission for the host app, confirm the speech extra installed, and set `compute_type = "int8"` for CPU use.

### A scheduled task fires at the wrong time

Assume timezone handling is the first suspect. Compare your intended time against UTC, run the task manually, and inspect the open scheduler issues.

### You’re about to post logs publicly

Remove API keys, OAuth tokens, usernames, local paths, email addresses, and message content first. Use the data boundary scan’s redacted JSON output where possible.

## How to Update Without Ruining a Working Setup

Make a full backup first:

```markup
cp -R ~/.openjarvis ~/.openjarvis-backup-$(date +%Y%m%d)
```

That backup contains credentials and personal data. Store it securely. Don’t upload it to a public drive or GitHub repository.

Then update:

```markup
jarvis update
```

After the update, run:

```markup
jarvis doctor
jarvis ask "Reply with: update test passed"
jarvis scan --data-boundaries
```

I wouldn’t update five minutes before a presentation or an important scheduled run.

## How to Uninstall Without Losing Data by Accident

The official command is:

```markup
jarvis-uninstall
```

But stop before running it.

There is an open issue reporting that the current uninstaller deletes the entire `~/.openjarvis/` directory without a confirmation prompt or backup. That includes config, memories, skills, scheduler data, traces, and connector tokens. See [issue #772](https://github.com/open-jarvis/OpenJarvis/issues/772).

Make the backup from the previous section first.

The uninstaller leaves Ollama, `uv`, and Rust installed because other programs may use them. It prints separate removal hints.

## My Recommended Build Order

If I were setting up a personal Jarvis from scratch today, I’d do this:

1. Install through the official GitHub Pages script.
2. Verify one local response with the starter model.
3. Switch to `chat-simple` and Qwen3.5 4B.
4. Disable outbound analytics if I don’t want it.
5. Bind the server to `127.0.0.1`.
6. Run both security scans.
7. Use terminal chat for a day.
8. Add the browser interface.
9. Index one small folder of non-sensitive documents.
10. Add voice.
11. Connect a test Google account and build a text-only digest.
12. Add audio and scheduling only after the manual version works.
13. Keep shell access disabled unless a task truly needs it.

That path is slower than turning everything on at once.

It is also far more likely to leave you with an assistant you understand.

## The Resource List Worth Bookmarking

- [Official OpenJarvis repository](https://github.com/open-jarvis/OpenJarvis)
- [Official documentation](https://open-jarvis.github.io/OpenJarvis/)
- [Current installation reference](https://open-jarvis.github.io/OpenJarvis/getting-started/install/)
- [WSL2 setup](https://open-jarvis.github.io/OpenJarvis/getting-started/wsl2/)
- [Native Windows setup](https://open-jarvis.github.io/OpenJarvis/getting-started/windows-native/)
- [Configuration reference](https://open-jarvis.github.io/OpenJarvis/getting-started/configuration/)
- [Security guide](https://open-jarvis.github.io/OpenJarvis/user-guide/security/)
- [Data boundary scan](https://open-jarvis.github.io/OpenJarvis/user-guide/data-boundary-scan/)
- [Morning digest guide](https://open-jarvis.github.io/OpenJarvis/user-guide/morning-digest/)
- [Channels and connectors](https://open-jarvis.github.io/OpenJarvis/user-guide/channels-and-connectors/)
- [Ollama model catalog](https://ollama.com/library/qwen3.5/tags)
- [OpenJarvis paper](https://arxiv.org/abs/2605.17172)
- [GitHub issue tracker](https://github.com/open-jarvis/OpenJarvis/issues)
- [Official desktop releases](https://github.com/open-jarvis/OpenJarvis/releases)

The issue tracker is especially useful. Most Reddit posts I found were launch announcements or broad local-AI discussions. The live issue tracker had much better evidence about install failures, scheduling bugs, port behavior, and security gaps.

If you are finding value in my AI action letters, please consider subscribing. It keeps me going.

If you know someone who wants a private AI assistant but doesn’t want to risk their files or inbox, please share this with them.

That’s it from me today.

Till next time. Stay tuned as I will share best resources from both my Harvard and Google networks to bring the best to you. Let’s up skill together. Aspyre higher!