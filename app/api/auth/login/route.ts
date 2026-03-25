import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { COOKIE, getCounselorJwtSecretBytes, signCounselorToken } from "@/lib/auth-session";
import { normalizeCounselorLogin } from "@/lib/login-email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    if (!getCounselorJwtSecretBytes()) {
      console.error("Login blocked: set COUNSELOR_JWT_SECRET (min 16 chars) in production env");
      return NextResponse.json(
        { error: "로그인할 수 없습니다. 설정을 확인 중입니다. 관리자에게 문의해 주세요." },
        { status: 503 },
      );
    }

    const body = (await request.json()) as { email?: string; password?: string };
    const email = normalizeCounselorLogin(body.email ?? "");
    const password = (body.password ?? "").trim();
    if (!email || !password) {
      return NextResponse.json({ error: "아이디와 비밀번호를 입력하세요." }, { status: 400 });
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
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.error("Prisma KnownRequestError:", e.code, e.message);
      return NextResponse.json(
        { error: "로그인 처리 중 오류가 발생했습니다. 관리자에게 문의해 주세요." },
        { status: 503 },
      );
    }
    if (e instanceof Prisma.PrismaClientInitializationError) {
      console.error("Prisma init error:", e.message);
      return NextResponse.json(
        { error: "로그인할 수 없습니다. 관리자에게 문의해 주세요." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: "일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." }, { status: 500 });
  }
}
