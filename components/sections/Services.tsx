const SERVICES = [
  {
    title: "연애·재회 심리",
    desc: "이별 후 감정, 연락 타이밍, 관계 패턴을 함께 정리합니다.",
  },
  {
    title: "부부·커플 상담",
    desc: "대화 단절, 신뢰 회복, 갈등 구조를 안전하게 다룹니다.",
  },
  {
    title: "타로 기반 상담",
    desc: "상징과 이야기를 통해 현재 에너지와 선택지를 탐색합니다.",
  },
  {
    title: "여성·성 심리",
    desc: "주제에 민감함을 알기에, 판단 없이 경청합니다.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
          상담 <span className="gold-gradient-text">분야</span>
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
          각 분야는 자격·교육 배경에 근거합니다. 겹치는 고민도 환영입니다.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="glass-panel rounded-2xl p-6 transition-colors hover:border-[var(--gold)]/25"
            >
              <h3 className="font-serif text-lg text-[var(--text-primary)]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
