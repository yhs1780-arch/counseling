import { SITE } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
              왜 <span className="gold-gradient-text">{SITE.name}</span>
              인가요?
            </h2>
            <p className="mt-6 text-[var(--text-muted)] leading-relaxed">
              참고하는 서비스인{" "}
              <a
                href="https://atrasan.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gold-light)] underline-offset-4 hover:underline"
              >
                아트라상
              </a>
              은 재회·관계 상담에서 오랜 시간 신뢰를 쌓아 온 브랜드입니다.
              저희는 그와 같은 <strong className="text-[var(--text-primary)]">신청·후기·FAQ 중심 구조</strong>
              를 따르되, 시각적 품질과 정보 설계를 한 단계 더 정돈했습니다.
            </p>
            <ul className="mt-8 space-y-4 text-[var(--text-muted)]">
              <li className="flex gap-3">
                <span className="text-[var(--gold)]">◆</span>
                상담 전 자격과 접근 방식을 명확히 공개합니다.
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--gold)]">◆</span>
                급하게 결제를 유도하지 않고, 단계 안내에 집중합니다.
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--gold)]">◆</span>
                연애·부부·심리·타로 등 복합 이슈를 통합적으로 듣습니다.
              </li>
            </ul>
          </div>
          <div className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--gold)]/10 blur-3xl" />
            <p className="font-serif text-lg text-[var(--gold-light)]">
              상담사 {SITE.counselor}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              다양한 국가·교육기관·협회 과정을 이수한 전문 교육 배경을 바탕으로,
              내담자의 맥락에 맞는 상담 방식을 제안합니다. 첫 상담에서는 현재
              상황 정리와 목표 설정에 초점을 둡니다.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-center sm:grid-cols-4 sm:gap-2">
              {[
                "윤리",
                "비밀",
                "맞춤",
                "전문",
              ].map((word) => (
                <div
                  key={word}
                  className="rounded-xl border border-[var(--border-subtle)] bg-white/[0.02] py-3 text-xs font-medium text-[var(--text-primary)]"
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
