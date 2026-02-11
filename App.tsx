
import React, { useState } from 'react';
import { View } from './types';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Submission from './pages/Submission';
import Assessment from './pages/Assessment';
import Events from './pages/Events';
import Settings from './pages/Settings';
import CareerCoach from './pages/CareerCoach';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.DASHBOARD);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case View.DASHBOARD:
        return <Dashboard onViewChange={setActiveView} />;
      case View.PORTFOLIO:
        return <Portfolio onViewChange={setActiveView} />;
      case View.SUBMISSION:
        return <Submission onViewChange={setActiveView} />;
      case View.ASSESSMENT:
        return <Assessment onViewChange={setActiveView} />;
      case View.EVENTS:
        return <Events onViewChange={setActiveView} />;
      case View.SETTINGS:
        return <Settings />;
      case View.COACH:
        return <CareerCoach onViewChange={setActiveView} />;
      default:
        return (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Under Construction</h2>
            <p className="text-slate-500 mt-2">The {activeView} feature is being polished.</p>
            <button 
              onClick={() => setActiveView(View.DASHBOARD)}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        );
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`flex h-screen overflow-hidden ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
        <TopHeader 
          viewTitle={activeView === View.DASHBOARD ? 'Dashboard' : activeView.charAt(0).toUpperCase() + activeView.slice(1)} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          onViewChange={setActiveView}
        />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
