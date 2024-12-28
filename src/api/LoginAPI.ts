import { BaseAPIHelper } from "./ApiBaseHelper";

export interface LoginCredentials {
  username: string;
  password: string;
}

interface LoginResponse {
  access: string;
  refresh: string;
  user_id: number;
  email: string;
}

interface ErrorResponse {
  detail: string;
}

export const getLoggedInUser = async (
    credentials: LoginCredentials
): Promise<LoginResponse | ErrorResponse> => {
  const hardcodedUsername = "admin";
  const hardcodedPassword = "12345";

  // Simulate login verification
  if (
      credentials.username === hardcodedUsername &&
      credentials.password === hardcodedPassword
  ) {
    return {
      access: "fakeAccessToken",
      refresh: "fakeRefreshToken",
      user_id: 1,
      email: "admin@example.com",
    };
  }

  return { detail: "Invalid username or password" };
};


export const getPasswordResetLink = async (
  email: string
) => {
  try {
    const response = await BaseAPIHelper("POST", `/users/password-reset/`, {
      email
    });
    return response;
  } catch (e) {
    return "An error occurred: "+e;
  }
};