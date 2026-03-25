import { NextResponse } from "next/server";

type Body = {
  clientNote?: string;
  counselorContext?: string;
};

export async function POST(request: Request) {
  let body: Body = {};
  try {
    body = (await request.json()) as Body;
  } catch {
    body = {};
  }

  const webhook = process.env.LLM_DIAGNOSIS_WEBHOOK_URL;
  if (webhook) {
    try {
      const upstream = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const text = await upstream.text();
      try {
        return NextResponse.json(JSON.parse(text));
      } catch {
        return NextResponse.json({ raw: text });
      }
    } catch (e) {
      return NextResponse.json(
        { error: "웹훅 호출 실패", detail: String(e) },
        { status: 502 }
      );
    }
  }

  const note = [body.counselorContext, body.clientNote].filter(Boolean).join("\n---\n");

  return NextResponse.json({
    mode: "demo",
    summary:
      note.slice(0, 400) ||
      "(데모) 내담자 서술이 비어 있습니다. 상담사 메모와 내담자 요약을 입력해 주세요.",
    angles: [
      "감정 레이블링: 현재 감정을 단어로 고정해 보기",
      "관계 패턴: 반복되는 상호작용 시나리오 분리",
      "다음 한 걸음: 24~48시간 내 최소 행동 하나",
    ],
    suggestedQuestions: [
      "가장 두려운 시나리오는 무엇인가요?",
      "과거에 비슷한 감정이 들었던 시점은?",
      "지금 당장 바꿀 수 있는 작은 행동은?",
    ],
    cautions: [
      "본 출력은 LLM 참고용입니다. 임상 진단·위기 개입을 대체하지 않습니다.",
      "위기 신호가 있다면 즉시 전문 기관·응급 연락망을 안내하세요.",
    ],
  });
}
