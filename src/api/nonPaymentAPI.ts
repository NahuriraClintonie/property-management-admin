// src/api/nonPaymentAPI.ts

import { nonPayment } from "../types/nonPayment"; 
import { BaseAPIHelper } from "./ApiBaseHelper";

// src/api/nonPaymentAPI.ts
export const fetchNonPayments = async (page: number = 1) => {
    try {
        const response = await BaseAPIHelper(
            "GET", 
            `/billing/non-payment-management/?page=${page}`  // Make sure this matches your API endpoint
          // response from the api
        );

      
        return response;
    } catch (e) {
        console.error("Error fetching non-payments: ", e);
        throw new Error("Failed to fetch non-payments.");
    }
};

export const updateNonPayment = async (id: number, data: any) => {
    try {
        const response = await BaseAPIHelper(
            "PATCH", 
            `/billing/non-payment-management/${id}/`,
            data
        );
        return response;
    } catch (e) {
        console.error("Error updating non-payment: ", e);
        throw new Error("Failed to update non-payment.");
    }
};

// Function to send notice for non-payment
export const sendNonPaymentNotice = async (data: nonPayment) => {
  try {
    const response = await BaseAPIHelper("POST", `/billing/send-reminders/${data.customer_id}/`, data);

    return response;
  } catch (e) {
    console.error("Error sending non-payment notice: ", e);
    throw new Error("Failed to send non-payment notice.");
  }
};

// Function to send SMS notification for non-payment
export const sendNonPaymentSMS = async (id: number) => {
  try {
    const response = await BaseAPIHelper("POST", `/billing/send-non-payment-sms/${id}`);
    return response;
  } catch (e) {
    console.error("Error sending SMS for non-payment: ", e);
    throw new Error("Failed to send non-payment SMS.");
  }
};
