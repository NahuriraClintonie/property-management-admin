import { BaseAPIHelper } from "./ApiBaseHelper";
import { LocalGovernmentRequest } from "../types/LocalGovernment";

export const fetchLocalGovernmentsFromAPI = async () => {
  try {
    const response = await BaseAPIHelper("GET", `/local_government/lg-view`);
    return response;
  } catch (error) {
    console.error("Error fetching local governments:", error);
    throw error;
  }
};

export const fetchLocalGovernmentHistoryFromAPI = async (
  localGovernmentId: number
) => {
  try {
    const response = await BaseAPIHelper(
      "GET",
      `/local_government/${localGovernmentId}/adjustments/`
    );
    return response.fee_adjustments;
  } catch (error) {
    console.error("Error fetching local government history:", error);
    return [];
  }
};

export const deleteLocalGovernmentFromAPI = async (
  localGovernmentId: number
) => {
  try {
    const response = await BaseAPIHelper(
      "DELETE",
      `/local_government/lg-view/${localGovernmentId}/`
    );
    return response;
  } catch (error) {
    console.error("Error deleting local government:", error);
    throw error;
  }
};

export const addLocalGovernmentFromAPI = async (
  localGovernment: LocalGovernmentRequest
) => {
  try {
    const response = await BaseAPIHelper(
      "POST",
      `/local_government/lg-view/`,
      localGovernment
    );
    return response;
  } catch (error) {
    console.error("Error adding local government:", error);
    throw error;
  }
};

export const updateLocalGovernmentFromAPI = async (
  id: number,
  localGovernment: LocalGovernmentRequest
) => {
  try {
    const response = await BaseAPIHelper(
      "PUT",
      `/local_governmentlg-view/${id}/`,
      localGovernment
    );
    return response;
  } catch (error) {
    console.error("Error updating local government:", error);
    throw error;
  }
};
