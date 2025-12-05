import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Portfolio",
      description: "指定されたプロジェクトは見つかりませんでした。",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Project</p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{project.title}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">{project.summary}</p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm sm:p-10">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Overview</h2>
        <p className="leading-relaxed text-slate-600">{project.description}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 text-sm text-slate-700">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Details</h3>
          {project.role && (
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Role:</span> {project.role}
            </p>
          )}
          {project.timeline && (
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Timeline:</span> {project.timeline}
            </p>
          )}
          <div className="flex flex-wrap gap-3 pt-1 text-sm font-semibold text-slate-700">
            {project.links?.github && (
              <a
                href={project.links.github}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span aria-hidden>↗</span>
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
