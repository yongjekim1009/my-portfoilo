import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Day from "../../assets/images/darkmode/day-icon.svg?react";
import Night from "../../assets/images/darkmode/night-icon.svg?react";
import useDarkMode from "../darkmode/UseDarkMode";

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode(); // 다크모드 사용

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
              <div
                className={styles["dark-mode"]}
                onClick={toggleDarkMode} // 클릭 이벤트에 함수 연결
              >
                <div
                  className={`${styles["dark-mode-btn-indicator"]} ${
                    isDarkMode ? styles.active : "" // 다크 모드 상태에 따라 클래스 추가
                  }`}
                >
                  <div className={styles["dark-mode-btn-icon-container"]}>
                    {isDarkMode ? (
                      <Night className={styles["dark-mode-btn-icon"]} />
                    ) : (
                      <Day className={styles["dark-mode-btn-icon"]} />
                    )}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
