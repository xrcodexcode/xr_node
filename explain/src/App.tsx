import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AnalogySection } from './components/AnalogySection';
import { GraphSimulator } from './components/GraphSimulator';
import { PipelineVisualizer } from './components/PipelineVisualizer';
import { AtomizerPlayground } from './components/AtomizerPlayground';
import { QuizSection } from './components/QuizSection';
import { VaultExplorer } from './components/VaultExplorer';
import { Footer } from './components/Footer';

export function App() {
  const [mode, setMode] = useState<'eli5' | 'tech'>('eli5');
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 font-sans selection:bg-purple-500 selection:text-white">
      <Header
        mode={mode}
        setMode={setMode}
        activeSection={activeSection}
        setActiveSection={scrollToSection}
      />

      <main>
        <HeroSection mode={mode} onNavigate={scrollToSection} />
        
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-4"></div>
          <AnalogySection mode={mode} />
        </div>

        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-4"></div>
          <GraphSimulator mode={mode} />
        </div>

        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent my-4"></div>
          <PipelineVisualizer mode={mode} />
        </div>

        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-4"></div>
          <AtomizerPlayground mode={mode} />
        </div>

        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent my-4"></div>
          <QuizSection mode={mode} />
        </div>

        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent my-4"></div>
          <VaultExplorer mode={mode} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
