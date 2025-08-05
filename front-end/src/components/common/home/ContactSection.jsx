import styles from "../../../css/common/home/ContactSection.module.css";

export const ContactSection = () => {
  return (
    <div className={styles["contact-container"]}>
      <h1>함께할 기회를 기다립니다</h1>
      <p>
        함께 성장할 수 있는 좋은 기회를 기다리고 있습니다
        <br />
        언제든 연락 부탁드립니다
      </p>
      <div className={styles["contact-group"]}></div>
    </div>
  );
};
