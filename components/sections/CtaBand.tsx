import Link from "next/link";

export function CtaBand() {
  return (
    <section className="mesh-bg py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="font-serif text-2xl font-semibold sm:text-3xl">
          지금, <span className="gold-gradient-text">첫 걸음</span>만 남겨 주세요.
        </p>
        <p className="mx-auto mt-4 max-w-lg text-sm text-[var(--text-muted)] sm:text-base">
          신청서는 상담 가능 여부 확인용입니다. 부담 없이 현재 상황만
          적어 주셔도 됩니다.
        </p>
        <Link
          href="/apply"
          className="btn-gold-shine mt-8 inline-flex rounded-full px-10 py-4 text-base font-bold text-[var(--bg-deep)]"
        >
          상담 신청서 작성
        </Link>
      </div>
    </section>
  );
}
