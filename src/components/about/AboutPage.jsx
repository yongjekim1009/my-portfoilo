import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles["about-container"]}>
        <div className={styles["about-wrapper"]}>
          <h1>About</h1>
          <p>
            끊임없이 배우고 성장하며
            <br />
            새로운 가능성을 탐구하는 디자이너입니다
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
