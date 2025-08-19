import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import Day from "../../assets/images/darkmode/day-icon.svg?react";
import Night from "../../assets/images/darkmode/night-icon.svg?react";

const Header = () => {
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
              <div className={styles["dark-mode"]}>
                <div className={styles["dark-mode-btn-indicator"]}>
                  <div className={styles["dark-mode-btn-icon-container"]}>
                    <Day className={styles["dark-mode-btn-icon"]} />
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
