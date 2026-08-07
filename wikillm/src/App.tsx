import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MainPage } from './components/MainPage';
import { ArticleView } from './components/ArticleView';
import { LLMToolbar } from './components/LLMToolbar';
import { AskWikiDrawer } from './components/AskWikiDrawer';
import { KnowledgeGraphModal } from './components/KnowledgeGraphModal';
import { ArticleEditorModal } from './components/ArticleEditorModal';
import { CitationInspectorModal } from './components/CitationInspectorModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { SearchModal } from './components/SearchModal';
import { PkmAtomizeModal } from './components/PkmAtomizeModal';

import { ARTICLES_DATA } from './data/articles';
import { PKM_VAULT_NOTES } from './services/pkmService';
import type { Article, Citation, ComplexityLevel, LanguageCode, Bookmark, ViewMode } from './types';
import { AiEngine } from './services/aiEngine';

export function App() {
  // Mode: 'wikipedia' vs 'nexusdb-pkm'
  const [viewMode, setViewMode] = useState<ViewMode>('wikipedia');

  // Articles state
  const [articles, setArticles] = useState<Record<string, Article>>(() => {
    const saved = localStorage.getItem('wikillm_custom_articles');
    return saved ? { ...ARTICLES_DATA, ...JSON.parse(saved) } : ARTICLES_DATA;
  });

  // PKM Vault Notes state
  const [pkmNotes, setPkmNotes] = useState<Record<string, Article>>(() => {
    const saved = localStorage.getItem('nexusdb_pkm_vault_notes');
    return saved ? { ...PKM_VAULT_NOTES, ...JSON.parse(saved) } : PKM_VAULT_NOTES;
  });

  // Active view state
  const [activeArticleId, setActiveArticleId] = useState<string | null>('claude-ai');
  const [complexity, setComplexity] = useState<ComplexityLevel>('standard');
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');

  // Translation cache
  const [translatedData, setTranslatedData] = useState<{ title?: string; leadParagraphs?: string[] }>({});

  // Appearance Theme & Layout state
  const [isDark, setIsDark] = useState(false);
  const [isSerifFont, setIsSerifFont] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Modals & Drawers state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAskAiOpen, setIsAskAiOpen] = useState(false);
  const [isGraphOpen, setIsGraphOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isCitationInspectorOpen, setIsCitationInspectorOpen] = useState(false);
  const [selectedCitation, setSelectedCitation] = useState<Citation | null>(null);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isAtomizeOpen, setIsAtomizeOpen] = useState(false);

  // Bookmarks State
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    const saved = localStorage.getItem('wikillm_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  // Audio Reader state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState(1);

  // Apply dark/serif classes to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (isSerifFont) {
      document.body.classList.add('font-wikipedia-serif');
    } else {
      document.body.classList.remove('font-wikipedia-serif');
    }
  }, [isDark, isSerifFont]);

  // Current active collection depending on view mode
  const currentCollection = viewMode === 'nexusdb-pkm' ? pkmNotes : articles;
  const activeArticle = activeArticleId ? currentCollection[activeArticleId] : null;

  // Handle View Mode switch
  const handleToggleViewMode = (mode: ViewMode) => {
    setViewMode(mode);
    if (mode === 'nexusdb-pkm') {
      setActiveArticleId('retrieval-augmented-generation');
    } else {
      setActiveArticleId('claude-ai');
    }
  };

  // Handle translation when language changes
  useEffect(() => {
    if (activeArticleId && currentCollection[activeArticleId]) {
      const art = currentCollection[activeArticleId];
      if (currentLanguage !== 'en') {
        AiEngine.translateArticle(art, currentLanguage).then(res => setTranslatedData(res));
      } else {
        setTranslatedData({});
      }
    }
  }, [currentLanguage, activeArticleId, currentCollection]);

  // Audio speech synthesis effect
  useEffect(() => {
    if (isPlayingAudio && activeArticleId && currentCollection[activeArticleId]) {
      const art = currentCollection[activeArticleId];
      const textToRead = art.title + '. ' + art.leadParagraphs.join(' ');
      
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = audioSpeed;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      
      window.speechSynthesis.speak(utterance);
    } else {
      window.speechSynthesis.cancel();
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [isPlayingAudio, activeArticleId, audioSpeed, currentCollection]);

  // Handlers
  const handleSelectArticle = (id: string) => {
    if (!currentCollection[id]) {
      AiEngine.generateArticle(id).then(newArt => {
        setArticles(prev => {
          const updated = { ...prev, [id]: newArt };
          localStorage.setItem('wikillm_custom_articles', JSON.stringify(updated));
          return updated;
        });
        setActiveArticleId(id);
        setComplexity('standard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } else {
      setActiveArticleId(id);
      setComplexity('standard');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGenerateAiArticle = async (query: string) => {
    const newArt = await AiEngine.generateArticle(query);
    setArticles(prev => {
      const updated = { ...prev, [newArt.id]: newArt };
      localStorage.setItem('wikillm_custom_articles', JSON.stringify(updated));
      return updated;
    });
    setActiveArticleId(newArt.id);
    setComplexity('standard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRandomArticle = () => {
    const keys = Object.keys(currentCollection);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    handleSelectArticle(randomKey);
  };

  const handleSaveToPkmVault = (art: Article) => {
    const pkmArt: Article = {
      ...art,
      isPkmNote: true,
      pkmMetadata: {
        uuid: crypto.randomUUID(),
        type: 'atomic-note',
        status: 'active',
        ownerMoc: '[[ai-ml-moc]]',
        confidence: 95,
        tags: ['concept', 'ai', 'wiki-ingested'],
        reviewDate: '2026-11-01'
      }
    };
    setPkmNotes(prev => {
      const updated = { ...prev, [art.id]: pkmArt };
      localStorage.setItem('nexusdb_pkm_vault_notes', JSON.stringify(updated));
      return updated;
    });
  };

  const handleToggleBookmark = (art: Article) => {
    setBookmarks(prev => {
      const exists = prev.some(b => b.articleId === art.id);
      let updated: Bookmark[];
      if (exists) {
        updated = prev.filter(b => b.articleId !== art.id);
      } else {
        updated = [...prev, {
          articleId: art.id,
          title: art.title,
          savedAt: new Date().toLocaleDateString(),
          category: art.categories[0] || 'General'
        }];
      }
      localStorage.setItem('wikillm_bookmarks', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSaveArticleRevision = (updatedArticle: Article) => {
    if (viewMode === 'nexusdb-pkm') {
      setPkmNotes(prev => {
        const updated = { ...prev, [updatedArticle.id]: updatedArticle };
        localStorage.setItem('nexusdb_pkm_vault_notes', JSON.stringify(updated));
        return updated;
      });
    } else {
      setArticles(prev => {
        const updated = { ...prev, [updatedArticle.id]: updatedArticle };
        localStorage.setItem('wikillm_custom_articles', JSON.stringify(updated));
        return updated;
      });
    }
  };

  const handleExportMarkdown = () => {
    if (!activeArticle) return;
    const mdContent = `# ${activeArticle.title}\n\n${activeArticle.leadParagraphs.join('\n\n')}\n\n## Sections\n${activeArticle.sections.map(s => `### ${s.title}\n${s.content}`).join('\n\n')}`;
    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeArticle.id}.md`;
    a.click();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--wiki-bg)] text-[var(--wiki-text)] font-sans">
      
      {/* Top Navbar */}
      <Navbar
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
        onSearchOpen={() => setIsSearchOpen(true)}
        onHomeClick={() => setActiveArticleId(null)}
        onBookmarksOpen={() => setIsBookmarksOpen(true)}
        onAskAiOpen={() => {
          if (!activeArticleId) handleSelectArticle('claude-ai');
          setIsAskAiOpen(true);
        }}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        isSerifFont={isSerifFont}
        onToggleSerifFont={() => setIsSerifFont(!isSerifFont)}
        isFullWidth={isFullWidth}
        onToggleFullWidth={() => setIsFullWidth(!isFullWidth)}
        currentLanguage={currentLanguage}
        onChangeLanguage={setCurrentLanguage}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        bookmarkCount={bookmarks.length}
      />

      {/* Main Layout Container */}
      <div className={`flex-1 flex w-full mx-auto px-4 py-4 gap-6 ${isFullWidth ? 'max-w-full' : 'max-w-[1300px]'}`}>
        
        {/* Left Sidebar Table of Contents / Nav */}
        <Sidebar
          onHomeClick={() => setActiveArticleId(null)}
          onRandomClick={handleRandomArticle}
          onSelectArticle={handleSelectArticle}
          activeArticleId={activeArticleId || undefined}
          sections={activeArticle?.sections}
          isOpen={isSidebarOpen}
          onCloseMobile={() => setIsSidebarOpen(false)}
        />

        {/* Content Area */}
        <main className="flex-1 min-w-0">
          {activeArticle ? (
            <ArticleView
              article={activeArticle}
              complexity={complexity}
              onSelectArticle={handleSelectArticle}
              onOpenCitationInspector={(cit) => {
                setSelectedCitation(cit);
                setIsCitationInspectorOpen(true);
              }}
              isBookmarked={bookmarks.some(b => b.articleId === activeArticle.id)}
              onToggleBookmark={() => handleToggleBookmark(activeArticle)}
              currentLanguage={currentLanguage}
              translatedLead={translatedData.leadParagraphs}
              translatedTitle={translatedData.title}
            />
          ) : (
            <MainPage
              featuredArticle={currentCollection['claude-ai'] || currentCollection['retrieval-augmented-generation']}
              onSelectArticle={handleSelectArticle}
              onSearchOpen={() => setIsSearchOpen(true)}
              onRandomClick={handleRandomArticle}
            />
          )}
        </main>

      </div>

      {/* Floating LLM Tool Toolbar */}
      {activeArticle && (
        <LLMToolbar
          complexity={complexity}
          onSetComplexity={setComplexity}
          onOpenGraph={() => setIsGraphOpen(true)}
          onOpenAskAi={() => setIsAskAiOpen(true)}
          onOpenEditor={() => setIsEditorOpen(true)}
          onOpenAtomizePkm={() => setIsAtomizeOpen(true)}
          onExportMarkdown={handleExportMarkdown}
          isPlayingAudio={isPlayingAudio}
          onToggleAudio={() => setIsPlayingAudio(!isPlayingAudio)}
          audioSpeed={audioSpeed}
          onChangeAudioSpeed={setAudioSpeed}
          isPkmNote={activeArticle.isPkmNote}
        />
      )}

      {/* Drawers and Modals */}
      {activeArticle && (
        <>
          <AskWikiDrawer
            isOpen={isAskAiOpen}
            onClose={() => setIsAskAiOpen(false)}
            article={activeArticle}
          />

          <KnowledgeGraphModal
            isOpen={isGraphOpen}
            onClose={() => setIsGraphOpen(false)}
            article={activeArticle}
            onSelectArticle={handleSelectArticle}
          />

          <ArticleEditorModal
            isOpen={isEditorOpen}
            onClose={() => setIsEditorOpen(false)}
            article={activeArticle}
            onSaveArticle={handleSaveArticleRevision}
          />

          <PkmAtomizeModal
            isOpen={isAtomizeOpen}
            onClose={() => setIsAtomizeOpen(false)}
            article={activeArticle}
            onSaveToPkm={handleSaveToPkmVault}
          />
        </>
      )}

      <CitationInspectorModal
        isOpen={isCitationInspectorOpen}
        onClose={() => setIsCitationInspectorOpen(false)}
        citation={selectedCitation}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarks={bookmarks}
        onSelectArticle={handleSelectArticle}
        onRemoveBookmark={(id) => setBookmarks(prev => prev.filter(b => b.articleId !== id))}
        onClearAll={() => {
          setBookmarks([]);
          localStorage.removeItem('wikillm_bookmarks');
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={handleSelectArticle}
        onGenerateAiArticle={handleGenerateAiArticle}
      />

    </div>
  );
}

export default App;
