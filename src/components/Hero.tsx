"use client";

import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import { SoundButton } from "./SoundButton";
import { useEffect, useMemo, useRef, useState } from "react";

const synthWaveSvg = (
  <svg
    className="absolute inset-0 h-full w-full opacity-50"
    viewBox="0 0 800 600"
    preserveAspectRatio="none"
    aria-hidden
  >
    <defs>
      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(14,165,233,0.7)" />
        <stop offset="50%" stopColor="rgba(236,72,153,0.7)" />
        <stop offset="100%" stopColor="rgba(59,130,246,0.7)" />
      </linearGradient>
    </defs>
    <path
      d="M0,300 C150,200 300,400 450,300 C600,200 750,400 900,300"
      stroke="url(#waveGradient)"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M0,340 C150,240 300,440 450,340 C600,240 750,440 900,340"
      stroke="url(#waveGradient)"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

const Slide = ({ project }: { project: Project }) => {
  return (
    <div className="flex h-full min-h-[320px] flex-col justify-between rounded-2xl bg-slate-950/60 p-6 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.7)] backdrop-blur-md">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Featured</p>
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="text-slate-300">{project.summary}</p>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex flex-wrap gap-2 text-xs">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 px-3 py-1 font-semibold text-sky-100 ring-1 ring-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm font-semibold text-sky-100">
          {project.links?.live && (
            <a
              href={project.links.live}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500/80 to-fuchsia-500/80 px-4 py-2 shadow-lg shadow-sky-900/50 transition hover:from-sky-400 hover:to-fuchsia-400"
            >
              Live
              <span aria-hidden>↗</span>
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-slate-100 transition hover:border-sky-400 hover:text-white"
            >
              GitHub
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export function Hero() {
  const featuredProjects = useMemo(() => projects.slice(0, 5), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);

  useEffect(() => {
    const id = setInterval(nextSlide, 5200);
    return () => clearInterval(id);
  }, [featuredProjects.length]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-xl sm:p-10"
      data-section-id="home"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="relative isolate overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-lg transition-transform duration-500 hover:-translate-y-1">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" aria-hidden />
          <div className="absolute inset-0 opacity-60 mix-blend-screen" aria-hidden>
            {synthWaveSvg}
          </div>
          <div className="relative space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200 ring-1 ring-white/10">
              Portfolio 2024
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Crafting interfaces with rhythm & clarity.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-200">
                Web フロントエンドを中心に、音楽的なリズムを感じる UI を設計・開発しています。ネオンの余韻が残るダークテーマで、あなたのプロダクトを次のステージへ。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-white">
              <SoundButton href="/contact" className="shadow-lg shadow-fuchsia-900/50">
                Let&apos;s Jam
                <span aria-hidden>→</span>
              </SoundButton>
              <SoundButton
                href="/projects"
                variant="outline"
                className="border-white/20 text-slate-100 hover:border-sky-400 hover:text-white"
              >
                Let&apos;s Play
                <span aria-hidden>→</span>
              </SoundButton>
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-2xl backdrop-blur"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.12) 2px, transparent 0), linear-gradient(135deg, rgba(56,189,248,0.1), rgba(236,72,153,0.07))",
            backgroundSize: "22px 22px, 100% 100%",
            maskImage: "linear-gradient(180deg, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage: "linear-gradient(180deg, transparent, black 18%, black 82%, transparent)",
          }}
        >
          <div className="absolute -right-14 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" aria-hidden />
          <div className="absolute -left-10 bottom-10 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl" aria-hidden />
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {featuredProjects.map((project) => (
                <div key={project.slug} className="w-full flex-shrink-0 px-1">
                  <Slide project={project} />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 via-slate-900/60 to-transparent" aria-hidden />
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex gap-2">
              {featuredProjects.map((project, index) => (
                <button
                  key={project.slug}
                  aria-label={`Go to ${project.title}`}
                  className={`h-2 w-8 rounded-full transition ${
                    index === activeIndex ? "bg-gradient-to-r from-sky-400 to-fuchsia-400" : "bg-white/15"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white transition hover:border-sky-400 hover:text-sky-100"
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white transition hover:border-sky-400 hover:text-sky-100"
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
