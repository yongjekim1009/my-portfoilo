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
  return (
    <div className={styles["skill-container"]}>
      <div className={styles["skill-wrapper"]}>
        <h1>아이디어를 현실로 구현하는 도구</h1>
        <p>
          각 프로젝트의 목적에 맞는 툴을 선택하고 활용하며
          <br />
          익숙한 툴과 함께 새로운 기술에도 끊임없이 도전하고 있습니다
        </p>
      </div>
      <div className={styles["skill-group"]}>
        <div className={styles.skill}>
          <div className={styles["skill-icon"]}>
            <img src={photoshop} alt="포토샵 아이콘" />
          </div>
          <div className={styles["skill-name"]}>Photo Shop</div>
        </div>
        <div className={styles.skill}>
          <div className={styles["skill-icon"]}>
            <img src={illustrator} alt="일러스트 아이콘" />
          </div>
          <div className={styles["skill-name"]}>Illustrator</div>
        </div>
        <div className={styles.skill}>
          <div className={styles["skill-icon"]}>
            <img src={pigma} alt="피그마 아이콘" />
          </div>
          <div className={styles["skill-name"]}>Pigma</div>
        </div>
        <div className={styles.skill}>
          <div className={styles["skill-icon"]}>
            <img src={html} alt="html 아이콘" />
          </div>
          <div className={styles["skill-name"]}>HTML</div>
        </div>
        <div className={styles.skill}>
          <div className={styles["skill-icon"]}>
            <img src={css} alt="css 아이콘" />
          </div>
          <div className={styles["skill-name"]}>CSS</div>
        </div>
        <div className={styles.skill}>
          <div className={styles["skill-icon"]}>
            <img src={javascript} alt="자바스크립트 아이콘" />
          </div>
          <div className={styles["skill-name"]}>Java Script</div>
        </div>
        <div className={styles.skill}>
          <div className={styles["skill-icon"]}>
            <img src={java} alt="자바 아이콘" />
          </div>
          <div className={styles["skill-name"]}>Java</div>
        </div>
        <div className={styles.skill}>
          <div className={styles["skill-icon"]}>
            <img src={react} alt="리액트 아이콘" />
          </div>
          <div className={styles["skill-name"]}>React</div>
        </div>
        <div className={styles.skill}>
          <div className={styles["skill-icon"]}>
            <img src={spring} alt="스프링 부트 아이콘" />
          </div>
          <div className={styles["skill-name"]}>Spring Boot</div>
        </div>
        <div className={styles.skill}>
          <div className={styles["skill-icon"]}>
            <img src={oracle} alt="오라클 아이콘" />
          </div>
          <div className={styles["skill-name"]}>Oracle DB</div>
        </div>
        <div className={styles.skill}>
          <div className={styles["skill-icon"]}>
            <img src={premiere} alt="프리미어 프로 아이콘" />
          </div>
          <div className={styles["skill-name"]}>Premiere Pro</div>
        </div>
      </div>
    </div>
  );
};
