import { post, get } from "../../utils/httpInterceptor";
import { notification } from "antd";

// get consent
export const esignRequest = async (data) => {
  const response = await post(`/lfi/signagreementapi/esignRequest`, {
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
// get getAgreementDetails
export const getAgreementDetails = async (data) => {
  const response = await get(
    `/lfi/signagreementapi/getAgreementDetails?applicantUniqId=${data?.applicantUniqId}`,
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
