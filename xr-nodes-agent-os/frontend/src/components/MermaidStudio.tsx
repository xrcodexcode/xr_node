import React, { useState, useEffect, useRef } from 'react'
import {
  Layers,
  Sparkles,
  Copy,
  Check,
  Download,
  Share2,
  Workflow,
  Cpu,
  Brain,
  Zap,
  ArrowRight,
  Maximize2,
  AlertTriangle
} from 'lucide-react'

declare global {
  interface Window {
    mermaid?: any;
  }
}

async function getMermaidInstance() {
  if (typeof window !== 'undefined' && window.mermaid) {
    return window.mermaid;
  }
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    let script = document.getElementById('mermaid-cdn-script') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'mermaid-cdn-script';
      script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
      document.head.appendChild(script);
      await new Promise<void>((resolve) => {
        if (script) {
          script.onload = () => resolve();
          script.onerror = () => resolve();
        } else {
          resolve();
        }
      });
    }
    return window.mermaid || null;
  }
  return null;
}

interface DiagramPreset {
  id: string;
  title: string;
  category: string;
  description: string;
  mermaidCode: string;
}

const PRESETS: DiagramPreset[] = [
  {
    id: "react-loop",
    title: "Autonomous Agent ReAct Loop",
    category: "Agent Architecture",
    description: "Reasoning and action loop with permission gates and error correction.",
    mermaidCode: `graph TD
    User["👤 User Request / Prompt"] --> Dispatcher["⚡ System Dispatcher"]
    Dispatcher --> Planner["🧠 Planner Subagent"]
    Planner --> StepPlan["📋 Step-by-Step Action Plan"]
    StepPlan --> Router["🔀 Model Provider Router"]
    Router --> ToolRegistry["🛠️ Tool Registry & Permissions"]
    ToolRegistry --> Sandbox{"🛡️ Permission Gate"}
    Sandbox -- "Approved / Safe" --> Exec["⚙️ Execute Tool in Sandbox"]
    Sandbox -- "Mutate Original (01_RAW)" --> Approval["⚠️ Wait for User Approval"]
    Approval -- "User Confirmed" --> Exec
    Exec --> Memory["💾 Immutable SQLite Ledger"]
    Memory --> Verification{"✅ Result Verified?"}
    Verification -- "No (Self-Correct)" --> Planner
    Verification -- "Yes" --> Response["🚀 Final Verified Output"]`
  },
  {
    id: "knowledge-pipeline",
    title: "NexusDB Zero-RAM Knowledge Ingestion",
    category: "Knowledge Systems",
    description: "Flat atomic knowledge system with Schema v4 and MOC navigation layer.",
    mermaidCode: `graph TD
    RawInput["📥 Incoming YouTube / Web Capture"] --> Capture["01_RAW/CAPTURE (Immutable Original)"]
    Capture --> Processing["01_RAW/PROCESS (Working Draft)"]
    Processing --> Extraction["🧠 Atomic Concept Extraction (Schema v4)"]
    Extraction --> Nodes["02_NODES (Permanent Flat Atomic Concepts)"]
    Extraction --> StudyNotes["02_NEW-KNOWLEDGE (Active Literature Notes)"]
    Nodes --> MOC["03_MOC (Maps of Content Navigation Layer)"]
    StudyNotes --> MOC
    Extraction --> Archiving["01_RAW/SOURCE (Archived Original Provenance)"]`
  },
  {
    id: "lightrag-flow",
    title: "LightRAG Dual-Level Retrieval Architecture",
    category: "Local RAG",
    description: "Dual high-level theme routing and low-level atomic entity match.",
    mermaidCode: `graph TD
    Query["🔍 User Knowledge Query"] --> DualRouter["⚡ Dual-Level Routing Engine"]
    DualRouter --> HighLevel["🟣 High-Level Thematic MOCs (Global Context)"]
    DualRouter --> LowLevel["🔵 Low-Level Atomic Concept Entities (Fine Details)"]
    HighLevel --> GraphContext["🌐 Obsidian Wikilink Graph Traversal"]
    LowLevel --> GraphContext
    GraphContext --> LocalModel["🧠 Local Model Synthesis"]
    LocalModel --> DirectAnswer["✨ Complete Grounded Answer with Provenance"]`
  },
  {
    id: "youtube-studio",
    title: "YouTube Lecture Study Note Pipeline",
    category: "Creator Studio",
    description: "Code-switched transcription to detailed reference note.",
    mermaidCode: `graph TD
    YT["🎥 Tech Creator Lecture / Video"] --> Audio["🔊 Audio Extraction"]
    Audio --> Whisper["🧹 Semantic Transcription"]
    Whisper --> Translation["🌐 Code-Switch Translation (to English)"]
    Translation --> Chunking["⏱️ Timestamp Citation Chunking (MM:SS)"]
    Chunking --> Takeaways["💡 Key Empirical Claims & Takeaways"]
    Chunking --> MermaidGen["📐 Architecture Mindmap Generator"]
    Takeaways & MermaidGen --> NoteGen["📚 Frontmatter Schema v4 Note"]
    NoteGen --> Save["💾 Save to 02_NEW-KNOWLEDGE/"]`
  }
]

