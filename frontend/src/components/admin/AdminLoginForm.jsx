import styles from "./AdminLoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { useAdminAuthStore } from "../../store/adminAuthStore";
import { useEffect, useState } from "react";
import { login as loginApi } from "../../api/authApi";

const AdminLoginForm = () => {
  const { isLogin, login: markLoggedIn } = useAdminAuthStore();
  const navigate = useNavigate();

  const [adminId, setAdminId] = useState("");
  const [adminPw, setAdminPw] = useState("");
  const [rememberId, setRememberId] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // 저장된 아이디 로드
  useEffect(() => {
    const savedId = localStorage.getItem("admin_saved_id");
    if (savedId) {
      setAdminId(savedId);
      setRememberId(true);
    }
  }, []);

  // 로그인 되어있으면 리디렉트
  useEffect(() => {
    if (isLogin) navigate("/admin");
  }, [isLogin, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      // 아이디 저장 체크
      if (rememberId && adminId.trim()) {
        localStorage.setItem("admin_saved_id", adminId.trim());
      } else {
        localStorage.removeItem("admin_saved_id");
      }

      // 백엔드 로그인 요청
      // /api/auth/login 에서 { accessToken, refreshToken? } 내려온다고 가정
      const { accessToken, refreshToken } = await loginApi(adminId, adminPw);

      // 토큰 저장 → axios 인터셉터가 Authorization 헤더로 자동 첨부
      localStorage.setItem("accessToken", accessToken);
      if (refreshToken) localStorage.setItem("refreshToken", refreshToken);

      // 전역 상태 갱신 후 이동
      markLoggedIn();
      navigate("/admin");
    } catch (err) {
      setErrorMsg(
        err?.message || "로그인에 실패했어요. 아이디/비밀번호를 확인해주세요."
      );
    } finally {
      setLoading(false);
    }
  };

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
            autoComplete="username"
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
            autoComplete="current-password"
            required
          />
        </div>

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

        <button
          type="submit"
          className={styles["login-btn"]}
          disabled={loading}
        >
          {loading ? "로그인 중..." : "로그인"}
        </button>
        <button
          type="button"
          className={styles["back-btn"]}
          onClick={() => navigate(-1)}
          disabled={loading}
        >
          뒤로가기
        </button>

        {errorMsg && <div className={styles["error-msg"]}>{errorMsg}</div>}
      </form>
    </div>
  );
};

export default AdminLoginForm;
