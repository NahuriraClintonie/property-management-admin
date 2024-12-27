
import { FeeAdjustment } from "../types/FeeAdjustment";
import { BaseAPIHelper } from "./ApiBaseHelper";


export const adjustLocalGovernmentFee = async (data: FeeAdjustment) => {
  try {
    const response = await BaseAPIHelper("POST", `/billing/fee-adjustment-notice/`, data);

    return response;
  } catch (e) {
    console.error("Error during bulky messaging: ", e);
    return "An error occurred" ;
  }
};
