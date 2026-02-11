
export enum View {
  DASHBOARD = 'dashboard',
  PORTFOLIO = 'portfolio',
  SUBMISSION = 'submission',
  ASSESSMENT = 'assessment',
  EVENTS = 'events',
  SETTINGS = 'settings',
  COACH = 'coach',
  ARTIFACT_DETAIL = 'artifact_detail',
  BADGE_DETAIL = 'badge_detail',
  PEER_REVIEW = 'peer_review'
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  imageUrl: string;
  status: 'PUBLIC' | 'DRAFT' | 'GRADED';
  grade?: string;
  feedback?: string;
  faculty?: string;
  credits?: string;
  skills?: string[];
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
  passportId: string;
  skills: string[];
}

export interface RubricCriterion {
  id: string;
  title: string;
  weight: string;
  description: string;
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  instructor: string;
  dueDate: string;
  month: string;
  day: string;
  category: string;
  description: string;
  isHighPriority?: boolean;
  rubric: RubricCriterion[];
}
