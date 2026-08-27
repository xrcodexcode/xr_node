import React, { useState, useEffect, useRef } from 'react'
import { Sparkles, Sun, Globe, Search, RefreshCw, Eye, Zap, Layers, Play, Pause } from 'lucide-react'

interface GalaxyNode {
  id: string;
  title: string;
  folder: string;
  type: string;
  val: number;
  orbitRadius: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
  glowColor: string;
}

export default function MemoryGalaxy() {
  const [nodes, setNodes] = useState<GalaxyNode[]>([])
  const [loading, setLoading] = useState(false)
  const [isOrbiting, setIsOrbiting] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedNode, setSelectedNode] = useState<GalaxyNode | null>(null)
  const [hoveredNode, setHoveredNode] = useState<GalaxyNode | null>(null)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasContainerRef = useRef<HTMLDivElement | null>(null)
  const transformRef = useRef({ x: 0, y: 0, k: 1 })
  const isDraggingRef = useRef(false)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const nodesRef = useRef<GalaxyNode[]>([])
  const animationFrameRef = useRef<number | null>(null)

  const fetchGalaxyData = async (refresh: boolean = false) => {
    setLoading(true)
    try {
      const url = refresh ? '/api/v1/knowledge/graph?refresh=true' : '/api/v1/knowledge/graph'
      const res = await fetch(url).then(r => r.json())
      const rawNodes: any[] = res.nodes || []

      // Map nodes into solar system orbital rings
      const initializedNodes: GalaxyNode[] = rawNodes.map((n, i) => {
        let orbitRadius = 120
        let color = '#06b6d4'
        let glowColor = 'rgba(6, 182, 212, 0.6)'
        let size = 4

        if (n.folder === '03_MOC') {
          orbitRadius = 90 + (i % 3) * 35 // Inner solar ring
          color = '#a855f7' // Purple MOC sun
          glowColor = 'rgba(168, 85, 247, 0.8)'
          size = 8
        } else if (n.folder === 'NOTES') {
          orbitRadius = 180 + (i % 4) * 30
          color = '#f59e0b' // Amber Gas Giant
          glowColor = 'rgba(245, 158, 11, 0.7)'
          size = 6
        } else if (n.folder === 'NODES') {
          orbitRadius = 260 + (i % 6) * 35 // Middle Terrestrial Orbit
          color = '#06b6d4' // Cyan Planet
          glowColor = 'rgba(6, 182, 212, 0.6)'
          size = 4.5
        } else {
          orbitRadius = 380 + (i % 5) * 40 // Outer Comet Belt
          color = '#10b981' // Emerald Moon
          glowColor = 'rgba(16, 185, 129, 0.6)'
          size = 3.5
        }

        return {
          id: n.id,
          title: n.title,
          folder: n.folder,
          type: n.type || 'memory-node',
          val: n.val || 1,
          orbitRadius,
          angle: (i / rawNodes.length) * 2 * Math.PI,
          speed: (0.002 + (1 / orbitRadius) * 0.4) * (i % 2 === 0 ? 1 : -1), // Keplerian orbital speed
          size,
          color,
          glowColor
        }
      })

      setNodes(initializedNodes)
      nodesRef.current = initializedNodes
    } catch (e) {
      console.error('Failed to load Memory Galaxy:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGalaxyData(false)
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

  // Solar System Orbital Physics & Starfield Renderer
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let running = true

    // Pre-generate background stars
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 2000,
      size: Math.random() * 1.5,
      alpha: 0.2 + Math.random() * 0.7
    }))

    const renderFrame = () => {
      if (!running) return

      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const sunX = width / 2
      const sunY = height / 2

      const currentNodes = nodesRef.current

      // Update Keplerian orbital positions
      if (isOrbiting) {
        currentNodes.forEach(n => {
          n.angle += n.speed
        })
      }

      // Draw Deep Space Canvas Background
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#050508'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.save()
      ctx.scale(dpr, dpr)

      // Draw Twinkling Background Stars
      stars.forEach(s => {
        // Simple modulo to keep stars on screen if window resized bigger than 2000
        const sx = s.x % width
        const sy = s.y % height
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`
        ctx.fillRect(sx, sy, s.size, s.size)
      })

      const t = transformRef.current
      ctx.translate(t.x, t.y)
      ctx.scale(t.k, t.k)

      // Draw Central Vault Sun (NexusDB Core)
      ctx.beginPath()
      ctx.arc(sunX, sunY, 18, 0, Math.PI * 2)
      ctx.fillStyle = '#f59e0b'
      ctx.shadowColor = '#f59e0b'
      ctx.shadowBlur = 35
      ctx.fill()
      ctx.shadowBlur = 0

      // Sun Core Ring
      ctx.beginPath()
      ctx.arc(sunX, sunY, 24, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Draw Concentric Orbital Rings
      const orbitRings = [120, 180, 260, 380, 460]
      orbitRings.forEach(r => {
        ctx.beginPath()
        ctx.arc(sunX, sunY, r, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
        ctx.lineWidth = 1
        ctx.setLineDash([4, 6])
        ctx.stroke()
        ctx.setLineDash([])
      })

      // Draw Planetary Nodes in Orbits
      currentNodes.forEach(n => {
        const posX = sunX + Math.cos(n.angle) * n.orbitRadius
        const posY = sunY + Math.sin(n.angle) * n.orbitRadius

        const isHovered = hoveredNode?.id === n.id
        const isSelected = selectedNode?.id === n.id

        // Orbital Tether Line to Sun
        if (isHovered || isSelected) {
          ctx.beginPath()
          ctx.moveTo(sunX, sunY)
          ctx.lineTo(posX, posY)
          ctx.strokeStyle = n.color
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Draw Planet Body
        ctx.beginPath()
        ctx.arc(posX, posY, n.size + (isHovered || isSelected ? 3 : 0), 0, Math.PI * 2)
        ctx.fillStyle = n.color
        if (isHovered || isSelected) {
          ctx.shadowColor = n.color
          ctx.shadowBlur = 20
        }
        ctx.fill()
        ctx.shadowBlur = 0

        if (isSelected) {
          ctx.strokeStyle = '#ffffff'
          ctx.lineWidth = 2
          ctx.stroke()
        }

        // Draw Planet Title Label on Hover/Select
        if (isHovered || isSelected) {
          ctx.font = '10px monospace'
          ctx.fillStyle = '#ffffff'
          ctx.fillText(n.title, posX + n.size + 6, posY + 3)
        }
      })

      ctx.restore()

      animationFrameRef.current = requestAnimationFrame(renderFrame)
    }

    animationFrameRef.current = requestAnimationFrame(renderFrame)

    return () => {
      running = false
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [hoveredNode, selectedNode, isOrbiting])

  // Mouse Interaction: Pan, Zoom, Planet Click
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const t = transformRef.current
    const worldX = (mouseX - t.x) / t.k
    const worldY = (mouseY - t.y) / t.k
    const sunX = canvas.width / 2
    const sunY = canvas.height / 2

    const clickedPlanet = nodesRef.current.find(n => {
      const px = sunX + Math.cos(n.angle) * n.orbitRadius
      const py = sunY + Math.sin(n.angle) * n.orbitRadius
      const dx = px - worldX
      const dy = py - worldY
      return Math.sqrt(dx * dx + dy * dy) <= 12
    })

    if (clickedPlanet) {
      setSelectedNode(clickedPlanet)
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
    const sunX = canvas.width / 2
    const sunY = canvas.height / 2

    if (isDraggingRef.current) {
      transformRef.current.x = e.clientX - dragStartRef.current.x
      transformRef.current.y = e.clientY - dragStartRef.current.y
      return
    }

    const hovered = nodesRef.current.find(n => {
      const px = sunX + Math.cos(n.angle) * n.orbitRadius
      const py = sunY + Math.sin(n.angle) * n.orbitRadius
      const dx = px - worldX
      const dy = py - worldY
      return Math.sqrt(dx * dx + dy * dy) <= 12
    })

    setHoveredNode(hovered || null)
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
  }

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9
    transformRef.current.k = Math.max(0.2, Math.min(4, transformRef.current.k * zoomFactor))
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header & Controls */}
      <div className="flex items-center justify-between bg-[#121215] border border-zinc-800 p-5 rounded-2xl">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sun className="w-5 h-5 text-amber-400" />
            NexusDB Memory Galaxy (Solar System View)
          </h2>
          <p className="text-xs text-zinc-400">Vault memory nodes orbiting like planets in concentric Keplerian solar rings around NexusDB Core.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOrbiting(!isOrbiting)}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all border ${
              isOrbiting ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 'bg-zinc-800 text-zinc-400 border-zinc-700'
            }`}
          >
            {isOrbiting ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isOrbiting ? 'Pause Orbits' : 'Resume Orbits'}</span>
          </button>

          <button
            onClick={() => fetchGalaxyData(true)}
            disabled={loading}
            className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Rescan Galaxy</span>
          </button>
        </div>
      </div>

      {/* Main Galaxy Canvas & Planetary Inspector */}
      <div className="grid grid-cols-4 gap-6">
        {/* Deep Space Solar System Canvas */}
        <div ref={canvasContainerRef} className="col-span-3 bg-[#050508] border border-zinc-800 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[550px]">
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onWheel={handleWheel}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          />

          <div className="absolute bottom-4 right-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-4 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Core Vault Sun</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-400" /> Orbit 1: MOC Suns</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Orbit 2: Atomic Planets</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Orbit 3: Moons & Comets</span>
          </div>
        </div>

        {/* Planetary Property Inspector */}
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-cyan-400" />
            Planetary Memory Inspector
          </h3>

          {selectedNode ? (
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">
                  {selectedNode.folder} • ORBIT {Math.round(selectedNode.orbitRadius)} AU
                </span>
                <h4 className="font-bold text-white text-base mt-1.5">{selectedNode.title}</h4>
              </div>

              <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 space-y-1.5 font-mono text-[11px]">
                <p><span className="text-zinc-500">Orbital Distance:</span> <span className="text-cyan-400">{Math.round(selectedNode.orbitRadius)} AU</span></p>
                <p><span className="text-zinc-500">Orbital Velocity:</span> <span className="text-purple-400">{(selectedNode.speed * 1000).toFixed(2)} km/s</span></p>
                <p><span className="text-zinc-500">Gravity Mass (Val):</span> <span className="text-emerald-400">{selectedNode.val} Wikilinks</span></p>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-zinc-500 text-xs">
              Click any orbiting planet or moon in the Memory Galaxy to lock camera focus and inspect properties.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
