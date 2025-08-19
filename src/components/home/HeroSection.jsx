import styles from "./HeroSection.module.css";

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
          <button>
            <img src={portfolioBtn} alt="포트폴리오 아이콘" />
          </button>
          <button>
            <img src={contactBtn} alt="연락하기 아이콘" />
          </button>
        </div>
      </div>
    </section>
  );
};
