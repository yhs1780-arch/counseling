/** 추후 실제 후기로 교체하세요. */
const PLACEHOLDER_REVIEWS = [
  {
    quote:
      "말하기 어려웠던 부분을 차분히 짚어 주셔서, 제 감정이 처음으로 정리됐어요.",
    tag: "연애 상담 · 30대",
  },
  {
    quote:
      "부부 대화 패턴을 알게 된 뒤로 싸우는 방식이 달라졌습니다. 감사합니다.",
    tag: "부부 상담 · 40대",
  },
  {
    quote:
      "타로가 부담 없이 심리 상담처럼 이어져서 오히려 편했습니다.",
    tag: "타로 상담 · 20대",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
          상담 <span className="gold-gradient-text">후기</span>
        </h2>
        <p className="mt-4 text-[var(--text-muted)]">
          오픈 초기에는 샘플 문구가 표시됩니다. 실제 내담자 동의 하에 후기를
          채워 주세요.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLACEHOLDER_REVIEWS.map((r) => (
            <blockquote
              key={r.tag}
              className="glass-panel rounded-2xl p-6 text-sm leading-relaxed"
            >
              <p className="text-[var(--text-primary)]">&ldquo;{r.quote}&rdquo;</p>
              <footer className="mt-4 text-xs text-[var(--gold)]">{r.tag}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
