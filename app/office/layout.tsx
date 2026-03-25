import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "상담사 백오피스",
  description: `${SITE.name} 상담사용 문의·LLM 보조 화면`,
};

export default function OfficeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
