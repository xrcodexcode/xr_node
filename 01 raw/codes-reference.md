# The Complete Prompt Codes Reference

Every code below can be used as a `/command`, a phrase, or combined.
Format: `/codename` or just type the phrase naturally in your message.

---

## SIMPLIFICATION CODES

### `/eli5`
**Phrase:** "ELI5" or "Explain Like I'm 5"
**What it does:** Strips a concept to its absolute simplest form. No jargon. No assumptions. Plain language a child could follow.
**Best for:** Complex documents, research papers, legal text, technical concepts you've read three times and still don't get.
**Example output shift:** Instead of "amortisation schedules reflect the temporal distribution of principal repayment" → "you're paying off a loan slowly over time, more interest first, more principal later."

### `/eliphd`
**Phrase:** "ELI a PhD" or "Go deep"
**What it does:** Opposite of ELI5. Assumes high intelligence, uses precise technical language, skips all hand-holding.
**Best for:** When you need the real answer without the dumbed-down version. Research, strategy, complex decisions.

### `/tldr`
**Phrase:** "TLDR" or "Give me the short version"
**What it does:** Distils any length of content into the essential point. Usually 2–4 sentences.
**Best for:** Long documents, research summaries, meeting notes.

---

## HONESTY & DIRECTNESS CODES

### `/brutal`
**Phrase:** "Be brutally honest" or "No filter"
**What it does:** Removes Claude's default politeness. You get the real assessment — what's weak, what doesn't work, what needs to be cut.
**Best for:** Reviewing your own writing, testing an idea you're attached to, getting feedback that actually helps.
**Warning:** Pair with `/nopreamble` for maximum efficiency.

### `/nopreamble`
**Phrase:** "Skip the preamble" or "Just answer"
**What it does:** No warm-up. No "Great question!" No "Certainly, here's what I think..." Starts with the answer immediately.
**Best for:** Every single prompt. Should be your default.

### `/nohedge`
**Phrase:** "No hedging" or "Commit to an answer"
**What it does:** Removes "however," "it's worth noting," "on the other hand," "it depends." Claude picks a position and holds it.
**Best for:** When you need a real recommendation, not a list of considerations.

### `/onesentence`
**Phrase:** "One sentence only"
**What it does:** Forces maximum distillation. If Claude can't say it in one sentence, it hasn't understood it well enough.
**Best for:** Testing if an idea is actually clear. Writing hooks. Summarising positioning.

---

## THINKING MODE CODES

### `/stepbystep`
**Phrase:** "Think step by step" or "Walk me through this"
**What it does:** Forces Claude to reason before it answers. Shows its working. Dramatically improves accuracy on complex problems.
**Best for:** Multi-step problems, logic puzzles, strategy decisions, anything where the answer isn't obvious.
**Why it works:** Models that reason before answering make fewer errors. This is one of the most evidence-backed prompting techniques.

### `/deepthink`
**Phrase:** "Deep think" or "Take your time on this"
**What it does:** Signals that speed is not the priority — quality is. Claude slows down, considers more angles, and produces a more thorough response.
**Best for:** High-stakes decisions, strategy documents, anything you're going to act on.
**Pair with:** `/firstprinciples` for maximum depth.

### `/firstprinciples`
**Phrase:** "First principles" or "Break this down from scratch"
**What it does:** Strips away assumptions, received wisdom, and conventional thinking. Rebuilds the answer from the ground up using only what's verifiably true.
**Best for:** Challenging an assumption everyone accepts. Finding the real reason something works. Solving a problem that conventional approaches haven't cracked.
**Origin:** Elon Musk / Aristotle. The idea that you reason from fundamental truths rather than by analogy.
**Example:** Instead of "most studios price this way, so we should too" → "what does it actually cost to deliver this, what value does the client receive, what's the minimum viable margin?"

### `/redteam`
**Phrase:** "Red team this" or "Attack this"
**What it does:** Claude takes the opposing side and attacks your idea, plan, argument, or strategy as aggressively as possible. Finds every hole, every risk, every reason it could fail.
**Best for:** Business plans, pitches, strategic decisions, anything with real stakes.
**Origin:** Military/intelligence. A "red team" is a group whose job is to find weaknesses in your plan before your enemies do.
**Difference from `/pokeholes`:** Red team is more systematic and aggressive. Pokeholes is a quick gut-check. Red team is a full stress test.

