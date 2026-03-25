/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

/** 로그인 ID smart1212 → DB에는 smart1212@maeum.local 로 저장 */
const SMART_LOGIN_EMAIL = "smart1212@maeum.local";
/** !Q2w3e4r5t 의 bcrypt 해시(평문은 저장소에 넣지 않음). 변경 시: node -e "require('bcryptjs').hash('새비번',10).then(console.log)" */
const SMART_LOGIN_HASH =
  "$2b$10$zTWfI2BGTgO0EGUGXxvVt.3bjZbYyWBGGFN8qTguuhpNOnemsNYBu";

async function main() {
  const smartHash =
    process.env.SMART1212_SEED_PASSWORD != null && String(process.env.SMART1212_SEED_PASSWORD) !== ""
      ? await bcrypt.hash(String(process.env.SMART1212_SEED_PASSWORD), 10)
      : SMART_LOGIN_HASH;

  const email = process.env.COUNSELOR_SEED_EMAIL || "counselor@maeum.local";
  const password = process.env.COUNSELOR_SEED_PASSWORD || "changeme123!";
  const hash = await bcrypt.hash(password, 10);
  await prisma.counselorAccount.upsert({
    where: { email },
    update: { passwordHash: hash },
    create: {
      email,
      passwordHash: hash,
      name: "상담 관리자",
    },
  });
  console.log("Seeded counselor:", email);

  await prisma.counselorAccount.upsert({
    where: { email: SMART_LOGIN_EMAIL },
    update: { passwordHash: smartHash, name: "상담사 (smart1212)" },
    create: {
      email: SMART_LOGIN_EMAIL,
      passwordHash: smartHash,
      name: "상담사 (smart1212)",
    },
  });
  console.log(
    "Seeded counselor:",
    SMART_LOGIN_EMAIL,
    "(로그인: 이메일 또는 아이디 smart1212)",
  );
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
