
export enum View {
  DASHBOARD = 'dashboard',
  PORTFOLIO = 'portfolio',
  SUBMISSION = 'submission',
  ASSESSMENT = 'assessment',
  EVENTS = 'events',
  SETTINGS = 'settings'
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  imageUrl: string;
  status: 'PUBLIC' | 'DRAFT';
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'LOCKED';
  progress: number;
  date?: string;
  hours?: string;
  icon: string;
}
