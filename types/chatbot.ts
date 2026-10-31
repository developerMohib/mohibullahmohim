export interface Project {
  id: number;
  name: string;
  stack: string[];
  description: string;
}

export interface PortfolioConfig {
  about: {
    name: string;
    title: string;
    location: string;
    education: string;
    experience: string;
  };
  tech_stack: {
    frontend: string[];
    backend: string[];
    database_and_orm: string[];
    auth_and_payments: string[];
    other_tools: string[];
  };
  specializations: string[];
  projects: Project[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    leetcode: string;
  };
  rules: string[];
}

export interface ApiErrorResponse {
  message?: string;
  detail?: string;
}
