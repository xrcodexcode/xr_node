import React from 'react';
import { 
  Sparkles, 
  Play, 
  Pause, 
  Network, 
  Edit3, 
  Download, 
  BookOpen, 
  Zap, 
  Database
} from 'lucide-react';
import type { ComplexityLevel } from '../types';

interface LLMToolbarProps {
  complexity: ComplexityLevel;
  onSetComplexity: (level: ComplexityLevel) => void;
  onOpenGraph: () => void;
  onOpenAskAi: () => void;
  onOpenEditor: () => void;
  onOpenAtomizePkm: () => void;
  onExportMarkdown: () => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  audioSpeed: number;
  onChangeAudioSpeed: (speed: number) => void;
  isPkmNote?: boolean;
}

export const LLMToolbar: React.FC<LLMToolbarProps> = ({
  complexity,
  onSetComplexity,
  onOpenGraph,
  onOpenAskAi,
  onOpenEditor,
  onOpenAtomizePkm,
  onExportMarkdown,
  isPlayingAudio,
  onToggleAudio,
  audioSpeed,
  onChangeAudioSpeed
}) => {
  return (
    <div className="sticky bottom-6 z-30 w-full max-w-4xl mx-auto px-4 font-sans">
      <div className="glass-panel rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-indigo-500/30 flex flex-wrap items-center justify-between gap-2 bg-slate-900/90 text-white">
        
        {/* Left: Complexity Level Selector Pill */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => onSetComplexity('standard')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              complexity === 'standard' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
            title="Standard View"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Standard</span>
          </button>

          <button
            onClick={() => onSetComplexity('eli5')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              complexity === 'eli5' 
                ? 'bg-amber-500 text-slate-950 shadow-md font-bold' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
            title="Explain Like I'm 5 (Simplified)"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>ELI5</span>
          </button>
        </div>

        {/* Center: Audio Player Controls */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
          <button
            onClick={onToggleAudio}
            className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isPlayingAudio ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:bg-slate-800'
            }`}
            title={isPlayingAudio ? 'Pause Audio Reader' : 'Play Audio Reader'}
          >
            {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-400" />}
            <span className="text-[11px] font-medium hidden sm:inline">
              {isPlayingAudio ? 'Pause' : 'Listen'}
            </span>
          </button>

          {isPlayingAudio && (
            <button
              onClick={() => onChangeAudioSpeed(audioSpeed === 1 ? 1.5 : audioSpeed === 1.5 ? 2 : 1)}
              className="px-2 py-1 text-[10px] font-mono text-emerald-400 hover:bg-slate-800 rounded"
              title="Change playback speed"
            >
              {audioSpeed}x
            </button>
          )}
        </div>

        {/* Right: PKM Vault Atomize & AI Tools */}
        <div className="flex items-center gap-2">
          
          {/* Atomize to NexusDB Vault Button */}
          <button
            onClick={onOpenAtomizePkm}
            className="px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
            title="Atomize and Export note to NexusDB (02_NODES/)"
          >
            <Database className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Atomize to Vault</span>
          </button>

          <button
            onClick={onOpenGraph}
            className="p-2 text-slate-300 hover:text-indigo-400 hover:bg-slate-800 rounded-xl transition-colors flex items-center gap-1 text-xs font-medium"
            title="Interactive Knowledge Graph"
          >
            <Network className="w-4 h-4 text-indigo-400" />
            <span className="hidden lg:inline">Graph</span>
          </button>

          <button
            onClick={onOpenAskAi}
            className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-xl font-semibold text-xs shadow-md shadow-indigo-500/20 flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Ask AI</span>
          </button>

          <button
            onClick={onOpenEditor}
            className="p-2 text-slate-300 hover:text-amber-400 hover:bg-slate-800 rounded-xl transition-colors"
            title="Edit / AI Polish Article"
          >
            <Edit3 className="w-4 h-4" />
          </button>

          <button
            onClick={onExportMarkdown}
            className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-xl transition-colors"
            title="Download Article Markdown"
          >
            <Download className="w-4 h-4" />
          </button>

        </div>

      </div>
    </div>
  );
};
