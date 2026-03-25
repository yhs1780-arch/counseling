import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyCounselorToken, COOKIE } from "@/lib/auth-session";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/office/login")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/office")) {
    const token = request.cookies.get(COOKIE)?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/office/login", request.url));
    }
    let userId: string | null = null;
    try {
      userId = await verifyCounselorToken(token);
    } catch {
      userId = null;
    }
    if (!userId) {
      const res = NextResponse.redirect(new URL("/office/login", request.url));
      res.cookies.delete(COOKIE);
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/office", "/office/:path*"],
};
