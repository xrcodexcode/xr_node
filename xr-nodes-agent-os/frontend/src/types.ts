export interface SystemHealth {
  status: string;
  version: string;
  environment: string;
  timestamp: string;
  vault_connected: boolean;
  database_connected: boolean;
  vault_path: string;
}

export interface SystemStatus {
  status: string;
  version: string;
  agents: number;
  active_tasks: number;
  total_tasks: number;
  total_events: number;
  vault_nodes: number;
  vault_mocs: number;
  uptime: string;
}

export interface AgentItem {
  name: string;
  description: string;
  type: string;
  status: string;
  instructions: string;
  capabilities: string[];
  tools: string[];
  permissions: Record<string, string>;
}

export interface TaskItem {
  id: string;
  title: string;
  description?: string;
  status: string;
  created_at: string;
}

export interface ToolItem {
  name: string;
  description: string;
  risk_level: string;
  parameters: Record<string, any>;
  timeout_seconds: number;
}
