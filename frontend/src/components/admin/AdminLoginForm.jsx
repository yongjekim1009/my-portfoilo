import styles from "./AdminLoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { useAdminAuthStore } from "../../store/adminAuthStore";
import { useEffect, useState } from "react";

const AdminLoginForm = () => {
  const { isLogin, login } = useAdminAuthStore();
  const navigate = useNavigate();

  const [adminId, setAdminId] = useState("");
  const [adminPw, setAdminPw] = useState("");
  const [rememberId, setRememberId] = useState(false);

  // 저장된 아이디 로드
  useEffect(() => {
    const savedId = localStorage.getItem("admin_saved_id");
    if (savedId) {
      setAdminId(savedId);
      setRememberId(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // 아이디 저장 체크 시 저장 / 아니면 삭제
    if (rememberId && adminId.trim()) {
      localStorage.setItem("admin_saved_id", adminId.trim());
    } else {
      localStorage.removeItem("admin_saved_id");
    }

    login();
    navigate("/admin");
  };

  if (isLogin) {
    navigate("/admin");
    return null;
  }

  return (
    <div className={styles["form-container"]}>
      <form className={styles["login-box"]} onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <p>이 곳은 관리자만 접근이 가능한 페이지입니다</p>

        <div className={styles["input-group"]}>
          <label htmlFor="adminId" className={styles["sr-only"]}>
            아이디
          </label>
          <input
            id="adminId"
            type="text"
            placeholder="관리자 아이디를 입력하세요"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
          />

          <label htmlFor="adminPw" className={styles["sr-only"]}>
            비밀번호
          </label>
          <input
            id="adminPw"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={adminPw}
            onChange={(e) => setAdminPw(e.target.value)}
            required
          />
        </div>

        {/* 아이디 저장하기 */}
        <div className={styles["remember-check"]}>
          <input
            id="rememberId"
            type="checkbox"
            checked={rememberId}
            onChange={(e) => setRememberId(e.target.checked)}
          />
          <label htmlFor="rememberId" className={styles["remember-label"]}>
            아이디 저장
          </label>
        </div>

        <button type="submit" className={styles["login-btn"]}>
          로그인
        </button>
        <button
          type="button"
          className={styles["back-btn"]}
          onClick={() => navigate(-1)}
        >
          뒤로가기
        </button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
