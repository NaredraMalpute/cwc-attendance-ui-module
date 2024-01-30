import { post } from "../utils/httpInterceptor";
import { notification } from "antd";

// cash offer page - select emi -get amount

export const getCashOffer = async (data) => {
  const response = await post(`/pl/loanapprovedapi/getCashOffer`, {
    ...data,
  });
  if (!response.data.error) {
  // notification.success({ message: response.data.message });
    return response.data;
  } else {
    // notification.error({ message: response.data.message });
    return response.data;
  }
};
