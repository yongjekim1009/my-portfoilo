import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import Day from "../../assets/images/darkmode/day-icon.svg?react";
import Night from "../../assets/images/darkmode/night-icon.svg?react";
import MenuIcon from "../../assets/images/common/menu-icon.svg?react";
import CloseIcon from "../../assets/images/common/close-icon.svg?react";
import useDarkMode from "../darkmode/UseDarkMode";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const location = useLocation();

  const handleToggle = (e) => {
    if (e) e.stopPropagation();
    setIsAnimating(true);
    toggleDarkMode();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleMenuToggle = (e) => {
    if (e) e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  // 라우트 변경 시 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // 바깥 클릭 시 닫기 (mousedown → click, 토글 버튼/메뉴 내부 클릭은 무시)
  useEffect(() => {
    if (!isMenuOpen) return;

    const onDocumentClick = (e) => {
      if (toggleBtnRef.current && toggleBtnRef.current.contains(e.target))
        return;
      if (menuRef.current && menuRef.current.contains(e.target)) return;
      setIsMenuOpen(false);
    };

    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, [isMenuOpen]);

  return (
    <header className={styles["header-section"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-logo"]}>
          <h1>
            <Link to="/">Kim YongJe</Link>
          </h1>
        </div>

        {/* 데스크톱 내비게이션 */}
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
              <button
                className={styles["mode-btn"]}
                onClick={handleToggle}
                aria-label="Toggle dark mode"
              >
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

        {/* 모바일 햄버거/닫기 버튼 */}
        <button
          ref={toggleBtnRef}
          className={styles["hamburger-btn"]}
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`${styles["icon-stack"]} ${
              isMenuOpen ? styles.open : ""
            }`}
          >
            <MenuIcon className={`${styles["stack-icon"]} ${styles.menu}`} />
            <CloseIcon className={`${styles["stack-icon"]} ${styles.close}`} />
          </span>
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${styles["mobile-menu"]} ${isMenuOpen ? styles.open : ""}`}
        onClick={(e) => e.stopPropagation()} // 내부 클릭이 문서로 버블링되지 않게
      >
        <ul className={styles["mobile-menu-list"]}>
          <li>
            <Link to="/portfolio" className={styles["mobile-link"]}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles["mobile-link"]}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles["mobile-link"]}>
              Contact
            </Link>
          </li>
          <li className={styles["mobile-darkmode"]}>
            <span>Dark Mode</span>
            <button
              className={styles["mode-btn"]}
              onClick={handleToggle}
              aria-label="Toggle dark mode (mobile)"
            >
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
      </div>
    </header>
  );
};

export default Header;
