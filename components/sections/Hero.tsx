import Link from "next/link";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="mesh-bg relative overflow-hidden pt-24 pb-14 sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,18,32,0.3)_0%,var(--bg-deep)_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-3 inline-flex max-w-[95vw] items-center rounded-full border border-[var(--border-subtle)] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium leading-snug tracking-wide text-[var(--gold-light)] sm:max-w-none sm:text-sm">
          검증된 자격 · 전문가 팀 · 채팅·전화·타로·사주
        </p>
        <h1 className="font-serif text-[1.65rem] font-semibold leading-[1.22] tracking-tight sm:text-5xl sm:leading-[1.15] lg:text-[3.25rem]">
          관계와 마음,
          <br />
          <span className="gold-gradient-text">전문가와 함께 다시 세웁니다.</span>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-lg">
          {SITE.counselor} {SITE.counselorTitle}와 분야별 상담사가 배정됩니다.{" "}
          <strong className="text-[var(--text-primary)]">100% 상담사</strong>가 직접
          세션을 진행하며, 모바일 채팅부터 음성·문서까지 맞춤으로 안내합니다.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/apply"
            className="btn-gold-shine inline-flex min-h-[3rem] items-center justify-center rounded-full px-7 py-3.5 text-center text-sm font-bold text-[var(--bg-deep)] shadow-lg shadow-[var(--gold-dim)] sm:px-8 sm:text-base"
          >
            상담 신청하기
          </Link>
          <a
            href="#chat-app"
            className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-[var(--border-subtle)] px-7 py-3.5 text-sm font-medium text-[var(--text-primary)] active:bg-white/5 sm:text-base"
          >
            채팅으로 문의
          </a>
          <a
            href="#credentials"
            className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-transparent px-2 text-sm text-[var(--text-muted)] underline-offset-4 hover:text-[var(--gold-light)] hover:underline sm:px-4"
          >
            전문가 보기
          </a>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {[
            { k: "모바일", v: "출퇴근·야간에도 읽기 쉬운 신청·채팅 UI" },
            { k: "다인 전문가", v: "대표 외 분야별 상담사 배정" },
            { k: "비밀·윤리", v: "내담자 정보 비공개·윤리 규정 준수" },
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
