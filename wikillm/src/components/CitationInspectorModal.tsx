import React from 'react';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { Citation } from '../types';

interface CitationInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  citation: Citation | null;
}

export const CitationInspectorModal: React.FC<CitationInspectorModalProps> = ({
  isOpen,
  onClose,
  citation
}) => {
  if (!isOpen || !citation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl border border-indigo-500/30 overflow-hidden shadow-2xl bg-slate-900/95 flex flex-col p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-slate-100">
                Citation Verification Inspector
              </h3>
              <p className="text-xs text-slate-400">Reference [{citation.id}]</p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Citation Details Card */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-indigo-400 text-sm">{citation.source}</span>
            {citation.year && <span className="text-slate-500 font-mono">Published {citation.year}</span>}
          </div>

          <p className="text-slate-200 font-serif-wiki text-sm leading-relaxed italic">
            "{citation.text}"
          </p>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-slate-400">Source Tier:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-semibold">
              {citation.sourceTier}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400">Trust Confidence Score:</span>
            <div className="flex items-center gap-1.5 font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>{citation.trustScore}% Verified</span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="flex justify-end gap-3 pt-2 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
