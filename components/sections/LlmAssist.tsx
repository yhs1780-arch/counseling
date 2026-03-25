export function LlmAssist() {
  return (
    <section
      id="llm-workflow"
      className="scroll-mt-20 border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)]/35 py-14 sm:scroll-mt-24 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium tracking-widest text-[var(--gold)]">WORKFLOW</p>
        <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-4xl">
          상담사를 돕는 <span className="gold-gradient-text">LLM 지원</span> 흐름
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          내담자의 고민 서술이 길고 복잡할 때, 상담사가 핵심을 정리해{" "}
          <strong className="text-[var(--text-primary)]">자체 구축한 LLM 엔진</strong>에
          전달합니다. 반환된 요약·각도·질문 초안을 바탕으로 상담사가{" "}
          <strong className="text-[var(--gold-light)]">검토·수정한 뒤 면담</strong>에
          반영합니다. 최종적으로 내담자에게 전달되는 메시지와 윤리적 책임은 항상{" "}
          <strong className="text-[var(--text-primary)]">사람 상담사</strong>에게 있습니다.
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "1", t: "내담자 서술", d: "채팅·문서·면담 속 내용을 비식별 규칙에 따라 정리." },
            { n: "2", t: "상담사 입력", d: "담당 상담사가 맥락·중점을 덧붙여 엔진에 전송." },
            { n: "3", t: "LLM 초안", d: "요약·가능한 해석 축·추가 질문 아이디어 등 참고 초안 수신." },
            { n: "4", t: "사람 검토", d: "상담사 검토 후 세션 진행. 백오피스에서 이력 관리." },
          ].map((step) => (
            <li key={step.n} className="glass-panel rounded-2xl p-4 sm:p-5">
              <span className="font-serif text-2xl text-[var(--gold)]/45">{step.n}</span>
              <p className="mt-1 font-medium text-[var(--text-primary)]">{step.t}</p>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">{step.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-center text-[11px] text-[var(--text-muted)] sm:text-xs">
          상담사 전용 화면은 <a className="text-[var(--gold-light)] underline" href="/office">/office</a>
          에서 구조를 확인할 수 있습니다. (접근 코드는 환경 변수로 설정)
        </p>
      </div>
    </section>
  );
}
