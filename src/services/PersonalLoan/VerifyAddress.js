import { get, post } from "../utils/httpInterceptor";
import { notification } from "antd";

export const getElectricityProviderList = async (data) => {
  const response = await get(
    `/pl/personalLoan/getElectricityProviderList?applicantUniqueId=${data}`,
    {
      ...data,
    }
  );
  console.log(data);
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response.data.data;
  } else {
    // notification.error({ message: response.data.message });
    return response?.data.data;
  }
};

export const saveElectricityBillDetails = async (data) => {
  const response = await post(
    `/pl/karzaotherapi/electricityBillAuthentication`,
    { ...data }
  );
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response;
  } else {
    // notification.error({ message: response.data.message });
    return response;
  }
};

export const saveLPGGasDetails = async (data) => {
  const response = await post(`/pl/karzaotherapi/lpgAuthentication`, {
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

export const savePNGGasDetails = async (data) => {
  const response = await post(`/pl/karzaotherapi/pngAuthentication`, {
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

export const savePassportDetails = async (data) => {
  const response = await post(`/pl/karzaotherapi/passportVerification`, {
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

export const saveDLDetails = async (data) => {
  const response = await post(`/pl/karzaotherapi/drivingLienceVerification`, {
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

export const saveVoterIDDetails = async (data) => {
  const response = await post(`/pl/karzaotherapi/voterIdVerification`, {
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

export const saveRentalAggrementDetails = async (data) => {
  const response = await post(`/pl/karzaotherapi/saveRentalAggreementDetails`, {
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

export const getDocumentVerificationsDetails = async (data) => {
  const response = await post(
    `/pl/karzaotherapi/getDocumentVerificationsDetails`,
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
