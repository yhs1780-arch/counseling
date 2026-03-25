import { TRUST } from "@/lib/site";

function Stars({ rating, max }: { rating: number; max: number }) {
  const full = Math.floor(rating);
  const partial = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5" aria-label={`평점 ${rating}점`}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={
            i < full
              ? "text-[var(--gold)]"
              : i === full && partial
                ? "text-[var(--gold)]/70"
                : "text-white/15"
          }
        >
          ★
        </span>
      ))}
      <span className="ml-2 font-serif text-xl font-semibold text-[var(--gold-light)]">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export function TrustBar() {
  return (
    <section
      aria-label="신뢰 지표"
      className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="shrink-0">
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--gold)]">
              Trust
            </p>
            <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <Stars rating={TRUST.rating} max={TRUST.maxStars} />
              <p className="text-sm text-[var(--text-muted)]">{TRUST.reviewSnippet}</p>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center sm:text-left">
              <p className="font-serif text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                {TRUST.clientsValue}
              </p>
              <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
                {TRUST.clientsLabel}
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-serif text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                {TRUST.sessionsValue}
              </p>
              <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
                {TRUST.sessionsLabel}
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-serif text-2xl font-semibold text-[var(--gold-light)] sm:text-3xl">
                {TRUST.satisfactionValue}
              </p>
              <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
                {TRUST.satisfactionLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