### `/steelman`
**Phrase:** "Steelman this" or "Make the strongest case for"
**What it does:** Opposite of red team. Builds the absolute strongest, most compelling version of an argument — not a balanced one, the best possible one.
**Best for:** Preparing for a debate. Genuinely understanding why smart people believe something you disagree with. Strengthening your own pitch.
**Origin:** Philosophy. The "steelman" is the opposite of the "strawman" — engaging with the best version of an argument, not the weakest.

### `/blindspot`
**Phrase:** "What's my blind spot?" or "What am I not seeing?"
**What it does:** Asks Claude to find the thing you haven't considered. Not just holes in your argument — the entire dimension of the problem you haven't looked at.
**Best for:** After you think you've figured something out. Before making a big decision. When you sense something's off but can't name it.
**Difference from `/redteam`:** Blindspot is about what you haven't seen. Red team is about what could go wrong with what you have seen.

### `/pokeholes`
**Phrase:** "Poke holes in this"
**What it does:** Quick adversarial review. Claude finds weaknesses, inconsistencies, and risks in whatever you've shared.
**Best for:** Fast sanity check before sending something important.

---

## VOICE & FORMAT CODES

### `/ghost`
**Phrase:** "Ghost this" or "Write this in my voice"
**What it does:** Claude writes as you — matching your tone, vocabulary, rhythm, and personality — so the output sounds like it came from you, not from AI.
**Best for:** Captions, emails, DMs, content you'll publish under your name.
**To activate properly:** Share a sample of your previous writing first, then use `/ghost`. The more examples, the better the match.
**Advanced use:** "Ghost this but make it 20% more direct" or "Ghost this but warmer."

### `/friend`
**Phrase:** "Write this like you're talking to a smart friend" or "Friend mode"
**What it does:** Removes formal, corporate, AI-polished language. Conversational, direct, human.
**Best for:** Any output that currently sounds like a press release or a LinkedIn post.

### `/interesting`
**Phrase:** "Give me the version of this that's actually interesting"
**What it does:** Takes technically correct but flat output and rewrites it with genuine interest, texture, and a point of view.
**Best for:** When the output is accurate but you'd never actually send it or post it.

---

## STRATEGY & FOUNDER CODES

### `/founder`
**Phrase:** "Founder mode" or "Think like a founder"
**What it does:** Reframes the response through a founder's lens — resource constraints, speed, what actually matters vs. what looks good, build vs. buy decisions, real-world trade-offs.
**Best for:** Business decisions, product decisions, pricing, team questions.
**What changes:** Claude stops giving you the "safe" corporate answer and gives you the scrappy, high-leverage version.
**Example shift:** Instead of "consider hiring a specialist" → "here's how to validate this yourself in a week before spending on a hire."

### `/beastmode`
**Phrase:** "Beast mode" or "Maximum output"
**What it does:** Claude goes all-in. Longer, more thorough, more detailed than it would default to. No summarising. No abbreviating. Full depth on every point.
**Best for:** When you need the complete picture — research, strategy documents, full breakdowns.
**Warning:** Only use when you actually need the depth. Most prompts don't.

### `/skeptic`
**Phrase:** "What would a skeptic say?" or "Skeptic mode"
**What it does:** Claude voices the sharpest, most credible objection to your idea — not a dismissive one, a smart one.
**Best for:** Preparing for investor questions. Anticipating client pushback. Pressure-testing your own conviction.

### `/missing`
**Phrase:** "What am I missing?" or "Find the gap"
**What it does:** You give Claude everything you know. It finds what you haven't considered.
**Best for:** Strategy. Decisions. Before you commit to a direction.

---

## LEARNING & UNDERSTANDING CODES

### `/fewshot`
**Phrase:** "Here are examples of what I want" or "Match this format exactly"
**What it does:** You give Claude 2–3 examples of the exact output you want before making your real request. Claude reverse-engineers the pattern and applies it. Most powerful technique for precise format or style matching.
**Best for:** Getting output in a very specific structure. Matching your writing style exactly. Repeatable tasks where format matters.
**How to use:** "Here are 3 examples of how I write Instagram captions: [example 1] [example 2] [example 3]. Now write one for this topic: [topic]."
**Why it works:** Three good examples beat a page of instructions every time.

