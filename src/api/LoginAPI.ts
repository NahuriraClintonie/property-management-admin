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

  try {
    const response = await BaseAPIHelper("POST", `/users/login/`, credentials);
    return response;
  } catch (e) {
    return { detail: "An error occurred" };
  }
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
    return "An error occurred";
  }
};