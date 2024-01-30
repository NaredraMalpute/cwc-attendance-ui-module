import { post } from "../utils/httpInterceptor";
import { notification } from "antd";

export const registerEnach = async (data) => {
  const response = await post(`/pl/enachapi/registerEnach`, {
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

export const toValidateVpa = async (data) => {
  const response = await post(`/pl/enachapi/toValidateVpa`, {
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

export const createMandateForVpa = async (data) => {
  const response = await post(`/pl/enachapi/createMandateForVpa`, {
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

export const getCampsPayEnachResponseStatus = async (data) => {
  const response = await post(`/pl/enachapi/getCampsPayEnachResponseStatus`, {
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
