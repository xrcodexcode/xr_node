export type ComplexityLevel = 'standard' | 'academic' | 'eli5' | 'executive';

export type LanguageCode = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'zh' | 'hi' | 'ar';

export type ViewMode = 'wikipedia' | 'nexusdb-pkm';

export interface InfoboxField {
  label: string;
  value: string;
  isLink?: boolean;
  targetId?: string;
}

export interface InfoboxData {
  title: string;
  image?: string;
  imageCaption?: string;
  fields: InfoboxField[];
}

export interface Citation {
  id: string;
  text: string;
  source: string;
  year?: number;
  url?: string;
  trustScore: number; // 0-100
  sourceTier: 'Peer-Reviewed Journal' | 'Academic Press' | 'Institutional Report' | 'Verified Archive';
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  level: number; // 2 for h2, 3 for h3
  image?: string;
  imageCaption?: string;
  codeSnippet?: string;
  formula?: string;
}

export interface ArticleVersionContent {
  leadParagraphs: string[];
  sections: ArticleSection[];
}

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  categories: string[];
  isFeatured?: boolean;
  isAiGenerated?: boolean;
  isPkmNote?: boolean;
  lastModified: string;
  views: string;
  readTime: string;
  author?: string;
  infobox: InfoboxData;
  leadParagraphs: string[];
  sections: ArticleSection[];
  citations: Citation[];
  relatedTopics: string[];
  eli5Version?: ArticleVersionContent;
  academicVersion?: ArticleVersionContent;
  execSummaryVersion?: ArticleVersionContent;
  pkmMetadata?: {
    uuid: string;
    type: 'atomic-note' | 'moc';
    status: 'active' | 'draft' | 'under-review';
    ownerMoc: string;
    confidence: number;
    tags: string[];
    reviewDate: string;
  };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  citations?: string[];
}

export interface GraphNode {
  id: string;
  label: string;
  category: string;
  radius: number;
}

export interface GraphEdge {
  source: string;
  target: string;
  label?: string;
}

export interface Bookmark {
  articleId: string;
  title: string;
  savedAt: string;
  category: string;
}

export interface NewsItem {
  id: string;
  title: string;
  snippet: string;
  date: string;
  category: string;
  articleId?: string;
}

export interface OnThisDayItem {
  year: string;
  event: string;
  articleLink?: string;
}

export interface DidYouKnowItem {
  fact: string;
  articleLink: string;
}

export interface PkmVaultStats {
  totalNodes: number;
  totalMocs: number;
  activeConfidence: number;
  tagsCount: number;
}
