import { get, post } from "../../utils/httpInterceptor";

export const getPremiumDetails = async (data) => {
  const response = await post(`/lfi/lfi/getPremiumDetails`, {
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
