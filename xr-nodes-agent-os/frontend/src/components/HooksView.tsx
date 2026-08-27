import React, { useState, useEffect } from 'react'
import { Anchor, RefreshCw, Zap, FileCode } from 'lucide-react'

interface HookItem {
  id: string;
  name: string;
  event_trigger: string;
  description: string;
  script: string;
  status: string;
  execution_mode: string;
  path: string;
}

export default function HooksView() {
  const [hooks, setHooks] = useState<HookItem[]>([])
  const [loading, setLoading] = useState(false)

  const fetchHooks = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/v1/hooks').then(r => r.json())
      setHooks(Array.isArray(res) ? res : [])
    } catch (e) {
      console.error('Failed to fetch hooks:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHooks()
  }, [])

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Anchor className="w-5 h-5 text-cyan-400" />
            Vault Automation Hooks ({hooks.length})
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">Event-driven lifecycle hooks bound to NexusDB transitions and Python scripts.</p>
        </div>
        <button
          onClick={fetchHooks}
          className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 font-medium px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors font-mono self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Hooks Grid */}
      {hooks.length === 0 && !loading ? (
        <div className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-12 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 bg-zinc-900/80 rounded-full flex items-center justify-center border border-zinc-800">
            <Anchor className="w-8 h-8 text-zinc-600" />
          </div>
          <div>
            <h3 className="text-zinc-300 font-bold text-lg">No Hooks Found</h3>
            <p className="text-zinc-500 text-sm mt-1 max-w-sm mx-auto">No automation hooks are currently configured in NexusDB. Create scripts and bind them to events to see them here.</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hooks.map(h => (
            <div key={h.id} className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-zinc-700 transition-all hover:scale-[1.01]">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    {h.name}
                  </span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono uppercase">
                    {h.status}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">{h.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
                  <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800/80">
                    <span className="text-zinc-500 text-[9px] block">EVENT TRIGGER</span>
                    <span className="text-cyan-400 truncate block">{h.event_trigger}</span>
                  </div>
                  <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800/80">
                    <span className="text-zinc-500 text-[9px] block">BOUND SCRIPT</span>
                    <span className="text-purple-400 flex items-center gap-1 truncate">
                      <FileCode className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{h.script}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                <div className="text-zinc-500 font-mono text-[10px]">
                  <span>Mode: <span className="text-zinc-400">{h.execution_mode || 'event_driven'}</span></span>
                </div>
                <div className="text-zinc-500 font-mono text-[10px] truncate max-w-[200px]">
                  <span className="truncate">{h.path}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
