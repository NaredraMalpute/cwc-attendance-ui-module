import { get, post } from "../../utils/httpInterceptor";

export const planActive = async (data) => {
  const response = await post(`/lfi/planDetails/planActive`, {
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

export const getBenifitDetails = async (data) => {
  const response = await post(`/lfi/lfi/getBenifitDetails`, {
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

export const getDetailsHealthCard = async (data) => {
  const response = await post(`/lfi/HealthCard/getDetails`, {
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

export const getDocument = async (data) => {
  const response = await post(`/lfi/policyDocument/getDocument`, {
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

export const getEMICalender = async (data) => {
  const response = await post(`/lfi/emiService/getEMICalender`, {
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
