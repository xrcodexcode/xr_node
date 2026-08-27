import React, { useEffect, useRef, useState } from 'react';
import { Network, Plus, RotateCcw, Info, Sparkles, Filter, Link as LinkIcon, ExternalLink } from 'lucide-react';

interface NodeData {
  id: string;
  title: string;
  category: 'ai' | 'pkm' | 'science' | 'productivity';
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  summary: string;
  links: string[];
}

interface GraphSimulatorProps {
  mode: 'eli5' | 'tech';
}

const INITIAL_NODES: Omit<NodeData, 'x' | 'y' | 'vx' | 'vy'>[] = [
  {
    id: 'nexusdb',
    title: 'NexusDB Vault',
    category: 'pkm',
    radius: 22,
    color: '#c084fc',
    summary: 'The central Infinity Brain knowledge container holding flat atomic nodes, MOC maps, and multi-engine AI control planes.',
    links: ['atomic-notes', 'moc-system', 'ai-ml-moc', 'claude-control', 'gemini-control', 'codex-control']
  },
  {
    id: 'atomic-notes',
    title: 'Flat Atomic Nodes',
    category: 'pkm',
    radius: 17,
    color: '#38bdf8',
    summary: '1 Note = 1 Idea. Kept flat inside NODES/ with zero subfolders to maximize reusability and avoid folder siloing.',
    links: ['nexusdb', 'zettelkasten', 'deduplication', 'backlinks']
  },
  {
    id: 'moc-system',
    title: 'Map of Content (MOC)',
    category: 'pkm',
    radius: 18,
    color: '#34d399',
    summary: '4-level navigation highway system in 03_MOC/ connecting related concepts without deep directory nesting.',
    links: ['nexusdb', 'ai-ml-moc', 'study-moc', 'books-moc', 'atomic-habits-moc', 'warren-buffett-moc']
  },
  {
    id: 'ai-ml-moc',
    title: 'AI & Machine Learning MOC',
    category: 'ai',
    radius: 16,
    color: '#f43f5e',
    summary: 'Central domain MOC indexing artificial intelligence, LLM agents, RAG pipelines, and transformer architectures.',
    links: ['moc-system', 'atomic-notes', 'yt-moc']
  },
  {
    id: 'study-moc',
    title: 'Study & Academics MOC',
    category: 'productivity',
    radius: 15,
    color: '#fbbf24',
    summary: 'Domain MOC for academics, Data Structures & Algorithms (DSA), exam prep, and cognitive science.',
    links: ['moc-system', 'atomic-notes']
  },
  {
    id: 'books-moc',
    title: 'Books & Literature MOC',
    category: 'pkm',
    radius: 15,
    color: '#a78bfa',
    summary: 'Curated index of non-fiction book takeaways, chapter summaries, and literary analysis.',
    links: ['moc-system', 'atomic-habits-moc']
  },
  {
    id: 'atomic-habits-moc',
    title: 'Atomic Habits MOC',
    category: 'productivity',
    radius: 14,
    color: '#10b981',
    summary: 'Specialized MOC indexing behavioral psychology, habit loops, and identity-based change notes from James Clear.',
    links: ['books-moc', 'moc-system']
  },
  {
    id: 'warren-buffett-moc',
    title: 'Warren Buffett MOC',
    category: 'productivity',
    radius: 14,
    color: '#eab308',
    summary: 'Investment philosophy MOC indexing economic moats, margin of safety, and compounding capital principles.',
    links: ['moc-system', 'books-moc']
  },
  {
    id: 'yt-moc',
    title: 'YouTube Transcripts MOC',
    category: 'ai',
    radius: 14,
    color: '#ec4899',
    summary: 'Synthesized knowledge notes extracted automatically from video transcripts and technical talks.',
    links: ['moc-system', 'ai-ml-moc']
  },
  {
    id: 'claude-control',
    title: 'Claude Control Plane',
    category: 'ai',
    radius: 15,
    color: '#818cf8',
    summary: 'Anthropic Claude governance layer (CLAUDE.md & claude/) overseeing structural safety and vault invariants.',
    links: ['nexusdb', 'gemini-control', 'codex-control']
  },
  {
    id: 'gemini-control',
    title: 'Gemini Antigravity Plane',
    category: 'ai',
    radius: 15,
    color: '#06b6d4',
    summary: 'Gemini Antigravity engine (.antigravity/) running graph health checks, automated note ingestion, and schema validation.',
    links: ['nexusdb', 'claude-control', 'deduplication']
  },
  {
    id: 'codex-control',
    title: 'Codex Sidecar Engine',
    category: 'ai',
    radius: 15,
    color: '#22c55e',
    summary: 'OpenAI Codex automation plane (.codex/) running automated graph test suites and python sidecars.',
    links: ['nexusdb', 'claude-control']
  },
  {
    id: 'zettelkasten',
    title: 'Zettelkasten Method',
    category: 'pkm',
    radius: 13,
    color: '#f59e0b',
    summary: 'German slip-box note method optimized for atomic note linkages and emergent thought graph discovery.',
    links: ['atomic-notes', 'backlinks']
  },
  {
    id: 'backlinks',
    title: 'Explicit [[Backlinks]]',
    category: 'pkm',
    radius: 12,
    color: '#c084fc',
    summary: 'Double-bracket markdown links establishing direct graph edges between claims, definitions, and concepts.',
    links: ['zettelkasten', 'atomic-notes']
  },
  {
    id: 'deduplication',
    title: 'Auto-Deduplication',
    category: 'ai',
    radius: 13,
    color: '#f43f5e',
    summary: 'Prevents duplicate concept creation by comparing incoming claims against existing NODES/.',
    links: ['atomic-notes', 'gemini-control']
  }
];

