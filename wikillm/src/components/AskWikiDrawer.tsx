import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, RefreshCw } from 'lucide-react';
import type { Article, ChatMessage } from '../types';
import { AiEngine } from '../services/aiEngine';

interface AskWikiDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article;
}

export const AskWikiDrawer: React.FC<AskWikiDrawerProps> = ({
  isOpen,
  onClose,
  article
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I am your AI assistant for **${article.title}**. Ask me any question, ask for real-world analogies, or request a section breakdown!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isThinking) return;

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsThinking(true);

    try {
      const responseMsg = await AiEngine.askQuestion(article, query);
      setMessages(prev => [...prev, responseMsg]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] glass-panel border-l border-indigo-500/30 shadow-2xl flex flex-col bg-slate-950/95 animate-in slide-in-from-right duration-300">
      
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-slate-100">Ask WikiLLM Assistant</h3>
            <p className="text-[11px] text-slate-400 truncate max-w-[240px]">Context: {article.title}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Suggested Prompts */}
      <div className="p-3 bg-slate-900/40 border-b border-slate-800/60 flex flex-wrap gap-1.5 text-xs">
        <button
          onClick={() => handleSend("Explain this in simple terms (ELI5)")}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-indigo-600/20 text-slate-300 text-[11px] border border-slate-700 hover:border-indigo-500/40 transition-all"
        >
          💡 Explain ELI5
        </button>
        <button
          onClick={() => handleSend("What are the key citations and sources?")}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-indigo-600/20 text-slate-300 text-[11px] border border-slate-700 hover:border-indigo-500/40 transition-all"
        >
          📚 Key Citations
        </button>
        <button
          onClick={() => handleSend("Give me a real-world analogy")}
          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-indigo-600/20 text-slate-300 text-[11px] border border-slate-700 hover:border-indigo-500/40 transition-all"
        >
          🎨 Real-world Analogy
        </button>
      </div>

      {/* Message History */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex gap-3 text-xs leading-relaxed ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'ai' && (
              <div className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-indigo-400" />
              </div>
            )}

            <div className={`p-3.5 rounded-2xl max-w-[82%] space-y-2 ${
              msg.sender === 'user'
                ? 'bg-indigo-600 text-white rounded-tr-none'
                : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
            }`}>
              <div className="whitespace-pre-wrap">{msg.text}</div>
              
              {msg.citations && msg.citations.length > 0 && (
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1 text-[10px] text-indigo-300">
                  <span>Sources:</span>
                  {msg.citations.map((c, i) => (
                    <span key={i} className="bg-indigo-950 px-1.5 py-0.5 rounded border border-indigo-800/50">
                      {c}
                    </span>
                  ))}
                </div>
              )}

              <div className="text-[9px] opacity-60 text-right">{msg.timestamp}</div>
            </div>

            {msg.sender === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-slate-300" />
              </div>
            )}
          </div>
        ))}

        {isThinking && (
          <div className="flex items-center gap-2 text-xs text-indigo-400 p-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>AI is analyzing article context...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 border-t border-slate-800 bg-slate-900">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask about ${article.title}...`}
            className="flex-1 px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 focus:border-indigo-500 rounded-xl text-xs text-slate-100 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim() || isThinking}
            className="p-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl shadow-md transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>

    </div>
  );
};
