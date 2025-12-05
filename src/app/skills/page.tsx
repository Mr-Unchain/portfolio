export const metadata = {
  title: "Skills | Portfolio",
};

const skillCategories = [
  {
    title: "Frontend Craft",
    value: 86,
    focus: "UI のリズムとアクセシビリティを両立させる実装が得意",
    skills: ["TypeScript", "React", "Next.js (App Router)", "Tailwind CSS", "Jest"],
    branches: ["Design Tokens", "ARIA 実装", "Animation Tuning"],
  },
  {
    title: "Backend & Data",
    value: 72,
    focus: "Prisma と SQL を軸に、API のスキーマと監視をセットで設計",
    skills: ["Node.js", "Prisma", "Supabase", "PlanetScale", "REST/GraphQL"],
    branches: ["型安全な API", "Observability", "Migration Plan"],
  },
  {
    title: "Ops & Collaboration",
    value: 78,
    focus: "CI/CD とドキュメントでチームの HP を維持する仕組みづくり",
    skills: ["Vercel", "GitHub Actions", "Design Systems", "Storybook", "Playwright"],
    branches: ["Release Train", "Visual Regression", "Lint & Format"],
  },
];

function ArcGauge({ value, label }: { value: number; label: string }) {
  const sanitizedId = label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="relative flex items-center gap-3">
      <svg viewBox="0 0 80 60" className="h-16 w-20">
        <defs>
          <linearGradient id={`arc-${sanitizedId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <path
          d="M8 46 A32 32 0 0 1 72 46"
          fill="none"
          stroke="rgba(226,232,240,0.7)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M8 46 A32 32 0 0 1 72 46"
          fill="none"
          stroke={`url(#arc-${sanitizedId})`}
          strokeWidth="10"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={`${value} 100`}
        />
        <circle cx="40" cy="46" r="6" className="fill-white stroke-slate-200" strokeWidth="2" />
      </svg>
      <div className="leading-tight">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Gauge</div>
        <div className="text-lg font-semibold text-slate-900">{value}%</div>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Skills</p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">スキルセット</h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          日常的に使用している技術とツールの一覧です。
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <section
            key={category.title}
            className="flex flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white/95 p-7 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Category</p>
                <h2 className="text-xl font-semibold text-slate-900">{category.title}</h2>
                <p className="text-sm text-slate-600">{category.focus}</p>
              </div>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-base"
                role="img"
                aria-label="music motif icon"
              >
                🎶
              </span>
            </div>

            <ArcGauge value={category.value} label={category.title} />

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Skill Tree</p>
              <div className="flex flex-wrap gap-2">
                {category.branches.map((branch) => (
                  <span
                    key={branch}
                    className="relative rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
                  >
                    {branch}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              {category.skills.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white px-3 py-2"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                  <span className="flex-1">{item}</span>
                  <span role="img" aria-label="hp orb" className="text-xs">
                    💖
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
