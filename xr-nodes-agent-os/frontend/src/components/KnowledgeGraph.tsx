import React, { useState, useEffect, useRef } from 'react'
import { Network, Search, Filter, Eye, RefreshCw, Maximize2, Play, Pause } from 'lucide-react'

interface NodeItem {
  id: string;
  title: string;
  folder: string;
  type: string;
  val: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface EdgeItem {
  source: string;
  target: string;
  label?: string;
}

export default function KnowledgeGraph() {
  const [nodes, setNodes] = useState<NodeItem[]>([])
  const [edges, setEdges] = useState<EdgeItem[]>([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedFolder, setSelectedFolder] = useState<string>('all')
  const [selectedNode, setSelectedNode] = useState<NodeItem | null>(null)
  const [hoveredNode, setHoveredNode] = useState<NodeItem | null>(null)

  // Obsidian Graph Physics Settings (Exact parameters matching Obsidian Graph view)
  const [repelForce, setRepelForce] = useState(1200)
  const [linkDistance, setLinkDistance] = useState(70)
  const [centerForce, setCenterForce] = useState(0.3)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const transformRef = useRef({ x: 0, y: 0, k: 1 })
  const isDraggingRef = useRef(false)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const draggedNodeRef = useRef<NodeItem | null>(null)
  
  const nodesRef = useRef<NodeItem[]>([])
  const edgesRef = useRef<EdgeItem[]>([])
  const alphaRef = useRef<number>(1.0) // Cooling factor (Obsidian graph cooling physics)
  const canvasContainerRef = useRef<HTMLDivElement | null>(null)
  
  const searchRef = useRef(search)
  const folderRef = useRef(selectedFolder)

  useEffect(() => {
    searchRef.current = search
    folderRef.current = selectedFolder
  }, [search, selectedFolder])

  const fetchGraph = async (refresh: boolean = false) => {
    setLoading(true)
    try {
      const url = refresh ? '/api/v1/knowledge/graph?refresh=true' : '/api/v1/knowledge/graph'
      const res = await fetch(url).then(r => r.json())
      const rawNodes: any[] = res.nodes || []
      const rawEdges: EdgeItem[] = res.edges || []

      const container = canvasContainerRef.current
      const width = container ? container.getBoundingClientRect().width : 850
      const height = container ? container.getBoundingClientRect().height : 550

      // Initial layout around center with spiral placement
      const initializedNodes: NodeItem[] = rawNodes.map((n, i) => {
        const angle = i * 0.4
        const radius = 20 + Math.sqrt(i) * 18
        return {
          id: n.id,
          title: n.title,
          folder: n.folder,
          type: n.type,
          val: n.val || 1,
          x: width / 2 + Math.cos(angle) * radius,
          y: height / 2 + Math.sin(angle) * radius,
          vx: 0,
          vy: 0,
        }
      })

      setNodes(initializedNodes)
      setEdges(rawEdges)
      nodesRef.current = initializedNodes
      edgesRef.current = rawEdges
      alphaRef.current = 1.0 // Reset cooling simulation
    } catch (e) {
      console.error('Failed to load graph:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGraph(false)
  }, [])

  // Canvas Responsive Setup
  useEffect(() => {
    const container = canvasContainerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resizeCanvas()
    const observer = new ResizeObserver(resizeCanvas)
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  // Obsidian Cooling Physics & Renderer
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let running = true

    const render = () => {
      if (!running) return

      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const centerX = width / 2
      const centerY = height / 2

      const currentNodes = nodesRef.current
      const currentEdges = edgesRef.current
      const alpha = alphaRef.current

      // Run force physics step if alpha > 0.002 (simulates Obsidian cooling until nodes rest naturally)
      if (alpha > 0.002) {
        const nodeMap = new Map<string, NodeItem>()
        currentNodes.forEach(n => nodeMap.set(n.id, n))

        // 1. Center Gravity Force
        currentNodes.forEach(n => {
          n.vx += (centerX - n.x) * centerForce * 0.01 * alpha
          n.vy += (centerY - n.y) * centerForce * 0.01 * alpha
        })

        // 2. Node Repulsion Force (Coulomb)
        for (let i = 0; i < currentNodes.length; i++) {
          for (let j = i + 1; j < currentNodes.length; j++) {
            const n1 = currentNodes[i]
            const n2 = currentNodes[j]
            const dx = n2.x - n1.x
            const dy = n2.y - n1.y
            const distSq = dx * dx + dy * dy + 1.0
            const dist = Math.sqrt(distSq)
            const force = (repelForce / distSq) * alpha

            const fx = (dx / dist) * force
            const fy = (dy / dist) * force

            n1.vx -= fx
            n1.vy -= fy
            n2.vx += fx
            n2.vy += fy
          }
        }

        // 3. Link Spring Attraction Force (Hooke)
        currentEdges.forEach(edge => {
          const s = nodeMap.get(edge.source)
          const t = nodeMap.get(edge.target)
          if (s && t) {
            const dx = t.x - s.x
            const dy = t.y - s.y
            const dist = Math.sqrt(dx * dx + dy * dy) + 0.1
            const force = (dist - linkDistance) * 0.03 * alpha

            const fx = (dx / dist) * force
            const fy = (dy / dist) * force

            s.vx += fx
            s.vy += fy
            t.vx -= fx
            t.vy -= fy
          }
        })

        // Update positions with friction damping
        const damping = 0.75
        currentNodes.forEach(n => {
          if (n !== draggedNodeRef.current) {
            n.x += n.vx
            n.y += n.vy
          }
          n.vx *= damping
          n.vy *= damping
        })

        // Cool alpha factor
        alphaRef.current *= 0.96
      }

      // Draw Canvas Frame
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#0b0b0e'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.save()
      ctx.scale(dpr, dpr)
      
      const t = transformRef.current
      ctx.translate(t.x, t.y)
      ctx.scale(t.k, t.k)

      const nodeMap = new Map<string, NodeItem>()
      currentNodes.forEach(n => nodeMap.set(n.id, n))

      // Draw Wikilinks (Edges)
      currentEdges.forEach(edge => {
        const s = nodeMap.get(edge.source)
        const trg = nodeMap.get(edge.target)
        if (s && trg) {
          const sMatches = (!searchRef.current || s.title.toLowerCase().includes(searchRef.current.toLowerCase())) &&
            (folderRef.current === 'all' || s.folder === folderRef.current)
          const trgMatches = (!searchRef.current || trg.title.toLowerCase().includes(searchRef.current.toLowerCase())) &&
            (folderRef.current === 'all' || trg.folder === folderRef.current)
          
          if (!sMatches || !trgMatches) return;

          const isHighlighted = hoveredNode && (hoveredNode.id === s.id || hoveredNode.id === trg.id)
          ctx.strokeStyle = isHighlighted ? 'rgba(6, 182, 212, 0.85)' : 'rgba(255, 255, 255, 0.07)'
          ctx.lineWidth = isHighlighted ? 1.5 : 0.6

          ctx.beginPath()
          ctx.moveTo(s.x, s.y)
          ctx.lineTo(trg.x, trg.y)
          ctx.stroke()
        }
      })

      // Draw Nodes (Obsidian styling)
      currentNodes.forEach(n => {
        const matches = (!searchRef.current || n.title.toLowerCase().includes(searchRef.current.toLowerCase())) &&
            (folderRef.current === 'all' || n.folder === folderRef.current)
            
        const isHovered = hoveredNode?.id === n.id
        const isSelected = selectedNode?.id === n.id
        const radius = Math.min(10, Math.max(3, 2.5 + Math.sqrt(n.val || 1) * 1.5))

        // Obsidian Folder Color Palette
        let color = '#8b8b8d'
        if (n.folder === 'NODES') color = '#06b6d4' // Electric Cyan
        else if (n.folder === '03_MOC') color = '#a855f7' // Purple
        else if (n.folder === '02_NEW-KNOWLEDGE') color = '#10b981' // Emerald
        else if (n.folder === 'NOTES') color = '#f59e0b' // Amber

        ctx.globalAlpha = matches ? 1.0 : 0.15;

        ctx.beginPath()
        ctx.arc(n.x, n.y, radius + (isHovered || isSelected ? 2.5 : 0), 0, Math.PI * 2)
        ctx.fillStyle = color
        if (isHovered || isSelected) {
          ctx.shadowColor = color
          ctx.shadowBlur = 12
        }
        ctx.fill()
        ctx.shadowBlur = 0

        if (isSelected) {
          ctx.strokeStyle = '#ffffff'
          ctx.lineWidth = 2
          ctx.stroke()
        }

        // Draw Labels (Only appear when node is hovered or selected)
        if (isHovered || isSelected) {
          ctx.font = '10px monospace'
          ctx.fillStyle = '#ffffff'
          ctx.fillText(n.title, n.x + radius + 5, n.y + 3)
        }
        
        ctx.globalAlpha = 1.0;
      })

      ctx.restore()

      animationFrameRef.current = requestAnimationFrame(render)
    }

    animationFrameRef.current = requestAnimationFrame(render)

    return () => {
      running = false
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [hoveredNode, selectedNode, repelForce, linkDistance, centerForce])

  // Mouse drag & node interaction
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const t = transformRef.current
    const worldX = (mouseX - t.x) / t.k
    const worldY = (mouseY - t.y) / t.k

    // Check if user clicked a node
    const clickedNode = nodesRef.current.find(n => {
      const dx = n.x - worldX
      const dy = n.y - worldY
      return Math.sqrt(dx * dx + dy * dy) <= 12
    })

    if (clickedNode) {
      draggedNodeRef.current = clickedNode
      setSelectedNode(clickedNode)
      alphaRef.current = 0.3 // Re-awaken physics briefly when dragging
    } else {
      isDraggingRef.current = true
      dragStartRef.current = { x: e.clientX - t.x, y: e.clientY - t.y }
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

    // Detect node hover
    const hovered = nodesRef.current.find(n => {
      const dx = n.x - worldX
      const dy = n.y - worldY
      return Math.sqrt(dx * dx + dy * dy) <= 10
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

  const resetView = () => {
    transformRef.current = { x: 0, y: 0, k: 1 }
    alphaRef.current = 0.8 // Re-settle graph
  }

  const filteredNodes = nodes.filter(n => {
    const matchesSearch = !search || n.title.toLowerCase().includes(search.toLowerCase())
    const matchesFolder = selectedFolder === 'all' || n.folder === selectedFolder
    return matchesSearch && matchesFolder
  })

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Network className="w-5 h-5 text-cyan-400" />
            Obsidian Knowledge Graph View
          </h2>
          <p className="text-xs text-zinc-400">Exact Obsidian graph cooling physics engine. {nodes.length} nodes, {edges.length} Wikilinks.</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => fetchGraph(true)}
            disabled={loading}
            className="bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs text-cyan-400 font-medium px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'Rescanning Vault...' : 'Refresh Graph'}</span>
          </button>
        </div>
      </div>

      {/* Obsidian Graph Control Settings Toolbar */}
      <div className="bg-[#121215] border border-zinc-800 p-3 rounded-xl flex items-center justify-between text-xs gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Filter graph nodes..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white pl-9 pr-3 py-1.5 rounded-lg focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-zinc-500" />
            <select
              value={selectedFolder}
              onChange={e => setSelectedFolder(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 rounded-lg px-3 py-1.5 focus:outline-none"
            >
              <option value="all">All Folders ({nodes.length})</option>
              <option value="NODES">NODES (Atomic)</option>
              <option value="03_MOC">03_MOC (Index)</option>
              <option value="02_NEW-KNOWLEDGE">02_NEW-KNOWLEDGE</option>
              <option value="NOTES">NOTES (Synthesis)</option>
            </select>
          </div>
        </div>

        {/* Obsidian Force Controls */}
        <div className="flex items-center gap-4 border-l border-zinc-800 pl-4 font-mono text-[11px] text-zinc-400">
          <div className="flex items-center gap-2">
            <span>Repel:</span>
            <input
              type="range"
              min="300"
              max="3000"
              value={repelForce}
              onChange={e => {
                setRepelForce(Number(e.target.value))
                alphaRef.current = 0.5
              }}
              className="w-20 accent-cyan-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <span>Distance:</span>
            <input
              type="range"
              min="30"
              max="150"
              value={linkDistance}
              onChange={e => {
                setLinkDistance(Number(e.target.value))
                alphaRef.current = 0.5
              }}
              className="w-20 accent-purple-400"
            />
          </div>
        </div>
      </div>

      {/* Main Canvas Graph & Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Canvas Visualizer */}
        <div ref={canvasContainerRef} className="col-span-1 lg:col-span-3 bg-[#0b0b0e] border border-zinc-800 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[550px]">
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onWheel={handleWheel}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          />

          {/* Floating Canvas Controls */}
          <div className="absolute bottom-4 left-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-1.5 rounded-lg flex items-center gap-2 text-zinc-400">
            <button onClick={resetView} className="hover:text-white p-1" title="Reset View">
              <Maximize2 className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono border-l border-zinc-800 pl-2 hidden sm:inline">
              Pan: Drag Canvas • Move Node: Drag Node
            </span>
          </div>

          <div className="absolute bottom-4 right-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-3 sm:gap-4 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400" /> NODES</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-400" /> 03_MOC</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> 02_NEW</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> NOTES</span>
          </div>
        </div>

        {/* Node Detail Inspector */}
        <div className="col-span-1 lg:col-span-1 bg-[#121215] border border-zinc-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-cyan-400" />
            Node Property Inspector
          </h3>

          {selectedNode ? (
            <div className="space-y-4 text-xs">
              <div>
                <label className="text-[10px] text-zinc-500 font-mono">CANONICAL TITLE</label>
                <h4 className="font-bold text-white text-base mt-0.5">{selectedNode.title}</h4>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                  <span className="text-zinc-500 text-[9px] block">FOLDER</span>
                  <span className="font-mono text-cyan-400 font-semibold">{selectedNode.folder}</span>
                </div>
                <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                  <span className="text-zinc-500 text-[9px] block">TYPE</span>
                  <span className="font-mono text-purple-400 font-semibold">{selectedNode.type}</span>
                </div>
              </div>

              <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                <span className="text-zinc-500 text-[9px] block">WIKILINK DEGREE / CONNECTIVITY</span>
                <span className="font-mono text-emerald-400 text-base font-bold">{selectedNode.val} Connections</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-zinc-500 text-xs">
              Click or drag any node particle on the canvas to inspect properties.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
