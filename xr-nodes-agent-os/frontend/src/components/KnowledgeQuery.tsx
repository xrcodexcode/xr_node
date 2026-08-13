import React, { useState, useEffect } from 'react'
import { Search, BookOpen, Link as LinkIcon, Folder, Clock, FileText, ArrowRight, X, Loader2 } from 'lucide-react'

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

  const handleSearch = async (q: string, folder: string) => {
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
  }

  useEffect(() => {
    handleSearch('', 'all')
  }, [])

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          Vault Knowledge Query & Local RAG Search
        </h2>
        <p className="text-xs text-zinc-400">Search and query across atomic concept nodes, MOC indexes, and study notes in NexusDB.</p>
      </div>

      {/* Query Search Bar */}
      <form onSubmit={onSearchSubmit} className="flex gap-3 bg-[#121215] border border-zinc-800 p-3 rounded-xl">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Query your knowledge vault... e.g. neural networks, agent architecture, schema v4"
            value={query}
            onChange={e => {
              setQuery(e.target.value)
              handleSearch(e.target.value, folderFilter)
            }}
            className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white pl-9 pr-3 py-2.5 rounded-lg focus:outline-none focus:border-cyan-500"
          />
        </div>

        <select
          value={folderFilter}
          onChange={e => {
            setFolderFilter(e.target.value)
            handleSearch(query, e.target.value)
          }}
          className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 rounded-lg px-3 py-2.5 focus:outline-none"
        >
          <option value="all">All Folders</option>
          <option value="NODES">NODES (Atomic)</option>
          <option value="03_MOC">03_MOC (Maps of Content)</option>
          <option value="02_NEW-KNOWLEDGE">02_NEW-KNOWLEDGE</option>
          <option value="NOTES">NOTES (Synthesis)</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ArrowRight className="w-3.5 h-3.5" />}
          <span>Query</span>
        </button>
      </form>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
        <span>Found <strong className="text-cyan-400 font-mono">{results.length}</strong> matching notes</span>
      </div>

      {/* Results Grid */}
      {results.length === 0 ? (
        <div className="bg-[#121215] border border-zinc-800 rounded-xl p-12 text-center text-xs text-zinc-500">
          No matching notes found for query "{query}". Try a different keyword or folder.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {results.map(note => (
            <div
              key={note.id || note.slug}
              onClick={() => openNoteDetail(note.slug)}
              className="bg-[#121215] border border-zinc-800 hover:border-cyan-500/40 rounded-xl p-4 space-y-3 cursor-pointer transition-all hover:bg-zinc-900/50 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400" />
                  {note.title}
                </h3>
                <span className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-zinc-400">
                  {note.folder}
                </span>
              </div>

              <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{note.summary || 'No summary available.'}</p>

              <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-zinc-600" /> {note.reading_time_minutes || 1} min</span>
                  <span>• {note.word_count || 0} words</span>
                </div>
                <span className="text-purple-400 flex items-center gap-1"><LinkIcon className="w-3 h-3" /> {note.backlinks_count || 0} backlinks</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Note Detail Modal */}
      {selectedNote && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-[#121215] border border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/40">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                  {selectedNote.folder} / {selectedNote.type}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{selectedNote.title}</h3>
              </div>
              <button
                onClick={() => setSelectedNote(null)}
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs leading-relaxed text-zinc-300 font-sans">
              <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-lg font-mono text-[11px] space-y-1">
                <p><span className="text-zinc-500">Path:</span> {selectedNote.relative_path}</p>
                <p><span className="text-zinc-500">Tags:</span> {(selectedNote.tags && selectedNote.tags.length > 0) ? selectedNote.tags.join(', ') : 'none'}</p>
              </div>

              <div className="whitespace-pre-wrap font-mono text-[12px] bg-black/40 p-4 rounded-lg border border-zinc-900 text-zinc-200">
                {selectedNote.content || selectedNote.summary || 'No text content.'}
              </div>

              {/* Wikilinks & Backlinks */}
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-zinc-800 text-[11px]">
                <div>
                  <h5 className="font-bold text-zinc-400 mb-2">Outgoing Links ({(selectedNote.links || []).length})</h5>
                  <div className="space-y-1">
                    {(selectedNote.links || []).map((l, i) => (
                      <div key={i} className="text-cyan-400 hover:underline cursor-pointer" onClick={() => openNoteDetail(l.target_slug)}>
                        [[{l.target}]]
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-zinc-400 mb-2">Backlinks ({(selectedNote.backlinks || []).length})</h5>
                  <div className="space-y-1">
                    {(selectedNote.backlinks || []).map((b, i) => (
                      <div key={i} className="text-purple-400 hover:underline cursor-pointer" onClick={() => openNoteDetail(b.source_slug)}>
                        ← {b.source_title}
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
