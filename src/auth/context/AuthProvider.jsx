import React, { useReducer } from "react";
import { AuthContext, authReducer } from "./index";
import { types } from "../types/types";

/* const initialState = {
  logged: false,
}; */
/* ya no es necesario el initialState, solo mandar un objeto vacio, ya que el init se encarga de asignarlo en el action  */
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return { logged: !!user, user: user, };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);
  const login = async (name = "") => {
    const user = { id: "ABC", name };
    const action = {type: types.login, payload: user,   };


    /* guardar el usario en el localStorage */
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };
  const logout = () => {
    localStorage.removeItem('user');
    const action = { };
    dispatch(action);
  }
  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
