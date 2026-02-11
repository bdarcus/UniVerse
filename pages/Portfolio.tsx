
import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'passport' | 'artifacts'>('passport');

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="hover:text-primary cursor-pointer">Home</span>
              <span className="material-icons text-xs">chevron_right</span>
              <span className="text-primary font-medium">Portfolio</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Unified Portfolio</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              A comprehensive record of your academic artifacts and extracurricular milestones.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center px-4 py-2.5 border border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <span className="material-icons text-base mr-2">ios_share</span>
              Export
            </button>
            <button className="inline-flex items-center px-4 py-2.5 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-primary hover:bg-blue-700 transition-all shadow-blue-500/25">
              <span className="material-icons text-base mr-2">public</span>
              Public Profile
            </button>
          </div>
        </header>

        {/* Tab System */}
        <div className="flex border-b border-slate-200 dark:border-slate-800">
          <button 
            onClick={() => setActiveTab('passport')}
            className={`px-8 py-4 text-sm font-bold transition-all relative ${
              activeTab === 'passport' 
                ? 'text-primary' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            Passport (Badges)
            {activeTab === 'passport' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"></div>
            )}
          </button>
          <button 
            onClick={() => setActiveTab('artifacts')}
            className={`px-8 py-4 text-sm font-bold transition-all relative ${
              activeTab === 'artifacts' 
                ? 'text-primary' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            Artifacts (Projects)
            {activeTab === 'artifacts' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"></div>
            )}
          </button>
        </div>

        {activeTab === 'passport' ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Stats Summary */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatMiniCard icon="military_tech" label="Badges Earned" value="12" color="blue" />
              <StatMiniCard icon="schedule" label="Hours Logged" value="48.5" color="green" />
              <StatMiniCard icon="trending_up" label="Current Level" value="Gold" color="purple" />
              <StatMiniCard icon="pending_actions" label="In Progress" value="5" color="orange" />
            </section>

            {/* Achievement Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AchievementCard 
                icon="school" 
                title="Career Readiness Workshop" 
                category="Professional Dev" 
                description="Completed the foundational workshop series covering resume building, interview skills, and networking basics."
                progress={100}
                status="COMPLETED"
                footer="Oct 24, 2023"
              />
              <AchievementCard 
                icon="volunteer_activism" 
                title="Civic Engagement Leader" 
                category="Community Service" 
                description="Lead at least 3 community service events and log 20+ hours of volunteer work."
                progress={75}
                progressText="15 / 20 Hours"
                footer="Last updated 2d ago"
                actionLabel="Log Hours"
              />
              <AchievementCard 
                icon="groups" 
                title="Club Officer Track" 
                category="Campus Life" 
                description="Hold an officer position in a registered student organization for one full academic semester."
                progress={25}
                progressText="1 / 4 Months"
                footer="Ongoing"
                actionLabel="Details"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ArtifactProjectCard 
                title="Capstone: Renewable Grid" 
                category="Engineering" 
                status="GRADED" 
                grade="A"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDpcwarmj8eDYdna4LOX86k2_3NWohSBnaR_paXMKB7RiXnhZrRCxQxZ7uPp9muAt7VdSXOdZbGHNbHHV_TVyKN5r6XZtyyh_lUgHM-2SWy6vSeJjYAvnZwAXOIneSOItQD7LKwTBGN9wZVFxtuOigZQsLJC6lCY-y9FE0_YR8kjwHwlgVyndLtJHuQQY5zLa2BIRZiHrE5tFWJXTRgENGKE7fNRcCsZULzDeXxchMx673n5sudgCdBgWSJmd67i6_lwEDSAHoGw8o"
              />
              <ArtifactProjectCard 
                title="Visualization Techniques" 
                category="Data Science" 
                status="GRADED" 
                grade="B+"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB_civ_aUIPSohNq2nIsfc3LiPZrxpK6-u4lOxI-8ca6oW2Tba0E6eCc7Z1SPfET8a0DV18sY_QmZRVHc4D8hGtO77TJNSl7N2sN6ZBMRiC7HCC-MR6Np1NiHLIqCjAxG3nk-gk33iqrOXbeJoHsGk_EoVozkcM7uTidoCepPEmqsq0mBowHusJs_TSdC0L67ZCLnhHgfo_410q4tKIIqXZRQbkJ74jafee4PBLqvEPEkjtafpZoJf9-GVHkTNtTW02Xnchk9gm3ZY"
              />
              <ArtifactProjectCard 
                title="Ethics in AI" 
                category="Philosophy" 
                status="PENDING" 
                imageUrl="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400"
              />
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center p-8 text-center hover:border-primary hover:bg-primary/5 transition-all group cursor-pointer">
                <span className="material-icons text-3xl text-slate-400 group-hover:text-primary mb-2">add_circle_outline</span>
                <p className="text-sm font-bold text-slate-600 dark:text-slate-400">Add Project Artifact</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ArtifactProjectCard = ({ title, category, status, grade, imageUrl }: any) => (
  <div className="bg-white dark:bg-[#151b2b] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
    <div className="h-44 relative overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4">
        <span className="text-white font-bold text-lg">{title}</span>
      </div>
      {grade && (
        <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-primary">
          <span className="text-primary font-bold">{grade}</span>
        </div>
      )}
    </div>
    <div className="p-4 flex items-center justify-between">
      <div>
        <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">{category}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${status === 'GRADED' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{status}</span>
      </div>
    </div>
  </div>
);

const StatMiniCard = ({ icon, label, value, color }: any) => {
  const colors: any = {
    blue: 'bg-blue-50 text-primary dark:bg-blue-900/20',
    green: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
    orange: 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400'
  };
  return (
    <div className="bg-white dark:bg-[#151b2b] p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-4">
      <div className={`p-3 rounded-lg ${colors[color]}`}>
        <span className="material-icons text-2xl">{icon}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
        <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
};

const AchievementCard = ({ icon, title, category, description, progress, status, footer, progressText, actionLabel }: any) => (
  <div className={`group relative bg-white dark:bg-[#151b2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 overflow-hidden flex flex-col h-full ${status === 'LOCKED' ? 'opacity-75' : ''}`}>
    {status === 'COMPLETED' && (
      <div className="absolute top-0 right-0">
        <div className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-bold px-3 py-1 rounded-bl-xl border-l border-b border-green-200 dark:border-green-800">
          COMPLETED
        </div>
      </div>
    )}
    <div className="p-6 flex-grow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center border ${
          progress === 100 ? 'bg-blue-50 border-blue-100 text-primary dark:bg-blue-900/40 dark:border-slate-700' : 
          progress === 0 ? 'bg-slate-100 border-slate-200 text-slate-400 dark:bg-slate-800 dark:border-slate-700' :
          'bg-orange-50 border-orange-100 text-orange-500 dark:bg-orange-900/40 dark:border-slate-700'
        }`}>
          <span className="material-icons text-3xl">{icon}</span>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          {category}
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{description}</p>
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-slate-700 dark:text-slate-300">{progressText || 'Progress'}</span>
          <span className={progress === 100 ? 'text-green-600 dark:text-green-400' : 'text-primary'}>{progress}%</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
          <div className={`h-2 rounded-full transition-all duration-1000 ${progress === 100 ? 'bg-green-500' : 'bg-primary'}`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
    <div className="px-6 py-4 bg-slate-50 dark:bg-[#0f141f] border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
      <span className="text-xs text-slate-500 flex items-center gap-1">
        <span className="material-icons text-sm">{status === 'LOCKED' ? 'lock' : 'event'}</span>
        {footer}
      </span>
      {actionLabel ? (
        <button className="px-3 py-1 bg-primary text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors shadow-sm">{actionLabel}</button>
      ) : (
        <button className={`text-sm font-medium transition-colors ${status === 'LOCKED' ? 'text-slate-400 cursor-not-allowed' : 'text-primary hover:text-blue-700 dark:hover:text-blue-400'}`}>
          {status === 'LOCKED' ? 'View Requirements' : 'View Badge'}
        </button>
      )}
    </div>
  </div>
);

export default Portfolio;
