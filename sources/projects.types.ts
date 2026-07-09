export interface IProject {
  _id: string;
  title: string;
  slug: string;
  description: string;
  about: string;

  image: string;

  category: string;

  technologies: string[];

  features: string[];

  challenges: string[];

  githubUrl: string;
  liveLink: string;
  complexity: string;

  featured: boolean;
  status: string;

  startDate: string;
  completionDate: string;

  createdAt: string;
  updatedAt: string;
}