import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div>
      <div className={styles["contact-container"]}>
        <div className={styles["contact-wrapper"]}>
          <h1>Cantact</h1>
          <p>
            작은 아이디어라도 함께 나누며
            <br />
            새로운 기회를 만들어가고 싶습니다
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
