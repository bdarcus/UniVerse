
import { Assignment, PortfolioItem } from './types';

export const assignments: Assignment[] = [
  {
    id: 'asg-1',
    title: 'Algorithm Analysis Paper',
    course: 'CS 301',
    instructor: 'Dr. Smith',
    dueDate: '2023-11-12',
    month: 'NOV',
    day: '12',
    category: 'Research',
    description: 'A deep dive into asymptotic notation and complex algorithm efficiency.',
    isHighPriority: true,
    rubric: [
      {
        id: 'crit-1',
        title: 'Asymptotic Analysis',
        weight: '40%',
        description: 'Correct use of Big O, Omega, and Theta notations.'
      },
      {
        id: 'crit-2',
        title: 'Clarity of Proof',
        weight: '60%',
        description: 'Logical flow and mathematical rigor in proof techniques.'
      }
    ]
  },
  {
    id: 'asg-2',
    title: 'Midterm Reflection',
    course: 'ETHICS 101',
    instructor: 'Prof. Lee',
    dueDate: '2023-11-15',
    month: 'NOV',
    day: '15',
    category: 'Reflection',
    description: 'Reflecting on the ethical implications of AI in modern society.',
    rubric: [
      {
        id: 'crit-1',
        title: 'Critical Thinking',
        weight: '50%',
        description: 'Analysis of ethical frameworks and their application.'
      },
      {
        id: 'crit-2',
        title: 'Personal Insight',
        weight: '50%',
        description: 'Connection between course material and personal experiences.'
      }
    ]
  },
  {
    id: 'asg-3',
    title: 'Global Leadership Reflection',
    course: 'Unit 4: Senior Experience',
    instructor: 'Dr. Aris',
    dueDate: '2023-10-24',
    month: 'OCT',
    day: '24',
    category: 'Leadership',
    description: 'Reflect on your leadership experiences during the senior capstone project.',
    rubric: [
      {
        id: 'crit-1',
        title: 'Critical Thinking',
        weight: '50%',
        description: 'Analysis of field data and innovative problem-solving (e.g. Micro-subscription models).'
      },
      {
        id: 'crit-2',
        title: 'Written Communication',
        weight: '50%',
        description: 'Structure, clarity, and use of academic citations (e.g. APA style).'
      }
    ]
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "art-1",
    title: "Capstone: Renewable Grid",
    category: "Engineering",
    date: "Oct 24, 2023",
    description: "A comprehensive study on integrating solar microgrids into urban infrastructure.",
    status: "GRADED",
    grade: "A",
    credits: "4.0",
    faculty: "Dr. Elena Rodriguez",
    feedback: "Exceptional research Alex. Your focus on the micro-subscription model is particularly innovative.",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    skills: ["Sustainable Design", "Urban Planning", "Systems Thinking"]
  },
  {
    id: "art-2",
    title: "Visualization Techniques",
    category: "Data Science",
    date: "Nov 02, 2023",
    description: "Exploration of D3.js libraries for presenting complex sociological datasets.",
    status: "GRADED",
    grade: "B+",
    credits: "3.0",
    faculty: "Prof. Marcus Chen",
    feedback: "The data processing is solid, but the color contrast in the main visualization could be improved for accessibility.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800",
    skills: ["Data Visualization", "JavaScript", "D3.js"]
  },
  {
    id: "art-3",
    title: "Ethics in AI",
    category: "Philosophy",
    status: "DRAFT",
    date: "Dec 01, 2023",
    description: "A philosophical inquiry into the moral agency of artificial intelligence.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4628c6720?auto=format&fit=crop&q=80&w=800",
    skills: ["Critical Thinking", "Ethics"]
  }
];
