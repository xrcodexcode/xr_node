import React from 'react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-wiki-bg text-wiki-text">
      <div className="max-w-2xl space-y-6 border border-wiki-border bg-wiki-surface p-8 rounded-lg shadow-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono rounded-full bg-node-moc/10 text-node-moc">
          <span className="w-2 h-2 rounded-full bg-node-moc animate-pulse"></span>
          System Foundation Active
        </div>

        <h1 className="text-3xl font-serif font-bold tracking-tight">
          Piyush Wiki Engine
        </h1>

        <p className="text-sm text-wiki-muted font-sans leading-relaxed">
          Production foundation initialized for local-first, offline-first personal knowledge management.
        </p>

        <div className="pt-4 border-t border-wiki-border grid grid-cols-3 gap-4 text-left text-xs font-mono">
          <div>
            <div className="text-wiki-muted">Frontend</div>
            <div className="font-semibold text-wiki-text">Next.js 14 App Router</div>
          </div>
          <div>
            <div className="text-wiki-muted">Backend API</div>
            <div className="font-semibold text-wiki-text">FastAPI Python 3.11+</div>
          </div>
          <div>
            <div className="text-wiki-muted">State / Store</div>
            <div className="font-semibold text-wiki-text">TanStack & Zustand</div>
          </div>
        </div>
      </div>
    </main>
  );
}
