import React, { useState } from 'react'
import { Bot, Cpu, Zap, ShieldCheck, Terminal, Sparkles, CheckCircle, ExternalLink } from 'lucide-react'

interface AgentEcosystemItem {
  id: string;
  name: string;
  vendor: string;
  engine: string;
  logo: string;
  color: string;
  badgeColor: string;
  description: string;
  role: string;
  capabilities: string[];
  tools: string[];
  status: string;
}

const AGENT_ROSTER: AgentEcosystemItem[] = [
  {
    id: "antigravity",
    name: "Antigravity",
    vendor: "Google DeepMind",
    engine: "Gemini 1.5 Pro / Flash 3.6",
    logo: "🪐",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    description: "Primary Agent Operating System control plane. Manages task state machines, zero-RAM local RAG, memory graphs, and vault atomization.",
    role: "System Orchestrator & Knowledge Engineer",
    capabilities: ["Multi-Agent Planning", "Vault Knowledge Indexing", "Skill Execution", "Memory Management"],
    tools: ["file.read", "file.write", "knowledge.search", "knowledge.create", "git.status"],
    status: "PRIMARY ACTIVE"
  },
  {
    id: "claude-code",
    name: "Claude Code",
    vendor: "Anthropic",
    engine: "Claude 3.5 Sonnet / Opus",
    logo: "🤖",
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-400",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    description: "CLI-based autonomous coding agent. Excels at deep codebase refactoring, static analysis, unit test generation, and complex terminal tasks.",
    role: "Autonomous Lead Software Engineer",
    capabilities: ["Full-stack Coding", "Refactoring", "Git Workflows", "Terminal Sandboxing"],
    tools: ["shell.execute", "file.read", "file.write", "git.status"],
    status: "READY"
  },
  {
    id: "codex",
    name: "Codex",
    vendor: "OpenAI",
    engine: "GPT-4o / O3-Mini",
    logo: "🧠",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-400",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    description: "High-speed code synthesis and algorithmic problem solver. Specializes in system integration, backend APIs, and optimization.",
    role: "Algorithmic Code Intelligence",
    capabilities: ["Code Generation", "Algorithm Optimization", "API Design", "Data Transformation"],
    tools: ["file.read", "file.write", "shell.execute"],
    status: "READY"
  },
  {
    id: "hermes",
    name: "Hermes Agent",
    vendor: "Nous Research",
    engine: "Hermes 3 / Llama 3.1 405B",
    logo: "🏛️",
    color: "from-purple-500/20 to-indigo-500/10 border-purple-500/40 text-purple-400",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    description: "Open-source autonomous reasoning and un-censored tool calling agent. Capable of complex structured multi-step inference.",
    role: "Autonomous Function Calling & Open-Weights Specialist",
    capabilities: ["Uncensored Reasoning", "Structured JSON Calling", "Local Inference", "Agentic Loops"],
    tools: ["web.fetch", "knowledge.search", "file.read"],
    status: "READY"
  }
]

export default function AgentsEcosystem({ apiAgents = [] }: { apiAgents?: any[] }) {
  const [selectedAgent, setSelectedAgent] = useState<AgentEcosystemItem>(AGENT_ROSTER[0])

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Bot className="w-5 h-5 text-cyan-400" />
          Agent OS Core Ecosystem Roster
        </h2>
        <p className="text-xs text-zinc-400">Autonomous AI agents powered by Google, Anthropic, OpenAI, and Nous Research integrated into XR-NODES.</p>
      </div>

      {/* Featured 4 Core Agents Grid */}
      <div className="grid grid-cols-2 gap-5">
        {AGENT_ROSTER.map(agent => {
          const isSelected = selectedAgent.id === agent.id
          return (
            <div
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`bg-gradient-to-br ${agent.color} border rounded-2xl p-6 space-y-4 cursor-pointer transition-all hover:scale-[1.01] ${
                isSelected ? 'ring-2 ring-cyan-400 shadow-xl' : 'opacity-90 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{agent.logo}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">{agent.name}</h3>
                    <p className="text-[11px] text-zinc-400 font-mono">{agent.vendor} • {agent.engine}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${agent.badgeColor}`}>
                  {agent.status}
                </span>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">{agent.description}</p>

              <div className="bg-black/30 border border-zinc-800/80 rounded-xl p-3 space-y-2 text-xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-zinc-400 font-medium">Role:</span>
                  <span className="text-white font-mono font-semibold">{agent.role}</span>
                </div>

                <div>
                  <span className="text-[10px] text-zinc-500 font-mono block mb-1">CAPABILITIES</span>
                  <div className="flex flex-wrap gap-1">
                    {agent.capabilities.map(cap => (
                      <span key={cap} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded text-[10px] font-mono">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Internal Agent Sub-definitions from Vault Registry */}
      {apiAgents.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-zinc-800">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-purple-400" />
            Specialized Vault Agent Definitions ({apiAgents.length})
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {apiAgents.map(a => (
              <div key={a.name} className="bg-[#121215] border border-zinc-800 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-cyan-400 font-semibold text-xs">{a.name}</span>
                  <span className="text-[9px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded font-mono">{a.type}</span>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-2">{a.description}</p>
                <div className="pt-2 border-t border-zinc-800/60 flex flex-wrap gap-1">
                  {(a.tools || []).map((t: string) => (
                    <span key={t} className="bg-zinc-900 text-zinc-400 px-1.5 py-0.5 rounded text-[9px] font-mono">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
