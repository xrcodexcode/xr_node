import React, { useState, useEffect, useRef } from 'react'
import { Network, Search, Filter, Eye, RefreshCw, Zap, Layers, Cpu, Compass, BookOpen, ArrowRight, Shield } from 'lucide-react'

interface LightRAGNode {
  id: string;
  title: string;
  folder: string;
  type: string;
  val: number;
  level: 'high' | 'low'; // High-Level (Theme/MOC) vs Low-Level (Entity/Atomic)
  domain?: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface LightRAGEdge {
  source: string;
  target: string;
  label?: string;
  relationType?: 'DEFINES' | 'EXTENDS' | 'IMPLEMENTS' | 'DEPENDS_ON' | 'PART_OF';
}

export default function LightRAGGraph() {
  const [mode, setMode] = useState<'hybrid' | 'high' | 'low'>('hybrid')
  const [nodes, setNodes] = useState<LightRAGNode[]>([])
  const [edges, setEdges] = useState<LightRAGEdge[]>([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedFolder, setSelectedFolder] = useState<string>('all')
  const [selectedNode, setSelectedNode] = useState<LightRAGNode | null>(null)
  const [hoveredNode, setHoveredNode] = useState<LightRAGNode | null>(null)
  const [ragSnippet, setRagSnippet] = useState<string | null>(null)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const transformRef = useRef({ x: 0, y: 0, k: 1 })
  const isDraggingRef = useRef(false)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const draggedNodeRef = useRef<LightRAGNode | null>(null)

  const nodesRef = useRef<LightRAGNode[]>([])
  const edgesRef = useRef<LightRAGEdge[]>([])
  const alphaRef = useRef<number>(1.0)
  const animationFrameRef = useRef<number | null>(null)

  const fetchGraph = async (refresh: boolean = false) => {
    setLoading(true)
    try {
      const url = refresh ? '/api/v1/knowledge/graph?refresh=true' : '/api/v1/knowledge/graph'
      const res = await fetch(url).then(r => r.json())
      const rawNodes: any[] = res.nodes || []
      const rawEdges: any[] = res.edges || []

      const width = 850
      const height = 550

      const relationTypes: ('DEFINES' | 'EXTENDS' | 'IMPLEMENTS' | 'DEPENDS_ON' | 'PART_OF')[] = [
        'DEFINES', 'EXTENDS', 'IMPLEMENTS', 'DEPENDS_ON', 'PART_OF'
      ]

      const initializedNodes: LightRAGNode[] = rawNodes.map((n, i) => {
        const isHigh = n.folder === '03_MOC' || n.folder === 'NOTES' || n.type === 'moc'
        const angle = i * 0.3
        const radius = isHigh ? 60 + Math.sqrt(i) * 12 : 140 + Math.sqrt(i) * 22
        return {
          id: n.id,
          title: n.title,
          folder: n.folder,
          type: n.type || 'atomic-concept',
          val: n.val || 1,
          level: isHigh ? 'high' : 'low',
          x: width / 2 + Math.cos(angle) * radius,
          y: height / 2 + Math.sin(angle) * radius,
          vx: 0,
          vy: 0,
        }
      })

      const initializedEdges: LightRAGEdge[] = rawEdges.map((e, i) => ({
        source: e.source,
        target: e.target,
        label: e.label,
        relationType: relationTypes[i % relationTypes.length]
      }))

      setNodes(initializedNodes)
      setEdges(initializedEdges)
      nodesRef.current = initializedNodes
      edgesRef.current = initializedEdges
      alphaRef.current = 1.0
    } catch (e) {
      console.error('Failed to load LightRAG graph:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGraph(false)
  }, [])

  // LightRAG Dual-Level Physics & Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let running = true
    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2

    const render = () => {
      if (!running) return

      const currentNodes = nodesRef.current.filter(n => {
        if (mode === 'high') return n.level === 'high'
        if (mode === 'low') return n.level === 'low'
        return true
      })
      const currentEdges = edgesRef.current
      const alpha = alphaRef.current

      // LightRAG Physics step
      if (alpha > 0.002) {
        const nodeMap = new Map<string, LightRAGNode>()
        currentNodes.forEach(n => nodeMap.set(n.id, n))

        // Center gravity force
        currentNodes.forEach(n => {
          n.vx += (centerX - n.x) * 0.005 * alpha
          n.vy += (centerY - n.y) * 0.005 * alpha
        })

        // Coulomb repulsion
        for (let i = 0; i < currentNodes.length; i++) {
          for (let j = i + 1; j < currentNodes.length; j++) {
            const n1 = currentNodes[i]
            const n2 = currentNodes[j]
            const dx = n2.x - n1.x
            const dy = n2.y - n1.y
            const distSq = dx * dx + dy * dy + 1.0
            const dist = Math.sqrt(distSq)
            const repel = (n1.level === 'high' || n2.level === 'high') ? 2200 : 1200
            const force = (repel / distSq) * alpha

            const fx = (dx / dist) * force
            const fy = (dy / dist) * force

            n1.vx -= fx
            n1.vy -= fy
            n2.vx += fx
            n2.vy += fy
          }
        }

        // Spring attraction along Wikilink edges
        currentEdges.forEach(edge => {
          const s = nodeMap.get(edge.source)
          const t = nodeMap.get(edge.target)
          if (s && t) {
            const dx = t.x - s.x
            const dy = t.y - s.y
            const dist = Math.sqrt(dx * dx + dy * dy) + 0.1
            const linkDist = (s.level === 'high' && t.level === 'high') ? 110 : 65
            const force = (dist - linkDist) * 0.025 * alpha

            const fx = (dx / dist) * force
            const fy = (dy / dist) * force

            s.vx += fx
            s.vy += fy
            t.vx -= fx
            t.vy -= fy
          }
        })

        // Velocity damping
        currentNodes.forEach(n => {
          if (n !== draggedNodeRef.current) {
            n.x += n.vx
            n.y += n.vy
          }
          n.vx *= 0.78
          n.vy *= 0.78
        })

        alphaRef.current *= 0.965
      }

      // Draw LightRAG Canvas
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#0a0a0f'
      ctx.fillRect(0, 0, width, height)

      ctx.save()
      const t = transformRef.current
      ctx.translate(t.x, t.y)
      ctx.scale(t.k, t.k)

      const nodeMap = new Map<string, LightRAGNode>()
      currentNodes.forEach(n => nodeMap.set(n.id, n))

      // Draw LightRAG Relation Edges
      currentEdges.forEach(edge => {
        const s = nodeMap.get(edge.source)
        const trg = nodeMap.get(edge.target)
        if (s && trg) {
          const isHighlighted = hoveredNode && (hoveredNode.id === s.id || hoveredNode.id === trg.id)
          ctx.strokeStyle = isHighlighted ? 'rgba(6, 182, 212, 0.9)' : 'rgba(255, 255, 255, 0.06)'
          ctx.lineWidth = isHighlighted ? 1.8 : 0.6

          ctx.beginPath()
          ctx.moveTo(s.x, s.y)
          ctx.lineTo(trg.x, trg.y)
          ctx.stroke()

          // Draw relation predicate badge if highlighted
          if (isHighlighted && edge.relationType) {
            const midX = (s.x + trg.x) / 2
            const midY = (s.y + trg.y) / 2
            ctx.font = '8px monospace'
            ctx.fillStyle = '#06b6d4'
            ctx.fillText(edge.relationType, midX, midY)
          }
        }
      })

      // Draw Dual-Level LightRAG Nodes
      currentNodes.forEach(n => {
        const isHovered = hoveredNode?.id === n.id
        const isSelected = selectedNode?.id === n.id
        const isHigh = n.level === 'high'

        // High-level MOC hub nodes are double-ringed & larger
        const radius = isHigh ? Math.min(16, 8 + Math.sqrt(n.val) * 2) : Math.min(8, 3 + Math.sqrt(n.val) * 1.2)

        let color = isHigh ? '#a855f7' : '#06b6d4'
        if (n.folder === '02_NEW-KNOWLEDGE') color = '#10b981'
        if (n.folder === 'NOTES') color = '#f59e0b'

        // Double ring for High-Level Theme Nodes
        if (isHigh) {
          ctx.beginPath()
          ctx.arc(n.x, n.y, radius + 4, 0, Math.PI * 2)
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)'
          ctx.lineWidth = 1
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, radius + (isHovered || isSelected ? 3 : 0), 0, Math.PI * 2)
        ctx.fillStyle = color
        if (isHovered || isSelected || isHigh) {
          ctx.shadowColor = color
          ctx.shadowBlur = isHigh ? 16 : 10
        }
        ctx.fill()
        ctx.shadowBlur = 0

        if (isSelected) {
          ctx.strokeStyle = '#ffffff'
          ctx.lineWidth = 2.5
          ctx.stroke()
        }

        // Draw Labels ONLY on hover or selection
        if (isHovered || isSelected) {
          ctx.font = '10px monospace'
          ctx.fillStyle = '#ffffff'
          ctx.fillText(n.title, n.x + radius + 6, n.y + 3)
        }
      })

      ctx.restore()

      animationFrameRef.current = requestAnimationFrame(render)
    }

    animationFrameRef.current = requestAnimationFrame(render)

    return () => {
      running = false
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [hoveredNode, selectedNode, mode])

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const t = transformRef.current
    const worldX = (mouseX - t.x) / t.k
    const worldY = (mouseY - t.y) / t.k

    const clickedNode = nodesRef.current.find(n => {
      const dx = n.x - worldX
      const dy = n.y - worldY
      return Math.sqrt(dx * dx + dy * dy) <= 12
    })

    if (clickedNode) {
      draggedNodeRef.current = clickedNode
      setSelectedNode(clickedNode)
      alphaRef.current = 0.3
      fetchNoteSnippet(clickedNode.id)
    } else {
      isDraggingRef.current = true
      dragStartRef.current = { x: e.clientX - t.x, y: e.clientY - t.y }
    }
  }

  const fetchNoteSnippet = async (slug: string) => {
    try {
      const res = await fetch(`/api/v1/knowledge/notes/${slug}`).then(r => r.json())
      setRagSnippet(res.summary || res.content?.slice(0, 300) || 'No retrieval snippet available.')
    } catch (e) {
      setRagSnippet('Failed to load LightRAG retrieval snippet.')
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const t = transformRef.current
    const worldX = (mouseX - t.x) / t.k
    const worldY = (mouseY - t.y) / t.k

    if (draggedNodeRef.current) {
      draggedNodeRef.current.x = worldX
      draggedNodeRef.current.y = worldY
      alphaRef.current = 0.2
      return
    }

    if (isDraggingRef.current) {
      transformRef.current.x = e.clientX - dragStartRef.current.x
      transformRef.current.y = e.clientY - dragStartRef.current.y
      return
    }

    const hovered = nodesRef.current.find(n => {
      const dx = n.x - worldX
      const dy = n.y - worldY
      return Math.sqrt(dx * dx + dy * dy) <= 12
    })

    setHoveredNode(hovered || null)
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
    draggedNodeRef.current = null
  }

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9
    transformRef.current.k = Math.max(0.2, Math.min(4, transformRef.current.k * zoomFactor))
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* LightRAG Header & Dual-Level Mode Switcher */}
      <div className="flex items-center justify-between bg-[#121215] border border-zinc-800 p-5 rounded-2xl">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" />
            LightRAG Dual-Level Knowledge Graph
          </h2>
          <p className="text-xs text-zinc-400">High-Level conceptual themes (MOCs) + Low-Level atomic entity facts with dual RAG retrieval.</p>
        </div>

        {/* Dual-Level Mode Selector */}
        <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 p-1 rounded-xl font-mono text-xs">
          <button
            onClick={() => setMode('hybrid')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              mode === 'hybrid' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40 font-semibold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Hybrid Dual-Level</span>
          </button>

          <button
            onClick={() => setMode('high')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              mode === 'high' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-semibold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>High-Level Themes</span>
          </button>

          <button
            onClick={() => setMode('low')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              mode === 'low' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Low-Level Entities</span>
          </button>

          <button
            onClick={() => fetchGraph(true)}
            disabled={loading}
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-1.5 rounded-lg flex items-center gap-1 ml-2 text-xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Main Graph & Dual LightRAG Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Canvas Visualizer */}
        <div className="col-span-1 lg:col-span-3 bg-[#0a0a0f] border border-zinc-800 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <canvas
            ref={canvasRef}
            width={850}
            height={550}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onWheel={handleWheel}
            className="w-full h-[550px] cursor-grab active:cursor-grabbing"
          />

          <div className="absolute bottom-4 right-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-4 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full border-2 border-purple-400 bg-purple-400/40" /> High-Level (MOCs)</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Low-Level Atomic</span>
          </div>
        </div>

        {/* LightRAG Dual Retrieval Snippet Panel */}
        <div className="col-span-1 lg:col-span-1 bg-[#121215] border border-zinc-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-purple-400" />
              LightRAG Dual Retrieval Snippet
            </h3>

            {selectedNode ? (
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded">
                    {selectedNode.level === 'high' ? 'HIGH-LEVEL THEME' : 'LOW-LEVEL ENTITY'} • {selectedNode.folder}
                  </span>
                  <h4 className="font-bold text-white text-base mt-1.5">{selectedNode.title}</h4>
                </div>

                <div className="bg-black/40 border border-zinc-800 p-3 rounded-lg text-zinc-300 font-mono text-[11px] leading-relaxed max-h-48 overflow-y-auto">
                  {ragSnippet || 'Loading LightRAG snippet...'}
                </div>

                <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-[10px] font-mono text-zinc-400 space-y-1">
                  <p><span className="text-zinc-500">Degree Connections:</span> {selectedNode.val}</p>
                  <p><span className="text-zinc-500">Note Type:</span> {selectedNode.type}</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 text-zinc-500 text-xs">
                Click any node in the LightRAG canvas to extract its dual-level retrieval snippet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
