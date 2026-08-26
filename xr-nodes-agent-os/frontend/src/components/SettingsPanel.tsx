import React, { useState, useEffect } from 'react';
import { Settings, Server, Database, Brain, Sliders, Clock, Terminal, Key, Info } from 'lucide-react';

export default function SettingsPanel() {
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [agentSteps, setAgentSteps] = useState(50);
  const [agentTimeout, setAgentTimeout] = useState(300);
  const [logLevel, setLogLevel] = useState('INFO');
  const [provider, setProvider] = useState('Google');
  const [model, setModel] = useState('Gemini 1.5 Pro');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('/api/v1/health/status');
        if (res.ok) {
          const data = await res.json();
          setStatus(data);
        }
      } catch (error) {
        console.error('Failed to fetch status:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStatus();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass-panel p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
          <Settings className="w-5 h-5 text-cyan-400" />
          System Settings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Server Connection */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 border-b border-zinc-800 pb-2">
              <Server className="w-4 h-4 text-emerald-400" />
              Connection
            </h3>
            <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 flex items-center justify-between">
              <span className="text-sm text-zinc-400">Server Status</span>
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${status ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'}`}></span>
                <span className="text-xs font-mono text-zinc-300">{status ? 'CONNECTED' : 'DISCONNECTED'}</span>
              </div>
            </div>
            
            <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-zinc-400">Vault Path</span>
              </div>
              <div className="text-xs font-mono text-zinc-300 bg-black/40 p-2 rounded-lg border border-zinc-800/60 break-all">
                {status?.vault_path || 'C:\\Users\\...\\nexusdb'}
              </div>
            </div>
          </div>

          {/* AI Providers */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 border-b border-zinc-800 pb-2">
              <Brain className="w-4 h-4 text-amber-400" />
              AI Intelligence
            </h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-zinc-400 mb-1.5">Active Provider</label>
                <select 
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-cyan-500"
                >
                  <option value="Google">Google (Gemini)</option>
                  <option value="OpenAI">OpenAI</option>
                  <option value="Anthropic">Anthropic (Claude)</option>
                  <option value="Ollama">Ollama (Local)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1.5">Default Model</label>
                <input 
                  type="text" 
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* Agent Parameters */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 border-b border-zinc-800 pb-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              Agent Limits
            </h3>
            
            <div className="space-y-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-xs text-zinc-400">Max Steps</label>
                  <span className="text-xs font-mono text-cyan-400">{agentSteps}</span>
                </div>
                <input 
                  type="range" 
                  min="1" max="100" 
                  value={agentSteps}
                  onChange={(e) => setAgentSteps(parseInt(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-xs text-zinc-400">Timeout (seconds)</label>
                  <span className="text-xs font-mono text-cyan-400">{agentTimeout}s</span>
                </div>
                <input 
                  type="range" 
                  min="30" max="600" step="30"
                  value={agentTimeout}
                  onChange={(e) => setAgentTimeout(parseInt(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Developer / Logging */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 border-b border-zinc-800 pb-2">
              <Terminal className="w-4 h-4 text-zinc-400" />
              Developer
            </h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-zinc-400 mb-1.5">Log Level</label>
                <select 
                  value={logLevel}
                  onChange={(e) => setLogLevel(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-cyan-500"
                >
                  <option value="DEBUG">DEBUG</option>
                  <option value="INFO">INFO</option>
                  <option value="WARNING">WARNING</option>
                  <option value="ERROR">ERROR</option>
                </select>
              </div>

              <div className="bg-zinc-900/50 p-3 rounded-xl border border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Theme</span>
                <span className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-300">Dark Mode (Default)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info & Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-5 rounded-2xl">
          <h3 className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mb-4">
            <Key className="w-4 h-4 text-cyan-400" />
            Keyboard Shortcuts
          </h3>
          <div className="space-y-2">
            {[
              { key: '⌘ + K', desc: 'Vault Query' },
              { key: '⌘ + /', desc: 'Command Palette' },
              { key: 'Esc', desc: 'Close Modal' },
            ].map((shortcut, i) => (
              <div key={i} className="flex justify-between items-center bg-zinc-900/50 p-2 rounded-lg border border-zinc-800">
                <span className="text-xs text-zinc-400">{shortcut.desc}</span>
                <kbd className="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-300 border border-zinc-700">{shortcut.key}</kbd>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl flex flex-col justify-center items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">XR-NODES Agent OS</h4>
            <p className="text-xs text-zinc-400 mt-1">Version 0.1.0-alpha</p>
          </div>
          <p className="text-[10px] text-zinc-500 max-w-xs leading-relaxed">
            Autonomous multi-agent orchestration for personal knowledge systems.
          </p>
        </div>
      </div>
    </div>
  );
}
