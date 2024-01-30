import { post } from "../../utils/httpInterceptor";
import { notification } from "antd";

export const getPersonalDetails = async (data) => {
  const response = await post(`/lfi/personalDetails/getPersonalDetails`, {
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

export const saveUpdatePersonalDetails = async (data) => {
  const response = await post(
    `/lfi/personalDetails/saveUpdatePersonalDetails`,
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
