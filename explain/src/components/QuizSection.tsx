import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizSectionProps {
  mode: 'eli5' | 'tech';
}

const QUESTIONS = [
  {
    question: 'What is the Golden Rule of an "Atomic Note" in NexusDB?',
    options: [
      'Write 20 different topics in a single 100-page document.',
      '1 Note = 1 Idea (Lego Brick) that can be linked anywhere.',
      'Put all notes into 15 nested subfolders so they are hard to find.',
      'Delete notes after reading them.'
    ],
    answer: 1,
    explanation: 'Atomicity means one concept per note! This allows notes to be re-used, combined, and linked endlessly.'
  },
  {
    question: 'How many subfolders are allowed inside 02_NODES/?',
    options: [
      '50 subfolders for every category.',
      'Subfolders for each month of the year.',
      'Zero (0) subfolders — 02_NODES is 100% flat!',
      'Unlimited nested subfolders.'
    ],
    answer: 2,
    explanation: '02_NODES is strictly flat! Organization is achieved via tags, backlinks [[Note]], and MOC maps.'
  },
  {
    question: 'What is a "Map of Content" (MOC)?',
    options: [
      'A physical geographical map of world countries.',
      'A navigation highway page that indexes related atomic notes.',
      'A temporary trash folder.',
      'A password manager.'
    ],
    answer: 1,
    explanation: 'MOCs act as curated highways so you can navigate topics easily without folder clutter.'
  },
  {
    question: 'What role do AI Agents (.antigravity/) play in NexusDB?',
    options: [
      'They play background video games.',
      'They enforce rules, check schemas, find duplicates, and build MOCs.',
      'They delete random files without permission.',
      'They only change font colors.'
    ],
    answer: 1,
    explanation: 'AI agents act as invisible librarians keeping the vault graph clean, non-redundant, and schema-compliant!'
  }
];

export const QuizSection: React.FC<QuizSectionProps> = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(-1));
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (submitted) return;
    const next = [...selectedAnswers];
    next[qIdx] = oIdx;
    setSelectedAnswers(next);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = selectedAnswers.reduce((acc, curr, idx) => (curr === QUESTIONS[idx].answer ? acc + 1 : acc), 0);
    if (score >= 3) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const handleReset = () => {
    setSelectedAnswers(Array(QUESTIONS.length).fill(-1));
    setSubmitted(false);
  };

  const score = selectedAnswers.reduce((acc, curr, idx) => (curr === QUESTIONS[idx].answer ? acc + 1 : acc), 0);

  return (
    <section id="quiz" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800 text-xs font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Quiz</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Test Your NexusDB Knowledge!
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Answer 4 quick questions to see if you have mastered the Infinity Brain mindset.
        </p>
      </div>

      <div className="space-y-6">
        {QUESTIONS.map((q, qIdx) => {
          return (
            <div key={qIdx} className="glass-panel p-6 rounded-2xl border-amber-500/20">
              <h3 className="text-lg font-bold text-white mb-4">
                {qIdx + 1}. {q.question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                {q.options.map((opt, oIdx) => {
                  const isChoice = selectedAnswers[qIdx] === oIdx;
                  let btnStyle = 'bg-gray-900/60 border-gray-800 text-gray-300 hover:border-gray-700';

                  if (submitted) {
                    if (oIdx === q.answer) {
                      btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                    } else if (isChoice && oIdx !== q.answer) {
                      btnStyle = 'bg-red-950/80 border-red-500 text-red-200';
                    }
                  } else if (isChoice) {
                    btnStyle = 'bg-amber-950/80 border-amber-500 text-amber-200 font-bold';
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      className={`p-3.5 rounded-xl border text-xs text-left transition-all flex items-start justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && oIdx === q.answer && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />}
                      {submitted && isChoice && oIdx !== q.answer && <XCircle className="w-4 h-4 text-red-400 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-3 p-3 rounded-lg bg-gray-950 text-xs text-gray-300 border border-gray-800">
                  <strong className="text-amber-400">Explanation: </strong>
                  <span>{q.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-6 rounded-2xl border-amber-500/20">
        <div>
          {submitted ? (
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-amber-400" />
              <div>
                <div className="text-xl font-black text-white">Your Score: {score} / 4</div>
                <div className="text-xs text-gray-400">
                  {score === 4 ? '🎉 Perfect! You are a NexusDB Knowledge Grandmaster!' : 'Good job! Review the concepts above and try again!'}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-xs text-gray-400">Answer all questions above then click Submit!</div>
          )}
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswers.includes(-1)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 transition-all disabled:opacity-40"
            >
              Submit Answers
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-3 rounded-xl glass-card text-gray-300 hover:text-white font-bold text-xs flex items-center justify-center space-x-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Quiz</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
