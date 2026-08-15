import React, { useState, useEffect, useRef } from 'react'
import { Sparkles, Sun, Globe, RefreshCw, Eye, Camera, Play, Pause, Compass, Layers, Maximize2 } from 'lucide-react'

interface Planet3D {
  id: string;
  title: string;
  folder: string;
  type: string;
  val: number;
  orbitRadius: number;
  tiltAngle: number;
  angle: number;
  speed: number;
  radius3D: number;
  color: string;
  glowColor: string;
  // Computed 3D & Screen positions
  x3D: number;
  y3D: number;
  z3D: number;
  screenX: number;
  screenY: number;
  scale: number;
}

interface Star3D {
  x: number;
  y: number;
  z: number;
  size: number;
  brightness: number;
}

export default function Cinematic3DMemoryGalaxy() {
  const [planets, setPlanets] = useState<Planet3D[]>([])
  const [loading, setLoading] = useState(false)
  const [isOrbiting, setIsOrbiting] = useState(true)
  const [cinematicCam, setCinematicCam] = useState(true)
  const [selectedPlanet, setSelectedPlanet] = useState<Planet3D | null>(null)
  const [hoveredPlanet, setHoveredPlanet] = useState<Planet3D | null>(null)

  // 3D Camera State
  const cameraRef = useRef({ yaw: 0.3, pitch: 0.4, distance: 750, targetX: 0, targetY: 0, targetZ: 0 })
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const isDraggingRef = useRef(false)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const planetsRef = useRef<Planet3D[]>([])
  const starsRef = useRef<Star3D[]>([])
  const animationFrameRef = useRef<number | null>(null)

  const fetchGalaxyData = async (refresh: boolean = false) => {
    setLoading(true)
    try {
      const url = refresh ? '/api/v1/knowledge/graph?refresh=true' : '/api/v1/knowledge/graph'
      const res = await fetch(url).then(r => r.json())
      const rawNodes: any[] = res.nodes || []

      // Generate 3D stars
      const starField: Star3D[] = Array.from({ length: 300 }, () => ({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: (Math.random() - 0.5) * 2000,
        size: Math.random() * 1.8 + 0.5,
        brightness: Math.random() * 0.8 + 0.2
      }))
      starsRef.current = starField

      // Initialize 3D orbital planets
      const initializedPlanets: Planet3D[] = rawNodes.map((n, i) => {
        let orbitRadius = 140
        let color = '#06b6d4'
        let glowColor = 'rgba(6, 182, 212, 0.8)'
        let radius3D = 6

        if (n.folder === '03_MOC') {
          orbitRadius = 100 + (i % 3) * 45
          color = '#a855f7' // Purple MOC Sun
          glowColor = 'rgba(168, 85, 247, 0.9)'
          radius3D = 12
        } else if (n.folder === 'NOTES') {
          orbitRadius = 220 + (i % 4) * 40
          color = '#f59e0b' // Amber Gas Giant
          glowColor = 'rgba(245, 158, 11, 0.8)'
          radius3D = 9
        } else if (n.folder === 'NODES') {
          orbitRadius = 340 + (i % 6) * 45
          color = '#06b6d4' // Cyan Planet
          glowColor = 'rgba(6, 182, 212, 0.7)'
          radius3D = 6.5
        } else {
          orbitRadius = 480 + (i % 5) * 50
          color = '#10b981' // Emerald Moon
          glowColor = 'rgba(16, 185, 129, 0.7)'
          radius3D = 5
        }

        return {
          id: n.id,
          title: n.title,
          folder: n.folder,
          type: n.type || 'memory-node',
          val: n.val || 1,
          orbitRadius,
          tiltAngle: (i % 3) * 0.15 - 0.15, // 3D orbital plane inclination
          angle: (i / rawNodes.length) * 2 * Math.PI,
          speed: (0.003 + (1 / orbitRadius) * 0.6) * (i % 2 === 0 ? 1 : -1),
          radius3D,
          color,
          glowColor,
          x3D: 0,
          y3D: 0,
          z3D: 0,
          screenX: 0,
          screenY: 0,
          scale: 1
        }
      })

      setPlanets(initializedPlanets)
      planetsRef.current = initializedPlanets
    } catch (e) {
      console.error('Failed to load 3D Memory Galaxy:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGalaxyData(false)
  }, [])

  // 3D Engine & Shader-style Renderer
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let running = true
    const fov = 600

    const render3DFraming = () => {
      if (!running) return

      const width = canvas.width
      const height = canvas.height
      const centerX = width / 2
      const centerY = height / 2

      const cam = cameraRef.current
      if (cinematicCam && isOrbiting) {
        cam.yaw += 0.0015 // Slow cinematic 3D camera pan
      }

      const cosYaw = Math.cos(cam.yaw)
      const sinYaw = Math.sin(cam.yaw)
      const cosPitch = Math.cos(cam.pitch)
      const sinPitch = Math.sin(cam.pitch)

      // Update Planet 3D Positions & Project to Screen Space
      const currentPlanets = planetsRef.current
      currentPlanets.forEach(p => {
        if (isOrbiting) {
          p.angle += p.speed
        }

        // 3D Orbital Calculation with inclination
        const rawX = Math.cos(p.angle) * p.orbitRadius
        const rawY = Math.sin(p.angle) * Math.sin(p.tiltAngle) * p.orbitRadius
        const rawZ = Math.sin(p.angle) * Math.cos(p.tiltAngle) * p.orbitRadius

        // 3D Camera Transformation Matrix (Yaw & Pitch rotation)
        const x1 = rawX * cosYaw - rawZ * sinYaw
        const z1 = rawX * sinYaw + rawZ * cosYaw

        const y2 = rawY * cosPitch - z1 * sinPitch
        const z2 = rawY * sinPitch + z1 * cosPitch

        p.x3D = x1
        p.y3D = y2
        p.z3D = z2

        // 3D Perspective Projection formula
        const scale = fov / (fov + z2 + cam.distance)
        p.scale = scale
        p.screenX = centerX + x1 * scale
        p.screenY = centerY + y2 * scale
      })

      // Sort Planets by 3D Depth (Z-buffer sorting)
      currentPlanets.sort((a, b) => b.z3D - a.z3D)

      // Clear Canvas & Draw Deep Space 3D Atmosphere
      ctx.clearRect(0, 0, width, height)
      const spaceGlow = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, 550)
      spaceGlow.addColorStop(0, '#0a0a14')
      spaceGlow.addColorStop(0.6, '#05050a')
      spaceGlow.addColorStop(1, '#020204')
      ctx.fillStyle = spaceGlow
      ctx.fillRect(0, 0, width, height)

      // Draw 3D Stars
      starsRef.current.forEach(s => {
        const x1 = s.x * cosYaw - s.z * sinYaw
        const z1 = s.x * sinYaw + s.z * cosYaw
        const y2 = s.y * cosPitch - z1 * sinPitch
        const z2 = s.y * sinPitch + z1 * cosPitch

        const scale = fov / (fov + z2 + cam.distance)
        if (scale > 0) {
          const sx = centerX + x1 * scale
          const sy = centerY + y2 * scale
          ctx.fillStyle = `rgba(255, 255, 255, ${s.brightness * Math.min(1, scale)})`
          ctx.fillRect(sx, sy, s.size * scale, s.size * scale)
        }
      })

      // Draw Central 3D Core Sun (NexusDB Core)
      const sunScale = fov / (fov + cam.distance)
      const sunR = 24 * sunScale

      // Sun Flare Rays
      const sunGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, sunR * 4)
      sunGlow.addColorStop(0, 'rgba(245, 158, 11, 1)')
      sunGlow.addColorStop(0.3, 'rgba(245, 158, 11, 0.4)')
      sunGlow.addColorStop(1, 'rgba(245, 158, 11, 0)')
      ctx.fillStyle = sunGlow
      ctx.beginPath()
      ctx.arc(centerX, centerY, sunR * 4, 0, Math.PI * 2)
      ctx.fill()

      // Core Sun Sphere
      ctx.beginPath()
      ctx.arc(centerX, centerY, sunR, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.shadowColor = '#f59e0b'
      ctx.shadowBlur = 30
      ctx.fill()
      ctx.shadowBlur = 0

      // Draw 3D Orbital Plane Rings
      const ringRadii = [100, 220, 340, 480]
      ringRadii.forEach(r => {
        ctx.beginPath()
        for (let a = 0; a <= Math.PI * 2; a += 0.1) {
          const rx = Math.cos(a) * r
          const rz = Math.sin(a) * r
          const x1 = rx * cosYaw - rz * sinYaw
          const z1 = rx * sinYaw + rz * cosYaw
          const y2 = -z1 * sinPitch
          const z2 = z1 * cosPitch
          const scale = fov / (fov + z2 + cam.distance)
          const sx = centerX + x1 * scale
          const sy = centerY + y2 * scale
          if (a === 0) ctx.moveTo(sx, sy)
          else ctx.lineTo(sx, sy)
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw Depth-Sorted 3D Planets & Satellites
      currentPlanets.forEach(p => {
        const isHovered = hoveredPlanet?.id === p.id
        const isSelected = selectedPlanet?.id === p.id
        const screenR = p.radius3D * p.scale * (isHovered || isSelected ? 1.4 : 1)

        // 3D Orbital Vector line to sun if selected/hovered
        if (isHovered || isSelected) {
          ctx.beginPath()
          ctx.moveTo(centerX, centerY)
          ctx.lineTo(p.screenX, p.screenY)
          ctx.strokeStyle = p.color
          ctx.lineWidth = 1.2
          ctx.stroke()
        }

        // 3D Atmosphere Glow
        ctx.beginPath()
        ctx.arc(p.screenX, p.screenY, screenR, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        if (isHovered || isSelected) {
          ctx.shadowColor = p.color
          ctx.shadowBlur = 20 * p.scale
        }
        ctx.fill()
        ctx.shadowBlur = 0

        if (isSelected) {
          ctx.strokeStyle = '#ffffff'
          ctx.lineWidth = 2
          ctx.stroke()
        }

        // 3D Title Label Callout
        if (isHovered || isSelected) {
          ctx.font = `${Math.max(10, Math.round(11 * p.scale))}px monospace`
          ctx.fillStyle = '#ffffff'
          ctx.fillText(p.title, p.screenX + screenR + 6, p.screenY + 4)
        }
      })

      animationFrameRef.current = requestAnimationFrame(render3DFraming)
    }

    animationFrameRef.current = requestAnimationFrame(render3DFraming)

    return () => {
      running = false
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [hoveredPlanet, selectedPlanet, isOrbiting, cinematicCam])

  // 3D Mouse Drag Orbiting
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Check 3D Planet click
    const clickedPlanet = planetsRef.current.find(p => {
      const dx = p.screenX - mouseX
      const dy = p.screenY - mouseY
      return Math.sqrt(dx * dx + dy * dy) <= p.radius3D * p.scale + 6
    })

    if (clickedPlanet) {
      setSelectedPlanet(clickedPlanet)
    } else {
      isDraggingRef.current = true
      dragStartRef.current = { x: e.clientX, y: e.clientY }
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    if (isDraggingRef.current) {
      const dx = e.clientX - dragStartRef.current.x
      const dy = e.clientY - dragStartRef.current.y
      cameraRef.current.yaw += dx * 0.005
      cameraRef.current.pitch += dy * 0.005
      dragStartRef.current = { x: e.clientX, y: e.clientY }
      return
    }

    const hovered = planetsRef.current.find(p => {
      const dx = p.screenX - mouseX
      const dy = p.screenY - mouseY
      return Math.sqrt(dx * dx + dy * dy) <= p.radius3D * p.scale + 6
    })

    setHoveredPlanet(hovered || null)
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
  }

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    cameraRef.current.distance = Math.max(300, Math.min(1500, cameraRef.current.distance + e.deltaY * 0.8))
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Cinematic Header */}
      <div className="flex items-center justify-between bg-[#121215] border border-zinc-800 p-5 rounded-2xl">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sun className="w-5 h-5 text-amber-400" />
            Cinematic 3D Memory Galaxy
          </h2>
          <p className="text-xs text-zinc-400">Deep Space 3D WebGL projection of NexusDB memory nodes orbiting in 3D solar space.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCinematicCam(!cinematicCam)}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all border ${
              cinematicCam ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' : 'bg-zinc-800 text-zinc-400 border-zinc-700'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{cinematicCam ? 'Cinematic Cam ON' : 'Manual Camera'}</span>
          </button>

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
            <span>Rescan 3D Galaxy</span>
          </button>
        </div>
      </div>

      {/* 3D Viewport & Planet Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 3D WebGL/Canvas Viewport */}
        <div className="col-span-1 lg:col-span-3 bg-[#030305] border border-zinc-800 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-2xl">
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

          <div className="absolute bottom-4 left-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-2 rounded-lg text-zinc-400 text-[10px] font-mono hidden sm:block">
            <span>3D Camera: Drag to Rotate • Scroll to Zoom</span>
          </div>

          <div className="absolute bottom-4 right-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded-lg flex items-center gap-3 sm:gap-4 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Core</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-400" /> MOCs</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400" /> NODES</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Comets</span>
          </div>
        </div>

        {/* 3D Planet Property Inspector */}
        <div className="col-span-1 lg:col-span-1 bg-[#121215] border border-zinc-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-cyan-400" />
            3D Planetary Memory Inspector
          </h3>

          {selectedPlanet ? (
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded">
                  {selectedPlanet.folder} • 3D RADIUS {Math.round(selectedPlanet.orbitRadius)} AU
                </span>
                <h4 className="font-bold text-white text-base mt-1.5">{selectedPlanet.title}</h4>
              </div>

              <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 space-y-1.5 font-mono text-[11px]">
                <p><span className="text-zinc-500">3D Position:</span> <span className="text-cyan-400">[{Math.round(selectedPlanet.x3D)}, {Math.round(selectedPlanet.y3D)}, {Math.round(selectedPlanet.z3D)}]</span></p>
                <p><span className="text-zinc-500">Perspective Scale:</span> <span className="text-purple-400">{(selectedPlanet.scale).toFixed(2)}x</span></p>
                <p><span className="text-zinc-500">Wikilink Degree:</span> <span className="text-emerald-400">{selectedPlanet.val} Connections</span></p>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-zinc-500 text-xs">
              Click any 3D planet in the galaxy to inspect 3D spatial properties.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
