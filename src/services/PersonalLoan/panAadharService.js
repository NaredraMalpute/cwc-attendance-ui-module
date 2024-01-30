import { get, post } from "../utils/httpInterceptor";
import { notification } from "antd";

export const savePanAadharDetails = async (data) => {
  const response = await post(`/pl/karzaotherapi/aadhaarPanFetch`, {
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

export const getPanAadharForExistingCustomers = async (data) => {
  const response = await get(
    `/pl/personalLoan/getPanAadharForExistingCustomers?applicantUniqId=${data?.applicantUniqId}`,
    {
      ...data,
    }
  );
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response.data;
  } else {
    // notification.error({ message: response.data.message });
    return response.data;
  }
};
