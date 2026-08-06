'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Clock, FileText, Calendar, Award, Edit3, Share2, ArrowLeft, BookOpen, ExternalLink, Tag as TagIcon, Folder } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TOC, TOCItem } from '@/components/TOC';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { Backlinks } from '@/components/Backlinks';
import { RelatedArticles } from '@/components/RelatedArticles';
import { Tag } from '@/components/Tag';
import { fetchNoteBySlug } from '@/lib/api';
import { NoteDetail } from '@/types/wiki';

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [note, setNote] = useState<NoteDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [tocHeadings, setTocHeadings] = useState<TOCItem[]>([]);
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif'>('sans');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copiedLink, setCopiedLink] = useState(false);

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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-8 text-slate-500 font-mono text-sm">
          Loading article from Obsidian vault...
        </div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <Navbar />
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
      <Navbar />

      {/* Top Breadcrumb & Controls Sub-header */}
      <div className="border-b border-slate-900 bg-slate-950/60 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <Breadcrumbs
            items={[
              { label: 'Categories', href: '/categories' },
              { label: note.category, href: `/categories/${encodeURIComponent(note.category.toLowerCase())}` },
              { label: note.title },
            ]}
          />

          {/* Reading Preferences Toolbar */}
          <div className="flex items-center gap-2">
            {/* Font Switcher */}
            <div className="hidden sm:flex items-center bg-slate-900 rounded-lg p-1 border border-slate-800 text-[11px] font-mono">
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

            {/* Font Size Controls */}
            <div className="hidden sm:flex items-center bg-slate-900 rounded-lg p-1 border border-slate-800 text-[11px] font-mono">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-0.5 rounded ${fontSize === 'sm' ? 'bg-sky-500 text-white' : 'text-slate-400'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`px-2 py-0.5 rounded ${fontSize === 'md' ? 'bg-sky-500 text-white' : 'text-slate-400'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-0.5 rounded ${fontSize === 'lg' ? 'bg-sky-500 text-white' : 'text-slate-400'}`}
              >
                A+
              </button>
            </div>

            {/* Copy Article Link */}
            <button
              onClick={handleCopyLink}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 text-xs font-mono flex items-center gap-1 transition-colors"
              title="Copy link to article"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            {/* Edit Article */}
            <Link
              href={`/editor?slug=${note.slug}`}
              className="px-3 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Note</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
          {/* Left Column: TOC Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <TOC items={tocHeadings} />
          </aside>

          {/* Center Column: Article Header & Body */}
          <article className="lg:col-span-3 space-y-8">
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
                    Author: <strong className="text-slate-200">Piyush</strong>
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

            {/* Rendered Markdown Body */}
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-xl">
              <MarkdownRenderer
                content={note.content}
                fontFamily={fontFamily}
                fontSize={fontSize}
                onHeadingsExtracted={setTocHeadings}
              />
            </div>

            {/* External Sources & References */}
            {note.sources && note.sources.length > 0 && (
              <section className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h3 className="text-sm font-serif font-bold text-slate-200 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-sky-400" />
                  References & External Sources
                </h3>
                <ul className="space-y-2 text-xs font-mono text-slate-400">
                  {note.sources.map((src, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-sky-500">[{idx + 1}]</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-sky-400 underline underline-offset-4 flex items-center gap-1"
                      >
                        <span>{src.title}</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Backlinks Section */}
            <Backlinks backlinks={note.backlinks} />

            {/* Related Articles Section */}
            <RelatedArticles articles={note.relatedArticles} />

            {/* Tags & Categories Footer */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <TagIcon className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-mono text-slate-400">Tags:</span>
                <div className="flex flex-wrap gap-1.5">
                  {note.tags.map(t => (
                    <Tag key={t} name={t} size="sm" />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <Folder className="w-4 h-4 text-indigo-400" />
                <span className="text-slate-400">Category:</span>
                <Link
                  href={`/categories/${encodeURIComponent(note.category.toLowerCase())}`}
                  className="text-sky-400 hover:underline"
                >
                  {note.category}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
