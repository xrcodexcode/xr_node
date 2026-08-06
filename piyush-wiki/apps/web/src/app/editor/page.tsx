'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Editor } from '@/components/Editor';
import { fetchNoteBySlug } from '@/lib/api';

function EditorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = searchParams.get('slug') || 'new-note';

  const [initialContent, setInitialContent] = useState('');
  const [initialTitle, setInitialTitle] = useState(slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug || slug === 'new-note') {
      setLoading(false);
      return;
    }

    async function load() {
      try {
        const note = await fetchNoteBySlug(slug);
        if (note) {
          setInitialContent(note.content || note.rawText);
          setInitialTitle(note.title);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-20 text-slate-500 font-mono text-sm">
        Loading note into editor...
      </div>
    );
  }

  return (
    <Editor
      initialSlug={slug}
      initialContent={initialContent}
      initialTitle={initialTitle}
      onSaved={savedSlug => {
        router.push(`/article/${savedSlug}`);
      }}
    />
  );
}

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
        <Suspense fallback={<div className="text-center py-20 text-slate-500 font-mono text-sm">Loading editor...</div>}>
          <EditorContent />
        </Suspense>
      </main>
    </div>
  );
}
