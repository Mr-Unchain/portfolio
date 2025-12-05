import Link from "next/link";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
          <p className="text-sm text-zinc-600">{project.summary}</p>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-medium text-zinc-500 underline underline-offset-4 hover:text-zinc-800"
        >
          View
        </Link>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-600">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
