import { EmailData } from "../types/EmailData"; // Ensure this type matches your data structure
import { BaseAPIHelper } from "./ApiBaseHelper";

// API call to send a single email
export const sendEmailAPI = async (emailData: EmailData) => {
    try {
        const response = await BaseAPIHelper("POST", `/emails/send-email/`, emailData);
        return response;
    } catch (e) {
        console.error("Error during sending email: ", e);
        return "An error occurred";
    }
};
