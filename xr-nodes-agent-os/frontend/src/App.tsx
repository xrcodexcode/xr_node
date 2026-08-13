import React, { useState, useEffect } from 'react'
import {
  LayoutDashboard,
  Bot,
  Sparkles,
  Anchor,
  Brain,
  Activity,
  Search,
  Cpu,
  Zap,
  Play,
  CheckCircle,
  Clock,
  ListTodo,
  Database
} from 'lucide-react'

import KnowledgeQuery from './components/KnowledgeQuery'
import SkillsView from './components/SkillsView'
import ActivityFeed from './components/ActivityFeed'
import HooksView from './components/HooksView'
import AgentsEcosystem from './components/AgentsEcosystem'
import AgentOutputConsole from './components/AgentOutputConsole'
import UnifiedMemoryHub from './components/UnifiedMemoryHub'

const MAIN_AGENTS = [
  {
    id: "antigravity",
    name: "Antigravity",
    vendor: "Google DeepMind",
    engine: "Gemini 3.6 Flash / Gemini 3.1 Pro",
    logo: "🪐",
    color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/40 text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    status: "PRIMARY ACTIVE",
    role: "System Orchestrator & Knowledge Engine"
  },
  {
    id: "claude-code",
    name: "Claude Code",
    vendor: "Anthropic",
    engine: "Claude Opus 5 / Claude Sonnet 5",
    logo: "🤖",
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-400",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    status: "READY",
    role: "Autonomous Lead Software Engineer"
  },
  {
    id: "codex",
    name: "Codex",
    vendor: "OpenAI",
    engine: "GPT-5.6 Sol / GPT-5.6 Terra",
    logo: "🧠",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    status: "READY",
    role: "Algorithmic Code Intelligence"
  },
  {
    id: "hermes",
    name: "Hermes Agent",
    vendor: "Nous Research",
    engine: "Hermes 4.3 / DeepSeek-R1",
    logo: "🏛️",
    color: "from-purple-500/20 to-indigo-500/10 border-purple-500/40 text-purple-400",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    status: "READY",
    role: "Autonomous Function Calling & Local Reasoning"
  }
]

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'agents' | 'skills' | 'hooks' | 'memory' | 'activity' | 'query'>('home')
  const [status, setStatus] = useState<any>(null)
  const [agents, setAgents] = useState<any[]>([])
  const [tasks, setTasks] = useState<any[]>([])
  const [skills, setSkills] = useState<any[]>([])
  const [hooks, setHooks] = useState<any[]>([])
  const [selectedAgentId, setSelectedAgentId] = useState('antigravity')
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [quickMsg, setQuickMsg] = useState('')

  const fetchData = async () => {
    try {
      const [resStatus, resAgents, resTasks, resSkills, resHooks] = await Promise.all([
        fetch('/api/v1/health/status').then(r => r.json()),
        fetch('/api/v1/agents').then(r => r.json()),
        fetch('/api/v1/tasks').then(r => r.json()),
        fetch('/api/v1/skills').then(r => r.json()),
        fetch('/api/v1/hooks').then(r => r.json())
      ])
      setStatus(resStatus || {})
      setAgents(Array.isArray(resAgents) ? resAgents : [])
      setTasks(Array.isArray(resTasks) ? resTasks : [])
      setSkills(Array.isArray(resSkills) ? resSkills : [])
      setHooks(Array.isArray(resHooks) ? resHooks : [])
    } catch (e) {
      console.error('Failed to fetch backend data:', e)
    }
  }

  useEffect(() => {
    fetchData()
    const timer = setInterval(fetchData, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTaskTitle.trim()) return
    setLoading(true)
    setQuickMsg('')
    try {
      const res = await fetch('/api/v1/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: `[${selectedAgentId.toUpperCase()}] ${newTaskTitle}` })
      }).then(r => r.json())
      
      if (res.task_id) {
        await fetch(`/api/v1/tasks/${res.task_id}/execute`, { method: 'POST' })
        setQuickMsg(`Task assigned to ${selectedAgentId.toUpperCase()} and executing!`)
      }
      setNewTaskTitle('')
      fetchData()
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen bg-[#09090b] text-gray-100 font-sans overflow-hidden">
      {/* Streamlined Clean Sidebar */}
      <aside className="w-64 bg-[#121215] border-r border-zinc-800 flex flex-col justify-between p-4">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 px-2 py-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-white tracking-wide text-sm">XR-NODES</h1>
              <p className="text-[10px] text-cyan-400 font-mono">AGENT OS v0.1.0</p>
            </div>
          </div>

          {/* Clean Streamlined 7 Navigation Items */}
          <nav className="space-y-1.5">
            {[
              { id: 'home', label: 'Home', icon: LayoutDashboard },
              { id: 'agents', label: 'Agents', icon: Bot, count: 4 },
              { id: 'skills', label: 'Skills', icon: Sparkles, count: skills.length },
              { id: 'hooks', label: 'Hooks', icon: Anchor, count: hooks.length },
              { id: 'memory', label: 'Memory', icon: Brain },
              { id: 'activity', label: 'Activity', icon: Activity },
              { id: 'query', label: 'Query', icon: Search }
            ].map(item => {
              const Icon = item.icon
              const active = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    active
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold shadow-md'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  {item.count !== undefined && (
                    <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded-full text-zinc-400 font-mono">
                      {item.count}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        {/* System Health Card */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3.5 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">System Status</span>
            <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1.5 text-zinc-400 border-t border-zinc-800/50">
            <div>
              <p className="text-[9px] text-zinc-500">NODES</p>
              <p className="text-zinc-200">{status?.vault_nodes || 0}</p>
            </div>
            <div>
              <p className="text-[9px] text-zinc-500">MOCs</p>
              <p className="text-zinc-200">{status?.vault_mocs || 0}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 bg-[#09090b]">
        {activeTab === 'home' && (
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Top Bar & Quick Task Dispatcher */}
            <div className="flex items-center justify-between bg-[#121215] border border-zinc-800 p-5 rounded-2xl">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  XR-NODES Agent OS Overview
                </h2>
                <p className="text-xs text-zinc-400">Dispatch tasks directly to Antigravity, Claude Code, Codex, or Hermes Agent.</p>
              </div>

              <form onSubmit={handleCreateTask} className="flex gap-2">
                <select
                  value={selectedAgentId}
                  onChange={e => setSelectedAgentId(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 text-xs text-cyan-400 font-mono rounded-lg px-3 py-2 focus:outline-none"
                >
                  <option value="antigravity">🪐 Antigravity</option>
                  <option value="claude-code">🤖 Claude Code</option>
                  <option value="codex">🧠 Codex</option>
                  <option value="hermes">🏛️ Hermes Agent</option>
                </select>

                <input
                  type="text"
                  placeholder="Dispatch prompt... e.g. Audit codebase security"
                  value={newTaskTitle}
                  onChange={e => setNewTaskTitle(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 text-xs text-white rounded-lg px-3 py-2 w-64 focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Run Agent</span>
                </button>
              </form>
            </div>

            {quickMsg && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-3 rounded-xl text-xs font-mono flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {quickMsg}
              </div>
            )}

            {/* Core Agent Roster Grid (Antigravity, Claude Code, Codex, Hermes) */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Bot className="w-4 h-4 text-cyan-400" />
                Integrated AI Agents
              </h3>

              <div className="grid grid-cols-4 gap-4">
                {MAIN_AGENTS.map(agent => (
                  <div
                    key={agent.id}
                    onClick={() => setSelectedAgentId(agent.id)}
                    className={`bg-gradient-to-br ${agent.color} border rounded-xl p-4 space-y-3 cursor-pointer transition-all hover:scale-[1.02] ${
                      selectedAgentId === agent.id ? 'ring-2 ring-cyan-400 shadow-lg' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{agent.logo}</span>
                      <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border ${agent.badge}`}>
                        {agent.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-white text-sm">{agent.name}</h4>
                      <p className="text-[10px] text-zinc-400 font-mono mt-0.5">{agent.vendor}</p>
                    </div>

                    <div className="bg-black/30 p-2 rounded border border-zinc-800/60 font-mono text-[10px] text-zinc-300">
                      {agent.engine}
                    </div>

                    <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">{agent.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* System Metrics Grid */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Active Agents', value: status?.agents || 0, icon: Bot, color: 'text-cyan-400' },
                { label: 'Total Tasks', value: status?.total_tasks || 0, icon: ListTodo, color: 'text-emerald-400' },
                { label: 'Vault Nodes', value: status?.vault_nodes || 0, icon: Database, color: 'text-purple-400' },
                { label: 'System Uptime', value: status?.uptime || '0m', icon: Clock, color: 'text-amber-400' }
              ].map((m, i) => {
                const Icon = m.icon
                return (
                  <div key={i} className="bg-[#121215] border border-zinc-800 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-zinc-400">{m.label}</p>
                      <p className={`text-2xl font-bold font-mono mt-1 ${m.color}`}>{m.value}</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Live Agent Output Console */}
            <AgentOutputConsole />
          </div>
        )}

        {activeTab === 'agents' && <AgentsEcosystem apiAgents={agents} />}
        {activeTab === 'skills' && <SkillsView />}
        {activeTab === 'hooks' && <HooksView />}
        {activeTab === 'memory' && <UnifiedMemoryHub />}
        {activeTab === 'activity' && <ActivityFeed />}
        {activeTab === 'query' && <KnowledgeQuery />}
      </main>
    </div>
  )
}
