/** 사이트 기본 정보 — 브랜드명·연락처·계좌는 여기만 수정하면 됩니다. */
export const SITE = {
  name: "마음결 심리상담",
  counselor: "박상훈",
  counselorTitle: "대표 상담사",
  description:
    "채팅·전화·타로·사주까지. 검증된 전문가 팀이 관계와 마음의 무게를 함께 나눕니다.",
  phone: "010-0000-0000",
  email: "contact@example.com",
  bank: {
    name: "OO은행",
    holder: "마음결",
    number: "000-000-000000",
  },
};

export const TRUST = {
  rating: 4.8,
  maxStars: 5,
  sessionsLabel: "누적 상담·세션",
  sessionsValue: "52,000+",
  clientsLabel: "상담 경험 고객",
  clientsValue: "18,700+",
  satisfactionLabel: "재이용·추천 의향",
  satisfactionValue: "94%",
  reviewSnippet: "네이버·카카오·자체 설문 기준 종합 만족 평점 4.8 / 5.0",
};

export const NAV_LINKS = [
  { href: "#about", label: "소개" },
  { href: "#services", label: "상담 방식" },
  { href: "#pricing", label: "상품·요금" },
  { href: "#process", label: "진행 안내" },
  { href: "#credentials", label: "전문가" },
  { href: "#reviews", label: "후기" },
  { href: "#faq", label: "FAQ" },
  { href: "/apply", label: "신청" },
] as const;
