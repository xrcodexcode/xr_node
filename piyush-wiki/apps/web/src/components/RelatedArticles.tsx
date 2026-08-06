'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

interface RelatedArticle {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  sharedScore: number;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-base font-serif font-bold text-slate-100">Related Articles</h3>
          <p className="text-xs text-slate-400">Contextually connected by shared topics & tags</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map(art => (
          <Link
            key={art.slug}
            href={`/article/${art.slug}`}
            className="group p-4 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-slate-800/80 hover:border-sky-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700">
                  {art.category}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Match Score: {art.sharedScore}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-slate-200 group-hover:text-sky-400 transition-colors line-clamp-1">
                {art.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 mt-1 font-sans">{art.summary}</p>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-sky-400 transition-colors font-mono">
              <span>Read article</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
