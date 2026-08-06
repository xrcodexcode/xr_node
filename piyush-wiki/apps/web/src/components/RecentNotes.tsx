'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, FileText } from 'lucide-react';
import { NoteMetadata } from '@/types/wiki';

interface RecentNotesProps {
  notes: NoteMetadata[];
}

export function RecentNotes({ notes }: RecentNotesProps) {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-serif font-bold text-slate-100 flex items-center gap-2">
          <Clock className="w-4 h-4 text-sky-400" />
          Recently Viewed & Updated
        </h3>
        <Link href="/search" className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1">
          <span>View all</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="divide-y divide-slate-800/60">
        {notes.slice(0, 5).map(note => (
          <Link
            key={note.id}
            href={`/article/${note.slug}`}
            className="group py-3.5 flex items-center justify-between first:pt-0 last:pb-0 hover:bg-slate-800/30 px-2 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 rounded-lg bg-slate-800/80 text-sky-400 border border-slate-700/50 group-hover:scale-105 transition-transform shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-slate-200 group-hover:text-sky-400 transition-colors truncate">
                  {note.title}
                </h4>
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mt-0.5">
                  <span className="text-slate-400">{note.category}</span>
                  <span>•</span>
                  <span>{note.modified}</span>
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
          </Link>
        ))}
      </div>
    </div>
  );
}
