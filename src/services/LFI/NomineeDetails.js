import { get, post } from "../../utils/httpInterceptor";
import { notification } from "antd";

export const saveUpdateNomineeDetails = async (data) => {
  const response = await post(`/lfi/nomineeDetails/saveUpdateNomineeDetails`, {
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
  const response = await post(`/lfi/nomineeDetails/getNomineeDetails`, {
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
