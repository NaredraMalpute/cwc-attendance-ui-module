import { get, post } from "../../utils/httpInterceptor";
import { notification } from "antd";

export const saveMemberSelection = async (data) => {
  const response = await post(`/lfi/members/saveMemberSelection`, {
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

export const getMemberSelection = async (data) => {
  const response = await get(
    `/lfi/members/getMemberSelection?applicantUniqId=${data.applicantUniqId}`,
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
