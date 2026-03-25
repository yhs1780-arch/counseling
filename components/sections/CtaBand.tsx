import Link from "next/link";

export function CtaBand() {
  return (
    <section
      id="chat-app"
      className="mesh-bg scroll-mt-20 py-12 sm:scroll-mt-24 sm:py-16"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="font-serif text-xl font-semibold sm:text-2xl">
          우측 하단 <span className="gold-gradient-text">채팅</span> 또는 신청서로 연결
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--text-muted)] sm:text-base">
          모바일에서도 채팅창이 먼저 보이도록 배치했습니다. 상담사·대표가 백오피스에서
          문의를 확인한 뒤 순차 연락드립니다.
        </p>
        <p className="mt-2 text-xs text-[var(--text-muted)]">
          (이 영역으로 스크롤하면 채팅 유도 문구입니다. 실제 채팅은 화면 오른쪽 아래 버튼)
        </p>
        <Link
          href="/apply"
          className="btn-gold-shine mt-6 inline-flex min-h-12 items-center rounded-full px-9 py-3 text-sm font-bold text-[var(--bg-deep)] sm:text-base"
        >
          상담 신청서 작성
        </Link>
      </div>
    </section>
  );
}
