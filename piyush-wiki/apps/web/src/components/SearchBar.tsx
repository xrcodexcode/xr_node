'use client';

import React from 'react';
import { Search, Command } from 'lucide-react';

interface SearchBarProps {
  onOpenCommandPalette: () => void;
  placeholder?: string;
}

export function SearchBar({ onOpenCommandPalette, placeholder = "Search notes, tags, or wiki concepts..." }: SearchBarProps) {
  return (
    <div
      onClick={onOpenCommandPalette}
      className="w-full max-w-2xl group cursor-pointer relative flex items-center bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-2xl px-5 py-4 shadow-xl backdrop-blur-md transition-all duration-200"
    >
      <Search className="w-5 h-5 text-slate-400 group-hover:text-sky-400 mr-3 transition-colors shrink-0" />
      <span className="text-slate-400 text-sm md:text-base font-sans truncate flex-1">{placeholder}</span>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-400 text-xs font-mono group-hover:border-sky-500/40 group-hover:text-sky-300 transition-colors">
        <Command className="w-3.5 h-3.5" />
        <span>K</span>
      </div>
    </div>
  );
}
