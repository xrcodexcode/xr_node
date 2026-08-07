'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { NoteDetail } from '@/types/wiki';

interface WikiInfoboxProps {
  note: NoteDetail;
}

export function WikiInfobox({ note }: WikiInfoboxProps) {
  return (
    <aside className="w-full lg:w-80 rounded-none bg-slate-900 border border-slate-700 shadow-lg text-xs font-sans space-y-0 overflow-hidden">
      {/* Wikipedia Infobox Top Header Bar */}
      <div className="bg-slate-800 p-3 text-center border-b border-slate-700 space-y-1">
        <h3 className="text-base font-serif font-bold text-slate-100 tracking-tight">{note.title}</h3>
        <p className="text-[11px] text-slate-400 font-mono italic">
          {note.aliases && note.aliases.length > 0 ? note.aliases.join(' • ') : note.type}
        </p>
      </div>

      {/* Primary Key-Value Details Table */}
      <div className="divide-y divide-slate-800">
        <div className="flex items-center justify-between p-2.5 bg-slate-900/50 text-slate-300">
          <span className="font-semibold text-slate-400">Curator</span>
          <span className="text-slate-200">Piyush (Claude Code)</span>
        </div>

        <div className="flex items-center justify-between p-2.5 bg-slate-900/80 text-slate-300">
          <span className="font-semibold text-slate-400">Category</span>
          <Link
            href={`/categories/${encodeURIComponent(note.category.toLowerCase())}`}
            className="text-sky-400 hover:underline font-semibold"
          >
            {note.category}
          </Link>
        </div>

        <div className="flex items-center justify-between p-2.5 bg-slate-900/50 text-slate-300">
          <span className="font-semibold text-slate-400">Note Type</span>
          <span className="capitalize px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200 text-[11px]">
            {note.type}
          </span>
        </div>

        <div className="flex items-center justify-between p-2.5 bg-slate-900/80 text-slate-300">
          <span className="font-semibold text-slate-400">Status</span>
          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
            note.status === 'verified' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
          }`}>
            {note.status}
          </span>
        </div>

        {note.confidence !== undefined && (
          <div className="p-2.5 bg-slate-900/50 space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="font-semibold">Confidence</span>
              <span className="font-bold text-emerald-400">{note.confidence}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full"
                style={{ width: `${note.confidence}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between p-2.5 bg-slate-900/80 text-slate-300">
          <span className="font-semibold text-slate-400">Reading Time</span>
          <span>{note.readingTimeMinutes} min ({note.wordCount} words)</span>
        </div>

        <div className="flex items-center justify-between p-2.5 bg-slate-900/50 text-slate-300">
          <span className="font-semibold text-slate-400">Last Modified</span>
          <span>{note.modified}</span>
        </div>
      </div>

      {/* Outbound Links Section */}
      {note.forwardLinks && note.forwardLinks.length > 0 && (
        <div className="p-3 bg-slate-900 border-t border-slate-800 space-y-2">
          <div className="text-[11px] font-semibold text-slate-400 uppercase font-mono">
            Outbound Links ({note.forwardLinks.length})
          </div>
          <div className="flex flex-wrap gap-1">
            {note.forwardLinks.slice(0, 6).map(link => (
              <Link
                key={link.targetSlug}
                href={`/article/${link.targetSlug}`}
                className="px-2 py-0.5 rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/20 text-[10px] font-mono transition-colors"
              >
                [[{link.alias || link.target}]]
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Primary References Section */}
      {note.sources && note.sources.length > 0 && (
        <div className="p-3 bg-slate-950 border-t border-slate-800 space-y-1.5">
          <div className="text-[11px] font-semibold text-slate-400 uppercase font-mono">References</div>
          {note.sources.map((src, idx) => (
            <a
              key={idx}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-sky-400 hover:underline font-mono truncate"
            >
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{src.title}</span>
            </a>
          ))}
        </div>
      )}
    </aside>
  );
}
