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
      <main className="flex-1 pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--gold-light)]"
          >
            ← 홈으로
          </Link>
          <h1 className="mt-6 font-serif text-3xl font-semibold sm:text-4xl">
            상담 <span className="gold-gradient-text">신청</span>
          </h1>
          <p className="mt-4 max-w-xl text-[var(--text-muted)]">
            {SITE.counselor} 상담사에게 1:1 상담을 요청합니다. 검토 후 연락
            드리겠습니다.
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
