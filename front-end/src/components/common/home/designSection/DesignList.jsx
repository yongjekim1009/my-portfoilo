import styles from "../../../../css/common/home/designSection/DesignListSection.module.css";
import Button from "../../Button";

const DesignListSection = () => {
  return (
    <div className={styles["list-container"]}>
      <h1>사용자를 이해하는 감각적인 설계</h1>
      <p>
        사용자의 시선과 경험을 모두 고려한 디자인으로
        <br />
        감각과 논리가 공존하는 완성도 높은 결과물을 지향합니다
      </p>
      <div className={styles["btn-group"]}>
        <Button>웹디자인</Button>
        <Button>상세페이지</Button>
        <Button>배너</Button>
      </div>
    </div>
  );
};

export default DesignListSection;
