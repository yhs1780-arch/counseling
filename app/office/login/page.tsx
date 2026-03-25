"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OfficeLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setErr(data.error ?? "로그인 실패");
        return;
      }
      router.push("/office");
      router.refresh();
    } catch {
      setErr("네트워크 오류");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4">
      <h1 className="font-serif text-2xl text-[var(--text-primary)]">상담사 로그인</h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        계정이 있는 상담사·관리자만 입장할 수 있습니다. 첫 설치 시{" "}
        <code className="text-xs text-[var(--gold)]"> npm run db:push && npm run db:seed </code>
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label className="text-sm text-[var(--text-muted)]">이메일</label>
          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-3 text-[var(--text-primary)]"
            required
          />
        </div>
        <div>
          <label className="text-sm text-[var(--text-muted)]">비밀번호</label>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-3 text-[var(--text-primary)]"
            required
          />
        </div>
        {err ? <p className="text-sm text-red-300">{err}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[var(--gold)] py-3 font-semibold text-[var(--bg-deep)] disabled:opacity-50"
        >
          {loading ? "확인 중…" : "로그인"}
        </button>
      </form>
      <Link href="/" className="mt-8 text-center text-sm text-[var(--gold)]">
        홈으로
      </Link>
    </div>
  );
}
