import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담 신청",
  description: `${SITE.name} 1:1 상담 신청`,
};

type Props = {
  searchParams: Promise<{ plan?: string }>;
};

export default async function ApplyPage({ searchParams }: Props) {
  const { plan } = await searchParams;

  return (
    <>
      <Header />
      <main className="flex-1 scroll-mt-20 pt-20 pb-14 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--gold-light)]"
          >
            ← 홈으로
          </Link>
          <h1 className="mt-5 font-serif text-2xl font-semibold sm:mt-6 sm:text-4xl">
            상담 <span className="gold-gradient-text">신청</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm text-[var(--text-muted)] sm:text-base">
            {SITE.counselor} {SITE.counselorTitle} 및 팀 상담사가 검토합니다. 고민
            확인·기본 안내 후 계좌이체 확인 시 일정이 확정됩니다.
          </p>
          <div className="mt-10">
            <ConsultationForm initialPlanId={plan} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
