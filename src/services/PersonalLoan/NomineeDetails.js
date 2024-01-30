import { post } from "../utils/httpInterceptor";
import { notification } from "antd";

export const saveUpdateNomineeDetails = async (data) => {
  const response = await post(`/pl/nomineeDetails/saveUpdateNomineeDetails`, {
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

export const getNomineeDetails = async (data) => {
  const response = await post(`/pl/nomineeDetails/getNomineeDetails`, {
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
