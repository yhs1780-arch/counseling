"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Thread = {
  id: string;
  visitorKey: string;
  updatedAt: string;
  messages: { role: string; body: string; at: string }[];
};

export function Dashboard() {
  const router = useRouter();
  const [threads, setThreads] = useState<Thread[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch("/api/office/threads", { credentials: "include" });
    const data = (await res.json()) as { threads?: Thread[] };
    if (res.ok && data.threads) setThreads(data.threads);
  }, []);

  useEffect(() => {
    load();
    const t = setInterval(load, 5000);
    return () => clearInterval(t);
  }, [load]);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    router.push("/office/login");
    router.refresh();
  }

  async function sendReply() {
    if (!selectedId || !reply.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/office/reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ threadId: selectedId, text: reply.trim() }),
      });
      if (res.ok) {
        setReply("");
        await load();
      }
    } finally {
      setLoading(false);
    }
  }

  const selected = threads.find((t) => t.id === selectedId);

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-serif text-xl text-[var(--text-primary)] sm:text-2xl">
            문의 · 채팅 관리
          </h1>
          <p className="text-xs text-[var(--text-muted)] sm:text-sm">
            고객 채팅은 DB에 저장됩니다. 답변은 &ldquo;상담사&rdquo; 역할로 기록됩니다.
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/"
            className="rounded-full border border-[var(--border-subtle)] px-4 py-2 text-xs text-[var(--text-muted)] sm:text-sm"
          >
            홈페이지
          </Link>
          <button
            type="button"
            onClick={logout}
            className="rounded-full border border-[var(--border-subtle)] px-4 py-2 text-xs text-[var(--text-muted)] sm:text-sm"
          >
            로그아웃
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="glass-panel rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-[var(--text-primary)]">스레드</h2>
            <button type="button" onClick={load} className="text-xs text-[var(--gold)] underline">
              새로고침
            </button>
          </div>
          <ul className="mt-3 max-h-[28rem] space-y-2 overflow-y-auto">
            {threads.length === 0 ? (
              <li className="text-sm text-[var(--text-muted)]">문의가 없습니다.</li>
            ) : (
              threads.map((th) => (
                <li key={th.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(th.id)}
                    className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition-colors ${
                      selectedId === th.id
                        ? "border-[var(--gold)]/50 bg-[var(--gold)]/10"
                        : "border-[var(--border-subtle)] hover:bg-white/5"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">
                      {th.visitorKey.slice(0, 12)}…
                    </span>
                    <span className="mt-1 block text-xs text-[var(--text-primary)]">
                      {th.messages[th.messages.length - 1]?.body?.slice(0, 72) ?? "—"}
                    </span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="glass-panel rounded-2xl p-4 sm:p-5">
          <h2 className="font-medium text-[var(--text-primary)]">대화 · 답변</h2>
          {selected ? (
            <>
              <div className="mt-4 max-h-64 space-y-2 overflow-y-auto rounded-xl border border-[var(--border-subtle)] bg-black/20 p-3 text-xs sm:max-h-80 sm:text-sm">
                {selected.messages.map((m, i) => (
                  <div
                    key={i}
                    className={
                      m.role === "visitor" ? "text-blue-200/90" : "text-[var(--text-muted)]"
                    }
                  >
                    <span className="font-semibold text-[var(--gold)]">[{m.role}]</span> {m.body}
                  </div>
                ))}
              </div>
              <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                rows={3}
                placeholder="상담사 답변 입력…"
                className="mt-4 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)] p-3 text-sm text-[var(--text-primary)]"
              />
              <button
                type="button"
                disabled={loading}
                onClick={sendReply}
                className="mt-2 rounded-full bg-[var(--gold)] px-6 py-2 text-sm font-semibold text-[var(--bg-deep)] disabled:opacity-50"
              >
                답변 전송
              </button>
            </>
          ) : (
            <p className="mt-4 text-sm text-[var(--text-muted)]">스레드를 선택하세요.</p>
          )}
        </div>
      </div>
    </div>
  );
}
