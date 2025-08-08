import styles from "./AdminLoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { useAdminAuthStore } from "../../store/adminAuthStore";

const AdminLoginFrom = () => {
  const { isLogin, login } = useAdminAuthStore();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 실제로는 아이디/비번 검증 추가
    login();
    navigate("/admin"); // 로그인 후 관리자 홈으로
  };

  // 로그인된 상태면 바로 /admin으로 이동
  if (isLogin) {
    navigate("/admin");
    return null;
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>관리자 로그인</h1>
      <input type="text" placeholder="아이디" required />
      <input type="password" placeholder="비밀번호" required />
      <button type="submit">로그인</button>
    </form>
  );
};

export default AdminLoginFrom;
