import styles from "../../../css/common/home/skillSection.module.css";

export const SkillSection = () => {
  return (
    <div className={styles["skill-container"]}>
      <h1>아이디어를 현실로 구현하는 도구</h1>
      <p>
        각 프로젝트의 목적에 맞는 툴을 선택하고 활용하며
        <br />
        익숙한 툴과 함께 새로운 기술에도 끊임없이 도전하고 있습니다
      </p>
      <div className={styles["skill-group"]}></div>
    </div>
  );
};
