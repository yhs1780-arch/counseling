import Link from "next/link";

const ITEMS = [
  { t: "자격 공개", d: "대표·팀 주요 자격을 페이지에 명시" },
  { t: "진행 안내", d: "접수부터 본 상담까지 단계를 투명히 안내" },
  { t: "비밀 보장", d: "내담자 정보·대화는 법령 범위 내 보호" },
  { t: "맞춤 배정", d: "주제에 맞는 상담사 연결" },
];

export function TrustSignals() {
  return (
    <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/30 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs text-[var(--gold)] sm:text-sm">WHY TRUST</p>
        <p className="mt-2 text-center font-serif text-lg text-[var(--text-primary)] sm:text-xl">
          상담 신청 전에 확인할 수 있는 신뢰 포인트
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div
              key={item.t}
              className="rounded-2xl border border-[var(--border-subtle)] bg-white/[0.02] px-4 py-4 text-left"
            >
              <p className="font-medium text-[var(--gold-light)]">{item.t}</p>
              <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">{item.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/apply"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--gold)] px-6 text-sm font-semibold text-[var(--bg-deep)] sm:w-auto"
          >
            무료로 시작하기 · 상담 신청
          </Link>
          <a
            href="#reviews"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[var(--border-subtle)] px-6 text-sm text-[var(--text-primary)] sm:w-auto"
          >
            후기 먼저 보기
          </a>
        </div>
      </div>
    </section>
  );
}
