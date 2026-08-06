export interface WikiLink {
  target: string;
  targetSlug: string;
  alias: string;
}

export interface Backlink {
  sourceSlug: string;
  sourceTitle: string;
  sourceSummary: string;
  contextSnippet: string;
  alias: string;
}

export interface SourceReference {
  title: string;
  url: string;
}

export interface NoteMetadata {
  id: string;
  title: string;
  slug: string;
  filePath: string;
  type: 'moc' | 'atomic-note' | 'synthesis' | 'literature-note';
  status: 'verified' | 'active' | 'draft';
  created: string;
  modified: string;
  confidence: number;
  ownerMoc?: string;
  category: string;
  tags: string[];
  summary: string;
  aliases: string[];
  sources?: SourceReference[];
  wordCount: number;
  readingTimeMinutes: number;
  forwardLinks: WikiLink[];
  backlinksCount?: number;
}

export interface NoteDetail extends NoteMetadata {
  content: string;
  rawText: string;
  backlinks: Backlink[];
  relatedArticles: Array<{
    slug: string;
    title: string;
    category: string;
    summary: string;
    tags: string[];
    sharedScore: number;
  }>;
}

export interface CategoryInfo {
  name: string;
  count: number;
  articles: Array<{
    slug: string;
    title: string;
    summary: string;
  }>;
}

export interface TagInfo {
  name: string;
  count: number;
  articles: Array<{
    slug: string;
    title: string;
    summary: string;
  }>;
}

export interface GraphNode {
  id: string;
  title: string;
  category: string;
  type: string;
  val: number;
}

export interface GraphEdge {
  source: string;
  target: string;
  label: string;
}

export interface KnowledgeGraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export interface VaultStats {
  totalNotes: number;
  totalWords: number;
  totalLinks: number;
  totalCategories: number;
  totalTags: number;
  avgReadingTimeMinutes: number;
  lastIndexed: string;
}
