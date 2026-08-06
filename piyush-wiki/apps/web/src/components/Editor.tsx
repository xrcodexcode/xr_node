'use client';

import React, { useState, useEffect } from 'react';
import { Save, Bold, Italic, Code, Link2, Eye, Edit3, Check, Sparkles, RefreshCw, FileText } from 'lucide-react';
import { MarkdownRenderer } from './MarkdownRenderer';
import { saveNoteContent } from '@/lib/api';

interface EditorProps {
  initialSlug?: string;
  initialContent?: string;
  initialTitle?: string;
  onSaved?: (slug: string) => void;
}

export function Editor({
  initialSlug = 'new-note',
  initialContent = '',
  initialTitle = 'New Knowledge Note',
  onSaved
}: EditorProps) {
  const [slug, setSlug] = useState(initialSlug);
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent || `# ${initialTitle}\n\nStart typing your markdown note here...\n\nUse [[WikiLinks]] to connect notes together.`);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [mode, setMode] = useState<'split' | 'edit' | 'preview'>('split');

  const handleInsert = (before: string, after: string = '') => {
    setContent(prev => prev + `${before}${after}`);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const cleanSlug = slug.toLowerCase().replace(/[^\w-]/g, '-');
      await saveNoteContent(cleanSlug, content, title);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
      if (onSaved) onSaved(cleanSlug);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
      {/* Editor Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-3 flex-1 min-w-[240px]">
          <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
            <Edit3 className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
              }}
              placeholder="Note Title..."
              className="w-full text-lg font-serif font-bold text-slate-100 bg-transparent focus:outline-none placeholder-slate-500"
            />
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-0.5">
              <span>Slug: {slug}</span>
              <span>•</span>
              <span>Format: Obsidian Markdown (.md)</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setMode('edit')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${mode === 'edit' ? 'bg-sky-500 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Write
            </button>
            <button
              onClick={() => setMode('split')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${mode === 'split' ? 'bg-sky-500 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Split View
            </button>
            <button
              onClick={() => setMode('preview')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${mode === 'preview' ? 'bg-sky-500 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Preview
            </button>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-sky-500/20 transition-all disabled:opacity-50"
          >
            {saving ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : savedSuccess ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Saved to Vault</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Note</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Formatting Toolbar */}
      {mode !== 'preview' && (
        <div className="flex items-center gap-1 px-4 py-2 bg-slate-950/60 border-b border-slate-800 text-xs font-mono text-slate-400 overflow-x-auto">
          <button onClick={() => handleInsert('**', '**')} className="p-1.5 rounded hover:bg-slate-800 hover:text-slate-200" title="Bold">
            <Bold className="w-4 h-4" />
          </button>
          <button onClick={() => handleInsert('*', '*')} className="p-1.5 rounded hover:bg-slate-800 hover:text-slate-200" title="Italic">
            <Italic className="w-4 h-4" />
          </button>
          <button onClick={() => handleInsert('`', '`')} className="p-1.5 rounded hover:bg-slate-800 hover:text-slate-200" title="Inline Code">
            <Code className="w-4 h-4" />
          </button>
          <span className="w-px h-4 bg-slate-800 mx-1" />
          <button onClick={() => handleInsert('[[', ']]')} className="px-2 py-1 rounded hover:bg-slate-800 hover:text-sky-400 flex items-center gap-1 font-semibold text-sky-500">
            <Link2 className="w-3.5 h-3.5" />
            <span>[[WikiLink]]</span>
          </button>
          <button onClick={() => handleInsert('$ ', ' $')} className="px-2 py-1 rounded hover:bg-slate-800 hover:text-indigo-400 font-mono text-indigo-400">
            $ Math $
          </button>
          <button onClick={() => handleInsert('\n```python\n', '\n```\n')} className="px-2 py-1 rounded hover:bg-slate-800 hover:text-emerald-400 font-mono text-emerald-400">
            ```Code
          </button>
          <button onClick={() => handleInsert('\n> [!NOTE]\n> ')} className="px-2 py-1 rounded hover:bg-slate-800 hover:text-amber-400 font-mono text-amber-400">
            Callout
          </button>
        </div>
      )}

      {/* Main Workspace Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor Code Pane */}
        {(mode === 'split' || mode === 'edit') && (
          <div className="flex-1 border-r border-slate-800/80 bg-slate-950 p-4">
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="Write your markdown content..."
              className="w-full h-full bg-transparent text-slate-100 font-mono text-sm leading-relaxed focus:outline-none resize-none"
            />
          </div>
        )}

        {/* Live Rendered Preview Pane */}
        {(mode === 'split' || mode === 'preview') && (
          <div className="flex-1 bg-slate-900/60 p-6 overflow-y-auto">
            <div className="mb-4 text-xs font-mono text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-800">
              Live Wiki Preview
            </div>
            <MarkdownRenderer content={content} />
          </div>
        )}
      </div>
    </div>
  );
}
