export const metadata = {
  title: "Skills | Portfolio",
};

const skillGroups = [
  {
    title: "Frontend",
    items: ["TypeScript", "React", "Next.js (App Router)", "Tailwind CSS", "Jest"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Prisma", "Supabase", "PlanetScale"],
  },
  {
    title: "Workflow",
    items: ["Vercel", "GitHub Actions", "Design Systems", "Storybook"],
  },
];

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

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="space-y-4 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{group.title}</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
