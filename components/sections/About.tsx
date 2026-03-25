import { SITE } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 text-left lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
              <span className="gold-gradient-text">{SITE.name}</span>의 약속
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              상담 방식·내부 운영 절차는 <strong className="text-[var(--text-primary)]">대외비</strong>
              로 관리합니다. 공개되는 것은{" "}
              <strong className="text-[var(--gold-light)]">자격·윤리·프로세스의 큰 틀</strong>
              과 내담자를 위한 안내 뿐입니다. 그 안에서 저희는{" "}
              <strong className="text-[var(--text-primary)]">정성 어린 경청</strong>과{" "}
              <strong className="text-[var(--text-primary)]">전문가의 판단</strong>으로
              문제를 구조화하고, 관계와 정서가 나아질 수 있도록 옆을 지킵니다.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--text-muted)] sm:text-base">
              <li className="flex gap-2">
                <span className="text-[var(--gold)]">◆</span>
                {SITE.counselor} {SITE.counselorTitle}: 팀에서{" "}
                <strong className="text-[var(--text-primary)]">가장 많은 공인 과정</strong>을
                이수했으며 심화 사례를 총괄합니다.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--gold)]">◆</span>
                연애·부부·타로·사주 등{" "}
                <strong className="text-[var(--text-primary)]">전문 상담사</strong>가
                상주하며 주제에 맞게 배정합니다.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--gold)]">◆</span>
                하단 채팅으로 남겨 주시면 담당자가 확인 후, 신청·연락 절차를
                안내합니다.
              </li>
            </ul>
          </div>
          <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-9">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--gold)]/10 blur-3xl" />
            <p className="font-serif text-base text-[var(--gold-light)] sm:text-lg">
              {SITE.counselor} {SITE.counselorTitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              다수의 자격과 현장 경험을 바탕으로 팀 슈퍼비전을 진행합니다. 첫
              접점에서는 고민을 정리하고 방향을 제시한 뒤, 일정·방식·비용을
              투명하게 안내합니다.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["다자격", "팀 슈퍼비전", "맞춤 배정", "비밀 보장"].map((word) => (
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
