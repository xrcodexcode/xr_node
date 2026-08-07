import type { Article, PkmVaultStats } from '../types';

/**
 * Pre-baked index of the user's real NexusDB Personal Knowledge Vault notes
 */
export const PKM_VAULT_NOTES: Record<string, Article> = {
  'retrieval-augmented-generation': {
    id: 'retrieval-augmented-generation',
    title: 'Retrieval Augmented Generation',
    subtitle: 'Atomic Note — NexusDB Personal Vault',
    categories: ['ai', 'llm', 'rag', 'concept', 'definition'],
    isFeatured: true,
    isPkmNote: true,
    lastModified: '2026-08-02T17:43:00Z',
    views: 'Personal Note',
    readTime: '4 min read',
    author: 'Vault Owner',
    infobox: {
      title: 'Retrieval Augmented Generation',
      fields: [
        { label: 'Note Type', value: 'atomic-note' },
        { label: 'Status', value: 'active' },
        { label: 'Owner MOC', value: '[[yt-moc]]' },
        { label: 'Confidence', value: '95%' },
        { label: 'Next Review', value: '2026-09-02' },
        { label: 'Source', value: 'MLTut (Hadel Zafar)' }
      ]
    },
    leadParagraphs: [
      '**Retrieval Augmented Generation (RAG)** is an AI architecture pattern that enhances Large Language Model (LLM) responses by fetching relevant factual text passages from external databases at query time and appending them to the LLM prompt context before answer generation [1].'
    ],
    sections: [
      {
        id: 'mathematical-formulation',
        title: 'Mathematical Formulation',
        level: 2,
        content: 'The formal RAG retrieval and generation equation is expressed as:\n\nWhere $q$ is the query vector, $E(p)$ represents passage embeddings, and $f_{\\theta}$ is the auto-regressive transformer generator.',
        formula: '\\text{LLM Output} = f_{\\theta}\\Big( \\text{Prompt}_{\\text{system}} \\mathbin{\\Vert} \\text{Passages}_{\\text{retrieved}}(q) \\mathbin{\\Vert} q \\Big)'
      },
      {
        id: 'python-implementation',
        title: 'Python Core RAG Pipeline',
        level: 2,
        content: 'Below is a basic python implementation using sentence-transformers and Cosine Similarity calculation:',
        codeSnippet: `class BasicRAG:
    def __init__(self, corpus: list[str]):
        self.corpus = corpus
        self.encoder = SentenceTransformer('all-MiniLM-L6-v2')
        self.doc_embeddings = self.encoder.encode(corpus, convert_to_tensor=True)

    def retrieve(self, query: str, top_k: int = 2) -> list[str]:
        query_vec = self.encoder.encode(query, convert_to_tensor=True)
        scores = np.dot(self.doc_embeddings.cpu(), query_vec.cpu())
        top_indices = np.argsort(scores)[::-1][:top_k]
        return [self.corpus[i] for i in top_indices]`
      },
      {
        id: 'key-benefits',
        title: 'Key Architectural Benefits',
        level: 2,
        content: '* **Prevents Knowledge Cutoff Reliance**: Accesses live external database updates.\n* **Drastically Reduces Hallucinations**: Grounded directly in retrieved source passages.\n* **Token & Cost Efficiency**: Eliminates need to dump massive unstructured libraries into context windows.'
      }
    ],
    citations: [
      { id: '1', text: 'MLTut (Hadel Zafar), "What is RAG? Retrieval Augmented Generation Explained in Under 30 Minutes", YouTube, Published May 2026.', source: 'YouTube (MLTut)', year: 2026, trustScore: 95, sourceTier: 'Verified Archive' }
    ],
    relatedTopics: ['agentic-rag', 'graph-rag', 'flash-attention', 'contextual-retrieval'],
    pkmMetadata: {
      uuid: 'a1b2c3d4-e5f6-4a5b-8c7d-9e0f1a2b3c4d',
      type: 'atomic-note',
      status: 'active',
      ownerMoc: '[[yt-moc]]',
      confidence: 95,
      tags: ['concept', 'ai', 'llm', 'rag', 'definition'],
      reviewDate: '2026-09-02'
    }
  },
  'claude-second-brain-levels': {
    id: 'claude-second-brain-levels',
    title: 'Every Level of a Claude Second Brain Explained',
    subtitle: 'Atomic Note — NexusDB Personal Vault',
    categories: ['ai', 'ml', 'productivity', 'yt'],
    isFeatured: true,
    isPkmNote: true,
    lastModified: '2026-07-18T00:00:00Z',
    views: 'Personal Note',
    readTime: '6 min read',
    author: 'Vault Owner',
    infobox: {
      title: 'Claude Second Brain Taxonomy',
      fields: [
        { label: 'Note Type', value: 'atomic-note' },
        { label: 'Status', value: 'linked' },
        { label: 'Owner MOC', value: '[[ai-ml-moc]]' },
        { label: 'Confidence', value: '95%' },
        { label: 'Next Review', value: '2026-10-16' }
      ]
    },
    leadParagraphs: [
      'This note details the five-level taxonomy of building and scaling an AI-assisted Second Brain (Personal Knowledge Management or PKM system). Starting from basic exact-word matching folders up to fully autonomous, always-on cognitive OS databases, it highlights how file structure, metadata, search capabilities, and relationship mapping determine how effectively AI models retrieve and leverage knowledge [1].'
    ],
    sections: [
      {
        id: 'five-levels-taxonomy',
        title: 'The 5 Levels of Second Brain Taxonomy',
        level: 2,
        content: `1. **Level 1: File-Level Directory and Path Routing**: Relies on workspace router files (\`claude.md\` or \`agents.md\`) telling AI where specific documents live.
2. **Level 2: Wiki-Style Conceptual Linking**: Introduces Maps of Content (MOCs), wikilinks (\`[[Note]]\`), and automatic session memory.
3. **Level 3: Semantic Search & Vector Databases**: Uses embeddings and vector stores for concept matching.
4. **Level 4: Knowledge Graphs and Entity Relationships**: Maps explicit nodes and edges with typed relationships.
5. **Level 5: Always-On Brain OS**: Autonomous background crons updating memories and indexing new assets.`
      },
      {
        id: 'four-cs-framework',
        title: 'The Four C\'s of Cognitive Environments',
        level: 2,
        content: `* **Context**: Evergreen structural rules and locked decisions.
* **Connections**: Dynamic real-time links (Slack/emails).
* **Capabilities**: Tools and APIs available to agents.
* **Cadence**: Scheduled triggers for agent execution.`
      }
    ],
    citations: [
      { id: '1', text: 'YouTube Study: Every Level of a Claude Second Brain Explained, Ingested July 2026.', source: 'NexusDB Ingestion', year: 2026, trustScore: 98, sourceTier: 'Verified Archive' }
    ],
    relatedTopics: ['retrieval-augmented-generation', 'agentic-rag'],
    pkmMetadata: {
      uuid: 'da61d5fa-2589-4b06-8752-b9fd8a2ca32a',
      type: 'atomic-note',
      status: 'active',
      ownerMoc: '[[ai-ml-moc]]',
      confidence: 95,
      tags: ['ai', 'ml', 'productivity', 'yt'],
      reviewDate: '2026-10-16'
    }
  },
  'atomic-habit': {
    id: 'atomic-habit',
    title: 'Atomic Habit & The 4 Laws of Behavior Change',
    subtitle: 'Atomic Note — NexusDB Personal Vault',
    categories: ['psychology', 'habits', 'productivity', 'books'],
    isFeatured: false,
    isPkmNote: true,
    lastModified: '2026-07-20T00:00:00Z',
    views: 'Personal Note',
    readTime: '5 min read',
    author: 'Vault Owner',
    infobox: {
      title: 'Atomic Habit',
      fields: [
        { label: 'Note Type', value: 'atomic-note' },
        { label: 'Status', value: 'active' },
        { label: 'Owner MOC', value: '[[atomic-habits-moc]]' },
        { label: 'Confidence', value: '98%' }
      ]
    },
    leadParagraphs: [
      'An **Atomic Habit** is a micro-behavior or tiny routine that is part of a larger system. Small 1% compounding improvements over time yield massive nonlinear outcomes [1].'
    ],
    sections: [
      {
        id: 'four-laws',
        title: 'The 4 Laws of Behavior Change',
        level: 2,
        content: `1. **Make it Obvious**: Cue phase.\n2. **Make it Attractive**: Craving phase.\n3. **Make it Easy**: Response phase.\n4. **Make it Satisfying**: Reward phase.`
      }
    ],
    citations: [
      { id: '1', text: 'James Clear (2018). Atomic Habits. Avery Press.', source: 'Avery Publishing', year: 2018, trustScore: 99, sourceTier: 'Academic Press' }
    ],
    relatedTopics: ['claude-second-brain-levels'],
    pkmMetadata: {
      uuid: 'b9821a4c-3321-4f11-8291-[#atomic-habit]',
      type: 'atomic-note',
      status: 'active',
      ownerMoc: '[[atomic-habits-moc]]',
      confidence: 98,
      tags: ['psychology', 'habits', 'productivity'],
      reviewDate: '2026-11-01'
    }
  }
};

