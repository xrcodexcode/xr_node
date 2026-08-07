import React, { useState } from 'react';
import { X, Download, Copy, Check, Database, ShieldCheck } from 'lucide-react';
import type { Article } from '../types';
import { generateNexusDbMarkdown } from '../services/pkmService';

interface PkmAtomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article;
  onSaveToPkm: (article: Article) => void;
}

export const PkmAtomizeModal: React.FC<PkmAtomizeModalProps> = ({
  isOpen,
  onClose,
  article,
  onSaveToPkm
}) => {
  const [ownerMoc, setOwnerMoc] = useState('[[ai-ml-moc]]');
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const markdownText = generateNexusDbMarkdown(article, ownerMoc);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = `${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
    const blob = new Blob([markdownText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  };

  const handleSaveToVault = () => {
    onSaveToPkm(article);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-indigo-500/30 overflow-hidden shadow-2xl bg-slate-900/95 flex flex-col max-h-[85vh] text-white">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center">
              <Database className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-slate-100">
                Atomize & Save to NexusDB Vault (02_NODES/)
              </h3>
              <p className="text-xs text-slate-400">Target: {article.title}</p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options Bar */}
        <div className="p-3 bg-slate-950/40 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Owner MOC:</span>
            <select
              value={ownerMoc}
              onChange={(e) => setOwnerMoc(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-slate-200 px-2.5 py-1 rounded-lg focus:outline-none"
            >
              <option value="[[ai-ml-moc]]">[[ai-ml-moc]] (AI & ML)</option>
              <option value="[[machine-learning-mastery-moc]]">[[machine-learning-mastery-moc]]</option>
              <option value="[[neural-network-moc]]">[[neural-network-moc]]</option>
              <option value="[[48-laws-of-power-moc]]">[[48-laws-of-power-moc]]</option>
              <option value="[[atomic-habits-moc]]">[[atomic-habits-moc]]</option>
              <option value="[[study-moc]]">[[study-moc]]</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
            <ShieldCheck className="w-4 h-4" />
            <span>Frontmatter v4 Verified (UUID v4)</span>
          </div>
        </div>

        {/* Generated Markdown Preview */}
        <div className="flex-1 overflow-y-auto p-4">
          <pre className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {markdownText}
          </pre>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy Markdown'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Download .md</span>
            </button>

            <button
              onClick={handleSaveToVault}
              className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5"
            >
              {savedSuccess ? <Check className="w-4 h-4" /> : <Database className="w-4 h-4" />}
              <span>{savedSuccess ? 'Saved to NexusDB!' : 'Save in PKM Vault'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
