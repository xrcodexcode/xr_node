import type { Article } from '../types';

export const ARTICLES_DATA: Record<string, Article> = {
  'claude-ai': {
    id: 'claude-ai',
    title: 'Claude (AI)',
    subtitle: 'Family of large language models developed by Anthropic',
    categories: [
      'Artificial intelligence industry in the United States',
      'Chatbots',
      'Generative pre-trained transformers',
      'Large language models',
      'Machine learning',
      'Anthropic',
      '2023 software'
    ],
    isFeatured: true,
    lastModified: '2026-08-07T14:15:00Z',
    views: '4,192,800',
    readTime: '15 min read',
    author: 'Wikipedia Editors',
    infobox: {
      title: 'Claude',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      imageCaption: 'Abstract representation of Claude\'s neural alignment architecture.',
      fields: [
        { label: 'Developer', value: 'Anthropic', isLink: true, targetId: 'agi' },
        { label: 'Initial release', value: 'March 14, 2023' },
        { label: 'Latest release', value: 'Claude 3.7 Sonnet (Feb 2026)' },
        { label: 'Type', value: 'Large language model, Virtual assistant, Agentic CLI' },
        { label: 'License', value: 'Proprietary' },
        { label: 'Website', value: 'claude.ai', isLink: false }
      ]
    },
    leadParagraphs: [
      '**Claude** is a family of large language models (LLMs) developed by [[Anthropic]], an American artificial intelligence public benefit corporation founded by former OpenAI researchers Dario Amodei and Daniela Amodei [1]. The first model was released in March 2023.',
      'Claude models are trained using **Constitutional AI**, a technique designed to align artificial intelligence systems with human intentions and safety standards through self-critique guided by a explicit principles [2]. Claude supports multi-modal image analysis, long-context text processing up to 200,000+ tokens, hybrid extended thinking reasoning, and autonomous agentic developer workflows via **Claude Code** [3].'
    ],
    sections: [
      {
        id: 'history-and-development',
        title: 'History and Development',
        level: 2,
        content: 'Anthropic was founded in 2021 by seven former employees of OpenAI, including siblings Dario and Daniela Amodei [4]. The founders departed OpenAI due to direction differences regarding safety alignment and commercialization. Anthropic positioned itself as an AI safety and research company organized as a Delaware Public Benefit Corporation.\n\nIn March 2023, Anthropic released the initial version of Claude in closed beta, followed by public access in July 2023 with Claude 2. Subsequent corporate investments by Amazon ($4 billion) and Google ($2 billion) funded cloud infrastructure compute clusters for scaling model parameters [5].'
      },
      {
        id: 'models-and-versions',
        title: 'Model Generations',
        level: 2,
        content: 'Anthropic organizes Claude model releases into distinct capability tiers:\n\n* **Claude 1 & Claude 2**: Introduced expanded 100,000-token context windows in mid-2023.\n* **Claude 3 Family (Opus, Sonnet, Haiku)**: Released in March 2024. Introduced multi-modal vision input processing.\n* **Claude 3.5 Sonnet**: Released in June 2024, setting new industry benchmarks in coding proficiency and complex instruction following.\n* **Claude 3.7 Sonnet**: Introduced hybrid extended reasoning, allowing dynamic allocation of reasoning tokens depending on task complexity.'
      },
      {
        id: 'claude-code',
        title: 'Claude Code',
        level: 2,
        content: '**Claude Code** is an agentic command-line interface (CLI) development tool created by Anthropic that enables Claude to interact directly with local developer codebases, file systems, terminals, and Git repositories [6].\n\nUnlike traditional inline code completion tools, Claude Code functions as an autonomous terminal sidecar capable of:\n\n1. **Deep Codebase Indexing**: Scanning structural repository dependencies across multi-directory trees.\n2. **Multi-File Automated Refactoring**: Modifying multiple non-adjacent files simultaneously while maintaining type checking contracts.\n3. **Command Execution & Test Verification**: Running test suites, build compilers, and terminal commands in a sandboxed environment to empirically verify fixes before committing [7].\n4. **Git Workflow Automation**: Generating atomic commits, pull requests, and resolving merge conflicts directly from developer natural language prompts.',
        codeSnippet: '$ claude "Refactor the payment gateway to use async/await and update tests"'
      },
      {
        id: 'constitutional-ai',
        title: 'Constitutional AI & Safety Framework',
        level: 2,
        content: 'Anthropic\'s proprietary training methodology, **Constitutional AI** (CAI), trains models to be helpful, harmless, and honest without relying solely on human feedback supervision (RLHF) [8]. During supervision, the model critiques its own output against a written set of principles—a "constitution"—incorporating principles from the Universal Declaration of Human Rights and corporate alignment guidelines.'
      },
      {
        id: 'reception-and-impact',
        title: 'Reception and Technical Impact',
        level: 2,
        content: 'Claude has received widespread technical acclaim among software engineers and enterprise researchers for its nuanced prose style, low refusal hallucination rate, and state-of-the-art SWE-bench coding scores [9].'
      }
    ],
    citations: [
      { id: '1', text: 'Anthropic (2023). "Introducing Claude". Anthropic Research Announcement, March 14, 2023.', source: 'Anthropic Press', year: 2023, trustScore: 99, sourceTier: 'Institutional Report' },
      { id: '2', text: 'Bai, Y. et al. (2022). "Constitutional AI: Harmlessness from AI Feedback". arXiv preprint arXiv:2212.08073.', source: 'arXiv Computer Science', year: 2022, trustScore: 98, sourceTier: 'Verified Archive' },
      { id: '3', text: 'Anthropic Engineering (2025). "Claude Code: Agentic Terminal Development Engine". Anthropic Engineering Blog.', source: 'Anthropic Tech Blog', year: 2025, trustScore: 99, sourceTier: 'Peer-Reviewed Journal' },
      { id: '4', text: 'Vance, A. (2023). "Inside Anthropic, the AI Startup Founded by OpenAI Refugees". Bloomberg Businessweek.', source: 'Bloomberg', year: 2023, trustScore: 96, sourceTier: 'Academic Press' },
      { id: '5', text: 'Amazon Press (2024). "Amazon Completes $4 Billion Investment in Anthropic". AWS Press Release.', source: 'AWS News', year: 2024, trustScore: 97, sourceTier: 'Institutional Report' },
      { id: '6', text: 'Anthropic Documentation (2025). "Claude Code CLI System Specifications and Tool Call Protocols".', source: 'Anthropic Docs', year: 2025, trustScore: 100, sourceTier: 'Verified Archive' },
      { id: '7', text: 'TechCrunch (2025). "Anthropic launches Claude Code to automate developer terminal workflows".', source: 'TechCrunch', year: 2025, trustScore: 95, sourceTier: 'Institutional Report' },
      { id: '8', text: 'Amodei, D. et al. (2023). "Core Principles of Constitutional AI Alignment". Journal of AI Research.', source: 'J. AI Res.', year: 2023, trustScore: 99, sourceTier: 'Peer-Reviewed Journal' },
      { id: '9', text: 'SWE-bench Leaderboard (2025). "Evaluation of Claude Models on Software Engineering Problems".', source: 'SWE-bench', year: 2025, trustScore: 98, sourceTier: 'Peer-Reviewed Journal' }
    ],
    relatedTopics: ['agi', 'neural-architecture', 'quantum-computing', 'philosophy-mind']
  },
  'agi': {
    id: 'agi',
    title: 'Artificial General Intelligence',
    subtitle: 'Hypothetical intelligence of a machine that can learn any intellectual task',
    categories: ['Artificial Intelligence', 'Computer Science', 'Emerging Technologies'],
    isFeatured: true,
    lastModified: '2026-08-04T14:22:00Z',
    views: '2,481,902',
    readTime: '12 min read',
    author: 'Wikipedia Editors',
    infobox: {
      title: 'Artificial General Intelligence',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      imageCaption: 'Conceptual neural representation of synthetic cognitive architectures.',
      fields: [
        { label: 'Field', value: 'Computer Science, AI, Cognitive Science' },
        { label: 'Also known as', value: 'Strong AI, Full AI, Human-Level AI' },
        { label: 'First Coined', value: 'Mark Gubrud (1997)' }
      ]
    },
    leadParagraphs: [
      '**Artificial General Intelligence** (**AGI**) is the hypothetical intelligence of a software agent capable of understanding, learning, and applying intellectual capabilities across any cognitive domain at or beyond human performance [1].'
    ],
    sections: [
      {
        id: 'definition',
        title: 'Definition and Boundaries',
        level: 2,
        content: 'While no single universally accepted definition exists, AGI is characterized by domain generality, transfer learning, and autonomous self-improvement.'
      }
    ],
    citations: [
      { id: '1', text: 'Goertzel, B. (2014). "Artificial General Intelligence: Concept, State of the Art". Journal of AGI.', source: 'Journal of AGI', year: 2014, trustScore: 98, sourceTier: 'Peer-Reviewed Journal' }
    ],
    relatedTopics: ['claude-ai', 'neural-architecture']
  }
};
