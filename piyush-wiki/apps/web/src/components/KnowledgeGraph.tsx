'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Sparkles, Filter } from 'lucide-react';
import { KnowledgeGraphData, GraphNode, GraphEdge } from '@/types/wiki';

interface KnowledgeGraphProps {
  data: KnowledgeGraphData;
  height?: string;
  onSelectNode?: (slug: string) => void;
}

interface PhysicsNode extends GraphNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export function KnowledgeGraph({ data, height = 'h-[500px]', onSelectNode }: KnowledgeGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  const [hoveredNode, setHoveredNode] = useState<PhysicsNode | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [zoom, setZoom] = useState<number>(1);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const categoryColors: Record<string, string> = {
    'Artificial Intelligence': '#38bdf8', // Sky Blue
    'Machine Learning': '#818cf8', // Indigo
    'Deep Learning': '#c084fc', // Purple
    'Database Systems': '#34d399', // Emerald
    'Generative AI': '#f472b6', // Pink
    'Programming Languages': '#fbbf24', // Amber
    'Knowledge Systems': '#f87171', // Red
    'General': '#94a3b8',
  };

  const nodesRef = useRef<PhysicsNode[]>([]);
  const animationFrameRef = useRef<number>(0);

  // Initialize node positions & physics simulation
  useEffect(() => {
    if (!data.nodes || data.nodes.length === 0) return;

    const width = 800;
    const height = 500;

    const initializedNodes: PhysicsNode[] = data.nodes.map((node, i) => {
      const angle = (i / data.nodes.length) * 2 * Math.PI;
      const radius = 120 + Math.random() * 80;
      return {
        ...node,
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.max(6, Math.min(18, 5 + node.val * 0.8)),
        color: categoryColors[node.category] || '#38bdf8'
      };
    });

    nodesRef.current = initializedNodes;
  }, [data]);

  // Main Canvas Render & Physics Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;

    const render = () => {
      if (!running) return;

      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Draw background grid lines
      ctx.strokeStyle = '#1e293b30';
      ctx.lineWidth = 1;
      const gridSize = 40 * zoom;
      for (let x = offset.x % gridSize; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = offset.y % gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.save();
      ctx.translate(width / 2 + offset.x, height / 2 + offset.y);
      ctx.scale(zoom, zoom);
      ctx.translate(-width / 2, -height / 2);

      const nodes = nodesRef.current;
      const nodeMap = new Map(nodes.map(n => [n.id, n]));

      // Update Node Positions (Physics Force Simulation)
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Repulsion between nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < 180) {
            const force = (180 - dist) / dist * 0.08;
            n1.vx -= dx * force * 0.05;
            n1.vy -= dy * force * 0.05;
            n2.vx += dx * force * 0.05;
            n2.vy += dy * force * 0.05;
          }
        }

        // Center attraction force
        const cdx = width / 2 - n1.x;
        const cdy = height / 2 - n1.y;
        n1.vx += cdx * 0.0005;
        n1.vy += cdy * 0.0005;

        // Apply velocity dampening
        n1.vx *= 0.88;
        n1.vy *= 0.88;
        n1.x += n1.vx;
        n1.y += n1.vy;
      }

      // Draw Edges / WikiLinks
      data.edges.forEach(edge => {
        const source = nodeMap.get(edge.source);
        const target = nodeMap.get(edge.target);
        if (!source || !target) return;

        const isFilteredOut = selectedCategory !== 'all' && (source.category !== selectedCategory && target.category !== selectedCategory);
        if (isFilteredOut) return;

        const isHighlighted = hoveredNode && (hoveredNode.id === source.id || hoveredNode.id === target.id);

        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        ctx.strokeStyle = isHighlighted ? '#38bdf8' : '#33415590';
        ctx.lineWidth = isHighlighted ? 2 : 1;
        ctx.stroke();
      });

      // Draw Nodes
      nodes.forEach(node => {
        const isFilteredOut = selectedCategory !== 'all' && node.category !== selectedCategory;
        const isHovered = hoveredNode?.id === node.id;

        ctx.save();
        ctx.globalAlpha = isFilteredOut ? 0.2 : 1.0;

        // Outer Glow ring if hovered
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 6, 0, 2 * Math.PI);
          ctx.fillStyle = `${node.color}33`;
          ctx.fill();
        }

        // Inner Circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isHovered ? 12 : 4;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.stroke();

        // Node Title Label
        ctx.font = `${isHovered ? 'bold 12px' : '10px'} Inter, sans-serif`;
        ctx.fillStyle = isHovered ? '#f8fafc' : '#cbd5e1';
        ctx.textAlign = 'center';
        ctx.fillText(node.title, node.x, node.y + node.radius + 14);

        ctx.restore();
      });

      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      running = false;
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [data, zoom, offset, hoveredNode, selectedCategory]);

  // Handle Mouse Events for Pan & Hover & Click
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (isDragging) {
      setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const width = canvas.width;
    const height = canvas.height;

    // Transform mouse coordinates back to graph space
    const graphX = (mouseX - (width / 2 + offset.x)) / zoom + width / 2;
    const graphY = (mouseY - (height / 2 + offset.y)) / zoom + height / 2;

    const found = nodesRef.current.find(node => {
      const dx = node.x - graphX;
      const dy = node.y - graphY;
      return Math.sqrt(dx * dx + dy * dy) <= node.radius + 4;
    });

    setHoveredNode(found || null);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (hoveredNode) {
      if (onSelectNode) {
        onSelectNode(hoveredNode.slug);
      } else {
        router.push(`/article/${hoveredNode.slug}`);
      }
    }
  };

  const categories = ['all', ...Array.from(new Set(data.nodes.map(n => n.category)))];

  return (
    <div className={`relative w-full ${height} rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden group shadow-2xl`}>
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={900}
        height={550}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Top Left Category Filters */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 flex-wrap max-w-md bg-slate-900/80 p-2 rounded-xl border border-slate-800 backdrop-blur-md">
        <Filter className="w-3.5 h-3.5 text-slate-400 ml-1" />
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors ${
              selectedCategory === cat
                ? 'bg-sky-500 text-white font-semibold shadow-xs'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {cat === 'all' ? 'All Nodes' : cat}
          </button>
        ))}
      </div>

      {/* Top Right Zoom Controls */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 backdrop-blur-md">
        <button
          onClick={() => setZoom(z => Math.min(2.5, z + 0.2))}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoom(z => Math.max(0.4, z - 0.2))}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => { setZoom(1); setOffset({ x: 0, y: 0 }); }}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800"
          title="Reset View"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Tooltip Info Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none flex items-center justify-between">
        {hoveredNode ? (
          <div className="bg-slate-900/90 border border-sky-500/40 px-4 py-2 rounded-xl text-xs font-mono text-sky-200 backdrop-blur-md shadow-lg flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: hoveredNode.color }} />
            <span className="font-bold text-slate-100">{hoveredNode.title}</span>
            <span className="text-slate-400">Category: {hoveredNode.category}</span>
            <span className="text-sky-400">Click to open article →</span>
          </div>
        ) : (
          <div className="bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] font-mono text-slate-400 backdrop-blur-md">
            Drag to pan • Scroll / Buttons to zoom • Click node to open article
          </div>
        )}
      </div>
    </div>
  );
}
