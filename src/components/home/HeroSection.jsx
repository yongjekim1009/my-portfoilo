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
          단순한 시각적 표현을 넘어
          <br />
          <strong>더 나은 가치</strong>를 만들어가겠습니다
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
