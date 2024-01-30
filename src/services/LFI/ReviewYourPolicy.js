import { get, post } from "../../utils/httpInterceptor";

export const reviewYourPolicy = async (data) => {
  const response = await post(`/lfi/lfi/reviewYourPolicy`, {
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
