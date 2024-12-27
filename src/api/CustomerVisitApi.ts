// api/customerVisitApi.ts

import { CustomerVisit } from "../types/meterreadingvisits";
import { BaseAPIHelper } from "./ApiBaseHelper";

export const customerVisitApi = {
  // List all customer visits
  getCustomerVisits: async () => {
    try {
      const response = await BaseAPIHelper(
        "GET",
        `/meters/visits/customer-visits/`
      );
      return response;
    } catch (error) {
      console.error("Error in getCustomerVisits:", error);
      throw error;
    }
  },

  // Get specific customer visit
  getCustomerVisit: async (id: number) => {
    try {
      const response = await BaseAPIHelper(
        "GET",
        `/meters/visits/customer-visits/${id}/`
      );
      return response;
    } catch (error) {
      console.error("Error in getCustomerVisit:", error);
      throw error;
    }
  },

  // Create new customer visit
  createCustomerVisit: async (data: Partial<CustomerVisit>) => {
    try {
      const response = await BaseAPIHelper(
        "POST",
        `/meters/visits/customer-visits/`,
        data
      );
      return response;
    } catch (error) {
      console.error("Error in createCustomerVisit:", error);
      throw error;
    }
  },

  // Update customer visit
  updateCustomerVisit: async (id: number, data: Partial<CustomerVisit>) => {
    try {
      const response = await BaseAPIHelper(
        "PATCH",
        `/meters/visits/customer-visits/${id}/`,
        data
      );
      return response;
    } catch (error) {
      console.error("Error in updateCustomerVisit:", error);
      throw error;
    }
  },

  // Delete customer visit
  deleteCustomerVisit: async (id: number) => {
    try {
      await BaseAPIHelper("DELETE", `/meters/visits/customer-visits/${id}/`);
    } catch (error) {
      console.error("Error in deleteCustomerVisit:", error);
      throw error;
    }
  },

  // Upload meter reading image
  uploadReadingImage: async (id: number, imageFile: File) => {
    try {
      const formData = new FormData();
      formData.append("reading_image", imageFile);

      const response = await BaseAPIHelper(
        "POST",
        `/meters/visits/customer-visits/${id}/upload_reading_image/`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } } // Set multipart/form-data
      );
      return response;
    } catch (error) {
      console.error("Error in uploadReadingImage:", error);
      throw error;
    }
  },

  // Bulk update status
  bulkUpdateStatus: async (id: number, status: string) => {
    try {
      const response = await BaseAPIHelper(
        "POST",
        `/meters/visits/customer-visits/${id}/bulk_update_status/`,
        { status }
      );
      return response;
    } catch (error) {
      console.error("Error in bulkUpdateStatus:", error);
      throw error;
    }
  },
};
