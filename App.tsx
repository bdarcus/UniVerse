
import React, { useState } from 'react';
import { View } from './types';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Submission from './pages/Submission';
import Assessment from './pages/Assessment';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.DASHBOARD);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case View.DASHBOARD:
        return <Dashboard onViewChange={setActiveView} />;
      case View.PORTFOLIO:
        return <Portfolio />;
      case View.SUBMISSION:
        return <Submission />;
      case View.ASSESSMENT:
        return <Assessment />;
      default:
        return (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <p className="text-slate-500">The {activeView} feature is under development.</p>
            <button 
              onClick={() => setActiveView(View.DASHBOARD)}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
            >
              Go to Dashboard
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
      <div className="flex-1 flex flex-col min-w-0">
        <TopHeader 
          viewTitle={activeView.charAt(0).toUpperCase() + activeView.slice(1)} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
