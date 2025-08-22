import { useEffect } from "react";
import useDarkModeStore from "../../store/darkModeStore";

const UseDarkMode = () => {
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  useEffect(() => {
    const root = document.body;
    root.classList.add("theme-transition");

    requestAnimationFrame(() => {
      if (isDarkMode) {
        root.classList.add("dark-mode");
      } else {
        root.classList.remove("dark-mode");
      }

      setTimeout(() => {
        root.classList.remove("theme-transition");
      }, 300);
    });
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

export default UseDarkMode;
