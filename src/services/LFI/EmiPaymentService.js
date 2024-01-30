//
import { post, get } from "../../utils/httpInterceptor";
import { notification } from "antd";

// get consent
export const getDetails = async (data) => {
  const response = await post(`/lfi/payment/getDetails`, {
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

export const getGenericCodeForRazorpayment = async (data) => {
  const response = await post(`/lfi/payment/getGenericCodeForRazorpayment`, {
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

export const toUpdatePaymetStatus = async (data) => {
  const response = await post(`/lfi/payment/toUpdatePaymetStatus`, {
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

// get details after finnat completed
export const getPolicyNo = async (data) => {
  const response = await post(`/lfi/finhaaat/getPolicyNo`, {
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

export const createRequest = async (data) => {
  const response = await post(`/lfi/finhaaat/createRequest`, {
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

// waiting screen - finnatfetch
export const fetch = async (data) => {
  const response = await post(`/lfi/finhaaat/fetch`, {
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

export const getTransactionDetails = async (data) => {
  const response = await post(`/lfi/payment/getTransactionDetails`, {
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
