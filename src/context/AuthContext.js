import React from "react";
import { createContext, useReducer } from "react";

export const AuthContext = createContext(); //create context

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action?.payload,
      };

    case "LOGOUT":
      return {
        user: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  //main export wraps tha app
  const [state, dispatch] = useReducer(authReducer, { user: null });

  return <AuthContext.Provider value={{...state,dispatch}}>{children}</AuthContext.Provider>;
};
