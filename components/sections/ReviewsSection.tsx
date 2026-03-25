"use client";

import { useCallback, useEffect, useState } from "react";
import { REVIEWS, type ReviewItem } from "@/lib/reviews";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-[var(--gold)]" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < n ? "opacity-100" : "opacity-25"}>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: ReviewItem }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-b from-white/[0.06] to-transparent p-5 shadow-lg shadow-black/20">
      <Stars n={Math.round(r.rating)} />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-primary)]">
        &ldquo;{r.quote}&rdquo;
      </p>
      <footer className="mt-4 border-t border-[var(--border-subtle)] pt-3 text-[11px] text-[var(--gold)] sm:text-xs">
        <div className="font-medium">{r.tag}</div>
        {r.detail ? <div className="mt-0.5 text-[var(--text-muted)]">{r.detail}</div> : null}
      </footer>
    </article>
  );
}

const PER_SLIDE = 3;
const SLIDE_MS = 6000;

export function ReviewsSection() {
  const [slide, setSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const totalSlides = Math.ceil(REVIEWS.length / PER_SLIDE);

  const next = useCallback(() => {
    setSlide((s) => (s + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (expanded) return;
    const id = setInterval(next, SLIDE_MS);
    return () => clearInterval(id);
  }, [expanded, next]);

  const visible = expanded ? REVIEWS : REVIEWS.slice(slide * PER_SLIDE, slide * PER_SLIDE + PER_SLIDE);

  return (
    <section id="reviews" className="scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
              상담 <span className="gold-gradient-text">후기</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--text-muted)] sm:text-base">
              평점과 함께 주제별 후기를 확인해 보세요. 도움이 되면 신청서로 이어가
              주시면 됩니다.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <span className="font-serif text-2xl text-[var(--gold-light)]">4.8</span>
            <span>· 신뢰 만족 표본 기준</span>
          </div>
        </div>

        {!expanded ? (
          <>
            <div className="mt-2 flex justify-center gap-1.5 sm:justify-end">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlide(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === slide ? "bg-[var(--gold)]" : "bg-white/20 hover:bg-white/35"
                  }`}
                  aria-label={`후기 슬라이드 ${i + 1}`}
                />
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {visible.map((r) => (
                <ReviewCard key={r.tag + r.quote.slice(0, 20)} r={r} />
              ))}
            </div>
          </>
        ) : (
          <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {REVIEWS.map((r, idx) => (
              <div key={`all-${idx}`} className="mb-4 break-inside-avoid">
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="inline-flex min-h-11 items-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-8 py-2.5 text-sm font-medium text-[var(--gold-light)]"
          >
            {expanded ? "접기 · 슬라이드로 보기" : `더보기 · 전체 ${REVIEWS.length}건`}
          </button>
        </div>
      </div>
    </section>
  );
}
