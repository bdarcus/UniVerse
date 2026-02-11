
import React, { useState } from 'react';
import { View } from '../types';
import { usePortfolioItems } from '../store';

interface PeerReviewProps {
  onViewChange: (view: View) => void;
  onNavigateDetail: (view: View, id: string) => void;
}

const PeerReview: React.FC<PeerReviewProps> = ({ onViewChange, onNavigateDetail }) => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'my_reviews'>('gallery');
  const portfolioItems = usePortfolioItems();

  // Mock data for peer artifacts
  const peerArtifacts = [
    {
      id: "peer-1",
      student: "Jordan Rivers",
      title: "Impact of AI on Journalism",
      category: "Ethics",
      imageUrl: "https://picsum.photos/seed/journalism/800/600",
      reviewsCount: 3,
      skills: ["Critical Analysis", "Ethics"]
    },
    {
      id: "peer-2",
      student: "Casey Bloom",
      title: "Modular Housing Prototype",
      category: "Architecture",
      imageUrl: "https://picsum.photos/seed/housing/800/600",
      reviewsCount: 5,
      skills: ["Design Thinking", "Sustainability"]
    },
    {
      id: "peer-3",
      student: "Morgan Sun",
      title: "Economic Equity in Fintech",
      category: "Economics",
      imageUrl: "https://picsum.photos/seed/fintech/800/600",
      reviewsCount: 2,
      skills: ["Quantitative Reasoning", "Social Justice"]
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto px-6 py-8 space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 text-left">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Peer Review Gallery</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Social pedagogy in action. Learn by providing constructive feedback to your peers and seeing diverse perspectives.
          </p>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="material-icons text-primary animate-bounce">stars</span>
          <div>
            <p className="text-[10px] font-black uppercase text-primary tracking-widest">Next Achievement</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">Write 2 more reviews for 'Critic' Badge</p>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-slate-200 dark:border-slate-800">
        <button 
          onClick={() => setActiveTab('gallery')}
          className={`pb-4 text-sm font-bold relative transition-all ${activeTab === 'gallery' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
        >
          Explore Artifacts
          {activeTab === 'gallery' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('my_reviews')}
          className={`pb-4 text-sm font-bold relative transition-all ${activeTab === 'my_reviews' ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
        >
          My Feedback Received
          {activeTab === 'my_reviews' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"></div>}
        </button>
      </div>

      {activeTab === 'gallery' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {peerArtifacts.map(artifact => (
            <div key={artifact.id} className="bg-white dark:bg-[#151b2b] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group cursor-pointer text-left">
              <div className="h-48 relative overflow-hidden">
                <img src={artifact.imageUrl} alt={artifact.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg leading-tight">{artifact.title}</p>
                  <p className="text-white/70 text-xs mt-1">By {artifact.student}</p>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex flex-wrap gap-1">
                  {artifact.skills.map(skill => (
                    <span key={skill} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1 text-slate-400">
                    <span className="material-icons text-sm">chat_bubble_outline</span>
                    <span className="text-xs font-bold">{artifact.reviewsCount} Reviews</span>
                  </div>
                  <button 
                    onClick={() => onNavigateDetail(View.ASSESSMENT, artifact.id)} 
                    className="text-xs font-bold text-primary hover:text-blue-700 uppercase tracking-wider"
                  >
                    Provide Feedback &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6 text-left">
          {portfolioItems.filter(i => i.status === 'GRADED').map(item => (
            <div key={item.id} className="bg-white dark:bg-[#151b2b] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden shrink-0">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-slate-500">2 Peer Reviews Received</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="text-xs font-bold text-primary uppercase mb-2">Review from Sam K.</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 italic">"I really liked how you connected the Guatemala fieldwork to the Micro-subscription model. Have you thought about scaling this to..."</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="text-xs font-bold text-primary uppercase mb-2">Review from Taylor W.</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 italic">"The visual artifacts are very compelling. I'd love to see more data on the long-term sustainability of the cooperative."</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PeerReview;
