import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const AUTO_REPLY =
  "접수되었습니다. 담당 상담사가 확인 후 연락드립니다. 급하시면 상담 신청서에 연락처를 남겨 주세요.";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { visitorKey?: string; text?: string };
    const visitorKey = body.visitorKey?.trim();
    const text = body.text?.trim();
    if (!visitorKey || !text) {
      return NextResponse.json({ error: "visitorKey와 text가 필요합니다." }, { status: 400 });
    }

    const thread = await prisma.chatThread.upsert({
      where: { visitorKey },
      create: { visitorKey },
      update: {},
    });

    await prisma.chatMessage.create({
      data: { threadId: thread.id, role: "visitor", body: text },
    });

    await prisma.chatMessage.create({
      data: { threadId: thread.id, role: "system", body: AUTO_REPLY },
    });

    const msgs = await prisma.chatMessage.findMany({
      where: { threadId: thread.id },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json({
      threadId: thread.id,
      messages: msgs.map((m) => ({
        role: m.role,
        text: m.body,
        at: m.createdAt.getTime(),
      })),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "저장 실패. 서버 DB를 확인하세요.", fallback: true },
      { status: 503 }
    );
  }
}
