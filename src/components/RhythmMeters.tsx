"use client";

import { useEffect, useRef, useState } from "react";

function useScrollTrigger() {
  const [active, setActive] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReduceMotion = () => setReduceMotion(media.matches);
    updateReduceMotion();
    media.addEventListener("change", updateReduceMotion);

    const node = ref.current;

    if (!node) {
      return () => media.removeEventListener("change", updateReduceMotion);
    }

    if (media.matches) {
      setActive(true);
      return () => media.removeEventListener("change", updateReduceMotion);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
          }
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", updateReduceMotion);
    };
  }, []);

  return { ref, active, reduceMotion } as const;
}

export function RhythmMeters() {
  const { ref, active, reduceMotion } = useScrollTrigger();

  const beamWidth = active ? "w-[92%]" : "w-[8%]";
  const hpWidth = active ? "w-[76%]" : "w-[12%]";
  const transitions = reduceMotion ? "transition-none" : "transition-all duration-700 ease-out";

  return (
    <section
      ref={ref}
      className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-white shadow-lg"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-sky-200">
        <span>Rhythm Status</span>
        <span className="flex items-center gap-2 text-[11px] text-slate-200">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden /> Ready
        </span>
      </div>

      <div className="mt-5 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-200">
            <span>譜面ライン</span>
            <span className="font-semibold text-sky-200">{active ? "SYNC" : "IDLE"}</span>
          </div>
          <div className="relative h-3 overflow-hidden rounded-full bg-slate-800/70">
            <div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-blue-400 bg-[length:120%] bg-left ${beamWidth} ${transitions}`}
              style={{ backgroundPosition: active && !reduceMotion ? "right" : "left" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_8px_8px,rgba(255,255,255,0.15),transparent_60%)] opacity-50" aria-hidden />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-200">
            <span>HPバー</span>
            <span className="font-semibold text-emerald-200">{active ? "SAFE" : "WARMUP"}</span>
          </div>
          <div className="relative h-3 overflow-hidden rounded-full bg-slate-800/70">
            <div
              className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-cyan-300 ${hpWidth} ${transitions}`}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_55%)] opacity-30" aria-hidden />
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm text-slate-200/80">
        スクロールで譜面ラインと HP バーが同期します。モーション軽減設定を尊重して、静止状態にも対応しています。
      </p>
    </section>
  );
}
