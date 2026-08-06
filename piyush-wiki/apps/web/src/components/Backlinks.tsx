'use client';

import React from 'react';
import Link from 'next/link';
import { Link2, FileText, ArrowRight } from 'lucide-react';
import { Backlink } from '@/types/wiki';

interface BacklinksProps {
  backlinks: Backlink[];
}

export function Backlinks({ backlinks }: BacklinksProps) {
  if (!backlinks || backlinks.length === 0) {
    return (
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center text-xs text-slate-500 font-mono">
        No incoming WikiLinks referencing this note yet.
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <Link2 className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-base font-serif font-bold text-slate-100">Backlinks ({backlinks.length})</h3>
          <p className="text-xs text-slate-400">Notes inside Piyush Wiki referencing this page</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {backlinks.map((link, idx) => (
          <Link
            key={idx}
            href={`/article/${link.sourceSlug}`}
            className="group p-4 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  {link.sourceTitle}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-xs text-slate-400 line-clamp-2 italic font-sans bg-slate-900/80 p-2 rounded border border-slate-800/50">
                "{link.contextSnippet}"
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
