import { notification } from "antd";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { post } from "../utils/httpInterceptor";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [data, setData] = useState(null);

  const {dispatch} = useAuthContext()

  const login = async (obj) => {
     try {
      setIsLoading(true);
      setError(null);

      const response = await post(
        "/FIAdminModule/authentication/authenticate",
        obj,
        false,
        true
      );
      if (!response.data.error) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        localStorage.setItem("fiAdminToken", response.data.token);
        // notification.success({ message: response.data.message });

        setData(response?.data);
      } else {
        setIsLoading(false);
        notification.error({ message: response.data.message });
        setError(response.data.message);
        //   update auth context
        dispatch({ type: "LOGIN", payload: response.data });
        setIsLoading(false);
      }
     } catch (error) {
       setIsLoading(false);
               notification.error({ message: "Something went wrong" });
     }
   
  };
  return {login,isLoading,error,data}
};
