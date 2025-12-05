import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "dev-notes",
    title: "Dev Notes",
    summary: "Markdown ベースの学習メモを管理するシンプルなノートアプリ。",
    description:
      "エンジニアが日々の学びを素早く記録し、検索できるようにしたミニマルなノートアプリです。タグ付けと全文検索で振り返りを効率化しました。",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    playlistTag: "Lo-fi Study Set",
    category: "playlist",
    theme: "waveform",
    role: "個人開発 (企画・設計・実装・デプロイ)",
    timeline: "2024 Q1",
    links: {
      github: "https://github.com/yourname/dev-notes",
      live: "https://dev-notes.example.com",
    },
  },
  {
    slug: "fit-track",
    title: "Fit Track",
    summary: "日々のワークアウトを記録し、習慣化をサポートするトラッカー。",
    description:
      "モバイルファーストで設計したフィットネストラッカー。カレンダー、目標設定、通知機能を実装し、日々の運動を可視化しました。",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PlanetScale"],
    playlistTag: "Endurance Flow",
    category: "quest",
    theme: "dots",
    role: "個人開発 (企画・設計・実装)",
    timeline: "2023 Q4",
    links: {
      github: "https://github.com/yourname/fit-track",
      live: "https://fit-track.example.com",
    },
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    summary: "このポートフォリオサイトのソースコード。",
    description:
      "採用担当に向けてプロジェクト概要と技術スタックを整理したシンプルなサイトです。ダークモードとレスポンシブに対応しています。",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    playlistTag: "Midnight Demo Reels",
    category: "playlist",
    theme: "pulse",
    role: "個人開発",
    timeline: "2024 Q2",
    links: {
      github: "https://github.com/yourname/portfolio",
      live: "https://portfolio.example.com",
    },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
