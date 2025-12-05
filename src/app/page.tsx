import { Hero } from "@/components/Hero";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="space-y-14">
      <Hero />

      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sm font-semibold text-sky-700">
              Pj
            </span>
            <div className="space-y-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Selected Works</p>
              <h2 className="text-2xl font-semibold text-slate-900">Projects</h2>
            </div>
          </div>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
          >
            See all
            <span aria-hidden>→</span>
          </a>
        </div>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}
