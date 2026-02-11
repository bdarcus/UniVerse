
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { View } from '../types';

interface SubmissionProps {
  onViewChange: (view: View) => void;
}

const Submission: React.FC<SubmissionProps> = ({ onViewChange }) => {
  const [reflection, setReflection] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  
  const artifactName = 'Global Leadership Reflection';

  const runSelfCheck = async () => {
    if (!reflection || reflection.length < 50) {
      alert("Please write a bit more before running the AI Self-Check.");
      return;
    }
    
    setIsGenerating(true);
    setAiFeedback(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `You are an academic writing coach. Analyze this student draft:
      "${reflection}"
      
      Against these rubric criteria:
      1. Critical Thinking: Depth of analysis and evidence usage.
      2. Written Communication: Clarity and professional structure.
      
      Provide 3 specific bullet points on how to improve the score. Be encouraging but rigorous.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      if (response.text) {
        setAiFeedback(response.text);
      }
    } catch (error) {
      console.error('Error generating AI help:', error);
      alert('Could not reach Gemini API. Please try again later.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    onViewChange(View.PORTFOLIO);
  };

  return (
    <div className="h-full flex overflow-hidden animate-in fade-in duration-500 bg-slate-50 dark:bg-[#0a0f18]">
      {/* Left: Editor Area */}
      <section className="flex-1 overflow-y-auto p-8 relative flex flex-col items-center custom-scrollbar pb-32">
        <div className="w-full max-w-4xl space-y-6">
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <button 
                onClick={() => onViewChange(View.DASHBOARD)}
                className="text-xs font-bold text-slate-400 hover:text-primary mb-2 flex items-center gap-1 transition-colors"
              >
                <span className="material-icons text-sm">arrow_back</span>
                Dashboard
              </button>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{artifactName}</h1>
              <p className="text-sm text-slate-500">Unit 4: Senior Experience • Due Oct 24</p>
            </div>
            <div className="flex gap-2">
               <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-icons">print</span></button>
               <button className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-icons">history</span></button>
            </div>
          </header>

          {/* Document Editor Simulation */}
          <div className="bg-white dark:bg-[#151b2b] min-h-[800px] shadow-2xl rounded-sm p-12 sm:p-20 border border-slate-200 dark:border-slate-800">
            <div className="mb-10 flex justify-between items-start border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tighter">Student: Alex Morgan</p>
                <p className="text-xs text-slate-400">ID: #49202-CS</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-slate-400 uppercase">Artifact Draft</p>
                <p className="text-xs text-slate-400 font-medium tracking-widest">{new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <textarea 
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              className="w-full min-h-[600px] bg-transparent border-none p-0 text-lg leading-relaxed text-slate-800 dark:text-slate-300 focus:ring-0 placeholder:text-slate-200 dark:placeholder:text-slate-700 resize-none font-sans"
              placeholder="Start writing your reflection here... Mention specific evidence from your fieldwork and how you applied critical thinking."
            ></textarea>

            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-400 uppercase mb-4">Supporting Attachments</p>
              <div className="flex flex-wrap gap-4">
                <button className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-primary transition-all group">
                   <span className="material-icons text-slate-300 group-hover:text-primary mb-1">add</span>
                   <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary uppercase">Add Link</span>
                </button>
                <button className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-primary transition-all group">
                   <span className="material-icons text-slate-300 group-hover:text-primary mb-1">upload</span>
                   <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary uppercase">Upload</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right: Rubric & AI Sidebar */}
      <aside className="w-[400px] bg-white dark:bg-[#111827] border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-xl z-20">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#1a2332]/50">
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Grading Rubric</h2>
          <p className="text-sm font-bold text-slate-900 dark:text-white">Unit 4 Core Competencies</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {/* AI Helper Card */}
          <div className="bg-gradient-to-br from-indigo-500/5 to-primary/5 border border-primary/20 rounded-2xl p-5 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-primary text-white ${isGenerating ? 'animate-pulse' : ''}`}>
                <span className={`material-icons text-sm ${isGenerating ? 'animate-spin' : ''}`}>auto_awesome</span>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary">Gemini Assistant</h3>
            </div>
            
            {aiFeedback ? (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-white/50 dark:bg-black/20 p-4 rounded-xl border border-primary/10 whitespace-pre-wrap">
                  {aiFeedback}
                </div>
                <button 
                  onClick={runSelfCheck}
                  className="w-full py-2 text-[10px] font-bold uppercase text-primary hover:text-primary-dark transition-colors"
                >
                  Re-check Draft
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-slate-600 dark:text-slate-400">Not sure if you've hit the criteria? Let Gemini analyze your draft and suggest improvements.</p>
                <button 
                  onClick={runSelfCheck}
                  disabled={isGenerating}
                  className="w-full py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all disabled:opacity-50"
                >
                  {isGenerating ? 'Analyzing...' : 'Run Rubric Self-Check'}
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <RubricGuide 
              title="Critical Thinking" 
              weight="50%" 
              desc="Analysis of field data and innovative problem-solving (e.g. Micro-subscription models)."
              active={reflection.includes('Guatemala') || reflection.includes('subscription')}
            />
            <RubricGuide 
              title="Written Communication" 
              weight="50%" 
              desc="Structure, clarity, and use of academic citations (e.g. APA style)."
              active={reflection.includes('(') && reflection.includes(')')}
            />
          </div>
        </div>

        <div className="p-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
              <span>Word Count</span>
              <span>{reflection.trim() ? reflection.trim().split(/\s+/).length : 0} / 500</span>
            </div>
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting || reflection.length < 10}
              className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-black shadow-xl shadow-primary/25 transition-all flex justify-center items-center gap-2 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:grayscale disabled:hover:scale-100"
            >
              {isSubmitting ? <span className="material-icons animate-spin">sync</span> : <span className="material-icons">send</span>}
              <span>{isSubmitting ? 'Submitting...' : 'Submit Assessment'}</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

const RubGuideProps = { title: '', weight: '', desc: '', active: false };
const RubricGuide = ({ title, weight, desc, active }: typeof RubGuideProps) => (
  <div className={`p-4 rounded-xl border transition-all ${active ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-slate-100 dark:border-slate-800'}`}>
    <div className="flex justify-between items-center mb-1">
      <h4 className={`text-sm font-bold ${active ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-800 dark:text-slate-200'}`}>{title}</h4>
      <span className="text-[10px] font-bold text-slate-400">{weight}</span>
    </div>
    <p className="text-[11px] text-slate-500 leading-relaxed mb-3">{desc}</p>
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${active ? 'bg-emerald-500 animate-pulse' : 'bg-slate-200 dark:bg-slate-700'}`}></div>
      <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
        {active ? 'Likely Met' : 'Not Yet Detected'}
      </span>
    </div>
  </div>
);

export default Submission;
