import { Project } from "@/types/project";
import { SoundButton } from "./SoundButton";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-200/80 bg-white/90 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{project.title}</h3>
          <p className="text-sm leading-relaxed text-slate-600">{project.summary}</p>
        </div>
        <SoundButton
          href={`/projects/${project.slug}`}
          variant="outline"
          className="border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 hover:border-sky-200 hover:bg-sky-100"
        >
          View
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </SoundButton>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 transition group-hover:bg-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
