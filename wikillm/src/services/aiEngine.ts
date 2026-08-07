import type { Article, ArticleSection, Citation, ChatMessage, GraphNode, GraphEdge, LanguageCode } from '../types';

// Helper function to capitalize title
function formatTitle(query: string): string {
  return query
    .trim()
    .split(/\s+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Client-Side AI Simulation Engine for WikiLLM
 * Generates realistic structured Wikipedia articles, Q&A responses, translations, and graph networks.
 */
export class AiEngine {
  /**
   * Dynamically generate a brand new full Wikipedia article for any topic
   */
  static async generateArticle(topicQuery: string): Promise<Article> {
    const title = formatTitle(topicQuery);
    const id = topicQuery.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Simulate natural AI thinking delay
    await new Promise(res => setTimeout(res, 800));

    const infoboxFields = [
      { label: 'Domain', value: 'Multidisciplinary Science & Knowledge' },
      { label: 'Primary Field', value: `${title} Studies` },
      { label: 'Key Paradigm', value: 'Synthetic General Intelligence & Formal Analysis' },
      { label: 'Status', value: 'Active Academic Research' },
      { label: 'Significance Score', value: '98.4 / 100' }
    ];

    const leadParagraphs = [
      `**${title}** represents a fundamental domain of human knowledge, scientific inquiry, and technological development. It encompasses the study, formalization, and practical application of underlying principles governing the behavior and interaction of complex systems [1].`,
      `Recent advances in algorithmic modeling, observational empirical methods, and cross-disciplinary synthesis have significantly expanded the scope of **${title}**, rendering it pivotal to modern research and technological innovation [2].`
    ];

    const sections: ArticleSection[] = [
      {
        id: 'historical-context',
        title: 'Historical Background and Origin',
        level: 2,
        content: `The origin of **${title}** can be traced back to early theoretical frameworks established during the 20th century. Pioneers in the field sought to formulate rigorous mathematical and empirical methodologies to explain phenomena that defied classical paradigm models.\n\nOver subsequent decades, technological breakthroughs facilitated higher precision measurements and large-scale data modeling, establishing **${title}** as a cornerstone discipline [3].`
      },
      {
        id: 'core-mechanisms',
        title: 'Core Principles and Architectural Foundations',
        level: 2,
        content: `At its core, **${title}** operates through three interconnected subsystems:\n\n1. **Data Ingestion and Sensing**: Capturing high-dimensional state information from the operating environment.\n2. **Representation Learning**: Transforming raw inputs into structured latent manifold representations.\n3. **Feedback Optimization**: Continuously refining system metrics against theoretical loss functions.`,
        formula: `\\mathcal{F}_{\\text{${id}}}(\\mathbf{x}) = \\int_{\\Omega} \\sigma(W^T \\mathbf{x} + b) \\, d\\mu(\\mathbf{x})`
      },
      {
        id: 'modern-applications',
        title: 'Contemporary Applications and Impact',
        level: 2,
        content: `In modern industrial and academic environments, **${title}** is deployed across automated decision-making pipelines, high-throughput research simulation, and societal governance models. Its integration with artificial intelligence has exponentially accelerated execution velocity and discovery cycles.`
      },
      {
        id: 'future-prospects',
        title: 'Future Horizons and Open Questions',
        level: 2,
        content: `Despite substantial progress, several key challenges remain unresolved within **${title}**, including scalability bounds, formal verification under out-of-distribution conditions, and ethical governance standards.`
      }
    ];

    const citations: Citation[] = [
      { id: '1', text: `Author, A. et al. (2025). "Comprehensive Principles of ${title}". Journal of Advanced Research, 42(1), 15-48.`, source: 'Academic Research Press', year: 2025, trustScore: 97, sourceTier: 'Peer-Reviewed Journal' },
      { id: '2', text: `Smith, J. (2024). Theoretical Foundations of ${title}. Oxford University Press.`, source: 'Oxford Academic', year: 2024, trustScore: 99, sourceTier: 'Academic Press' },
      { id: '3', text: `Global Technology Assessment (2025). "State of ${title} Infrastructure". Tech Report No. 804.`, source: 'Verified Archive', year: 2025, trustScore: 95, sourceTier: 'Institutional Report' }
    ];

    const images = [
      'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80'
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return {
      id,
      title,
      subtitle: `AI-Synthesized Wikipedia Article on ${title}`,
      categories: ['AI Generated', 'General Science', 'Emerging Research', 'WikiLLM Index'],
      isAiGenerated: true,
      lastModified: new Date().toISOString(),
      views: `${Math.floor(Math.random() * 50000) + 1200}`,
      readTime: '6 min read',
      author: 'WikiLLM Neural Generator v4.2',
      infobox: {
        title,
        image: randomImage,
        imageCaption: `Conceptual visualization of ${title}.`,
        fields: infoboxFields
      },
      leadParagraphs,
      sections,
      citations,
      relatedTopics: ['agi', 'neural-architecture', 'quantum-computing', 'neuroscience'],
      eli5Version: {
        leadParagraphs: [
          `**${title}** is a really cool topic! Think of it like a giant puzzle where scientists figure out how things work together.`,
          `Instead of doing everything manually, people use **${title}** to solve big problems automatically!`
        ],
        sections: [
          {
            id: 'simple-explanation',
            title: 'Why does it matter?',
            level: 2,
            content: `Imagine building a castle out of LEGO bricks. **${title}** gives you super special glowing bricks that build themselves into whatever you imagine!`
          }
        ]
      }
    };
  }

  /**
   * Generate contextual answer for "Ask WikiLLM" Chat
   */
  static async askQuestion(article: Article, question: string): Promise<ChatMessage> {
    await new Promise(res => setTimeout(res, 600));

    const qLower = question.toLowerCase();
    let text = '';
    let citations: string[] = [];

    if (qLower.includes('eli5') || qLower.includes('simple') || qLower.includes('explain like')) {
      text = `Here is a simplified breakdown of **${article.title}**:\n\n` +
        `Imagine **${article.title}** as a master key. Instead of solving one problem at a time, it gives us a blueprint to solve entire categories of challenges automatically. ` +
        `The lead section notes that it combines theoretical modeling with practical execution.`;
      citations = ['Paragraph 1', 'Section 1'];
    } else if (qLower.includes('citation') || qLower.includes('source') || qLower.includes('trust')) {
      text = `This article has **${article.citations.length} verified citations**. ` +
        `The primary source is **${article.citations[0]?.source || 'Peer-Reviewed Journal'}** with a confidence trust score of ${article.citations[0]?.trustScore || 98}%.`;
      citations = [article.citations[0]?.id ? `Citation [${article.citations[0].id}]` : 'Ref 1'];
    } else if (qLower.includes('formula') || qLower.includes('math') || qLower.includes('equation')) {
      text = `Regarding the mathematical foundations of **${article.title}**:\n\n` +
        `The key equation governing the system relies on state space transformations and optimization functions over input distribution distributions.`;
      citations = ['Section 2: Core Principles'];
    } else {
      text = `Based on the active article **${article.title}**:\n\n` +
        `${article.leadParagraphs[0]}\n\n` +
        `Key takeaway: It plays a crucial role in modern research by bridging theoretical models with computational execution.`;
      citations = ['Lead Section', 'Key Metrics'];
    }

    return {
      id: 'msg-' + Date.now(),
      sender: 'ai',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      citations
    };
  }

  /**
   * Generate Knowledge Graph nodes and edges for an article
   */
  static generateKnowledgeGraph(article: Article): { nodes: GraphNode[]; edges: GraphEdge[] } {
    const nodes: GraphNode[] = [
      { id: article.id, label: article.title, category: 'Main Topic', radius: 24 }
    ];
    const edges: GraphEdge[] = [];

    // Add related topic nodes
    article.relatedTopics.forEach((topicId, i) => {
      const formattedLabel = formatTitle(topicId.replace(/-/g, ' '));
      nodes.push({
        id: topicId,
        label: formattedLabel,
        category: 'Related Concept',
        radius: 16
      });
      edges.push({
        source: article.id,
        target: topicId,
        label: i % 2 === 0 ? 'depends on' : 'extends'
      });
    });

    // Add categories
    article.categories.slice(0, 3).forEach((cat, i) => {
      const catId = `cat-${i}`;
      nodes.push({
        id: catId,
        label: cat,
        category: 'Category',
        radius: 12
      });
      edges.push({
        source: article.id,
        target: catId,
        label: 'categorized under'
      });
    });

    return { nodes, edges };
  }

  /**
   * Simulated Translation
   */
  static async translateArticle(article: Article, targetLang: LanguageCode): Promise<{ title: string; leadParagraphs: string[] }> {
    if (targetLang === 'en') {
      return { title: article.title, leadParagraphs: article.leadParagraphs };
    }

    await new Promise(res => setTimeout(res, 500));

    const prefixes: Record<LanguageCode, string> = {
      es: '[Español] ',
      fr: '[Français] ',
      de: '[Deutsch] ',
      ja: '[日本語] ',
      zh: '[中文] ',
      hi: '[हिन्दी] ',
      ar: '[العربية] ',
      en: ''
    };

    const prefix = prefixes[targetLang] || '';

    return {
      title: `${prefix}${article.title}`,
      leadParagraphs: article.leadParagraphs.map(p => `${prefix}${p}`)
    };
  }
}
