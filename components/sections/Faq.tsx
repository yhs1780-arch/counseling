import { SITE } from "@/lib/site";

const FAQ_ITEMS = [
  {
    q: "채팅만으로 상담이 가능한가요?",
    a: "네. 텍스트만으로 충분히 진행 가능하며, 필요 시 전화나 문서로 전환할 수 있습니다. 모바일에서 읽기 쉬운 길이로 나누어 답합니다.",
  },
  {
    q: "결제는 어떻게 하나요?",
    a: `기본 안내를 받으신 뒤 합의된 금액을 ${SITE.bank.name} 계좌로 이체해 주시면, 입금 확인 후 처리합니다.`,
  },
  {
    q: "타로·사주만 받을 수 있나요?",
    a: "가능합니다. 다만 윤리적으로 단정적 예언보다는 선택·정서 정리를 돕는 방향으로 안내합니다. 심리 상담과 묶인 패키지도 상담 가능합니다.",
  },
  {
    q: "LLM 엔진은 상담에서 어떤 역할인가요?",
    a: "상담사가 내담자의 서술을 정리해 시스템에 입력하면, 참고용 요약·각도 제안을 돌려받는 보조 도구입니다. 진단명 확정·치료적 개입·최종 면담 내용은 반드시 사람 상담사가 책임집니다.",
  },
  {
    q: "박상훈 대표만 상담하나요?",
    a: "대표는 다수 자격을 바탕으로 팀을 이끌며 심화·복합 사례를 맡는 경우가 많습니다. 주제에 따라 다른 전문 상담사가 배정되거나 공동으로 지원할 수 있습니다.",
  },
  {
    q: "비밀이 보장되나요?",
    a: "상담 내용은 법령이 정한 경우를 제외하고 외부에 공개되지 않도록 관리합니다. 채팅 로그는 상담·분쟁 대응에 필요한 범위에서만 보관합니다.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-[var(--border-subtle)] py-14 sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
          자주 묻는 <span className="gold-gradient-text">질문</span>
        </h2>
        <dl className="mt-10 space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} className="glass-panel rounded-2xl px-5 py-4 sm:px-6 sm:py-5">
              <dt className="font-medium text-[var(--text-primary)]">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
