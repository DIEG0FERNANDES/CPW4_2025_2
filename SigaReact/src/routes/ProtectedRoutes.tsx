import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("authToken") ? true : false;
};

const ProtectedRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
