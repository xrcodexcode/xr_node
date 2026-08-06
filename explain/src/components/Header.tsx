import React from 'react';
import { Brain, Sparkles, Network, GitMerge, Zap, HelpCircle, FolderKanban } from 'lucide-react';

interface HeaderProps {
  mode: 'eli5' | 'tech';
  setMode: (mode: 'eli5' | 'tech') => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ mode, setMode, activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'analogies', label: mode === 'eli5' ? 'Why NexusDB?' : 'Core Concepts', icon: Brain },
    { id: 'graph', label: 'Interactive Graph', icon: Network },
    { id: 'pipeline', label: '4-Step Pipeline', icon: GitMerge },
    { id: 'atomizer', label: 'Atomizer Demo', icon: Zap },
    { id: 'quiz', label: 'Brain Quiz', icon: HelpCircle },
    { id: 'explorer', label: 'Vault Explorer', icon: FolderKanban },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-gray-800 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveSection('hero')}>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30">
            <Brain className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-xl tracking-tight text-white">NexusDB</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800 font-mono">
                Infinity Brain v6.0
              </span>
            </div>
            <p className="text-xs text-gray-400">Atomic Knowledge & AI Graph System</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap justify-center items-center gap-1 bg-gray-900/80 p-1.5 rounded-xl border border-gray-800">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-900/40'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* ELI5 / Tech Mode Switcher */}
        <div className="flex items-center bg-gray-900/90 p-1 rounded-xl border border-purple-500/20">
          <button
            onClick={() => setMode('eli5')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'eli5'
                ? 'bg-amber-500 text-gray-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ELI5 (Super Simple)</span>
          </button>

          <button
            onClick={() => setMode('tech')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'tech'
                ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Tech Deep-Dive</span>
          </button>
        </div>

      </div>
    </header>
  );
};
