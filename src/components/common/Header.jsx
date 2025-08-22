import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Day from "../../assets/images/darkmode/day-icon.svg?react";
import Night from "../../assets/images/darkmode/night-icon.svg?react";
import useDarkMode from "../darkmode/UseDarkMode";
import { useState } from "react";

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    // 애니메이션 시작
    setIsAnimating(true);

    // 다크모드 토글
    toggleDarkMode();

    // 0.5초 후 애니메이션 클래스 제거
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <header className={styles["header-section"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-logo"]}>
          <h1>
            <Link to="/">Kim YongJe</Link>
          </h1>
        </div>
        <nav className={styles["header-nav"]}>
          <ul className={styles["header-menu"]}>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <button className={styles["mode-btn"]} onClick={handleToggle}>
                <div
                  className={`${styles["mode-btn-indicator"]} ${
                    isDarkMode ? styles.active : ""
                  }`}
                >
                  <div className={styles["mode-btn-icon-container"]}>
                    {isDarkMode ? (
                      <Night
                        className={`${styles["mode-btn-icon"]} ${
                          isAnimating ? styles["animated"] : ""
                        }`}
                      />
                    ) : (
                      <Day
                        className={`${styles["mode-btn-icon"]} ${
                          isAnimating ? styles["animated"] : ""
                        }`}
                      />
                    )}
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
