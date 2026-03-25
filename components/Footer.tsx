import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-[var(--text-primary)]">
              {SITE.name}
            </p>
            <p className="mt-2 max-w-sm text-sm text-[var(--text-muted)]">
              자격과 윤리를 갖춘 1:1 심리상담. 상담 전 과정은 비밀이 보장됩니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-[var(--text-muted)]">
            <Link href="/apply" className="hover:text-[var(--gold-light)]">
              상담 신청
            </Link>
            <a href="/#pricing" className="hover:text-[var(--gold-light)]">
              상품·요금
            </a>
            <a href="#faq" className="hover:text-[var(--gold-light)]">
              FAQ
            </a>
            <span>대표: {SITE.counselor}</span>
          </div>
        </div>
        <p className="mt-10 border-t border-[var(--border-subtle)] pt-8 text-center text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
