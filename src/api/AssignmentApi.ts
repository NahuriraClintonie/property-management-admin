import { Assignment } from "../types/meterreadingvisits";
import { BaseAPIHelper } from "./ApiBaseHelper";

export const assignmentApi = {
  // List all assignments
  getAssignments: async () => {
    try {
      const response = await BaseAPIHelper(
        "GET",
        `/meters/visits/assignments/`
      );
      return response;
    } catch (error) {
      console.error("Error in getAssignments:", error);
      throw error;
    }
  },

  // Get specific assignment
  getAssignment: async (id: number) => {
    try {
      const response = await BaseAPIHelper(
        "GET",
        `/meters/visits/assignments/${id}/`
      );
      return response;
    } catch (error) {
      console.error("Error in getAssignment:", error);
      throw error;
    }
  },

  // Create new assignment
  createAssignment: async (data: Partial<Assignment>) => {
    try {
      const response = await BaseAPIHelper(
        "POST",
        `/meters/visits/assignments/`,
        data
      );
      return response;
    } catch (error) {
      console.error("Error in createAssignment:", error);
      throw error;
    }
  },

  // Update assignment
  updateAssignment: async (id: number, data: Partial<Assignment>) => {
    try {
      const response = await BaseAPIHelper(
        "PATCH",
        `/meters/visits/assignments/${id}/`,
        data
      );
      return response;
    } catch (error) {
      console.error("Error in updateAssignment:", error);
      throw error;
    }
  },

  // Delete assignment
  deleteAssignment: async (id: number) => {
    try {
      await BaseAPIHelper("DELETE", `/meters/visits/assignments/${id}/`);
    } catch (error) {
      console.error("Error in deleteAssignment:", error);
      throw error;
    }
  },

  // Get dashboard statistics
  getDashboardStats: async () => {
    try {
      const response = await BaseAPIHelper(
        "GET",
        `/meters/visits/assignments/dashboard_stats/`
      );
      return response;
    } catch (error) {
      console.error("Error in getDashboardStats:", error);
      throw error;
    }
  },

  // Get today's assignments
  getTodayAssignments: async () => {
    try {
      const response = await BaseAPIHelper(
        "GET",
        `/meters/visits/assignments/today/`
      );
      return response;
    } catch (error) {
      console.error("Error in getTodayAssignments:", error);
      throw error;
    }
  },

  // Bulk assign customers
  bulkAssignCustomers: async (id: number, customerIds: number[]) => {
    try {
      console.log("bulkAssignCustomers:", { id, customerIds });
      const response = await BaseAPIHelper(
        "POST",
        `/meters/visits/assignments/${id}/bulk_assign_customers/`,
        { customer_data: customerIds }
      );
      return response;
    } catch (error) {
      console.error("Error in bulkAssignCustomers:", error);
      throw error;
    }
  },

  getCustomersList: async (localGovernmentId: number) => {
    try {
      // Ensure localGovernmentId is a number and convert it to string
      const params = new URLSearchParams({
        local_government: localGovernmentId.toString(),
      });

      return await BaseAPIHelper(
        "GET",
        `/customers/getCustomerByLocalGov/?${params.toString()}`
      );
    } catch (error) {
      console.error("Error fetching customers list:", error);
      throw error;
    }
  },
};
