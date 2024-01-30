import { get, post, postCusPLApp } from "../../utils/httpInterceptor";
import { notification } from "antd";

// get flags
export const checkAANameBre = async (data) => {
  const response = await post(`/lfi/acctAggregator/checkAANameBre`, {
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
export const redirectAA = async (data) => {
  const response = await post(`/lfi/acctAggregator/redirectAA`, {
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

export const skipAA = async (data) => {
  const response = await post(`/lfi/acctAggregator/skipAA`, {
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
export const getBankName = async (data) => {
  const response = await post(`/lfi/bankDetails/getBankName`, {
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
export const saveBankNotListed = async (data) => {
  const response = await post(`/lfi/bankDetails/saveBankNotListed`, {
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

// // get flags
// export const redirectAA = async (data) => {
//   const response = await postCusPLApp(`/pl/acctAggregator/redirectAA`, {
//     ...data,
//   });
//   if (!response.data.error) {
//     // notification.success({ message: response.data.message });
//     return response.data;
//   } else {
//     // notification.error({ message: response.data.message });
//     return response.data;
//   }
// };
