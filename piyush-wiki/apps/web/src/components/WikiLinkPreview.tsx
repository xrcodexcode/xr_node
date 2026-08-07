'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Award, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { fetchNoteBySlug } from '@/lib/api';
import { NoteDetail } from '@/types/wiki';

interface WikiLinkPreviewProps {
  target: string;
  alias: string;
  slug: string;
}

export function WikiLinkPreview({ alias, slug }: WikiLinkPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [note, setNote] = useState<NoteDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(async () => {
      setIsHovered(true);
      if (!note && !loading) {
        setLoading(true);
        try {
          const data = await fetchNoteBySlug(slug);
          setNote(data);
        } catch {
          // silent fallback
        } finally {
          setLoading(false);
        }
      }
    }, 200); // 200ms hover delay for snappy UX
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(false);
  };

  return (
    <span className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        href={`/article/${slug}`}
        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 border border-sky-500/30 font-mono text-[0.9em] font-semibold transition-all shadow-xs"
      >
        <span>{alias}</span>
      </Link>

      {/* Wikipedia / FarzaPedia Style Hover Preview Card */}
      {isHovered && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-4 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl space-y-2.5 font-sans text-xs animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-[10px] font-mono text-sky-400 uppercase font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-sky-400" />
              Wikipedia Preview
            </span>
            {note?.category && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {note.category}
              </span>
            )}
          </div>

          {loading ? (
            <div className="py-4 text-center text-slate-500 font-mono text-[11px]">Loading preview...</div>
          ) : note ? (
            <>
              <h4 className="font-serif font-bold text-slate-100 text-sm leading-snug">{note.title}</h4>
              <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-3">{note.summary}</p>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <Award className="w-3 h-3" />
                  {note.confidence || 95}% Verified
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {note.readingTimeMinutes || 2}m read
                </span>
              </div>
            </>
          ) : (
            <div className="py-2 space-y-1">
              <h4 className="font-serif font-bold text-slate-200 text-sm">[[{alias}]]</h4>
              <p className="text-slate-400 text-[11px]">Concept linked in vault graph.</p>
            </div>
          )}

          <div className="pt-1 text-right">
            <span className="text-[10px] font-mono text-sky-400 hover:underline flex items-center justify-end gap-1 font-semibold">
              Read article <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      )}
    </span>
  );
}
