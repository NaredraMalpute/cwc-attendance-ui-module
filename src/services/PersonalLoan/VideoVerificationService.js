import { post } from "../utils/httpInterceptor";
import { notification } from "antd";

export const videoVerificationLink = async (data) => {
  const response = await post(`/pl/karzaotherapi/videoVerificationLink`, {
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
export const videoVerificationResults = async (data) => {
  const response = await post(`/pl/karzaotherapi/videoVerificationResults`, {
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

export const saveVideoVerificationSuccess = async (data) => {
  const response = await post(
    `/pl/karzaotherapi/saveVideoVerificationSuccess`,
    {
      ...data,
    }
  );
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response.data.data;
  } else {
    // notification.error({ message: response.data.message });
    return response?.data.data;
  }
};
export const getVideoVerificationResults = async (data) => {
  const response = await post(`/pl/karzaotherapi/getVideoVerificationResults`, {
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


