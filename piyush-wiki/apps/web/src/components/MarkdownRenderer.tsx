'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Copy, Check, Info, AlertTriangle, Lightbulb, ShieldAlert, ExternalLink, Code } from 'lucide-react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MarkdownRendererProps {
  content: string;
  fontFamily?: 'sans' | 'serif';
  fontSize?: 'sm' | 'md' | 'lg';
  onHeadingsExtracted?: (headings: Array<{ id: string; text: string; level: number }>) => void;
}

export function MarkdownRenderer({
  content,
  fontFamily = 'sans',
  fontSize = 'md',
  onHeadingsExtracted
}: MarkdownRendererProps) {
  const [copiedBlockId, setCopiedBlockId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract headings for Table of Contents
  useEffect(() => {
    if (!content || !onHeadingsExtracted) return;

    const headingLines = content.split('\n').filter(line => line.startsWith('#'));
    const headings = headingLines.map(line => {
      const match = line.match(/^(#{1,4})\s+(.+)$/);
      if (!match) return null;
      const level = match[1].length;
      const text = match[2].replace(/\[\[([^\]\|]+)(?:\|([^\]]+))?\]\]/g, '$2').trim();
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return { id, text, level };
    }).filter(Boolean) as Array<{ id: string; text: string; level: number }>;

    onHeadingsExtracted(headings);
  }, [content, onHeadingsExtracted]);

  // Copy code block helper
  const handleCopyCode = (codeText: string, blockId: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedBlockId(blockId);
    setTimeout(() => setCopiedBlockId(null), 2000);
  };

  // Process markdown into structured React nodes
  const renderFormattedContent = (rawText: string) => {
    const lines = rawText.split('\n');
    const nodes: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // 1. Code Block ```
      if (line.trim().startsWith('```')) {
        const lang = line.trim().replace('```', '') || 'code';
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        const codeString = codeLines.join('\n');
        const blockId = `code-block-${i}`;

        // Special check for Mermaid
        if (lang.toLowerCase() === 'mermaid') {
          nodes.push(
            <div key={blockId} className="my-6 p-4 rounded-2xl bg-slate-900/90 border border-sky-500/30 overflow-x-auto">
              <div className="flex items-center justify-between text-xs font-mono text-sky-400 mb-3 border-b border-slate-800 pb-2">
                <span>Mermaid Architecture Diagram</span>
              </div>
              <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap">{codeString}</pre>
            </div>
          );
          continue;
        }

        nodes.push(
          <div key={blockId} className="relative my-6 rounded-xl bg-slate-950 border border-slate-800/90 overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-sky-400">
                <Code className="w-3.5 h-3.5" />
                {lang}
              </span>
              <button
                onClick={() => handleCopyCode(codeString, blockId)}
                className="flex items-center gap-1 hover:text-slate-200 transition-colors bg-slate-800 px-2 py-1 rounded border border-slate-700"
              >
                {copiedBlockId === blockId ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">
              <code>{codeString}</code>
            </pre>
          </div>
        );
        continue;
      }

      // 2. Callouts > [!NOTE] / > [!TIP] / > [!IMPORTANT] / > [!WARNING]
      if (line.trim().startsWith('> [!')) {
        const match = line.trim().match(/^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING)\]/i);
        const type = match ? match[1].toUpperCase() : 'NOTE';
        const calloutLines: string[] = [];
        i++;
        while (i < lines.length && lines[i].trim().startsWith('>')) {
          calloutLines.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }
        const calloutText = calloutLines.join('\n');
        const calloutId = `callout-${i}`;

        const styles: Record<string, { border: string; bg: string; icon: any; titleColor: string }> = {
          NOTE: { border: 'border-sky-500/40', bg: 'bg-sky-500/10', icon: Info, titleColor: 'text-sky-400' },
          TIP: { border: 'border-emerald-500/40', bg: 'bg-emerald-500/10', icon: Lightbulb, titleColor: 'text-emerald-400' },
          IMPORTANT: { border: 'border-amber-500/40', bg: 'bg-amber-500/10', icon: AlertTriangle, titleColor: 'text-amber-400' },
          WARNING: { border: 'border-rose-500/40', bg: 'bg-rose-500/10', icon: ShieldAlert, titleColor: 'text-rose-400' },
        };
        const style = styles[type] || styles.NOTE;
        const IconComponent = style.icon;

        nodes.push(
          <div key={calloutId} className={`my-5 p-4 rounded-xl border ${style.border} ${style.bg} backdrop-blur-sm`}>
            <div className={`flex items-center gap-2 text-xs font-mono font-bold ${style.titleColor} mb-1.5`}>
              <IconComponent className="w-4 h-4" />
              <span>{type}</span>
            </div>
            <div className="text-sm text-slate-300 font-sans leading-relaxed">{renderInlineFormatting(calloutText)}</div>
          </div>
        );
        continue;
      }

      // 3. Headings #, ##, ###
      if (line.trim().startsWith('#')) {
        const match = line.trim().match(/^(#{1,4})\s+(.+)$/);
        if (match) {
          const level = match[1].length;
          const text = match[2];
          const id = text.replace(/\[\[([^\]\|]+)(?:\|([^\]]+))?\]\]/g, '$2').toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

          if (level === 1) {
            nodes.push(
              <h1 key={`h1-${i}`} id={id} className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 mt-8 mb-4 tracking-tight pb-2 border-b border-slate-800">
                {renderInlineFormatting(text)}
              </h1>
            );
          } else if (level === 2) {
            nodes.push(
              <h2 key={`h2-${i}`} id={id} className="text-xl sm:text-2xl font-serif font-semibold text-slate-100 mt-7 mb-3 tracking-tight">
                {renderInlineFormatting(text)}
              </h2>
            );
          } else if (level === 3) {
            nodes.push(
              <h3 key={`h3-${i}`} id={id} className="text-lg font-serif font-medium text-sky-400 mt-6 mb-2">
                {renderInlineFormatting(text)}
              </h3>
            );
          } else {
            nodes.push(
              <h4 key={`h4-${i}`} id={id} className="text-base font-serif font-medium text-slate-300 mt-4 mb-2">
                {renderInlineFormatting(text)}
              </h4>
            );
          }
          i++;
          continue;
        }
      }

      // 4. Block Math $$ ... $$
      if (line.trim().startsWith('$$')) {
        const mathLines: string[] = [];
        let mathString = line.trim().replace(/^\$\$/, '');
        if (mathString.endsWith('$$') && mathString.length > 2) {
          mathString = mathString.replace(/\$\$$/, '');
        } else {
          i++;
          while (i < lines.length && !lines[i].trim().endsWith('$$')) {
            mathLines.push(lines[i]);
            i++;
          }
          if (i < lines.length) {
            mathLines.push(lines[i].trim().replace(/\$\$$/, ''));
          }
          mathString = mathLines.join('\n');
        }
        i++;

        try {
          const html = katex.renderToString(mathString, { displayMode: true, throwOnError: false });
          nodes.push(
            <div
              key={`math-block-${i}`}
              className="my-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 overflow-x-auto text-center font-mono"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch (e) {
          nodes.push(
            <div key={`math-err-${i}`} className="my-4 p-3 bg-rose-500/10 text-rose-300 text-xs font-mono rounded">
              $$ {mathString} $$
            </div>
          );
        }
        continue;
      }

      // 5. Horizontal rule ---
      if (line.trim() === '---' || line.trim() === '***') {
        nodes.push(<hr key={`hr-${i}`} className="my-8 border-slate-800" />);
        i++;
        continue;
      }

      // 6. Regular paragraph or list line
      if (line.trim()) {
        nodes.push(
          <p key={`p-${i}`} className="my-3 leading-relaxed text-slate-300">
            {renderInlineFormatting(line)}
          </p>
        );
      } else {
        nodes.push(<div key={`empty-${i}`} className="h-2" />);
      }

      i++;
    }

    return nodes;
  };

  // Helper for WikiLinks [[...]], inline math $...$, bold **...**, code `...`
  const renderInlineFormatting = (text: string): React.ReactNode => {
    // Regex matches [[WikiLink|Alias]], $inline math$, **bold**, `code`
    const regex = /(\[\[([^\]\|]+)(?:\|([^\]]+))?\]\]|\$[^\$\n]+\$|\*\*[^\*]+\*\*|`[^`]+`)/g;
    const parts = text.split(regex);

    return parts.map((part, idx) => {
      if (!part) return null;

      // WikiLink [[Target|Alias]]
      if (part.startsWith('[[') && part.endsWith(']]')) {
        const match = part.match(/^\[\[([^\]\|]+)(?:\|([^\]]+))?\]\]$/);
        if (match) {
          const target = match[1].trim();
          const alias = match[2]?.trim() || target;
          const slug = target.toLowerCase().replace(/\s+/g, '-');

          return (
            <Link
              key={idx}
              href={`/article/${slug}`}
              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 border border-sky-500/30 font-mono text-[0.9em] font-semibold transition-all shadow-xs"
            >
              <span>{alias}</span>
            </Link>
          );
        }
      }

      // Inline KaTeX Math $ ... $
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
        const mathStr = part.slice(1, -1);
        try {
          const html = katex.renderToString(mathStr, { displayMode: false, throwOnError: false });
          return <span key={idx} className="mx-1 px-1 bg-slate-900 rounded font-mono" dangerouslySetInnerHTML={{ __html: html }} />;
        } catch {
          return <code key={idx} className="text-amber-400 font-mono text-xs">{part}</code>;
        }
      }

      // Bold **...**
      if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
        return <strong key={idx} className="font-semibold text-slate-100">{part.slice(2, -2)}</strong>;
      }

      // Inline Code `...`
      if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
        return <code key={idx} className="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 font-mono text-[0.85em] border border-slate-700/60">{part.slice(1, -1)}</code>;
      }

      return part;
    });
  };

  const fontClass = fontFamily === 'serif' ? 'font-serif' : 'font-sans';
  const sizeClass = fontSize === 'lg' ? 'text-base sm:text-lg' : fontSize === 'sm' ? 'text-xs sm:text-sm' : 'text-sm sm:text-base';

  return (
    <div ref={containerRef} className={`article-content ${fontClass} ${sizeClass} text-slate-300`}>
      {renderFormattedContent(content)}
    </div>
  );
}
