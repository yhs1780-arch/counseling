import { SITE } from "@/lib/site";

const bodySans =
  "text-sm leading-[1.8] tracking-[-0.01em] text-[var(--text-muted)] sm:text-base sm:leading-[1.85]";
const bodyPretty = `${bodySans} text-pretty break-keep [word-break:keep-all]`;

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 text-left lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="min-w-0 lg:pt-1">
            <div className="max-w-xl">
              <h2 className="text-balance font-serif text-2xl font-semibold sm:text-4xl">
                <span className="gold-gradient-text">{SITE.name}</span>의 약속
              </h2>
              <div className={`mt-6 space-y-4 ${bodyPretty}`}>
                <p>
                  상담 방식과 내부 운영 절차는{" "}
                  <strong className="font-semibold text-[var(--text-primary)]">대외비</strong>로
                  관리합니다.
                </p>
                <p>
                  공개하는 것은{" "}
                  <strong className="font-semibold text-[var(--gold-light)]">
                    자격·윤리·프로세스의 큰 틀
                  </strong>
                  과 내담자를 위한 안내뿐입니다.
                </p>
                <p>
                  그 안에서 저희는{" "}
                  <strong className="font-semibold text-[var(--text-primary)]">정성 어린 경청</strong>
                  과{" "}
                  <strong className="font-semibold text-[var(--text-primary)]">전문가의 판단</strong>으로
                  고민을 구조화하고, 관계와 정서가 나아질 수 있도록 함께합니다.
                </p>
              </div>
              <ul className="mt-9 list-none space-y-5">
                <li className="grid grid-cols-[1.125rem_1fr] items-start gap-x-3 sm:gap-x-3.5">
                  <span
                    className="select-none pt-[0.2em] text-center text-sm text-[var(--gold)] sm:pt-[0.25em]"
                    aria-hidden
                  >
                    ◆
                  </span>
                  <p className={bodyPretty}>
                    <strong className="font-semibold text-[var(--text-primary)]">
                      {SITE.counselor} {SITE.counselorTitle}
                    </strong>
                    는 팀에서 가장 많은 공인 과정을 이수했으며, 심화 사례를 총괄합니다.
                  </p>
                </li>
                <li className="grid grid-cols-[1.125rem_1fr] items-start gap-x-3 sm:gap-x-3.5">
                  <span
                    className="select-none pt-[0.2em] text-center text-sm text-[var(--gold)] sm:pt-[0.25em]"
                    aria-hidden
                  >
                    ◆
                  </span>
                  <div className={`space-y-2 ${bodyPretty}`}>
                    <p>
                      연애·부부·타로·사주 등 주제별{" "}
                      <strong className="font-semibold text-[var(--text-primary)]">전문 상담사</strong>가
                      상주합니다.
                    </p>
                    <p>내담자 상황에 맞게 배정합니다.</p>
                  </div>
                </li>
                <li className="grid grid-cols-[1.125rem_1fr] items-start gap-x-3 sm:gap-x-3.5">
                  <span
                    className="select-none pt-[0.2em] text-center text-sm text-[var(--gold)] sm:pt-[0.25em]"
                    aria-hidden
                  >
                    ◆
                  </span>
                  <p className={bodyPretty}>
                    하단 채팅으로 남겨 주시면 담당자가 확인한 뒤, 신청·연락 절차를 안내합니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="glass-panel relative min-h-0 overflow-hidden rounded-3xl p-6 sm:p-9 lg:sticky lg:top-24">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--gold)]/10 blur-3xl" />
            <p className="text-balance font-serif text-base text-[var(--gold-light)] sm:text-lg">
              {SITE.counselor} {SITE.counselorTitle}
            </p>
            <div className={`mt-5 space-y-4 ${bodyPretty}`}>
              <p>다수의 자격과 현장 경험을 바탕으로 팀 슈퍼비전을 진행합니다.</p>
              <p>
                첫 접점에서는 고민을 정리하고 방향을 제시한 뒤, 일정·방식·비용을 투명하게 안내합니다.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
              {["다자격", "팀 슈퍼비전", "맞춤 배정", "비밀 보장"].map((word) => (
                <div
                  key={word}
                  className="rounded-xl border border-[var(--border-subtle)] bg-white/[0.02] py-2.5 text-center text-[11px] font-medium leading-tight text-[var(--text-primary)] sm:text-xs"
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
