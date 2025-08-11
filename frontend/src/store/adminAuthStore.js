import { create } from "zustand";

export const useAdminAuthStore = create((set) => ({
  isLogin: localStorage.getItem("isAdminLogin") === "true",

  login: () => {
    localStorage.setItem("isAdminLogin", "true");
    set({ isLogin: true });
  },

  logout: () => {
    localStorage.removeItem("isAdminLogin");
    set({ isLogin: false });
  },
}));
