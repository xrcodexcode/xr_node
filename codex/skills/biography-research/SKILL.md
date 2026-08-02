---
name: biography-research
description: Exhaustively research a person, verify claims across source tiers, compile timelines, quotes, and controversies, and produce a raw research file structured for downstream atomic note extraction.
version: 1.0
---

# Biography Research Skill

## Mission

Perform exhaustive, verified biographical research on a specified individual to produce a raw, fact-dense research file at `01_RAW/<person_slug>_raw.md`. 

This is a **rigorous knowledge engineering task**, not a summary task. The output must be sufficiently detailed, granular, and verified that a downstream atomic-notes extraction agent can operate without needing to search the web for major biographical facts. The research should target a density of **100+ atomic note opportunities** and **up to 100 verified quotes**.

---

## Operating Rules

1. **Prioritize Authoritative Sources**: Always look for primary records, filings, patents, official transcripts, and autobiographies first.
2. **Never Fabricate Facts or Quotes**: Do not generate placeholder details, invent dates, or attribute quotes to a person unless they are verified.
3. **Verify Claims Multi-Laterally**: For any critical biographical claim (e.g., net worth, origin stories, educational degrees, product launches), attempt to verify the claim with at least two independent sources.
4. **Document Conflicts Neutrally**: When sources conflict, do not select one and delete the other. Preserve both versions, explain the nature of the disagreement, and indicate source strength.
5. **Separate Fact from Interpretation**: State what is documented, who said it, and when. Avoid subjective, narrative, or promotional language.
6. **Prioritize Fact Density Over Prose Style**: The output raw file should be highly structured, bulleted, and dense with details, rather than written in narrative paragraphs.

---

## Source Priority Hierarchy

When gathering facts, prioritize information according to these tiers:

* **Tier 1 (Highest Confidence)**: Official websites, SEC filings, government records, patent databases, court records, autobiographies, corporate press releases, transcripts of direct video/audio interviews.
* **Tier 2**: Reputable journalism (e.g., major news outlets with editor-reviewed output), documentaries, long-form published interviews, official podcasts.
* **Tier 3**: Authorized biographies, magazine profiles, industry trade publications, conference presentations.
* **Tier 4 (Lowest Confidence)**: Wikipedia, community wikis, blogs, and social media posts. *Use these only for discovery and initial keyword gathering; never rely on them as sole proof.*

---

## Research Workflow

### Step 1: Initialization & Directory Setup
1. Normalize the person's name into a slug format (e.g., "Warren Buffett" -> `warren-buffett`, "Steve Jobs" -> `steve-jobs`).
2. Identify the target raw file destination: `01_RAW/<person_slug>_raw.md`.
3. Check the vault for any existing raw research files or partial atomic notes relating to this person to avoid duplicating work.

### Step 2: Formulate Query Plan
Formulate structured search queries category-by-category using the search tools. Example query planning:
- *Identity & Early Life*: `"<Person Name>" birthplace childhood parents family ancestry`
- *Education*: `"<Person Name>" university college graduation thesis degree`
- *Career & Companies*: `"<Person Name>" companies founded OR investor OR board OR director OR employment`
- *Philosophy & Principles*: `"<Person Name>" philosophy OR principles OR rules OR work style OR habits`
- *Quotes & Speeches*: `"<Person Name>" speech transcript OR interview OR quotes OR keynote`
- *Controversies*: `"<Person Name>" lawsuit OR controversy OR legal dispute OR criticism`

### Step 3: Gather & Verify Information
1. Run queries. Read and extract information from high-quality pages.
2. Check other sources to verify crucial claims.
3. Fill out the Verification Fields for key facts (claim, source, URL, access date, confidence).
4. Fill out the Conflict block whenever accounts of the same event diverge.

### Step 4: Extract Verified Quotes
1. Search for actual transcripts, recorded audio/video, or written publications.
2. Extract verbatim quotes.
3. Record the exact context, date/period, and source URL/reference for each. Do not shorten quotes in a way that alters meaning.

### Step 5: Draft the Target Document
Assemble the research into the exact output structure defined below.

---

## Output Document Structure

The raw file must be written to `01_RAW/<person_slug>_raw.md` and use the following structural template. Do not omit any sections; if no information is found for a section, write `No information found during search.` and log it as a gap in the `# Gap List`.

