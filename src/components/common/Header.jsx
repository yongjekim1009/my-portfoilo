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
  const [isSpinning, setIsSpinning] = useState(false); // 래퍼 회전 중 여부

  // 현재 보이는 아이콘(햄버거/닫기)
  const [isHamburgerIcon, setIsHamburgerIcon] = useState(true);
  // 스핀 방향(true=반시계/ccw, false=시계/cw)
  const [spinReverse, setSpinReverse] = useState(false);

  const togglingByButtonRef = useRef(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const handleToggle = () => {
    setIsAnimating(true);
    toggleDarkMode();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleMenuToggle = () => {
    if (isSpinning) return; // 연타 방지
    togglingByButtonRef.current = true;

    // 열기(햄버거→닫기) = 시계방향, 닫기(닫기→햄버거) = 반시계방향
    const opening = isHamburgerIcon === true;
    setSpinReverse(!opening); // 닫을 때만 반시계

    setIsSpinning(true); // 1) 래퍼 회전 시작
    setIsMenuOpen((prev) => !prev); // 2) 메뉴는 즉시 토글
    // 3) 아이콘 전환은 onAnimationEnd에서 수행
  };

  // 래퍼 애니메이션 종료 후 실제 아이콘을 전환
  const handleWrapAnimationEnd = () => {
    if (!isSpinning) return;
    setIsHamburgerIcon((prev) => !prev); // 햄버거↔닫기
    setIsSpinning(false);
    togglingByButtonRef.current = false;
  };

  // 라우트 변경 시 메뉴 닫기(아이콘은 햄버거로)
  useEffect(() => {
    setIsMenuOpen(false);
    if (!togglingByButtonRef.current) setIsHamburgerIcon(true);
  }, [location.pathname]);

  // 바깥 클릭 시 닫기(아이콘도 햄버거로)
  useEffect(() => {
    if (!isMenuOpen) return;
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        if (!togglingByButtonRef.current) setIsHamburgerIcon(true);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isMenuOpen]);

  // 현재 스핀 방향에 따라 래퍼에 붙일 클래스
  const wrapSpinClass = isSpinning
    ? spinReverse
      ? styles["wrap-spin-90-ccw"]
      : styles["wrap-spin-90-cw"]
    : "";

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
          className={styles["hamburger-btn"]}
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {/* 아이콘 래퍼: 여기서 회전하고, 종료 이벤트도 여기서 받음 */}
          <span
            className={`${styles["icon-wrap"]} ${wrapSpinClass}`}
            onAnimationEnd={handleWrapAnimationEnd}
          >
            {isHamburgerIcon ? (
              <MenuIcon key="menu" className={styles["hamburger-icon"]} />
            ) : (
              <CloseIcon key="close" className={styles["hamburger-icon"]} />
            )}
          </span>
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${styles["mobile-menu"]} ${isMenuOpen ? styles.open : ""}`}
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
