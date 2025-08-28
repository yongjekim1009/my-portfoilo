import { useEffect, useRef, useState } from "react";
import styles from "./ContactSection.module.css";

import phone from "../../assets/images/contact/phone-icon.svg";
import email from "../../assets/images/contact/email-icon.svg";

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || inView) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // 한 번만
          io.disconnect();
        }
      },
      { threshold: 0.25, root: null, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className={`${styles["contact-container"]} ${
        inView ? styles.inView : ""
      }`}
    >
      <div className={styles["contact-wrapper"]}>
        <h1>함께할 기회를 기다립니다</h1>
        <p>
          함께 성장할 수 있는 좋은 기회를 기다리고 있으며
          <br />
          언제든 연락 부탁드립니다
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
    </section>
  );
};

export default ContactSection;
