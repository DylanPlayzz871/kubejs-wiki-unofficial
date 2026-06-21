export function getUserId() {
  if (typeof window === "undefined") {
    return "ssr-user"; // server-safe fallback
  }

  let id = localStorage.getItem("kubejs-user-id");

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("kubejs-user-id", id);
  }

  return id;
}