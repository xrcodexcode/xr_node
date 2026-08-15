import React, { useState, useEffect, useCallback, useMemo } from 'react'
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
  Database,
  ArrowRight,
  Menu,
  X,
  Youtube,
  Workflow,
  FileText
} from 'lucide-react'

import KnowledgeQuery from './components/KnowledgeQuery'
import SkillsView from './components/SkillsView'
import ActivityFeed from './components/ActivityFeed'
import HooksView from './components/HooksView'
import AgentsEcosystem from './components/AgentsEcosystem'
import AgentOutputConsole from './components/AgentOutputConsole'
import UnifiedMemoryHub from './components/UnifiedMemoryHub'
import CreatorStudio from './components/CreatorStudio'
import MermaidStudio from './components/MermaidStudio'
import ObsidianWorkspace from './components/ObsidianWorkspace'

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

const QUICK_PROMPTS = [
  { label: "Audit Codebase Security", prompt: "Audit codebase security, permissions, and tool safety rules" },
  { label: "Index Vault Graph", prompt: "Perform deep index scan across NODES/ and 03_MOC/ navigation graph" },
  { label: "Atomize Research Draft", prompt: "Extract atomic concepts from recent research capture into NODES/" },
  { label: "Verify Link Integrity", prompt: "Sweep orphan nodes and verify wikilink bidirectional health" }
]

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'obsidian' | 'creator' | 'diagrams' | 'agents' | 'skills' | 'hooks' | 'memory' | 'activity' | 'query'>('home')
  const [status, setStatus] = useState<any>(null)
  const [agents, setAgents] = useState<any[]>([])
  const [tasks, setTasks] = useState<any[]>([])
  const [skills, setSkills] = useState<any[]>([])
  const [hooks, setHooks] = useState<any[]>([])
  const [selectedAgentId, setSelectedAgentId] = useState('antigravity')
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [quickMsg, setQuickMsg] = useState('')
  const [latencyMs, setLatencyMs] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Memoized fetch function with performance timing
  const fetchData = useCallback(async () => {
    const start = performance.now()
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
      setLatencyMs(Math.round(performance.now() - start))
    } catch (e) {
      console.error('Failed to fetch backend data:', e)
    }
  }, [])

  // Smart Visibility-Aware Polling (Pauses when tab hidden to save CPU/battery)
  useEffect(() => {
    fetchData()
    let timer: any = null

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (timer) clearInterval(timer)
      } else {
        fetchData()
        timer = setInterval(fetchData, 4000)
      }
    }

    timer = setInterval(fetchData, 4000)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      if (timer) clearInterval(timer)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [fetchData])

  // Keyboard shortcut listener (Ctrl/Cmd + K for query)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setActiveTab('query')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleCreateTask = async (e?: React.FormEvent, customTitle?: string) => {
    if (e) e.preventDefault()
    const taskText = customTitle || newTaskTitle
    if (!taskText.trim()) return

    setLoading(true)
    setQuickMsg('')
    try {
      const res = await fetch('/api/v1/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: `[${selectedAgentId.toUpperCase()}] ${taskText.trim()}` })
      }).then(r => r.json())

      if (res.task_id) {
        await fetch(`/api/v1/tasks/${res.task_id}/execute`, { method: 'POST' })
        setQuickMsg(`Task dispatched to ${selectedAgentId.toUpperCase()} & running!`)
      }
      setNewTaskTitle('')
      fetchData()
    } catch (e) {
      console.error(e)
      setQuickMsg('Failed to dispatch task. Please check server logs.')
    } finally {
      setLoading(false)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: LayoutDashboard },
    { id: 'obsidian', label: 'Obsidian Vault', icon: FileText, count: status?.vault_nodes || 373, isNew: true },
    { id: 'creator', label: 'Creator Studio', icon: Youtube },
    { id: 'diagrams', label: 'Mermaid Studio', icon: Workflow },
    { id: 'agents', label: 'Agents', icon: Bot, count: 4 },
    { id: 'skills', label: 'Skills', icon: Sparkles, count: skills.length },
    { id: 'hooks', label: 'Hooks', icon: Anchor, count: hooks.length },
    { id: 'memory', label: 'Memory Hub', icon: Brain },
    { id: 'activity', label: 'Activity Feed', icon: Activity },
    { id: 'query', label: 'Vault Query', icon: Search, shortcut: '⌘K' }
  ]

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#09090b] text-zinc-100 font-sans overflow-hidden">
      {/* Mobile Top Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#121215] border-b border-zinc-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="font-bold text-white text-sm">XR-NODES</span>
          <span className="text-[10px] text-cyan-400 font-mono">v0.1.0</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar (Desktop & Mobile Drawer) */}
      <aside className={`
        ${mobileMenuOpen ? 'fixed inset-0 z-50 flex' : 'hidden'}
        lg:flex lg:static lg:z-auto w-64 bg-[#121215]/95 border-r border-zinc-800/90 flex-col justify-between p-4 backdrop-blur-md flex-shrink-0
      `}>
        <div>
          {/* Brand Logo (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 px-2 py-3 mb-6 group cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-white tracking-tight text-sm flex items-center gap-1.5">
                XR-NODES
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </h1>
              <p className="text-[10px] text-zinc-400 font-mono">AGENT OS v0.1.0</p>
            </div>
          </div>

          {/* Close button on Mobile Drawer */}
          <div className="lg:hidden flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
            <span className="font-bold text-white text-sm">Navigation</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map(item => {
              const Icon = item.icon
              const active = activeTab === item.id
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id as any)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    active
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold shadow-[0_0_12px_rgba(6,182,212,0.1)]'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {item.isNew && (
                      <span className="text-[9px] bg-red-500/10 border border-red-500/30 text-red-400 font-mono font-bold px-1.5 py-0.5 rounded">
                        NEW
                      </span>
                    )}
                    {item.shortcut && (
                      <span className="text-[9px] bg-zinc-800/80 border border-zinc-700/50 px-1.5 py-0.5 rounded text-zinc-400 font-mono hidden sm:inline">
                        {item.shortcut}
                      </span>
                    )}
                    {item.count !== undefined && (
                      <span className="text-[10px] bg-zinc-800/90 px-2 py-0.5 rounded-full text-zinc-400 font-mono border border-zinc-700/30">
                        {item.count}
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </nav>
        </div>

        {/* System Health Card */}
        <div className="bg-zinc-900/60 border border-zinc-800/90 rounded-xl p-3.5 text-xs space-y-2.5 mt-4">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400 text-[11px] font-medium">Control Plane</span>
            <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE {latencyMs ? `(${latencyMs}ms)` : ''}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 text-zinc-400 border-t border-zinc-800/80">
            <div>
              <p className="text-[9px] text-zinc-500 uppercase tracking-wider">Nodes</p>
              <p className="text-zinc-100 font-bold text-sm">{status?.vault_nodes || 373}</p>
            </div>
            <div>
              <p className="text-[9px] text-zinc-500 uppercase tracking-wider">MOCs</p>
              <p className="text-zinc-100 font-bold text-sm">{status?.vault_mocs || 22}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#09090b]">
        {activeTab === 'home' && (
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Top Bar & Quick Task Dispatcher */}
            <div className="glass-panel p-5 rounded-2xl space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    XR-NODES Agent OS Overview
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">Autonomous multi-agent orchestration for personal knowledge systems.</p>
                </div>

                <form onSubmit={handleCreateTask} className="flex flex-col sm:flex-row gap-2">
                  <select
                    value={selectedAgentId}
                    onChange={e => setSelectedAgentId(e.target.value)}
                    className="bg-zinc-900 border border-zinc-800 text-xs text-cyan-400 font-mono rounded-xl px-3 py-2.5 focus:outline-none focus:border-cyan-500"
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
                    className="bg-zinc-900 border border-zinc-800 text-xs text-white rounded-xl px-3.5 py-2.5 w-full sm:w-72 focus:outline-none focus:border-cyan-500 placeholder:text-zinc-600"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Run Agent</span>
                  </button>
                </form>
              </div>

              {/* Quick Action Prompt Chips */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 border-t border-zinc-800/80">
                <span className="text-[10px] text-zinc-500 font-mono uppercase">Quick Dispatch:</span>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_PROMPTS.map((qp, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCreateTask(undefined, qp.prompt)}
                      className="bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors flex items-center gap-1"
                    >
                      <span>{qp.label}</span>
                      <ArrowRight className="w-3 h-3 text-zinc-500" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {quickMsg && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-3 rounded-xl text-xs font-mono flex items-center gap-2 animate-fadeIn">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                {quickMsg}
              </div>
            )}

            {/* Core Agent Roster Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Bot className="w-4 h-4 text-cyan-400" />
                Integrated AI Model Roster
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {MAIN_AGENTS.map(agent => (
                  <div
                    key={agent.id}
                    onClick={() => setSelectedAgentId(agent.id)}
                    className={`bg-gradient-to-br ${agent.color} border rounded-2xl p-4 space-y-3 cursor-pointer transition-all hover:scale-[1.02] ${
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

                    <div className="bg-black/30 p-2 rounded-lg border border-zinc-800/60 font-mono text-[10px] text-zinc-300">
                      {agent.engine}
                    </div>

                    <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">{agent.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* System Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Active Agents', value: status?.agents || 9, icon: Bot, color: 'text-cyan-400' },
                { label: 'Total Tasks', value: status?.total_tasks || tasks.length || 5, icon: ListTodo, color: 'text-emerald-400' },
                { label: 'Vault Nodes', value: status?.vault_nodes || 373, icon: Database, color: 'text-purple-400' },
                { label: 'System Uptime', value: status?.uptime || '0m', icon: Clock, color: 'text-amber-400' }
              ].map((m, i) => {
                const Icon = m.icon
                return (
                  <div key={i} className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-4 flex items-center justify-between hover:border-zinc-700 transition-colors">
                    <div>
                      <p className="text-xs text-zinc-400">{m.label}</p>
                      <p className={`text-2xl font-bold font-mono mt-1 ${m.color}`}>{m.value}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
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

        {activeTab === 'obsidian' && <ObsidianWorkspace />}
        {activeTab === 'creator' && <CreatorStudio />}
        {activeTab === 'diagrams' && <MermaidStudio />}
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
