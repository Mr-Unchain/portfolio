"use client";

import { useMemo, useState } from "react";
import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

type ProjectListProps = {
  projects: Project[];
};

const tabs: { key: Project["category"]; label: string; description: string }[] = [
  {
    key: "playlist",
    label: "Playlist",
    description: "完成したトラックや見せ場をまとめたセットリスト",
  },
  {
    key: "quest",
    label: "Quest Log",
    description: "進行中の挑戦や実験的な取り組みを記録",
  },
];

export function ProjectList({ projects }: ProjectListProps) {
  const [activeTab, setActiveTab] = useState<Project["category"]>("playlist");

  const counts = useMemo(
    () =>
      tabs.reduce(
        (acc, tab) => ({
          ...acc,
          [tab.key]: projects.filter((project) => project.category === tab.key).length,
        }),
        {} as Record<Project["category"], number>,
      ),
    [projects],
  );

  const filtered = useMemo(
    () => projects.filter((project) => project.category === activeTab),
    [activeTab, projects],
  );

  return (
    <section className="space-y-5">
      <div
        className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-2 shadow-sm"
        role="tablist"
        aria-label="プロジェクトカテゴリ"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`group inline-flex flex-1 min-w-[240px] flex-col gap-1 rounded-xl px-4 py-3 text-left transition neon-focus focus-visible:outline-none ${
                isActive
                  ? "bg-slate-900 text-white shadow-[0_15px_40px_rgba(15,23,42,0.15)]"
                  : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`projects-panel-${tab.key}`}
              id={`projects-tab-${tab.key}`}
              tabIndex={isActive ? 0 : -1}
            >
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                    isActive ? "bg-white/15 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {counts[tab.key] ?? 0}
                </span>
              </div>
              <p className={`text-xs leading-relaxed ${isActive ? "text-white/80" : "text-slate-500"}`}>
                {tab.description}
              </p>
            </button>
          );
        })}
      </div>

      <div
        className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8"
        role="tabpanel"
        id={`projects-panel-${activeTab}`}
        aria-labelledby={`projects-tab-${activeTab}`}
      >
        {filtered.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-dashed border-slate-200 bg-white/60 p-8 text-center text-slate-500">
            このタブにはまだプロジェクトがありません。
          </div>
        ) : (
          filtered.map((project) => <ProjectCard key={project.slug} project={project} />)
        )}
      </div>
    </section>
  );
}
