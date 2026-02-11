
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const Submission: React.FC = () => {
  const [reflection, setReflection] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [artifactName, setArtifactName] = useState('Capstone Project: Phase 1');

  const generateAIAssistance = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am writing a student reflection for my artifact titled "${artifactName}". I need help explaining how it demonstrates Critical Thinking and Communication. Please provide a 2-3 sentence professional starting point I can build on.`,
      });
      if (response.text) {
        setReflection(prev => prev + (prev ? '\n\n' : '') + response.text);
      }
    } catch (error) {
      console.error('Error generating AI help:', error);
      alert('Could not reach Gemini API. Please try again later.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{artifactName}</h1>
          <p className="text-slate-500 dark:text-slate-400">Due: October 24, 2023 • 11:59 PM</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
            <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
            Draft in Progress
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Upload Card */}
          <div className="bg-white dark:bg-[#1a2332] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <span className="material-icons-outlined text-primary">upload_file</span>
                Artifact Upload
              </h2>
              <button className="text-xs font-medium text-primary hover:text-primary-dark flex items-center gap-1">
                <span className="material-icons-outlined text-sm">link</span>
                Add Link
              </button>
            </div>
            
            <div className="border-2 border-dashed border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all rounded-xl p-8 text-center cursor-pointer group">
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined text-3xl">cloud_upload</span>
              </div>
              <p className="text-slate-900 dark:text-white font-medium mb-1">Click to upload or drag and drop</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">PDF, DOCX, JPG, or MP4 (max. 50MB)</p>
              <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 transition-colors">
                Browse Files
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded flex items-center justify-center">
                    <span className="material-icons-outlined text-xl">picture_as_pdf</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate max-w-[200px]">Research_Draft_V3.pdf</p>
                    <p className="text-xs text-slate-500">2.4 MB • Uploaded just now</p>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20">
                  <span className="material-icons-outlined text-lg">delete</span>
                </button>
              </div>
            </div>
          </div>

          {/* Reflection Card */}
          <div className="bg-white dark:bg-[#1a2332] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex-grow">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <span className="material-icons-outlined text-primary">psychology</span>
                Student Reflection
              </h2>
              <button 
                onClick={generateAIAssistance}
                disabled={isGenerating}
                className={`text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 transition-all ${
                  isGenerating 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20'
                }`}
              >
                <span className={`material-icons text-sm ${isGenerating ? 'animate-spin' : ''}`}>auto_awesome</span>
                {isGenerating ? 'Thinking...' : 'AI Help'}
              </button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Explain how this artifact demonstrates your growth in <span className="font-medium text-primary">Critical Thinking</span> and <span className="font-medium text-primary">Communication</span>.
            </p>
            <div className="border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-shadow">
              <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-2 flex gap-1">
                {['format_bold', 'format_italic', 'format_list_bulleted'].map(icon => (
                  <button key={icon} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300">
                    <span className="material-icons-outlined text-lg">{icon}</span>
                  </button>
                ))}
                <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1 self-center"></div>
                <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300">
                  <span className="material-icons-outlined text-lg">link</span>
                </button>
              </div>
              <textarea 
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                className="w-full h-48 p-4 bg-transparent border-none focus:ring-0 text-slate-800 dark:text-slate-200 resize-none text-sm leading-relaxed" 
                placeholder="Start typing your reflection here..."
              ></textarea>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-slate-400">Saving draft...</span>
              <span className="text-xs text-slate-400">{reflection.split(/\s+/).filter(Boolean).length}/500 words</span>
            </div>
          </div>
        </div>

        {/* Sidebar Context */}
        <div className="lg:col-span-5">
          <div className="bg-white dark:bg-[#1a2332] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 space-y-6 sticky top-24">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">Assessment Criteria</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20 text-xs font-medium">
                  <span className="material-icons-outlined text-sm mr-1">lightbulb</span>
                  Critical Thinking
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-medium">
                  <span className="material-icons-outlined text-sm mr-1">chat</span>
                  Written Comm.
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <RubricItem title="Thesis Statement" weight="40%" description="Clearly articulates a position or argument that is specific, contestable, and relevant to the assignment." level="Proficient" />
              <RubricItem title="Evidence Integration" weight="30%" description="Integrates relevant evidence to support claims; attribution is clear and accurate." level="Proficient" />
              <RubricItem title="Reflection Depth" weight="30%" description="Reflection explicitly connects artifact to learning outcomes with concrete examples." level="Proficient" last />
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:left-64 bg-white dark:bg-[#1a2332] border-t border-slate-200 dark:border-slate-800 py-4 px-6 z-40 shadow-lg flex items-center justify-between">
        <div className="text-sm text-slate-500 dark:text-slate-400 hidden sm:block">
          Last saved: <span className="text-slate-800 dark:text-slate-200 font-medium">Just now</span>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-slate-50 transition-colors">
            Save Draft
          </button>
          <button className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium text-sm shadow-lg shadow-primary/25 transition-all flex items-center gap-2">
            <span className="material-icons-outlined text-lg">send</span>
            Submit for Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

const RubricItem = ({ title, weight, description, level, last }: any) => (
  <div className="group">
    <div className="flex justify-between items-baseline mb-2">
      <h4 className="font-semibold text-sm text-slate-900 dark:text-white">{title}</h4>
      <span className="text-xs font-medium text-slate-500">Weight: {weight}</span>
    </div>
    <div className={`relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-4 ${last ? '' : 'pb-2'}`}>
      <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary transition-colors"></div>
      <div className="bg-white dark:bg-slate-800 p-3 rounded border border-primary ring-1 ring-primary/20 shadow-sm relative">
        <div className="absolute -top-2 -right-2 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">Target</div>
        <p className="text-xs font-bold text-primary mb-1">{level}</p>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">{description}</p>
      </div>
    </div>
  </div>
);

export default Submission;
