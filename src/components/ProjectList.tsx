import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}
