'use client';

import React, { useEffect, useState } from 'react';
import { List, ChevronRight } from 'lucide-react';

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TOCProps {
  items: TOCItem[];
}

export function TOC({ items }: TOCProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    items.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 sticky top-24">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800/80 text-xs font-mono font-semibold text-slate-300">
        <List className="w-4 h-4 text-sky-400" />
        <span>Table of Contents</span>
      </div>

      <nav className="space-y-1 max-h-[65vh] overflow-y-auto pr-1 text-xs">
        {items.map(item => {
          const isActive = activeId === item.id;
          const indent = item.level === 3 ? 'pl-4' : item.level === 4 ? 'pl-6' : 'pl-0';

          return (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`w-full text-left py-1 px-2 rounded-md transition-colors flex items-center gap-1.5 ${indent} ${
                isActive
                  ? 'bg-sky-500/15 text-sky-400 font-semibold border-l-2 border-sky-400'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              {isActive && <ChevronRight className="w-3 h-3 shrink-0 text-sky-400" />}
              <span className="truncate">{item.text}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
