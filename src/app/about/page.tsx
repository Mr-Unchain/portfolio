export const metadata = {
  title: "About | Portfolio",
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">About</p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">自己紹介</h1>
      </header>
      <div className="space-y-5 rounded-3xl border border-slate-200/80 bg-white/90 p-8 text-base leading-relaxed text-slate-600 shadow-sm sm:p-10">
        <p>
          Web フロントエンドを中心に、UI/UX を意識したプロダクトづくりを行っています。
          B2B SaaS の開発経験があり、要件定義から実装、モニタリングまで一貫して担当してきました。
        </p>
        <p>
          現在は個人開発を通して、Next.js をベースにしたフルスタック開発やデザインシステム構築、
          パフォーマンス最適化を継続的に学んでいます。
        </p>
      </div>
    </div>
  );
}
