import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Globe, 
  Sparkles,
  Bookmark as BookmarkIcon,
  Brain
} from 'lucide-react';
import type { LanguageCode, ViewMode } from '../types';

interface NavbarProps {
  viewMode: ViewMode;
  onToggleViewMode: (mode: ViewMode) => void;
  onSearchOpen: () => void;
  onHomeClick: () => void;
  onBookmarksOpen: () => void;
  onAskAiOpen: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  isSerifFont: boolean;
  onToggleSerifFont: () => void;
  isFullWidth: boolean;
  onToggleFullWidth: () => void;
  currentLanguage: LanguageCode;
  onChangeLanguage: (lang: LanguageCode) => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  bookmarkCount: number;
}

const LANGUAGES: { code: LanguageCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'hi', label: 'हिन्दी' }
];

export const Navbar: React.FC<NavbarProps> = ({
  viewMode,
  onToggleViewMode,
  onSearchOpen,
  onHomeClick,
  onBookmarksOpen,
  onAskAiOpen,
  isDark,
  onToggleTheme,
  isSerifFont,
  onToggleSerifFont,
  isFullWidth,
  onToggleFullWidth,
  currentLanguage,
  onChangeLanguage,
  onToggleSidebar,
  isSidebarOpen,
  bookmarkCount
}) => {
  const [showAppearanceMenu, setShowAppearanceMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--wiki-header-bg)] border-b border-[var(--wiki-subtle-border)] shadow-xs font-sans">
      <div className="max-w-[1400px] mx-auto px-4 h-14 flex items-center justify-between gap-4">
        
        {/* Left: Main Menu Hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-1.5 text-[var(--wiki-text-muted)] hover:text-[var(--wiki-text)] hover:bg-[var(--wiki-card-bg)] rounded transition-colors"
            title="Main menu"
            aria-label="Toggle Main menu"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button 
            onClick={onHomeClick}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
          >
            {viewMode === 'nexusdb-pkm' ? (
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
                <Brain className="w-4 h-4 text-white" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-100 flex items-center justify-center text-white dark:text-slate-900 font-serif-wiki font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
                W
              </div>
            )}
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-wiki font-bold text-lg tracking-tight text-[var(--wiki-text)]">
                  {viewMode === 'nexusdb-pkm' ? 'NexusDB' : 'WIKIPEDIA'}
                </span>
                {viewMode === 'nexusdb-pkm' && (
                  <span className="px-1.5 py-0.2 text-[9px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded">
                    PKM Vault
                  </span>
                )}
              </div>
              <p className="text-[10px] text-[var(--wiki-text-muted)] tracking-wider uppercase hidden sm:block -mt-1">
                {viewMode === 'nexusdb-pkm' ? 'Personal Knowledge Management' : 'The Free Encyclopedia'}
              </p>
            </div>
          </button>

          {/* PKM Mode Switcher Pill */}
          <div className="hidden lg:flex items-center p-0.5 bg-[var(--wiki-card-bg)] border border-[var(--wiki-border)] rounded-lg text-xs font-semibold">
            <button
              onClick={() => onToggleViewMode('wikipedia')}
              className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                viewMode === 'wikipedia'
                  ? 'bg-[var(--wiki-link)] text-white shadow-xs'
                  : 'text-[var(--wiki-text-muted)] hover:text-[var(--wiki-text)]'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Wikipedia</span>
            </button>
            <button
              onClick={() => onToggleViewMode('nexusdb-pkm')}
              className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                viewMode === 'nexusdb-pkm'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-xs'
                  : 'text-[var(--wiki-text-muted)] hover:text-[var(--wiki-text)]'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>NexusDB Vault</span>
            </button>
          </div>
        </div>

        {/* Center: Search Box */}
        <div className="flex-1 max-w-xl">
          <button
            onClick={onSearchOpen}
            className="w-full flex items-center justify-between px-3 py-1.5 bg-[var(--wiki-bg)] border border-[var(--wiki-border)] hover:border-[var(--wiki-link)] rounded text-left text-[var(--wiki-text-muted)] transition-all shadow-xs group"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[var(--wiki-text-muted)] group-hover:text-[var(--wiki-link)] transition-colors" />
              <span className="text-xs">
                {viewMode === 'nexusdb-pkm' ? 'Search 373+ NexusDB Vault notes...' : 'Search Wikipedia'}
              </span>
            </div>
            <span className="text-[10px] bg-[var(--wiki-card-bg)] border border-[var(--wiki-subtle-border)] text-[var(--wiki-text-muted)] px-1.5 py-0.5 rounded font-mono">
              ⌘K
            </span>
          </button>
        </div>

        {/* Right: Personal Tools & Appearance */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs text-[var(--wiki-text)]">
          
          {/* Ask AI */}
          <button
            onClick={onAskAiOpen}
            className="hidden md:flex items-center gap-1 px-2.5 py-1 bg-[var(--wiki-card-bg)] hover:bg-[var(--wiki-highlight)] border border-[var(--wiki-border)] rounded text-xs font-semibold text-[var(--wiki-link)] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask AI</span>
          </button>

          {/* Bookmarks */}
          <button
            onClick={onBookmarksOpen}
            className="p-1.5 text-[var(--wiki-text-muted)] hover:text-[var(--wiki-text)] rounded relative"
            title="Saved Reading List"
          >
            <BookmarkIcon className="w-4 h-4" />
            {bookmarkCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-slate-950 font-bold text-[9px] rounded-full flex items-center justify-center">
                {bookmarkCount}
              </span>
            )}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1 px-2 py-1 bg-[var(--wiki-card-bg)] border border-[var(--wiki-subtle-border)] hover:border-[var(--wiki-border)] rounded text-xs font-medium"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--wiki-text-muted)]" />
              <span>{currentLanguage.toUpperCase()}</span>
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-[var(--wiki-bg)] border border-[var(--wiki-border)] rounded shadow-lg py-1 z-50 text-xs">
                <div className="px-3 py-1 font-bold text-[var(--wiki-text-muted)] uppercase text-[10px] border-b border-[var(--wiki-subtle-border)]">
                  32 Languages Available
                </div>
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onChangeLanguage(lang.code);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 hover:bg-[var(--wiki-card-bg)] transition-colors ${
                      currentLanguage === lang.code ? 'font-bold text-[var(--wiki-link)]' : ''
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Appearance */}
          <div className="relative">
            <button
              onClick={() => setShowAppearanceMenu(!showAppearanceMenu)}
              className="px-2 py-1 bg-[var(--wiki-card-bg)] border border-[var(--wiki-subtle-border)] hover:border-[var(--wiki-border)] rounded text-xs font-medium flex items-center gap-1"
            >
              <span>Appearance</span>
            </button>

            {showAppearanceMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-[var(--wiki-bg)] border border-[var(--wiki-border)] rounded shadow-xl p-3 z-50 text-xs space-y-3">
                <div className="font-bold text-[var(--wiki-text-muted)] border-b border-[var(--wiki-subtle-border)] pb-1 uppercase text-[10px]">
                  Appearance Controls
                </div>

                {/* Theme */}
                <div>
                  <label className="block font-semibold text-[var(--wiki-text)] mb-1">Color Theme</label>
                  <div className="flex gap-1">
                    <button
                      onClick={() => { if (isDark) onToggleTheme(); }}
                      className={`flex-1 py-1 px-2 rounded border text-center font-medium ${
                        !isDark ? 'bg-[var(--wiki-link)] text-white border-[var(--wiki-link)]' : 'bg-[var(--wiki-card-bg)] border-[var(--wiki-border)]'
                      }`}
                    >
                      Light
                    </button>
                    <button
                      onClick={() => { if (!isDark) onToggleTheme(); }}
                      className={`flex-1 py-1 px-2 rounded border text-center font-medium ${
                        isDark ? 'bg-[var(--wiki-link)] text-white border-[var(--wiki-link)]' : 'bg-[var(--wiki-card-bg)] border-[var(--wiki-border)]'
                      }`}
                    >
                      Dark
                    </button>
                  </div>
                </div>

                {/* Font Family */}
                <div>
                  <label className="block font-semibold text-[var(--wiki-text)] mb-1">Typography</label>
                  <div className="flex gap-1">
                    <button
                      onClick={() => { if (isSerifFont) onToggleSerifFont(); }}
                      className={`flex-1 py-1 px-2 rounded border text-center font-medium ${
                        !isSerifFont ? 'bg-[var(--wiki-link)] text-white border-[var(--wiki-link)]' : 'bg-[var(--wiki-card-bg)] border-[var(--wiki-border)]'
                      }`}
                    >
                      Sans-serif
                    </button>
                    <button
                      onClick={() => { if (!isSerifFont) onToggleSerifFont(); }}
                      className={`flex-1 py-1 px-2 rounded border text-center font-serif-wiki font-medium ${
                        isSerifFont ? 'bg-[var(--wiki-link)] text-white border-[var(--wiki-link)]' : 'bg-[var(--wiki-card-bg)] border-[var(--wiki-border)]'
                      }`}
                    >
                      Serif
                    </button>
                  </div>
                </div>

                {/* Page Width */}
                <div>
                  <label className="block font-semibold text-[var(--wiki-text)] mb-1">Width</label>
                  <button
                    onClick={onToggleFullWidth}
                    className="w-full py-1 px-2 rounded border text-center font-medium bg-[var(--wiki-card-bg)] border-[var(--wiki-border)] hover:bg-[var(--wiki-highlight)]"
                  >
                    {isFullWidth ? 'Standard Width (1200px)' : 'Full Width'}
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
};
