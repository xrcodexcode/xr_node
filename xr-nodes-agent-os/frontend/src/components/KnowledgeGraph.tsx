import React, { useState, useEffect } from 'react'
import { Network, Search, Filter, Eye, RefreshCw } from 'lucide-react'

interface NodeItem {
  id: string;
  title: string;
  folder: string;
  type: string;
  val: number;
}

interface EdgeItem {
  source: string;
  target: string;
  label?: string;
}

export default function KnowledgeGraph() {
  const [graphData, setGraphData] = useState<{ nodes: NodeItem[]; edges: EdgeItem[] }>({ nodes: [], edges: [] })
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedFolder, setSelectedFolder] = useState<string>('all')
  const [selectedNode, setSelectedNode] = useState<NodeItem | null>(null)

  const fetchGraph = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/v1/knowledge/graph').then(r => r.json())
      setGraphData(res)
    } catch (e) {
      console.error('Failed to load graph:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGraph()
  }, [])

  const filteredNodes = graphData.nodes.filter(n => {
    const matchesSearch = !search || n.title.toLowerCase().includes(search.toLowerCase())
    const matchesFolder = selectedFolder === 'all' || n.folder === selectedFolder
    return matchesSearch && matchesFolder
  })

  const folders = Array.from(new Set(graphData.nodes.map(n => n.folder)))

  const getFolderColor = (folder: string) => {
    switch (folder) {
      case 'NODES': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40'
      case '03_MOC': return 'bg-purple-500/20 text-purple-400 border-purple-500/40'
      case '02_NEW-KNOWLEDGE': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
      case 'NOTES': return 'bg-amber-500/20 text-amber-400 border-amber-500/40'
      default: return 'bg-zinc-800 text-zinc-400 border-zinc-700'
    }
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Network className="w-5 h-5 text-cyan-400" />
            Live Vault Knowledge Graph
          </h2>
          <p className="text-xs text-zinc-400">Interactive node-edge graph of {graphData.nodes.length} nodes and {graphData.edges.length} wikilinks.</p>
        </div>
        <button
          onClick={fetchGraph}
          className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 font-medium px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh Graph
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex items-center gap-3 bg-[#121215] border border-zinc-800 p-3 rounded-xl">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search concepts, MOCs, nodes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white pl-9 pr-3 py-2 rounded-lg focus:outline-none focus:border-cyan-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-zinc-500" />
          <select
            value={selectedFolder}
            onChange={e => setSelectedFolder(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 rounded-lg px-3 py-2 focus:outline-none"
          >
            <option value="all">All Folders ({graphData.nodes.length})</option>
            {folders.map(f => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Graph Visualizer & Inspector Split */}
      <div className="grid grid-cols-4 gap-6">
        {/* Main Graph Grid Canvas */}
        <div className="col-span-3 bg-[#121215] border border-zinc-800 rounded-xl p-4 min-h-[500px] flex flex-col justify-between relative overflow-hidden">
          <div className="flex flex-wrap gap-2 max-h-[460px] overflow-y-auto p-2">
            {filteredNodes.slice(0, 100).map(n => {
              const colorClass = getFolderColor(n.folder)
              const isSelected = selectedNode?.id === n.id
              return (
                <button
                  key={n.id}
                  onClick={() => setSelectedNode(n)}
                  className={`px-3 py-2 rounded-lg text-xs font-mono border transition-all text-left flex items-center justify-between gap-2 ${colorClass} ${
                    isSelected ? 'ring-2 ring-cyan-400 font-bold scale-105' : 'hover:opacity-90'
                  }`}
                >
                  <span className="truncate max-w-[180px]">{n.title}</span>
                  <span className="text-[9px] opacity-70 bg-black/40 px-1.5 py-0.5 rounded font-sans">{n.val}</span>
                </button>
              )
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
            <span>Showing {Math.min(filteredNodes.length, 100)} of {filteredNodes.length} nodes</span>
            <div className="flex gap-3">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" /> NODES</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400" /> 03_MOC</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" /> 02_NEW-KNOWLEDGE</span>
            </div>
          </div>
        </div>

        {/* Node Detail Inspector */}
        <div className="bg-[#121215] border border-zinc-800 rounded-xl p-5 space-y-4">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-cyan-400" />
            Node Inspector
          </h3>

          {selectedNode ? (
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-[10px] text-zinc-500 font-mono">CANONICAL TITLE</label>
                <h4 className="font-bold text-white text-sm mt-0.5">{selectedNode.title}</h4>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-zinc-900 p-2 rounded border border-zinc-800">
                  <span className="text-zinc-500 text-[9px] block">FOLDER</span>
                  <span className="font-mono text-cyan-400">{selectedNode.folder}</span>
                </div>
                <div className="bg-zinc-900 p-2 rounded border border-zinc-800">
                  <span className="text-zinc-500 text-[9px] block">TYPE</span>
                  <span className="font-mono text-purple-400">{selectedNode.type}</span>
                </div>
              </div>
              <div className="bg-zinc-900 p-2.5 rounded border border-zinc-800">
                <span className="text-zinc-500 text-[9px] block">DEGREE / CONNECTIVITY</span>
                <span className="font-mono text-emerald-400 text-sm">{selectedNode.val} Wikilinks</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-zinc-500 text-xs">
              Click any node in the graph matrix to inspect properties.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
