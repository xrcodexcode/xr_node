import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import {
  Folder,
  FolderOpen,
  FileText,
  Search,
  Plus,
  RefreshCw,
  Save,
  Copy,
  Check,
  ExternalLink,
  Eye,
  Edit3,
  Columns,
  Link2,
  Tag,
  Clock,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Layers,
  Network,
  Maximize2,
  ArrowRight,
  Shield,
  HelpCircle,
  FileCode,
  X
} from 'lucide-react'

interface VaultFile {
  slug: string;
  title: string;
  folder?: string;
  relative_path: string;
  type: string;
  status: string;
  tags?: string[];
  word_count: number;
  backlinks_count: number;
  links_count: number;
}

interface VaultFolder {
  name: string;
  count: number;
  files: VaultFile[];
}

interface NoteDetail extends VaultFile {
  id?: string;
  domain?: string;
  created?: string;
  confidence?: number;
  owner_moc?: string;
  summary?: string;
  content?: string;
  raw_text?: string;
  links?: { target: string; target_slug: string; alias?: string }[];
  backlinks?: { source_slug: string; source_title: string; alias?: string }[];
}

export default function ObsidianWorkspace() {
  const [tree, setTree] = useState<VaultFolder[]>([])
  const [loadingTree, setLoadingTree] = useState(false)
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['03_MOC', 'NODES', '02_NEW-KNOWLEDGE']))
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFolderFilter, setSelectedFolderFilter] = useState('all')

  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [activeNote, setActiveNote] = useState<NoteDetail | null>(null)
  const [loadingNote, setLoadingNote] = useState(false)
  const [editorText, setEditorText] = useState('')
  const [viewMode, setViewMode] = useState<'preview' | 'source' | 'split'>('preview')
  const [saving, setSaving] = useState(false)
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null)
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedMd, setCopiedMd] = useState(false)
  const [showProperties, setShowProperties] = useState(true)

  // Right sidebar tab
  const [inspectorTab, setInspectorTab] = useState<'backlinks' | 'outgoing' | 'localgraph'>('backlinks')

  // Local graph canvas
  const localGraphCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const [localGraphData, setLocalGraphData] = useState<{ nodes: any[]; edges: any[] } | null>(null)

  // New Note Modal
  const [showNewModal, setShowNewModal] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newFolder, setNewFolder] = useState('NODES')
  const [newExplanation, setNewExplanation] = useState('')
  const [newDomain, setNewDomain] = useState('computer-science')
  const [creating, setCreating] = useState(false)

  const fetchTree = async () => {
    setLoadingTree(true)
    try {
      const res = await fetch('/api/v1/knowledge/tree').then(r => r.json())
      if (Array.isArray(res)) {
        setTree(res)
        // Set initial note if none selected
        if (!activeSlug && res.length > 0 && res[0].files.length > 0) {
          loadNote(res[0].files[0].slug)
        }
      }
    } catch (e) {
      console.error('Failed to load tree:', e)
    } finally {
      setLoadingTree(false)
    }
  }

  useEffect(() => {
    fetchTree()
  }, [])

  const loadNote = async (slug: string) => {
    if (!slug) return
    setActiveSlug(slug)
    setLoadingNote(true)
    setSaveFeedback(null)
    try {
      const res = await fetch(`/api/v1/knowledge/notes/${encodeURIComponent(slug)}`).then(r => r.json())
      setActiveNote(res)
      setEditorText(res.raw_text || res.content || '')

      // Also load local graph
      const lgRes = await fetch(`/api/v1/knowledge/notes/${encodeURIComponent(slug)}/local-graph`).then(r => r.json())
      setLocalGraphData(lgRes)
    } catch (e) {
      console.error('Failed to load note:', e)
    } finally {
      setLoadingNote(false)
    }
  }

  const toggleFolder = (name: string) => {
    setExpandedFolders(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  const handleSaveNote = async () => {
    if (!activeSlug) return
    setSaving(true)
    try {
      const res = await fetch(`/api/v1/knowledge/notes/${encodeURIComponent(activeSlug)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ raw_text: editorText })
      }).then(r => r.json())

      setActiveNote(res)
      setSaveFeedback('Note saved to vault.')
      setTimeout(() => setSaveFeedback(null), 3000)
      fetchTree()
    } catch (e) {
      console.error(e)
      setSaveFeedback('Save error.')
    } finally {
      setSaving(false)
    }
  }

  const handleCopyWikilink = () => {
    if (!activeNote) return
    navigator.clipboard.writeText(`[[${activeNote.title}]]`)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(editorText)
    setCopiedMd(true)
    setTimeout(() => setCopiedMd(false), 2000)
  }

  const handleCreateNewNote = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTitle.trim()) return

    setCreating(true)
    try {
      const res = await fetch('/api/v1/knowledge/nodes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTitle.trim(),
          explanation: newExplanation.trim() || `Core concept explanation for ${newTitle}.`,
          domain: newDomain,
          tags: ["concept", "atomic-note"],
          owner_moc: "[[Computer Science MOC]]"
        })
      }).then(r => r.json())

      setShowNewModal(false)
      setNewTitle('')
      setNewExplanation('')
      await fetchTree()
      if (res.slug) {
        loadNote(res.slug)
      }
    } catch (e) {
      console.error('Failed to create note:', e)
    } finally {
      setCreating(false)
    }
  }

  // Draw local graph on canvas
  useEffect(() => {
    const canvas = localGraphCanvasRef.current
    if (!canvas || !localGraphData || !localGraphData.nodes || localGraphData.nodes.length === 0) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const cx = width / 2
    const cy = height / 2

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#0a0a0f'
    ctx.fillRect(0, 0, width, height)

    const nodes = localGraphData.nodes
    const edges = localGraphData.edges

    // Arrange nodes circularly around center
    const nodeCoords: { [key: string]: { x: number; y: number; title: string; isActive: boolean; folder: string } } = {}
    const others = nodes.filter(n => !n.isActive)
    
    // Center node
    nodeCoords[localGraphData.nodes.find(n => n.isActive)?.id || 'center'] = {
      x: cx,
      y: cy,
      title: activeNote?.title || 'Active Note',
      isActive: true,
      folder: activeNote?.folder || 'NODES'
    }

    others.forEach((n, idx) => {
      const angle = (idx / others.length) * Math.PI * 2
      const radius = Math.min(width, height) * 0.38
      nodeCoords[n.id] = {
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
        title: n.title,
        isActive: false,
        folder: n.folder
      }
    })

    // Draw Edges
    edges.forEach(e => {
      const s = nodeCoords[e.source]
      const t = nodeCoords[e.target]
      if (s && t) {
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)'
        ctx.lineWidth = 1.2
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(t.x, t.y)
        ctx.stroke()
      }
    })

    // Draw Nodes
    Object.keys(nodeCoords).forEach(id => {
      const n = nodeCoords[id]
      ctx.beginPath()
      ctx.arc(n.x, n.y, n.isActive ? 7 : 4.5, 0, Math.PI * 2)
      ctx.fillStyle = n.isActive ? '#a855f7' : (n.folder === '03_MOC' ? '#c084fc' : '#06b6d4')
      ctx.fill()
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = n.isActive ? 2 : 1
      ctx.stroke()

      // Node label
      ctx.fillStyle = n.isActive ? '#ffffff' : '#9ca3af'
      ctx.font = n.isActive ? 'bold 10px Plus Jakarta Sans, sans-serif' : '9px JetBrains Mono, monospace'
      ctx.textAlign = 'center'
      ctx.fillText(n.title.length > 18 ? n.title.substring(0, 16) + '...' : n.title, n.x, n.y + (n.isActive ? 16 : 14))
    })
  }, [localGraphData, inspectorTab])

  // Filtered files for search
  const filteredTree = useMemo(() => {
    if (!searchQuery.trim() && selectedFolderFilter === 'all') return tree

    return tree
      .map(folder => {
        if (selectedFolderFilter !== 'all' && folder.name.toLowerCase() !== selectedFolderFilter.toLowerCase()) {
          return null
        }
        const filteredFiles = folder.files.filter(f =>
          f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (f.tags && f.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())))
        )
        if (filteredFiles.length === 0) return null
        return {
          ...folder,
          count: filteredFiles.length,
          files: filteredFiles
        }
      })
      .filter(Boolean) as VaultFolder[]
  }, [tree, searchQuery, selectedFolderFilter])

  // Simple Markdown Parser with Wikilink & Callout Replacement
  const renderFormattedMarkdown = (raw: string) => {
    if (!raw) return null

    // Strip Frontmatter
    let content = raw
    if (content.startsWith('---')) {
      const endIdx = content.indexOf('---', 3)
      if (endIdx !== -1) {
        content = content.substring(endIdx + 3).trim()
      }
    }

    const lines = content.split('\n')
    return (
      <div className="space-y-3 font-sans text-xs text-zinc-300 leading-relaxed">
        {lines.map((line, i) => {
          // Headers
          if (line.startsWith('# ')) {
            return <h1 key={i} className="text-xl font-bold text-white tracking-tight pt-3 border-b border-zinc-800 pb-2">{line.replace('# ', '')}</h1>
          }
          if (line.startsWith('## ')) {
            return <h2 key={i} className="text-base font-bold text-zinc-100 tracking-tight pt-2 border-b border-zinc-800/60 pb-1 flex items-center gap-2">{line.replace('## ', '')}</h2>
          }
          if (line.startsWith('### ')) {
            return <h3 key={i} className="text-sm font-semibold text-cyan-400 pt-1">{line.replace('### ', '')}</h3>
          }

          // Callouts (Obsidian style > [!NOTE])
          if (line.startsWith('> [!')) {
            const calloutType = line.match(/> \[!(\w+)\]/)?.[1] || 'NOTE'
            return (
              <div key={i} className="p-3 bg-purple-500/10 border-l-4 border-purple-500 rounded-r-xl text-purple-200 font-mono text-[11px]">
                <strong className="uppercase text-purple-400 block mb-1">[{calloutType}]</strong>
              </div>
            )
          }

          // Blockquote
          if (line.startsWith('> ')) {
            return (
              <blockquote key={i} className="border-l-2 border-cyan-500/60 pl-3 italic text-zinc-400 font-mono text-[11px] my-1">
                {line.replace('> ', '')}
              </blockquote>
            )
          }

          // Code Block fences
          if (line.startsWith('```')) {
            return <div key={i} className="text-[10px] text-zinc-500 font-mono pt-1">{line}</div>
          }

          // Bullet point
          if (line.startsWith('- ') || line.startsWith('* ')) {
            const itemText = line.substring(2)
            return (
              <li key={i} className="ml-4 list-disc text-zinc-300">
                {parseInlineWikilinks(itemText)}
              </li>
            )
          }

          // Horizontal rule
          if (line === '---') {
            return <hr key={i} className="border-zinc-800 my-4" />
          }

          // Empty line
          if (!line.trim()) {
            return <div key={i} className="h-1" />
          }

          // Default paragraph
          return <p key={i} className="text-zinc-300">{parseInlineWikilinks(line)}</p>
        })}
      </div>
    )
  }

  // Parses [[Wikilinks]] into clickable elements
  const parseInlineWikilinks = (text: string) => {
    const parts = text.split(/(\[\[.*?\]\])/g)
    return parts.map((part, idx) => {
      if (part.startsWith('[[') && part.endsWith(']]')) {
        const rawInner = part.slice(2, -2)
        const [target, alias] = rawInner.split('|')
        const targetSlug = target.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^a-z0-9-]/g, '')
        return (
          <span
            key={idx}
            onClick={() => loadNote(targetSlug)}
            className="text-purple-400 hover:text-purple-300 underline font-mono cursor-pointer font-medium px-1 py-0.5 bg-purple-500/10 rounded transition-colors"
          >
            [[{alias || target}]]
          </span>
        )
      }
      return part
    })
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto h-[calc(100vh-6rem)] flex flex-col">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-shrink-0">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-400 font-serif text-lg">◈</span>
            Obsidian Vault Explorer & Markdown Workspace
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Full-featured personal knowledge workspace with flat atomic nodes, MOC links, properties, and local graphs.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNewModal(true)}
            className="bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Note</span>
          </button>

          <button
            onClick={fetchTree}
            className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 p-2 rounded-xl transition-colors"
            title="Refresh Vault Index"
          >
            <RefreshCw className={`w-4 h-4 ${loadingTree ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* 3-Column Obsidian Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0 overflow-hidden">
        {/* Column 1: Vault File Explorer Tree (3 cols) */}
        <div className="lg:col-span-3 bg-[#121215] border border-zinc-800/90 rounded-2xl flex flex-col overflow-hidden shadow-xl">
          {/* Explorer Search & Filters */}
          <div className="p-3 border-b border-zinc-800 space-y-2 flex-shrink-0">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Filter notes, tags, MOCs..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white pl-8 pr-2.5 py-1.5 rounded-xl focus:outline-none focus:border-purple-500 font-mono placeholder:text-zinc-600"
              />
            </div>

            <div className="flex gap-1 overflow-x-auto pb-1 text-[10px] font-mono">
              {['all', '03_MOC', 'NODES', '02_NEW-KNOWLEDGE'].map(f => (
                <button
                  key={f}
                  onClick={() => setSelectedFolderFilter(f)}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    selectedFolderFilter === f
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40 font-semibold'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {f === '03_MOC' ? 'MOC' : (f === '02_NEW-KNOWLEDGE' ? 'NEW' : f)}
                </button>
              ))}
            </div>
          </div>

          {/* Folder Tree List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1 font-mono text-xs">
            {filteredTree.length === 0 ? (
              <div className="text-center py-10 text-zinc-500 font-sans text-xs">
                No matching notes found.
              </div>
            ) : (
              filteredTree.map(folder => {
                const isExpanded = expandedFolders.has(folder.name)
                return (
                  <div key={folder.name} className="space-y-0.5">
                    {/* Folder Header */}
                    <div
                      onClick={() => toggleFolder(folder.name)}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-zinc-900/60 cursor-pointer text-zinc-400 hover:text-white transition-colors"
                    >
                      <div className="flex items-center gap-1.5">
                        {isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-zinc-500" /> : <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />}
                        {isExpanded ? <FolderOpen className="w-3.5 h-3.5 text-purple-400" /> : <Folder className="w-3.5 h-3.5 text-zinc-500" />}
                        <span className="font-bold text-[11px] text-zinc-200">{folder.name}</span>
                      </div>
                      <span className="text-[10px] bg-zinc-800/80 px-1.5 py-0.5 rounded text-zinc-500">{folder.count}</span>
                    </div>

                    {/* Files inside folder */}
                    {isExpanded && (
                      <div className="pl-4 space-y-0.5 border-l border-zinc-800/80 ml-3 my-0.5">
                        {folder.files.map(file => {
                          const isCurrent = activeSlug === file.slug
                          return (
                            <div
                              key={file.slug}
                              onClick={() => loadNote(file.slug)}
                              className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg cursor-pointer text-[11px] transition-all ${
                                isCurrent
                                  ? 'bg-purple-500/15 text-purple-300 font-semibold border border-purple-500/30'
                                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 truncate">
                                <FileText className={`w-3 h-3 flex-shrink-0 ${isCurrent ? 'text-purple-400' : 'text-zinc-600'}`} />
                                <span className="truncate">{file.title}</span>
                              </div>
                              <span className="text-[9px] text-zinc-600 font-mono">{file.backlinks_count > 0 ? `←${file.backlinks_count}` : ''}</span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })
            )}
          </div>
        </div>

        {/* Column 2: Markdown Live Viewer & Editor (6 cols) */}
        <div className="lg:col-span-6 bg-[#121215] border border-zinc-800/90 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
          {activeNote ? (
            <>
              {/* Note Top Toolbar */}
              <div className="p-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/40 flex-shrink-0">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-purple-400 font-serif text-sm">◈</span>
                  <div className="truncate">
                    <h3 className="text-sm font-bold text-white truncate">{activeNote.title}</h3>
                    <p className="text-[10px] text-zinc-500 font-mono truncate">{activeNote.relative_path}</p>
                  </div>
                </div>

                {/* Editor Action Buttons */}
                <div className="flex items-center gap-1.5">
                  {/* View mode toggle */}
                  <div className="bg-zinc-900 border border-zinc-800 p-0.5 rounded-lg flex items-center text-zinc-400">
                    <button
                      onClick={() => setViewMode('preview')}
                      className={`p-1.5 rounded-md transition-colors ${viewMode === 'preview' ? 'bg-purple-500/20 text-purple-400' : 'hover:text-white'}`}
                      title="Preview Mode"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setViewMode('source')}
                      className={`p-1.5 rounded-md transition-colors ${viewMode === 'source' ? 'bg-purple-500/20 text-purple-400' : 'hover:text-white'}`}
                      title="Source Mode (Edit)"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setViewMode('split')}
                      className={`p-1.5 rounded-md transition-colors ${viewMode === 'split' ? 'bg-purple-500/20 text-purple-400' : 'hover:text-white'}`}
                      title="Split Mode"
                    >
                      <Columns className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleCopyWikilink}
                    className="p-1.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg text-[10px] font-mono flex items-center gap-1"
                    title="Copy [[Wikilink]]"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Link2 className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={handleCopyMarkdown}
                    className="p-1.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg text-[10px] font-mono flex items-center gap-1"
                    title="Copy Markdown Content"
                  >
                    {copiedMd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={handleSaveNote}
                    disabled={saving}
                    className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(168,85,247,0.3)] disabled:opacity-50"
                  >
                    <Save className="w-3 h-3" />
                    <span>{saving ? 'Saving...' : 'Save'}</span>
                  </button>
                </div>
              </div>

              {saveFeedback && (
                <div className="bg-emerald-500/10 border-b border-emerald-500/30 text-emerald-400 px-4 py-1.5 text-[11px] font-mono flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>{saveFeedback}</span>
                </div>
              )}

              {/* Obsidian Frontmatter Properties Drawer */}
              <div className="border-b border-zinc-800 bg-zinc-900/20 text-xs flex-shrink-0">
                <div
                  onClick={() => setShowProperties(!showProperties)}
                  className="px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-zinc-900/40 text-zinc-400"
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                    {showProperties ? <ChevronDown className="w-3.5 h-3.5 text-purple-400" /> : <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />}
                    Obsidian Properties
                  </span>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                    <span>{activeNote.type}</span>
                    <span>•</span>
                    <span>{activeNote.word_count} words</span>
                  </div>
                </div>

                {showProperties && (
                  <div className="p-3.5 pt-0 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono">
                    <div className="bg-black/30 p-2 rounded-lg border border-zinc-800/80">
                      <span className="text-zinc-500 block">TYPE</span>
                      <span className="text-purple-400 font-semibold">{activeNote.type}</span>
                    </div>
                    <div className="bg-black/30 p-2 rounded-lg border border-zinc-800/80">
                      <span className="text-zinc-500 block">STATUS</span>
                      <span className="text-emerald-400 font-semibold uppercase">{activeNote.status}</span>
                    </div>
                    <div className="bg-black/30 p-2 rounded-lg border border-zinc-800/80">
                      <span className="text-zinc-500 block">CONFIDENCE</span>
                      <span className="text-cyan-400 font-semibold">{activeNote.confidence || 90}%</span>
                    </div>
                    <div className="bg-black/30 p-2 rounded-lg border border-zinc-800/80">
                      <span className="text-zinc-500 block">OWNER MOC</span>
                      <span className="text-purple-300 font-semibold truncate block">{activeNote.owner_moc || 'none'}</span>
                    </div>

                    <div className="col-span-2 sm:col-span-4 flex items-center gap-1.5 flex-wrap pt-1">
                      <span className="text-zinc-500 text-[9px]">TAGS:</span>
                      {(activeNote.tags || []).map(t => (
                        <span key={t} className="bg-zinc-800/90 text-zinc-300 border border-zinc-700/60 px-2 py-0.5 rounded text-[9px]">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Note Content Viewport (Preview, Source, Split) */}
              <div className="flex-1 overflow-y-auto p-5">
                {viewMode === 'preview' && renderFormattedMarkdown(editorText)}

                {viewMode === 'source' && (
                  <textarea
                    value={editorText}
                    onChange={e => setEditorText(e.target.value)}
                    className="w-full h-full bg-black/40 border border-zinc-800/80 rounded-xl p-4 font-mono text-xs text-zinc-200 focus:outline-none focus:border-purple-500 resize-none leading-relaxed"
                  />
                )}

                {viewMode === 'split' && (
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <textarea
                      value={editorText}
                      onChange={e => setEditorText(e.target.value)}
                      className="w-full h-full bg-black/40 border border-zinc-800/80 rounded-xl p-4 font-mono text-xs text-zinc-200 focus:outline-none focus:border-purple-500 resize-none leading-relaxed"
                    />
                    <div className="border border-zinc-800/80 bg-black/20 rounded-xl p-4 overflow-y-auto">
                      {renderFormattedMarkdown(editorText)}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-zinc-500 font-sans text-xs">
              Select any note from the vault file tree to open.
            </div>
          )}
        </div>

        {/* Column 3: Obsidian Inspector (Backlinks, Links, Local Graph) (3 cols) */}
        <div className="lg:col-span-3 bg-[#121215] border border-zinc-800/90 rounded-2xl flex flex-col overflow-hidden shadow-xl">
          {/* Inspector Tab Switcher */}
          <div className="p-2 border-b border-zinc-800 flex items-center justify-around text-xs font-mono bg-zinc-900/40 flex-shrink-0">
            {[
              { id: 'backlinks', label: 'Backlinks', count: (activeNote?.backlinks || []).length },
              { id: 'outgoing', label: 'Outgoing', count: (activeNote?.links || []).length },
              { id: 'localgraph', label: 'Local Graph' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setInspectorTab(tab.id as any)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  inspectorTab === tab.id
                    ? 'bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && <span className="ml-1 text-[10px] text-zinc-400">({tab.count})</span>}
              </button>
            ))}
          </div>

          {/* Inspector Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
            {inspectorTab === 'backlinks' && (
              <div className="space-y-2">
                <span className="text-[10px] text-zinc-500 uppercase block mb-1">Incoming Mentions:</span>
                {(activeNote?.backlinks || []).length === 0 ? (
                  <div className="text-zinc-600 text-[11px] py-6 text-center">No incoming backlinks.</div>
                ) : (
                  (activeNote?.backlinks || []).map((b, i) => (
                    <div
                      key={i}
                      onClick={() => loadNote(b.source_slug)}
                      className="p-2.5 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 rounded-xl cursor-pointer transition-colors text-[11px] text-purple-300 flex items-center justify-between"
                    >
                      <span className="truncate">← {b.source_title}</span>
                      <ChevronRight className="w-3 h-3 text-zinc-600" />
                    </div>
                  ))
                )}
              </div>
            )}

            {inspectorTab === 'outgoing' && (
              <div className="space-y-2">
                <span className="text-[10px] text-zinc-500 uppercase block mb-1">Outgoing [[Wikilinks]]:</span>
                {(activeNote?.links || []).length === 0 ? (
                  <div className="text-zinc-600 text-[11px] py-6 text-center">No outgoing links.</div>
                ) : (
                  (activeNote?.links || []).map((l, i) => (
                    <div
                      key={i}
                      onClick={() => loadNote(l.target_slug)}
                      className="p-2.5 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 rounded-xl cursor-pointer transition-colors text-[11px] text-cyan-400 flex items-center justify-between"
                    >
                      <span className="truncate">[[{l.target}]]</span>
                      <ChevronRight className="w-3 h-3 text-zinc-600" />
                    </div>
                  ))
                )}
              </div>
            )}

            {inspectorTab === 'localgraph' && (
              <div className="space-y-3 flex flex-col items-center justify-center">
                <canvas
                  ref={localGraphCanvasRef}
                  width={240}
                  height={240}
                  className="w-full h-[240px] rounded-xl border border-zinc-800 bg-[#0a0a0f]"
                />
                <div className="text-[10px] text-zinc-500 text-center font-mono">
                  <span>1-hop Neighborhood Focus</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* New Note Creation Modal */}
      {showNewModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#121215] border border-zinc-800 rounded-2xl w-full max-w-lg p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-purple-400 font-serif">◈</span>
                Create New Atomic Note (Schema v4)
              </h3>
              <button onClick={() => setShowNewModal(false)} className="text-zinc-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateNewNote} className="space-y-3 text-xs font-mono">
              <div>
                <label className="text-[10px] text-zinc-400 block mb-1">NOTE TITLE (CANONICAL)</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="e.g. Vector Quantization"
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-3.5 py-2 rounded-xl focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-[10px] text-zinc-400 block mb-1">DOMAIN</label>
                <input
                  type="text"
                  value={newDomain}
                  onChange={e => setNewDomain(e.target.value)}
                  placeholder="e.g. artificial-intelligence"
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-3.5 py-2 rounded-xl focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-[10px] text-zinc-400 block mb-1">EXPLANATION / DEFINITION</label>
                <textarea
                  value={newExplanation}
                  onChange={e => setNewExplanation(e.target.value)}
                  placeholder="Write single atomic concept definition or explanation..."
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white p-3 rounded-xl focus:outline-none focus:border-purple-500 resize-none leading-relaxed"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewModal(false)}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl flex items-center gap-1.5 shadow-[0_0_12px_rgba(168,85,247,0.3)] disabled:opacity-50"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{creating ? 'Creating...' : 'Create Note'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
