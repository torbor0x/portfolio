"use client";

import { DownloadCv, TalkLink } from "@/components/Actions";
import { navigation, profile } from "@/lib/content";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-md">
      {reduce ? null : (
        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-cyan"
          style={{ scaleX: progress }}
        />
      )}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-ink no-underline">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan/40 font-mono text-xs font-semibold text-cyan">
            {profile.monogram}
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const active = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm no-underline ${active ? "text-cyan" : "text-body hover:text-cyan"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <DownloadCv className="btn btn-secondary btn-sm" />
          <TalkLink className="btn btn-primary btn-sm" />
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/30 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-4 flex-col gap-1" aria-hidden>
            <span className={`block h-0.5 bg-ink transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-ink transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line px-5 py-4 lg:hidden">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-base text-ink no-underline hover:bg-white/5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <DownloadCv className="btn btn-secondary" />
            <TalkLink className="btn btn-primary" />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
