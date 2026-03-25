"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  addSystemReply,
  appendVisitorMessage,
  getAllThreads,
  getOrCreateVisitorId,
  type InboxMessage,
  type InboxThread,
} from "@/lib/inbox-storage";

function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8.5z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2.5" />
    </svg>
  );
}

export function FloatingSupport() {
  const [open, setOpen] = useState(false);
  const [thread, setThread] = useState<InboxThread | null>(null);
  const [draft, setDraft] = useState("");
  const [apiHint, setApiHint] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
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

  function mapToThread(msgs: { role: string; text: string; at: number }[]): InboxThread {
    const vid = getOrCreateVisitorId();
    const mapped: InboxMessage[] = msgs.map((m) => ({
      role: m.role === "visitor" ? "visitor" : "system",
      text: m.text,
      at: m.at,
    }));
    return { id: vid, updatedAt: Date.now(), messages: mapped };
  }

  async function send() {
    const text = draft.trim();
    if (!text) return;
    const visitorKey = getOrCreateVisitorId();
    setDraft("");
    setApiHint(null);

    try {
      const res = await fetch("/api/public/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitorKey, text }),
      });
      const data = (await res.json()) as {
        messages?: { role: string; text: string; at: number }[];
        error?: string;
      };

      if (res.ok && data.messages?.length) {
        setThread(mapToThread(data.messages));
        return;
      }
      if (!res.ok) setApiHint(data.error ?? "서버 저장 실패");
    } catch {
      setApiHint("네트워크 오류");
    }

    const updated = appendVisitorMessage(text);
    setThread(updated);
    addSystemReply(
      updated.id,
      "접수되었습니다. 담당 상담사가 확인 후 연락드립니다. (서버 미연결 시 이 기기에만 저장될 수 있습니다.)"
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
          aria-label="채팅 상담 문의"
        >
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-3">
            <div>
              <span className="text-sm font-semibold text-[var(--text-primary)]">채팅 상담</span>
              <p className="text-[10px] text-[var(--text-muted)]">문의 남기기 · 담당자 확인</p>
            </div>
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
                채팅으로 남겨 주세요. 한 줄만 적어 주셔도 됩니다.
              </p>
            ) : (
              thread.messages.map((m, i) => (
                <div
                  key={`${m.at}-${i}`}
                  className={`max-w-[95%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === "visitor"
                      ? "ml-auto bg-[var(--gold)]/25 text-[var(--text-primary)]"
                      : "mr-auto border border-[var(--border-subtle)] bg-white/5 text-[var(--text-muted)]"
                  }`}
                >
                  {m.text}
                </div>
              ))
            )}
            {apiHint ? <p className="text-[10px] text-orange-200/90">{apiHint}</p> : null}
          </div>
          <div className="border-t border-[var(--border-subtle)] p-2 sm:p-3">
            <div className="flex gap-2">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), send())}
                placeholder="메시지를 입력…"
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
            <div className="mt-2 flex flex-wrap gap-3 text-[10px] text-[var(--text-muted)]">
              <Link href="/apply" className="text-[var(--gold)] underline">
                상담 신청서
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
        title="채팅 상담"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--bg-deep)] shadow-lg shadow-black/35 ring-2 ring-white/10 transition-transform active:scale-95 sm:h-16 sm:w-16"
        aria-expanded={open}
        aria-label="채팅 상담 열기"
      >
        <ChatBubbleIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </button>
    </div>
  );
}
