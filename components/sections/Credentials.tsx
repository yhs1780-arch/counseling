import { SITE } from "@/lib/site";

const CREDENTIALS = [
  { title: "심리분석사 1급", org: "공인 교육·자격 과정 이수" },
  { title: "심리상담사 1급", org: "한국교육인증평가원 등 연계 과정" },
  { title: "타로상담전문가 1급", org: "직업·전문 교육기관 과정" },
  { title: "부부심리상담사 1급", org: "부부·관계 심리 전문" },
  { title: "연애심리상담사 1·2급", org: "연애·관계 영역" },
  { title: "여성심리상담사 1·2급", org: "여성·정서 영역" },
  { title: "성심리상담사 1·2급", org: "친밀·성 정서 영역" },
];

const TEAM_ROLES = [
  "연애·재회 전문",
  "부부·가족",
  "타로·상징 해석",
  "사주·시기 정리",
  "성·여성 심리",
  "직장·번아웃",
];

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
          전문가 · <span className="gold-gradient-text">자격</span>
        </h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--gold)]">
              Representative
            </p>
            <h3 className="mt-2 font-serif text-xl text-[var(--text-primary)] sm:text-2xl">
              {SITE.counselor} {SITE.counselorTitle}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              팀 내 <strong className="text-[var(--gold-light)]">가장 많은 공인 자격</strong>을
              보유하고 있으며, 내부 교육·케이스 리뷰를 주도합니다. 타로·심리·관계
              상담을 아우르는 <strong className="text-[var(--text-primary)]">복합 배경</strong>
              을 바탕으로 난이도 높은 사연도 구조화합니다.
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--gold)]">
              Counselor pool
            </p>
            <h3 className="mt-2 font-serif text-xl text-[var(--text-primary)] sm:text-2xl">
              전문 상담사 인력
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              아래 분야별로 상담사가 상주·대기 중이며, 일정과 주제에 맞춰{" "}
              <strong className="text-[var(--text-primary)]">배정 또는 협업</strong>합니다.
              모든 세션은 윤리 규정과 비밀 유지 원칙을 따릅니다.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {TEAM_ROLES.map((role) => (
                <li
                  key={role}
                  className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--text-primary)]"
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-12 font-serif text-lg text-[var(--gold-light)] sm:text-xl">
          대표 주요 자격 (요약)
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {CREDENTIALS.map((c) => (
            <div
              key={c.title}
              className="glass-panel rounded-2xl border-l-2 border-l-[var(--gold)] p-4 sm:p-5"
            >
              <h4 className="font-medium text-[var(--text-primary)]">{c.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">{c.org}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[11px] text-[var(--text-muted)] sm:text-xs">
          ※ 증빙·세부 과정명은 상담 계약 단계에서 별도 안내 가능합니다.
        </p>
      </div>
    </section>
  );
}
