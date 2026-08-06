'use client';

import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { ArticleCard } from '@/components/ArticleCard';
import { fetchNotes } from '@/lib/api';
import { NoteMetadata } from '@/types/wiki';
import { Search, Filter, X } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [notes, setNotes] = useState<NoteMetadata[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'moc' | 'atomic'>('all');

  useEffect(() => {
    async function performSearch() {
      setLoading(true);
      try {
        const results = await fetchNotes({ q: query });
        setNotes(results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(performSearch, 150);
    return () => clearTimeout(timer);
  }, [query]);

  const filteredNotes = notes.filter(n => {
    if (filterType === 'all') return true;
    if (filterType === 'moc') return n.type === 'moc';
    if (filterType === 'atomic') return n.type === 'atomic-note';
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-1 w-full">
        {/* Search Header */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-3xl font-serif font-bold text-slate-100">Vault Search Directory</h1>
          <p className="text-sm text-slate-400">Instant title, full-text, category, and tag search across all markdown notes</p>

          <div className="relative flex items-center bg-slate-900 border border-slate-800 focus-within:border-sky-500/50 rounded-2xl px-5 py-4 shadow-xl">
            <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Type to search titles, body text, or tags..."
              className="w-full text-slate-100 bg-transparent focus:outline-none placeholder-slate-500 text-base"
              autoFocus
            />
            {query && (
              <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-200">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <Filter className="w-4 h-4 text-slate-400 mr-1" />
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${filterType === 'all' ? 'bg-sky-500 text-white font-semibold' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}
          >
            All Notes ({notes.length})
          </button>
          <button
            onClick={() => setFilterType('moc')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${filterType === 'moc' ? 'bg-sky-500 text-white font-semibold' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}
          >
            Maps of Content (MOC)
          </button>
          <button
            onClick={() => setFilterType('atomic')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${filterType === 'atomic' ? 'bg-sky-500 text-white font-semibold' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}
          >
            Atomic Notes
          </button>
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">Searching vault...</div>
        ) : filteredNotes.length === 0 ? (
          <div className="text-center py-16 text-slate-500 font-mono text-sm">No notes matching "{query}" found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map(note => (
              <ArticleCard key={note.id} note={note} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
