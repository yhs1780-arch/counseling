import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-deep)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-[var(--text-primary)] sm:text-xl"
        >
          {SITE.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
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
        <Link
          href="/apply"
          className="rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-semibold text-[var(--bg-deep)] transition-transform hover:scale-[1.02] active:scale-[0.98] md:px-5"
        >
          상담 신청
        </Link>
      </div>
    </header>
  );
}
