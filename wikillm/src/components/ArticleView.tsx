import React, { useState } from 'react';
import { Bookmark, Share2, Check } from 'lucide-react';
import type { Article, Citation, ComplexityLevel, LanguageCode } from '../types';

interface ArticleViewProps {
  article: Article;
  complexity: ComplexityLevel;
  onSelectArticle: (articleId: string) => void;
  onOpenCitationInspector: (citation: Citation) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  currentLanguage: LanguageCode;
  translatedLead?: string[];
  translatedTitle?: string;
  activeSectionId?: string;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  complexity,
  onSelectArticle,
  onOpenCitationInspector,
  isBookmarked,
  onToggleBookmark,
  translatedLead,
  translatedTitle
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'article' | 'talk'>('article');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const activeLead = complexity === 'eli5' && article.eli5Version
    ? article.eli5Version.leadParagraphs
    : (translatedLead || article.leadParagraphs);

  const activeSections = complexity === 'eli5' && article.eli5Version
    ? article.eli5Version.sections
    : article.sections;

  const displayTitle = translatedTitle || article.title;

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\[\[.*?\]\]|\[\d+\]|\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith('[[') && part.endsWith(']]')) {
        const linkContent = part.slice(2, -2);
        const [target, label] = linkContent.includes('|') ? linkContent.split('|') : [linkContent, linkContent];
        const targetId = target.toLowerCase().replace(/\s+/g, '-');
        
        return (
          <span
            key={index}
            onClick={() => onSelectArticle(targetId)}
            className="wiki-link"
          >
            {label}
          </span>
        );
      }

      if (/^\[\d+\]$/.test(part)) {
        const citId = part.slice(1, -1);
        const citation = article.citations.find(c => c.id === citId);

        return (
          <span
            key={index}
            onClick={() => citation && onOpenCitationInspector(citation)}
            className="wiki-cite-link"
            title={citation ? `[${citId}] ${citation.source}` : `[${citId}]`}
          >
            [{citId}]
          </span>
        );
      }

      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
      }

      return <span key={index}>{part}</span>;
    });
  };

  return (
    <article className="max-w-5xl mx-auto pb-16 font-sans">
      
      {/* Wikipedia Sub-Header Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-between border-b border-[var(--wiki-border)] mb-4 text-xs font-sans">
        
        {/* Left Tabs: Article | Talk */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('article')}
            className={`px-3 py-1.5 border-b-2 font-medium transition-colors ${
              activeTab === 'article' 
                ? 'border-[var(--wiki-link)] text-[var(--wiki-text)] font-bold' 
                : 'border-transparent text-[var(--wiki-link)] hover:text-[var(--wiki-link-hover)]'
            }`}
          >
            Article
          </button>
          <button
            onClick={() => {
              setActiveTab('talk');
              alert("Wikipedia Talk page simulated: Discussion on Constitutional AI thresholds and Claude Code release protocols.");
            }}
            className={`px-3 py-1.5 border-b-2 font-medium transition-colors ${
              activeTab === 'talk' 
                ? 'border-[var(--wiki-link)] text-[var(--wiki-text)] font-bold' 
                : 'border-transparent text-[var(--wiki-link)] hover:text-[var(--wiki-link-hover)]'
            }`}
          >
            Talk
          </button>
        </div>

        {/* Right Tabs: Read | Edit | View history | Tools */}
        <div className="flex items-center gap-3 text-[var(--wiki-link)] font-medium">
          <span className="text-[var(--wiki-text)] font-bold border-b-2 border-[var(--wiki-text)] py-1.5">Read</span>
          <a href="#edit" onClick={(e) => { e.preventDefault(); alert("Wikipedia Editor opened in sandbox mode."); }} className="hover:underline">Edit</a>
          <a href="#history" onClick={(e) => { e.preventDefault(); alert("Revision History: 1,420 revisions by 312 editors."); }} className="hover:underline">View history</a>
          <div className="flex items-center gap-1 pl-2 border-l border-[var(--wiki-subtle-border)]">
            <button onClick={onToggleBookmark} title={isBookmarked ? 'Saved' : 'Bookmark'} className="p-1 hover:text-[var(--wiki-text)]">
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[var(--wiki-link)] text-[var(--wiki-link)]' : ''}`} />
            </button>
            <button onClick={handleCopyLink} title="Share Link" className="p-1 hover:text-[var(--wiki-text)]">
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

      </div>

      {/* Main Title Header */}
      <div className="mb-6 space-y-1">
        <h1 className="font-serif-wiki text-3xl sm:text-4xl font-normal text-[var(--wiki-text)] border-b border-[var(--wiki-border)] pb-2">
          {displayTitle}
        </h1>
        <div className="text-xs text-[var(--wiki-text-muted)] italic">
          From Wikipedia, the free encyclopedia
        </div>

        {article.subtitle && (
          <div className="wiki-hatnote mt-2">
            This article is about {article.subtitle}.
          </div>
        )}
      </div>

      {/* Main Grid: Article Content + Wikipedia Infobox */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 items-start">
        
        {/* Left Column: Lead & Article Sections */}
        <div className="flex-1 min-w-0 space-y-6 text-sm text-[var(--wiki-text)] leading-relaxed">
          
          {/* Lead Paragraphs */}
          <div className="space-y-3 font-sans">
            {activeLead.map((para, idx) => (
              <p key={idx}>{renderFormattedText(para)}</p>
            ))}
          </div>

          {/* Render Main Article Sections */}
          {activeSections.map((section, idx) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              
              <h2 className="wiki-h2">
                <span>
                  <span className="font-mono text-xs text-[var(--wiki-text-muted)] mr-2">{idx + 1}</span>
                  {section.title}
                </span>
                <a href={`#edit-${section.id}`} onClick={(e) => { e.preventDefault(); alert(`Editing section: ${section.title}`); }} className="wiki-edit-section">
                  [edit]
                </a>
              </h2>

              <div className="space-y-3 font-sans">
                {section.content.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>{renderFormattedText(paragraph)}</p>
                ))}
              </div>

              {/* Code Snippet e.g. for Claude Code */}
              {section.codeSnippet && (
                <div className="my-3 p-3 rounded bg-[var(--wiki-card-bg)] border border-[var(--wiki-subtle-border)] font-mono text-xs overflow-x-auto text-[var(--wiki-text)]">
                  <code>{section.codeSnippet}</code>
                </div>
              )}

            </section>
          ))}

          {/* Wikipedia References Section */}
          <section id="references" className="pt-6 border-t border-[var(--wiki-border)] scroll-mt-20">
            <h2 className="wiki-h2">
              <span>References</span>
              <span className="wiki-edit-section">[edit]</span>
            </h2>

            <ol className="list-decimal list-inside space-y-1.5 text-xs text-[var(--wiki-text)] font-sans">
              {article.citations.map(cit => (
                <li key={cit.id} id={`cite-${cit.id}`} className="hover:bg-[var(--wiki-highlight)] p-1 rounded">
                  <span className="wiki-link mr-1 font-bold">^</span>
                  <span className="font-semibold">{cit.source}</span> {cit.year && <span>({cit.year}).</span>} 
                  <span className="italic ml-1">"{cit.text}"</span>
                  <button
                    onClick={() => onOpenCitationInspector(cit)}
                    className="ml-2 text-[10px] bg-[var(--wiki-card-bg)] border border-[var(--wiki-subtle-border)] px-1.5 py-0.5 rounded text-[var(--wiki-link)] hover:underline"
                  >
                    [{cit.trustScore}% Trust]
                  </button>
                </li>
              ))}
            </ol>
          </section>

          {/* Categories Box */}
          <div className="mt-8 p-3 bg-[var(--wiki-card-bg)] border border-[var(--wiki-border)] rounded text-xs">
            <span className="font-bold text-[var(--wiki-text-muted)] mr-2">Categories:</span>
            <div className="inline flex-wrap gap-2">
              {article.categories.map((cat, i) => (
                <span key={cat}>
                  <a href={`#cat-${cat}`} onClick={(e) => { e.preventDefault(); alert(`Category portal: ${cat}`); }} className="wiki-link">
                    {cat}
                  </a>
                  {i < article.categories.length - 1 && <span className="mx-1 text-[var(--wiki-text-muted)]">|</span>}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Wikipedia Infobox Table */}
        <aside className="w-full lg:w-72 shrink-0">
          <table className="wikipedia-infobox">
            <thead>
              <tr>
                <th colSpan={2} className="wikipedia-infobox-header">
                  {article.infobox.title}
                </th>
              </tr>
              {article.infobox.image && (
                <tr>
                  <td colSpan={2} className="text-center p-2">
                    <img 
                      src={article.infobox.image} 
                      alt={article.infobox.title} 
                      className="w-full h-auto max-h-48 object-cover rounded" 
                    />
                    {article.infobox.imageCaption && (
                      <div className="text-[11px] text-[var(--wiki-text-muted)] mt-1 italic">
                        {article.infobox.imageCaption}
                      </div>
                    )}
                  </td>
                </tr>
              )}
            </thead>
            <tbody>
              {article.infobox.fields.map((field, idx) => (
                <tr key={idx}>
                  <th className="wikipedia-infobox-label">{field.label}</th>
                  <td>
                    {field.isLink && field.targetId ? (
                      <span onClick={() => onSelectArticle(field.targetId!)} className="wiki-link">
                        {field.value}
                      </span>
                    ) : (
                      field.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>

      </div>

      {/* Wikipedia Footer */}
      <footer className="mt-12 pt-4 border-t border-[var(--wiki-subtle-border)] text-xs text-[var(--wiki-text-muted)] space-y-1">
        <p>This page was last edited on {new Date(article.lastModified).toLocaleDateString()} at 14:15 (UTC).</p>
        <p>Text is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer" className="wiki-link">Creative Commons Attribution-ShareAlike License 4.0</a>; additional terms may apply.</p>
      </footer>

    </article>
  );
};
