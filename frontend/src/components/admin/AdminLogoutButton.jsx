import { useAdminAuthStore } from "../store/adminAuthStore";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAdminAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default LogoutButton;
