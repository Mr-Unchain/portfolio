export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Your Name</p>
        <p className="text-zinc-400">Built with Next.js, TypeScript, Tailwind CSS</p>
      </div>
    </footer>
  );
}
