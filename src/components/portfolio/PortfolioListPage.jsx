import styles from "./PortfolioListPage.module.css";
import CategoryButton from "../common/CategoryButton";
import { useState } from "react";
import PortfolioThumbnail from "./PortfolioThumbnail";

const PortfolioListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("promotion");

  return (
    <div>
      <div className={styles["portolio-container"]}>
        <div className={styles["portolio-wrapper"]}>
          <h1>Portfolio</h1>
          <p>
            사용자의 시선을 사로잡고
            <br />
            목적을 이끄는 디자인을 만들어갑니다
          </p>
        </div>
        <CategoryButton
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <PortfolioThumbnail category={selectedCategory} />
      </div>
    </div>
  );
};

export default PortfolioListPage;
