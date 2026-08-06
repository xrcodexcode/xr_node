'use client';

import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Tag } from '@/components/Tag';
import { fetchTags } from '@/lib/api';
import { TagInfo } from '@/types/wiki';
import { Tag as TagIcon } from 'lucide-react';

export default function TagsPage() {
  const [tags, setTags] = useState<TagInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchTags();
        setTags(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-1 w-full">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <TagIcon className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold text-slate-100">Controlled Tag Directory</h1>
              <p className="text-sm text-slate-400">Strictly controlled tag schema across the Obsidian vault graph</p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">Loading controlled tags...</div>
        ) : (
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
            <div className="flex flex-wrap gap-3">
              {tags.map(t => (
                <Tag key={t.name} name={t.name} count={t.count} size="lg" />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
