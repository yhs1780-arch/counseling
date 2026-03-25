import Link from "next/link";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="mesh-bg relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,18,32,0.3)_0%,var(--bg-deep)_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-3 inline-flex max-w-[95vw] items-center rounded-full border border-[var(--border-subtle)] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium leading-snug tracking-wide text-[var(--gold-light)] sm:max-w-none sm:text-sm">
          채팅 전용 · 전화 · 타로·사주 — 모바일 최적화 · 상담사 다인 체제
        </p>
        <h1 className="font-serif text-[1.65rem] font-semibold leading-[1.22] tracking-tight sm:text-5xl sm:leading-[1.15] lg:text-[3.25rem]">
          우리만의 방식으로,
          <br />
          <span className="gold-gradient-text">관계와 마음을 다시 세워 드립니다.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-lg">
          <strong className="text-[var(--text-primary)]">{SITE.counselor}</strong>{" "}
          {SITE.counselorTitle}는 <strong>다수의 공인 자격</strong>을 보유한 실무 중심
          전문가입니다. 그 외 <strong>분야별 전문 상담사</strong>가 대기하며,{" "}
          <strong className="text-[var(--gold-light)]">채팅만으로도 상담</strong>이
          가능하고 전화·문서·타로·사주까지 맞춤 배정합니다. 타사·외부 서비스와
          비교하지 않습니다 —{" "}
          <strong className="text-[var(--text-primary)]">마음결만의 프로세스</strong>
          로 안내합니다.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/apply"
            className="btn-gold-shine inline-flex min-h-[3rem] items-center justify-center rounded-full px-7 py-3.5 text-center text-sm font-bold text-[var(--bg-deep)] shadow-lg shadow-[var(--gold-dim)] sm:px-8 sm:text-base"
          >
            상담 신청 · 입금 안내
          </Link>
          <a
            href="#chat-app"
            className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-[var(--border-subtle)] px-7 py-3.5 text-sm font-medium text-[var(--text-primary)] active:bg-white/5 sm:text-base"
          >
            채팅으로 먼저 문의
          </a>
          <a
            href="#credentials"
            className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-transparent px-2 text-sm text-[var(--text-muted)] underline-offset-4 hover:text-[var(--gold-light)] hover:underline sm:px-4"
          >
            전문가 소개
          </a>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {[
            { k: "모바일", v: "출퇴근·야간 채팅 UI 최적화" },
            { k: "다인 전문가", v: "대표 외 분야별 상담사 배정" },
            { k: "계좌 결제", v: "고민 파악·기본 안내 후 입금·본 상담" },
          ].map((item) => (
            <div key={item.k} className="glass-panel rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4">
              <p className="font-serif text-base text-[var(--gold-light)] sm:text-lg">{item.k}</p>
              <p className="mt-0.5 text-xs leading-snug text-[var(--text-muted)] sm:text-sm">
                {item.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
