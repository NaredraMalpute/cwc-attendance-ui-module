import { postCusServApp } from "../../utils/httpInterceptor";
import { notification } from "antd";

export const createConsent = async (data) => {
  const response = await postCusServApp(
    `/customerservicing/otpGenerate/createConsent`,
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

export const verifyotp = async (data) => {
  const response = await postCusServApp(
    `/customerservicing/otpGenerate/verifyotp`,
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
