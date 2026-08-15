import React, { useState, useEffect } from 'react'
import {
  Youtube,
  Sparkles,
  Zap,
  Play,
  CheckCircle,
  Copy,
  Check,
  Save,
  BookOpen,
  Clock,
  ArrowRight,
  TrendingUp,
  Flame,
  Code2,
  Share2,
  FileText,
  Loader2,
  Layers,
  ChevronRight
} from 'lucide-react'

interface CreatorPreset {
  id: string;
  creator: string;
  channel: string;
  avatar: string;
  category: string;
  title: string;
  url: string;
  duration: string;
  summary: string;
  tags: string[];
  recommended_agent: string;
}

export default function CreatorStudio() {
  const [activeSubTab, setActiveSubTab] = useState<'ingest' | 'explainer' | 'radar'>('ingest')
  const [presets, setPresets] = useState<CreatorPreset[]>([])
  const [videoUrl, setVideoUrl] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const [selectedCreator, setSelectedCreator] = useState('Andrej Karpathy')
  const [selectedAgent, setSelectedAgent] = useState('antigravity')
  const [loading, setLoading] = useState(false)
  const [ingestionResult, setIngestionResult] = useState<any | null>(null)
  const [saveStatus, setSaveStatus] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  // 100s Explainer State
  const [explainerTopic, setExplainerTopic] = useState('Retrieval-Augmented Generation (RAG)')
  const [explainerResult, setExplainerResult] = useState<any | null>(null)
  const [explainerLoading, setExplainerLoading] = useState(false)

  useEffect(() => {
    fetch('/api/v1/creator/feed')
      .then(r => r.json())
      .then(data => {
        if (data.creators) {
          setPresets(data.creators)
          if (data.creators.length > 0) {
            setVideoTitle(data.creators[0].title)
            setVideoUrl(data.creators[0].url)
            setSelectedCreator(data.creators[0].creator)
          }
        }
      })
      .catch(console.error)
  }, [])

  const handleSelectPreset = (p: CreatorPreset) => {
    setVideoTitle(p.title)
    setVideoUrl(p.url)
    setSelectedCreator(p.creator)
    setSelectedAgent(p.recommended_agent)
    setActiveSubTab('ingest')
  }

  const handleIngest = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!videoTitle && !videoUrl) return

    setLoading(true)
    setSaveStatus(null)
    try {
      const res = await fetch('/api/v1/creator/youtube/ingest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: videoTitle,
          url: videoUrl,
          creator: selectedCreator,
          agent_id: selectedAgent
        })
      }).then(r => r.json())
      setIngestionResult(res)
    } catch (e) {
      console.error('Ingestion failed:', e)
    } finally {
      setLoading(false)
    }
  }

  const handleSaveToVault = async (targetFolder: string) => {
    if (!ingestionResult) return
    setSaveStatus('saving')
    try {
      const res = await fetch('/api/v1/creator/save-draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: ingestionResult.filename,
          content: ingestionResult.content,
          target_folder: targetFolder
        })
      }).then(r => r.json())

      if (res.status === 'SAVED') {
        setSaveStatus(`Saved to ${res.relative_path} (${res.bytes_written} bytes)`)
      }
    } catch (e) {
      console.error(e)
      setSaveStatus('Failed to save to vault.')
    }
  }

  const handleGenerateExplainer = async (e?: React.FormEvent, customTopic?: string) => {
    if (e) e.preventDefault()
    const topic = customTopic || explainerTopic
    if (!topic.trim()) return

    setExplainerLoading(true)
    try {
      const res = await fetch('/api/v1/creator/explainer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim() })
      }).then(r => r.json())
      setExplainerResult(res)
    } catch (e) {
      console.error('Explainer generation failed:', e)
    } finally {
      setExplainerLoading(false)
    }
  }

  const handleCopyMarkdown = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Youtube className="w-5 h-5 text-red-500" />
            Creator & YouTube Knowledge Studio
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Turn top tech creator lectures into high-fidelity NexusDB study notes, diagrams, and 100s explainers.
          </p>
        </div>

        {/* Sub-tab Navigation */}
        <div className="flex items-center bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
          {[
            { id: 'ingest', label: 'Video Ingestion', icon: Youtube },
            { id: 'explainer', label: '100s Explainer', icon: Flame },
            { id: 'radar', label: 'Creator Pulse', icon: TrendingUp }
          ].map(tab => {
            const Icon = tab.icon
            const active = activeSubTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  active
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Sub-tab 1: Video Ingestion Engine */}
      {activeSubTab === 'ingest' && (
        <div className="space-y-6">
          {/* Form & Presets Card */}
          <div className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                <Zap className="w-4 h-4 text-cyan-400" />
                Ingest Video Lecture / Transcript
              </h3>
              <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded">
                Schema v4 Literature Pipeline
              </span>
            </div>

            {/* Quick Presets Carousel */}
            <div>
              <span className="text-[10px] text-zinc-500 font-mono uppercase block mb-2">Featured Creator Presets:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {presets.map(p => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectPreset(p)}
                    className="bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 p-2.5 rounded-xl cursor-pointer transition-all flex items-center gap-2.5 group"
                  >
                    <span className="text-xl">{p.avatar}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white truncate group-hover:text-cyan-400 transition-colors">
                          {p.creator}
                        </span>
                        <span className="text-[9px] font-mono text-zinc-500">{p.duration}</span>
                      </div>
                      <p className="text-[10px] text-zinc-400 truncate">{p.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingestion Form */}
            <form onSubmit={handleIngest} className="space-y-3 pt-3 border-t border-zinc-800/80">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2">
                  <label className="text-[10px] text-zinc-400 font-mono block mb-1">VIDEO TITLE / TOPIC</label>
                  <input
                    type="text"
                    value={videoTitle}
                    onChange={e => setVideoTitle(e.target.value)}
                    placeholder="e.g. Intro to Large Language Models (Andrej Karpathy)"
                    className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-zinc-400 font-mono block mb-1">CREATOR / SPEAKER</label>
                  <input
                    type="text"
                    value={selectedCreator}
                    onChange={e => setSelectedCreator(e.target.value)}
                    placeholder="e.g. Andrej Karpathy"
                    className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2">
                  <label className="text-[10px] text-zinc-400 font-mono block mb-1">YOUTUBE URL</label>
                  <input
                    type="text"
                    value={videoUrl}
                    onChange={e => setVideoUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-zinc-400 font-mono block mb-1">DISPATCH TO AGENT</label>
                  <select
                    value={selectedAgent}
                    onChange={e => setSelectedAgent(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 text-xs text-cyan-400 px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500 font-mono"
                  >
                    <option value="antigravity">🪐 Antigravity (Ingestion Engine)</option>
                    <option value="claude-code">🤖 Claude Code (Code Analyst)</option>
                    <option value="hermes">🏛️ Hermes Agent (Reasoning)</option>
                    <option value="codex">🧠 Codex (Algorithms)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-red-600 hover:bg-red-500 text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)] flex items-center gap-2 disabled:opacity-50 font-mono"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                  <span>Deconstruct & Ingest Video</span>
                </button>
              </div>
            </form>
          </div>

          {/* Ingestion Results Preview */}
          {ingestionResult && (
            <div className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-6 space-y-6 animate-fadeIn shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800">
                <div>
                  <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                    TRANSFORMATION COMPLETE • CONFIDENCE {ingestionResult.confidence}%
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">{ingestionResult.title}</h3>
                  <p className="text-xs text-zinc-400 font-mono">{ingestionResult.creator} • {ingestionResult.filename}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyMarkdown(ingestionResult.content)}
                    className="px-3 py-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 font-mono rounded-xl flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Markdown'}</span>
                  </button>

                  <button
                    onClick={() => handleSaveToVault('02_NEW-KNOWLEDGE')}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold font-mono rounded-xl flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save to 02_NEW-KNOWLEDGE</span>
                  </button>
                </div>
              </div>

              {saveStatus && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-3 rounded-xl text-xs font-mono flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>{saveStatus}</span>
                </div>
              )}

              {/* Study Note Markdown Preview */}
              <div className="bg-black/60 border border-zinc-800 rounded-xl p-5 font-mono text-xs text-zinc-200 whitespace-pre-wrap max-h-[500px] overflow-y-auto leading-relaxed">
                {ingestionResult.content}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sub-tab 2: Fireship 100-Second Code Explainer */}
      {activeSubTab === 'explainer' && (
        <div className="space-y-6">
          <div className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                <Flame className="w-4 h-4 text-amber-500" />
                Fireship-style 100-Second Concept & Code Explainer
              </h3>
              <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">
                High-Velocity Synthesis
              </span>
            </div>

            {/* Quick Topic Chips */}
            <div>
              <span className="text-[10px] text-zinc-500 font-mono uppercase block mb-2">Try Explaining:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Retrieval-Augmented Generation (RAG)",
                  "Vector Embeddings & Cosine Similarity",
                  "Graph Neural Networks (GNN)",
                  "FastAPI Async Concurrency",
                  "Autonomous ReAct Loops",
                  "Obsidian Flat Atomic Notes",
                  "Transformer Multi-Head Attention"
                ].map(t => (
                  <button
                    key={t}
                    onClick={() => {
                      setExplainerTopic(t)
                      handleGenerateExplainer(undefined, t)
                    }}
                    className="bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1"
                  >
                    <span>{t}</span>
                    <ArrowRight className="w-3 h-3 text-zinc-500" />
                  </button>
                ))}
              </div>
            </div>

            {/* Explainer Prompt Form */}
            <form onSubmit={handleGenerateExplainer} className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-zinc-800/80">
              <input
                type="text"
                value={explainerTopic}
                onChange={e => setExplainerTopic(e.target.value)}
                placeholder="Enter any topic or code pattern... e.g. SQLite WAL Mode"
                className="flex-1 bg-zinc-900 border border-zinc-800 text-xs text-white px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 font-mono"
              />
              <button
                type="submit"
                disabled={explainerLoading}
                className="bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs px-6 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 font-mono"
              >
                {explainerLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Flame className="w-4 h-4" />}
                <span>Explain in 100s</span>
              </button>
            </form>
          </div>

          {/* Explainer Output Display */}
          {explainerResult && (
            <div className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-6 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-mono text-amber-400 font-bold flex items-center gap-1.5">
                  <Flame className="w-4 h-4" />
                  {explainerResult.topic}
                </span>
                <button
                  onClick={() => handleCopyMarkdown(explainerResult.content)}
                  className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 font-mono rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="bg-black/60 border border-zinc-800 rounded-xl p-5 font-mono text-xs text-zinc-200 whitespace-pre-wrap leading-relaxed">
                {explainerResult.content}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sub-tab 3: Creator Pulse & AI Radar */}
      {activeSubTab === 'radar' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {presets.map(p => (
              <div
                key={p.id}
                className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-zinc-700 transition-all hover:scale-[1.01]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{p.avatar}</span>
                      <div>
                        <h4 className="font-bold text-white text-sm">{p.creator}</h4>
                        <p className="text-[10px] text-zinc-400 font-mono">{p.category}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-zinc-400">
                      {p.duration}
                    </span>
                  </div>

                  <div>
                    <h5 className="font-bold text-cyan-400 text-xs mt-1">{p.title}</h5>
                    <p className="text-xs text-zinc-300 mt-1 leading-relaxed">{p.summary}</p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {p.tags.map(t => (
                      <span key={t} className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded text-[10px] font-mono">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500">
                    Agent: <strong className="text-cyan-400">{p.recommended_agent.toUpperCase()}</strong>
                  </span>
                  <button
                    onClick={() => handleSelectPreset(p)}
                    className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <span>Ingest Topic</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
