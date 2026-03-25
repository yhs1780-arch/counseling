"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-deep)]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-3 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="min-w-0 truncate font-serif text-base font-semibold tracking-tight text-[var(--text-primary)] sm:text-xl"
        >
          {SITE.name}
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--gold-light)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/apply"
            className="rounded-full bg-[var(--gold)] px-3 py-2 text-xs font-semibold text-[var(--bg-deep)] sm:px-5 sm:text-sm"
          >
            신청
          </Link>
          <button
            type="button"
            onClick={() => setMenu((v) => !v)}
            className="rounded-lg border border-[var(--border-subtle)] px-3 py-2 text-xs text-[var(--text-primary)] lg:hidden"
            aria-expanded={menu}
            aria-label="메뉴"
          >
            {menu ? "닫기" : "메뉴"}
          </button>
        </div>
      </div>
      {menu ? (
        <div className="border-b border-[var(--border-subtle)] bg-[var(--bg-deep)] px-4 py-3 lg:hidden">
          <nav className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenu(false)}
                className="rounded-lg px-3 py-3 text-sm text-[var(--text-muted)] active:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
