const STEPS = [
  { step: "01", title: "신청서 작성", desc: "기본 정보와 고민 키워드를 남겨 주세요." },
  { step: "02", title: "일정·방식 안내", desc: "비대면 또는 대면 등 가능한 형태를 안내드립니다." },
  { step: "03", title: "1:1 상담", desc: "목표에 맞춰 단계적으로 진행합니다." },
];

export function Process() {
  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
          상담 <span className="gold-gradient-text">진행 순서</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.step} className="relative glass-panel rounded-2xl p-6">
              <span className="font-serif text-3xl text-[var(--gold)]/40">
                {s.step}
              </span>
              <h3 className="mt-2 font-medium text-[var(--text-primary)]">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
