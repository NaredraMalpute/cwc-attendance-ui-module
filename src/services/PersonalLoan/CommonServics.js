import { post, postApi } from "../utils/httpInterceptor";


// get consent
export const getDataByMobileNo = async (data, headers) => {
  const response = await post(
    `/pl/customer/getDataByMobileNo`,
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

// get consent
export const getPLCustomerDataByMobileNo = async (data, headers) => {
  const response = await post(`/pl/personalLoan/getPLCustomerDataByMobileNo`, {
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
export const getJourneyStages = async (data) => {
  const response = await post(`/pl/personalLoan/getJourneyStages`, {
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
// get cash 
export const saveGetCashOffer = async (data) => {
  const response = await post(`/pl/loanapprovedapi/saveGetCashOffer`, {
    ...data,
  });
  // const response = await post(`/pl/sbi/proceesPayment`, {
  //   ...data,
  // });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response.data;
  } else {
    // notification.error({ message: response.data.message });
    return response.data;
  }
};// submit too lms 
export const submitToLms = async (data) => {
  const response = await post(`/pl/lms/submitToLms`, {
    ...data,
  });
  // const response = await post(`/pl/sbi/proceesPayment`, {
  //   ...data,
  // });
  if (!response.data.error) {
    // notification.success({ message: response.data.message });
    return response.data;
  } else {
    // notification.error({ message: response.data.message });
    return response.data;
  }
};
