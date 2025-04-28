export function validateLoginForm(user) {
  if (!user.username || user.username.length < 3) {
    return 'Username must be at least 3 characters long';
  }
  if (!user.password || user.password.length < 6) {
    return 'Password must be at least 6 characters long';
  }
  return null;
}
