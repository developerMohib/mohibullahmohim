export const PROJECT_ROLES = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Sole Developer",
  "DevOps",
] as const;

export const PROJECT_STATUSES = ["Completed", "In Progress", "On Hold"] as const;

export const PROJECT_CATEGORIES = [
  "E-Commerce",
    "AI",
    "Backend API",
    "Frontend UI",
    "LMS",
    "Web App",
] as const;

export type ProjectRole = (typeof PROJECT_ROLES)[number];
export type ProjectStatus = (typeof PROJECT_STATUSES)[number];
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface IProject {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  coverImages?: string | null;
  technologies: string[];
  liveLink?: string | null;
  githubFrontendUrl?: string | null;
  githubBackendUrl?: string | null;
  role?: ProjectRole | null;
  description?: string | null;
  highlights: string[];
  challenge?: string | null;
  category?: ProjectCategory | null;
  status: ProjectStatus;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}