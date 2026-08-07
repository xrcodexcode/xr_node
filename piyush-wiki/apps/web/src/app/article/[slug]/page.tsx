'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Clock, FileText, Calendar, Award, Edit3, ExternalLink, Star, MessageSquare, History, BookOpenCheck, Info } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { WikipediaSidebar } from '@/components/WikipediaSidebar';
import { TOC, TOCItem } from '@/components/TOC';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { Backlinks } from '@/components/Backlinks';
import { RelatedArticles } from '@/components/RelatedArticles';
import { WikiInfobox } from '@/components/WikiInfobox';
import { fetchNoteBySlug } from '@/lib/api';
import { NoteDetail } from '@/types/wiki';

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [note, setNote] = useState<NoteDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [tocHeadings, setTocHeadings] = useState<TOCItem[]>([]);
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif'>('serif');
  const [fontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'article' | 'talk' | 'history'>('article');
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    if (!slug) return;
    async function loadArticle() {
      setLoading(true);
      try {
        const data = await fetchNoteBySlug(slug);
        setNote(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <WikipediaSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 flex items-center justify-center p-8 text-slate-500 font-mono text-sm">
          Loading article from Obsidian vault...
        </div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <WikipediaSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
          <h1 className="text-3xl font-serif font-bold text-slate-200">Article Not Found</h1>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            The requested note <code className="text-sky-400 font-mono">[[{slug}]]</code> does not exist in the knowledge vault yet.
          </p>
          <div className="pt-4 flex items-center justify-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
            >
              Return Home
            </Link>
            <Link
              href={`/editor?slug=${slug}`}
              className="px-4 py-2 rounded-xl bg-sky-500 text-white text-xs font-mono font-semibold hover:bg-sky-400"
            >
              Create Note [[{slug}]]
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <WikipediaSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Wikipedia Action Tabs Sub-Header */}
      <div className="border-b border-slate-900 bg-slate-950/80 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          {/* Wikipedia Action Tabs */}
          <div className="flex items-center gap-1 font-mono text-xs">
            <button
              onClick={() => setActiveTab('article')}
              className={`px-3 py-1.5 rounded-t-lg font-semibold flex items-center gap-1.5 transition-colors border-t border-x ${
                activeTab === 'article'
                  ? 'bg-slate-900 text-sky-400 border-slate-800 font-bold'
                  : 'text-slate-400 hover:text-slate-200 border-transparent'
              }`}
            >
              <BookOpenCheck className="w-3.5 h-3.5" />
              <span>Article</span>
            </button>
            <button
              onClick={() => setActiveTab('talk')}
              className={`px-3 py-1.5 rounded-t-lg font-semibold flex items-center gap-1.5 transition-colors border-t border-x ${
                activeTab === 'talk'
                  ? 'bg-slate-900 text-sky-400 border-slate-800 font-bold'
                  : 'text-slate-400 hover:text-slate-200 border-transparent'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Talk</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-3 py-1.5 rounded-t-lg font-semibold flex items-center gap-1.5 transition-colors border-t border-x ${
                activeTab === 'history'
                  ? 'bg-slate-900 text-sky-400 border-slate-800 font-bold'
                  : 'text-slate-400 hover:text-slate-200 border-transparent'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>History</span>
            </button>
          </div>

          {/* Reading Preferences Toolbar & Edit Link */}
          <div className="flex items-center gap-2 font-mono">
            {/* Font Family */}
            <div className="hidden sm:flex items-center bg-slate-900 rounded-lg p-1 border border-slate-800 text-[11px]">
              <button
                onClick={() => setFontFamily('sans')}
                className={`px-2 py-0.5 rounded ${fontFamily === 'sans' ? 'bg-sky-500 text-white font-semibold' : 'text-slate-400'}`}
              >
                Sans
              </button>
              <button
                onClick={() => setFontFamily('serif')}
                className={`px-2 py-0.5 rounded ${fontFamily === 'serif' ? 'bg-sky-500 text-white font-semibold' : 'text-slate-400'}`}
              >
                Serif
              </button>
            </div>

            {/* Watch Star */}
            <button
              onClick={() => setIsWatched(!isWatched)}
              className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                isWatched
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/30 font-semibold'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
              title="Watch this page"
            >
              <Star className={`w-3.5 h-3.5 ${isWatched ? 'fill-amber-400' : ''}`} />
              <span className="hidden md:inline">{isWatched ? 'Watched' : 'Watch'}</span>
            </button>

            {/* Edit Button */}
            <Link
              href={`/editor?slug=${note.slug}`}
              className="px-3 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full lg:pl-64">
        {/* Active Tab Logic */}
        {activeTab === 'talk' ? (
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 font-sans">
            <h2 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-sky-400" />
              Talk Page: [[{note.title}]]
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              This is the discussion page for discussing improvements to the <strong>{note.title}</strong> article.
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
              No active discussions yet. Feel free to initiate a note proposal or prompt Claude Agent.
            </div>
          </div>
        ) : activeTab === 'history' ? (
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 font-sans">
            <h2 className="text-xl font-serif font-bold text-slate-100 flex items-center gap-2">
              <History className="w-5 h-5 text-sky-400" />
              Revision History: [[{note.title}]]
            </h2>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-emerald-400 font-bold">cur</span> | <span className="text-sky-400">prev</span> • {note.modified} by <strong>Piyush (Claude Code)</strong>
                </div>
                <span className="text-slate-400">({note.wordCount} words)</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Left Column: Numbered Wikipedia TOC Sidebar */}
            <aside className="hidden lg:block lg:col-span-1 sticky top-32">
              <TOC items={tocHeadings} />
            </aside>

            {/* Main Article Content & Wikipedia Infobox */}
            <article className="lg:col-span-3 space-y-6">
              {/* Wikipedia Top Hatnote / Disambiguation */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-serif italic text-slate-400 flex items-center gap-2">
                <Info className="w-4 h-4 text-sky-400 flex-shrink-0 not-italic" />
                <span>
                  From PiyushPedia, the free personal encyclopedia. Maintained by Claude Code agent in Obsidian vault.
                </span>
              </div>

              {/* Article Header Card */}
              <header className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-3xl pointer-events-none rounded-full" />

                {/* Status & Type Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
                    {note.category}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    Type: {note.type}
                  </span>
                  {note.status === 'verified' && (
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      Verified Knowledge
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
                  {note.title}
                </h1>

                {/* Metadata Metrics Row */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-sky-400" />
                      Curator: <strong className="text-slate-200">Piyush (Claude Code)</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      Modified: {note.modified}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      {note.readingTimeMinutes} min read ({note.wordCount} words)
                    </span>
                  </div>

                  {note.confidence && (
                    <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
                      <span className="text-slate-400">Confidence:</span>
                      <span className="font-bold text-emerald-400">{note.confidence}%</span>
                    </div>
                  )}
                </div>
              </header>

              {/* Main Body Grid: Markdown Text + Right Wikipedia Infobox */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Rendered Markdown Body */}
                <div className="flex-1 p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-xl overflow-hidden min-w-0">
                  <MarkdownRenderer
                    content={note.content}
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                    onHeadingsExtracted={setTocHeadings}
                  />
                </div>

                {/* Wikipedia Infobox Sidebar */}
                <div className="w-full lg:w-80 flex-shrink-0">
                  <WikiInfobox note={note} />
                </div>
              </div>

              {/* External Sources & References */}
              {note.sources && note.sources.length > 0 && (
                <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <h3 className="text-sm font-serif font-bold text-slate-200 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-sky-400" />
                    References & External Sources
                  </h3>
                  <ol className="space-y-2 text-xs font-mono text-slate-400 list-decimal list-inside">
                    {note.sources.map((src, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-sky-400 underline underline-offset-4 inline-flex items-center gap-1 ml-1"
                        >
                          <span>{src.title}</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* Backlinks Section */}
              <Backlinks backlinks={note.backlinks} />

              {/* Related Articles Section */}
              <RelatedArticles articles={note.relatedArticles} />

              {/* Wikipedia Bottom Categories Box */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-slate-300">Categories:</span>
                  <Link
                    href={`/categories/${encodeURIComponent(note.category.toLowerCase())}`}
                    className="px-2.5 py-1 rounded-md bg-slate-800 text-sky-400 hover:underline border border-slate-700"
                  >
                    {note.category}
                  </Link>
                  <span className="text-slate-600">|</span>
                  <span className="text-slate-400">Type: {note.type}</span>
                </div>

                <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                  <span>PiyushPedia Article ID: <code className="text-sky-400">{note.id}</code></span>
                </div>
              </div>
            </article>
          </div>
        )}
      </main>
    </div>
  );
}
