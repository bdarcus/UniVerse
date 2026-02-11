
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Account Settings</h1>
        <p className="text-slate-500 dark:text-slate-400">Manage your profile, privacy, and system preferences.</p>
      </header>

      {/* Profile Section */}
      <section className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-6">
          <div className="relative group">
            <img 
              src="https://picsum.photos/seed/student/120/120" 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover border-4 border-slate-100 dark:border-slate-800 shadow-md"
            />
            <button className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform">
              <span className="material-icons text-base leading-none">edit</span>
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Alex Morgan</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-2">Computer Science & Data Analytics '25</p>
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Profile Verified
            </div>
          </div>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Display Name</label>
            <input type="text" defaultValue="Alex Morgan" className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Academic Year</label>
            <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm">
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
            </select>
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Academic Bio</label>
            <textarea rows={3} className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm" defaultValue="Passionate about ethical AI and renewable energy systems. Capstone researcher in urban microgrids."></textarea>
          </div>
        </div>
      </section>

      {/* Privacy & Visibility */}
      <section className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <span className="material-icons text-primary">visibility</span>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Privacy & Visibility</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Public Portfolio</p>
              <p className="text-sm text-slate-500">Allow employers and peers to view your public artifacts.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Passport Leaderboard</p>
              <p className="text-sm text-slate-500">Show your XP rank on the campus-wide leaderboard.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="bg-white dark:bg-[#151b2b] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <span className="material-icons text-primary">notifications_active</span>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Notification Preferences</h2>
        </div>
        <div className="p-6 space-y-4">
          {['Assessment Feedback', 'New Badge Alerts', 'Upcoming Deadlines', 'Passport Opportunities'].map(item => (
            <div key={item} className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" defaultChecked />
                  <span className="text-xs text-slate-500 uppercase font-bold">Email</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" defaultChecked />
                  <span className="text-xs text-slate-500 uppercase font-bold">Push</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-end gap-4 pb-12">
        <button className="px-6 py-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-bold">Discard Changes</button>
        <button className="px-8 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-lg shadow-primary/25 transition-all">Save All Changes</button>
      </div>
    </div>
  );
};

export default Settings;
