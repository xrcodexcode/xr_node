'use client';

import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { CategoryCard } from '@/components/CategoryCard';
import { fetchCategories } from '@/lib/api';
import { CategoryInfo } from '@/types/wiki';
import { FolderTree } from 'lucide-react';

export default function CategoriesPage() {
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-1 w-full">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <FolderTree className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold text-slate-100">Knowledge Categories</h1>
              <p className="text-sm text-slate-400">Structured Maps of Content across domain hierarchies</p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">Loading categories...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(cat => (
              <CategoryCard key={cat.name} category={cat} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
