import styles from "./PortfolioListPage.module.css";
import CategoryButton from "../home/portfolioPreviewSection/CategoryButton";
import ThumbnailList from "./../home/portfolioPreviewSection/ThumbnailList";
import { useState } from "react";
import { useEffect } from "react";

const PortfolioListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("web");
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/portfolio?category=${selectedCategory}`);
      const data = await res.json();
      setThumbnails(data);
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div>
      <div className={styles["portolio-container"]}>
        <div className={styles["portolio-wrapper"]}>
          <h1>Portfolio</h1>
          <p>
            사용자의 시선을 사로잡고
            <br />
            목적을 이끄는 디자인을 만들어갑니다.
          </p>
        </div>
        <CategoryButton
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <ThumbnailList items={thumbnails} />
      </div>
    </div>
  );
};

export default PortfolioListPage;
