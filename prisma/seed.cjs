/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
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
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
