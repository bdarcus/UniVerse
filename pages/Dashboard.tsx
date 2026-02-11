
import React from 'react';
import { View } from '../types';

interface DashboardProps {
  onViewChange: (view: View) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewChange }) => {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Stats Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard 
          label="Total Credits" 
          value="86" 
          total="/120" 
          icon="school" 
          color="blue" 
          progress={72} 
        />
        <StatCard 
          label="Current GPA" 
          value="3.8" 
          subText="+0.2 from last semester" 
          icon="insights" 
          color="emerald" 
          trend="up" 
        />
        <StatCard 
          label="Passport Badges" 
          value="12" 
          subText="Gold Tier Candidate" 
          icon="military_tech" 
          color="amber" 
        />
        <StatCard 
          label="Pending Actions" 
          value="3" 
          subText="Next due: Tomorrow" 
          icon="priority_high" 
          color="rose" 
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Portfolio Preview */}
        <section className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-icons text-primary">folder_shared</span> My Portfolio
            </h2>
            <button 
              onClick={() => onViewChange(View.PORTFOLIO)}
              className="text-sm font-medium text-primary hover:text-primary-dark"
            >
              View All Projects
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PortfolioCard 
              title="Capstone: Renewable Grid" 
              category="Engineering" 
              date="Oct 24, 2023"
              description="A comprehensive study on integrating solar microgrids into urban infrastructure."
              status="PUBLIC"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDpcwarmj8eDYdna4LOX86k2_3NWohSBnaR_paXMKB7RiXnhZrRCxQxZ7uPp9muAt7VdSXOdZbGHNbHHV_TVyKN5r6XZtyyh_lUgHM-2SWy6vSeJjYAvnZwAXOIneSOItQD7LKwTBGN9wZVFxtuOigZQsLJC6lCY-y9FE0_YR8kjwHwlgVyndLtJHuQQY5zLa2BIRZiHrE5tFWJXTRgENGKE7fNRcCsZULzDeXxchMx673n5sudgCdBgWSJmd67i6_lwEDSAHoGw8o"
            />
            <PortfolioCard 
              title="Visualization Techniques" 
              category="Data Science" 
              date="Nov 02, 2023"
              description="Exploration of D3.js libraries for presenting complex sociological datasets."
              status="DRAFT"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB_civ_aUIPSohNq2nIsfc3LiPZrxpK6-u4lOxI-8ca6oW2Tba0E6eCc7Z1SPfET8a0DV18sY_QmZRVHc4D8hGtO77TJNSl7N2sN6ZBMRiC7HCC-MR6Np1NiHLIqCjAxG3nk-gk33iqrOXbeJoHsGk_EoVozkcM7uTidoCepPEmqsq0mBowHusJs_TSdC0L67ZCLnhHgfo_410q4tKIIqXZRQbkJ74jafee4PBLqvEPEkjtafpZoJf9-GVHkTNtTW02Xnchk9gm3ZY"
            />
          </div>
          
          <button 
            onClick={() => onViewChange(View.SUBMISSION)}
            className="w-full py-3 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-icons">add_circle_outline</span>
            <span className="font-medium">Add New Artifact</span>
          </button>
        </section>

        {/* Assessments Feed */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-icons text-primary">assignment</span> Assessments
            </h2>
          </div>
          
          <div className="bg-white dark:bg-[#151b2b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 space-y-6">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Upcoming Due Dates</h3>
              <div className="space-y-4">
                <DueItem month="NOV" day="12" title="Algorithm Analysis Paper" sub="CS 301 • Dr. Smith" tags={['Research', 'High Priority']} isAlert />
                <DueItem month="NOV" day="15" title="Midterm Reflection" sub="ETHICS 101 • Prof. Lee" />
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Recent Feedback</h3>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 border border-slate-100 dark:border-slate-700">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-500">UX Design Principles</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">92/100</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 italic">"Excellent work on the user personas. Consider expanding the..."</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Passport Summary */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-icons text-primary">military_tech</span> My Passport
          </h2>
          <span className="text-xs font-bold uppercase text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Level 4 Scholar</span>
        </div>
        
        <div className="bg-gradient-to-r from-[#101622] to-[#1e2a42] rounded-xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-1 text-slate-200">Next Milestone</h3>
              <p className="text-3xl font-bold text-white mb-4">Gold Tier</p>
              <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2">
                <div className="bg-accent-gold h-2 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" style={{width: '65%'}}></div>
              </div>
              <p className="text-xs text-slate-400">650 / 1000 XP</p>
            </div>
            
            <div className="md:col-span-2 flex flex-wrap gap-4 justify-center md:justify-end">
              <BadgeIcon icon="public" label="Global Citizen" active />
              <BadgeIcon icon="code" label="Hackathon" />
              <BadgeIcon icon="volunteer_activism" label="Volunteer" />
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-slate-800/50 border border-dashed border-slate-600 flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer">
                  <span className="text-xs text-slate-400 font-medium">+9 More</span>
                </div>
                <span className="text-xs font-medium text-transparent">Hidden</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ label, value, total, subText, icon, color, progress, trend }: any) => {
  const colorMap: any = {
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
    emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
    amber: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
    rose: 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400',
  };

  return (
    <div className={`bg-white dark:bg-[#151b2b] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group hover:border-primary/30 transition-colors`}>
      <div className={`absolute -right-6 -top-6 w-24 h-24 bg-slate-500/5 rounded-full group-hover:bg-slate-500/10 transition-colors`}></div>
      <div className="flex items-start justify-between relative z-10">
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{label}</p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            {value}{total && <span className="text-lg text-slate-400 font-normal">{total}</span>}
          </h3>
        </div>
        <span className={`p-2 rounded-lg ${colorMap[color]}`}>
          <span className="material-icons">{icon}</span>
        </span>
      </div>
      {progress !== undefined ? (
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-auto">
          <div className="bg-primary h-1.5 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
        </div>
      ) : (
        <p className={`text-xs mt-auto flex items-center gap-1 ${colorMap[color].split(' ')[1]}`}>
          {trend === 'up' && <span className="material-icons text-[14px]">trending_up</span>}
          {subText}
        </p>
      )}
    </div>
  );
};

