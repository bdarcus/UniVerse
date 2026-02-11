import React from 'react';
import { useAppContext } from '../store';
import { UserRole, ViewContext } from '../types';

const DevTools: React.FC = () => {
  const { role, context, setRole, setContext } = useAppContext();

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-2">
      <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-6 animate-in slide-in-from-left-4 duration-500">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Persona</p>
          <div className="flex bg-slate-800 rounded-lg p-1">
            <button 
              onClick={() => setRole(UserRole.STUDENT)}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${role === UserRole.STUDENT ? 'bg-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Student
            </button>
            <button 
              onClick={() => setRole(UserRole.FACULTY)}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${role === UserRole.FACULTY ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Faculty
            </button>
          </div>
        </div>

        <div className="w-px h-8 bg-slate-700"></div>

        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Context</p>
          <div className="flex bg-slate-800 rounded-lg p-1">
            <button 
              onClick={() => setContext(ViewContext.PRIVATE)}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${context === ViewContext.PRIVATE ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Private
            </button>
            <button 
              onClick={() => setContext(ViewContext.PUBLIC)}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${context === ViewContext.PUBLIC ? 'bg-amber-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Public
            </button>
          </div>
        </div>

        <div className="w-px h-8 bg-slate-700"></div>

        <div className="flex items-center gap-2">
           <div className={`w-2 h-2 rounded-full animate-pulse ${role === UserRole.FACULTY ? 'bg-purple-500' : 'bg-primary'}`}></div>
           <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">Dev Mode Active</span>
        </div>
      </div>
    </div>
  );
};

export default DevTools;
