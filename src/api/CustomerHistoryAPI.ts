import { BaseAPIHelper } from "./ApiBaseHelper";


export const getHistoryById = async (id: number) => {
  try {
    return await BaseAPIHelper(
      "GET", 
      `/customers/${id}/all-records/`
    );
  } catch (error) {
    console.error(`Error fetching history for customer ID: ${id}`, error);
  }
};