export default function MermaidStudio() {
  const [selectedPreset, setSelectedPreset] = useState<DiagramPreset>(PRESETS[0])
  const [copied, setCopied] = useState(false)
  const [copiedSvg, setCopiedSvg] = useState(false)
  const [customMermaid, setCustomMermaid] = useState(PRESETS[0].mermaidCode)
  const [svgContent, setSvgContent] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true;
    const renderDiagram = async () => {
      try {
        setErrorMsg(null);
        const m = await getMermaidInstance();
        if (m) {
          try {
            m.initialize({
              startOnLoad: false,
              theme: 'dark',
              securityLevel: 'loose',
            });
          } catch (_) {}
          const id = `mermaid-svg-${Math.random().toString(36).substr(2, 9)}`;
          const { svg } = await m.render(id, customMermaid);
          if (isMounted) setSvgContent(svg);
        } else {
          // Dynamic offline/loading fallback SVG
          const fallback = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="240" viewBox="0 0 700 240">
            <rect width="100%" height="100%" fill="#121215" rx="16" stroke="#27272a" stroke-width="1"/>
            <circle cx="350" cy="75" r="28" fill="#8b5cf6" opacity="0.15"/>
            <path d="M350 62 L350 88 M337 75 L363 75" stroke="#a78bfa" stroke-width="3" stroke-linecap="round"/>
            <text x="350" y="132" fill="#f4f4f5" font-family="Plus Jakarta Sans, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Mermaid Architecture Visualizer</text>
            <text x="350" y="158" fill="#a1a1aa" font-family="JetBrains Mono, monospace" font-size="12" text-anchor="middle">Code parsed and ready • Connect network or install mermaid to view vector graphics</text>
            <rect x="200" y="180" width="300" height="30" rx="8" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
            <text x="350" y="200" fill="#06b6d4" font-family="JetBrains Mono, monospace" font-size="11" font-weight="bold" text-anchor="middle">${selectedPreset.title}</text>
          </svg>`;
          if (isMounted) setSvgContent(fallback);
        }
      } catch (err: any) {
        if (isMounted) {
          setErrorMsg(err.message || 'Syntax Error in Mermaid code');
        }
      }
    };

    const timeout = setTimeout(renderDiagram, 300);
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [customMermaid, selectedPreset])

  const handleSelect = (p: DiagramPreset) => {
    setSelectedPreset(p)
    setCustomMermaid(p.mermaidCode)
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(customMermaid)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  const handleCopySvg = () => {
    navigator.clipboard.writeText(svgContent)
    setCopiedSvg(true)
    setTimeout(() => setCopiedSvg(false), 2000)
  }

  const handleExportSvg = () => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${selectedPreset.id}-diagram.svg`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Workflow className="w-5 h-5 text-purple-400" />
            System Architecture & Mermaid Visualizer Studio
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Interactive visual flowcharts, agent loops, knowledge ingestion pipelines, and LightRAG diagrams.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopySvg}
            className="px-3.5 py-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 font-mono rounded-xl flex items-center gap-1.5 transition-colors"
          >
            {copiedSvg ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSvg ? 'Copied SVG' : 'Copy SVG'}</span>
          </button>
          <button
            onClick={handleExportSvg}
            className="px-3.5 py-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 font-mono rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export SVG</span>
          </button>
          <button
            onClick={handleCopyCode}
            className="px-3.5 py-2 bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 text-xs text-purple-300 font-mono rounded-xl flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-purple-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Code' : 'Copy Code'}</span>
          </button>
        </div>
      </div>

      {/* Preset Selector Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {PRESETS.map(p => {
          const isSelected = selectedPreset.id === p.id
          return (
            <div
              key={p.id}
              onClick={() => handleSelect(p)}
              className={`bg-[#121215] border rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.01] ${
                isSelected
                  ? 'border-purple-500/60 ring-2 ring-purple-500/30 bg-purple-500/5'
                  : 'border-zinc-800/90 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                  {p.category}
                </span>
              </div>
              <h4 className="font-bold text-white text-sm mt-2">{p.title}</h4>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">{p.description}</p>
            </div>
          )
        })}
      </div>

      {/* Main Mermaid Visualizer & Code Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mermaid Code Editor */}
        <div className="lg:col-span-1 bg-[#121215] border border-zinc-800/90 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
          <div className="space-y-2 flex-1 flex flex-col">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                Mermaid Definition
              </label>
              <span className="text-[10px] font-mono text-zinc-500">graph TD</span>
            </div>
            <textarea
              value={customMermaid}
              onChange={e => setCustomMermaid(e.target.value)}
              className="flex-1 w-full min-h-[360px] bg-black/60 border border-zinc-800 rounded-xl p-3.5 text-xs font-mono text-zinc-200 focus:outline-none focus:border-purple-500 resize-none leading-relaxed"
            />
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Live Sync Enabled</span>
            <button
              onClick={() => setCustomMermaid(selectedPreset.mermaidCode)}
              className="text-purple-400 hover:underline"
            >
              Reset to Preset
            </button>
          </div>
        </div>

        {/* Visual Diagram Representation Viewport */}
        <div className="lg:col-span-2 bg-[#0a0a0f] border border-zinc-800/90 rounded-2xl p-6 relative overflow-hidden flex flex-col shadow-2xl min-h-[460px]">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="font-bold text-white text-sm">{selectedPreset.title}</span>
            </div>
            <span className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full text-zinc-400">
              Live Mermaid Render
            </span>
          </div>

          {/* Diagram Nodes Visual Flow */}
          <div className="flex-1 flex flex-col items-center justify-center overflow-auto bg-black/30 rounded-xl p-4 border border-zinc-800/50">
            {errorMsg ? (
              <div className="text-red-400 flex flex-col items-center gap-2 text-sm p-6 bg-red-950/20 rounded-xl border border-red-900/50">
                <AlertTriangle className="w-6 h-6" />
                <div className="font-mono text-xs whitespace-pre-wrap text-center">{errorMsg}</div>
              </div>
            ) : (
              <div 
                className="w-full flex justify-center text-zinc-200"
                dangerouslySetInnerHTML={{ __html: svgContent }} 
              />
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span>Obsidian Mermaid v10 Compatible</span>
            <span className="text-zinc-400">Zero-RAM Vector Native</span>
          </div>
        </div>
      </div>
    </div>
  )
}
