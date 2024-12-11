export const validateLogin = (username: string, password: string) => {
  if (!username || !password) {
    return { isValid: false, message: "Both fields are required!" };
  }
  if (password.length < 6) {
    return { isValid: false, message: "Password must be at least 6 characters." };
  }
  return { isValid: true, message: "" };
};