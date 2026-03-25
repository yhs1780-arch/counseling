const SERVICES = [
  {
    title: "채팅 상담",
    desc: "텍스트만으로도 충분히 진행 가능합니다. 출퇴근·야간·회사 틈새에 맞춰 답장 밀도를 조율합니다.",
    badge: "모바일 추천",
  },
  {
    title: "전화(음성) 상담",
    desc: "실시간 대화가 필요할 때. 60분 표준 또는 90분 프리미엄 심층을 선택할 수 있습니다.",
    badge: null,
  },
  {
    title: "문서 상담",
    desc: "길게 쓰기 편한 분들께. 회신 문서를 저장해 두고 천천히消化합니다.",
    badge: null,
  },
  {
    title: "타로 상담",
    desc: "상징을 통해 현재 에너지·선택지를 탐색합니다. 심리 상담과 병행 가능합니다.",
    badge: null,
  },
  {
    title: "사주 상담",
    desc: "명리 흐름을 참고해 시기·관계 역학을 정리합니다. 절대적 예언이 아닌 의사결정 보조입니다.",
    badge: null,
  },
  {
    title: "연애·부부·성·여성 심리",
    desc: "주제별 자격을 갖춘 상담사가 배정됩니다. 겹치는 고민·복합 사연도 통합적으로 다룹니다.",
    badge: "다인 배정",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50 py-14 sm:scroll-mt-24 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
          상담 <span className="gold-gradient-text">방식 · 분야</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-[var(--text-muted)] sm:text-base">
          채팅만 원하시면 채팅만, 음성이 편하면 전화로. 타로·사주는 단독 또는 심리
          상담과 조합할 수 있습니다.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="glass-panel rounded-2xl p-5 transition-colors hover:border-[var(--gold)]/25 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-lg text-[var(--text-primary)]">{s.title}</h3>
                {s.badge ? (
                  <span className="rounded-full bg-[var(--gold)]/15 px-2 py-0.5 text-[10px] font-semibold text-[var(--gold-light)]">
                    {s.badge}
                  </span>
                ) : null}
              </div>
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
