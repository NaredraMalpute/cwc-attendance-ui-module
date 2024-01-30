import { get, post } from "../../utils/httpInterceptor";
import { notification } from "antd";

export const saveMemberDetails = async (data) => {
  const response = await post(`/lfi/members/saveMemberDetails`, {
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

export const getMemberDetails = async (data) => {
  // console.log(data);
  const response = await get(
    `/lfi/members/getMemberDetails?applicantUniqId=${data.applicantUniqId}`,
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
