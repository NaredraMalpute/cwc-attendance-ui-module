import { post } from "../../utils/httpInterceptor";
import { notification } from "antd";

export const getAccountDetails = async (data) => {
  const response = await post(`/lfi/bankDetails/getAccountDetails`, {
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
