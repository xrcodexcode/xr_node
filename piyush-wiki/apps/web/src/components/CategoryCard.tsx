'use client';

import React from 'react';
import Link from 'next/link';
import { Folder, ArrowRight, BookOpen } from 'lucide-react';
import { CategoryInfo } from '@/types/wiki';

interface CategoryCardProps {
  category: CategoryInfo;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${encodeURIComponent(category.name.toLowerCase())}`}
      className="group p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform">
            <Folder className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {category.count} {category.count === 1 ? 'note' : 'notes'}
          </span>
        </div>

        <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
          {category.name}
        </h3>

        <div className="mt-3 space-y-1.5">
          {category.articles.slice(0, 3).map(art => (
            <div key={art.slug} className="flex items-center gap-2 text-xs text-slate-400">
              <BookOpen className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate group-hover:text-slate-300">{art.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-sky-400 transition-colors">
        <span>Explore Category</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
