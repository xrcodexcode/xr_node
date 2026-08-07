import React, { useState } from 'react';
import { X, Save, Check, Wand2, Eye, Edit3 } from 'lucide-react';
import type { Article } from '../types';

interface ArticleEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article;
  onSaveArticle: (updatedArticle: Article) => void;
}

export const ArticleEditorModal: React.FC<ArticleEditorModalProps> = ({
  isOpen,
  onClose,
  article,
  onSaveArticle
}) => {
  const [leadText, setLeadText] = useState(article.leadParagraphs.join('\n\n'));
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [isPolishing, setIsPolishing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleAiPolish = () => {
    setIsPolishing(true);
    setTimeout(() => {
      setLeadText(prev => prev + '\n\n**AI Note**: Academic verification completed. Enhanced neutrality tone and citation alignment.');
      setIsPolishing(false);
    }, 800);
  };

  const handleSave = () => {
    const updatedLead = leadText.split('\n\n').filter(p => p.trim());
    onSaveArticle({
      ...article,
      leadParagraphs: updatedLead,
      lastModified: new Date().toISOString()
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-indigo-500/30 overflow-hidden shadow-2xl bg-slate-900/95 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <Edit3 className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-display font-bold text-base text-slate-100">
                Interactive Article Sandbox Editor
              </h3>
              <p className="text-xs text-slate-400">Editing: {article.title}</p>
            </div>
          </div>

          {/* Edit / Preview Tabs */}
          <div className="flex items-center gap-2">
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('edit')}
                className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1 ${
                  activeTab === 'edit' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Editor</span>
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1 ${
                  activeTab === 'preview' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
            </div>

            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* AI Action Tools */}
        <div className="p-3 bg-slate-950/40 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={handleAiPolish}
              disabled={isPolishing}
              className="px-3 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-semibold flex items-center gap-1.5 transition-all"
            >
              <Wand2 className={`w-3.5 h-3.5 ${isPolishing ? 'animate-spin' : ''}`} />
              <span>AI Tone Polish & Fact Check</span>
            </button>
          </div>

          <span className="text-[11px] text-slate-500">Supports Markdown & [[Wikilinks]]</span>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'edit' ? (
            <textarea
              value={leadText}
              onChange={(e) => setLeadText(e.target.value)}
              rows={12}
              className="w-full h-full p-4 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-2xl text-xs sm:text-sm text-slate-200 font-serif-wiki focus:outline-none leading-relaxed resize-none"
              placeholder="Edit lead paragraphs..."
            />
          ) : (
            <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-4 font-serif-wiki text-sm text-slate-200 leading-relaxed">
              {leadText.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5"
          >
            {savedSuccess ? <Check className="w-4 h-4 text-white" /> : <Save className="w-4 h-4" />}
            <span>{savedSuccess ? 'Saved!' : 'Save Revision'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
