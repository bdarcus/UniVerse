
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { View } from '../types';
import { portfolioItems } from '../data';

interface CareerCoachProps {
  onViewChange?: (view: View) => void;
}

const CareerCoach: React.FC<CareerCoachProps> = ({ onViewChange }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [groundingChunks, setGroundingChunks] = useState<any[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const studentProfile = {
    major: "Computer Science",
    year: "Senior",
    badged: ["Global Leadership", "Innovation", "Civic Engagement"],
    artifacts: portfolioItems.map(item => `${item.title} (${item.category}): ${item.description}`)
  };

  const analyzeCareer = async () => {
    if (!query && !response) {
      setQuery("Analyze my current portfolio and find matching internships or career paths.");
    }
    
    setIsAnalyzing(true);
    setResponse(null);
    setGroundingChunks([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const res = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Student is a ${studentProfile.year} ${studentProfile.major} student. 
        Earned Badges: ${studentProfile.badged.join(', ')}. 
        Portfolio Projects:
        ${studentProfile.artifacts.join('\n')}
        
        Request: ${query || "Based on my skills and projects, what are 3 career paths I should consider and find real internship listings for them."}`,
        config: {
          tools: [{ googleSearch: {} }]
        }
      });

      setResponse(res.text || "I couldn't generate a response at this time.");
      if (res.candidates?.[0]?.groundingMetadata?.groundingChunks) {
        setGroundingChunks(res.candidates[0].groundingMetadata.groundingChunks);
      }
    } catch (error) {
      console.error("Coach Error:", error);
      setResponse("An error occurred while reaching the career coach. Please verify your API access.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="bg-gradient-to-br from-purple-600/10 to-primary/10 border border-purple-200 dark:border-purple-900/30 rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center shrink-0">
            <span className="material-icons text-5xl text-purple-500 animate-pulse">auto_awesome</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">AI Career Coach</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              I analyze your unique blend of academic achievements, passport badges, and portfolio artifacts to guide your next big step.
            </p>
          </div>
          <button 
            onClick={() => analyzeCareer()}
            disabled={isAnalyzing}
            className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:scale-105 transition-all shadow-xl disabled:opacity-50"
          >
            {isAnalyzing ? 'Analyzing Portfolio...' : 'Run Quick Analysis'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Panel: Chat/Analysis */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-icons text-purple-500">chat_bubble</span> Career Consultation
            </h2>
            <div className="relative mb-6">
              <textarea 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask me anything: 'What jobs match my leadership badge?' or 'Find tech internships in San Francisco'..."
                className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl p-4 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-none"
              ></textarea>
              <button 
                onClick={analyzeCareer}
                disabled={isAnalyzing || !query}
                className="absolute bottom-3 right-3 p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50"
              >
                <span className="material-icons text-lg">send</span>
              </button>
            </div>

            {isAnalyzing && (
              <div className="py-12 flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
                <p className="text-sm font-medium text-slate-500 animate-pulse">Gemini is searching for opportunities...</p>
              </div>
            )}

            {response && (
              <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed whitespace-pre-wrap">
                  {response}
                </div>
                
                {groundingChunks.length > 0 && (
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Grounding Sources</h3>
                    <div className="flex flex-wrap gap-2">
                      {groundingChunks.map((chunk, idx) => chunk.web && (
                        <a 
                          key={idx} 
                          href={chunk.web.uri} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs hover:bg-purple-500 hover:text-white transition-all border border-slate-200 dark:border-slate-700"
                        >
                          <span className="material-icons text-sm">link</span>
                          {chunk.web.title || "External Source"}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {!response && !isAnalyzing && (
              <div className="py-20 text-center space-y-3">
                <span className="material-icons text-5xl text-slate-200 dark:text-slate-800">explore</span>
                <p className="text-slate-400 text-sm">Submit a query above to begin your personalized career exploration.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Recommendations & Context */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Your Skill Profile</h2>
            <div className="space-y-4">
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase mb-1">Top Alignment</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{portfolioItems[0]?.title || "Generalist"}</p>
                <p className="text-xs text-slate-500 mt-1">Matched via {portfolioItems[0]?.category} Artifact</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Secondary Path</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{portfolioItems[1]?.title || "Professionalism"}</p>
                <p className="text-xs text-slate-500 mt-1">Matched via {portfolioItems[1]?.category} Artifact</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Suggested Badges</h3>
              <div className="grid grid-cols-2 gap-3">
                <div 
                  onClick={() => onViewChange?.(View.EVENTS)}
                  className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center hover:border-purple-500 cursor-pointer transition-colors group"
                >
                  <span className="material-icons text-slate-400 group-hover:text-purple-500 mb-1">analytics</span>
                  <p className="text-[10px] font-bold text-slate-900 dark:text-white">Data Ethics</p>
                </div>
                <div 
                  onClick={() => onViewChange?.(View.EVENTS)}
                  className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center hover:border-purple-500 cursor-pointer transition-colors group"
                >
                  <span className="material-icons text-slate-400 group-hover:text-purple-500 mb-1">translate</span>
                  <p className="text-[10px] font-bold text-slate-900 dark:text-white">Cross-Cultural Comm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-icons text-6xl">school</span>
            </div>
            <h2 className="text-lg font-bold mb-2">Coach Insight</h2>
            <p className="text-sm text-slate-400 mb-4">
              "Alex, your work on Guatemalan water filtration is a major differentiator. When applying for NGOs, highlight the micro-subscription model specifically."
            </p>
            <button 
              onClick={() => onViewChange?.(View.PORTFOLIO)}
              className="text-xs font-bold text-purple-400 hover:text-purple-300"
            >
              Read More Insights &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCoach;
