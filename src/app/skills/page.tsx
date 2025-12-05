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
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Skills
        </p>
        <h1 className="text-3xl font-semibold">スキルセット</h1>
        <p className="text-zinc-700">日常的に使用している技術とツールの一覧です。</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="space-y-3 rounded-xl border border-zinc-200 bg-white p-6"
          >
            <h2 className="text-lg font-semibold">{group.title}</h2>
            <ul className="space-y-2 text-sm text-zinc-700">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" aria-hidden />
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
