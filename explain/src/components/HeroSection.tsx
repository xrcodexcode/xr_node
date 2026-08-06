import React from 'react';
import { Sparkles, Network, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  mode: 'eli5' | 'tech';
  onNavigate: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ mode, onNavigate }) => {
  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-6 shadow-inner animate-float">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>
            {mode === 'eli5'
              ? '💡 Imagine if your brain had a "Save & Auto-Organize" button...'
              : '⚡ AI-Native Flat Knowledge Graph & Multi-Agent Control Plane'}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          {mode === 'eli5' ? (
            <>
              What is <span className="text-gradient-purple">NexusDB</span> and How Does It Work?
            </>
          ) : (
            <>
              Architectural Guide to <span className="text-gradient-purple">NexusDB</span> Knowledge Engine
            </>
          )}
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
          {mode === 'eli5' ? (
            <>
              Most people put their notes in messy folders where they die forever. <strong className="text-purple-300">NexusDB turns your ideas into Lego bricks</strong> that automatically snap together into a smart 3D spiderweb graph with AI helper bots! 🧠✨
            </>
          ) : (
            <>
              NexusDB is a flat, atomic Zettelkasten knowledge vault designed for human cognition and AI agentic workflows. Driven by Gemini, Codex, and Claude control planes with strict schema verification and zero-RAM local retrieval.
            </>
          )}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10 text-xs sm:text-sm">
          <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-card text-purple-200">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>{mode === 'eli5' ? '1 Note = 1 Idea (Lego Brick)' : 'Flat Atomic Nodes (02_NODES)'}</span>
          </div>
          <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-card text-cyan-200">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>{mode === 'eli5' ? 'Auto-Connected Web of Thought' : 'Explicit [[Backlinks]] & MOCs'}</span>
          </div>
          <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-card text-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{mode === 'eli5' ? 'Robot Assistants Organize It' : 'Automated Agent Control Planes (.antigravity)'}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('graph')}
            className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <Network className="w-5 h-5" />
            <span>Play With Live 2D/3D Node Graph</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('atomizer')}
            className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl glass-panel hover:bg-gray-800/80 text-cyan-300 font-semibold border border-cyan-500/30 transition-all hover:scale-105 active:scale-95"
          >
            <Zap className="w-5 h-5 text-cyan-400" />
            <span>Try AI Atomizer Playground</span>
          </button>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="glass-card p-4 rounded-xl">
            <div className="text-2xl sm:text-3xl font-black text-purple-400">100%</div>
            <div className="text-xs text-gray-400 mt-1">Atomic Precision (One Concept / Note)</div>
          </div>
          <div className="glass-card p-4 rounded-xl">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">0 ms</div>
            <div className="text-xs text-gray-400 mt-1">RAM overhead (Zero-RAM Local Search)</div>
          </div>
          <div className="glass-card p-4 rounded-xl">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">4-Stage</div>
            <div className="text-xs text-gray-400 mt-1">Ingestion Lifecycle (Capture → MOC)</div>
          </div>
          <div className="glass-card p-4 rounded-xl">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">3 AI</div>
            <div className="text-xs text-gray-400 mt-1">Agent Planes (Gemini, Codex, Claude)</div>
          </div>
        </div>

      </div>
    </section>
  );
};
