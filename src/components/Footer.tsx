"use client";

export function Footer() {
  const steps = Array.from({ length: 12 });
  const socials = [
    {
      href: "https://github.com/yourname",
      label: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4">
          <path
            fill="currentColor"
            d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.5.12-3.14 0 0 1.01-.32 3.3 1.24a11.44 11.44 0 0 1 6 0c2.28-1.56 3.29-1.24 3.29-1.24.66 1.64.24 2.84.12 3.14.78.85 1.23 1.93 1.23 3.25 0 4.63-2.81 5.66-5.5 5.96.43.37.82 1.1.82 2.23v3.3c0 .32.21.7.82.57A12 12 0 0 0 12 .5Z"
          />
        </svg>
      ),
    },
    {
      href: "https://twitter.com/yourname",
      label: "X/Twitter",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4">
          <path
            fill="currentColor"
            d="M4 4h4.5l3.14 4.62L15.86 4H20l-6.08 7.35L20 20h-4.5l-3.35-4.94L8.8 20H4l6-7.3z"
          />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/yourname/",
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4">
          <path
            fill="currentColor"
            d="M5.3 21H2.2V8.6h3.1zm-1.5-14A1.8 1.8 0 0 1 2 5.1 1.8 1.8 0 0 1 3.8 3a1.8 1.8 0 0 1 0 3.6zm16.2 14h-3.1v-6.5c0-1.55-.56-2.6-1.95-2.6-1.07 0-1.7.72-1.98 1.42-.1.24-.12.58-.12.92V21H9.8s.04-10.96 0-12.4h3.15v1.76c.41-.62 1.15-1.52 2.8-1.52 2.04 0 3.6 1.33 3.6 4.2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="space-y-2 text-sm text-slate-600">
          <p className="text-slate-500">© {new Date().getFullYear()} Your Name</p>
          <p className="text-slate-400">Built with Next.js, TypeScript, Tailwind CSS</p>
          <div className="flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                className="group inline-flex min-w-[120px] items-center justify-start gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition group-hover:bg-sky-700">
                  {social.icon}
                </span>
                <span className="tracking-tight">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-900/90 px-4 py-3 text-slate-50 shadow-inner">
            <span className="text-[11px] uppercase tracking-[0.3em] text-sky-200">Steps</span>
            <div className="flex items-center gap-1">
              {steps.map((_, index) => (
                <span
                  key={index}
                  className="seq-dot h-2.5 w-2.5 rounded-full bg-slate-600 md:bg-slate-500"
                  style={{ animationDelay: `${index * 90}ms` }}
                />
              ))}
            </div>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200 md:inline">Loop</span>
          </div>
          <p className="text-slate-400">低速回線やモバイルではアニメーションを控えめにしています。</p>
        </div>
      </div>
      <style jsx>{`
        @keyframes seqPulse {
          0% { transform: translateY(0); opacity: 0.45; }
          40% { transform: translateY(-6px); opacity: 1; }
          60% { transform: translateY(-2px); opacity: 0.8; }
          100% { transform: translateY(0); opacity: 0.45; }
        }
        .seq-dot {
          animation: seqPulse 1.4s ease-in-out infinite;
        }
        @media (max-width: 767px) {
          .seq-dot { animation: none; opacity: 0.55; }
        }
        @media (prefers-reduced-motion: reduce) {
          .seq-dot { animation: none; }
        }
      `}</style>
    </footer>
  );
}
