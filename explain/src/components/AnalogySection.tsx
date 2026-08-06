import React, { useState } from 'react';
import { FolderX, Sparkles, Box, Compass, Bot, Check, AlertCircle, ArrowRight, Lightbulb } from 'lucide-react';

interface AnalogySectionProps {
  mode: 'eli5' | 'tech';
}

export const AnalogySection: React.FC<AnalogySectionProps> = ({ mode }) => {
  const [selectedAnalogy, setSelectedAnalogy] = useState<number>(0);

  const analogies = [
    {
      id: 'lego',
      title: mode === 'eli5' ? '1. The Lego Brick Secret' : '1. Atomic Concept Isolation (Zettelkasten)',
      icon: Box,
      color: 'from-amber-500 to-orange-600',
      badge: 'Atomicity',
      problem: mode === 'eli5'
        ? 'Writing a 10-page doc with 50 different topics inside. Good luck finding that one secret recipe 6 months later!'
        : 'Monolithic notes with mixed context, high cognitive load, low reusability, and poor semantic search density.',
      solution: mode === 'eli5'
        ? 'Split everything into single "Lego Bricks" (Atomic Notes). 1 Note = 1 Idea. Now you can snap any idea to any other idea anytime!'
        : 'Enforce single-responsibility principle: 1 note per claim/definition/method. Stored in flat 02_NODES/ with standard YAML metadata.',
      example: '[[Atomic Note]] ↔ [[Zettelkasten]] ↔ [[Neural Memory]]'
    },
    {
      id: 'moc',
      title: mode === 'eli5' ? '2. Highways, Not Folder Mazes' : '2. Map of Content (MOC) Navigation Layer',
      icon: Compass,
      color: 'from-cyan-500 to-blue-600',
      badge: 'Navigation',
      problem: mode === 'eli5'
        ? 'Nesting folders inside folders: Work/2026/Projects/Misc/Drafts/Final/Notes_v2.txt. You will NEVER open this again.'
        : 'Deep hierarchical directory structures cause folder-siloing, broken file links, and duplicate content sprawl.',
      solution: mode === 'eli5'
        ? 'No subfolders! Keep all atomic notes flat, and build "Map of Content" (MOC) highway pages that index and guide you through ideas.'
        : 'Flat 02_NODES directory indexed by curated 03_MOC hierarchy (INDEX → Domain → Topic → Node) for zero-latency retrieval.',
      example: '03_MOC/AI-MOC.md links to [[Transformer-Architecture]], [[Attention-Mechanism]], etc.'
    },
    {
      id: 'ai',
      title: mode === 'eli5' ? '3. The Invisible Robot Librarian' : '3. Multi-Engine Agent Control Plane',
      icon: Bot,
      color: 'from-purple-500 to-indigo-600',
      badge: 'Automation',
      problem: mode === 'eli5'
        ? 'Keeping notes clean is boring. You end up with 500 unorganized bookmarks and duplicates everywhere.'
        : 'Manual vault maintenance fails at scale; graph breakdown, orphaned notes, and tag taxonomy rot occur over time.',
      solution: mode === 'eli5'
        ? 'AI Bots (Gemini, Codex, Claude) work quietly in the background! They catch duplicates, suggest links, and format notes according to strict rules.'
        : 'Automated governance in .antigravity/ rules, schemas, and python graph scripts that run graph checks and 11-gate note promotions.',
      example: '.antigravity/automations & graph-health audit checks'
    }
  ];

  return (
    <section id="analogies" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-semibold mb-3">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>{mode === 'eli5' ? 'The "Aha!" Moment' : 'Architectural Invariants'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {mode === 'eli5' ? 'Why Old Note Apps Suck vs How NexusDB Wins' : 'The NexusDB Paradigm Shift'}
        </h2>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          {mode === 'eli5'
            ? 'Click through the 3 simple analogies below to understand how NexusDB turns mental chaos into clear thinking.'
            : 'Compare legacy folder hierarchies with flat atomic knowledge graphs governed by autonomous AI control planes.'}
        </p>
      </div>

      {/* Before / After Comparison Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Old Way */}
        <div className="glass-panel p-6 rounded-2xl border-red-500/20 bg-red-950/10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 rounded-xl bg-red-900/40 text-red-400 border border-red-800/50">
              <FolderX className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-200">The Old Way: The Messy Attic</h3>
              <p className="text-xs text-red-400/80">Folders inside folders (Folder Hell)</p>
            </div>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
            <li className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>Notes get buried in deep nested folders and forgotten.</span>
            </li>
            <li className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>Same idea written 10 times in different documents (Duplicates).</span>
            </li>
            <li className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>AI can't read or link your thoughts effectively.</span>
            </li>
          </ul>
        </div>

        {/* NexusDB Way */}
        <div className="glass-panel p-6 rounded-2xl border-emerald-500/30 bg-emerald-950/10 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-900/40 text-emerald-400 border border-emerald-800/50">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-200">NexusDB Way: The Smart Lego Graph</h3>
              <p className="text-xs text-emerald-400/80">Flat Atomic Nodes + MOC Highways + AI</p>
            </div>
          </div>

          <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
            <li className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Every idea is a single atomic node that connects everywhere.</span>
            </li>
            <li className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Zero subfolders in NODES; navigation via interactive MOC maps.</span>
            </li>
            <li className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>AI agents automatically check rules, prevent duplicates, & link ideas.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Interactive Analogy Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Tab Buttons */}
        <div className="lg:col-span-4 space-y-3">
          {analogies.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedAnalogy === idx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedAnalogy(idx)}
                className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${
                  isSelected
                    ? 'glass-panel border-purple-500/50 bg-purple-950/30 shadow-lg shadow-purple-950/50'
                    : 'bg-gray-900/50 border-gray-800 hover:border-gray-700 text-gray-400'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-purple-400 block">{item.badge}</span>
                    <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                      {item.title}
                    </span>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-purple-400' : 'opacity-0'}`} />
              </button>
            );
          })}
        </div>

        {/* Selected Analogy Detail Card */}
        <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl border-purple-500/20 relative">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-black text-white">
                {analogies[selectedAnalogy].title}
              </span>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-purple-900/60 text-purple-300 font-mono border border-purple-700/50">
              {analogies[selectedAnalogy].badge}
            </span>
          </div>

          <div className="space-y-6">
            {/* The Problem */}
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40">
              <div className="text-xs font-extrabold uppercase text-red-400 mb-1 tracking-wider">
                ❌ The Old Pain Point
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {analogies[selectedAnalogy].problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
              <div className="text-xs font-extrabold uppercase text-emerald-400 mb-1 tracking-wider">
                ✅ The NexusDB Solution
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                {analogies[selectedAnalogy].solution}
              </p>
            </div>

            {/* Real World Code / Link Preview */}
            <div className="p-4 rounded-xl bg-gray-950/80 border border-gray-800 font-mono text-xs text-purple-300">
              <span className="text-gray-500 block mb-1">Vault Implementation Pattern:</span>
              <code>{analogies[selectedAnalogy].example}</code>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
