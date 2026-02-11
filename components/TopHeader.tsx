
import React from 'react';
import { View } from '../types';

interface TopHeaderProps {
  viewTitle: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onViewChange?: (view: View) => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({ viewTitle, isDarkMode, toggleDarkMode, onViewChange }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-[#101622]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between h-16">
      <div className="flex items-center gap-4 text-left">
        <button className="md:hidden p-2 -ml-2 text-slate-600 dark:text-slate-300">
          <span className="material-icons">menu</span>
        </button>
        <div className="cursor-pointer" onClick={() => onViewChange?.(View.DASHBOARD)}>
          <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{viewTitle}</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Welcome back, Alex</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block group">
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px] group-focus-within:text-primary transition-colors">search</span>
          <input 
            className="pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-primary/50 w-48 md:w-64 transition-all" 
            placeholder="Search portfolio, badges..." 
            type="text"
          />
        </div>
        
        <button 
          onClick={toggleDarkMode}
          className="p-2 text-slate-500 hover:text-primary dark:text-slate-400 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <span className="material-icons-outlined text-[20px]">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        
        <button className="relative p-2 text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">
          <span className="material-icons-outlined text-[20px]">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-background-dark"></span>
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
