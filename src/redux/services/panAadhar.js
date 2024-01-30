import { get, post } from "../../utility/httpInterceptor";
import { savePanOrAadharSuccess, savePanOrAadharFailure } from "../actions/panAadhar";
import { notification } from "antd";

export const savePanOrAadhar =
  (objBody = {}) =>
  async (dispatch) => {
    try {
      console.log("inside savePanOrAadhar")
      const response = await post(
        "/customerservicing/allcloud/saveProtto",
        objBody,
        false
      );
      if (!response.data.error) {
        // notification.success({ message: response.data.message });
        return dispatch(savePanOrAadharSuccess(response.data));
      } else {
        // notification.error({ message: response.data.message });
        dispatch(savePanOrAadharFailure());
      }
    } catch (err) {
      dispatch(savePanOrAadharFailure(err));
    }
  };
