///'
import { get, post } from "../../utils/httpInterceptor";

export const reviewYourPolicy = async (data) => {
  const response = await post(`/lfi/planDetails/reviewYourPolicy`, {
    ...data,
  });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response.data;
  } else {
    // notification.error({ message: response.data.message });
    return response?.data;
  }
};

export const getPremiumPaymentSelection = async (data) => {
  const response = await post(`/lfi/planDetails/getPremiumPaymentSelection`, {
    ...data,
  });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response.data;
  } else {
    // notification.error({ message: response.data.message });
    return response?.data;
  }
};

export const savePremiumDetails = async (data) => {
  const response = await post(`/lfi/planDetails/savePremiumDetails`, {
    ...data,
  });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response.data;
  } else {
    // notification.error({ message: response.data.message });
    return response?.data;
  }
};
