import { REVIEWS } from "@/lib/reviews";

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
          상담 <span className="gold-gradient-text">후기</span>
        </h2>
        <p className="mt-3 text-sm text-[var(--text-muted)] sm:text-base">
          상담 방식·주제별로 다양한 톤을 담은 <strong className="text-[var(--text-primary)]">사례형 소개 문구</strong>
          입니다. 실제 서비스 오픈 시에는 내담자 동의를 받은 후기로 교체하는 것이
          바람직합니다.
        </p>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
          {REVIEWS.map((r) => (
            <blockquote
              key={r.tag + r.quote.slice(0, 24)}
              className="mb-4 break-inside-avoid rounded-2xl border border-[var(--border-subtle)] bg-white/[0.03] p-4 text-sm leading-relaxed sm:p-5"
            >
              <p className="text-[var(--text-primary)]">&ldquo;{r.quote}&rdquo;</p>
              <footer className="mt-3 space-y-0.5 text-[11px] text-[var(--gold)] sm:text-xs">
                <div>{r.tag}</div>
                {r.detail ? (
                  <div className="text-[var(--text-muted)]">키워드 · {r.detail}</div>
                ) : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
