import axiosApi from "./axiosApi";

export const login = (adminId, adminPw) =>
  axiosApi.post("/api/auth/login", { adminId, adminPw });

export const me = () => axiosApi.get("/api/admin/me");
