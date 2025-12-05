import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Portfolio
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Your Name
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-700">
          Web フロントエンドを中心に個人開発を継続するソフトウェアエンジニアです。
          シンプルで読みやすい UI と、安定したプロダクト運用を大切にしています。
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <a
            href="/projects"
            className="text-sm font-medium text-zinc-600 underline underline-offset-4 hover:text-zinc-900"
          >
            See all
          </a>
        </div>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}
