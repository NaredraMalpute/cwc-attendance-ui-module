import { get, post } from "../../utils/httpInterceptor";
import { notification } from "antd";

export const saveMedicalDeclaration = async (data) => {
  console.log(data.applicantUniqId);

  const response = await post(`/lfi/medical/saveMedicalDeclaration`, {
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

export const getMedicalDeclaration = async (data) => {
  const response = await get(
    `/lfi/medical/getMedicalDeclaration?applicantUniqId=${data.applicantUniqId}`,
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

export const buyNewPolicy = async (data) => {
  const response = await post(`/lfi/planDetails/buyNewPolicy`, {
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

export const saveNewMedicalDeclaration = async (data) => {
  console.log(data.applicantUniqId);

  const response = await post(`/lfi/medical/saveNewMedicalDeclaration`, {
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

export const getMedicalDeclarationNew = async (data) => {
  const response = await get(
    `/lfi/medical/getMedicalDeclaration?applicantUniqId=${data.applicantUniqId}`,
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
