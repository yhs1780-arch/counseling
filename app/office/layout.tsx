import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "상담사 전용",
  description: `${SITE.name} 문의 관리 (계정 필요)`,
  robots: { index: false, follow: false },
};

export default function OfficeLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[var(--bg-deep)]">{children}</div>;
}
