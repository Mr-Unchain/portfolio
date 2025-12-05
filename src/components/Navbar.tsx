"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "Home", sectionId: "home" },
  { href: "/projects", label: "Projects", sectionId: "projects" },
  { href: "/skills", label: "Skills", sectionId: "skills" },
  { href: "/about", label: "About", sectionId: "about" },
  { href: "/contact", label: "Contact", sectionId: "contact" },
];

type IndicatorStyle = { left: number; width: number };

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>(() => pathname.replace("/", "") || "home");
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({ left: 0, width: 0 });
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const navTrackRef = useRef<HTMLDivElement | null>(null);

  const sectionLookup = useMemo(() => new Set(navItems.map((item) => item.sectionId)), []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section-id]"));
    if (!sections.length) {
      setActiveSection(pathname.replace("/", "") || "home");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const topSection = visible[0]?.target.getAttribute("data-section-id");
        if (topSection && sectionLookup.has(topSection)) {
          setActiveSection(topSection);
        }
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: [0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [pathname, sectionLookup]);

  useLayoutEffect(() => {
    const activeItem = itemRefs.current[activeSection];
    const track = navTrackRef.current;
    if (!activeItem || !track) return;

    const trackRect = track.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    const left = itemRect.left - trackRect.left;
    setIndicatorStyle({ left, width: itemRect.width });
  }, [activeSection]);

  useEffect(() => {
    const handleResize = () => {
      const activeItem = itemRefs.current[activeSection];
      const track = navTrackRef.current;
      if (!activeItem || !track) return;

      const trackRect = track.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const left = itemRect.left - trackRect.left;
      setIndicatorStyle({ left, width: itemRect.width });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection]);

  return (
    <nav className="relative" aria-label="Primary">
      <div ref={navTrackRef} className="relative flex gap-2 rounded-full bg-slate-50/80 p-1 ring-1 ring-slate-200/80">
        {navItems.map((item) => (
          <div
            key={item.href}
            ref={(element) => {
              itemRefs.current[item.sectionId] = element;
            }}
            className="relative"
          >
            <Link
              href={item.href}
              className={`relative z-10 inline-flex min-w-[68px] items-center justify-center rounded-full px-3 py-1.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${
                activeSection === item.sectionId
                  ? "text-slate-900"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-700"
              }`}
              aria-current={activeSection === item.sectionId ? "page" : undefined}
            >
              <span className="flex items-center gap-1.5">
                <span aria-hidden className="text-base">
                  {activeSection === item.sectionId ? "🎵" : "➤"}
                </span>
                {item.label}
              </span>
            </Link>
          </div>
        ))}
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-sky-100 to-fuchsia-100 shadow-inner transition-all duration-300"
          style={{ width: indicatorStyle.width, transform: `translateX(${indicatorStyle.left}px)` }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-4 flex h-6 w-6 items-center justify-center text-lg text-sky-600 transition-transform duration-300"
          style={{ transform: `translateX(${indicatorStyle.left + indicatorStyle.width / 2 - 12}px)` }}
        >
          ♬
        </span>
      </div>
    </nav>
  );
}
