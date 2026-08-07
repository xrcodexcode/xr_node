'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlignLeft } from 'lucide-react';

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TOCProps {
  items: TOCItem[];
}

export function TOC({ items }: TOCProps) {
  const [collapsed, setCollapsed] = useState(false);

  if (!items || items.length === 0) return null;

  // Build Wikipedia-style hierarchical numbering (1, 1.1, 1.2, 2, 2.1...)
  let mainIndex = 0;
  let subIndex = 0;

  const numberedItems = items.map(item => {
    if (item.level === 1 || item.level === 2) {
      mainIndex++;
      subIndex = 0;
      return { ...item, number: `${mainIndex}` };
    } else {
      subIndex++;
      return { ...item, number: `${mainIndex}.${subIndex}` };
    }
  });

  return (
    <nav className="w-full rounded-2xl bg-slate-900/90 border border-slate-800 p-4 space-y-3 shadow-xl font-sans text-xs sticky top-32">
      {/* Wikipedia Table of Contents Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <div className="flex items-center gap-2">
          <AlignLeft className="w-4 h-4 text-sky-400" />
          <span className="font-serif font-bold text-slate-100 text-sm tracking-tight">Contents</span>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-[11px] font-mono text-sky-400 hover:underline flex items-center gap-1 font-semibold"
        >
          <span>[{collapsed ? 'show' : 'hide'}]</span>
          {collapsed ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
        </button>
      </div>

      {/* Numbered List */}
      {!collapsed && (
        <ol className="space-y-1.5 pt-1 text-slate-300 font-sans leading-relaxed max-h-[calc(100vh-16rem)] overflow-y-auto pr-1">
          {numberedItems.map(item => (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 1) * 0.75}rem` }}
              className="group"
            >
              <a
                href={`#${item.id}`}
                className="flex items-baseline gap-2 py-0.5 hover:text-sky-400 transition-colors"
              >
                <span className="font-mono text-[10px] text-sky-500/80 font-semibold group-hover:text-sky-400">
                  {item.number}
                </span>
                <span className="truncate group-hover:underline decoration-sky-400/50 underline-offset-4">
                  {item.text}
                </span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
