/**
 * Piyush Wiki Core Domain Types
 */

export interface NoteMetadata {
  id: string;
  filePath: string;
  title: string;
  slug: string;
  contentHash: string;
  wordCount: number;
  readingTimeMinutes: number;
  tags: string[];
  aliases: string[];
  createdAt: string;
  updatedAt: string;
}

export interface NoteDetail extends NoteMetadata {
  content: string;
  frontmatter: Record<string, unknown>;
  outgoingLinks: NoteLink[];
  backlinks: NoteLink[];
}

export interface NoteLink {
  id: number;
  sourceNoteId: string;
  targetNoteTitle: string;
  targetNoteId?: string;
  contextSnippet?: string;
  isEmbed: boolean;
}

export interface GraphNode {
  id: string;
  label: string;
  slug: string;
  clusterId?: number;
  degree: number;
  val: number;
}

export interface GraphEdge {
  source: string;
  target: string;
  label?: string;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export interface SearchResult {
  id: string;
  title: string;
  slug: string;
  snippet: string;
  score: number;
  matchType: 'lexical' | 'semantic' | 'hybrid';
  tags: string[];
}
