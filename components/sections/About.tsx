import { SITE } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
              <span className="gold-gradient-text">{SITE.name}</span>만의 상담
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              저희는 외부 브랜드나 타 플랫폼을 전제로 하지 않습니다. 오직{" "}
              <strong className="text-[var(--text-primary)]">
                내담자 한 분 한 분의 맥락
              </strong>
              에 맞춘 프로세스, 검증된 자격을 가진{" "}
              <strong className="text-[var(--text-primary)]">상담사 팀</strong>, 그리고
              상담 준비를 돕는{" "}
              <strong className="text-[var(--gold-light)]">사내 LLM 지원 워크플로</strong>
              를 결합했습니다.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--text-muted)] sm:text-base">
              <li className="flex gap-2">
                <span className="text-[var(--gold)]">◆</span>
                {SITE.counselor} {SITE.counselorTitle}: 팀 내{" "}
                <strong className="text-[var(--text-primary)]">가장 많은 자격·교육 스펙</strong>
                을 보유하며 복합 케이스·심화 세션을 총괄합니다.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--gold)]">◆</span>
                연애·부부·성·여성·타로·사주 등{" "}
                <strong className="text-[var(--text-primary)]">전문 상담사 인력</strong>이
                상주하며, 주제에 맞게 배정·협업합니다.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--gold)]">◆</span>
                우측 하단 채팅으로 유입 후, 상담사·대표가 백오피스에서
                내용을 확인하고 세션으로 연결합니다.
              </li>
            </ul>
          </div>
          <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-9">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--gold)]/10 blur-3xl" />
            <p className="font-serif text-base text-[var(--gold-light)] sm:text-lg">
              {SITE.counselor} {SITE.counselorTitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              다학제 자격을 바탕으로 팀을 리드하며, 내부 교육·슈퍼비전으로 다른
              상담사들의 사례 논의도 함께합니다. 첫 접점에서는{" "}
              <strong className="text-[var(--text-primary)]">고민 요약과 방향성</strong>
              을 먼저 정리한 뒤, 금액·일정·방식(채팅/전화 등)을 투명하게 안내합니다.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["다자격", "팀 슈퍼비전", "LLM 준비", "비밀 보장"].map((word) => (
                <div
                  key={word}
                  className="rounded-xl border border-[var(--border-subtle)] bg-white/[0.02] py-2.5 text-center text-[11px] font-medium text-[var(--text-primary)] sm:text-xs"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
