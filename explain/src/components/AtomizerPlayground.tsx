import React, { useState } from 'react';
import { Zap, Sparkles, Layers, ArrowRight, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AtomizerPlaygroundProps {
  mode: 'eli5' | 'tech';
}

const SAMPLE_TEXTS = [
  {
    label: 'SpaceX Rocket Materials',
    text: 'SpaceX uses Stainless Steel 304L for Starship because at cryogenic temperatures (-150C) it becomes 50% stronger than carbon fiber, while costing only $3 per kilogram compared to carbon fiber which costs $135 per kilogram. Starship also uses thermal protection heat tiles to survive atmospheric re-entry at 27,000 km/h.'
  },
  {
    label: 'Neural Networks & Attention',
    text: 'Transformer models replace recurrent neural networks by using self-attention mechanisms. Self-attention allows every token in a sequence to look at every other token simultaneously, eliminating sequential bottlenecking during training and enabling massive parallel computing on GPUs.'
  },
  {
    label: 'Deep Work & Focus',
    text: 'Deep work is the ability to focus without distraction on a cognitively demanding task. Cal Newport argues that multitasking creates attention residue where fragments of your attention remain stuck on the previous task, reducing cognitive horsepower by up to 40%.'
  }
];

export const AtomizerPlayground: React.FC<AtomizerPlaygroundProps> = ({ mode }) => {
  const [inputText, setInputText] = useState<string>(SAMPLE_TEXTS[0].text);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [outputNodes, setOutputNodes] = useState<any[] | null>(null);

  const handleAtomize = () => {
    setIsProcessing(true);
    setOutputNodes(null);

    setTimeout(() => {
      let nodes = [];
      if (inputText.toLowerCase().includes('spacex') || inputText.toLowerCase().includes('steel')) {
        nodes = [
          {
            title: 'Stainless-Steel-304L-Cryogenic-Strength',
            type: 'atomic-note',
            tags: ['materials', 'aerospace', 'engineering'],
            backlinks: ['[[Starship-Architecture]]', '[[Cryogenic-Propulsion]]'],
            body: 'Stainless Steel 304L strength increases by 50% under cryogenic conditions (-150°C).'
          },
          {
            title: 'Starship-Material-Cost-Efficiency',
            type: 'atomic-note',
            tags: ['cost-engineering', 'aerospace'],
            backlinks: ['[[Stainless-Steel-304L-Cryogenic-Strength]]'],
            body: 'Stainless Steel 304L costs $3/kg vs Carbon Fiber at $135/kg, enabling rapid iteration.'
          },
          {
            title: 'Thermal-Protection-System-Tiles',
            type: 'atomic-note',
            tags: ['reentry-mechanics', 'materials'],
            backlinks: ['[[Atmospheric-Reentry]]'],
            body: 'Starship uses hexagonal ceramic tiles for heat shielding against 27,000 km/h re-entry friction.'
          }
        ];
      } else if (inputText.toLowerCase().includes('transformer') || inputText.toLowerCase().includes('attention')) {
        nodes = [
          {
            title: 'Transformer-Self-Attention-Mechanism',
            type: 'atomic-note',
            tags: ['deep-learning', 'transformers', 'ai'],
            backlinks: ['[[Recurrent-Neural-Networks]]', '[[GPU-Parallelism]]'],
            body: 'Self-attention calculates pairwise token relationships simultaneously across an entire context window.'
          },
          {
            title: 'GPU-Parallelization-in-LLM-Training',
            type: 'atomic-note',
            tags: ['compute', 'hardware', 'deep-learning'],
            backlinks: ['[[Transformer-Self-Attention-Mechanism]]'],
            body: 'Parallel tensor math eliminates sequential time-step bottlenecks present in legacy RNN architectures.'
          }
        ];
      } else {
        nodes = [
          {
            title: 'Deep-Work-Cognitive-Definition',
            type: 'atomic-note',
            tags: ['productivity', 'psychology', 'focus'],
            backlinks: ['[[Attention-Residue-Effect]]'],
            body: 'Deep Work is high-concentration cognitive effort performed in a state of zero distraction.'
          },
          {
            title: 'Attention-Residue-Effect',
            type: 'atomic-note',
            tags: ['cognitive-science', 'focus'],
            backlinks: ['[[Deep-Work-Cognitive-Definition]]'],
            body: 'Rapid task-switching leaves mental residue from prior tasks, reducing problem-solving capacity by ~40%.'
          }
        ];
      }

      setIsProcessing(false);
      setOutputNodes(nodes);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    }, 1200);
  };

  return (
    <section id="atomizer" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-semibold mb-3">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive AI Sandbox</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {mode === 'eli5' ? 'Try the AI Atomizer Bot Live!' : 'Interactive Atomic Concept Extractor'}
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          {mode === 'eli5'
            ? 'Paste or select any messy text paragraph below. Watch the AI slice it into clean connected Lego notes!'
            : 'Simulate automated atomic extraction, metadata tagging, and semantic backlinking from unstructured text.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border-cyan-500/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-xs font-extrabold uppercase text-cyan-300 tracking-wider">
                Unstructured Input Text
              </label>
              <span className="text-xs text-gray-500">Pick a sample or type:</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {SAMPLE_TEXTS.map((sample) => (
                <button
                  key={sample.label}
                  onClick={() => setInputText(sample.text)}
                  className="px-2.5 py-1 rounded-lg bg-gray-900 hover:bg-gray-800 text-xs text-gray-300 border border-gray-700 font-medium transition-colors"
                >
                  {sample.label}
                </button>
              ))}
            </div>

            <textarea
              rows={6}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste raw text here..."
              className="w-full p-4 rounded-xl bg-gray-950 border border-gray-800 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 font-sans leading-relaxed resize-none shadow-inner"
            />
          </div>

          <button
            onClick={handleAtomize}
            disabled={isProcessing || !inputText.trim()}
            className="w-full mt-6 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-gray-950 font-extrabold shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin text-gray-950" />
                <span>AI Slicing Text into Lego Notes...</span>
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 fill-current" />
                <span>Atomize This Text Now!</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border-purple-500/20 relative">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-purple-400" />
              <h3 className="text-xs uppercase font-extrabold text-purple-300 tracking-wider">
                Extracted Atomic Notes (02_NODES)
              </h3>
            </div>
            {outputNodes && (
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 font-mono font-bold border border-emerald-800">
                {outputNodes.length} Atomic Nodes Created
              </span>
            )}
          </div>

          {isProcessing ? (
            <div className="h-64 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin"></div>
              <p className="text-xs text-purple-300 font-mono animate-pulse">Running .antigravity/skills/atomization...</p>
            </div>
          ) : outputNodes ? (
            <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
              {outputNodes.map((node, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-950 border border-gray-800 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-purple-400">[[{node.title}]]</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gray-900 text-gray-400 font-mono">02_NODES/</span>
                  </div>

                  <p className="text-xs text-gray-200 leading-relaxed mb-3">{node.body}</p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-900 text-[11px]">
                    <div className="flex flex-wrap gap-1">
                      {node.tags.map((tag: string) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/40">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-1 text-cyan-400 font-mono">
                      <span>Links:</span>
                      {node.backlinks.map((bl: string) => (
                        <span key={bl} className="underline underline-offset-2">{bl}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-center text-gray-500 p-6">
              <Sparkles className="w-8 h-8 text-gray-700 mb-2" />
              <p className="text-xs">Click "Atomize This Text Now!" to watch the AI slice unstructured thoughts into clean atomic notes.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
