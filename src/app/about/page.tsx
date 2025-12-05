export const metadata = {
  title: "About | Portfolio",
};

const timeline = [
  {
    label: "Arcade Roots",
    period: "2017 - 2019",
    description:
      "音ゲーや VJ をきっかけに、リズムとUIの気持ち良さに目覚める。リアルタイム性を意識したコンポーネント設計を学習。",
  },
  {
    label: "SaaS Shift",
    period: "2020 - 2022",
    description:
      "B2B SaaS で要件定義から監視までを担当。ドキュメント駆動で仕様を詰め、UI とデータの一貫性を守るリリースを継続。",
  },
  {
    label: "Full-stack Groove",
    period: "2023 - Now",
    description:
      "Next.js + Prisma でフルスタック開発を実践。デザインシステムとアクセシビリティの整合性を重視し、個人開発を継続中。",
  },
];

const linerNotes = [
  {
    title: "譜面を読む前に",
    text: "まず UI のリズムを設計し、バックエンドとの拍を合わせてから実装を始める派。",
  },
  {
    title: "HP 管理",
    text: "深夜コーディングよりも、朝の集中タイムを優先。睡眠とレビュー時間を確保してミスを減らす。",
  },
  {
    title: "好きな SE",
    text: "通知音は控えめに。アニメーションと音の役割を分け、情報過多にならない心地よさを探求。",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">About</p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">自己紹介</h1>
      </header>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <section className="space-y-6 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-slate-50 shadow-lg sm:p-10">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">Storyline</p>
              <h2 className="text-2xl font-semibold text-white">制作の歩み</h2>
              <p className="text-sm text-slate-200">
                UI を譜面のように捉え、リズムと情報量のバランスを探ってきた軌跡です。
              </p>
            </div>
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-400/20 text-xl"
              role="img"
              aria-label="music note accent"
            >
              🎵
            </span>
          </div>
          <div className="space-y-5">
            {timeline.map((item, index) => (
              <article
                key={item.label}
                className="relative overflow-hidden rounded-2xl border border-slate-800/70 bg-white/5 p-5 shadow-inner"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-400 via-fuchsia-400 to-cyan-300" aria-hidden />
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-sky-200">
                  <span>{item.label}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-slate-100">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-100">{item.description}</p>
                {index < timeline.length - 1 && (
                  <div className="mt-4 flex items-center gap-3 text-xs text-slate-200/80">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                    <span>次のフェーズへテンポアップ</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-slate-200/80 bg-white/90 p-8 text-slate-700 shadow-sm sm:p-10">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Liner Notes</p>
              <h2 className="text-2xl font-semibold text-slate-900">ちょっとした注釈</h2>
              <p className="text-sm text-slate-600">仕事と創作の間で感じた小さなメモをまとめました。</p>
            </div>
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-lg"
              role="img"
              aria-label="heart hit point icon"
            >
              ❤️
            </span>
          </div>
          <div className="space-y-4 divide-y divide-slate-200/70">
            {linerNotes.map((note) => (
              <article key={note.title} className="pt-4 first:pt-0">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sm font-semibold text-sky-700">
                    Ln
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{note.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{note.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <span role="img" aria-label="hp crystal" className="text-lg">
              💎
            </span>
            <span>
              体力管理も仕事のうち。心拍数と同じくらい、レビュー速度にも気を配っています。
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
