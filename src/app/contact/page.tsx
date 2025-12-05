export const metadata = {
  title: "Contact | Portfolio",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>
        <h1 className="text-3xl font-semibold">お問い合わせ</h1>
        <p className="text-zinc-700">
          ご質問やカジュアル面談のご希望があれば、お気軽にご連絡ください。
        </p>
      </header>

      <div className="space-y-3 rounded-xl border border-zinc-200 bg-white p-6 text-sm text-zinc-700">
        <p>
          📧 Email: <a className="underline underline-offset-4" href="mailto:you@example.com">you@example.com</a>
        </p>
        <p>
          🐙 GitHub: <a className="underline underline-offset-4" href="https://github.com/yourname" target="_blank" rel="noreferrer">@yourname</a>
        </p>
        <p>
          💼 LinkedIn: <a className="underline underline-offset-4" href="https://www.linkedin.com/in/yourname/" target="_blank" rel="noreferrer">/yourname</a>
        </p>
      </div>
    </div>
  );
}
