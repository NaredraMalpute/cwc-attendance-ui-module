import { post } from "../utils/httpInterceptor";
import { notification } from "antd";


export const fetchPersonalDetails = async (data) => {
  const response = await post(`/pl/personalLoan/getPersonalKycAddressDetails`, {
    ...data,
  });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response.data.data;
  } else {
    // notification.error({ message: response.data.message });
    return response?.data.data;
  }
};

export const saveVerifyPersonalDetails = async (data) => {
  const response = await post(
    `/pl/personalLoan/saveUpdateCurrentAddressDetails`,
    {
      ...data,
    }
  );
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};
