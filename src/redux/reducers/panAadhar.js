const {
    SAVE_PAN_OR_AADHAR_SUCCESS,
    SAVE_PAN_OR_AADHAR_FAILURE,
  } = require("../constants");
  
  const initialState = {
    panAadhar: {},
    loading: null,
  };
  
  function panAadharReducer(state = initialState, action) {
    switch (action.type) {
      case SAVE_PAN_OR_AADHAR_SUCCESS:
        return {
          ...state,
          panAadhar: action.payload,
        };
      case SAVE_PAN_OR_AADHAR_FAILURE:
        return {
          ...state,
          panAadhar: action.payload,
        };
  
      default:
        return state;
    }
  }
  
  export default panAadharReducer;
  