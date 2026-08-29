import React, { useState, useEffect, useMemo } from 'react'
import { Activity, RefreshCw, Search, Filter, ChevronDown, ChevronRight, Layers, Radio, ShieldCheck } from 'lucide-react'

interface EventItem {
  id: string;
  type: string;
  source: string;
  payload: any;
  created_at: string;
}

export default function ActivityFeed() {
  const [events, setEvents] = useState<EventItem[]>([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedSource, setSelectedSource] = useState('all')
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  const fetchEvents = async (silent: boolean = false) => {
    if (!silent) setLoading(true)
    try {
      const res = await fetch('/api/v1/events').then(r => r.json())
      setEvents(Array.isArray(res) ? res : [])
    } catch (e) {
      console.error('Failed to fetch events:', e)
    } finally {
      if (!silent) setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents(false)
    const interval = setInterval(() => {
      if (typeof document !== 'undefined' && !document.hidden) {
        fetchEvents(true)
      }
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const filteredEvents = useMemo(() => {
    return events.filter(ev => {
      const matchesSource = selectedSource === 'all' || (ev.source || '').toLowerCase().includes(selectedSource.toLowerCase())
      const payloadStr = typeof ev.payload === 'object' ? JSON.stringify(ev.payload) : String(ev.payload || '')
      const matchesSearch = !search.trim() ||
        ev.type.toLowerCase().includes(search.toLowerCase()) ||
        (ev.source || '').toLowerCase().includes(search.toLowerCase()) ||
        payloadStr.toLowerCase().includes(search.toLowerCase())
      return matchesSource && matchesSearch
    })
  }, [events, selectedSource, search])

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            Live Audit Stream & Telemetry Activity
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">Real-time immutable event log of agent operations, tool calls, and state transitions.</p>
        </div>

        <button
          onClick={() => fetchEvents(false)}
          className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 font-medium px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors font-mono"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex items-center justify-between bg-[#121215] border border-zinc-800/90 p-3.5 rounded-2xl gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search event logs, types, payloads..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white pl-9 pr-3 py-2 rounded-xl focus:outline-none focus:border-cyan-500 font-mono placeholder:text-zinc-600"
          />
        </div>

        <div className="flex items-center gap-1.5">
          {['all', 'system', 'agent', 'orchestrator', 'tool'].map(src => (
            <button
              key={src}
              onClick={() => setSelectedSource(src)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono capitalize transition-all ${
                selectedSource === src
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold'
                  : 'text-zinc-400 hover:text-white bg-zinc-900/50 border border-transparent'
              }`}
            >
              {src}
            </button>
          ))}
        </div>
      </div>

      {/* Event Stream List */}
      <div className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-5 space-y-3 font-mono text-xs shadow-xl">
        <div className="flex items-center justify-between text-zinc-400 text-[11px] pb-2 border-b border-zinc-800/80 px-1 font-sans">
          <span>Displaying <strong>{filteredEvents.length}</strong> events</span>
          <span className="text-zinc-500 font-mono text-[10px]">Polling interval: 3.5s</span>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 text-zinc-500 font-sans">
            No audit events found matching filters.
          </div>
        ) : (
          filteredEvents.map(ev => {
            const isExpanded = expandedIds.has(ev.id)
            return (
              <div
                key={ev.id}
                className="bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 rounded-xl p-3.5 space-y-2 transition-colors cursor-pointer"
                onClick={() => toggleExpand(ev.id)}
              >
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    {isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-cyan-400" /> : <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />}
                    <span className="text-cyan-400 font-semibold">{ev.type}</span>
                    <span className="bg-zinc-800 text-zinc-400 border border-zinc-700/50 px-2 py-0.5 rounded text-[10px]">
                      {ev.source || 'system'}
                    </span>
                  </div>
                  <span className="text-zinc-500 text-[10px]">{ev.created_at || 'just now'}</span>
                </div>

                {isExpanded ? (
                  <div className="pt-2 border-t border-zinc-800 text-[11px]">
                    <pre className="bg-black/60 p-3 rounded-lg border border-zinc-800/80 text-zinc-300 overflow-x-auto whitespace-pre-wrap">
                      {typeof ev.payload === 'object' ? JSON.stringify(ev.payload, null, 2) : String(ev.payload)}
                    </pre>
                  </div>
                ) : (
                  <div className="text-[11px] text-zinc-400 truncate pl-5">
                    {typeof ev.payload === 'object' ? JSON.stringify(ev.payload) : String(ev.payload || 'no payload')}
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
