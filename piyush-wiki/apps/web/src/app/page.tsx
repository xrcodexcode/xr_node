'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Network, ArrowRight, BookOpen, Tag as TagIcon, Award, Zap, HelpCircle, Flame, Globe, Compass } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { WikipediaSidebar } from '@/components/WikipediaSidebar';
import { SearchBar } from '@/components/SearchBar';
import { ArticleCard } from '@/components/ArticleCard';
import { Tag } from '@/components/Tag';
import { StatsCard } from '@/components/StatsCard';
import { KnowledgeGraph } from '@/components/KnowledgeGraph';
import { CommandPalette } from '@/components/CommandPalette';
import { WikiLinkPreview } from '@/components/WikiLinkPreview';
import { fetchNotes, fetchCategories, fetchTags, fetchGraphData, fetchVaultStats } from '@/lib/api';
import { NoteMetadata, CategoryInfo, TagInfo, KnowledgeGraphData, VaultStats } from '@/types/wiki';

export default function HomePage() {
  const [notes, setNotes] = useState<NoteMetadata[]>([]);
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [tags, setTags] = useState<TagInfo[]>([]);
  const [graphData, setGraphData] = useState<KnowledgeGraphData>({ nodes: [], edges: [] });
  const [stats, setStats] = useState<VaultStats>({
    totalNotes: 11,
    totalWords: 4692,
    totalLinks: 64,
    totalCategories: 7,
    totalTags: 32,
    avgReadingTimeMinutes: 3,
    lastIndexed: new Date().toISOString()
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const featuredSinghWikiArticle = notes.find(n => n.slug === 'why-obsidian-claude-rag') || notes[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <WikipediaSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content Container with Left Sidebar Offset */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 flex-1 w-full lg:pl-64">

        {/* Wikipedia Classic Welcome Banner */}
        <section className="p-6 rounded-none bg-slate-900 border border-slate-700 shadow-lg relative overflow-hidden border-t-4 border-t-sky-500">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-sky-400 font-serif italic text-sm">
                <Globe className="w-4 h-4" />
                <span>Welcome to PiyushPedia,</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-slate-100 tracking-tight">
                the free personal encyclopedia that anyone can edit.
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                An interconnected second brain & digital encyclopedia built on atomic markdown notes, Claude Code agent maintenance, and explicit <code className="text-sky-400 font-mono">[[wikilinks]]</code> edges.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-end gap-1.5 font-mono text-xs text-slate-400 border-l border-slate-800 pl-6 hidden md:flex">
              <div className="text-lg font-bold text-sky-400 font-serif">{stats.totalNotes} Articles</div>
              <div>{stats.totalWords.toLocaleString()} Words</div>
              <div>{stats.totalLinks} Wikilink Graph Edges</div>
              <div className="pt-1 text-[10px] text-emerald-400 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                <span>100% Offline-First</span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800 max-w-2xl">
            <SearchBar onOpenCommandPalette={() => setIsSearchOpen(true)} />
          </div>
        </section>

        {/* Wikipedia Portals Ribbon */}
        <section className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-900 border border-slate-700 text-xs font-mono">
          <span className="text-slate-400 font-serif italic flex items-center gap-1.5 px-2 font-semibold">
            <Compass className="w-4 h-4 text-sky-400" />
            Wikipedia Portals:
          </span>
          <div className="flex flex-wrap gap-1.5 flex-1">
            {categories.map(cat => (
              <Link
                key={cat.name}
                href={`/categories/${encodeURIComponent(cat.name.toLowerCase())}`}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-sky-300 transition-colors font-semibold"
              >
                {cat.name} ({cat.count})
              </Link>
            ))}
          </div>
        </section>

        {/* Classic Wikipedia 2-Column Home Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left Main Column: Featured Article & DYK Box */}
          <div className="space-y-8">
            {/* 1. Featured Article Box */}
            {featuredSinghWikiArticle && (
              <section className="bg-slate-900 border border-slate-700 shadow-md">
                <div className="bg-sky-950/80 border-b border-sky-800/80 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-sky-400" />
                    <h2 className="text-sm font-serif font-bold text-slate-100">From today's featured article</h2>
                  </div>
                  <span className="text-[10px] font-mono text-sky-300 font-semibold uppercase">Spotlight</span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-slate-100 hover:text-sky-300 transition-colors">
                    <Link href={`/article/${featuredSinghWikiArticle.slug}`}>
                      {featuredSinghWikiArticle.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {featuredSinghWikiArticle.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono border-t border-slate-800">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" />
                      99% Verified Confidence
                    </span>
                    <Link
                      href={`/article/${featuredSinghWikiArticle.slug}`}
                      className="text-sky-400 hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>Full article...</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </section>
            )}

            {/* 2. Signature "Did You Know..." Box */}
            <section className="bg-slate-900 border border-slate-700 shadow-md">
              <div className="bg-emerald-950/80 border-b border-emerald-800/80 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-400" />
                  <h2 className="text-sm font-serif font-bold text-slate-100">Did you know...</h2>
                </div>
                <span className="text-[10px] font-mono text-emerald-300 uppercase font-semibold">PiyushPedia DYK</span>
              </div>

              <div className="p-5 space-y-3">
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold text-base leading-none">•</span>
                    <span>
                      ...that naive 512-token splitters cut sentences in half, causing <WikiLinkPreview target="vector-databases" alias="vector-databases" slug="vector-databases" /> search to miss exact factual settling locations?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold text-base leading-none">•</span>
                    <span>
                      ...that <WikiLinkPreview target="why-obsidian-claude-rag" alias="SinghWiki" slug="why-obsidian-claude-rag" /> relies on Claude Code to continuously distill sources and maintain explicit <code className="text-sky-400 font-mono">[[wikilinks]]</code> edges?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold text-base leading-none">•</span>
                    <span>
                      ...that GraphRAG systems like HydraDB achieve a **90.79% score** on the LongMemEval benchmark by combining vector candidates with explicit graph traversal?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold text-base leading-none">•</span>
                    <span>
                      ...that Andrej Karpathy dropped traditional RAG in favor of auto-maintained Obsidian index files for personal knowledge vaults?
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Secondary Column: In The News & Vault Activity */}
          <div className="space-y-8">
            {/* 1. In The News / Recent Drops */}
            <section className="bg-slate-900 border border-slate-700 shadow-md">
              <div className="bg-purple-950/80 border-b border-purple-800/80 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-purple-400" />
                  <h2 className="text-sm font-serif font-bold text-slate-100">In the news / Research Drops</h2>
                </div>
                <span className="text-[10px] font-mono text-purple-300 font-semibold uppercase">Activity</span>
              </div>

              <div className="p-5 space-y-3 font-mono text-xs text-slate-300">
                <div className="p-3 bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-sky-400 font-bold">[[why-obsidian-claude-rag]]</span>
                    <span className="text-slate-400">Aug 7, 2026</span>
                  </div>
                  <p className="text-slate-400 text-[11px] font-sans">
                    Added architecture analysis comparing Obsidian + Claude against Vector RAG and Neo4j.
                  </p>
                </div>

                <div className="p-3 bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-sky-400 font-bold">[[artificial-intelligence]]</span>
                    <span className="text-slate-400">Aug 6, 2026</span>
                  </div>
                  <p className="text-slate-400 text-[11px] font-sans">
                    Updated primary MOC with Markov Decision Process mathematical formulations.
                  </p>
                </div>

                <div className="p-3 bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-sky-400 font-bold">[[vector-databases]]</span>
                    <span className="text-slate-400">Aug 6, 2026</span>
                  </div>
                  <p className="text-slate-400 text-[11px] font-sans">
                    Added HNSW index recall limits and cross-encoder reranker latency metrics.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Infrastructure Statistics */}
            <StatsCard stats={stats} />
          </div>
        </div>

        {/* 3. Featured Knowledge Articles Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-lg font-serif font-bold text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-400" />
              Featured Knowledge Articles
            </h2>
            <Link href="/search" className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1">
              <span>Browse all ({notes.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.slice(0, 6).map(note => (
              <ArticleCard key={note.id} note={note} featured={true} />
            ))}
          </div>
        </section>

        {/* 4. Interactive Knowledge Graph Topology */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div>
              <h2 className="text-lg font-serif font-bold text-slate-100 flex items-center gap-2">
                <Network className="w-5 h-5 text-sky-400" />
                Interactive Knowledge Graph
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Explore how atomic concepts and wiki links interconnect across PiyushPedia</p>
            </div>
            <Link
              href="/graph"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-sky-400 transition-colors"
            >
              <span>Full Screen Graph</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <KnowledgeGraph data={graphData} height="h-[480px]" />
        </section>

        {/* 5. Controlled Tag Taxonomy */}
        <section className="p-6 bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-base font-serif font-bold text-slate-100 flex items-center gap-2">
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

      {/* Wikipedia Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 px-4 mt-16 text-center text-xs text-slate-400 font-mono lg:pl-64">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-serif font-bold text-slate-200 text-sm">PiyushPedia</span>
            <span className="ml-2">v1.0.0 • Free Personal Encyclopedia</span>
          </div>
          <div>Inspired by Wikipedia Vector theme, FarzaPedia, SinghWiki & Andrej Karpathy's LLM Wiki</div>
        </div>
      </footer>

      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
