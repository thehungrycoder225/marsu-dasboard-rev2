export function saveLoginState(user) {
  localStorage.setItem('loginState', JSON.stringify(user));
}

export function getLoginState() {
  const savedUser = localStorage.getItem('loginState');
  return savedUser ? JSON.parse(savedUser) : null;
}
