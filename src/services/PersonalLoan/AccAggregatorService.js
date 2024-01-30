import { get,post } from "../../utils/httpInterceptor";
import { notification } from "antd";


// get consent
export const acctAggregatorRequestConsent = async (data) => {
  const response = await post(
    `/pl/finanalysisapi/acctAggregatorRequestConsent`,
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

// get Web Redirection Url
export const getWebRedirectionUrl = async (data) => {
  const response = await post(`/pl/finanalysisapi/getWebRedirectionUrl`, {
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

// get DecryptUrl
export const getDecryptUrl = async (data) => {
  const response = await post(`/pl/finanalysisapi/getDecryptUrl`, {
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
// get consent
export const getAAConsentStatus = async (data) => {
  const response = await post(`/pl/finanalysisapi/getAAConsentStatus`, {
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

// get flags
export const checkAANameAddressBre = async (data) => {
  const response = await post(`/pl/finanalysisapi/checkAANameAddressBre`, {
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
