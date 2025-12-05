import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Portfolio",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Selected Works
        </p>
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-zinc-700">
          個人で設計から実装・運用まで行ったプロジェクトの一覧です。
        </p>
      </header>
      <ProjectList projects={projects} />
    </div>
  );
}
