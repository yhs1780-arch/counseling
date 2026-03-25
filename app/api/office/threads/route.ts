import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { COOKIE, verifyCounselorToken } from "@/lib/auth-session";

export const runtime = "nodejs";

export async function GET() {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = await verifyCounselorToken(token);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const threads = await prisma.chatThread.findMany({
      orderBy: { updatedAt: "desc" },
      take: 100,
      include: {
        messages: { orderBy: { createdAt: "asc" }, take: 80 },
      },
    });

    return NextResponse.json({
      threads: threads.map((t) => ({
        id: t.id,
        visitorKey: t.visitorKey,
        updatedAt: t.updatedAt.toISOString(),
        messages: t.messages.map((m) => ({
          role: m.role,
          body: m.body,
          at: m.createdAt.toISOString(),
        })),
      })),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "DB 오류", threads: [] }, { status: 500 });
  }
}
