import styles from "../../../css/common/home/AboutSection.module.css";
import aboutImg from "../../../assets/images/home/about-img.svg";
import moreBtn from "../../../assets/images/button/more-btn-icon.svg";
import Button from "../Button";

export const AboutSection = () => {
  return (
    <div className={styles["about-bg"]}>
      <div className={styles["about-container"]}>
        <div className={styles["about-intro"]}>
          <h1>About Me</h1>
          <h2>
            안녕하세요
            <br /> <strong>디자이너 김용제</strong> 입니다
          </h2>
          <p>
            디자인은 단순한 시각적 꾸밈이 아닌
            <br />
            사용자의 문제를 해결하고 브랜드의 가치를 전달하며
            <br />
            사람들의 일상을 더 나은 방향으로 변화시키는 것이라 생각합니다.
            <br />
            <br />
            사용자 중심의 디자인 철학으로
            <br />
            브랜드와 사람을 연결시키는 의미 있는 경험을 만들겠습니다.
          </p>
          {/* <Button variant="line-btn">더보기</Button> */}
          <button>
            <img src={moreBtn} alt="더보기 버튼" />
          </button>
        </div>
        <div className={styles["about-img"]}>
          <img src={aboutImg} alt="소개이미지" />
        </div>
      </div>
    </div>
  );
};
