import { post, postCusPLApp } from "../../utils/httpInterceptor";

// get consent
export const generateToken = async (data, headers) => {
  const response = await post(`/lfi/lfi/generateToken`, {
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

export const customerDataMigrationByMobileNo = async (data, headers) => {
  const response = await post(`/lfi/lfi/customerDataMigrationByMobileNo`, {
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

export const checkVintageAndRunBRE = async (data, headers) => {
  const response = await post(`/lfi/dataVerification/checkVintageAndRunBRE`, {
    ...data,
  });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response.data.data;
  } else {
    // notification.error({ message: response.data.message });
    return response.data.data;
  }
};

export const getCaseDetails = async (data, headers) => {
  const response = await post(`/lfi/fosStatus/getCaseDetails`, {
    ...data,
  });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response.data.data;
  } else {
    // notification.error({ message: response.data.message });
    return response.data.data;
  }
};
