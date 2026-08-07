import React, { useState, useEffect } from 'react';
import { Search, Sparkles, X, ArrowRight } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (articleId: string) => void;
  onGenerateAiArticle: (topicQuery: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
  onGenerateAiArticle
}) => {
  const [query, setQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const articlesList = Object.values(ARTICLES_DATA);
  const filtered = query.trim()
    ? articlesList.filter(a => 
        a.title.toLowerCase().includes(query.toLowerCase()) || 
        a.categories.some(c => c.toLowerCase().includes(query.toLowerCase())) ||
        a.leadParagraphs[0]?.toLowerCase().includes(query.toLowerCase())
      )
    : articlesList.slice(0, 5);

  const handleGenerate = () => {
    if (!query.trim() || isGenerating) return;
    setIsGenerating(true);
    setTimeout(() => {
      onGenerateAiArticle(query);
      setIsGenerating(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl border border-indigo-500/30 overflow-hidden shadow-2xl bg-slate-900/95 flex flex-col">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-950/80">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Search 2.4M+ articles or type ANY custom topic..."
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-[11px] text-slate-500 bg-slate-800 px-2 py-0.5 rounded font-mono hidden sm:inline">
            ESC
          </span>
        </div>

        {/* Search Results / Dynamic AI Fallback */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
          
          {filtered.length > 0 ? (
            filtered.map(article => (
              <div
                key={article.id}
                onClick={() => { onSelectArticle(article.id); onClose(); }}
                className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/40 cursor-pointer transition-all hover:bg-slate-850 flex items-center justify-between gap-3 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-display font-bold text-sm text-slate-200 group-hover:text-indigo-300 transition-colors">
                      {article.title}
                    </h4>
                    {article.isFeatured && (
                      <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded font-semibold">
                        ★ Featured
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {article.subtitle || article.leadParagraphs[0]}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))
          ) : (
            <div className="text-center py-6 space-y-4">
              <p className="text-xs text-slate-400">No pre-baked article found matching "{query}".</p>
              
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <Sparkles className={`w-5 h-5 ${isGenerating ? 'animate-spin' : 'animate-pulse'}`} />
                <span>
                  {isGenerating ? 'Synthesizing New Article...' : `Generate AI Article for "${query}"`}
                </span>
              </button>
            </div>
          )}

          {query.trim() && filtered.length > 0 && (
            <div className="pt-3 border-t border-slate-800/80">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full p-3 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 hover:bg-indigo-900/60 text-indigo-200 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Deep Synthesis: Generate Custom AI Article for "{query}"</span>
              </button>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-[11px] text-slate-400">
          <span>Search powered by WikiLLM Neural Engine</span>
          <span>Press ESC to close</span>
        </div>

      </div>
    </div>
  );
};
