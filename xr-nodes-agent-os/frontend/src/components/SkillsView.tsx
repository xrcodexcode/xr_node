import React, { useState, useEffect } from 'react'
import { Sparkles, Search, CheckCircle, ExternalLink } from 'lucide-react'

interface SkillItem {
  name: string;
  folder: string;
  description: string;
  path?: string;
  status: string;
}

export default function SkillsView() {
  const [skills, setSkills] = useState<SkillItem[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/v1/skills')
      .then(r => r.json())
      .then(setSkills)
      .catch(console.error)
  }, [])

  const filtered = skills.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            Installed Agent Skills ({skills.length})
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">Reusable modular skills extending agent capabilities across NexusDB.</p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white pl-9 pr-3 py-2 rounded-xl focus:outline-none focus:border-cyan-500 placeholder:text-zinc-600 font-mono"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(s => (
          <div key={s.name} className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-5 space-y-3 hover:border-zinc-700 transition-all hover:scale-[1.01] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-cyan-400 font-semibold text-sm">{s.name}</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  ACTIVE
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">{s.description}</p>
            </div>
            <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
              <span className="bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-400">{s.folder}</span>
              <span className="text-zinc-500 truncate max-w-[150px]">{s.path || '.antigravity/skills'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
