
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
import ArtifactDetail from './pages/ArtifactDetail';
import BadgeDetail from './pages/BadgeDetail';
import PeerReview from './pages/PeerReview';
import Analytics from './pages/Analytics';
import DevTools from './components/DevTools';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.DASHBOARD);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigateToDetail = (view: View, id: string) => {
    setSelectedItemId(id);
    setActiveView(view);
  };

  const renderContent = () => {
    switch (activeView) {
      case View.DASHBOARD:
        return <Dashboard onViewChange={setActiveView} onNavigateDetail={navigateToDetail} />;
      case View.PORTFOLIO:
        return <Portfolio onViewChange={setActiveView} onNavigateDetail={navigateToDetail} />;
      case View.SUBMISSION:
        return <Submission id={selectedItemId} onViewChange={setActiveView} />;
      case View.ASSESSMENT:
        return <Assessment id={selectedItemId} onViewChange={setActiveView} />;
      case View.EVENTS:
        return <Events onViewChange={setActiveView} />;
      case View.SETTINGS:
        return <Settings />;
      case View.COACH:
        return <CareerCoach onViewChange={setActiveView} />;
      case View.ARTIFACT_DETAIL:
        return <ArtifactDetail id={selectedItemId} onViewChange={setActiveView} />;
      case View.BADGE_DETAIL:
        return <BadgeDetail id={selectedItemId} onViewChange={setActiveView} />;
      case View.PEER_REVIEW:
        return <PeerReview onViewChange={setActiveView} onNavigateDetail={navigateToDetail} />;
      case View.ANALYTICS:
        return <Analytics onViewChange={setActiveView} />;
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
          viewTitle={activeView === View.DASHBOARD ? 'Dashboard' : activeView.replace('_', ' ').charAt(0).toUpperCase() + activeView.replace('_', ' ').slice(1)} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          onViewChange={setActiveView}
        />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
      <DevTools />
    </div>
  );
};

export default App;
