export function getUserId() {
  let id = localStorage.getItem("wiki-user-id");

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("wiki-user-id", id);
  }

  return id;
}