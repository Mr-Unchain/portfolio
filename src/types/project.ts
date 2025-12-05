export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  role?: string;
  timeline?: string;
  links?: {
    github?: string;
    live?: string;
  };
};
