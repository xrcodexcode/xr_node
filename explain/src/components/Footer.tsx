import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-950/80 py-10 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
        
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-purple-600 text-white">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-white text-sm">NexusDB (Infinity Brain)</span>
            <p className="text-gray-500 text-[11px]">AI-Native Atomic Knowledge Management System</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 text-gray-400">
          <a href="#analogies" className="hover:text-purple-400 transition-colors">Core Concepts</a>
          <a href="#graph" className="hover:text-purple-400 transition-colors">Graph Simulator</a>
          <a href="#pipeline" className="hover:text-purple-400 transition-colors">4-Step Ingestion</a>
          <a href="#atomizer" className="hover:text-purple-400 transition-colors">Atomizer Demo</a>
          <a href="#quiz" className="hover:text-purple-400 transition-colors">Brain Quiz</a>
        </div>

        {/* Credit */}
        <div className="flex items-center space-x-1.5 text-gray-500">
          <span>Powered by</span>
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-purple-300 font-semibold">Antigravity PKM Engine</span>
        </div>

      </div>
    </footer>
  );
};
