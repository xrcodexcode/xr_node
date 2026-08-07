'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, FolderTree, Shuffle, Network, Tag, Edit3, Settings, PlusCircle, Sparkles } from 'lucide-react';
import { fetchNotes } from '@/lib/api';

interface WikipediaSidebarProps {
  isOpen: boolean;
  onToggle?: () => void;
}

export function WikipediaSidebar({ isOpen }: WikipediaSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleRandomArticle = async () => {
    try {
      const notes = await fetchNotes();
      if (notes.length > 0) {
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        router.push(`/article/${randomNote.slug}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const navGroup = [
    { name: 'Main page', href: '/', icon: Home },
    { name: 'Contents & Portals', href: '/categories', icon: FolderTree },
    { name: 'Knowledge Graph', href: '/graph', icon: Network },
    { name: 'Tag Taxonomy', href: '/tags', icon: Tag },
  ];

  const toolsGroup = [
    { name: 'Note Editor', href: '/editor', icon: Edit3 },
    { name: 'Vault Settings', href: '/settings', icon: Settings },
  ];

  return (
    <aside
      className={`fixed top-16 bottom-0 left-0 z-30 w-64 bg-slate-950/95 border-r border-slate-800 p-4 space-y-6 overflow-y-auto transition-transform duration-200 backdrop-blur-md font-sans text-xs ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      {/* Brand Header */}
      <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-sky-400 flex items-center justify-center text-white font-serif font-bold text-lg shadow-lg shadow-sky-500/20">
          W
        </div>
        <div>
          <span className="font-serif font-bold text-slate-100 text-sm tracking-tight block">PiyushPedia</span>
          <span className="text-[10px] font-serif italic text-slate-400 block -mt-0.5">The Free Encyclopedia</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="space-y-1.5">
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold px-2">
          Navigation
        </div>
        {navGroup.map(item => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
                isActive
                  ? 'bg-sky-500/15 text-sky-400 font-semibold border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Icon className="w-4 h-4 text-sky-400" />
              <span>{item.name}</span>
            </Link>
          );
        })}

        {/* Random Article Button */}
        <button
          onClick={handleRandomArticle}
          className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors font-medium text-left"
        >
          <Shuffle className="w-4 h-4 text-indigo-400" />
          <span>Random article</span>
        </button>
      </div>

      {/* Contribute Section */}
      <div className="space-y-1.5 pt-2 border-t border-slate-900">
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold px-2">
          Contribute
        </div>
        <Link
          href="/editor"
          className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors font-medium"
        >
          <PlusCircle className="w-4 h-4 text-emerald-400" />
          <span>Create atomic note</span>
        </Link>
        <Link
          href="/article/why-obsidian-claude-rag"
          className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors font-medium"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>SinghWiki Paradigm</span>
        </Link>
      </div>

      {/* Tools Section */}
      <div className="space-y-1.5 pt-2 border-t border-slate-900">
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold px-2">
          Tools
        </div>
        {toolsGroup.map(item => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
                isActive
                  ? 'bg-sky-500/15 text-sky-400 font-semibold border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Icon className="w-4 h-4 text-slate-400" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Wikipedia Footer Note */}
      <div className="pt-4 border-t border-slate-900 text-[10px] font-mono text-slate-500 space-y-1">
        <div>PiyushPedia v1.0</div>
        <div>Local-first Wikipedia platform</div>
      </div>
    </aside>
  );
}
