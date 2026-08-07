'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, Search, Shuffle, User, ShieldCheck } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { CommandPalette } from './CommandPalette';
import { fetchNotes } from '@/lib/api';

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleRandom = async () => {
    try {
      const notes = await fetchNotes();
      if (notes.length > 0) {
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        router.push(`/article/${randomNote.slug}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md font-sans text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left Brand & Sidebar Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
              title="Toggle Wikipedia Menu"
            >
              <Menu className="w-4 h-4" />
            </button>

            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-sky-400 flex items-center justify-center text-white font-serif font-bold text-base shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                W
              </div>
              <div>
                <span className="font-serif text-base font-bold text-slate-100 tracking-tight group-hover:text-sky-400 transition-colors block">
                  PiyushPedia
                </span>
                <span className="block text-[9px] font-serif italic text-slate-400 -mt-1">The Free Encyclopedia</span>
              </div>
            </Link>
          </div>

          {/* Center Search Bar */}
          <div className="flex-1 max-w-xl mx-2 hidden sm:block">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors shadow-inner"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-sky-400" />
                <span>Search PiyushPedia...</span>
              </div>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">
                ⌘K / /
              </kbd>
            </button>
          </div>

          {/* Right Action Icons & User Profile */}
          <div className="flex items-center gap-2 font-mono">
            {/* Random Article Button */}
            <button
              onClick={handleRandom}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-sky-300 text-xs transition-colors"
              title="Jump to a random article"
            >
              <Shuffle className="w-3.5 h-3.5 text-indigo-400" />
              <span>Random</span>
            </button>

            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="sm:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400"
            >
              <Search className="w-4 h-4 text-sky-400" />
            </button>

            {/* Curator Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <User className="w-3.5 h-3.5 text-sky-400" />
              <span>Piyush (Curator)</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
