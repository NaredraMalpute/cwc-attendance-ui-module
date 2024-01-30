import { post } from "../../utils/httpInterceptor";
import { notification } from "antd";

export const getBankDetails = async (data) => {
  const response = await post(`/lfi/bankDetails/getBankDetails`, {
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
export const verifyBankAccoutNumber = async (data) => {
  const response = await post(`/lfi/bankDetails/verifyBankAccoutNumber`, {
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
export const getBankDetailsFromIfsc = async (data) => {
  const response = await post(`/lfi/bankDetails/getBankDetailsFromIfsc`, {
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
export const saveUpdateVerifyBankDetails = async (data) => {
  const response = await post(`/lfi/bankDetails/saveUpdateVerifyBankDetails`, {
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

export const updateStageBasedOnFlag = async (data) => {
  const response = await post(`/pl/personalLoan/updateStageBasedOnFlag`, {
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
