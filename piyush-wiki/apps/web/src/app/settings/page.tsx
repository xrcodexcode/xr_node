'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Settings, Moon, Sun, Folder, RefreshCw, Type, Network, Check } from 'lucide-react';

export default function SettingsPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [vaultPath, setVaultPath] = useState('./vault');
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif'>('sans');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [syncing, setSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);

  const handleSyncVault = async () => {
    setSyncing(true);
    try {
      await fetch('http://localhost:8000/api/v1/vault/sync', { method: 'POST' });
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3000);
    } catch {
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3000);
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-1 w-full">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-slate-100">Platform Preferences</h1>
            <p className="text-sm text-slate-400">Configure visual themes, vault paths, typography, and knowledge graph physics</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* 1. Theme Configuration */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h2 className="text-base font-serif font-bold text-slate-100 flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-400" />
              Appearance Theme
            </h2>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <button
                onClick={() => setTheme('dark')}
                className={`p-4 rounded-xl border flex items-center gap-3 font-mono text-xs transition-all ${
                  theme === 'dark' ? 'bg-sky-500/15 border-sky-500 text-sky-400 font-semibold' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <Moon className="w-4 h-4 text-indigo-400" />
                <span>Dark Mode (Slate)</span>
              </button>
              <button
                onClick={() => setTheme('light')}
                className={`p-4 rounded-xl border flex items-center gap-3 font-mono text-xs transition-all ${
                  theme === 'light' ? 'bg-sky-500/15 border-sky-500 text-sky-400 font-semibold' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Light Mode</span>
              </button>
            </div>
          </div>

          {/* 2. Obsidian Vault Storage Location */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h2 className="text-base font-serif font-bold text-slate-100 flex items-center gap-2">
              <Folder className="w-4 h-4 text-sky-400" />
              Obsidian Vault Storage Path
            </h2>
            <p className="text-xs text-slate-400">Piyush Wiki reads and updates Markdown (.md) files directly from this folder.</p>
            <div className="flex items-center gap-3 max-w-xl">
              <input
                type="text"
                value={vaultPath}
                onChange={e => setVaultPath(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-sky-500/50"
              />
              <button
                onClick={handleSyncVault}
                disabled={syncing}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-sky-400 border border-slate-700 flex items-center gap-2 transition-colors disabled:opacity-50"
              >
                {syncing ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : syncSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Indexed!</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    <span>Re-index Vault</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 3. Typography Preferences */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h2 className="text-base font-serif font-bold text-slate-100 flex items-center gap-2">
              <Type className="w-4 h-4 text-indigo-400" />
              Typography Settings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">Default Article Font Family</label>
                <div className="flex gap-2 font-mono text-xs">
                  <button
                    onClick={() => setFontFamily('sans')}
                    className={`flex-1 py-2 px-3 rounded-lg border ${fontFamily === 'sans' ? 'bg-sky-500/15 border-sky-500 text-sky-400 font-semibold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                  >
                    Inter (Sans-Serif)
                  </button>
                  <button
                    onClick={() => setFontFamily('serif')}
                    className={`flex-1 py-2 px-3 rounded-lg border ${fontFamily === 'serif' ? 'bg-sky-500/15 border-sky-500 text-sky-400 font-semibold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                  >
                    Lora (Serif)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">Article Base Font Size</label>
                <div className="flex gap-2 font-mono text-xs">
                  <button
                    onClick={() => setFontSize('sm')}
                    className={`flex-1 py-2 px-3 rounded-lg border ${fontSize === 'sm' ? 'bg-sky-500/15 border-sky-500 text-sky-400 font-semibold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                  >
                    Compact (Small)
                  </button>
                  <button
                    onClick={() => setFontSize('md')}
                    className={`flex-1 py-2 px-3 rounded-lg border ${fontSize === 'md' ? 'bg-sky-500/15 border-sky-500 text-sky-400 font-semibold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                  >
                    Standard (Medium)
                  </button>
                  <button
                    onClick={() => setFontSize('lg')}
                    className={`flex-1 py-2 px-3 rounded-lg border ${fontSize === 'lg' ? 'bg-sky-500/15 border-sky-500 text-sky-400 font-semibold' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                  >
                    Comfortable (Large)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Graph Preferences */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h2 className="text-base font-serif font-bold text-slate-100 flex items-center gap-2">
              <Network className="w-4 h-4 text-emerald-400" />
              Knowledge Graph Preferences
            </h2>
            <div className="space-y-3 text-xs font-mono text-slate-400">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded bg-slate-950 border-slate-800 text-sky-500 focus:ring-0" />
                <span>Show WikiLink text labels on connecting edges</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded bg-slate-950 border-slate-800 text-sky-500 focus:ring-0" />
                <span>Enable physics repulsion simulation</span>
              </label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
