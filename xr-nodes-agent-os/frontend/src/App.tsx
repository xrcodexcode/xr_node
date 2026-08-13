import React, { useState, useEffect } from 'react'
import {
  LayoutDashboard,
  Bot,
  ListTodo,
  Network,
  Wrench,
  Sparkles,
  Activity,
  Settings,
  Database,
  Cpu,
  Plus,
  Clock,
  BookOpen,
  Anchor
} from 'lucide-react'

import KnowledgeGraph from './components/KnowledgeGraph'
import KnowledgeQuery from './components/KnowledgeQuery'
import SkillsView from './components/SkillsView'
import ActivityFeed from './components/ActivityFeed'
import HooksView from './components/HooksView'
import AgentsEcosystem from './components/AgentsEcosystem'

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'query' | 'graph' | 'hooks' | 'skills' | 'agents' | 'tasks' | 'tools' | 'activity' | 'settings'>('dashboard')
  const [status, setStatus] = useState<any>(null)
  const [agents, setAgents] = useState<any[]>([])
  const [tasks, setTasks] = useState<any[]>([])
  const [tools, setTools] = useState<any[]>([])
  const [skills, setSkills] = useState<any[]>([])
  const [hooks, setHooks] = useState<any[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      const [resStatus, resAgents, resTasks, resTools, resSkills, resHooks] = await Promise.all([
        fetch('/api/v1/health/status').then(r => r.json()),
        fetch('/api/v1/agents').then(r => r.json()),
        fetch('/api/v1/tasks').then(r => r.json()),
        fetch('/api/v1/tools').then(r => r.json()),
        fetch('/api/v1/skills').then(r => r.json()),
        fetch('/api/v1/hooks').then(r => r.json())
      ])
      setStatus(resStatus)
      setAgents(resAgents)
      setTasks(resTasks)
      setTools(resTools)
      setSkills(resSkills)
      setHooks(resHooks)
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
    try {
      const res = await fetch('/api/v1/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTaskTitle })
      }).then(r => r.json())
      
      if (res.task_id) {
        await fetch(`/api/v1/tasks/${res.task_id}/execute`, { method: 'POST' })
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
      {/* Sidebar */}
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

          {/* Nav Items */}
          <nav className="space-y-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'query', label: 'Vault Query & RAG', icon: BookOpen },
              { id: 'graph', label: 'Knowledge Graph', icon: Network },
              { id: 'hooks', label: 'Automation Hooks', icon: Anchor, count: hooks.length },
              { id: 'skills', label: 'Skills & Workflows', icon: Sparkles, count: skills.length },
              { id: 'agents', label: 'Agents Ecosystem', icon: Bot, count: 4 },
              { id: 'tasks', label: 'Tasks & Planning', icon: ListTodo, count: tasks.length },
              { id: 'tools', label: 'Tool System', icon: Wrench, count: tools.length },
              { id: 'activity', label: 'Live Activity Stream', icon: Activity },
              { id: 'settings', label: 'Settings & Models', icon: Settings }
            ].map(item => {
              const Icon = item.icon
              const active = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                    active
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && (
                    <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 font-mono">
                      {item.count}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        {/* System Health Card */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">System Status</span>
            <span className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1 text-zinc-400 border-t border-zinc-800/50">
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
        {activeTab === 'dashboard' && (
          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Agent OS Overview</h2>
                <p className="text-xs text-zinc-400">Real-time status of multi-agent operations and vault knowledge.</p>
              </div>

              {/* Quick Task Bar */}
              <form onSubmit={handleCreateTask} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Task prompt... e.g. Research transformers"
                  value={newTaskTitle}
                  onChange={e => setNewTaskTitle(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 text-xs text-white rounded-lg px-3 py-2 w-72 focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Execute Task</span>
                </button>
              </form>
            </div>

            {/* Metrics Grid */}
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

            {/* Content Split: Tasks & Agents */}
            <div className="grid grid-cols-3 gap-6">
              {/* Active Tasks Panel */}
              <div className="col-span-2 bg-[#121215] border border-zinc-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <ListTodo className="w-4 h-4 text-cyan-400" />
                    Recent Tasks & Multi-Agent Execution
                  </h3>
                  <button onClick={() => setActiveTab('tasks')} className="text-xs text-cyan-400 hover:underline">View All</button>
                </div>

                <div className="space-y-2">
                  {tasks.length === 0 ? (
                    <p className="text-xs text-zinc-500 py-4 text-center">No tasks executed yet.</p>
                  ) : (
                    tasks.slice(0, 5).map(t => (
                      <div key={t.id} className="bg-zinc-900/50 border border-zinc-800/60 rounded-lg p-3 flex items-center justify-between text-xs">
                        <div className="space-y-1">
                          <p className="font-medium text-white">{t.title}</p>
                          <p className="text-[10px] text-zinc-500 font-mono">ID: {t.id.slice(0, 8)}... • Created {t.created_at.slice(0, 19)}</p>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                          t.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {t.status}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Registered Agents Panel */}
              <div className="bg-[#121215] border border-zinc-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Bot className="w-4 h-4 text-purple-400" />
                    Core AI Agents
                  </h3>
                </div>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {['Antigravity (Google)', 'Claude Code (Anthropic)', 'Codex (OpenAI)', 'Hermes Agent (Nous)'].map(name => (
                    <div key={name} className="bg-zinc-900/40 border border-zinc-800/60 rounded-lg p-2.5 text-xs flex items-center justify-between">
                      <span className="font-semibold text-cyan-400 font-mono">{name}</span>
                      <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded">READY</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'query' && <KnowledgeQuery />}
        {activeTab === 'graph' && <KnowledgeGraph />}
        {activeTab === 'hooks' && <HooksView />}
        {activeTab === 'skills' && <SkillsView />}
        {activeTab === 'agents' && <AgentsEcosystem apiAgents={agents} />}
        {activeTab === 'activity' && <ActivityFeed />}

        {activeTab === 'tasks' && (
          <div className="space-y-6 max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-white">Tasks & Orchestration History</h2>
            <div className="bg-[#121215] border border-zinc-800 rounded-xl p-5">
              <div className="space-y-3">
                {tasks.map(t => (
                  <div key={t.id} className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white text-sm">{t.title}</h4>
                      <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono text-[10px]">{t.status}</span>
                    </div>
                    <p className="text-zinc-400 text-[11px]">Task ID: <span className="font-mono text-zinc-300">{t.id}</span> • Created: {t.created_at}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="space-y-6 max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-white">Registered Tools ({tools.length})</h2>
            <div className="grid grid-cols-3 gap-4">
              {tools.map(t => (
                <div key={t.name} className="bg-[#121215] border border-zinc-800 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-cyan-400 font-semibold text-xs">{t.name}</span>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono uppercase ${
                      t.risk_level === 'low' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>{t.risk_level} risk</span>
                  </div>
                  <p className="text-xs text-zinc-400">{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-white">System Settings & Configuration</h2>
            <div className="bg-[#121215] border border-zinc-800 rounded-xl p-6 space-y-4 text-xs">
              <div>
                <label className="block text-zinc-400 mb-1 font-medium">Vault Path</label>
                <input type="text" readOnly value={status?.vault_path || ''} className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 font-mono text-zinc-300" />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1 font-medium">API Endpoint</label>
                <input type="text" readOnly value="http://127.0.0.1:8000/api/v1" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 font-mono text-zinc-300" />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
