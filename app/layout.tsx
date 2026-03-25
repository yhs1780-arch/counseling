import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import { FloatingSupport } from "@/components/FloatingSupport";
import "./globals.css";
import { SITE } from "@/lib/site";

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | 프리미엄 심리·채팅 상담`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "심리상담",
    "채팅상담",
    "전화상담",
    "연애상담",
    "부부상담",
    "타로상담",
    "사주상담",
    "여성심리",
    "성심리상담",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-[5.5rem] font-sans sm:pb-8 lg:pb-6">
        {children}
        <FloatingSupport />
      </body>
    </html>
  );
}
