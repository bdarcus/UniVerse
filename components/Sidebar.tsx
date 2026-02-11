
import React from 'react';
import { View } from '../types';

interface SidebarProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const navItems = [
    { id: View.DASHBOARD, label: 'Dashboard', icon: 'dashboard' },
  ];

  const academicItems = [
    { id: View.PORTFOLIO, label: 'Unified Portfolio', icon: 'collections_bookmark' },
    { id: View.SUBMISSION, label: 'Assessments', icon: 'assignment', badge: 3 },
    { id: View.PEER_REVIEW, label: 'Peer Review', icon: 'groups' },
  ];

  const extracurricularItems = [
    { id: View.ASSESSMENT, label: 'Faculty View', icon: 'rate_review' },
    { id: View.EVENTS, label: 'Opportunity Catalog', icon: 'explore' },
  ];

  const aiItems = [
    { id: View.COACH, label: 'Career Coach', icon: 'auto_awesome', isNew: true },
  ];

  const NavLink: React.FC<{ item: { id: View; label: string; icon: string; badge?: number; isNew?: boolean } }> = ({ item }) => (
    <button
      onClick={() => onViewChange(item.id)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative group ${
        activeView === item.id
          ? 'bg-primary/10 text-primary dark:text-white'
          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
      }`}
    >
      <span className={`material-icons text-[20px] ${item.id === View.COACH ? 'text-purple-500' : ''}`}>{item.icon}</span>
      <span className="font-medium text-sm">{item.label}</span>
      {item.badge && (
        <span className="ml-auto bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
          {item.badge}
        </span>
      )}
      {item.isNew && (
        <span className="ml-auto w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
      )}
    </button>
  );

  return (
    <aside className="w-64 bg-white dark:bg-[#151b2b] border-r border-slate-200 dark:border-slate-800 flex flex-col hidden md:flex shrink-0 z-20 h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-xl">U</div>
          <span className="font-bold text-lg text-primary dark:text-white tracking-tight">Uni<span className="text-slate-500 dark:text-slate-400">Verse</span></span>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navItems.map(item => <NavLink key={item.id} item={item} />)}
        
        <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Academics</div>
        {academicItems.map(item => <NavLink key={item.id} item={item} />)}
        
        <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Extracurricular</div>
        {extracurricularItems.map(item => <NavLink key={item.id} item={item} />)}

        <div className="pt-4 pb-2 px-4 text-xs font-semibold text-purple-400 uppercase tracking-wider">AI Insight</div>
        {aiItems.map(item => <NavLink key={item.id} item={item} />)}
        
        <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">System</div>
        <button
          onClick={() => onViewChange(View.SETTINGS)}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg group transition-colors"
        >
          <span className="material-icons text-[20px]">settings</span>
          <span className="font-medium text-sm">Settings</span>
        </button>
      </nav>

      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <img 
            alt="Student Profile" 
            className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm" 
            src="https://picsum.photos/seed/student/80/80"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Alex Morgan</p>
            <p className="text-xs text-slate-500 truncate">Computer Science '25</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <span className="material-icons text-[20px]">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
