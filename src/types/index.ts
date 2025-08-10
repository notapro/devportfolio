export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  businessImpact: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}