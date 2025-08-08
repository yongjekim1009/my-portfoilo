import styles from "./PortfolioPreviewSection.module.css";
import CategoryButton from "./CategoryButton";
import ThumbnailList from "./ThumbnailList";
import { useState } from "react";
import { useEffect } from "react";

const PortfolioPreviewSection = () => {
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
    <section className={styles["preview-container"]}>
      <h1>사용자를 이해하는 감각적인 설계</h1>
      <p>
        사용자의 시선과 경험을 모두 고려한 디자인으로
        <br />
        감각과 논리가 공존하는 완성도 높은 결과물을 지향합니다
      </p>
      <CategoryButton
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <ThumbnailList items={thumbnails} />
    </section>
  );
};

export default PortfolioPreviewSection;
