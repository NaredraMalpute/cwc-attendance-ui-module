import { post } from "../utils/httpInterceptor";
import { notification } from "antd";

export const loanSummaryDetails = async (data) => {
  const response = await post(
    `/pl/loanapprovedapi/loansummaryRepaymentSchedule`,
    { ...data }
  );
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};
export const saveLoanSummaryProceed = async (data) => {
  const response = await post(`/pl/loanapprovedapi/saveLoanSummaryProceed`, {
    ...data,
  });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};

export const getcheckUploadDocument = async (data) => {
  const response = await post(
    `/pl/checkUploadDocument/getcheckUploadDocument`,
    { ...data }
  );
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};
