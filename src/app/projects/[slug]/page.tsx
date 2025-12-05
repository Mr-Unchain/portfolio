import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Project
        </p>
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="text-zinc-700">{project.summary}</p>
      </header>

      <section className="space-y-3 rounded-xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="leading-relaxed text-zinc-700">{project.description}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-xl border border-zinc-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 text-sm text-zinc-700">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2 rounded-xl border border-zinc-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Details</h3>
          {project.role && (
            <p className="text-sm text-zinc-700">
              <span className="font-medium text-zinc-900">Role:</span> {project.role}
            </p>
          )}
          {project.timeline && (
            <p className="text-sm text-zinc-700">
              <span className="font-medium text-zinc-900">Timeline:</span> {project.timeline}
            </p>
          )}
          <div className="flex gap-4 pt-1 text-sm font-medium text-zinc-600">
            {project.links?.github && (
              <a
                href={project.links.github}
                className="underline underline-offset-4 hover:text-zinc-900"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                className="underline underline-offset-4 hover:text-zinc-900"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
