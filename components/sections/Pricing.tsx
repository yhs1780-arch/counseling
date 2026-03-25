import Link from "next/link";
import { formatWon, PRICING_PLANS } from "@/lib/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-y border-[var(--border-subtle)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium tracking-widest text-[var(--gold)]">
          PRODUCTS
        </p>
        <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-4xl">
          상품·<span className="gold-gradient-text">요금 안내</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          구성은{" "}
          <a
            href="https://atrasan.co.kr/consults/service"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold-light)] underline-offset-4 hover:underline"
          >
            아트라상 상담 서비스
          </a>
          과 동일한 티어(분석 리포트 · 음성/문서 · 애프터)를 참고했습니다.
          상담 전 하루 정도 칼럼·후기를 읽어 보신 뒤 신청해 주셔도 좋습니다.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`glass-panel relative flex flex-col rounded-3xl p-7 sm:p-8 ${
                plan.featured
                  ? "border-[var(--gold)]/35 ring-1 ring-[var(--gold)]/20"
                  : ""
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 right-6 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-bold text-[var(--bg-deep)]">
                  대표 상품
                </span>
              ) : null}
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h3 className="font-serif text-xl text-[var(--text-primary)]">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {plan.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-2xl font-semibold text-[var(--gold-light)] sm:text-3xl">
                    {formatWon(plan.price)}
                    <span className="text-base font-normal text-[var(--text-muted)]">
                      원
                    </span>
                  </p>
                  {plan.priceNote ? (
                    <p className="text-xs text-[var(--text-muted)]">{plan.priceNote}</p>
                  ) : null}
                </div>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-[var(--text-muted)]">
                {plan.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/apply?plan=${plan.id}`}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full py-3.5 text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "btn-gold-shine text-[var(--bg-deep)]"
                    : "border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--gold)]/40 hover:text-[var(--gold-light)]"
                }`}
              >
                이 상품으로 신청
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-[var(--text-muted)]">
          VAT·할부·패키지 할인 등은 별도 안내이며, 최종 금액은 상담 전 개별
          견적으로 확정됩니다.
        </p>
      </div>
    </section>
  );
}
