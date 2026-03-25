const FAQ_ITEMS = [
  {
    q: "상담은 비대면도 가능한가요?",
    a: "가능한 형태(화상·전화 등)는 신청 후 개별 안내드립니다.",
  },
  {
    q: "타로만 받을 수 있나요?",
    a: "심리 상담과 병행하거나, 타로 중심 세션으로도 진행 가능합니다. 신청 시 희망을 적어 주세요.",
  },
  {
    q: "비용은 어떻게 되나요?",
    a: "메인 페이지 「상품·요금」에서 안내하는 표준가를 기준으로 하며, 부가세·일정에 따라 달라질 수 있습니다. 최종 금액은 신청서 검토 후 개별 안내드립니다.",
  },
  {
    q: "상담 내용이 외부에 알려지지 않나요?",
    a: "상담 관련 정보는 법령이 정한 경우를 제외하고 공개되지 않도록 관리합니다.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-[var(--border-subtle)] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-4xl">
          자주 묻는 <span className="gold-gradient-text">질문</span>
        </h2>
        <dl className="mt-12 space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} className="glass-panel rounded-2xl px-6 py-5">
              <dt className="font-medium text-[var(--text-primary)]">{item.q}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
