const STEPS = [
  {
    step: "01",
    title: "고민·문의 접수",
    desc: "채팅, 상담 신청서, 전화 중 편한 채널로 연락 주시면 담당이 확인합니다.",
  },
  {
    step: "02",
    title: "기본 안내",
    desc: "상황 요약과 가능한 상담 방식을 설명드립니다. 선택권은 항상 내담자에게 있습니다.",
  },
  {
    step: "03",
    title: "계좌이체 · 확정",
    desc: "상품·일정 합의 후 안내 계좌로 입금 확인 시 예약이 확정됩니다.",
  },
  {
    step: "04",
    title: "본 상담 진행",
    desc: "배정된 상담사가 100% 직접 세션을 진행합니다. 윤리와 비밀 보장을 최우선으로 합니다.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]/40 py-14 sm:scroll-mt-24 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
          상담 <span className="gold-gradient-text">진행 순서</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-[var(--text-muted)] sm:text-base">
          고민 파악 → 기본 안내 → 결제 확정 → 본 상담. 상세 일정은 개별 안내
          문자와 채널로 정리해 드립니다.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.step} className="glass-panel rounded-2xl p-5 sm:p-6">
              <span className="font-serif text-2xl text-[var(--gold)]/50 sm:text-3xl">{s.step}</span>
              <h3 className="mt-1 font-medium text-[var(--text-primary)]">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
