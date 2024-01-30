import { post } from "../utils/httpInterceptor";
import { notification } from "antd";

export const saveUpdateOtherPersonDetails = async (data) => {
  const response = await post(
    `/pl/otherPersonalDetails/saveUpdateOtherPersonDetails`,
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

export const getOtherPersonDetails = async (data) => {
  const response = await post(
    `/pl/otherPersonalDetails/getOtherPersonDetails`,
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
