'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Award, ArrowUpRight, Link2 } from 'lucide-react';
import { NoteMetadata } from '@/types/wiki';

interface ArticleCardProps {
  note: NoteMetadata;
  featured?: boolean;
}

export function ArticleCard({ note, featured = false }: ArticleCardProps) {
  return (
    <Link
      href={`/article/${note.slug}`}
      className={`group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-200 ${
        featured
          ? 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-sky-950/30 border-sky-500/30 hover:border-sky-500/60 shadow-lg shadow-sky-500/5'
          : 'bg-slate-900/50 hover:bg-slate-900 border-slate-800/80 hover:border-slate-700 shadow-sm'
      }`}
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-sky-400 border border-slate-700/60">
            {note.category}
          </span>
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              {note.readingTimeMinutes} min
            </span>
            {note.confidence && (
              <span className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <Award className="w-3 h-3" />
                {note.confidence}%
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-sky-400 transition-colors line-clamp-1">
          {note.title}
        </h3>

        {/* Excerpt Summary */}
        <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed font-sans">
          {note.summary}
        </p>
      </div>

      {/* Footer Tags & Links info */}
      <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
        <div className="flex flex-wrap gap-1.5 min-w-0">
          {note.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-slate-400 group-hover:text-sky-400 transition-colors shrink-0">
          {note.forwardLinks?.length > 0 && (
            <span className="flex items-center gap-1 text-[10px] font-mono">
              <Link2 className="w-3 h-3" />
              {note.forwardLinks.length}
            </span>
          )}
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
