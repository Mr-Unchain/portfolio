import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SoundProvider } from "@/hooks/useSound";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "シンプルで読みやすいエンジニア向けポートフォリオサイト。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
        <body
          className={`${headingFont.variable} ${bodyFont.variable} ${geistMono.variable} bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 antialiased`}
        >
        <SoundProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="mx-auto w-full max-w-6xl flex-1 px-6 sm:px-10 py-14 sm:py-16">
              {children}
            </main>
            <Footer />
          </div>
        </SoundProvider>
      </body>
    </html>
  );
}
