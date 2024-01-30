import { post } from "../utils/httpInterceptor";
import { notification } from "antd";

export const getJourneyStatusAndResidentType = async (data) => {
  const response = await post(`/pl/personalLoan/getJourneyStages`, {
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
