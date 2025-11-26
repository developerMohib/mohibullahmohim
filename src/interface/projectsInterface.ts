// interface/projectsInterface.ts
export interface IProject {
  _id?: string;
  projectName: string;
  slug?: string; // Made optional
  title?: string;
  
  // Media & Links
  image: string[];
  liveLink: string;
  sourceCode: string;
  demoUrl?: string;
  githubUrl?: string;
  
  // Project Descriptions
  about: string;
  description?: string;
  perspective: string;
  challengingPart: string;
  goal: string;
  highlight: string;
  
  // Technical Details
  techStack: string[];
  technologies?: string[];
  features: string[];
  tags: string[];
  
  // Project Metadata (Made optional)
  category?: 'web' | 'mobile' | 'ai' | 'desktop' | 'game' | 'other';
  status?: 'completed' | 'in-progress' | 'planned' | 'on-hold';
  featured?: boolean;
  
  // Timeline & Team (Made optional)
  completionDate: string;
  startDate?: string;
  year?: string;
  duration?: string;
  teamSize?: string;
  complexity?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  
  // SEO & Analytics
  views?: number;
  likes?: number;
  
  // Timestamps
  createdAt?: string;
  updatedAt?: string;
}