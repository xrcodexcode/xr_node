import React, { useState } from 'react';
import { X, Network, Sparkles, ZoomIn, ZoomOut } from 'lucide-react';
import type { Article } from '../types';
import { AiEngine } from '../services/aiEngine';

interface KnowledgeGraphModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article;
  onSelectArticle: (articleId: string) => void;
}

export const KnowledgeGraphModal: React.FC<KnowledgeGraphModalProps> = ({
  isOpen,
  onClose,
  article,
  onSelectArticle
}) => {
  const [zoom, setZoom] = useState(1);

  if (!isOpen) return null;

  const graph = AiEngine.generateKnowledgeGraph(article);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-indigo-500/30 overflow-hidden shadow-2xl bg-slate-900/95 flex flex-col h-[80vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <Network className="w-5 h-5 text-indigo-400" />
            <div>
              <h3 className="font-display font-bold text-base text-slate-100">
                Interactive Knowledge Graph
              </h3>
              <p className="text-xs text-slate-400">Conceptual connections centered on {article.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoom(z => Math.min(z + 0.2, 1.8))}
              className="p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded-lg"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoom(z => Math.max(z - 0.2, 0.6))}
              className="p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded-lg"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Graph Canvas Visualizer */}
        <div className="flex-1 relative overflow-hidden bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] flex items-center justify-center p-8">
          <div 
            className="transition-transform duration-300 relative w-full h-full flex items-center justify-center"
            style={{ transform: `scale(${zoom})` }}
          >
            {/* SVG Lines Connecting Nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-indigo-500/30 stroke-[2] stroke-dasharray-[4_4]">
              {graph.edges.map((_, idx) => (
                <line 
                  key={idx}
                  x1="50%" 
                  y1="50%" 
                  x2={`${50 + (idx % 2 === 0 ? 1 : -1) * (140 + idx * 30)}px`}
                  y2={`${50 + (idx > 2 ? 1 : -1) * (100 + idx * 25)}px`}
                />
              ))}
            </svg>

            {/* Central Node */}
            <div 
              className="z-10 p-5 rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-600 text-white font-bold text-sm shadow-2xl border-2 border-white/20 flex flex-col items-center gap-1 cursor-pointer animate-pulse"
            >
              <Sparkles className="w-5 h-5" />
              <span>{article.title}</span>
              <span className="text-[10px] opacity-80 uppercase font-mono">Central Node</span>
            </div>

            {/* Orbiting Related Concept Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {graph.nodes.filter(n => n.id !== article.id).map((node, idx) => {
                const angle = (idx / (graph.nodes.length - 1)) * 2 * Math.PI;
                const distance = 180;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                return (
                  <div
                    key={node.id}
                    onClick={() => {
                      if (!node.id.startsWith('cat-')) {
                        onSelectArticle(node.id);
                        onClose();
                      }
                    }}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    className="absolute pointer-events-auto p-3 rounded-2xl glass-card border border-slate-700 hover:border-indigo-400 text-slate-200 hover:text-white font-medium text-xs shadow-xl cursor-pointer transition-all hover:scale-110 flex items-center gap-2 group bg-slate-900/90"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:bg-cyan-400" />
                    <span>{node.label}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60 text-center text-xs text-slate-400">
          Click any connected node to dynamically navigate or generate that article!
        </div>

      </div>
    </div>
  );
};
