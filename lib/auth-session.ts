import { SignJWT, jwtVerify } from "jose";

const COOKIE = "counselor_session";

function getSecret() {
  const fromEnv = process.env.COUNSELOR_JWT_SECRET;
  if (fromEnv && fromEnv.length >= 16) return new TextEncoder().encode(fromEnv);
  if (process.env.NODE_ENV === "development") {
    return new TextEncoder().encode("development-only-secret-min-32-characters!!");
  }
  throw new Error("COUNSELOR_JWT_SECRET must be set (min 16 chars) in production");
}

export async function signCounselorToken(userId: string): Promise<string> {
  return new SignJWT({ sub: userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());
}

export async function verifyCounselorToken(token: string): Promise<string | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    const sub = payload.sub;
    return typeof sub === "string" ? sub : null;
  } catch {
    return null;
  }
}

export { COOKIE };
