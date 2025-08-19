import { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";
import aboutImg from "../../assets/images/home/about-img.svg";
import moreBtn from "../../assets/images/button/more-btn-icon.svg";

export const AboutSection = () => {
  const introRef = useRef(null);
  const imgRef = useRef(null);

  const [hasIntroAnimated, setHasIntroAnimated] = useState(false);
  const [hasImgAnimated, setHasImgAnimated] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.3 };

    const introObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntroAnimated) {
        setHasIntroAnimated(true); // 한 번만 실행
      }
    }, options);

    const imgObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasImgAnimated) {
        setHasImgAnimated(true); // 한 번만 실행
      }
    }, options);

    if (introRef.current) introObserver.observe(introRef.current);
    if (imgRef.current) imgObserver.observe(imgRef.current);

    return () => {
      introObserver.disconnect();
      imgObserver.disconnect();
    };
  }, [hasIntroAnimated, hasImgAnimated]);

  return (
    <section className={styles["about-bg"]}>
      <div className={styles["about-container"]}>
        <div
          ref={introRef}
          className={`${styles["about-intro"]} ${
            hasIntroAnimated ? styles["fade-in-left"] : ""
          }`}
        >
          <h1>About Me</h1>
          <h2>
            안녕하세요
            <br /> <strong>디자이너 김용제</strong> 입니다
          </h2>
          <p>
            디자인은 단순한 시각적 꾸밈이 아닌
            <br />
            목적과 본질의 집중하고 브랜드의 가치를 전달하며
            <br />
            사람들의 일상을 더 나은 방향으로 변화시키는 것이라 생각합니다.
            <br />
            <br />
            사용자 중심의 디자인 철학으로
            <br />
            브랜드와 사람을 연결시키는 의미 있는 경험을 만들겠습니다.
          </p>
          <button>
            <img src={moreBtn} alt="더보기 버튼" />
          </button>
        </div>
        <div
          ref={imgRef}
          className={`${styles["about-img"]} ${
            hasImgAnimated ? styles["fade-in-right"] : ""
          }`}
        >
          <img src={aboutImg} alt="소개이미지" />
        </div>
      </div>
    </section>
  );
};
