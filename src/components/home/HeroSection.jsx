import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import portfolioBtn from "../../assets/images/button/portfolio-btn-icon.svg";
import contactBtn from "../../assets/images/button/contact-btn-icon.svg";

export const HeroSection = () => {
  return (
    <section className={styles["hero-bg"]}>
      <div className={styles["hero-container"]}>
        <h1>Creative Designer</h1>
        <h2>
          <strong>사용자 중심의 디자인</strong>으로
          <br />더 나은 경험을 만들어갑니다.
        </h2>

        <div className={styles["btn-group"]}>
          <Link to="/portfolio" aria-label="포트폴리오로 이동">
            <img
              src={portfolioBtn}
              alt="포트폴리오 보기 버튼"
              aria-hidden="true"
            />
          </Link>

          <Link to="/contact" aria-label="연락하기로 이동">
            <img src={contactBtn} alt="연락하기 버튼" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
