
import React from 'react';
import { View, UserRole } from '../types';
import { useAppContext } from '../store';

interface SidebarProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const { role } = useAppContext();

  const studentNav = [
    { id: View.DASHBOARD, label: 'Dashboard', icon: 'dashboard' },
    { id: View.PORTFOLIO, label: 'Unified Portfolio', icon: 'collections_bookmark' },
    { id: View.SUBMISSION, label: 'Assessments', icon: 'assignment', badge: 3 },
    { id: View.PEER_REVIEW, label: 'Peer Review', icon: 'groups' },
    { id: View.EVENTS, label: 'Opportunity Catalog', icon: 'explore' },
    { id: View.COACH, label: 'Career Coach', icon: 'auto_awesome', isNew: true },
  ];

  const facultyNav = [
    { id: View.ANALYTICS, label: 'Program Dashboard', icon: 'dashboard' },
    { id: View.ASSESSMENT, label: 'Review Queue', icon: 'rate_review', badge: 8 },
    { id: View.ANALYTICS, label: 'Learning Analytics', icon: 'analytics' },
    { id: View.EVENTS, label: 'Manage Opportunities', icon: 'edit_calendar' },
  ];

  const currentNav = role === UserRole.STUDENT ? studentNav : facultyNav;

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
        <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full ${role === UserRole.FACULTY ? 'bg-purple-100 text-purple-700' : 'bg-primary/10 text-primary'}`}>
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
          <div className={`w-8 h-8 rounded flex items-center justify-center text-white font-bold text-xl ${role === UserRole.FACULTY ? 'bg-purple-600' : 'bg-primary'}`}>U</div>
          <span className="font-bold text-lg text-primary dark:text-white tracking-tight">Uni<span className="text-slate-500 dark:text-slate-400">Verse</span></span>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <div className="pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {role === UserRole.STUDENT ? 'Student Hub' : 'Faculty Console'}
        </div>
        {currentNav.map(item => <NavLink key={item.id} item={item} />)}
        
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
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm" 
            src={role === UserRole.STUDENT ? "https://picsum.photos/seed/alexmorgan/80/80" : "https://picsum.photos/seed/faculty/80/80"}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
              {role === UserRole.STUDENT ? 'Alex Morgan' : 'Dr. Elena Rodriguez'}
            </p>
            <p className="text-xs text-slate-500 truncate">
              {role === UserRole.STUDENT ? "Computer Science '25" : "Engineering Dept Head"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
