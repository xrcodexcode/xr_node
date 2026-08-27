import React, { useState } from 'react';
import { FolderKanban, Search, FileText, Folder, ChevronRight } from 'lucide-react';

interface VaultExplorerProps {
  mode: 'eli5' | 'tech';
}

const VAULT_ITEMS = [
  {
    path: '01_RAW/CAPTURE/',
    type: 'folder',
    category: 'ingestion',
    desc: 'Immutable incoming inbox for web clippings, EPUBs, transcripts, and raw notes.'
  },
  {
    path: '01_RAW/PROCESS/',
    type: 'folder',
    category: 'ingestion',
    desc: 'Working drafts undergoing cleaning, code-switched translation, and AI formatting.'
  },
  {
    path: '01_RAW/SOURCE/',
    type: 'folder',
    category: 'ingestion',
    desc: 'Archived original sources post-ingestion with provenance and content hashes preserved.'
  },
  {
    path: '02_NEW-KNOWLEDGE/',
    type: 'folder',
    category: 'learning',
    desc: 'Active study and understanding layer holding flashcards, active recall notes, and summaries.'
  },
  {
    path: 'NODES/',
    type: 'folder',
    category: 'core',
    desc: 'Flat permanent atomic notes (02_NODES). Zero subfolders allowed! Linked via [[backlinks]] and tags.'
  },
  {
    path: 'NOTES/',
    type: 'folder',
    category: 'core',
    desc: 'Polished evergreen synthesis notes connecting multiple atomic concepts.'
  },
  {
    path: '03_MOC/',
    type: 'folder',
    category: 'navigation',
    desc: 'Maps of Content. 4-level navigation hierarchy (Index → Domain → Topic → Subtopic).'
  },
  {
    path: '03_MOC/ai-ml-moc.md',
    type: 'moc',
    category: 'navigation',
    desc: 'AI & Machine Learning MOC — artificial intelligence, LLM agents, and deep learning architectures.'
  },
  {
    path: '03_MOC/study-moc.md',
    type: 'moc',
    category: 'navigation',
    desc: 'Study MOC — Academics, DSA, prep work, cognitive science, and psychology.'
  },
  {
    path: '03_MOC/books-moc.md',
    type: 'moc',
    category: 'navigation',
    desc: 'Books MOC — Curated literature summaries, non-fiction takeaways, and book indexes.'
  },
  {
    path: '03_MOC/atomic-habits-moc.md',
    type: 'moc',
    category: 'navigation',
    desc: 'Atomic Habits MOC — Dedicated index of notes from Atomic Habits by James Clear.'
  },
  {
    path: '03_MOC/48-laws-of-power-moc.md',
    type: 'moc',
    category: 'navigation',
    desc: '48 Laws of Power MOC — Dedicated index of strategic notes from 48 Laws of Power by Robert Greene.'
  },
  {
    path: '03_MOC/warren-buffett-moc.md',
    type: 'moc',
    category: 'navigation',
    desc: 'Warren Buffett MOC — Investment philosophy, compounding habits, and moat analysis notes.'
  },
  {
    path: '03_MOC/tools-moc.md',
    type: 'moc',
    category: 'navigation',
    desc: 'Tools MOC — Software, CLI tools, technical stacks, and developer workflows.'
  },
  {
    path: '03_MOC/yt-moc.md',
    type: 'moc',
    category: 'navigation',
    desc: 'YouTube MOC — Synthesized notes and takeaways extracted from video transcripts.'
  },
  {
    path: 'CLAUDE.md',
    type: 'contract',
    category: 'governance',
    desc: 'Bootstrap operating contract for Claude AI control plane (claude/ & .claude/).'
  },
  {
    path: 'GEMINI.md',
    type: 'contract',
    category: 'governance',
    desc: 'Bootstrap operating contract for Gemini & Antigravity control plane (.antigravity/).'
  },
  {
    path: 'CODEX.md',
    type: 'contract',
    category: 'governance',
    desc: 'Bootstrap operating contract for OpenAI Codex control plane (codex/ & .codex/).'
  },
  {
    path: 'AGENT.md',
    type: 'contract',
    category: 'governance',
    desc: 'Universal AI Agent operating guide governing graph health, schema checks, and safety rules.'
  },
  {
    path: 'HOME-BASE.md',
    type: 'moc',
    category: 'navigation',
    desc: 'Infinity Brain Home Base — Central root entry MOC linking all domain MOCs.'
  }
];

export const VaultExplorer: React.FC<VaultExplorerProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<any>(VAULT_ITEMS[2]);

  const filteredItems = VAULT_ITEMS.filter(
    (item) =>
      item.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="explorer" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-semibold mb-3">
          <FolderKanban className="w-3.5 h-3.5" />
          <span>Zero-RAM Vault Search</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Explore the Real NexusDB Vault Architecture
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Simulate instantaneous local file-based search across vault layers, rules, and schemas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border-indigo-500/20">
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search vault paths, rules, or schemas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-gray-950 border border-gray-800 text-xs text-white focus:outline-none focus:border-indigo-500"
            />
            <span className="absolute right-3 top-3 text-[10px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">
              0.2ms grep
            </span>
          </div>

          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {filteredItems.map((item) => {
              const isSelected = selectedItem.path === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => setSelectedItem(item)}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-indigo-950/70 border-indigo-500/80 text-white shadow-md'
                      : 'bg-gray-900/50 border-gray-800/80 text-gray-300 hover:bg-gray-800/60'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 overflow-hidden">
                    {item.type === 'folder' ? (
                      <Folder className="w-4 h-4 text-indigo-400 shrink-0" />
                    ) : (
                      <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                    )}
                    <span className="text-xs font-mono truncate">{item.path}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-indigo-400' : 'text-gray-600'}`} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border-indigo-500/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-800">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-900/60 text-indigo-300 font-mono font-bold">
                Category: {selectedItem.category}
              </span>
              <span className="text-xs text-gray-500 capitalize">Type: {selectedItem.type}</span>
            </div>

            <h3 className="text-xl font-mono font-bold text-white mb-2">{selectedItem.path}</h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">{selectedItem.desc}</p>

            <div className="p-4 rounded-xl bg-gray-950 border border-gray-800 text-xs font-mono space-y-2 text-cyan-300">
              <div className="text-gray-500 mb-1">// Vault System Invariant Check</div>
              <div>Status: ACTIVE & ENFORCED</div>
              <div>Permission: Governed by GEMINI.md & .antigravity/rules/</div>
              <div>Retrieval Priority: MOC → Tag → Backlink → Note Title</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-800 text-xs text-gray-400 flex items-center justify-between">
            <span>Flat Atomic Graph System</span>
            <span className="text-emerald-400 font-mono">Verified Zero-RAM</span>
          </div>
        </div>
      </div>
    </section>
  );
};
