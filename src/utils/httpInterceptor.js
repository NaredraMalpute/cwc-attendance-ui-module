/* eslint-disable eqeqeq */
import axios from "axios";
import Cookies from "js-cookie";
// import { notification } from "antd";

const PORT = "7081";
const PORT_FE = "5005";
const PORT_CusAPP = "9001";
const PORT_PL = "7061";

export const BASEIP =
  process.env.REACT_APP_ENV == "devlopment" ? "34.93.206.215" : "65.0.9.61";

export const BASE =
  process.env.REACT_APP_ENV == "devlopment"
    ? "http://34.93.206.215"
    : "http://65.0.9.61";

export const BASE_CusApp =
  process.env.REACT_APP_ENV == "devlopment"
    ? "http://34.93.206.215"
    : "http://13.126.101.33";

export const baseURL =
  process.env.REACT_APP_ENV == "devlopment"
    ? `${BASE}:${PORT}`
    : `${BASE}:${PORT}`;

const baseURLCusApp =
  process.env.REACT_APP_ENV == "devlopment"
    ? `${BASE_CusApp}:${PORT_CusAPP}`
    : `${BASE_CusApp}:${PORT_CusAPP}`;

const baseURLPLApp =
  process.env.REACT_APP_ENV == "devlopment" ? `${BASE}:${PORT_PL}` : `${BASE}`;

const handleError = (err) => {
  const errorResponse = {
    data: { message: "Something went wrong.", error: true },
  };

  const { response } = err;
  if (response?.status === 500) {
    const FrontendURL = `${window.location.protocol}//${window.location.hostname}`;
    const REDIRECT_URL =
      process.env.REACT_APP_ENV == "devlopment"
        ? `${FrontendURL}:${PORT_FE}`
        : `${FrontendURL}`;

    try {
      const res = JSON.parse(response?.data?.split("}")[1] + "}");
      if (res?.statusCode === "401" || res?.statusCode === "403") {
        // window.location.replace(`${REDIRECT_URL}/main`);
        // notification.error({message:"redirect to login"})
        errorResponse.data.message = res.message;
        return errorResponse;
      }
    } catch (err) {}
  }
  //  notification.error({ message: "Something went wrong" });
  return errorResponse;
};

export const getFilePath = (filePath) =>
  filePath?.replace("/var/www/html", BASE);

export const get = async (url, bodyObj = {}) => {
  let apiUrl = baseURL + url;
  let headers = {
    // Authorization: `Bearer ${Cookies.get("personalToken")}`,
    "authentication-token": `${Cookies.get("lFIToken")}`,
    "Access-Control-Allow-Origin": "*",
  };

  const axiosObj = {
    method: "get",
    url: apiUrl,
    headers,
    data: bodyObj,
  };
  try {
    return await axios(axiosObj);
  } catch (err) {
    const response = handleError(err);
    return response;
  }
};

export const post = async (
  url,
  bodyObj = {},
  mediaFile = false,
  headers = {}
) => {
  let apiUrl = baseURL + url;
  let header = {
    // Authorization:
    //    `Bearer ${localStorage.getItem("personalToken")}`,
    "Access-Control-Allow-Origin": "*",
    "authentication-token": `${Cookies.get("lFIToken")}`,
    ...headers,
  };
  if (mediaFile) {
    let formData = new FormData();
    // eslint-disable-next-line array-callback-return
    Object.keys(bodyObj).map((key) => {
      formData.append(key, bodyObj[key]);
    });
    bodyObj = formData;

    header["Content-Type"] = "multipart/form-data";
  }

  try {
    return await axios.post(apiUrl, bodyObj, {
      headers: header,
    });
  } catch (err) {
    // notification.error({message:"Something went wrong"})
    return handleError(err);
  }
};

export const postCusPLApp = async (
  url,
  bodyObj = {},
  mediaFile = false,
  headers = {}
) => {
  let apiUrl = baseURLPLApp + url;
  let header = {
    // Authorization:
    //    `Bearer ${localStorage.getItem("personalToken")}`,
    "Access-Control-Allow-Origin": "*",
    "authentication-token": `${Cookies.get("lFIToken")}`,
    ...headers,
  };
  if (mediaFile) {
    let formData = new FormData();
    // eslint-disable-next-line array-callback-return
    Object.keys(bodyObj).map((key) => {
      formData.append(key, bodyObj[key]);
    });
    bodyObj = formData;

    header["Content-Type"] = "multipart/form-data";
  }

  try {
    return await axios.post(apiUrl, bodyObj, {
      headers: header,
    });
  } catch (err) {
    // notification.error({message:"Something went wrong"})
    return handleError(err);
  }
};

export const postCusServApp = async (
  url,
  bodyObj = {},
  mediaFile = false,
  headers = {}
) => {
  let apiUrl = baseURLCusApp + url;
  let header = {
    // Authorization:
    //    `Bearer ${localStorage.getItem("personalToken")}`,
    "Access-Control-Allow-Origin": "*",
    "authentication-token": `${Cookies.get("lFIToken")}`,
    ...headers,
  };
  if (mediaFile) {
    let formData = new FormData();
    // eslint-disable-next-line array-callback-return
    Object.keys(bodyObj).map((key) => {
      formData.append(key, bodyObj[key]);
    });
    bodyObj = formData;

    header["Content-Type"] = "multipart/form-data";
  }

  try {
    return await axios.post(apiUrl, bodyObj, {
      headers: header,
    });
  } catch (err) {
    // notification.error({message:"Something went wrong"})
    return handleError(err);
  }
};

export const postApi = async (
  url,
  bodyObj = {},
  mediaFile = false,
  headers = {}
) => {
  let apiUrl = baseURL + url;
  let header = {
    // Authorization:
    //    `Bearer ${localStorage.getItem("personalToken")}`,
    ...headers,
  };
  if (mediaFile) {
    let formData = new FormData();
    // eslint-disable-next-line array-callback-return
    Object.keys(bodyObj).map((key) => {
      formData.append(key, bodyObj[key]);
    });
    bodyObj = formData;

    header["Content-Type"] = "multipart/form-data";
  }

  try {
    return await axios.post(apiUrl, bodyObj, {
      headers: header,
    });
  } catch (err) {
    // notification.error({message:"Something went wrong"})
    return handleError(err);
  }
};
