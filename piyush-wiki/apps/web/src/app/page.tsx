'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sparkles, Network, ArrowRight, BookOpen, FolderTree, Tag as TagIcon, Edit3 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SearchBar } from '@/components/SearchBar';
import { ArticleCard } from '@/components/ArticleCard';
import { CategoryCard } from '@/components/CategoryCard';
import { Tag } from '@/components/Tag';
import { StatsCard } from '@/components/StatsCard';
import { RecentNotes } from '@/components/RecentNotes';
import { KnowledgeGraph } from '@/components/KnowledgeGraph';
import { CommandPalette } from '@/components/CommandPalette';
import { fetchNotes, fetchCategories, fetchTags, fetchGraphData, fetchVaultStats } from '@/lib/api';
import { NoteMetadata, CategoryInfo, TagInfo, KnowledgeGraphData, VaultStats } from '@/types/wiki';

export default function HomePage() {
  const [notes, setNotes] = useState<NoteMetadata[]>([]);
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [tags, setTags] = useState<TagInfo[]>([]);
  const [graphData, setGraphData] = useState<KnowledgeGraphData>({ nodes: [], edges: [] });
  const [stats, setStats] = useState<VaultStats>({
    totalNotes: 10,
    totalWords: 3912,
    totalLinks: 56,
    totalCategories: 7,
    totalTags: 28,
    avgReadingTimeMinutes: 2,
    lastIndexed: new Date().toISOString()
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    async function loadVaultData() {
      try {
        const [n, c, t, g, s] = await Promise.all([
          fetchNotes(),
          fetchCategories(),
          fetchTags(),
          fetchGraphData(),
          fetchVaultStats(),
        ]);
        setNotes(n);
        setCategories(c);
        setTags(t);
        setGraphData(g);
        setStats(s);
      } catch (err) {
        console.error(err);
      }
    }
    loadVaultData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 overflow-hidden border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[200px] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Local-First Personal Knowledge Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-slate-100 leading-tight">
            Piyush Wiki
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A modern personal Wikipedia & interconnected second brain. Browse atomic notes, explore knowledge graphs, and follow wiki links across AI, Systems, and Software.
          </p>

          <div className="pt-4 max-w-2xl mx-auto">
            <SearchBar onOpenCommandPalette={() => setIsSearchOpen(true)} />
          </div>

          {/* Quick Categories Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-slate-400">Quick explore:</span>
            {categories.slice(0, 5).map(cat => (
              <Link
                key={cat.name}
                href={`/categories/${encodeURIComponent(cat.name.toLowerCase())}`}
                className="px-3 py-1 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-sky-300 transition-colors"
              >
                {cat.name} ({cat.count})
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 flex-1">
        {/* 1. Infrastructure Statistics */}
        <StatsCard stats={stats} />

        {/* 2. Featured Notes & Knowledge Graph Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Featured Notes */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-sky-400" />
                Featured Knowledge Notes
              </h2>
              <Link href="/search" className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1">
                <span>Browse all ({notes.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {notes.slice(0, 4).map(note => (
                <ArticleCard key={note.id} note={note} featured={true} />
              ))}
            </div>
          </div>

          {/* Right Column: Recently Viewed */}
          <div className="space-y-6">
            <RecentNotes notes={notes} />
          </div>
        </section>

        {/* 3. Interactive Knowledge Graph Preview */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
                <Network className="w-5 h-5 text-sky-400" />
                Interactive Knowledge Graph
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Explore how atomic concepts and wiki links interconnect across the vault</p>
            </div>
            <Link
              href="/graph"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-sky-400 transition-colors"
            >
              <span>Full Screen Graph</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <KnowledgeGraph data={graphData} height="h-[480px]" />
        </section>

        {/* 4. Knowledge Categories Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
                <FolderTree className="w-5 h-5 text-sky-400" />
                Vault Categories
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Structured domain hierarchies and Maps of Content</p>
            </div>
            <Link href="/categories" className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1">
              <span>View all categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map(cat => (
              <CategoryCard key={cat.name} category={cat} />
            ))}
          </div>
        </section>

        {/* 5. Tag Cloud Section */}
        <section className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-serif font-bold text-slate-100 flex items-center gap-2">
              <TagIcon className="w-5 h-5 text-sky-400" />
              Controlled Tag Taxonomy
            </h2>
            <Link href="/tags" className="text-xs font-mono text-sky-400 hover:text-sky-300">
              Explore Tag Directory →
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map(t => (
              <Tag key={t.name} name={t.name} count={t.count} size="md" />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 px-4 mt-16 text-center text-xs text-slate-400 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-serif font-bold text-slate-200 text-sm">Piyush Wiki</span>
            <span className="ml-2">v1.0.0 • Local-First Knowledge Platform</span>
          </div>
          <div>Inspired by Wikipedia, Obsidian & Notion</div>
        </div>
      </footer>

      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
