export const metadata = {
  title: "About | Portfolio",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          About
        </p>
        <h1 className="text-3xl font-semibold">自己紹介</h1>
      </header>
      <div className="space-y-4 text-zinc-700">
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
