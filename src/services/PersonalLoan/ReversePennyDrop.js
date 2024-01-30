import { post } from "../../utils/httpInterceptor";
import { notification } from "antd";

export const createReversePennyDrop = async (data) => {
  const response = await post(
    `/lfi/reversepenny-api/create-reverse-penny-drop`,
    {
      ...data,
    }
  );
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};

export const mockPayment = async (data) => {
  const response = await post(`/lfi/reversepenny-api/mock-payment`, {
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

export const getDetailsApi = async (data) => {
  const response = await post(`/lfi/reversepenny-api/get-details-api`, {
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
