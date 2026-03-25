import { SignJWT, jwtVerify } from "jose";

const COOKIE = "counselor_session";

/** 프로덕션에서 env 미설정 시 null — 로그인/검증 시 별도 안내 */
export function getCounselorJwtSecretBytes(): Uint8Array | null {
  const fromEnv = process.env.COUNSELOR_JWT_SECRET;
  if (fromEnv && fromEnv.length >= 16) return new TextEncoder().encode(fromEnv);
  if (process.env.NODE_ENV !== "production") {
    return new TextEncoder().encode("development-only-secret-min-32-characters!!");
  }
  return null;
}

export async function signCounselorToken(userId: string): Promise<string> {
  const secret = getCounselorJwtSecretBytes();
  if (!secret) throw new Error("Counselor JWT secret not configured");
  return new SignJWT({ sub: userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyCounselorToken(token: string): Promise<string | null> {
  const secret = getCounselorJwtSecretBytes();
  if (!secret) return null;
  try {
    const { payload } = await jwtVerify(token, secret);
    const sub = payload.sub;
    return typeof sub === "string" ? sub : null;
  } catch {
    return null;
  }
}

export { COOKIE };