const PortfolioCard = ({ title, category, date, description, status, imageUrl }: any) => (
  <div className="bg-white dark:bg-[#151b2b] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
    <div className="h-40 bg-slate-200 relative overflow-hidden">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={imageUrl} alt={title} />
      <div className={`absolute top-3 right-3 backdrop-blur px-2 py-1 rounded text-xs font-bold ${
        status === 'PUBLIC' 
          ? 'bg-white/90 text-slate-700 dark:bg-black/80 dark:text-slate-300' 
          : 'bg-amber-100/90 text-amber-800 dark:bg-amber-900/80 dark:text-amber-200'
      }`}>
        {status}
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
          category === 'Engineering' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
        }`}>
          {category}
        </span>
        <span className="text-xs text-slate-400">{date}</span>
      </div>
      <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{description}</p>
    </div>
  </div>
);

const DueItem = ({ month, day, title, sub, tags, isAlert }: any) => (
  <div className="flex gap-3 group cursor-pointer">
    <div className="flex flex-col items-center min-w-[3rem]">
      {/* Fix: Added missing 'className' attribute */}
      <span className={`text-xs font-bold uppercase ${isAlert ? 'text-rose-500' : 'text-slate-500'}`}>{month}</span>
      <span className="text-lg font-bold text-slate-900 dark:text-white">{day}</span>
    </div>
    <div className="flex-1 pb-4 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
      <div className="flex justify-between items-start">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{title}</h4>
        {isAlert && <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5"></span>}
      </div>
      <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
      {tags && (
        <div className="mt-2 flex gap-2">
          {tags.map((tag: string) => (
            <span key={tag} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-[10px] font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const BadgeIcon = ({ icon, label, active }: any) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <div className={`w-16 h-16 rounded-full bg-slate-800 border-2 flex items-center justify-center shadow-lg relative group-hover:-translate-y-1 transition-transform ${
      active ? 'border-accent-gold' : 'border-slate-600'
    }`}>
      <span className={`material-icons text-3xl ${active ? 'text-accent-gold' : 'text-slate-400'}`}>{icon}</span>
      {active && <div className="absolute inset-0 rounded-full bg-accent-gold/20 animate-pulse"></div>}
    </div>
    <span className={`text-xs font-medium transition-colors ${active ? 'text-slate-300' : 'text-slate-400'} group-hover:text-white`}>
      {label}
    </span>
  </div>
);

export default Dashboard;
