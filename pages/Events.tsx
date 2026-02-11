
import React, { useState } from 'react';
import { View } from '../types';

interface EventsProps {
  onViewChange?: (view: View) => void;
}

const Events: React.FC<EventsProps> = ({ onViewChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Workshops', 'Volunteer', 'Campus Life', 'Competitions'];
  
  const opportunities = [
    {
      id: 1,
      title: 'Global Leadership Summit 2024',
      date: 'Dec 05',
      time: '10:00 AM - 4:00 PM',
      location: 'Grand Hall, Student Union',
      category: 'Workshops',
      reward: '+100 XP',
      badge: 'Leadership',
      image: 'https://picsum.photos/seed/summit/800/600',
      registered: false
    },
    {
      id: 2,
      title: 'Community Garden Cleanup',
      date: 'Nov 18',
      time: '9:00 AM - 12:00 PM',
      location: 'West Campus Gardens',
      category: 'Volunteer',
      reward: '3 Service Hrs',
      badge: 'Civic Engagement',
      image: 'https://picsum.photos/id/435/800/600',
      registered: true
    },
    {
      id: 3,
      title: 'AI in Ethics Symposium',
      date: 'Nov 22',
      time: '2:00 PM - 5:00 PM',
      location: 'Virtual Session (Zoom)',
      category: 'Workshops',
      reward: '+50 XP',
      badge: 'Professional Dev',
      image: 'https://picsum.photos/seed/symposium/800/600',
      registered: false
    },
    {
      id: 4,
      title: 'Code Sprint: Hack for Good',
      date: 'Nov 25',
      time: '48 Hour Event',
      location: 'Engineering Lab B',
      category: 'Competitions',
      reward: 'Gold Badge Link',
      badge: 'Innovation',
      image: 'https://picsum.photos/seed/hacksprint/800/600',
      registered: false
    }
  ];

  const filtered = activeFilter === 'All' 
    ? opportunities 
    : opportunities.filter(o => o.category === activeFilter);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Opportunity Catalog</h1>
          <p className="text-slate-500 dark:text-slate-400">Discover events that fuel your personal and professional growth.</p>
        </div>
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          {['Grid', 'List'].map(mode => (
            <button key={mode} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${mode === 'Grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary dark:text-white' : 'text-slate-500'}`}>
              {mode}
            </button>
          ))}
        </div>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === cat 
                ? 'bg-primary text-white shadow-md shadow-primary/20' 
                : 'bg-white dark:bg-[#151b2b] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div key={item.id} className="bg-white dark:bg-[#151b2b] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full text-left">
            <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 dark:bg-black/70 backdrop-blur px-2 py-1 rounded-lg text-center shadow-lg min-w-[3rem]">
                  <p className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 leading-none mb-1">{item.date.split(' ')[0]}</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white leading-none">{item.date.split(' ')[1]}</p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {item.reward}
                </span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.category}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">{item.title}</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 gap-2">
                  <span className="material-icons text-base">schedule</span>
                  {item.time}
                </div>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 gap-2">
                  <span className="material-icons text-base">place</span>
                  {item.location}
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="material-icons text-amber-500 text-base">military_tech</span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{item.badge}</span>
                </div>
                <button 
                  onClick={() => !item.registered && alert(`Registered for ${item.title}`)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  item.registered 
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-default' 
                    : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                }`}>
                  {item.registered ? 'Registered' : 'Register Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
