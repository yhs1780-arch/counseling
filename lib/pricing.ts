/**
 * 상품·요금 구조는 업계 상담 플랫폼(예: 아트라상 상담 서비스 안내)의
 * 티어를 참고해 구성했습니다. 실제 결제 금액은 운영 정책에 맞게 수정하세요.
 * 참고: https://atrasan.co.kr/consults/service
 */

export type PlanId = "report" | "voice" | "document" | "after";

export type PricingPlan = {
  id: PlanId;
  name: string;
  subtitle: string;
  price: number;
  priceNote?: string;
  /** 아트라상 메인 상품(음성) 수준의 대표 상품 표시 */
  featured?: boolean;
  bullets: string[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "report",
    name: "맞춤 분석 리포트",
    subtitle: "상담 전 상황 점검·방향 제시",
    price: 39_000,
    bullets: [
      "사연·문항 기반 요약 리포트 (24~48시간 내 발송 목표)",
      "관계 단계, 감정 패턴, 우선 점검 포인트 정리",
      "본 상담 전 ‘가벼운 진단’에 적합한 입문형 상품",
    ],
  },
  {
    id: "voice",
    name: "음성 심리상담",
    subtitle: "실시간 음성 1회 세션",
    price: 390_000,
    featured: true,
    bullets: [
      "60분 음성 세션 (일정 조율 후 진행)",
      "연애·부부·심리 고민에 맞춘 즉각 피드백과 실행 과제",
      "내담자 선호도가 높은 대표 상담 형태",
    ],
  },
  {
    id: "document",
    name: "문서 심리상담",
    subtitle: "글(문서) 기반 심층 상담",
    price: 390_000,
    bullets: [
      "일정 기한 내 상담 문서로 수령 (재열람·정리에 유리)",
      "분석·해석·질문 답변·실행 가이드를 한 번에 정리",
      "음성 대화가 부담스러울 때 권장",
    ],
  },
  {
    id: "after",
    name: "애프터 상담",
    subtitle: "음성/문서 상담 후 추가 점검",
    price: 200_000,
    priceNote: "기존 상담 수료 고객",
    bullets: [
      "이후 상황 변화, 추가 질문, 전략 수정이 필요할 때",
      "동일 상담사와 이어지는 후속 세션(형태는 협의)",
      "단순 Q&A가 아닌 재분석·변수 대응에 초점",
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
