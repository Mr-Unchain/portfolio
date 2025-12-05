import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-10 shadow-sm sm:p-12">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Portfolio
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Your Name</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              Web フロントエンドを中心に個人開発を継続するソフトウェアエンジニアです。
              シンプルで読みやすい UI と、安定したプロダクト運用を大切にしています。
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sky-700 transition hover:border-sky-300 hover:bg-sky-100"
            >
              Projects
              <span aria-hidden>→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-sky-200 hover:bg-white"
            >
              Contact
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

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
