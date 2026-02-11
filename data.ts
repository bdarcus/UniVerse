
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
    reflection: "This project challenged me to move beyond technical engineering specs and consider the economic ethics of energy access. By developing the micro-subscription model, I realized that technical solutions are only as good as the social structures that support them. This connects deeply to my earlier work in Philosophy on moral agency.",
    status: "ASSESSED",
    assessmentLevel: "Exemplary",
    credits: "4.0",
    faculty: "Dr. Elena Rodriguez",
    feedback: "Exceptional research Alex. Your focus on the micro-subscription model is particularly innovative.",
    imageUrl: "https://picsum.photos/seed/grid/800/600",
    skills: ["Sustainable Design", "Urban Planning", "Systems Thinking"],
    connections: ["art-3"] // Connecting to Ethics in AI
  },
  {
    id: "art-2",
    title: "Visualization Techniques",
    category: "Data Science",
    date: "Nov 02, 2023",
    description: "Exploration of D3.js libraries for presenting complex sociological datasets.",
    reflection: "I chose this artifact because it represents the moment I understood how to make 'invisible learning visible.' Data visualization isn't just about pretty charts; it's a rhetorical tool for advocacy. I had to struggle with accessibility (WCAG) which taught me about digital equity.",
    status: "ASSESSED",
    assessmentLevel: "Proficient",
    credits: "3.0",
    faculty: "Prof. Marcus Chen",
    feedback: "The data processing is solid, but the color contrast in the main visualization could be improved for accessibility.",
    imageUrl: "https://picsum.photos/id/201/800/600",
    skills: ["Data Visualization", "JavaScript", "D3.js"]
  },
  {
    id: "art-4",
    title: "Tesla Sustainability Internship",
    category: "Internship",
    date: "Aug 15, 2023",
    description: "A 12-week immersive experience working with the Energy Storage team on battery lifecycle analysis.",
    reflection: "This internship was my first time applying academic systems thinking to a global supply chain. I learned that sustainability isn't just a design choice; it's a series of difficult engineering trade-offs. This work directly informed my Senior Capstone project on renewable grids.",
    status: "PUBLIC",
    assessmentLevel: "Exemplary",
    faculty: "Sarah Jenkins (Tesla Mentor)",
    imageUrl: "https://picsum.photos/seed/tesla/800/600",
    skills: ["Supply Chain", "Sustainability", "Professionalism"],
    connections: ["art-1"]
  },
  {
    id: "art-5",
    title: "Urban Garden Initiative",
    category: "Leadership",
    date: "May 20, 2023",
    description: "Leading a team of 15 volunteers to convert a vacant lot into a community-managed vegetable garden.",
    reflection: "Leadership in a volunteer context is vastly different from a classroom setting. I had to navigate local politics, zoning laws, and community conflict. This experience taught me 'Civic Agency'—the ability to work with others to solve public problems.",
    status: "ASSESSED",
    assessmentLevel: "Proficient",
    faculty: "Dr. Marcus Chen",
    imageUrl: "https://picsum.photos/seed/garden/800/600",
    skills: ["Civic Agency", "Project Management", "Leadership"],
    connections: ["art-2"]
  },
  {
    id: "art-6",
    title: "Global Health Hackathon",
    category: "Innovation",
    date: "Mar 12, 2023",
    description: "Developed a low-bandwidth mobile app for tracking vaccination records in remote areas.",
    reflection: "Winning 'Best Social Impact' was great, but the real learning was in the rapid prototyping phase. I had to communicate complex technical ideas to non-technical health professionals under high pressure.",
    status: "PUBLIC",
    assessmentLevel: "Exemplary",
    imageUrl: "https://picsum.photos/seed/hackathon/800/600",
    skills: ["Mobile Dev", "Communication", "Social Impact"]
  },
  {
    id: "art-3",
    title: "Ethics in AI",
    category: "Philosophy",
    status: "DRAFT",
    date: "Dec 01, 2023",
    description: "A philosophical inquiry into the moral agency of artificial intelligence.",
    reflection: "Working on this paper helped me bridge the gap between my CS major and my interest in ethics. It made me realize that as a future developer, I am also a moral agent whose code has consequences.",
    imageUrl: "https://picsum.photos/seed/ethics/800/600",
    skills: ["Critical Thinking", "Ethics"],
    connections: ["art-1"]
  }
];
