import styles from "./ContactPage.module.css";

import phone from "../../assets/images/contact/phone-icon.svg";
import email from "../../assets/images/contact/email-icon.svg";

const ContactPage = () => {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles["contact-wrapper"]}>
        <h1>Cantact</h1>
        <p>
          작은 아이디어라도 함께 나누며
          <br />
          새로운 기회를 만들어가고 싶습니다
        </p>
      </div>
      <div className={styles["contact-group"]}>
        <div className={styles["contact-section"]}>
          <div className={styles["contact-icon"]}>
            <img src={phone} alt="전화 아이콘" />
          </div>
          <div className={styles["contact-type"]}>Phone</div>
          <div className={styles["contact-link"]}>010 . 9911 . 2518</div>
        </div>

        <div className={styles["contact-section"]}>
          <div className={styles["contact-icon"]}>
            <img src={email} alt="이메일 아이콘" />
          </div>
          <div className={styles["contact-type"]}>Email</div>
          <div className={styles["contact-link"]}>
            dydwp1009
            <div className={styles.address}>@naver.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
