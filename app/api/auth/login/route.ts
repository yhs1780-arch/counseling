import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { COOKIE, signCounselorToken } from "@/lib/auth-session";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const email = body.email?.trim().toLowerCase();
    const password = body.password ?? "";
    if (!email || !password) {
      return NextResponse.json({ error: "이메일과 비밀번호를 입력하세요." }, { status: 400 });
    }

    const user = await prisma.counselorAccount.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return NextResponse.json({ error: "계정 정보가 올바르지 않습니다." }, { status: 401 });
    }

    const token = await signCounselorToken(user.id);
    const res = NextResponse.json({ ok: true, name: user.name });
    res.cookies.set(COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
