import { create } from "zustand";

const useDarkModeStore = create((set) => ({
  isDarkMode: localStorage.getItem("isDarkMode") === "true",
  toggleDarkMode: () =>
    set((state) => {
      const newDarkModeState = !state.isDarkMode;
      localStorage.setItem("isDarkMode", newDarkModeState);
      return { isDarkMode: newDarkModeState };
    }),
}));

export default useDarkModeStore;
