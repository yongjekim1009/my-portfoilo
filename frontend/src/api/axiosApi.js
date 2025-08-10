import axios from "axios";

/**
 * .env 파일에 VITE_API_BASE_URL이 있으면 사용, 없으면 기본 8080
 * 예) VITE_API_BASE_URL=http://localhost:8080
 */
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080";

const axiosApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// 요청 인터셉터: 로컬스토리지의 액세스 토큰을 자동으로 헤더에 부착
axiosApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: data 바로 반환 + 401 처리(옵션: 토큰 리프레시)
axiosApi.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const { config, response } = error;

    // 네트워크 장애(서버 미응답) 처리
    if (!response) {
      return Promise.reject({
        message: "네트워크 오류가 발생했어요. 서버가 켜져 있는지 확인해주세요.",
        cause: error,
      });
    }

    // 401 처리 및 1회만 리트라이
    if (response.status === 401 && !config._retry) {
      config._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          // 백엔드의 토큰 재발급 엔드포인트에 맞춰서 수정하세요.
          const refreshResp = await axios.post(
            `${API_BASE_URL}/api/auth/refresh`,
            { refreshToken }
          );

          const newAccessToken = refreshResp.data?.accessToken;
          if (newAccessToken) {
            localStorage.setItem("accessToken", newAccessToken);
            config.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosApi(config); // 원요청 재시도
          }
        }
      } catch (e) {
        // 리프레시 실패 시 토큰 제거(필요하면 로그인 화면으로 이동)
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }

    // 백엔드가 보낸 에러 메시지 전달
    return Promise.reject(response.data ?? error);
  }
);

export default axiosApi;
