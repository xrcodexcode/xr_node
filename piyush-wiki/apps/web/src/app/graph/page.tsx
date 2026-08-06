'use client';

import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { KnowledgeGraph } from '@/components/KnowledgeGraph';
import { fetchGraphData } from '@/lib/api';
import { KnowledgeGraphData } from '@/types/wiki';
import { Network, Sparkles } from 'lucide-react';

export default function GraphPage() {
  const [graphData, setGraphData] = useState<KnowledgeGraphData>({ nodes: [], edges: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchGraphData();
        setGraphData(data);
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 flex-1 w-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Network className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-slate-100">Knowledge Graph View</h1>
              <p className="text-xs text-slate-400">2D Interactive force-directed topology of all atomic notes & WikiLinks</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Nodes: {graphData.nodes.length}</span>
            <span>•</span>
            <span>Connections: {graphData.edges.length}</span>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-slate-500 font-mono text-sm">Rendering knowledge graph...</div>
        ) : (
          <div className="flex-1 w-full">
            <KnowledgeGraph data={graphData} height="h-[calc(100vh-14rem)]" />
          </div>
        )}
      </main>
    </div>
  );
}
