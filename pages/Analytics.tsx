
import React from 'react';
import { View } from '../types';

interface AnalyticsProps {
  onViewChange: (view: View) => void;
}

const Analytics: React.FC<AnalyticsProps> = () => {
  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto px-6 py-8 space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 text-left">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Institutional Analytics</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Department-wide competency tracking and student success indicators for the Computer Science Division.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-2">
            <span className="material-icons text-sm">filter_list</span>
            Fall 2023 Cohort
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/25 flex items-center gap-2">
            <span className="material-icons text-sm">file_download</span>
            Export Report
          </button>
        </div>
      </header>

      {/* Aggregate Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard label="Total Students" value="1,248" change="+4.2%" trend="up" />
        <MetricCard label="Avg. Competency Level" value="3.8/5" change="+0.3" trend="up" />
        <MetricCard label="Badge Completion" value="64%" change="-2.1%" trend="down" />
        <MetricCard label="Career Placement" value="92%" change="+1.5%" trend="up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Competency Mastery Radar (Visual Simulation) */}
        <div className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm text-left">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Competency Mastery Index</h3>
          <div className="space-y-6">
            <ProgressBar label="Critical Thinking" progress={85} color="bg-blue-500" />
            <ProgressBar label="Quantitative Reasoning" progress={72} color="bg-emerald-500" />
            <ProgressBar label="Communication" progress={91} color="bg-purple-500" />
            <ProgressBar label="Ethics & Social Responsibility" progress={64} color="bg-amber-500" />
          </div>
          <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
            <p className="text-xs text-slate-500 italic">
              "Student mastery in Ethics has increased by 15% following the introduction of the Senior Experience reflection requirement."
            </p>
          </div>
        </div>

        {/* Student Success Quartiles */}
        <div className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm text-left">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Engagement vs. Achievement</h3>
          <div className="h-64 flex items-end gap-4 justify-around px-4">
            <Bar height="h-[60%]" label="Q1" color="bg-slate-200" />
            <Bar height="h-[85%]" label="Q2" color="bg-slate-300" />
            <Bar height="h-[95%]" label="Q3" color="bg-primary" />
            <Bar height="h-[40%]" label="Q4" color="bg-slate-200" />
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Highest Engagement:</span>
              <span className="font-bold text-slate-900 dark:text-white uppercase text-xs">Innovation Badge Candidates</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">At-Risk Indicators:</span>
              <span className="font-bold text-rose-500 uppercase text-xs">Low Reflection Frequency (8%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ label, value, change, trend }: any) => (
  <div className="bg-white dark:bg-[#151b2b] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-left">
    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
    <div className="flex items-baseline gap-2">
      <h4 className="text-2xl font-black text-slate-900 dark:text-white">{value}</h4>
      <span className={`text-xs font-bold ${trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
        {change}
      </span>
    </div>
  </div>
);

const ProgressBar = ({ label, progress, color }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs font-bold">
      <span className="text-slate-700 dark:text-slate-300">{label}</span>
      <span className="text-slate-400">{progress}%</span>
    </div>
    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
      <div className={`h-2 rounded-full transition-all duration-1000 ${color}`} style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

const Bar = ({ height, label, color }: any) => (
  <div className="flex flex-col items-center gap-2 w-full">
    <div className={`w-full rounded-t-lg transition-all duration-1000 ${color} ${height}`}></div>
    <span className="text-[10px] font-bold text-slate-400">{label}</span>
  </div>
);

export default Analytics;
