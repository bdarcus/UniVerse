import React, { useState, useMemo } from 'react';
import { View } from '../types';
import { GoogleGenAI } from "@google/genai";

import { portfolioStore } from '../store';

interface AssessmentProps {
  id?: string | null;
  onViewChange?: (view: View) => void;
}

const Assessment: React.FC<AssessmentProps> = ({ id, onViewChange }) => {
  const artifact = portfolioStore.getItem(id);
  
  const [criticalThinkingScore, setCriticalThinkingScore] = useState<number>(8); // Default to Proficient
  const [communicationLevel, setCommunicationLevel] = useState<string>('Mastering');
  const [feedback, setFeedback] = useState(artifact.feedback || "Alex, this is a strong reflection. Your analysis of the methodology needs slightly more depth.");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [awardPassport, setAwardPassport] = useState(false);

  const totalScore = useMemo(() => {
    const commScore = communicationLevel === 'Mastering' ? 50 : communicationLevel === 'Developing' ? 30 : 15;
    const ctScore = criticalThinkingScore * 5; // Scaling 0-10 to 50pts total
    return ctScore + commScore;
  }, [criticalThinkingScore, communicationLevel]);

  const runAIAssistant = async () => {
    setIsAnalyzing(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Analyze this student reflection artifact:
      "Title: ${artifact.title}
       Content: ${artifact.description}"
      
      Based on this rubric:
      1. Critical Thinking (0-10): Problem analysis and evidence usage.
      2. Written Communication (Novice, Developing, Mastering): Audience structure and clarity.
      
      Provide a suggested score for both and a 3-sentence qualitative feedback draft. Return as text.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
      });

      if (response.text) {
        setFeedback(response.text);
      }
    } catch (error) {
      console.error("AI Grader Error:", error);
      alert("AI Assistant unavailable. Please check API settings.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="h-full flex overflow-hidden animate-in fade-in duration-500">
      {/* Left Panel: Artifact Viewer */}
      <section className="flex-1 bg-slate-100 dark:bg-[#101622] overflow-y-auto p-8 relative flex flex-col items-center custom-scrollbar">
        {/* Viewer Controls */}
        <div className="sticky top-0 mb-8 bg-white dark:bg-[#1a202c] shadow-lg rounded-full px-6 py-2.5 flex items-center gap-6 z-10 border border-slate-200 dark:border-slate-700">
          <button 
            onClick={() => onViewChange?.(View.DASHBOARD)}
            className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-primary transition-colors"
          >
            <span className="material-icons text-sm">arrow_back</span>
            Back
          </button>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-600"></div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 text-slate-500 hover:text-primary transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"><span className="material-icons text-lg">zoom_out</span></button>
            <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300 w-12 text-center">100%</span>
            <button className="p-1.5 text-slate-500 hover:text-primary transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"><span className="material-icons text-lg">zoom_in</span></button>
          </div>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-600"></div>
          <button className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
            <span className="material-icons text-sm">file_download</span>
            Download PDF
          </button>
        </div>
        
        {/* Document Simulation */}
        <div className="w-full max-w-4xl bg-white dark:bg-[#1e2532] min-h-[1200px] shadow-xl rounded-sm p-12 sm:p-20 text-slate-800 dark:text-slate-300 leading-relaxed border border-slate-200 dark:border-slate-700 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 dark:bg-slate-800/50 border-l border-b border-slate-200 dark:border-slate-700 p-4 text-center flex flex-col justify-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Score</span>
            <span className="text-3xl font-black text-primary">{totalScore}</span>
            <span className="text-[10px] text-slate-400 font-bold">/ 100</span>
          </div>

          <div className="mb-12 border-b border-slate-100 dark:border-slate-700 pb-8">
            <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">{artifact.title}</h2>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><span className="material-icons text-sm">person</span> Alex Morgan</span>
              <span className="flex items-center gap-1"><span className="material-icons text-sm">event</span> {artifact.date}</span>
              <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[10px] font-bold text-primary tracking-wider uppercase">{artifact.category}</span>
            </div>
          </div>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              {artifact.description}
            </p>
            
            <div className="my-10 p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border-l-8 border-primary shadow-inner">
              <p className="italic text-xl text-slate-600 dark:text-slate-400 font-medium">
                "Evidence-based learning requires a bridge between theory and practice, which this project aims to demonstrate."
              </p>
            </div>

            <div className="w-full h-96 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-10 relative overflow-hidden group shadow-md border border-slate-200 dark:border-slate-700">
              <img 
                alt={artifact.title} 
                className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-1000" 
                src={artifact.imageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-base font-bold flex items-center gap-2">
                  <span className="material-icons">image</span>
                  Visual Artifact Evidence
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Competency Reflection</h3>
            <p className="text-lg leading-relaxed mb-6">
              This artifact demonstrates my proficiency in {artifact.skills?.join(', ')}. 
              By synthesizing practical application with theoretical frameworks, I have developed a deeper 
              understanding of {artifact.category} challenges.
            </p>
          </div>
        </div>
        <div className="h-24 w-full shrink-0"></div>
      </section>

      {/* Right Panel: Grading Tools */}
      <aside className="w-[480px] bg-white dark:bg-[#151b26] border-l border-slate-200 dark:border-slate-700 flex flex-col shadow-2xl relative z-20">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#1a2332]/50">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Rubric Progress</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-primary">{totalScore}%</span>
              <span className="bg-primary/10 dark:bg-primary/20 text-primary text-[10px] font-black px-2 py-0.5 rounded-full">Weight: 100%</span>
            </div>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-1 overflow-hidden">
            <div className="bg-primary h-3 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(19,91,236,0.3)]" style={{width: `${totalScore}%`}}></div>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Assessment Scale</p>
            <p className="text-xs font-bold text-slate-500">Passing: 70/100</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-10 custom-scrollbar">
          {/* AI Assistant Button */}
          <button 
            onClick={runAIAssistant}
            disabled={isAnalyzing}
            className={`w-full group relative overflow-hidden p-4 rounded-xl border border-purple-200 dark:border-purple-900/40 flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-95 ${
              isAnalyzing ? 'bg-slate-100 dark:bg-slate-800' : 'bg-gradient-to-r from-purple-500/5 to-primary/5 hover:from-purple-500/10 hover:to-primary/10'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-sm transition-colors ${isAnalyzing ? 'bg-slate-300 animate-pulse' : 'bg-purple-500 text-white group-hover:bg-purple-600'}`}>
              <span className={`material-icons text-[20px] ${isAnalyzing ? 'animate-spin' : ''}`}>auto_awesome</span>
            </div>
            <div className="text-left flex-1">
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Gemini AI Grader</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{isAnalyzing ? 'Analyzing content...' : 'Suggest scores & feedback based on text'}</p>
            </div>
          </button>

          {/* Criterion 1 */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                Critical Thinking
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              </h3>
              <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-lg">info</span></button>
            </div>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">Ability to synthesize Guatemalan field data and propose the micro-subscription model.</p>
            <div className="space-y-2.5">
              <RubricOption 
                label="Emerging (0-5 pts)" 
                sub="Basic identification with no community-specific synthesis." 
                active={criticalThinkingScore <= 5} 
                onClick={() => setCriticalThinkingScore(5)}
              />
              <RubricOption 
                label="Proficient (6-8 pts)" 
                sub="Clear analysis with Guatemalan context. Logic is solid." 
                active={criticalThinkingScore >= 6 && criticalThinkingScore <= 8} 
                onClick={() => setCriticalThinkingScore(8)}
              />
              <RubricOption 
                label="Expert (9-10 pts)" 
                sub="Deep, community-led insight. Innovative financing models." 
                active={criticalThinkingScore >= 9} 
                onClick={() => setCriticalThinkingScore(10)}
              />
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-800"/>

          {/* Criterion 2 */}
          <div>
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="font-bold text-slate-800 dark:text-slate-200">Written Communication</h3>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Weight: 50%</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setCommunicationLevel('Novice')}
                className={`flex-1 py-3 px-3 text-xs font-bold rounded-xl border transition-all ${
                  communicationLevel === 'Novice' ? 'bg-slate-100 border-slate-300 text-slate-900' : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50'
                }`}
              >
                Novice
              </button>
              <button 
                onClick={() => setCommunicationLevel('Developing')}
                className={`flex-1 py-3 px-3 text-xs font-bold rounded-xl border transition-all ${
                  communicationLevel === 'Developing' ? 'bg-slate-100 border-slate-300 text-slate-900' : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50'
                }`}
              >
                Developing
              </button>
              <button 
                onClick={() => setCommunicationLevel('Mastering')}
                className={`flex-1 py-3 px-3 text-xs font-bold rounded-xl border transition-all ${
                  communicationLevel === 'Mastering' ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30' : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50'
                }`}
              >
                Mastering
              </button>
            </div>
            <div className="mt-4 p-4 bg-slate-50 dark:bg-[#101622]/50 rounded-xl border border-slate-100 dark:border-slate-800">
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                {communicationLevel === 'Mastering' ? 
                  "Mastering: Writing is compelling, uses citation (Smith 2020), and is perfectly structured for the faculty audience." :
                  communicationLevel === 'Developing' ?
                  "Developing: Clear structure but some minor transitions are missing between paragraphs." :
                  "Novice: Lacks clear focus or uses informal tone inappropriate for assessment."
                }
              </p>
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-800"/>

          {/* Passport Integration */}
          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:scale-125 transition-transform">
              <span className="material-icons text-7xl text-primary">public</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-icons text-primary text-sm animate-pulse">verified</span>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Extracurricular Passport</h3>
              </div>
              <h4 className="font-black text-slate-900 dark:text-white mb-1">Global Leadership Badge</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 font-medium">Auto-verify completion of intercultural fieldwork (Guatemala).</p>
              
              <label className="inline-flex items-center cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={awardPassport}
                  onChange={() => setAwardPassport(!awardPassport)} 
                />
                <div className="relative w-12 h-6 bg-slate-200 dark:bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 dark:after:border-slate-600 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500 shadow-inner"></div>
                <span className={`ms-3 text-sm font-bold transition-colors ${awardPassport ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}`}>
                  {awardPassport ? 'Credit Awarded' : 'Pending Verification'}
                </span>
              </label>
            </div>
          </div>

          {/* Qualitative Feedback */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-slate-800 dark:text-slate-200">Overall Feedback</h3>
              <div className="flex gap-1">
                <button className="p-1.5 text-slate-400 hover:text-primary transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><span className="material-icons text-sm">history</span></button>
                <button className="p-1.5 text-slate-400 hover:text-primary transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><span className="material-icons text-sm">auto_fix_high</span></button>
              </div>
            </div>
            <div className="relative group">
              <textarea 
                className="w-full bg-white dark:bg-[#0a0f18] border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent min-h-[140px] resize-none leading-relaxed shadow-inner" 
                placeholder="Enter qualitative feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
              <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                <button className="p-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"><span className="material-icons text-sm">mic</span></button>
                <button className="p-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"><span className="material-icons text-sm">attach_file</span></button>
              </div>
            </div>
          </div>
          <div className="h-12"></div>
        </div>

        {/* Sticky Footer */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-[#151b26] z-30 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between gap-4">
            <button 
              onClick={() => onViewChange?.(View.PORTFOLIO)}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm"
            >
              Discard
            </button>
            <button 
              onClick={() => {
                portfolioStore.updateItem(artifact.id, {
                  grade: totalScore >= 90 ? 'A' : totalScore >= 80 ? 'B' : 'C',
                  feedback: feedback,
                  status: 'GRADED'
                });
                alert(`Grade of ${totalScore}/100 submitted for Alex Morgan.`);
                onViewChange?.(View.DASHBOARD);
              }}
              className="flex-1 py-3 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-black shadow-xl shadow-primary/25 transition-all text-sm flex justify-center items-center gap-2 hover:scale-[1.02] active:scale-95"
            >
              <span>Submit Assessment</span>
              <span className="material-icons text-sm">send</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

const RubricOption = ({ label, sub, active, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-start gap-4 p-4 rounded-xl border text-left transition-all duration-300 group ${
    active 
      ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-sm' 
      : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#1a2332]'
  }`}>
    <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
      active ? 'border-primary bg-primary' : 'border-slate-200 dark:border-slate-700 group-hover:border-slate-300'
    }`}>
      {active && <span className="material-icons text-[12px] text-white font-bold">check</span>}
    </div>
    <div className="flex-1">
      <span className={`block text-sm font-bold mb-1 transition-colors ${active ? 'text-primary dark:text-blue-300' : 'text-slate-700 dark:text-slate-300'}`}>{label}</span>
      <span className="block text-[11px] text-slate-500 leading-relaxed font-medium">{sub}</span>
    </div>
  </button>
);

export default Assessment;