import { post } from "../../utils/httpInterceptor";

export const getPanDeatils = async (data) => {
  const response = await post(`/lfi/aadhaarPan/getPanDeatils`, {
    ...data,
  });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response?.data;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};

// ocr pan

export const getAadhaarDeatils = async (data) => {
  const response = await post(`/lfi/aadhaarPan/getAadhaarDeatils`, {
    ...data,
  });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response?.data;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};
export const aadhaarPanOcr = async (data) => {
  const response = await post(`/lfi/aadhaarPan/aadhaarPanOcr`, {
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

export const aadhaarPanOcrForCheckDocuments = async (data) => {
  const response = await post(`/lfi/aadhaarPan/getcheckUploadDocument`, {
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