### `/zeroshot`
**Phrase:** "No examples — just do this" or "Cold start"
**What it does:** No examples, no warm-up. Just a precise, structured instruction and Claude executes. Fast and clean.
**Best for:** Clear, well-defined tasks where the format is obvious. When you've already established how you work together.
**When to switch:** If output isn't landing, switch to `/fewshot` and give examples.

### `/socratic`
**Phrase:** "Don't answer — ask me questions instead" or "Socratic mode"
**What it does:** Instead of giving you the answer, Claude asks you targeted questions that lead you to figure it out yourself. Forces your own thinking rather than replacing it.
**Best for:** Working through a decision you half-understand. Clarifying your own position on something. When you want to think, not just receive.
**Use when:** You feel like you almost know the answer but can't articulate it yet.

### `/analogize`
**Phrase:** "Explain this using an analogy" or "Give me a metaphor for this"
**What it does:** Translates abstract, complex, or technical concepts into something familiar and concrete using comparison. Unlocks understanding instantly.
**Best for:** Explaining a complex idea to someone else. Understanding something yourself. Making technical content accessible.
**Example:** "Explain token optimisation using an analogy" → "It's like packing a suitcase — the more carefully you fold things, the more fits in the same space."

---

## OUTPUT CONTROL CODES

### `/selfcheck`
**Phrase:** "Check your own answer" or "Review before showing me"
**What it does:** Claude answers, then immediately critiques its own response, then rewrites or confirms it — all before showing you. Build → critique → improve in one go.
**Best for:** Important documents, strategy work, anything you'd normally have to send back for a revision.
**Why it matters:** Catches errors, gaps, and flat writing before they reach you.
**Pair with:** `/brutal` for genuinely self-critical review.

### `/compress`
**Phrase:** "Compress this" or "Make this smaller without losing anything"
**What it does:** Takes any output and removes everything non-essential while preserving all meaningful content and structure. Not a summary — a compression. The shape stays, the fat goes.
**Best for:** Tightening long drafts. Making documents scannable. Reducing a 10-slide deck to 6 without losing the argument.
**Different from `/tldr`:** TLDR gives you the point. Compress gives you the full thing, just leaner.

### `/constraintbox`
**Phrase:** "Within these limits:" or "Constraints: [x, y, z]"
**What it does:** You give Claude explicit guardrails — length, audience, exclusions, format, tone — and it works entirely within them. The tighter the box, the sharper the output.
**Best for:** Any task where vague output is a problem. Briefs with specific requirements. Content for specific platforms.
**Example:** "Explain this to a first-time founder. Under 100 words. No jargon. End with one question."

---

## REASONING & STRATEGY CODES

### `/simulate`
**Phrase:** "Simulate this scenario" or "Run this as a roleplay"
**What it does:** Claude plays out a real-world scenario — a difficult client call, a board challenge, an investor pushback — so you can stress-test your responses before the real thing.
**Best for:** Pitch prep. Difficult conversation rehearsal. Testing how a strategy holds under pressure.
**Example:** "Simulate a client who has received our proposal and thinks it's overpriced. Push back hard. I'll respond as myself."

### `/contrarian`
**Phrase:** "Argue the opposite" or "Contrarian take"
**What it does:** Claude takes the position opposite to whatever you've stated or assumed — not to attack it, but to give the genuine alternative view its strongest form. Different from `/redteam` which attacks your plan. This argues for a different direction entirely.
**Best for:** Breaking out of groupthink. Finding the version of a decision you haven't seriously considered. Stress-testing your conviction.
**Example:** "I think we should launch the swimwear brand in Mumbai first. Contrarian take." → Claude argues seriously for launching elsewhere first.

