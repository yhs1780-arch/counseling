/** 사이트 기본 정보 — 브랜드명·연락처는 여기만 수정하면 됩니다. */
export const SITE = {
  name: "마음결 심리상담",
  /** 표기 통일: 상담사명 */
  counselor: "박상훈",
  description:
    "연애·부부·성·여성 심리와 타로 기반 상담을 전문으로 하는 1:1 프리미엄 심리상담입니다.",
  /** TODO: 실제 연락처로 교체 */
  phone: "010-0000-0000",
  email: "contact@example.com",
};

export const NAV_LINKS = [
  { href: "#about", label: "소개" },
  { href: "#services", label: "상담 분야" },
  { href: "#pricing", label: "상품·요금" },
  { href: "#credentials", label: "자격·전문성" },
  { href: "#reviews", label: "상담 후기" },
  { href: "#faq", label: "FAQ" },
  { href: "/apply", label: "상담 신청" },
] as const;
