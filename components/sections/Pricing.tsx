import Link from "next/link";
import {
  formatWon,
  plansByCategory,
  PLAN_CATEGORY_LABEL,
  PRICING_PLANS,
} from "@/lib/pricing";

export function Pricing() {
  const grouped = plansByCategory();

  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-y border-[var(--border-subtle)] py-14 sm:scroll-mt-24 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium tracking-widest text-[var(--gold)]">PLANS</p>
        <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-4xl">
          상품·<span className="gold-gradient-text">요금 안내</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          입문 리포트부터 음성·채팅 패키지, 타로·사주 세션까지 단계별로 선택할
          수 있습니다. 부가세·최종 금액은 신청서 검토 후 개별 안내입니다.
        </p>

        <div className="mt-10 space-y-12">
          {grouped.map(([cat, plans]) => (
            <div key={cat}>
              <h3 className="mb-4 font-serif text-lg text-[var(--gold-light)] sm:text-xl">
                {PLAN_CATEGORY_LABEL[cat]}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                {plans.map((plan) => (
                  <article
                    key={plan.id}
                    className={`glass-panel relative flex flex-col rounded-2xl p-5 sm:rounded-3xl sm:p-6 ${
                      plan.featured
                        ? "border-[var(--gold)]/35 ring-1 ring-[var(--gold)]/20"
                        : ""
                    }`}
                  >
                    {plan.featured ? (
                      <span className="absolute -top-2.5 right-4 rounded-full bg-[var(--gold)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--bg-deep)] sm:right-5 sm:text-xs">
                        대표
                      </span>
                    ) : null}
                    <div className="flex flex-wrap items-end justify-between gap-2">
                      <div className="min-w-0 pr-2">
                        <h4 className="font-serif text-lg text-[var(--text-primary)] sm:text-xl">
                          {plan.name}
                        </h4>
                        <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
                          {plan.subtitle}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="font-serif text-xl font-semibold text-[var(--gold-light)] sm:text-2xl">
                          {formatWon(plan.price)}
                          <span className="text-sm font-normal text-[var(--text-muted)]">원</span>
                        </p>
                        {plan.priceNote ? (
                          <p className="text-[10px] text-[var(--text-muted)] sm:text-xs">
                            {plan.priceNote}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <ul className="mt-4 flex-1 space-y-2 text-xs text-[var(--text-muted)] sm:text-sm">
                      {plan.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/apply?plan=${plan.id}`}
                      className={`mt-5 inline-flex min-h-[2.75rem] w-full items-center justify-center rounded-full py-3 text-xs font-semibold sm:text-sm ${
                        plan.featured
                          ? "btn-gold-shine text-[var(--bg-deep)]"
                          : "border border-[var(--border-subtle)] text-[var(--text-primary)] active:bg-white/5"
                      }`}
                    >
                      이 상품으로 신청
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[11px] text-[var(--text-muted)] sm:text-xs">
          패키지 할인 등은 별도 공지이며, 결제·진행 순서는 하단 「진행 안내」를
          참고해 주세요. ({PRICING_PLANS.length}개 상품)
        </p>
      </div>
    </section>
  );
}
