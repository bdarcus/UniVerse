
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { View } from '../types';

interface SubmissionProps {
  onViewChange: (view: View) => void;
}

const Submission: React.FC<SubmissionProps> = ({ onViewChange }) => {
  const [reflection, setReflection] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [artifactName] = useState('Capstone Project: Phase 1');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    onViewChange(View.PORTFOLIO);
  };

  const RubricItem = ({ title, weight, description, level, last }: any) => (
    <div className={`py-4 ${!last ? 'border-b border-slate-100 dark:border-slate-800' : ''}`}>
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{title}</h4>
        <span className="text-xs font-bold text-primary">{weight}</span>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{description}</p>
      <div className="flex gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-primary">
          {level}
        </span>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500 pb-24 text-left">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button 
            onClick={() => onViewChange(View.DASHBOARD)}
            className="text-xs font-bold text-slate-400 hover:text-primary mb-2 flex items-center gap-1 transition-colors"
          >
            <span className="material-icons text-sm">arrow_back</span>
            Back to Dashboard
          </button>
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
              <div className="flex gap-3">
                <button className="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1">
                  <span className="material-icons-outlined text-sm">photo_camera</span>
                  Capture
                </button>
                <button className="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1">
                  <span className="material-icons-outlined text-sm">link</span>
                  Add Link
                </button>
              </div>
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
          </div>

          {/* Reflection Card */}
          <div className="bg-white dark:bg-[#1a2332] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex-grow flex flex-col">
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
            <textarea 
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              className="w-full h-48 p-4 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-800 dark:text-slate-200 resize-none text-sm leading-relaxed mt-4 flex-grow" 
              placeholder="Start typing your reflection here..."
            ></textarea>
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
            
            <div className="space-y-2">
              <RubricItem title="Thesis Statement" weight="40%" description="Clearly articulates a position or argument." level="Proficient" />
              <RubricItem title="Evidence Integration" weight="30%" description="Integrates relevant evidence to support claims." level="Proficient" last />
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:left-64 bg-white dark:bg-[#1a2332] border-t border-slate-200 dark:border-slate-800 py-4 px-6 z-40 shadow-lg flex items-center justify-between">
        <div className="text-sm text-slate-500 dark:text-slate-400 hidden sm:block">
          Auto-saved at <span className="text-slate-800 dark:text-slate-200 font-medium">10:45 AM</span>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button 
            onClick={() => onViewChange(View.PORTFOLIO)}
            className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-slate-50 transition-colors"
          >
            Save Draft
          </button>
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-lg shadow-primary/25 transition-all flex items-center gap-2"
          >
            {isSubmitting ? (
              <span className="material-icons animate-spin text-sm">sync</span>
            ) : (
              <span className="material-icons text-sm">send</span>
            )}
            {isSubmitting ? 'Submitting...' : 'Submit Artifact'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submission;
