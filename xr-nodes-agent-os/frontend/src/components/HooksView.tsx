import React, { useState, useEffect } from 'react'
import { Anchor, Play, RefreshCw, CheckCircle, Clock, Zap, FileCode } from 'lucide-react'

interface HookItem {
  id: string;
  name: string;
  event_trigger: string;
  description: string;
  script: string;
  status: string;
  execution_mode: string;
  last_run: string;
  trigger_count: number;
}

export default function HooksView() {
  const [hooks, setHooks] = useState<HookItem[]>([])
  const [loading, setLoading] = useState(false)
  const [triggeringId, setTriggeringId] = useState<string | null>(null)
  const [lastResult, setLastResult] = useState<any>(null)

  const fetchHooks = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/v1/hooks').then(r => r.json())
      setHooks(res)
    } catch (e) {
      console.error('Failed to fetch hooks:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHooks()
  }, [])

  const handleTriggerHook = async (hookId: string) => {
    setTriggeringId(hookId)
    setLastResult(null)
    try {
      const res = await fetch(`/api/v1/hooks/${hookId}/trigger`, { method: 'POST' }).then(r => r.json())
      setLastResult(res)
      fetchHooks()
    } catch (e) {
      console.error(e)
    } finally {
      setTriggeringId(null)
    }
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Anchor className="w-5 h-5 text-cyan-400" />
            Vault Automation Hooks & Event Triggers ({hooks.length})
          </h2>
          <p className="text-xs text-zinc-400">Event-driven automation hooks bound to NexusDB lifecycle events and Python automations.</p>
        </div>
        <button
          onClick={fetchHooks}
          className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 font-medium px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh Hooks
        </button>
      </div>

      {/* Hooks Grid */}
      <div className="grid grid-cols-2 gap-4">
        {hooks.map(h => (
          <div key={h.id} className="bg-[#121215] border border-zinc-800 rounded-xl p-5 space-y-4 flex flex-col justify-between">
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

              <p className="text-xs text-zinc-400 leading-relaxed">{h.description}</p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
                <div className="bg-zinc-900 p-2 rounded border border-zinc-800/80">
                  <span className="text-zinc-500 text-[9px] block">EVENT TRIGGER</span>
                  <span className="text-cyan-400">{h.event_trigger}</span>
                </div>
                <div className="bg-zinc-900 p-2 rounded border border-zinc-800/80">
                  <span className="text-zinc-500 text-[9px] block">BOUND SCRIPT</span>
                  <span className="text-purple-400 flex items-center gap-1">
                    <FileCode className="w-3 h-3" />
                    {h.script}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
              <div className="text-zinc-500 font-mono text-[10px] flex items-center gap-2">
                <span>Last Run: {h.last_run}</span>
                <span>• Triggers: {h.trigger_count}</span>
              </div>

              <button
                onClick={() => handleTriggerHook(h.id)}
                disabled={triggeringId === h.id}
                className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <Play className={`w-3.5 h-3.5 ${triggeringId === h.id ? 'animate-spin' : ''}`} />
                <span>{triggeringId === h.id ? 'Triggering...' : 'Trigger Now'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Trigger Result Log Panel */}
      {lastResult && (
        <div className="bg-[#121215] border border-cyan-500/30 rounded-xl p-5 space-y-2 font-mono text-xs">
          <h4 className="text-cyan-400 font-bold text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Hook Trigger Result — {lastResult.hook_id}
          </h4>
          <pre className="bg-black/50 p-3 rounded border border-zinc-800 text-[11px] text-zinc-300 overflow-x-auto whitespace-pre-wrap">
            {JSON.stringify(lastResult, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
