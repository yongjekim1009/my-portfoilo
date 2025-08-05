import styles from "../../css/common/Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles["header-container"]}>
        <div className={styles["header-logo"]}>
          <h1>Kim YongJe</h1>
        </div>
        <nav className={styles["header-nav"]}>
          <ul className={styles["header-menu"]}>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