```markdown
---
type: raw-research
person: <Name of Person>
research_date: <YYYY-MM-DD>
status: in-progress or complete
estimated_atomic_notes: <Estimated count of potential atomic notes, target 100+>
sources_collected: <Count of distinct sources in catalog>
---

# Executive Summary
A concise summary of the person's historical significance, major achievements, and core areas of influence (2-3 paragraphs).

# Identity
- **Full Legal Name**:
- **Date of Birth**:
- **Place of Birth**:
- **Parents & Immediate Family**:
- **Current Status/Date of Death**:
- **Nationality**:
- **Verification Table**:
| Claim | Source | URL/Ref | Access Date | Confidence (High/Med/Low) |
| --- | --- | --- | --- | --- |

# Childhood
Detailed notes on family background, childhood environment, early influences, and formative experiences.

# Education
Detailed records of schools, universities, degrees obtained, fields of study, theses, and notable mentors/teachers.

# Timeline
A year-by-year chronological list of major life events, relocations, career milestones, launches, and inflection points.
- **<Year>**: <Event/Milestone>
- **<Year>**: <Event/Milestone>

# Companies
Detailed records of companies founded, led, invested in, or influenced. Include dates of involvement, roles, and outcomes.

# Products
Specific products, projects, systems, or creations associated with the person. Detail their role in the creation.

# Decisions
Significant choices, forks in the road, pivots, or strategic decisions made. Include context, options considered, and downstream consequences.

# Quotes
A database of verified quotes. Target up to 100 quotes.
Format each quote as:
> [!NOTE]
> **Quote**: "<Exact verbatim quote>"
> - **Speaker**: <Name>
> - **Date/Period**: <Date or Year>
> - **Source**: <Source title/reference>
> - **URL/Citation**: <Link>
> - **Context**: <Brief description of the occasion, background, or question asked>

# Interviews
List of notable interviews given, with dates, interviewers, key themes, and source transcripts or videos.

# Speeches
Key public speeches, lectures, keynotes, or talks. Provide location, event, date, and core thesis.

# Books
- **Books Written by the Person**:
- **Books Recommended or Frequently Cited**:

# Philosophy
The person's core worldview, belief systems, and intellectual influences.

# Principles
Explicit rules of thumb, operational guidelines, or values stated or practiced by the person.

# Habits
Routines, scheduling preferences, sleep patterns, productivity methods, and lifestyle choices.

# Failures
Setbacks, bankruptcies, failed products, lost elections, or public defeats, including details on the aftermath and lessons.

# Successes
Major achievements, inflection points of rapid growth, key milestones, and breakthroughs.

# Controversies
Neutrally documented criticisms, lawsuits, public disputes, ethical debates, or investigative findings.
- Use a neutral, objective tone ("Critics argue that...", "A lawsuit filed by X alleged that...").
- Document defensive positions or counter-arguments with equal weight.

# Collaborators and Related People
Mentors, rivals, employees, co-founders, partners, and other key figures. Include relationship nature and duration.

# Historical Context
The state of the field, industry, or society during their formative years and active career. How did the environment shape their trajectory?

# Myths and Disputed Claims
Common rumors, urban legends, or disputed claims (e.g., "self-made billionaire" narratives versus family seed money).
- **Dispute Block**:
  - **Claim**: <The rumored or disputed claim>
  - **Version A**: <First source account> (Source: <Reference>)
  - **Version B**: <Second source account> (Source: <Reference>)
  - **Analysis**: <Assessment of which source is more authoritative and why>

# Source Catalog
Complete bibliography of all sources referenced in the document.
1. [<Source Name>](<URL>) - Access Date: <Date> - Quality Tier: <1/2/3/4> - Notes: <Context>

# Gap List
Areas where information was missing, ambiguous, or unverifiable, requiring further research.

# Atomic Note Opportunities
A bulleted checklist of at least 100 potential atomic note titles/concepts that can be extracted from this raw file. Each title should represent a single, standalone idea.
- [ ] <Atomic Note Title 1: Concept/Definition/Rule>
- [ ] <Atomic Note Title 2: Concept/Definition/Rule>
```

---

## Conflict Handling Standards

When sources present differing facts (e.g., differing dates of a launch, conflicting statements on co-founder equity, or contested reasons for a departure):
1. **Never omit the conflict**.
2. Create a sub-heading in the relevant section titled `### Conflict: [Topic]`.
3. Fill out the **Dispute Block** schema (as shown in the Myths and Disputed Claims section).
4. Compare source authority:
   - Tier 1 vs Tier 4: Default to Tier 1 but note the Tier 4 claim.
   - Tier 1 vs Tier 1: State both as equal possibilities.
   - Tier 2 vs Tier 3: Explain the credibility difference and present both.

---

## Acceptance Criteria & Quality Checklist

Before finalizing `01_RAW/<person_slug>_raw.md`, the agent must run the following checks:

- [ ] **Density Check**: Does the document contain enough material for **100+ distinct atomic notes**? (Are there 100+ items listed in the `# Atomic Note Opportunities` section?)
- [ ] **Quote Count & Quality**: Are there at least **20+ verified quotes** (with a target of up to 100 if research depth allows)? Do they include speaker, date, context, and URL?
- [ ] **Verification Verification**: Are there at least **10 key facts** documented in the Verification Tables with explicit confidence levels and access dates?
- [ ] **Formatting Integrity**: Are all the requested headers (from `# Executive Summary` to `# Atomic Note Opportunities`) present in the exact order?
- [ ] **Neutral Tone**: Are controversies and disputes described objectively, avoiding editorializing or bias?
- [ ] **Path Conformity**: Is the file saved at exactly `01_RAW/<person_slug>_raw.md`?

---

## Failure Cases & Mitigation

| Failure Case | Cause | Mitigation |
| --- | --- | --- |
| **Too few sources found** | Niche or historically obscure figure. | Search historical archive websites, university profiles, patents, or book scans. Record all findings and explicitly list empty areas in the `# Gap List`. |
| **No verified quotes** | Historic figure with no audio/text recordings. | Pull quotes from translated letters, contemporaneous journals, or historical biographies (Tier 3), specifying the translation/historical source. |
| **Pervasive myths** | Heavily publicized modern figure. | Run targeted search queries for debunkings or court transcripts (Tier 1) to cross-reference their PR narratives. |
| **Overwhelming detail** | Subject is extremely famous (e.g., Steve Jobs, Elon Musk). | Focus on extracting highly dense, non-obvious details and concrete operational decisions rather than generic biographical narrative. |
