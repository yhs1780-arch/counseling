/** 아이디만 입력 시 내부 이메일 키로 매핑 (DB unique는 email) */
export function normalizeCounselorLogin(raw: string): string {
  const t = raw.trim().toLowerCase();
  if (!t) return "";
  if (t.includes("@")) return t;
  return `${t}@maeum.local`;
}
