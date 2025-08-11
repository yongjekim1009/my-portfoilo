import { Navigate } from "react-router-dom";
import { useAdminAuthStore } from "../store/adminAuthStore";

const PrivateRoute = ({ children }) => {
  const { isLogin } = useAdminAuthStore();
  return isLogin ? children : <Navigate to="/admin/login" replace />;
};

export default PrivateRoute;
