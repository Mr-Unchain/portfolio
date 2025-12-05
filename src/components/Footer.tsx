export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© {new Date().getFullYear()} Your Name</p>
        <p className="text-slate-400">Built with Next.js, TypeScript, Tailwind CSS</p>
      </div>
    </footer>
  );
}
