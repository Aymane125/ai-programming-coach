export function getUserId() {
  let id = localStorage.getItem('coach_user_id')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('coach_user_id', id)
  }
  return id
}