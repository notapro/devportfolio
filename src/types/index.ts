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
  image?: string | null;
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0-100
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}