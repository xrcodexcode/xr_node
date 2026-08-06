'use client';

import React from 'react';
import { BookOpen, FileText, Link2, FolderTree, Tag as TagIcon, Clock, Sparkles } from 'lucide-react';
import { VaultStats } from '@/types/wiki';

interface StatsCardProps {
  stats: VaultStats;
}

export function StatsCard({ stats }: StatsCardProps) {
  const items = [
    { label: 'Atomic Notes', value: stats.totalNotes, icon: FileText, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
    { label: 'Wiki Connections', value: stats.totalLinks, icon: Link2, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
    { label: 'Knowledge Categories', value: stats.totalCategories, icon: FolderTree, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
    { label: 'Controlled Tags', value: stats.totalTags, icon: TagIcon, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
    { label: 'Total Words', value: stats.totalWords.toLocaleString(), icon: BookOpen, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
    { label: 'Avg Read Time', value: `${stats.avgReadingTimeMinutes} mins`, icon: Clock, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
  ];

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-sky-400" />
          <h2 className="text-base font-serif font-bold text-slate-100">Vault Infrastructure Stats</h2>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
          Source: Flat Obsidian Vault
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
              <div className={`p-2 rounded-lg ${stat.bg} border w-fit ${stat.color} mb-3`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xl font-mono font-bold text-slate-100">{stat.value}</div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
