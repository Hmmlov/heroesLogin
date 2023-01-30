import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  /* volver de donde destruimos la sesión */
  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);
  /* end */
  return logged ? children : <Navigate to="/login" />;
};
