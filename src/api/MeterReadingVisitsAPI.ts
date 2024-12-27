
import { Assignment, CustomerVisit } from "../types/meterreadingvisits";
import { BaseAPIHelper } from "./ApiBaseHelper";


interface Customer {
  customer_id: number;
}

export interface GetCustomersParams {
  local_government: number;
}

export const meterReadingApi = {
  // Get all assignments
getAssignments: async () => {
    try {
        const response = await BaseAPIHelper(
            "GET",
            `/meters/visits/assignments?page=1&page_size=20`
        );
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error fetching assignments", error);
        throw error;
    }
},

  // Get dashboard stats
  getDashboardStats: async () => {
    try {
      return await BaseAPIHelper(
        "GET",
        `/meters/visits/assignments/dashboard_stats/`
      );
    } catch (error) {
      console.error("Error fetching dashboard stats", error);
      throw error;
    }
  },

  // Create new assignment
  createAssignment: async (data:Assignment ) => {
    try {
      return await BaseAPIHelper(
        "POST",
        `/meters/visits/assignments/`,
        data
      );
    } catch (error) {
      console.error("Error creating assignment", error);
      throw error;
    }
  },

  // Bulk assign customers to an assignment
  bulkAssignCustomers: async (assignmentId: number, customers: Customer[]) => {
    try {
      return await BaseAPIHelper(
        "POST",
        `/meters/visits/assignments/${assignmentId}/bulk_assign_customers/`,
        { customers }
      );
    } catch (error) {
      console.error("Error assigning customers", error);
      throw error;
    }
  },

  // Get assignment customers
  getAssignmentCustomers: async (assignmentId: number) => {
    try {
      return await BaseAPIHelper(
        "GET",
        `/meters/visits/customer-visits/?assignment=${assignmentId}`
      );
    } catch (error) {
      console.error("Error fetching assignment customers", error);
      throw error;
    }
  },

  // Update assignment customer
  updateAssignmentCustomer: async (id: number, data: Partial<CustomerVisit>) => {
    try {
      return await BaseAPIHelper(
        "PATCH",
        `/meters/visits/customer-visits/${id}/`,
        data
      );
    } catch (error) {
      console.error("Error updating assignment customer", error);
      throw error;
    }
  },

  // Bulk update customer statuses
  bulkUpdateStatus: async (assignmentId: number, status: string) => {
    try {
      return await BaseAPIHelper(
        "POST",
        `/meters/visits/customer-visits/${assignmentId}/bulk_update_status/`,
        { status }
      );
    } catch (error) {
      console.error("Error updating customer statuses", error);
      throw error;
    }
  },

  // Upload reading image
  uploadReadingImage: async (visitId: number, image: File) => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      
      return await BaseAPIHelper(
        "POST",
        `/meters/visits/customer-visits/${visitId}/upload_reading_image/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    } catch (error) {
      console.error("Error uploading reading image", error);
      throw error;
    }
  },
  
  getCustomersList: async (localGovernmentId: number) => {
    try {
      // Ensure localGovernmentId is a number and convert it to string
      const params = new URLSearchParams({
        local_government: localGovernmentId.toString()
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