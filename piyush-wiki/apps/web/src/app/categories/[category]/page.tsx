'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { ArticleCard } from '@/components/ArticleCard';
import { fetchNotes } from '@/lib/api';
import { NoteMetadata } from '@/types/wiki';
import { Folder } from 'lucide-react';

export default function CategoryDetailPage() {
  const params = useParams();
  const rawCat = params?.category as string;
  const categoryName = decodeURIComponent(rawCat || '');

  const [notes, setNotes] = useState<NoteMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const allNotes = await fetchNotes({ category: categoryName });
        setNotes(allNotes);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [categoryName]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-1 w-full">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Folder className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Category Directory</span>
            <h1 className="text-3xl font-serif font-bold text-slate-100 capitalize">{categoryName}</h1>
            <p className="text-sm text-slate-400 mt-1">{notes.length} notes under this category</p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">Loading articles for category...</div>
        ) : notes.length === 0 ? (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">No notes found under category "{categoryName}".</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(note => (
              <ArticleCard key={note.id} note={note} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
