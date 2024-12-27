import { BaseAPIHelper } from "./ApiBaseHelper";
import { RegisteredCustomer } from "../types/RegisteredCustomer.ts";

interface CustomerAPIResponse {
  results: any[];
  total_records: number;
  current_page: number;
  page_size: number;
}

interface RegisterCustomerResponse {
  message: string;
  customer_id: number;
}

interface ErrorResponse {
  error: string;
}

interface CustomerFilterParams {
  status?: string;
  payment_status?: string;
  search?: string;
}
// Fetch customers with pagination and filtering using BaseAPIHelper
export const fetchCustomersFromAPI = async (
  page: number = 1,
  pageSize: number = 20,
  filters: CustomerFilterParams = {}
): Promise<CustomerAPIResponse> => {
  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
      ...filters,
    });

    // Remove any undefined or empty string parameters
    Array.from(queryParams.entries()).forEach(([key, value]) => {
      if (value === undefined || value === "") {
        queryParams.delete(key);
      }
    });

    const url = `/customers?${queryParams.toString()}`;
    return await BaseAPIHelper("GET", url);
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

// Function to register a customer
export const registerCustomer = async (
  customerData: RegisteredCustomer
): Promise<RegisterCustomerResponse | ErrorResponse> => {
  try {
    // Log the customer data being sent to the API
    console.log("Registering customer with data:", customerData);

    return await BaseAPIHelper(
      "POST",
      `/customers/register-customer/`,
      customerData
    );
  } catch (error) {
    console.error("Error registering customer:", error); // Log the error
    return { error: "Failed to register customer: " + error };
  }
};
