export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  playlistTag: string;
  category: "playlist" | "quest";
  theme?: "waveform" | "dots" | "pulse";
  role?: string;
  timeline?: string;
  links?: {
    github?: string;
    live?: string;
  };
};
