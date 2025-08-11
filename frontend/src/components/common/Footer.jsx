import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-info"]}>
          <span>김용제</span>
          <span className={styles["divider"]}> | </span>
          <span>Designer</span>
        </div>
        <div className={styles["footer-info"]}>Email : dydwp1009@naver.com</div>
        <div className={styles["footer-info"]}>Phone : 010-9911-2518</div>
        <div className={styles["footer-info"]}>Based in Seoul, Korea</div>
        <br />
        <div className={styles["footer-copyright"]}>
          © 2025 Kim YongJe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
