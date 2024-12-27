import axios, { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse,AxiosError } from "axios";
import { AWBS_URL } from "../constants/AppConstant";

const apiClient = axios.create({
  baseURL: `${AWBS_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const token = localStorage.getItem("accessToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config; 
  },
  (error) => {
    return Promise.reject(error); 
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response, 
  async (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear(); 
      window.location.href = ""; 
    }
    return Promise.reject(error); 
  }
);

export const BaseAPIHelper = async   (
  method: "GET" | "POST" | "PUT" | "DELETE"|"PATCH",
  url: string,
  data?: any,
  config: AxiosRequestConfig = {}
) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return handleAxiosError(error); 
    } else {
      logError(error);
      throw new Error("An unexpected error occurred. Please try again later.");
    }
  }
};

const handleAxiosError = (error: AxiosError) => {
  const status = error.response?.status;

  if (status === 400) {
    throw new Error("Invalid request. Please check your input.");
  } else if (status === 401) {
    throw new Error("Unauthorized. Please log in to continue.");
  } else if (status === 403) {
    throw new Error("You do not have permission to perform this action.");
  } else if (status === 404) {
    throw new Error("The requested resource was not found.");
  } else if (status === 500) {
    throw new Error("A server error occurred. Please try again later.");
  } else if (status) {
    throw new Error(`Request failed with status ${status}. Please try again.`);
  } else {
    logError(error);
    throw new Error("Network error. Please check your internet connection.");
  }
};

const logError = (error: any) => {
  console.error("Error logged:", error); 
};