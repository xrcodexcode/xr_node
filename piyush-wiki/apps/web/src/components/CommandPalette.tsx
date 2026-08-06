'use client';

import React, { useState, useEffect } from 'react';
import { Search, Command, X, ArrowRight, FileText, Tag, Folder } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { fetchNotes } from '@/lib/api';
import { NoteMetadata } from '@/types/wiki';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NoteMetadata[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered from parent or global window listener
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      return;
    }

    const search = async () => {
      setLoading(true);
      try {
        const notes = await fetchNotes({ q: query });
        setResults(notes.slice(0, 8));
        setSelectedIndex(0);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(search, 150);
    return () => clearTimeout(timer);
  }, [query, isOpen]);

  const handleSelect = (slug: string) => {
    onClose();
    router.push(`/article/${slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex].slug);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search notes, wiki links, tags, categories..."
            className="w-full py-4 text-slate-100 bg-transparent placeholder-slate-500 focus:outline-none text-base font-sans"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-200">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="ml-2 hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
            ESC
          </kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {loading ? (
            <div className="p-8 text-center text-sm text-slate-500">Searching knowledge vault...</div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500">
              {query ? 'No matching notes found.' : 'Type to search across all notes, tags, and categories...'}
            </div>
          ) : (
            results.map((note, index) => (
              <div
                key={note.id}
                onClick={() => handleSelect(note.slug)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`flex items-start justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                  index === selectedIndex ? 'bg-sky-600/20 border border-sky-500/30 text-sky-100' : 'hover:bg-slate-800/60 text-slate-300'
                }`}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="mt-1 p-1.5 rounded bg-slate-800 text-sky-400 border border-slate-700/50 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-100 truncate">{note.title}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {note.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{note.summary}</p>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 mt-2 shrink-0 ${index === selectedIndex ? 'text-sky-400' : 'text-slate-600'}`} />
              </div>
            ))
          )}
        </div>

        <div className="p-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 bg-slate-800 rounded border border-slate-700">↑↓</kbd> navigate</span>
            <span><kbd className="px-1 py-0.5 bg-slate-800 rounded border border-slate-700">↵</kbd> select</span>
          </div>
          <span>Piyush Wiki Search</span>
        </div>
      </div>
    </div>
  );
}
