export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise MEAN' | 'Full Stack MERN' | 'Frontend Architecture' | 'EdTech & Systems';
  company?: string;
  period: string;
  summary: string;
  fullDescription: string;
  architectureOverview: string;
  keyHighlights: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend & Modern Angular' | 'Backend & APIs' | 'Database' | 'State & Async' | 'UI & DevOps';
  level: number; // 1-100
  experienceYears: string;
  description: string;
  featured?: boolean;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  employmentType: string;
  description: string;
  keyAchievements: string[];
  techStack: string[];
  products: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  year: string;
  grade: string;
  highlights: string[];
}
