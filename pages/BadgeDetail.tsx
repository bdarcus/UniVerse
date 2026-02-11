
import React from 'react';
import { View } from '../types';

interface BadgeDetailProps {
  id: string | null;
  onViewChange: (view: View) => void;
}

const BadgeDetail: React.FC<BadgeDetailProps> = ({ id, onViewChange }) => {
  // Mock badge data
  const badge = {
    title: "Global Leadership",
    passportId: "ID-US-2023-0042",
    date: "Dec 05, 2023",
    status: "COMPLETED",
    category: "Milestone Badge",
    icon: "public",
    xp: "+1000 XP",
    description: "Awarded to students who demonstrate exceptional cross-cultural collaboration, leadership in community initiatives, and completion of global ethics workshops.",
    competencies: [
      "Cross-Cultural Communication",
      "Ethical Decision Making",
      "Conflict Resolution",
      "Project Coordination"
    ],
    evidence: [
      { name: "Fieldwork Reflection (Guatemala)", type: "Artifact" },
      { name: "Global Ethics Symposium Attendance", type: "Event" },
      { name: "Team Leadership Review", type: "Feedback" }
    ]
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 pb-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <button 
          onClick={() => onViewChange(View.PORTFOLIO)}
          className="text-xs font-bold text-slate-400 hover:text-primary mb-8 flex items-center gap-1 transition-colors"
        >
          <span className="material-icons text-sm">arrow_back</span>
          Back to Passport
        </button>

        <div className="relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>

          {/* Certificate Style Card */}
          <div className="bg-white dark:bg-[#151b2b] rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden text-center">
            <div className="bg-slate-900 text-white py-4 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest border-b border-slate-800">
              <span className="flex items-center gap-2"><span className="material-icons text-[14px] text-accent-gold">verified</span> Secure Credential</span>
              <span className="text-slate-500">Blockchain ID: {badge.passportId}</span>
            </div>

            <div className="p-12 md:p-20">
              <div className="mb-10 inline-block relative">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-700 shadow-2xl relative z-10">
                  <span className="material-icons text-6xl md:text-7xl text-primary">{badge.icon}</span>
                </div>
                {/* Orbital Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rounded-full animate-spin-slow"></div>
              </div>

              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">{badge.category}</h2>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                {badge.title}
              </h1>
              <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-12">
                {badge.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <span className="material-icons text-sm">checklist</span> Verified Skills
                  </h3>
                  <div className="space-y-3">
                    {badge.competencies.map(skill => (
                      <div key={skill} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <span className="material-icons text-sm">history</span> Evidence Log
                  </h3>
                  <div className="space-y-3">
                    {badge.evidence.map(item => (
                      <div key={item.name} className="flex items-center justify-between text-sm group cursor-pointer">
                        <span className="text-slate-700 dark:text-slate-200 hover:text-primary transition-colors">{item.name}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase">{item.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="w-full md:w-auto px-8 py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-slate-800 transition-all">
                  <span className="material-icons text-sm">share</span> Share to LinkedIn
                </button>
                <button className="w-full md:w-auto px-8 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
                  <span className="material-icons text-sm">download</span> Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeDetail;