export const PKM_VAULT_STATS: PkmVaultStats = {
  totalNodes: 373,
  totalMocs: 22,
  activeConfidence: 96.2,
  tagsCount: 48
};

/**
 * Atomize an article into a schema-compliant NexusDB Atomic Note Markdown text
 */
export function generateNexusDbMarkdown(article: Article, ownerMoc: string = '[[ai-ml-moc]]'): string {
  const uuid = crypto.randomUUID();
  const dateStr = new Date().toISOString().split('T')[0];
  
  return `---
id: "${uuid}"
title: "${article.title}"
type: "atomic-note"
status: "active"
created: "${dateStr}"
modified: "${dateStr}"
review: "2026-11-01"
confidence: 95
tags:
  - concept
  - ai
  - wiki-ingested
owner_moc: "${ownerMoc}"
source:
  title: "${article.title}"
  url: "${window.location.href}"
  accessed: "${dateStr}"
---

# Definition
**${article.title}** ${article.leadParagraphs[0] || ''}

---

# Key Principles & Explanation
${article.sections.map(s => `## ${s.title}\n${s.content}`).join('\n\n')}

---

# Related Notes
${article.relatedTopics.map(t => `- [[${t}]]`).join('\n')}

---

# Source & Provenance
- Ingested via WikiLLM PKM Engine on ${dateStr}.
`;
}
