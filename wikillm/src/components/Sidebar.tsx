import React from 'react';
import type { ArticleSection } from '../types';

interface SidebarProps {
  onHomeClick: () => void;
  onRandomClick: () => void;
  onSelectArticle: (articleId: string) => void;
  activeArticleId?: string;
  sections?: ArticleSection[];
  activeSectionId?: string;
  isOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  onHomeClick,
  onRandomClick,
  onSelectArticle,
  sections,
  activeSectionId,
  isOpen,
  onCloseMobile
}) => {

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onCloseMobile();
  };

  return (
    <aside className={`
      fixed md:sticky top-14 left-0 z-30 h-[calc(100vh-3.5rem)] w-60 bg-[var(--wiki-sidebar-bg)] border-r border-[var(--wiki-subtle-border)]
      transition-transform duration-200 ease-in-out overflow-y-auto flex flex-col justify-between text-xs text-[var(--wiki-text)]
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
    `}>
      <div className="p-3 space-y-5">
        
        {/* Table of Contents Section (Primary when active article loaded) */}
        {sections && sections.length > 0 ? (
          <div>
            <div className="font-bold text-[var(--wiki-text-muted)] uppercase text-[10px] tracking-wider mb-2 px-1 border-b border-[var(--wiki-subtle-border)] pb-1">
              Contents
            </div>
            <nav className="space-y-0.5 font-sans">
              <button
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onCloseMobile(); }}
                className="w-full text-left px-2 py-1 rounded text-[var(--wiki-link)] hover:underline font-medium block truncate"
              >
                (Top)
              </button>

              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-2 py-1 rounded text-xs truncate transition-colors flex items-center gap-1.5 ${
                    activeSectionId === section.id
                      ? 'bg-[var(--wiki-highlight)] text-[var(--wiki-link)] font-bold'
                      : 'text-[var(--wiki-text)] hover:bg-[var(--wiki-card-bg)] hover:text-[var(--wiki-link)]'
                  }`}
                >
                  <span className="text-[var(--wiki-text-muted)] font-mono text-[11px] shrink-0">{idx + 1}</span>
                  <span className="truncate">{section.title}</span>
                </button>
              ))}
            </nav>
          </div>
        ) : (
          /* Default Wikipedia Navigation */
          <div>
            <div className="font-bold text-[var(--wiki-text-muted)] uppercase text-[10px] tracking-wider mb-2 px-1 border-b border-[var(--wiki-subtle-border)] pb-1">
              Navigation
            </div>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => { onHomeClick(); onCloseMobile(); }}
                  className="w-full text-left px-2 py-1 rounded text-[var(--wiki-link)] hover:underline"
                >
                  Main page
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectArticle('claude-ai'); onCloseMobile(); }}
                  className="w-full text-left px-2 py-1 rounded text-[var(--wiki-link)] hover:underline font-semibold"
                >
                  Claude (AI)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onRandomClick(); onCloseMobile(); }}
                  className="w-full text-left px-2 py-1 rounded text-[var(--wiki-link)] hover:underline"
                >
                  Random article
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onSelectArticle('agi'); onCloseMobile(); }}
                  className="w-full text-left px-2 py-1 rounded text-[var(--wiki-link)] hover:underline"
                >
                  Artificial General Intelligence
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Contribute Section */}
        <div>
          <div className="font-bold text-[var(--wiki-text-muted)] uppercase text-[10px] tracking-wider mb-2 px-1 border-b border-[var(--wiki-subtle-border)] pb-1">
            Contribute
          </div>
          <ul className="space-y-1 text-[var(--wiki-link)]">
            <li><a href="#help" onClick={(e) => { e.preventDefault(); alert("Help portal simulated."); }} className="hover:underline">Help</a></li>
            <li><a href="#learn" onClick={(e) => { e.preventDefault(); alert("Learn to edit simulated."); }} className="hover:underline">Learn to edit</a></li>
            <li><a href="#community" onClick={(e) => { e.preventDefault(); alert("Community portal simulated."); }} className="hover:underline">Community portal</a></li>
            <li><a href="#changes" onClick={(e) => { e.preventDefault(); alert("Recent changes simulated."); }} className="hover:underline">Recent changes</a></li>
          </ul>
        </div>

      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-[var(--wiki-subtle-border)] bg-[var(--wiki-card-bg)] text-[10px] text-[var(--wiki-text-muted)] space-y-1">
        <p>Text is available under the Creative Commons Attribution-ShareAlike License 4.0.</p>
      </div>
    </aside>
  );
};
