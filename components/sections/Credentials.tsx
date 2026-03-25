import { SITE } from "@/lib/site";

/** 첨부 자격증과 대응하는 표기 (등록번호 등 민감 정보는 공개하지 않습니다). */
const CREDENTIALS = [
  { title: "심리분석사 1급", org: "한국직업능력검정협회 등 교육·시험 이수" },
  { title: "심리상담사 1급", org: "한국교육인증평가원 등 공인 교육 과정" },
  { title: "타로상담전문가 1급", org: "한국직업평가진흥협회 등 전문 과정" },
  { title: "부부심리상담사 1급", org: "한국교육인증평가원 등 부부·관계 심리" },
  { title: "연애심리상담사 1·2급", org: "한국심리교육협회 연애·관계 전문 교육" },
  { title: "여성심리상담사 1·2급", org: "한국심리교육협회 여성 심리 전문 교육" },
  { title: "성심리상담사 1·2급", org: "한국심리교육협회 성 심리 전문 교육" },
];

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
          자격·<span className="gold-gradient-text">전문성</span>
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
          {SITE.counselor} 상담사가 보유한 주요 자격과 교육 방향입니다. 실제
          증빙 서류는 상담 계약 단계에서 안내드릴 수 있습니다.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CREDENTIALS.map((c) => (
            <div
              key={c.title}
              className="glass-panel rounded-2xl border-l-2 border-l-[var(--gold)] p-5"
            >
              <h3 className="font-medium text-[var(--text-primary)]">{c.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                {c.org}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-[var(--text-muted)]">
          ※ 자격증별 발급기관·과정명은 교육 과정에 따라 상이할 수 있으며, 위
          목록은 제공해 주신 자료를 바탕으로 정리했습니다.
        </p>
      </div>
    </section>
  );
}
