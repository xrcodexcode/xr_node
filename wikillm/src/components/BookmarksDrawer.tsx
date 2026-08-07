import React from 'react';
import { X, Bookmark, Trash2, BookOpen } from 'lucide-react';
import type { Bookmark as BookmarkType } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: BookmarkType[];
  onSelectArticle: (articleId: string) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarks,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 glass-panel border-l border-slate-800 shadow-2xl flex flex-col bg-slate-950/95 animate-in slide-in-from-right duration-300">
      
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
        <div className="flex items-center gap-2.5">
          <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
          <div>
            <h3 className="font-display font-bold text-sm text-slate-100">Saved Reading List</h3>
            <p className="text-[11px] text-slate-400">{bookmarks.length} articles saved</p>
          </div>
        </div>

        <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {bookmarks.length === 0 ? (
          <div className="text-center py-12 space-y-3 text-slate-500">
            <BookOpen className="w-10 h-10 mx-auto text-slate-600" />
            <p className="text-xs">No bookmarks saved yet.</p>
            <p className="text-[11px]">Click the bookmark icon on any article to save it here for offline reading.</p>
          </div>
        ) : (
          bookmarks.map(bm => (
            <div
              key={bm.articleId}
              className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-all flex items-center justify-between gap-3 group"
            >
              <div 
                onClick={() => { onSelectArticle(bm.articleId); onClose(); }}
                className="cursor-pointer flex-1"
              >
                <h4 className="font-semibold text-xs text-slate-200 group-hover:text-indigo-300 transition-colors">
                  {bm.title}
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5">Saved {bm.savedAt}</p>
              </div>

              <button
                onClick={() => onRemoveBookmark(bm.articleId)}
                className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                title="Remove bookmark"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {bookmarks.length > 0 && (
        <div className="p-4 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <button
            onClick={onClearAll}
            className="text-xs text-rose-400 hover:underline font-medium"
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl"
          >
            Done
          </button>
        </div>
      )}

    </div>
  );
};
