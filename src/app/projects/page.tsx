import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Portfolio",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 rounded-3xl border border-slate-200/80 bg-white/80 p-10 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Selected Works</p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Projects</h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          個人で設計から実装・運用まで行ったプロジェクトの一覧です。
        </p>
      </header>
      <ProjectList projects={projects} />
    </div>
  );
}
