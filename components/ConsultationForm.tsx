"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getPlanById, PRICING_PLANS, formatWon, type PlanId } from "@/lib/pricing";
import { SITE } from "@/lib/site";

const TOPICS = [
  "연애·재회",
  "부부·커플",
  "타로 중심",
  "여성·성 심리",
  "기타",
] as const;

function isPlanId(v: string): v is PlanId {
  return PRICING_PLANS.some((p) => p.id === v);
}

type Props = {
  initialPlanId?: string;
};

export function ConsultationForm({ initialPlanId }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const defaultPlan: PlanId = useMemo(() => {
    if (initialPlanId && isPlanId(initialPlanId)) return initialPlanId;
    return "voice";
  }, [initialPlanId]);
  const [plan, setPlan] = useState<PlanId>(defaultPlan);

  useEffect(() => {
    if (initialPlanId && isPlanId(initialPlanId)) setPlan(initialPlanId);
  }, [initialPlanId]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    console.log("상담 신청(프로토타입):", Object.fromEntries(data.entries()));
    setSubmitted(true);
    form.reset();
    setPlan(defaultPlan);
  }

  const selected = getPlanById(plan);

  if (submitted) {
    return (
      <div className="glass-panel mx-auto max-w-lg rounded-3xl p-10 text-center">
        <p className="font-serif text-xl text-[var(--gold-light)]">접수 완료</p>
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          현재는 데모 모드입니다. 실제 배포 시 Formspree·카카오·전용 API 등으로
          연결해 주세요. 연락처: {SITE.phone}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-[var(--gold)] underline-offset-4 hover:underline"
        >
          다시 작성
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel mx-auto max-w-lg space-y-5 rounded-3xl p-8 sm:p-10"
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="plan" className="text-sm font-medium text-[var(--text-primary)]">
            신청 상품 <span className="text-red-400">*</span>
          </label>
          <Link
            href="/#pricing"
            className="text-xs text-[var(--gold)] underline-offset-4 hover:underline"
          >
            요금표 보기
          </Link>
        </div>
        <select
          id="plan"
          name="plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value as PlanId)}
          className="mt-2 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)]/80 px-4 py-3 text-[var(--text-primary)] outline-none focus:border-[var(--gold)]/50"
        >
          {PRICING_PLANS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} · {formatWon(p.price)}원
              {p.featured ? " (대표)" : ""}
            </option>
          ))}
        </select>
        {selected ? (
          <p className="mt-2 text-xs text-[var(--text-muted)]">{selected.subtitle}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-[var(--text-primary)]">
          이름 <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)]/80 px-4 py-3 text-[var(--text-primary)] outline-none focus:border-[var(--gold)]/50"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-[var(--text-primary)]">
          연락처 <span className="text-red-400">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          required
          type="tel"
          autoComplete="tel"
          placeholder="010-0000-0000"
          className="mt-2 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)]/80 px-4 py-3 text-[var(--text-primary)] outline-none focus:border-[var(--gold)]/50"
        />
      </div>
      <div>
        <label htmlFor="topic" className="text-sm font-medium text-[var(--text-primary)]">
          희망 분야
        </label>
        <select
          id="topic"
          name="topic"
          className="mt-2 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)]/80 px-4 py-3 text-[var(--text-primary)] outline-none focus:border-[var(--gold)]/50"
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-[var(--text-primary)]">
          상담 받고 싶은 내용 <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="현재 상황을 편하게 적어 주세요."
          className="mt-2 w-full resize-y rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-deep)]/80 px-4 py-3 text-[var(--text-primary)] outline-none focus:border-[var(--gold)]/50"
        />
      </div>
      <p className="text-xs text-[var(--text-muted)]">
        제출 시 개인정보 수집·이용에 동의한 것으로 간주합니다. (추후 개인정보
        처리방침 페이지를 연결하세요.)
      </p>
      <button
        type="submit"
        className="btn-gold-shine w-full rounded-full py-4 text-base font-bold text-[var(--bg-deep)]"
      >
        신청하기
      </button>
    </form>
  );
}
