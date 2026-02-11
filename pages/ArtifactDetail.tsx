
import React from 'react';
import { View, ViewContext } from '../types';
import { portfolioItems, usePortfolioItems, useAppContext } from '../store';

interface ArtifactDetailProps {
  id: string | null;
  onViewChange: (view: View) => void;
}

const ArtifactDetail: React.FC<ArtifactDetailProps> = ({ id, onViewChange }) => {
  const portfolioItems = usePortfolioItems();
  const artifact = portfolioItems.find(item => item.id === id) || portfolioItems[0];
  const { context } = useAppContext();
  const isPublic = context === ViewContext.PUBLIC;

  if (!artifact) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Artifact Not Found</h2>
        <button 
          onClick={() => onViewChange(View.PORTFOLIO)}
          className="mt-6 px-6 py-2 bg-primary text-white rounded-lg"
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <header className="mb-8 flex flex-col md:flex-row md:items-start justify-between gap-6 text-left">
          <div className="space-y-2">
            <button 
              onClick={() => onViewChange(View.PORTFOLIO)}
              className="text-xs font-bold text-slate-400 hover:text-primary mb-2 flex items-center gap-1 transition-colors"
            >
              <span className="material-icons text-sm">arrow_back</span>
              Back to Portfolio
            </button>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{artifact.title}</h1>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-bold">
                {artifact.category}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">Published {artifact.date}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors">
              <span className="material-icons text-[20px]">ios_share</span>
            </button>
            <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-blue-700 transition-all">
              Edit Artifact
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="aspect-[16/9] w-full relative group">
                <img src={artifact.imageUrl} alt="Artifact Preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white/90 text-slate-900 px-6 py-2 rounded-full font-bold flex items-center gap-2">
                    <span className="material-icons">fullscreen</span> Fullscreen Preview
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center">
                    <span className="material-icons">psychology</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Student Reflection</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-primary/20 pl-6 py-2 mb-8 bg-slate-50/50 dark:bg-slate-800/30 rounded-r-xl">
                  {artifact.reflection || "No reflection has been written for this artifact yet. Reflection is a critical part of the 'Folio Thinking' process—it helps you connect your work to your broader learning journey."}
                </p>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Executive Summary</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {artifact.description}
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Technical Specs</p>
                    <ul className="text-sm space-y-1 text-slate-700 dark:text-slate-300">
                      <li>• 2.4kW Solar Array Simulation</li>
                      <li>• Lithium-Ion Storage Model</li>
                      <li>• Edge Computing Controller Logic</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Key Competencies</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 px-2 py-0.5 rounded font-bold uppercase">System Design</span>
                      <span className="text-[10px] bg-purple-100 text-purple-700 dark:bg-purple-900/30 px-2 py-0.5 rounded font-bold uppercase">Sustainability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {artifact.connections && artifact.connections.length > 0 && (
              <div className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <span className="material-icons">hub</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Integrative Connections</h3>
                    <p className="text-xs text-slate-500">How this work links to other learning experiences</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {artifact.connections.map(connId => {
                    const linkedItem = portfolioItems.find(i => i.id === connId);
                    if (!linkedItem) return null;
                    return (
                      <div 
                        key={connId}
                        onClick={() => onViewChange(View.ARTIFACT_DETAIL)} // Simplified for prototype
                        className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all cursor-pointer group bg-slate-50/50 dark:bg-slate-800/20"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                          <img src={linkedItem.imageUrl} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="overflow-hidden text-left">
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">{linkedItem.title}</p>
                          <p className="text-[10px] text-slate-500 uppercase font-medium">{linkedItem.category}</p>
                        </div>
                        <span className="material-icons text-slate-300 group-hover:text-primary ml-auto text-sm transition-colors">arrow_forward</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            )}

            {!isPublic && (
              <div className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-icons">rate_review</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Faculty Feedback</h3>
                </div>
                {artifact.feedback ? (
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
                    <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed mb-4">
                      "{artifact.feedback}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img src={`https://picsum.photos/seed/${artifact.faculty}/40/40`} alt="Faculty" className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">{artifact.faculty}</p>
                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Faculty Member</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-dashed border-slate-200 dark:border-slate-700 text-center">
                    <p className="text-sm text-slate-400 italic">This artifact is awaiting faculty review.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar Metadata */}
          <div className="lg:col-span-4 space-y-6">
            {!isPublic && (
              <div className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Assessment Record</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Assessment Level</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-primary uppercase tracking-tighter">{artifact.assessmentLevel || 'Pending'}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Credits Awarded</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{artifact.credits ? `${artifact.credits} Credits` : 'Pending'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Privacy Setting</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
                      <span className="material-icons text-[14px]">public</span> Public
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Related Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['D3.js', 'Renewable Energy', 'System Architecture', 'JSON', 'Data Viz'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-medium border border-slate-100 dark:border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {!isPublic && (
              <button 
                onClick={() => onViewChange(View.COACH)}
                className="w-full group bg-slate-900 text-white p-6 rounded-2xl relative overflow-hidden transition-all hover:scale-[1.02]"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <span className="material-icons text-5xl">auto_awesome</span>
                </div>
                <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Coach Suggestion</p>
                <p className="text-sm font-medium leading-relaxed">
                  "Alex, this artifact is perfect for the <strong>Tesla Sustainability Internship</strong>. Shall I help you write a tailored cover letter based on this?"
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetail;
