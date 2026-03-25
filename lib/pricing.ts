/**
 * 상품·요금 — 프리미엄 음성·문서·입문 리포트·후속 등 업계 상품군을 반영한 자체 요금표입니다.
 * 금액·카피는 운영에 맞게 자유롭게 수정하세요.
 */

export type PlanId =
  | "report"
  | "chat_1"
  | "chat_3"
  | "voice"
  | "voice_premium"
  | "document"
  | "tarot_saju"
  | "after";

export type PlanCategory = "entry" | "chat" | "live" | "special" | "followup";

export type PricingPlan = {
  id: PlanId;
  category: PlanCategory;
  name: string;
  subtitle: string;
  price: number;
  priceNote?: string;
  featured?: boolean;
  bullets: string[];
};

export const PLAN_CATEGORY_LABEL: Record<PlanCategory, string> = {
  entry: "입문 · 분석",
  chat: "채팅 상담",
  live: "전화 · 음성 · 문서",
  special: "타로 · 사주 등 전문 세션",
  followup: "후속 · 점검",
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "report",
    category: "entry",
    name: "맞춤 분석 리포트",
    subtitle: "결제 전 무료 안내 후, 본 리포트는 입금 확인 후 발송",
    price: 49_000,
    bullets: [
      "작성 내용·체크리스트 기반 요약 리포트",
      "감정·관계 패턴, 우선 점검 포인트 정리",
      "음성/채팅 본 상담 전 단계 점검에 적합",
    ],
  },
  {
    id: "chat_1",
    category: "chat",
    name: "채팅 심리상담 1회",
    subtitle: "모바일 채팅 중심 · 약 50분 분량(일정 협의)",
    price: 159_000,
    bullets: [
      "카카오/사내 채널 등 채팅으로 진행(협의)",
      "연애·직장·가족 등 일반 정서 고민에 적합",
      "전화가 부담스러운 분께 권장",
    ],
  },
  {
    id: "chat_3",
    category: "chat",
    name: "채팅 심리상담 3회 패키지",
    subtitle: "3회 분량 패키지(1회 환산 시 약 12만 원대)",
    price: 379_000,
    priceNote: "패키지 할인",
    bullets: [
      "동일 주제 심화·실행 점검에 유리",
      "회차별 목표 설정 및 과제 리뷰",
      "유효 기간·분할 이용 조건은 안내 시 확정",
    ],
  },
  {
    id: "voice",
    category: "live",
    name: "전화(음성) 심리상담 60분",
    subtitle: "실시간 음성 1회",
    price: 390_000,
    featured: true,
    bullets: [
      "60분 음성 세션 · 일정 조율 후 진행",
      "즉각 피드백·실행 과제 제안",
      "가장 많이 선택되는 대표 상품",
    ],
  },
  {
    id: "voice_premium",
    category: "live",
    name: "프리미엄 음성 심층 90분",
    subtitle: "복합 고민·장기 케이스용 심화 세션",
    price: 590_000,
    bullets: [
      "90분 실시간 음성",
      "갈등 구조·반복 패턴을 깊게 다룸",
      "사전 사연 정리만으로도 준비 시간 단축",
    ],
  },
  {
    id: "document",
    category: "live",
    name: "문서 심리상담",
    subtitle: "글(문서)로 수령 · 재열람에 유리",
    price: 390_000,
    bullets: [
      "기한 내 상담 문서로 제공",
      "분석·해석·질문 답변·실행 가이드 포함(분량 협의)",
      "바쁜 직장인·말하기 어려운 주제에 적합",
    ],
  },
  {
    id: "tarot_saju",
    category: "special",
    name: "타로 · 사주 통합 세션",
    subtitle: "상징 해석과 운세 흐름을 심리 상담과 연동",
    price: 229_000,
    bullets: [
      "타로/사주 중 원하는 비중 협의(단독도 가능)",
      "전문 자격 과정 이수 상담사 배정",
      "미신 조장이 아닌 선택·정서 정리 목적 안내",
    ],
  },
  {
    id: "after",
    category: "followup",
    name: "애프터 상담",
    subtitle: "기존 상담 고객 후속 점검",
    price: 200_000,
    priceNote: "본 상담 수료 고객",
    bullets: [
      "상황 변화·추가 질문·전략 수정",
      "동일/협의 상담사 연속 세션",
      "단순 문답이 아닌 재분석 중심",
    ],
  },
];

export function formatWon(n: number) {
  return new Intl.NumberFormat("ko-KR").format(n);
}

export function getPlanById(id: string | undefined): PricingPlan | undefined {
  if (!id) return undefined;
  return PRICING_PLANS.find((p) => p.id === id);
}

export function plansByCategory(): [PlanCategory, PricingPlan[]][] {
  const order: PlanCategory[] = ["entry", "chat", "live", "special", "followup"];
  return order.map((c) => [c, PRICING_PLANS.filter((p) => p.category === c)]);
}
