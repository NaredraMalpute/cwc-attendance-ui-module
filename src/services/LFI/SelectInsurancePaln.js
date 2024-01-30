///'
import { get, post } from "../../utils/httpInterceptor";

export const planDetailsAndFeatures = async (data) => {
  const response = await post(`/lfi/planDetails/planDetailsAndFeatures`, {
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

export const coveredMembers = async (data) => {
  const response = await post(`/lfi/planDetails/coveredMembers`, {
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

export const savePremiumDetails = async (data) => {
  const response = await post(`/lfi/planDetails/savePremiumDetails`, {
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
