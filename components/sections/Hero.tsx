import Link from "next/link";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="mesh-bg relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,18,32,0.3)_0%,var(--bg-deep)_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-4 inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--gold-light)] sm:text-sm">
          국가·협회 공인 자격 기반 1:1 프리미엄 상담
        </p>
        <h1 className="font-serif text-3xl font-semibold leading-[1.25] tracking-tight sm:text-5xl sm:leading-[1.2] lg:text-6xl">
          관계의 무게를
          <br />
          <span className="gold-gradient-text">혼자 짊어지지 마세요.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          {SITE.counselor} 상담사는{" "}
          <strong className="font-medium text-[var(--text-primary)]">
            심리·연애·부부·타로
          </strong>
          등 복합 분야 자격을 보유하고 있습니다. 아트라상처럼 ‘신청 중심’이
          아니라, <strong className="text-[var(--gold-light)]">먼저 읽고 판단</strong>
          할 수 있도록 정보를 투명하게 드립니다.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/apply"
            className="btn-gold-shine inline-flex items-center justify-center rounded-full px-8 py-4 text-center text-base font-bold text-[var(--bg-deep)] shadow-lg shadow-[var(--gold-dim)]"
          >
            상담 신청하기
          </Link>
          <a
            href="#credentials"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border-subtle)] px-8 py-4 text-base font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--gold)]/50 hover:text-[var(--gold-light)]"
          >
            자격·전문성 보기
          </a>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { k: "1:1", v: "전 구간 개인 맞춤" },
            { k: "비밀 보장", v: "상담 내용 철저 비공개" },
            { k: "공인 자격", v: "다수 1급·전문가 과정 이수" },
          ].map((item) => (
            <div key={item.k} className="glass-panel rounded-2xl px-5 py-4">
              <p className="font-serif text-lg text-[var(--gold-light)]">{item.k}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
