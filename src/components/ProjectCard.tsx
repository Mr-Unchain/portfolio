import type { CSSProperties, ReactNode } from "react";
import { Project } from "@/types/project";
import { SoundButton } from "./SoundButton";

type ThemeName = NonNullable<Project["theme"]>;

type ThemeTokens = {
  accent: string;
  border: string;
  surface: string;
  pattern: string;
  glow: string;
};

const themeTokens: Record<ThemeName, ThemeTokens> = {
  waveform: {
    accent: "#0ea5e9",
    border: "rgba(14,165,233,0.25)",
    surface: "linear-gradient(120deg, rgba(14,165,233,0.08), rgba(125,211,252,0.06))",
    pattern:
      "repeating-linear-gradient(90deg, rgba(14,165,233,0.14) 0 7px, transparent 7px 14px), radial-gradient(circle at 20% 20%, rgba(56,189,248,0.2), transparent 36%), radial-gradient(circle at 80% 15%, rgba(14,165,233,0.18), transparent 32%)",
    glow: "radial-gradient(120% 120% at 80% 10%, rgba(255,255,255,0.35), transparent 55%)",
  },
  dots: {
    accent: "#a855f7",
    border: "rgba(168,85,247,0.25)",
    surface: "linear-gradient(135deg, rgba(217,249,157,0.08), rgba(233,213,255,0.12))",
    pattern:
      "radial-gradient(circle at 15% 20%, rgba(168,85,247,0.18), transparent 30%), radial-gradient(circle at 80% 15%, rgba(236,72,153,0.2), transparent 30%), radial-gradient(3px 3px at 20px 20px, rgba(255,255,255,0.7), transparent 55%)",
    glow: "radial-gradient(120% 120% at 10% 20%, rgba(236,72,153,0.2), transparent 40%)",
  },
  pulse: {
    accent: "#22c55e",
    border: "rgba(16,185,129,0.25)",
    surface: "linear-gradient(120deg, rgba(34,197,94,0.08), rgba(16,185,129,0.08))",
    pattern:
      "radial-gradient(circle at 18% 25%, rgba(34,197,94,0.18), transparent 32%), repeating-linear-gradient(120deg, rgba(16,185,129,0.16) 0 8px, transparent 8px 16px)",
    glow: "radial-gradient(140% 120% at 70% 10%, rgba(255,255,255,0.35), transparent 55%)",
  },
};

type ProjectCardProps = {
  project: Project;
};

function InfoBadge({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex min-h-[86px] flex-col gap-1 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-sm font-medium text-slate-800 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">{label}</span>
      <div className="text-sm text-slate-800">{children}</div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const tokens = themeTokens[project.theme ?? "waveform"] ?? themeTokens.waveform;

  const themeStyles = {
    "--card-accent": tokens.accent,
    "--card-border": tokens.border,
    "--card-surface": tokens.surface,
    "--card-pattern": tokens.pattern,
    "--card-glow": tokens.glow,
  } as CSSProperties;

  const stackPreview = project.techStack.slice(0, 3).join(" · ");

  return (
    <article
      style={themeStyles}
      className="group relative isolate overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(15,23,42,0.12)]"
    >
      <div className="absolute inset-0 opacity-95" style={{ background: "var(--card-surface)" }} aria-hidden />
      <div className="absolute inset-0 opacity-85" style={{ backgroundImage: "var(--card-pattern)" }} aria-hidden />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--card-glow)", mixBlendMode: "soft-light" }} aria-hidden />
      <div
        className="card-shine pointer-events-none absolute inset-0 rounded-3xl"
        style={{ boxShadow: `0 0 0 1px var(--card-border), 0 22px 60px rgba(15,23,42,0.14)` }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col gap-6 p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 ring-1 ring-white/70 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--card-accent)" }} aria-hidden />
              <span>Playlist</span>
              <span className="rounded bg-slate-900/90 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                {project.playlistTag}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">{project.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{project.summary}</p>
          </div>
          <SoundButton
            href={`/projects/${project.slug}`}
            variant="outline"
            className="border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-800 transition hover:border-[var(--card-accent)] hover:bg-white hover:text-slate-900"
          >
            View
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </SoundButton>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <InfoBadge label="Role">
            {project.role ?? <span className="text-slate-500">Coming soon</span>}
          </InfoBadge>
          <InfoBadge label="Stack">
            <span className="text-slate-800">{stackPreview}</span>
          </InfoBadge>
          <InfoBadge label="Duration">
            {project.timeline ?? <span className="text-slate-500">—</span>}
          </InfoBadge>
          <InfoBadge label="Links">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
              {project.links?.live ? (
                <a
                  href={project.links.live}
                  className="rounded-full bg-[var(--card-accent)]/10 px-3 py-1 text-slate-900 transition hover:bg-[var(--card-accent)]/20"
                >
                  Live
                </a>
              ) : (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-500">Live soon</span>
              )}
              {project.links?.github ? (
                <a
                  href={project.links.github}
                  className="rounded-full border border-[var(--card-accent)]/30 px-3 py-1 text-slate-800 transition hover:border-[var(--card-accent)] hover:text-slate-900"
                >
                  Code
                </a>
              ) : (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-500">Private</span>
              )}
            </div>
          </InfoBadge>
        </div>
      </div>
    </article>
  );
}
