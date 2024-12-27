// api/employeeApi.ts

import { BaseAPIHelper } from "./ApiBaseHelper";

 
export const employeeApi = {
  getEmployees: async () => {
    try {
      const response = await BaseAPIHelper(
        "GET",
        `/users/userlist`
      );
      // Log the raw response to see its structure
      console.log('BaseAPIHelper Response:', {
        fullResponse: response,
        responseType: typeof response,
        hasDataProp: 'data' in response,
        keys: Object.keys(response),
      });
      
      return response;
    } catch (error) {
      console.error("Error in getEmployees:", {
        error,
        errorType: typeof error,

      });
      throw error;
    }
    },
    

};