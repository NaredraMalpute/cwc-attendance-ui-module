import { get, post } from "../../utils/httpInterceptor";
import { notification } from "antd";

export const getPanAadharForExistingCustomers = async (data) => {
  const response = await get(
    `/lfi/panAadhar/getPanAadharForExistingCustomers?applicantUniqId=${data.applicantUniqId}`,
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

export const enterPan = async (data) => {
  const response = await post(`/lfi/panAadhar/enterPan`, {
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

export const getPanDetails = async (data) => {
  const response = await post(`/lfi/panAadhar/getPanDetails`, {
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

export const getcheckUploadDocument = async (data) => {
  const response = await post(`/lfi/aadhaarPan/getcheckUploadDocument`, {
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
