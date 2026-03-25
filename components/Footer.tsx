import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)] py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-[var(--text-primary)]">
              {SITE.name}
            </p>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
              {SITE.counselor} {SITE.counselorTitle}와 전문 상담사 팀. 채팅·전화·타로·사주
              등 맞춤 배정. 상담 내용은 비밀이 보장됩니다.
            </p>
            <p className="mt-3 text-xs text-[var(--text-muted)]">
              입금: {SITE.bank.name} {SITE.bank.number} ({SITE.bank.holder})
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-[var(--text-muted)] sm:text-sm">
            <Link href="/apply" className="hover:text-[var(--gold-light)]">
              상담 신청
            </Link>
            <a href="/#pricing" className="hover:text-[var(--gold-light)]">
              상품·요금
            </a>
            <a href="/#faq" className="hover:text-[var(--gold-light)]">
              FAQ
            </a>
            <Link href="/office/login" className="hover:text-[var(--gold-light)]">
              상담사 전용
            </Link>
          </div>
        </div>
        <p className="mt-8 border-t border-[var(--border-subtle)] pt-6 text-center text-[11px] text-[var(--text-muted)] sm:text-xs">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
