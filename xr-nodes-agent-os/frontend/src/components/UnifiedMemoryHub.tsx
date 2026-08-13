import React, { useState } from 'react'
import { Network, Layers, Sun, Brain } from 'lucide-react'

import KnowledgeGraph from './KnowledgeGraph'
import LightRAGGraph from './LightRAGGraph'
import Cinematic3DMemoryGalaxy from './Cinematic3DMemoryGalaxy'

export default function UnifiedMemoryHub() {
  const [subTab, setSubTab] = useState<'obsidian' | 'lightrag' | 'galaxy'>('obsidian')

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Sub-Tab Selector for Unified Memory Hub */}
      <div className="flex items-center justify-between bg-[#121215] border border-zinc-800 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">NexusDB Unified Memory Hub</h2>
            <p className="text-xs text-zinc-400">Integrated 2D Canvas, LightRAG Dual-Level, and 3D Solar System memory visualizers.</p>
          </div>
        </div>

        {/* View Switcher Buttons */}
        <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 p-1.5 rounded-xl font-mono text-xs">
          <button
            onClick={() => setSubTab('obsidian')}
            className={`px-3.5 py-2 rounded-lg flex items-center gap-2 transition-all ${
              subTab === 'obsidian'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Network className="w-4 h-4" />
            <span>Obsidian Graph</span>
          </button>

          <button
            onClick={() => setSubTab('lightrag')}
            className={`px-3.5 py-2 rounded-lg flex items-center gap-2 transition-all ${
              subTab === 'lightrag'
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40 font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>LightRAG Graph</span>
          </button>

          <button
            onClick={() => setSubTab('galaxy')}
            className={`px-3.5 py-2 rounded-lg flex items-center gap-2 transition-all ${
              subTab === 'galaxy'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>3D Memory Galaxy</span>
          </button>
        </div>
      </div>

      {/* Render Selected Visualizer Sub-Tab */}
      <div className="pt-2">
        {subTab === 'obsidian' && <KnowledgeGraph />}
        {subTab === 'lightrag' && <LightRAGGraph />}
        {subTab === 'galaxy' && <Cinematic3DMemoryGalaxy />}
      </div>
    </div>
  )
}