### `/race`
**Phrase:** "RACE this" or "Structure this as Role / Action / Context / Execute"
**What it does:** A four-part structure that produces consistently strong output on complex tasks. Role (who Claude is), Action (what it's doing), Context (full background), Execute (format and output requirements).
**Best for:** Complex, high-stakes tasks where a single prompt keeps going wrong. Building prompts you'll reuse.
**How to use:** "Role: senior brand strategist. Action: review my positioning. Context: [paste context]. Execute: bullet points, max 10, ranked by priority."
**Why it works:** Removes ambiguity at every level. Claude knows who it is, what it's doing, why, and what done looks like.

---

## COMBINATION CODES

These are multi-code combos that unlock specific modes:

### `/strategysession`
= `/firstprinciples` + `/deepthink` + `/nohedge`
**Use for:** Major business decisions, pivots, pricing, positioning.

### `/pitchtest`
= `/redteam` + `/skeptic` + `/steelman`
**Use for:** Before any pitch, proposal, or presentation. Attack it from all sides first.

### `/contentdraft`
= `/ghost` + `/interesting` + `/nopreamble`
**Use for:** Writing content that sounds like you and is actually worth reading.

### `/decisionaudit`
= `/blindspot` + `/missing` + `/firstprinciples`
**Use for:** Any decision with real stakes. Finds what you're not seeing before you commit.

### `/deepdraft`
= `/selfcheck` + `/ghost` + `/compress`
**Use for:** Content you're actually going to publish. Writes in your voice, self-reviews, then tightens.

### `/fullstress`
= `/redteam` + `/simulate` + `/contrarian`
**Use for:** Maximum pressure-testing before a pitch, launch, or big commitment. Attacks from three different angles.

### `/claritycheck`
= `/eli5` + `/onesentence` + `/analogize`
**Use for:** Any concept or idea you need to explain simply — to yourself or to someone else.

---

## THE META CODE

### `/announce`
**What it does:** Before Claude answers, it tells you:
1. Which code(s) it's planning to use
2. What each one does in this context
3. Whether you should proceed or adjust

This is the transparency layer. Claude shows its reasoning before it executes.

**How to use:** Add "announce your approach before answering" to any prompt, or use it as a standing instruction in your project system prompt.

---

## QUICK REFERENCE TABLE

| Code | Category | One-line description |
|------|----------|---------------------|
| `/eli5` | Simplify | Strip to plain English |
| `/eliphd` | Simplify | Go technically deep |
| `/tldr` | Simplify | Give me the short version |
| `/brutal` | Honesty | No filter, full honesty |
| `/nopreamble` | Honesty | Start with the answer |
| `/nohedge` | Honesty | Commit, don't equivocate |
| `/onesentence` | Honesty | Maximum distillation |
| `/stepbystep` | Thinking | Reason before answering |
| `/deepthink` | Thinking | Prioritise quality over speed |
| `/firstprinciples` | Thinking | Strip assumptions, rebuild from truth |
| `/redteam` | Thinking | Attack this as an adversary |
| `/steelman` | Thinking | Build the strongest case for this |
| `/blindspot` | Thinking | Find what I haven't considered |
| `/pokeholes` | Thinking | Quick adversarial review |
| `/ghost` | Voice | Write in my voice |
| `/friend` | Voice | Drop the formality |
| `/interesting` | Voice | Make this actually worth reading |
| `/founder` | Strategy | Think with founder constraints |
| `/beastmode` | Strategy | Full depth, no abbreviating |
| `/skeptic` | Strategy | Voice the smartest objection |
| `/missing` | Strategy | Find the gap in my thinking |
| `/fewshot` | Learning | Match this format using my examples |
| `/zeroshot` | Learning | Cold start, no examples needed |
| `/socratic` | Learning | Ask me questions, don't answer |
| `/analogize` | Learning | Explain using a metaphor |
| `/selfcheck` | Output | Review your own answer first |
| `/compress` | Output | Smaller, same meaning, nothing lost |
| `/constraintbox` | Output | Work within these exact limits |
| `/simulate` | Reasoning | Run this as a live scenario |
| `/contrarian` | Reasoning | Argue the opposite seriously |
| `/race` | Reasoning | Role / Action / Context / Execute |
| `/announce` | Meta | Tell me your approach before answering |

---

## COMBO QUICK REFERENCE

| Combo | Codes inside | Use for |
|-------|-------------|---------|
| `/strategysession` | firstprinciples + deepthink + nohedge | Major decisions, pivots |
| `/pitchtest` | redteam + skeptic + steelman | Before any pitch |
| `/contentdraft` | ghost + interesting + nopreamble | Content in your voice |
| `/decisionaudit` | blindspot + missing + firstprinciples | High-stakes decisions |
| `/deepdraft` | selfcheck + ghost + compress | Content ready to publish |
| `/fullstress` | redteam + simulate + contrarian | Maximum pressure-testing |
| `/claritycheck` | eli5 + onesentence + analogize | Explain something simply |
