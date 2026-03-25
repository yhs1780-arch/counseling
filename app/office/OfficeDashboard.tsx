"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { getAllThreads, type InboxThread } from "@/lib/inbox-storage";
import { SITE } from "@/lib/site";

const ACCESS = process.env.NEXT_PUBLIC_OFFICE_ACCESS_CODE ?? "";

type LlmResult = {
  mode?: string;
  summary?: string;
  angles?: string[];
  suggestedQuestions?: string[];
  cautions?: string[];
  error?: string;
};

export function OfficeDashboard() {
  const [unlocked, setUnlocked] = useState(!ACCESS);
  const [pin, setPin] = useState("");
  const [threads, setThreads] = useState<InboxThread[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [clientNote, setClientNote] = useState("");
  const [counselorContext, setCounselorContext] = useState("");
  const [llmLoading, setLlmLoading] = useState(false);
  const [llmResult, setLlmResult] = useState<LlmResult | null>(null);

  const refreshInbox = useCallback(() => {
    setThreads(getAllThreads());
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    refreshInbox();
    const t = setInterval(refreshInbox, 4000);
    return () => clearInterval(t);
  }, [unlocked, refreshInbox]);

  function submitPin(e: React.FormEvent) {
    e.preventDefault();
    if (pin === ACCESS) setUnlocked(true);
  }

  async function runLlm() {
    setLlmLoading(true);
    setLlmResult(null);
    try {
      const res = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientNote, counselorContext }),
      });
      const data = (await res.json()) as LlmResult;
      setLlmResult(data);
    } catch {
      setLlmResult({ error: "요청 실패" });
    } finally {
      setLlmLoading(false);
    }
  }

  const selected = threads.find((t) => t.id === selectedId);

  if (!unlocked) {
    return (
      <div className="mx-auto max-w-sm px-4 py-24">
        <h1 className="font-serif text-xl text-[var(--text-primary)]">상담사 접근</h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          환경 변수 <code className="text-[var(--gold)]">NEXT_PUBLIC_OFFICE_ACCESS_CODE</code>
          가 비어 있으면 바로 입장합니다. 운영 시 코드를 설정하세요.
        </p>
        {ACCESS ? (
          <form onSubmit={submitPin} className="mt-6 space-y-3">
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="접근 코드"
              className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)] px-3 py-3 text-[var(--text-primary)]"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[var(--gold)] py-3 font-semibold text-[var(--bg-deep)]"
            >
              입장
            </button>
          </form>
        ) : (
          <button
            type="button"
            onClick={() => setUnlocked(true)}
            className="mt-6 w-full rounded-full bg-[var(--gold)] py-3 font-semibold text-[var(--bg-deep)]"
          >
            입장 (코드 미설정)
          </button>
        )}
        <Link href="/" className="mt-6 block text-center text-sm text-[var(--gold)]">
          홈으로
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-serif text-2xl text-[var(--text-primary)]">상담사 백오피스</h1>
          <p className="text-xs text-[var(--text-muted)] sm:text-sm">
            {SITE.name} · 우측 채팅 문의는 이 브라우저{" "}
            <strong className="text-[var(--text-primary)]">localStorage</strong>에만 저장됩니다
            (데모). 실제 서비스는 DB·푸시로 교체하세요.
          </p>
        </div>
        <Link
          href="/"
          className="rounded-full border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-muted)]"
        >
          홈페이지
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="glass-panel rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-[var(--text-primary)]">채팅 문의 함</h2>
            <button
              type="button"
              onClick={refreshInbox}
              className="text-xs text-[var(--gold)] underline"
            >
              새로고침
            </button>
          </div>
          <ul className="mt-3 max-h-56 space-y-2 overflow-y-auto sm:max-h-72">
            {threads.length === 0 ? (
              <li className="text-sm text-[var(--text-muted)]">아직 문의가 없습니다.</li>
            ) : (
              threads.map((th) => (
                <li key={th.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedId(th.id);
                      setClientNote(th.messages.map((m) => `[${m.role}] ${m.text}`).join("\n"));
                    }}
                    className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition-colors ${
                      selectedId === th.id
                        ? "border-[var(--gold)]/50 bg-[var(--gold)]/10"
                        : "border-[var(--border-subtle)] hover:bg-white/5"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">{th.id}</span>
                    <span className="mt-1 block text-xs text-[var(--text-primary)]">
                      {th.messages[th.messages.length - 1]?.text?.slice(0, 80) ?? "—"}
                    </span>
                  </button>
                </li>
              ))
            )}
          </ul>
          {selected ? (
            <div className="mt-4 rounded-xl border border-[var(--border-subtle)] bg-black/20 p-3 text-xs">
              {selected.messages.map((m, i) => (
                <div key={i} className="mb-2 text-[var(--text-muted)]">
                  <span className="text-[var(--gold)]">{m.role}:</span> {m.text}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="glass-panel rounded-2xl p-4 sm:p-5">
          <h2 className="font-medium text-[var(--text-primary)]">LLM 보조 진단</h2>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            내담자 서술·상담사 메모를 합쳐 <strong className="text-[var(--text-primary)]">/api/diagnose</strong>
            로 보냅니다. 환경 변수 <code className="text-[var(--gold)]">LLM_DIAGNOSIS_WEBHOOK_URL</code>
            이 있으면 귀사 엔진으로 프록시합니다.
          </p>
          <label className="mt-3 block text-xs text-[var(--text-muted)]">내담자 요약·발화</label>
          <textarea
            value={clientNote}
            onChange={(e) => setClientNote(e.target.value)}
            rows={5}
            className="mt-1 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)] p-3 text-sm text-[var(--text-primary)]"
          />
          <label className="mt-3 block text-xs text-[var(--text-muted)]">상담사 메모 (맥락)</label>
          <textarea
            value={counselorContext}
            onChange={(e) => setCounselorContext(e.target.value)}
            rows={3}
            className="mt-1 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)] p-3 text-sm text-[var(--text-primary)]"
          />
          <button
            type="button"
            disabled={llmLoading}
            onClick={runLlm}
            className="mt-4 w-full rounded-full bg-[var(--gold)] py-3 font-semibold text-[var(--bg-deep)] disabled:opacity-50"
          >
            {llmLoading ? "요청 중…" : "LLM 참고안 받기"}
          </button>
          {llmResult ? (
            <div className="mt-4 rounded-xl border border-[var(--border-subtle)] bg-black/25 p-3 text-sm">
              {llmResult.error ? (
                <p className="text-red-300">{llmResult.error}</p>
              ) : (
                <>
                  {llmResult.mode ? (
                    <p className="text-[10px] text-[var(--text-muted)]">모드: {llmResult.mode}</p>
                  ) : null}
                  <p className="mt-2 whitespace-pre-wrap text-[var(--text-primary)]">
                    {llmResult.summary}
                  </p>
                  {llmResult.angles?.length ? (
                    <ul className="mt-2 list-inside list-disc text-[var(--text-muted)]">
                      {llmResult.angles.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  ) : null}
                  {llmResult.suggestedQuestions?.length ? (
                    <p className="mt-2 text-xs text-[var(--gold-light)]">
                      질문 아이디어: {llmResult.suggestedQuestions.join(" / ")}
                    </p>
                  ) : null}
                  {llmResult.cautions?.length ? (
                    <p className="mt-3 text-[10px] text-orange-200/90">
                      {llmResult.cautions.join(" ")}
                    </p>
                  ) : null}
                </>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
