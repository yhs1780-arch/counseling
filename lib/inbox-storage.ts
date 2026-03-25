/** 브라우저 로컬 공유 inbox (데모). 실서비스는 서버 DB·웹훅으로 교체하세요. */

export const INBOX_KEY = "maeum_inbox_v1";
export const VISITOR_SESSION_KEY = "maeum_visitor_id";

export type InboxMessage = {
  role: "visitor" | "system";
  text: string;
  at: number;
};

export type InboxThread = {
  id: string;
  updatedAt: number;
  messages: InboxMessage[];
};

export type InboxStore = {
  threads: InboxThread[];
};

function load(): InboxStore {
  if (typeof window === "undefined") return { threads: [] };
  try {
    const raw = localStorage.getItem(INBOX_KEY);
    if (!raw) return { threads: [] };
    const p = JSON.parse(raw) as InboxStore;
    if (!p.threads) return { threads: [] };
    return p;
  } catch {
    return { threads: [] };
  }
}

function save(store: InboxStore) {
  if (typeof window === "undefined") return;
  localStorage.setItem(INBOX_KEY, JSON.stringify(store));
}

export function getOrCreateVisitorId(): string {
  if (typeof window === "undefined") return "server";
  let id = sessionStorage.getItem(VISITOR_SESSION_KEY);
  if (!id) {
    id = `v_${crypto.randomUUID()}`;
    sessionStorage.setItem(VISITOR_SESSION_KEY, id);
  }
  return id;
}

export function appendVisitorMessage(text: string): InboxThread {
  const vid = getOrCreateVisitorId();
  const store = load();
  let thread = store.threads.find((t) => t.id === vid);
  const msg: InboxMessage = { role: "visitor", text, at: Date.now() };
  if (!thread) {
    thread = { id: vid, updatedAt: Date.now(), messages: [msg] };
    store.threads.unshift(thread);
  } else {
    thread.messages.push(msg);
    thread.updatedAt = Date.now();
    store.threads = [thread, ...store.threads.filter((t) => t.id !== vid)];
  }
  save(store);
  return thread;
}

export function addSystemReply(threadId: string, text: string) {
  const store = load();
  const thread = store.threads.find((t) => t.id === threadId);
  if (!thread) return;
  thread.messages.push({ role: "system", text, at: Date.now() });
  thread.updatedAt = Date.now();
  save(store);
}

export function getAllThreads(): InboxThread[] {
  return load().threads.sort((a, b) => b.updatedAt - a.updatedAt);
}
