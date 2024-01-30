import { post } from "../utils/httpInterceptor";
import { notification } from "antd";

export const getLoanDetails = async (data, headers) => {
  const response = await post(
    `/pl/personalLoan/getLoanDetails`,
    {
      ...data,
    },
    false,
    headers
  );
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};
