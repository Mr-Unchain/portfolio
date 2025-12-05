"use client";

import { SoundButton } from "./SoundButton";
import { useSound } from "@/hooks/useSound";
import Link from "next/link";
import { Navbar } from "./Navbar";

export function Header() {
  const { muted, toggleMute } = useSound();

  return (
    <header className="border-b border-slate-200/80 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 transition hover:text-sky-700">
          Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Navbar />
          </div>
          <div className="sm:hidden">
            <SoundButton href="/contact" variant="nav" aria-label="Contact shortcut" className="px-3 py-2">
              Contact
            </SoundButton>
          </div>
          <SoundButton
            onClick={toggleMute}
            variant="ghost"
            aria-label={muted ? "サウンドをオン" : "サウンドをミュート"}
            className="px-2 py-2"
          >
            <span className="sr-only">Sound toggle</span>
            {muted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-slate-700"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M4.5 15V9A1.5 1.5 0 0 1 6 7.5h2.2l3.3-2.9a.9.9 0 0 1 1.5.68v13.44a.9.9 0 0 1-1.5.67L8.2 16.5H6A1.5 1.5 0 0 1 4.5 15"
                />
                <path
                  fill="currentColor"
                  d="m16.96 12 2.02-2.02a.75.75 0 0 0-1.06-1.06l-2.02 2.02-2.02-2.02a.75.75 0 0 0-1.06 1.06L14.84 12l-2.02 2.02a.75.75 0 0 0 1.06 1.06l2.02-2.02 2.02 2.02a.75.75 0 1 0 1.06-1.06z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-slate-700"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M4.5 15V9A1.5 1.5 0 0 1 6 7.5h2.2l3.3-2.9a.9.9 0 0 1 1.5.68v13.44a.9.9 0 0 1-1.5.67L8.2 16.5H6A1.5 1.5 0 0 1 4.5 15"
                />
                <path
                  fill="currentColor"
                  d="M15.8 7.2a.75.75 0 0 0-1.23.85 4.64 4.64 0 0 1-.52 5.2.75.75 0 1 0 1.17.94 6.14 6.14 0 0 0 .58-6.99z"
                />
                <path
                  fill="currentColor"
                  d="M18.1 4.77a.75.75 0 0 0-1.28.8 7.72 7.72 0 0 1-.87 8.1.75.75 0 1 0 1.17.94 9.22 9.22 0 0 0 .98-9.84z"
                />
              </svg>
            )}
          </SoundButton>
        </div>
      </div>
    </header>
  );
}
