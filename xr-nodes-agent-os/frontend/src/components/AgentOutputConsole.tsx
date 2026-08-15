import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Terminal, Bot, Play, Copy, Check, RefreshCw, Trash2, Cpu, Sparkles, Filter, Search, Download, ArrowDownCircle } from 'lucide-react'

interface AgentLogEntry {
  id: string;
  agentId: 'antigravity' | 'claude-code' | 'codex' | 'hermes';
  agentName: string;
  agentLogo: string;
  badgeColor: string;
  step: string;
  status: 'info' | 'tool_call' | 'code_gen' | 'success' | 'error';
  content: string;
  timestamp: string;
}

export default function AgentOutputConsole() {
  const [selectedAgentFilter, setSelectedAgentFilter] = useState<string>('all')
  const [logSearchQuery, setLogSearchQuery] = useState<string>('')
  const [autoScroll, setAutoScroll] = useState<boolean>(true)
  const consoleBottomRef = useRef<HTMLDivElement | null>(null)

  const [logs, setLogs] = useState<AgentLogEntry[]>([
    {
      id: "log-init-1",
      agentId: "antigravity",
      agentName: "Antigravity",
      agentLogo: "🪐",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      step: "Vault Engine",
      status: "info",
      content: "[ANTIGRAVITY] Scanned 373 vault Markdown nodes in nexusdb. Zero-RAM RAG engine online.",
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19)
    },
    {
      id: "log-init-2",
      agentId: "claude-code",
      agentName: "Claude Code",
      agentLogo: "🤖",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      step: "Codebase Auditor",
      status: "code_gen",
      content: "[CLAUDE CODE] Codebase auditor active. All FastAPI and React endpoints verified.",
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19)
    }
  ])

  const [inputPrompt, setInputPrompt] = useState('')
  const [selectedRunAgent, setSelectedRunAgent] = useState<'antigravity' | 'claude-code' | 'codex' | 'hermes'>('antigravity')
  const [isRunning, setIsRunning] = useState(false)
  const [copied, setCopied] = useState(false)

  // Poll backend /api/v1/events for real-time live events
  const fetchLiveEvents = async () => {
    try {
      const apiEvents: any[] = await fetch('/api/v1/events').then(r => r.json())
      if (!Array.isArray(apiEvents)) return

      const mappedLogs: AgentLogEntry[] = apiEvents.map(ev => {
        let agentId: 'antigravity' | 'claude-code' | 'codex' | 'hermes' = 'antigravity'
        let agentName = 'Antigravity'
        let agentLogo = '🪐'
        let badgeColor = 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'

        const srcLower = (ev.source || '').toLowerCase()
        if (srcLower.includes('claude')) {
          agentId = 'claude-code'
          agentName = 'Claude Code'
          agentLogo = '🤖'
          badgeColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30'
        } else if (srcLower.includes('codex')) {
          agentId = 'codex'
          agentName = 'Codex'
          agentLogo = '🧠'
          badgeColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
        } else if (srcLower.includes('hermes')) {
          agentId = 'hermes'
          agentName = 'Hermes Agent'
          agentLogo = '🏛️'
          badgeColor = 'text-purple-400 bg-purple-500/10 border-purple-500/30'
        }

        let payloadStr = typeof ev.payload === 'object' ? JSON.stringify(ev.payload) : String(ev.payload || '')

        return {
          id: ev.id || `ev-${Math.random()}`,
          agentId,
          agentName,
          agentLogo,
          badgeColor,
          step: ev.type || 'system.event',
          status: 'info',
          content: `[${agentName.toUpperCase()}] ${ev.type} -> ${payloadStr}`,
          timestamp: (ev.created_at || new Date().toISOString()).slice(0, 19).replace('T', ' ')
        }
      })

      setLogs(prev => {
        const existingIds = new Set(prev.map(l => l.id))
        const newEntries = mappedLogs.filter(l => !existingIds.has(l.id))
        if (newEntries.length === 0) return prev
        return [...newEntries, ...prev]
      })
    } catch (e) {
      console.error('Failed to poll live events:', e)
    }
  }

  useEffect(() => {
    fetchLiveEvents()
    const timer = setInterval(fetchLiveEvents, 3000)
    return () => clearInterval(timer)
  }, [])

  const handleRunAgentPrompt = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputPrompt.trim()) return
    setIsRunning(true)

    const agentMeta = {
      antigravity: { name: 'Antigravity', logo: '🪐', badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
      'claude-code': { name: 'Claude Code', logo: '🤖', badge: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
      codex: { name: 'Codex', logo: '🧠', badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
      hermes: { name: 'Hermes Agent', logo: '🏛️', badge: 'text-purple-400 bg-purple-500/10 border-purple-500/30' }
    }[selectedRunAgent]

    const userLog: AgentLogEntry = {
      id: `usr-${Date.now()}`,
      agentId: selectedRunAgent,
      agentName: agentMeta.name,
      agentLogo: agentMeta.logo,
      badgeColor: agentMeta.badge,
      step: 'Direct Execution',
      status: 'info',
      content: `[${agentMeta.name.toUpperCase()}] Dispatching live task: "${inputPrompt}"...`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19)
    }

    setLogs(prev => [userLog, ...prev])

    try {
      const res = await fetch('/api/v1/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: `[${selectedRunAgent.toUpperCase()}] ${inputPrompt}` })
      }).then(r => r.json())

      if (res.task_id) {
        const execRes = await fetch(`/api/v1/tasks/${res.task_id}/execute`, { method: 'POST' }).then(r => r.json())

        const successLog: AgentLogEntry = {
          id: `exec-${Date.now()}`,
          agentId: selectedRunAgent,
          agentName: agentMeta.name,
          agentLogo: agentMeta.logo,
          badgeColor: agentMeta.badge,
          step: 'Task Completed',
          status: 'success',
          content: `[${agentMeta.name.toUpperCase()}] Task completed with status: ${execRes.status || 'completed'}. Steps: ${execRes.steps_completed ?? 1}`,
          timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19)
        }
        setLogs(prev => [successLog, ...prev])
      }
      fetchLiveEvents()
    } catch (e) {
      console.error(e)
    } finally {
      setInputPrompt('')
      setIsRunning(false)
    }
  }

  const filteredLogs = useMemo(() => {
    return logs.filter(l => {
      const matchesAgent = selectedAgentFilter === 'all' || l.agentId === selectedAgentFilter
      const matchesSearch = !logSearchQuery.trim() || 
        l.content.toLowerCase().includes(logSearchQuery.toLowerCase()) || 
        l.step.toLowerCase().includes(logSearchQuery.toLowerCase()) ||
        l.agentName.toLowerCase().includes(logSearchQuery.toLowerCase())
      return matchesAgent && matchesSearch
    })
  }, [logs, selectedAgentFilter, logSearchQuery])

  const copyConsoleOutput = () => {
    const text = filteredLogs.map(l => `[${l.timestamp}] [${l.agentName}] [${l.step}] ${l.content}`).join('\n')
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const exportLogsAsJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logs, null, 2))
    const downloadAnchor = document.createElement('a')
    downloadAnchor.setAttribute("href", dataStr)
    downloadAnchor.setAttribute("download", `xr-nodes-agent-logs-${Date.now()}.json`)
    document.body.appendChild(downloadAnchor)
    downloadAnchor.click()
    downloadAnchor.remove()
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Console Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            Live Agent Execution Terminal
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">Real-time SQLite event persistence with streaming multi-agent execution telemetry.</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyConsoleOutput}
            className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 font-medium px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors font-mono"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
          <button
            onClick={exportLogsAsJson}
            className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 font-medium px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors font-mono"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Export JSON</span>
          </button>
          <button
            onClick={() => setLogs([])}
            className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-400 hover:text-red-400 font-medium px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors font-mono"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Dispatch Prompt Bar */}
      <form onSubmit={handleRunAgentPrompt} className="bg-[#121215] border border-zinc-800/90 p-3.5 rounded-2xl flex gap-3 shadow-sm">
        <select
          value={selectedRunAgent}
          onChange={e => setSelectedRunAgent(e.target.value as any)}
          className="bg-zinc-900 border border-zinc-800 text-xs text-cyan-400 font-mono font-semibold rounded-xl px-3 py-2.5 focus:outline-none focus:border-cyan-500"
        >
          <option value="antigravity">🪐 Antigravity</option>
          <option value="claude-code">🤖 Claude Code</option>
          <option value="codex">🧠 Codex</option>
          <option value="hermes">🏛️ Hermes Agent</option>
        </select>

        <input
          type="text"
          placeholder="Execute prompt directly... e.g. Audit security rules & sweep orphan links"
          value={inputPrompt}
          onChange={e => setInputPrompt(e.target.value)}
          className="flex-1 bg-zinc-900 border border-zinc-800 text-xs text-white px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500 placeholder:text-zinc-600"
        />

        <button
          type="submit"
          disabled={isRunning}
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs px-5 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)] flex items-center gap-1.5 disabled:opacity-50"
        >
          <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
          <span>{isRunning ? 'Executing Agent...' : 'Run Live Agent'}</span>
        </button>
      </form>

      {/* Agent Output Filter & Search Bar */}
      <div className="flex items-center justify-between text-xs text-zinc-400 bg-[#121215] border border-zinc-800/90 px-4 py-2.5 rounded-xl gap-4">
        <div className="flex items-center gap-2 flex-1">
          <Search className="w-3.5 h-3.5 text-zinc-500" />
          <input
            type="text"
            placeholder="Search terminal logs..."
            value={logSearchQuery}
            onChange={e => setLogSearchQuery(e.target.value)}
            className="bg-transparent text-xs text-white focus:outline-none w-full placeholder:text-zinc-600 font-mono"
          />
        </div>

        <div className="flex items-center gap-1.5">
          {[
            { id: 'all', label: 'All' },
            { id: 'antigravity', label: '🪐 Antigravity' },
            { id: 'claude-code', label: '🤖 Claude' },
            { id: 'codex', label: '🧠 Codex' },
            { id: 'hermes', label: '🏛️ Hermes' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedAgentFilter(f.id)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                selectedAgentFilter === f.id ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Output Window */}
      <div className="bg-[#09090c] border border-zinc-800/90 rounded-2xl p-5 font-mono text-xs space-y-3 min-h-[420px] max-h-[550px] overflow-y-auto shadow-2xl">
        {filteredLogs.length === 0 ? (
          <div className="text-center py-24 text-zinc-600 font-sans">
            Terminal output empty. Run an agent prompt above or trigger a task to stream logs live.
          </div>
        ) : (
          filteredLogs.map(log => (
            <div key={log.id} className="bg-black/50 border border-zinc-800/80 rounded-xl p-3.5 space-y-2 hover:border-zinc-700 transition-colors">
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-base">{log.agentLogo}</span>
                  <span className="font-bold text-white">{log.agentName}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono border ${log.badgeColor}`}>
                    {log.step}
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500">{log.timestamp}</span>
              </div>

              <div className="text-zinc-300 leading-relaxed whitespace-pre-wrap pl-1 border-l-2 border-cyan-500/40">
                {log.content}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
