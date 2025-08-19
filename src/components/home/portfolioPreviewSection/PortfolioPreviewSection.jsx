import styles from "./PortfolioPreviewSection.module.css";
import CategoryButton from "../../common/CategoryButton";
import { useState } from "react";
import PortfolioList from "./PortfolioList";

const PortfolioPreviewSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("promotion");

  return (
    <section className={styles["preview-bg"]}>
      <div className={styles["preview-container"]}>
        <div className={styles["preview-wrapper"]}>
          <h1>사용자를 이해하는 감각적인 설계</h1>
          <p>
            사용자의 시선과 경험을 모두 고려한 디자인으로
            <br />
            감각과 논리가 공존하는 완성도 높은 결과물을 지향합니다
          </p>
        </div>
        <CategoryButton
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>
      <PortfolioList category={selectedCategory} />
    </section>
  );
};

export default PortfolioPreviewSection;
