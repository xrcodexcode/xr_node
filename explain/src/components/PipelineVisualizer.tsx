import React, { useState } from 'react';
import { GitMerge, ArrowRight, ArrowLeft, CheckCircle, FileText, Sparkles, Database, Layers, ShieldCheck } from 'lucide-react';

interface PipelineVisualizerProps {
  mode: 'eli5' | 'tech';
}

export const PipelineVisualizer: React.FC<PipelineVisualizerProps> = ({ mode }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    {
      stage: '01_RAW/CAPTURE',
      name: mode === 'eli5' ? '1. Catch The Idea (Raw Dump)' : 'Stage 1: Immutable Raw Ingestion',
      icon: FileText,
      color: 'from-blue-600 to-cyan-600',
      badge: 'Immutable Original',
      summary: mode === 'eli5'
        ? 'Save podcasts, YouTube transcripts, books, or web pages into 01_RAW/CAPTURE. The original file is NEVER touched or edited.'
        : 'Incoming raw material placed in 01_RAW/CAPTURE/. Originals are treated as read-only data, preserving provenance and cryptographic content hashes.',
      inputExample: `URL: https://youtube.com/watch?v=xyz
Title: SpaceX Starship Engineering Deep Dive
Raw Content: "We use stainless steel 304L because at cryogenic temperatures it gets 50% stronger than carbon fiber, costing only $3/kg..."`,
      schemaTip: 'Raw original saved with timestamp & content hash. Immutable invariant enforced.'
    },
    {
      stage: '01_RAW/PROCESS',
      name: mode === 'eli5' ? '2. The AI Scrubbing Machine' : 'Stage 2: Automated Cleaning & Extraction',
      icon: Sparkles,
      color: 'from-purple-600 to-indigo-600',
      badge: 'Active Processing',
      summary: mode === 'eli5'
        ? 'AI bots clean up typos, translate languages, remove filler words, and extract key facts into a working draft.'
        : 'Working copy inside 01_RAW/PROCESS/. AI skills run code-switched translation, hallucination checks, claim extraction, and confidence scoring.',
      inputExample: `Draft Note: SpaceX Material Selection
- Stainless Steel 304L vs Carbon Fiber
- Cryogenic strength multiplier: +50%
- Cost delta: $3/kg vs $135/kg`,
      schemaTip: 'Confidence score computed (e.g. 92%). Claims separated from agent inferences.'
    },
    {
      stage: '02_NODES',
      name: mode === 'eli5' ? '3. Turn Into Lego Bricks (Atomic Notes)' : 'Stage 3: Atomic Node Promotion (02_NODES)',
      icon: Layers,
      color: 'from-emerald-600 to-teal-600',
      badge: 'Flat Atomic Node',
      summary: mode === 'eli5'
        ? 'The idea is chopped into single, razor-sharp atomic notes. No subfolders! One note per concept.'
        : 'Promoted to flat 02_NODES/ with Schema v4 frontmatter, stable UUID, controlled tags, and explicit [[backlinks]].',
      inputExample: `---
id: "8f7e2d91-4c12-4a8b-9e32-111111111111"
title: "Stainless-Steel-304L-Cryogenic-Properties"
type: "atomic-note"
status: "active"
tags: [aerospace, materials, engineering]
owner_moc: "03_MOC/Aerospace-MOC"
---
# Stainless Steel 304L Cryogenic Properties
At cryogenic temperatures (-150°C), Stainless Steel 304L strength increases by 50%.`,
      schemaTip: '11-Gate Promotion Gate passed: Frontmatter valid, no duplicate note, tag discipline checked.'
    },
    {
      stage: '03_MOC',
      name: mode === 'eli5' ? '4. Connect to Highway Maps (MOC)' : 'Stage 4: Map of Content (MOC) Integration',
      icon: Database,
      color: 'from-amber-600 to-orange-600',
      badge: 'Navigation Map',
      summary: mode === 'eli5'
        ? 'The new Lego brick is linked on a Map of Content highway page so you can find it instantly when browsing!'
        : 'Owner MOC (03_MOC/) updated to include the new atomic note under its appropriate topic section for instant zero-RAM navigation.',
      inputExample: `# Aerospace & Starfleet MOC
## Materials Engineering
- [[Stainless-Steel-304L-Cryogenic-Properties]]
- [[Carbon-Fiber-Composite-Limits]]
- [[Thermal-Protection-Tiles]]`,
      schemaTip: 'Graph reachability restored. Zero-RAM search index refreshed.'
    }
  ];

  const current = steps[currentStep];
  const StepIcon = current.icon;

  return (
    <section id="pipeline" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-semibold mb-3">
          <GitMerge className="w-3.5 h-3.5" />
          <span>Knowledge Lifecycle</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {mode === 'eli5' ? 'The 4-Step Magic Pipeline' : 'Automated Knowledge Ingestion & Promotion Lifecycle'}
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          {mode === 'eli5'
            ? 'Follow the journey of an idea from a raw bookmark into a permanent connected Lego note!'
            : 'Explore the 4 canonical transformation stages from immutable raw capture to verified atomic promotion.'}
        </p>
      </div>

      {/* Pipeline Stepper Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = currentStep === idx;
          const isPassed = idx < currentStep;

          return (
            <button
              key={step.stage}
              onClick={() => setCurrentStep(idx)}
              className={`p-4 rounded-xl transition-all text-left border relative overflow-hidden ${
                isActive
                  ? 'glass-panel border-purple-500/80 bg-purple-950/40 shadow-lg shadow-purple-950/50'
                  : isPassed
                  ? 'bg-gray-900/60 border-emerald-500/30 text-emerald-300'
                  : 'bg-gray-900/40 border-gray-800 text-gray-400 hover:border-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} text-white`}>
                  <Icon className="w-4 h-4" />
                </div>
                {isPassed && <CheckCircle className="w-4 h-4 text-emerald-400" />}
              </div>

              <div className="text-xs font-mono text-purple-400 font-semibold mb-1">{step.stage}</div>
              <div className={`text-xs font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                {step.name.split(':')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Box */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border-purple-500/20 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-lg`}>
              <StepIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-900/60 text-purple-300 font-mono font-bold border border-purple-700/50">
                Step {currentStep + 1} of 4 • {current.badge}
              </span>
              <h3 className="text-2xl font-black text-white mt-1">{current.name}</h3>
            </div>
          </div>

          {/* Stepper Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className="p-2.5 rounded-xl glass-card text-gray-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={currentStep === steps.length - 1}
              className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center space-x-1.5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stage Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 text-sm text-gray-200 leading-relaxed">
              <h4 className="text-xs uppercase font-extrabold text-purple-400 tracking-wider mb-2">Stage Description</h4>
              <p>{current.summary}</p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/40 text-xs text-purple-200 flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-purple-300 mb-0.5">Governance Rule:</strong>
                <span>{current.schemaTip}</span>
              </div>
            </div>
          </div>

          {/* Code / Markdown Sample Box */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-gray-950 border border-gray-800 p-4 font-mono text-xs text-gray-300 overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-800 text-gray-500">
                <span>FILE VIEW: {current.stage}</span>
                <span className="text-purple-400">Schema v4</span>
              </div>
              <pre className="leading-relaxed text-cyan-300">
                <code>{current.inputExample}</code>
              </pre>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
