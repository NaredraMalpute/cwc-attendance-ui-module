import { post } from "../utils/httpInterceptor";
import { notification } from "antd";

export const saveSelectedEMIDetails = async (data) => {
  const response = await post(`/pl/loanapprovedapi/saveLoanEmi`, {
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
