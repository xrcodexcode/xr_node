/**
 * Piyush Wiki Core Domain & API Types
 */

export interface SystemStatus {
  status: 'online' | 'degraded' | 'offline';
  version: string;
  environment: 'development' | 'production' | 'test';
  database: 'connected' | 'disconnected';
  vectorStore: 'connected' | 'disconnected';
  uptimeSeconds: number;
}

export interface ApiErrorDetail {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  timestamp: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: ApiErrorDetail;
}

export interface VaultNodeMetadata {
  id: string;
  filePath: string;
  title: string;
  slug: string;
  contentHash: string;
  wordCount: number;
  readingTimeMinutes: number;
  tags: string[];
  aliases: string[];
  ownerMoc?: string;
  confidence?: number;
  createdAt: string;
  updatedAt: string;
}

export interface AppConfig {
  apiBaseUrl: string;
  vaultPath: string;
  environment: 'development' | 'production' | 'test';
  debug: boolean;
}
