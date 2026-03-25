import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { COOKIE, verifyCounselorToken } from "@/lib/auth-session";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = await verifyCounselorToken(token);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await request.json()) as { threadId?: string; text?: string };
  const threadId = body.threadId?.trim();
  const text = body.text?.trim();
  if (!threadId || !text) {
    return NextResponse.json({ error: "threadId, text 필요" }, { status: 400 });
  }

  try {
    await prisma.chatMessage.create({
      data: { threadId, role: "counselor", body: text },
    });
    await prisma.chatThread.update({
      where: { id: threadId },
      data: { updatedAt: new Date() },
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "전송 실패" }, { status: 500 });
  }
}