export const GraphSimulator: React.FC<GraphSimulatorProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [nodes, setNodes] = useState<NodeData[]>([]);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [newTitle, setNewTitle] = useState<string>('');
  const [draggedNodeIndex, setDraggedNodeIndex] = useState<number | null>(null);

  // Initialize canvas & physics nodes
  useEffect(() => {
    const width = 800;
    const height = 500;
    const initialPosNodes: NodeData[] = INITIAL_NODES.map((n, i) => {
      const angle = (i / INITIAL_NODES.length) * Math.PI * 2;
      const radius = 160 + Math.random() * 40;
      return {
        ...n,
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      };
    });
    setNodes(initialPosNodes);
    setSelectedNode(initialPosNodes[0]);
  }, []);

  // Animation Loop (60fps Physics)
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const updatePhysicsAndDraw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Grid background on canvas
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Physics calculations (Repulsion & Spring Links)
      setNodes((prevNodes) => {
        const next = prevNodes.map((node) => ({ ...node }));

        // Repulsion between all nodes
        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            const dx = next[j].x - next[i].x;
            const dy = next[j].y - next[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            if (dist < 180) {
              const force = (180 - dist) / 180 * 0.4;
              next[i].vx -= (dx / dist) * force;
              next[i].vy -= (dy / dist) * force;
              next[j].vx += (dx / dist) * force;
              next[j].vy += (dy / dist) * force;
            }
          }
        }

        // Spring attraction along links
        for (let i = 0; i < next.length; i++) {
          const source = next[i];
          source.links.forEach((targetId) => {
            const target = next.find((n) => n.id === targetId);
            if (target) {
              const dx = target.x - source.x;
              const dy = target.y - source.y;
              const dist = Math.sqrt(dx * dx + dy * dy) || 1;
              const targetDist = 120;
              const springForce = (dist - targetDist) * 0.005;
              source.vx += (dx / dist) * springForce;
              source.vy += (dy / dist) * springForce;
            }
          });
        }

        // Center gravity
        const cx = width / 2;
        const cy = height / 2;
        for (let i = 0; i < next.length; i++) {
          if (i === draggedNodeIndex) continue; // Don't move dragged node with gravity
          const dx = cx - next[i].x;
          const dy = cy - next[i].y;
          next[i].vx += dx * 0.0003;
          next[i].vy += dy * 0.0003;

          // Apply friction
          next[i].vx *= 0.90;
          next[i].vy *= 0.90;

          // Update position
          next[i].x += next[i].vx;
          next[i].y += next[i].vy;

          // Bounds checking
          next[i].x = Math.max(40, Math.min(width - 40, next[i].x));
          next[i].y = Math.max(40, Math.min(height - 40, next[i].y));
        }

        return next;
      });

      // 3. Draw Links
      nodes.forEach((node) => {
        if (activeCategory !== 'all' && node.category !== activeCategory) return;
        node.links.forEach((targetId) => {
          const target = nodes.find((n) => n.id === targetId);
          if (target) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            const isSelectedLink = selectedNode && (selectedNode.id === node.id || selectedNode.id === target.id);
            ctx.strokeStyle = isSelectedLink ? 'rgba(192, 132, 252, 0.7)' : 'rgba(255, 255, 255, 0.12)';
            ctx.lineWidth = isSelectedLink ? 2.5 : 1;
            ctx.stroke();
          }
        });
      });

      // 4. Draw Nodes
      nodes.forEach((node) => {
        if (activeCategory !== 'all' && node.category !== activeCategory) return;

        const isSelected = selectedNode?.id === node.id;

        // Outer Glow if selected
        if (isSelected) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 10, 0, Math.PI * 2);
          ctx.fillStyle = `${node.color}33`;
          ctx.fill();
        }

        // Node Circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isSelected ? 20 : 8;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow

        // Node Border
        ctx.lineWidth = isSelected ? 3 : 1.5;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();

        // Node Title Label
        ctx.font = isSelected ? 'bold 12px Inter, sans-serif' : '11px Inter, sans-serif';
        ctx.fillStyle = isSelected ? '#ffffff' : '#d1d5db';
        ctx.textAlign = 'center';
        ctx.fillText(node.title, node.x, node.y + node.radius + 16);
      });

      animId = requestAnimationFrame(updatePhysicsAndDraw);
    };

    animId = requestAnimationFrame(updatePhysicsAndDraw);
    return () => cancelAnimationFrame(animId);
  }, [nodes, selectedNode, activeCategory, draggedNodeIndex]);

  // Handle Canvas Drag & Selection
  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) * (canvas.width / rect.width);
    const clickY = (e.clientY - rect.top) * (canvas.height / rect.height);

    const hitIndex = nodes.findIndex((n) => {
      const dx = n.x - clickX;
      const dy = n.y - clickY;
      return Math.sqrt(dx * dx + dy * dy) <= n.radius + 5;
    });

    if (hitIndex !== -1) {
      setSelectedNode(nodes[hitIndex]);
      setDraggedNodeIndex(hitIndex);
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (draggedNodeIndex === null) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const moveX = (e.clientX - rect.left) * (canvas.width / rect.width);
    const moveY = (e.clientY - rect.top) * (canvas.height / rect.height);

    setNodes((prev) =>
      prev.map((n, idx) => (idx === draggedNodeIndex ? { ...n, x: moveX, y: moveY, vx: 0, vy: 0 } : n))
    );
  };

  const handleCanvasMouseUp = () => {
    setDraggedNodeIndex(null);
  };

  // Add new node dynamically
  const handleAddNode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newId = newTitle.toLowerCase().replace(/[^a-z0-9]/g, '-');

    // Connect to 2 random existing nodes
    const randomLinks: string[] = [];
    if (nodes.length > 0) {
      const idx1 = Math.floor(Math.random() * nodes.length);
      randomLinks.push(nodes[idx1].id);
      const idx2 = (idx1 + 1) % nodes.length;
      randomLinks.push(nodes[idx2].id);
    }

    const newNode: NodeData = {
      id: newId,
      title: newTitle.trim(),
      category: 'pkm',
      x: 400 + (Math.random() - 0.5) * 100,
      y: 250 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: 15,
      color: '#34d399',
      summary: `User-created atomic node for concept: "${newTitle.trim()}". Linked automatically by the semantic engine.`,
      links: randomLinks
    };

    setNodes((prev) => [...prev, newNode]);
    setSelectedNode(newNode);
    setNewTitle('');
  };

  // Reset Graph
  const handleResetGraph = () => {
    const width = 800;
    const height = 500;
    const initialPosNodes: NodeData[] = INITIAL_NODES.map((n, i) => {
      const angle = (i / INITIAL_NODES.length) * Math.PI * 2;
      const radius = 160 + Math.random() * 40;
      return {
        ...n,
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      };
    });
    setNodes(initialPosNodes);
    setSelectedNode(initialPosNodes[0]);
  };

  return (
    <section id="graph" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800 text-xs font-semibold mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {mode === 'eli5' ? 'Live Knowledge Web (Click & Drag Nodes!)' : 'Interactive 2D Physics Knowledge Graph'}
          </h2>
          <p className="text-gray-400 mt-2 text-sm max-w-2xl">
            {mode === 'eli5'
              ? 'Every circle is an atomic note. Drag them around, click to inspect their contents, or add a new idea to watch it automatically link!'
              : 'Real-time force-directed canvas simulation illustrating flat 02_NODES relationship edges and semantic linking.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 bg-gray-900/80 p-1.5 rounded-xl border border-gray-800">
          <span className="text-xs text-gray-400 px-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {['all', 'pkm', 'ai', 'productivity'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {cat === 'all' ? 'All Nodes' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Canvas Column */}
        <div className="lg:col-span-8 glass-panel p-4 rounded-2xl border-purple-500/20 relative flex flex-col items-center">
          <canvas
            ref={canvasRef}
            width={800}
            height={500}
            onMouseDown={handleCanvasMouseDown}
            onMouseMove={handleCanvasMouseMove}
            onMouseUp={handleCanvasMouseUp}
            className="w-full h-auto max-h-[500px] rounded-xl bg-gray-950/80 cursor-grab active:cursor-grabbing border border-gray-800/80 shadow-inner"
          />

          {/* Canvas Bottom Control Bar */}
          <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <form onSubmit={handleAddNode} className="flex items-center space-x-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Type new idea (e.g. Memory Index)..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white text-xs focus:outline-none focus:border-purple-500 w-full sm:w-64"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold flex items-center space-x-1 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add Node</span>
              </button>
            </form>

            <button
              onClick={handleResetGraph}
              className="flex items-center space-x-1.5 text-gray-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Graph Physics</span>
            </button>
          </div>
        </div>

        {/* Node Inspector Sidebar */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border-purple-500/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-gray-800">
              <Info className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider">Node Inspector</h3>
            </div>

            {selectedNode ? (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-semibold" style={{ backgroundColor: `${selectedNode.color}25`, color: selectedNode.color }}>
                      ID: {selectedNode.id}
                    </span>
                    <span className="text-xs text-gray-500 capitalize">{selectedNode.category}</span>
                  </div>
                  <h4 className="text-xl font-black text-white mt-2">{selectedNode.title}</h4>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-900/90 border border-gray-800 text-xs text-gray-300 leading-relaxed">
                  <p className="font-sans">{selectedNode.summary}</p>
                </div>

                {/* Backlinks */}
                <div>
                  <div className="flex items-center space-x-1 text-xs text-purple-300 font-bold mb-2">
                    <LinkIcon className="w-3.5 h-3.5" />
                    <span>Connected Backlinks ({selectedNode.links.length})</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.links.map((linkId) => (
                      <button
                        key={linkId}
                        onClick={() => {
                          const target = nodes.find((n) => n.id === linkId);
                          if (target) setSelectedNode(target);
                        }}
                        className="px-2.5 py-1 rounded-md bg-gray-800 hover:bg-purple-950 text-xs text-purple-200 border border-purple-800/40 font-mono transition-colors flex items-center space-x-1"
                      >
                        <span>[[{linkId}]]</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-xs text-gray-500 italic">Click any node on the canvas to inspect its parameters and backlinks.</p>
            )}
          </div>

          {/* Quick Tip */}
          <div className="mt-6 pt-4 border-t border-gray-800 text-xs text-gray-400 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Nodes with more backlinks pull closer together via force physics!</span>
          </div>
        </div>

      </div>

    </section>
  );
};
