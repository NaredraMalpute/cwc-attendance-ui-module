import { post } from "../utils/httpInterceptor";
import { notification } from "antd";

export const getPanDeatils = async (data) => {
  const response = await post(`/pl/karzaotherapi/getPanDeatils`, {
    ...data,
  });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response?.data;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};

export const getAddressDeatils = async (data) => {
  const response = await post(`/pl/personalLoan/getAddressDeatils`, {
    ...data,
  });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response?.data;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};


export const getDocumentVerificationsFlag = async (data) => {
  const response = await post(
    `/pl/karzaotherapi/getDocumentVerificationsFlag`,
    {
      ...data,
    }
  );
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response?.data;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};




