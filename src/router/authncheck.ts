export function isAuthenticated() {
  console.log()
  return 
}

export function isUser() {
  try {
    console.log(JSON.parse(localStorage.getItem("user")))
    const user = JSON.parse(localStorage.getItem("user"));
    return user.auth.info.role === 'USER'
  } catch {
    return false
  }
}

export function isAdmin() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.auth.info.role === 'ADMIN'
  } catch {
    return false;
  }
}