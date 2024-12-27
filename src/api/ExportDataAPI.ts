import { BaseAPIHelper } from "./ApiBaseHelper";

const exportData = async (endpoint: string, filename: string) => {
  try {
    const response = await BaseAPIHelper("GET", endpoint, undefined);
    const blob = new Blob([response], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    return response;
  } catch (error) {
    console.error("Error exporting data: ", error);
    return "An error occurred while exporting data.";
  }
};

export const exportLocalGovernmentData = (id: number) => 
  exportData(`local_government/${id}/export_detail`, "local_government_details.csv");

export const exportAllData = () => 
  exportData(`local_government/export_all`, "all_data.csv");

export const exportAllCustomerData = () => 
  exportData(`/customers/export/profiles/`, "all_customer_data.csv");

export const exportSingleCustomerData = (id: number) => 
  exportData(`/customers/export/history/${id}`, "all_data_customer.csv");

export const exportAllNonPayersData = () => 
  exportData(`/billing/non-payment-management/export-csv/`, "all_non_payers_data.csv");

export const exportAllNonPayerData = (id: number) => 
  exportData(`/billing/non-payment-management/${id}/export-csv/`, "non_payer_data.csv");
