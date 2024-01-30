import {
    SAVE_PAN_OR_AADHAR_SUCCESS,
    SAVE_PAN_OR_AADHAR_FAILURE
  } from "../constants";
  
  //-------------------------Save Bike Service-----------------------------
  export const savePanOrAadharSuccess = (obj) => {
    return { type: SAVE_PAN_OR_AADHAR_SUCCESS, payload: obj };
  };
  
  export const savePanOrAadharFailure = (obj) => {
    return { type: SAVE_PAN_OR_AADHAR_FAILURE, payload: obj };
  };
  