export const metadata = {
  title: "Contact | Portfolio",
};

export default function ContactPage() {
  return (
    <section className="space-y-10" data-section-id="contact">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Contact</p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">お問い合わせ</h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          ご質問やカジュアル面談のご希望があれば、お気軽にご連絡ください。
        </p>
      </header>

      <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-white/90 p-8 text-sm text-slate-700 shadow-sm sm:p-10">
        <p>
          📧 Email: <a className="font-semibold text-sky-700 underline underline-offset-4" href="mailto:you@example.com">you@example.com</a>
        </p>
        <p>
          🐙 GitHub: <a className="font-semibold text-sky-700 underline underline-offset-4" href="https://github.com/yourname" target="_blank" rel="noreferrer">@yourname</a>
        </p>
        <p>
          💼 LinkedIn: <a className="font-semibold text-sky-700 underline underline-offset-4" href="https://www.linkedin.com/in/yourname/" target="_blank" rel="noreferrer">/yourname</a>
        </p>
      </div>
    </section>
  );
}
