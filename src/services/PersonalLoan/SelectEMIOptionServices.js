import { get } from "../utils/httpInterceptor";
import { notification } from "antd";

export const fetchSelectEMIOption = async (data) => {
  const response = await get(
    `/pl/loanapprovedapi/selectEmi?loanAmount=${data.convertedAmount}&applicantUniqId=${data.applicantUniqueId}`,
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
