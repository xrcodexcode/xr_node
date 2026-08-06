'use client';

import React from 'react';
import Link from 'next/link';
import { Tag as TagIcon } from 'lucide-react';

interface TagProps {
  name: string;
  count?: number;
  active?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Tag({ name, count, active = false, size = 'md' }: TagProps) {
  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2',
  };

  return (
    <Link
      href={`/tags/${encodeURIComponent(name.toLowerCase())}`}
      className={`inline-flex items-center rounded-full font-mono transition-all duration-150 border ${sizeClasses[size]} ${
        active
          ? 'bg-sky-500 text-white border-sky-400 font-semibold shadow-md shadow-sky-500/20'
          : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-300 border-slate-800 hover:border-sky-500/40'
      }`}
    >
      <TagIcon className="w-3 h-3 opacity-70" />
      <span>#{name}</span>
      {count !== undefined && (
        <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-slate-800/80 text-[10px] text-slate-400">
          {count}
        </span>
      )}
    </Link>
  );
}
