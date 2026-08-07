import React from 'react';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  Calendar, 
  HelpCircle, 
  Newspaper, 
  Cpu, 
  Atom, 
  Dna, 
  Landmark, 
  Palette, 
  Zap, 
  ShieldCheck,
  Award
} from 'lucide-react';
import type { Article } from '../types';
import { IN_THE_NEWS, ON_THIS_DAY, DID_YOU_KNOW, PORTAL_CATEGORIES } from '../data/news';

interface MainPageProps {
  featuredArticle: Article;
  onSelectArticle: (id: string) => void;
  onSearchOpen: () => void;
  onRandomClick: () => void;
}

const PORTAL_ICONS: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-blue-400" />,
  Atom: <Atom className="w-5 h-5 text-purple-400" />,
  Dna: <Dna className="w-5 h-5 text-emerald-400" />,
  Landmark: <Landmark className="w-5 h-5 text-amber-400" />,
  Palette: <Palette className="w-5 h-5 text-rose-400" />,
  Zap: <Zap className="w-5 h-5 text-cyan-400" />
};

export const MainPage: React.FC<MainPageProps> = ({
  featuredArticle,
  onSelectArticle,
  onSearchOpen,
  onRandomClick
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-16">
      
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl glass-panel p-8 sm:p-12 border border-slate-700/80 shadow-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-950/80">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome to WikiLLM — The Free AI-Powered Encyclopedia</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white leading-tight">
            Explore <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">Universal Knowledge</span> Synthesized by AI
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Read over 2.4 million articles enriched with real-time multi-level simplification (ELI5), interactive knowledge graphs, verified citation breakdown, and instant AI generation for any search topic.
          </p>

          {/* Quick Action Search Input */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onSearchOpen}
              className="flex-1 flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border border-indigo-500/40 hover:border-indigo-400 rounded-2xl text-slate-300 shadow-xl transition-all group"
            >
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Search any topic (e.g. "String Theory", "CRISPR", "Renaissance")</span>
              </div>
              <span className="text-xs bg-indigo-600/30 text-indigo-300 px-2.5 py-1 rounded-lg font-mono">
                ⌘K
              </span>
            </button>

            <button
              onClick={onRandomClick}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-2xl shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Random Topic</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid: Left Column (Featured & News) | Right Column (On This Day & Did You Know) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (2 Cols wide) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Featured Article of the Day */}
          <section className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h2 className="font-display font-bold text-lg text-slate-100 uppercase tracking-wider">
                  Featured Article of the Day
                </h2>
              </div>
              <span className="text-xs text-amber-400 font-semibold px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md">
                ★ Today's Highlight
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {featuredArticle.infobox.image && (
                <div className="relative rounded-xl overflow-hidden shadow-lg group aspect-video md:aspect-square">
                  <img 
                    src={featuredArticle.infobox.image} 
                    alt={featuredArticle.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>
              )}

              <div className="md:col-span-2 space-y-3">
                <h3 className="font-display font-extrabold text-2xl text-white hover:text-indigo-400 transition-colors cursor-pointer"
                    onClick={() => onSelectArticle(featuredArticle.id)}>
                  {featuredArticle.title}
                </h3>
                <p className="text-xs text-indigo-300 font-medium">{featuredArticle.subtitle}</p>

                <p className="text-slate-300 text-sm line-clamp-4 leading-relaxed font-serif-wiki">
                  {featuredArticle.leadParagraphs[0]}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectArticle(featuredArticle.id)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-md flex items-center gap-1.5 transition-all"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectArticle(featuredArticle.id)}
                    className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs rounded-xl border border-slate-700 transition-colors"
                  >
                    ELI5 Summary
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* In the News */}
          <section className="glass-card rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
              <Newspaper className="w-5 h-5 text-indigo-400" />
              <h2 className="font-display font-bold text-lg text-slate-100 uppercase tracking-wider">
                In the News
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {IN_THE_NEWS.map(item => (
                <div 
                  key={item.id}
                  onClick={() => item.articleId && onSelectArticle(item.articleId)}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 cursor-pointer transition-all hover:bg-slate-850 group"
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span className="font-semibold text-indigo-400">{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                  <h4 className="font-semibold text-sm text-slate-200 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.snippet}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column (1 Col wide) */}
        <div className="space-y-8">
          
          {/* On This Day in History */}
          <section className="glass-card rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <h2 className="font-display font-bold text-base text-slate-100 uppercase tracking-wider">
                On This Day
              </h2>
            </div>

            <div className="space-y-4">
              {ON_THIS_DAY.map((item, idx) => (
                <div key={idx} className="flex gap-3 text-xs leading-relaxed">
                  <span className="font-bold text-cyan-400 font-mono bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40 h-fit shrink-0">
                    {item.year}
                  </span>
                  <p className="text-slate-300">
                    {item.event}
                    {item.articleLink && (
                      <button 
                        onClick={() => onSelectArticle(item.articleLink!)}
                        className="ml-1 text-indigo-400 hover:underline font-medium"
                      >
                        [Read Topic]
                      </button>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Did You Know... */}
          <section className="glass-card rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <h2 className="font-display font-bold text-base text-slate-100 uppercase tracking-wider">
                Did You Know...
              </h2>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-300">
              {DID_YOU_KNOW.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-amber-400 font-bold shrink-0">•</span>
                  <div>
                    <span>{item.fact}</span>
                    <button
                      onClick={() => onSelectArticle(item.articleLink)}
                      className="ml-1 text-indigo-400 hover:underline font-semibold"
                    >
                      Learn more →
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Trust & Transparency Stats */}
          <section className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/20 text-center space-y-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
            <h3 className="font-display font-bold text-sm text-slate-100">
              100% Citation Verified Knowledge
            </h3>
            <p className="text-xs text-slate-400">
              Every claims-based paragraph is linked to peer-reviewed literature, academic presses, or primary source archives.
            </p>
          </section>

        </div>

      </div>

      {/* Category Portals Section */}
      <section className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-xl text-slate-100">
            Explore Knowledge Portals
          </h2>
          <span className="text-xs text-slate-400">Browse by major category</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PORTAL_CATEGORIES.map(portal => (
            <div
              key={portal.name}
              onClick={onRandomClick}
              className="p-4 rounded-2xl glass-card border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all hover:-translate-y-1 text-center space-y-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                {PORTAL_ICONS[portal.icon] || <Cpu className="w-5 h-5 text-indigo-400" />}
              </div>
              <h4 className="font-semibold text-xs text-slate-200 group-hover:text-indigo-300">
                {portal.name}
              </h4>
              <p className="text-[10px] text-slate-400">{portal.count}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
