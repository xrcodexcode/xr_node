import React, { useState, useEffect } from 'react'
import { Activity, RefreshCw } from 'lucide-react'

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

  const fetchEvents = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/v1/events').then(r => r.json())
      setEvents(Array.isArray(res) ? res : [])
    } catch (e) {
      console.error('Failed to fetch events:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents()
    const timer = setInterval(fetchEvents, 3000)
    return () => clearInterval(timer)
  }, [])

  const renderPayload = (payload: any) => {
    if (!payload) return 'no payload'
    if (typeof payload === 'string') return payload
    try {
      return JSON.stringify(payload)
    } catch (e) {
      return String(payload)
    }
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            Live Audit Stream & System Activity
          </h2>
          <p className="text-xs text-zinc-400">Real-time audit log of agent operations, tool calls, and state transitions.</p>
        </div>

        <button
          onClick={fetchEvents}
          className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 font-medium px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh Activity
        </button>
      </div>

      <div className="bg-[#121215] border border-zinc-800 rounded-xl p-5 space-y-3 font-mono text-xs">
        {events.length === 0 ? (
          <div className="text-center py-12 text-zinc-500 font-sans">
            No audit events recorded in database yet.
          </div>
        ) : (
          events.map(ev => (
            <div key={ev.id} className="bg-zinc-900/60 border border-zinc-800/80 rounded-lg p-3 space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-cyan-400 font-semibold">{ev.type}</span>
                <span className="text-zinc-500 text-[10px]">{ev.created_at || 'just now'}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                <span className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">source: {ev.source || 'system'}</span>
                <span className="truncate text-zinc-500">{renderPayload(ev.payload)}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
