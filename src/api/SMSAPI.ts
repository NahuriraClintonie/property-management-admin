
import { FeeAdjustment } from "../types/FeeAdjustment";
import { BaseAPIHelper } from "./ApiBaseHelper";


export const sendSMSAPI = async (id: number) => {
    try {
        const response = await BaseAPIHelper("POST", `/billing/bill/send-reminders/${id}/`);
    
        return response;
      } catch (e) {
        console.error("Error during Sending message: ", e);
        return "An error occurred" ;
      }
};
export const sendBulkSMSAPI = async (data: FeeAdjustment) => {
    try {
        const response = await BaseAPIHelper("POST", `/billing/fee-adjustment-notice/`, data);
    
        return response;
      } catch (e) {
        console.error("Error during bulky messaging: ", e);
        return "An error occurred" ;
      }
};