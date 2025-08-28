import { useEffect, useRef, useState, useMemo } from "react";
import styles from "./skillSection.module.css";

import photoshop from "../../assets/images/tool/photoshop-icon.svg";
import illustrator from "../../assets/images/tool/illustrator-icon.svg";
import pigma from "../../assets/images/tool/pigma-icon.svg";
import html from "../../assets/images/tool/html-icon.svg";
import css from "../../assets/images/tool/css-icon.svg";
import javascript from "../../assets/images/tool/javascript-icon.svg";
import java from "../../assets/images/tool/java-icon.svg";
import react from "../../assets/images/tool/react-icon.svg";
import spring from "../../assets/images/tool/spring-boot-icon.svg";
import oracle from "../../assets/images/tool/oracle-db-icon.svg";
import premiere from "../../assets/images/tool/premiere-pro-icon.svg";

export const SkillSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const SKILLS = useMemo(
    () => [
      { src: photoshop, name: "Photoshop", alt: "포토샵 아이콘" },
      { src: illustrator, name: "Illustrator", alt: "일러스트 아이콘" },
      { src: pigma, name: "Figma", alt: "피그마 아이콘" },
      { src: html, name: "HTML", alt: "HTML 아이콘" },
      { src: css, name: "CSS", alt: "CSS 아이콘" },
      { src: javascript, name: "JavaScript", alt: "자바스크립트 아이콘" },
      { src: java, name: "Java", alt: "자바 아이콘" },
      { src: react, name: "React", alt: "리액트 아이콘" },
      { src: spring, name: "Spring Boot", alt: "스프링 부트 아이콘" },
      { src: oracle, name: "Oracle DB", alt: "오라클 아이콘" },
      { src: premiere, name: "Premiere Pro", alt: "프리미어 프로 아이콘" },
    ],
    []
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (inView) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      {
        root: null,
        // 조금 일찍 발동하도록 여유 margin
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.15,
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  return (
    <div
      ref={sectionRef}
      className={`${styles["skill-container"]} ${inView ? styles.inView : ""}`}
    >
      <div className={styles["skill-wrapper"]}>
        <h1>아이디어를 현실로 구현하는 도구</h1>
        <p>
          각 프로젝트의 목적에 맞는 툴을 선택하고 활용하며
          <br />
          익숙한 툴과 함께 새로운 기술에도 끊임없이 도전하고 있습니다
        </p>
      </div>

      <div className={styles["skill-group"]}>
        {SKILLS.map((s, idx) => (
          <div
            key={s.name}
            className={styles.skill}
            style={{ "--delay": idx }} // 순차 지연용 CSS 변수
          >
            <div className={styles["skill-icon"]}>
              <img src={s.src} alt={s.alt} />
            </div>
            <div className={styles["skill-name"]}>{s.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
