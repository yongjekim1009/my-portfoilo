import { useMemo } from "react";
import styles from "./PortfolioList.module.css";

import ex from "../../../assets/images/portfolio/ex01.png";

const DATA = {
  promotion: [
    { id: "web-1", src: ex, alt: "웹디자인 1" },
    { id: "web-2", src: ex, alt: "웹디자인 2" },
    { id: "web-3", src: ex, alt: "웹디자인 3" },
    { id: "web-4", src: ex, alt: "웹디자인 4" },
    { id: "web-5", src: ex, alt: "웹디자인 5" },
    { id: "web-6", src: ex, alt: "웹디자인 6" },
  ],
  detail: [
    {
      id: "detail-1",
      src: "/assets/portfolio/detail/d1.jpg",
      alt: "상세페이지 1",
    },
    {
      id: "detail-2",
      src: "/assets/portfolio/detail/d2.jpg",
      alt: "상세페이지 2",
    },
    {
      id: "detail-3",
      src: "/assets/portfolio/detail/d3.jpg",
      alt: "상세페이지 3",
    },
    {
      id: "detail-4",
      src: "/assets/portfolio/detail/d4.jpg",
      alt: "상세페이지 4",
    },
    {
      id: "detail-5",
      src: "/assets/portfolio/detail/d5.jpg",
      alt: "상세페이지 5",
    },
  ],
  banner: [
    { id: "banner-1", src: "/assets/portfolio/banner/b1.jpg", alt: "배너 1" },
    { id: "banner-2", src: "/assets/portfolio/banner/b2.jpg", alt: "배너 2" },
    { id: "banner-3", src: "/assets/portfolio/banner/b3.jpg", alt: "배너 3" },
    { id: "banner-4", src: "/assets/portfolio/banner/b4.jpg", alt: "배너 4" },
    { id: "banner-5", src: "/assets/portfolio/banner/b5.jpg", alt: "배너 5" },
    { id: "banner-6", src: "/assets/portfolio/banner/b6.jpg", alt: "배너 6" },
  ],
};

const FALLBACK = "promotion";

export default function PortfolioList({ category }) {
  // 잘못된 값이 들어와도 안전하게 기본 카테고리로 폴백
  const list = useMemo(() => {
    const key = Object.prototype.hasOwnProperty.call(DATA, category)
      ? category
      : FALLBACK;
    return DATA[key] ?? [];
  }, [category]);

  // 끊김 없이 순환되도록 리스트 개수를 2배로 늘려서 렌더링
  const loop = useMemo(() => [...list, ...list], [list]);

  // 카테고리가 바뀔 때 애니메이션을 리셋하려고 key에 category를 부여
  return (
    <div className={styles.wrapper}>
      <div className={styles.gradientLeft} aria-hidden />
      <div className={styles.gradientRight} aria-hidden />

      <div
        className={styles.track}
        key={category}
        // 아이템 개수에 따라 속도를 살짝 보정하고 싶다면 CSS 변수로 전달
        style={{ ["--items"]: list.length || 1 }}
      >
        {loop.map((item, idx) => (
          <figure className={styles.card} key={`${item.id}-${idx}`}>
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className={styles.image}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
