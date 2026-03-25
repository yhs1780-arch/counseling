"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  addSystemReply,
  appendVisitorMessage,
  getAllThreads,
  getOrCreateVisitorId,
  type InboxThread,
} from "@/lib/inbox-storage";

function BotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1v3a2 2 0 01-2 2h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a2 2 0 01-2-2v-3h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2M7.5 13A1.5 1.5 0 106 14.5 1.5 1.5 0 007.5 13m9 0a1.5 1.5 0 10-1.5 1.5 1.5 1.5 0 001.5-1.5M12 9a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  );
}

export function FloatingSupport() {
  const [open, setOpen] = useState(false);
  const [thread, setThread] = useState<InboxThread | null>(null);
  const [draft, setDraft] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && typeof window !== "undefined") {
      const vid = getOrCreateVisitorId();
      const t = getAllThreads().find((x) => x.id === vid);
      setThread(t ?? { id: vid, updatedAt: Date.now(), messages: [] });
    }
  }, [open]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [open, thread?.messages.length]);

  function refreshThread() {
    const vid = getOrCreateVisitorId();
    const t = getAllThreads().find((x) => x.id === vid);
    setThread(t ?? { id: vid, updatedAt: Date.now(), messages: [] });
  }

  function send() {
    const t = draft.trim();
    if (!t) return;
    const updated = appendVisitorMessage(t);
    setThread(updated);
    setDraft("");
    addSystemReply(
      updated.id,
      "접수되었습니다. 담당 상담사·대표가 순차 확인 후 채팅 또는 연락처로 안내드립니다. 급하시면 상단 ‘상담 신청’에서 연락처를 남겨 주세요."
    );
    const after = getAllThreads().find((x) => x.id === updated.id);
    if (after) setThread(after);
  }

  return (
    <div className="fixed right-3 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[45] flex flex-col items-end gap-2 pb-[env(safe-area-inset-bottom)] sm:right-5 sm:bottom-6">
        {open ? (
          <div
            className="flex max-h-[min(70vh,32rem)] w-[min(100vw-1.5rem,22rem)] flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-2xl sm:max-h-[min(75vh,28rem)] sm:w-96"
            role="dialog"
            aria-label="문의 채팅"
          >
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-3">
              <span className="text-sm font-semibold text-[var(--text-primary)]">문의 채팅</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 text-[var(--text-muted)] hover:bg-white/10"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>
            <div ref={listRef} className="min-h-[12rem] flex-1 space-y-3 overflow-y-auto overscroll-contain px-3 py-3">
              {!thread?.messages.length ? (
                <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                  모바일에서도 입력이 편하도록 창 크기를 맞춰 두었습니다. 고민 한 줄만 남겨도
                  됩니다.
                </p>
              ) : (
                thread.messages.map((m, i) => (
                  <div
                    key={`${m.at}-${i}`}
                    className={`max-w-[95%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      m.role === "visitor"
                        ? "ml-auto bg-[var(--gold)]/20 text-[var(--text-primary)]"
                        : "mr-auto bg-white/5 text-[var(--text-muted)]"
                    }`}
                  >
                    {m.text}
                  </div>
                ))
              )}
            </div>
            <div className="border-t border-[var(--border-subtle)] p-2 sm:p-3">
              <div className="flex gap-2">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), send())}
                  placeholder="메시지 입력..."
                  className="min-h-[2.75rem] flex-1 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)] px-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--gold)]/40"
                />
                <button
                  type="button"
                  onClick={send}
                  className="shrink-0 rounded-xl bg-[var(--gold)] px-3 text-sm font-semibold text-[var(--bg-deep)]"
                >
                  전송
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-[var(--text-muted)]">
                <Link href="/apply" className="text-[var(--gold)] underline">
                  신청서 작성
                </Link>
                <button type="button" onClick={refreshThread} className="underline">
                  새로고침
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--bg-deep)] shadow-lg shadow-black/30 transition-transform active:scale-95 sm:h-16 sm:w-16"
          aria-expanded={open}
          aria-label={open ? "채팅 닫기" : "채팅 문의 열기"}
        >
          <BotIcon className="h-7 w-7 sm:h-8 sm:w-8" />
        </button>
    </div>
  );
}
