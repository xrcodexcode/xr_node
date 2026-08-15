import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Search, BookOpen, Link as LinkIcon, Folder, Clock, FileText, ArrowRight, X, Loader2, Copy, Check, ExternalLink, Tag } from 'lucide-react'

interface SearchResult {
  id: string;
  title: string;
  slug: string;
  folder: string;
  relative_path: string;
  type: string;
  status: string;
  confidence: number;
  tags?: string[];
  summary?: string;
  word_count?: number;
  reading_time_minutes?: number;
  backlinks_count?: number;
  links?: { target: string; target_slug: string; alias?: string }[];
}

interface NoteDetail extends SearchResult {
  content?: string;
  raw_text?: string;
  links?: { target: string; target_slug: string; alias?: string }[];
  backlinks?: { source_slug: string; source_title: string; alias?: string }[];
}

export default function KnowledgeQuery() {
  const [query, setQuery] = useState('')
  const [folderFilter, setFolderFilter] = useState('all')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedNote, setSelectedNote] = useState<NoteDetail | null>(null)
  const [loadingNote, setLoadingNote] = useState(false)
  const [copied, setCopied] = useState(false)

  const debounceTimerRef = useRef<any>(null)

  const handleSearch = useCallback(async (q: string, folder: string) => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (q && q.trim()) params.append('q', q.trim())
      if (folder && folder !== 'all') params.append('folder', folder)

      const res = await fetch(`/api/v1/knowledge/search?${params.toString()}`).then(r => r.json())
      setResults(Array.isArray(res) ? res : [])
    } catch (e) {
      console.error('Search failed:', e)
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleSearch('', 'all')
  }, [handleSearch])

  // Debounced input search
  const handleQueryChange = (val: string) => {
    setQuery(val)
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current)
    debounceTimerRef.current = setTimeout(() => {
      handleSearch(val, folderFilter)
    }, 200)
  }

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current)
    handleSearch(query, folderFilter)
  }

  const openNoteDetail = async (slug: string) => {
    if (!slug) return
    setLoadingNote(true)
    try {
      const res = await fetch(`/api/v1/knowledge/notes/${encodeURIComponent(slug)}`).then(r => r.json())
      if (res && res.title) {
        setSelectedNote(res)
      }
    } catch (e) {
      console.error('Failed to load note detail:', e)
    } finally {
      setLoadingNote(false)
    }
  }

  const handleCopyContent = () => {
    if (!selectedNote) return
    const textToCopy = selectedNote.content || selectedNote.raw_text || selectedNote.summary || ''
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          Vault Knowledge Query & Local RAG
        </h2>
        <p className="text-xs text-zinc-400 mt-0.5">High-speed sub-millisecond search across atomic concept nodes, MOC indexes, and study notes in NexusDB.</p>
      </div>

      {/* Query Search Bar */}
      <form onSubmit={onSearchSubmit} className="flex flex-col sm:flex-row gap-3 bg-[#121215] border border-zinc-800/90 p-3.5 rounded-2xl shadow-sm">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search notes, concepts, tags, methods... e.g. neural networks, agent architecture, schema v4"
            value={query}
            onChange={e => handleQueryChange(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white pl-9 pr-3 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500 placeholder:text-zinc-600 transition-colors font-mono"
          />
        </div>

        <select
          value={folderFilter}
          onChange={e => {
            setFolderFilter(e.target.value)
            handleSearch(query, e.target.value)
          }}
          className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-cyan-500 font-mono"
        >
          <option value="all">All Vault Folders</option>
          <option value="NODES">NODES (Atomic)</option>
          <option value="03_MOC">03_MOC (Maps of Content)</option>
          <option value="02_NEW-KNOWLEDGE">02_NEW-KNOWLEDGE</option>
          <option value="NOTES">NOTES (Synthesis)</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs px-5 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)] flex items-center justify-center gap-1.5 disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ArrowRight className="w-3.5 h-3.5" />}
          <span>Query</span>
        </button>
      </form>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
        <span>Found <strong className="text-cyan-400 font-mono">{results.length}</strong> matching notes</span>
        {query && <span className="text-zinc-500 text-[11px]">Filtered by "{query}"</span>}
      </div>

      {/* Results Grid */}
      {results.length === 0 ? (
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-12 text-center text-xs text-zinc-500">
          No matching notes found for query "{query}". Try a different keyword or folder filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map(note => (
            <div
              key={note.slug}
              onClick={() => openNoteDetail(note.slug)}
              className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 space-y-3 hover:border-zinc-700 transition-all hover:scale-[1.01] cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                    {note.folder} / {note.type}
                  </span>
                  <span className="text-zinc-500 text-[10px] font-mono flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    inspect
                  </span>
                </div>

                <h3 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">
                  {note.title}
                </h3>

                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                  {note.summary || 'No summary preview available.'}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {(note.tags || []).slice(0, 3).map(t => (
                    <span key={t} className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">
                      #{t}
                    </span>
                  ))}
                </div>
                <span>{(note.links || []).length} links</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Note Detailed Inspector Modal */}
      {selectedNote && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#121215] border border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/40">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                  {selectedNote.folder} / {selectedNote.type}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">{selectedNote.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyContent}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors font-mono"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
                <button
                  onClick={() => setSelectedNote(null)}
                  className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs leading-relaxed text-zinc-300 font-sans">
              <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-lg font-mono text-[11px] space-y-1">
                <p><span className="text-zinc-500">Path:</span> {selectedNote.relative_path}</p>
                <p><span className="text-zinc-500">Tags:</span> {(selectedNote.tags && selectedNote.tags.length > 0) ? selectedNote.tags.join(', ') : 'none'}</p>
              </div>

              <div className="whitespace-pre-wrap font-mono text-[12px] bg-black/40 p-4 rounded-lg border border-zinc-900 text-zinc-200">
                {selectedNote.content || selectedNote.summary || 'No text content.'}
              </div>

              {/* Wikilinks & Backlinks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-zinc-800 text-[11px]">
                <div>
                  <h5 className="font-bold text-zinc-400 mb-2">Outgoing Links ({(selectedNote.links || []).length})</h5>
                  <div className="space-y-1">
                    {(selectedNote.links || []).map((l, i) => (
                      <div key={i} className="text-cyan-400 hover:underline cursor-pointer flex items-center gap-1" onClick={() => openNoteDetail(l.target_slug)}>
                        <span>[[{l.target}]]</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-zinc-400 mb-2">Backlinks ({(selectedNote.backlinks || []).length})</h5>
                  <div className="space-y-1">
                    {(selectedNote.backlinks || []).map((b, i) => (
                      <div key={i} className="text-purple-400 hover:underline cursor-pointer flex items-center gap-1" onClick={() => openNoteDetail(b.source_slug)}>
                        <span>← {b.source_title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
