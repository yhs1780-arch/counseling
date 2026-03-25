/* QA: project root에서 node scripts/verify-counselor-login.cjs [email] [password]
 * 인자 생략 시 기본값은 로컬 시드 계정(운영 비밀번호 노출 방지를 위해 운영 전 기본 인자 제거 권장). */
const { readFileSync, existsSync } = require("fs");
const { join } = require("path");

const root = join(__dirname, "..");
const envPath = join(root, ".env");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i === -1) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
      v = v.slice(1, -1);
    if (process.env[k] === undefined) process.env[k] = v;
  }
}

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const email = (process.argv[2] || "smart1212@maeum.local").trim().toLowerCase();
const password = process.argv[3] || "!Q2w3e4r5t";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.counselorAccount.findUnique({ where: { email } });
  if (!user) {
    console.error("FAIL: no user for", email);
    process.exit(1);
  }
  const ok = await bcrypt.compare(password, user.passwordHash);
  console.log(ok ? "OK bcrypt compare" : "FAIL bcrypt compare", { email: user.email, name: user.name });
  process.exit(ok ? 0 : 1);
}

main().finally(() => prisma.$disconnect());
