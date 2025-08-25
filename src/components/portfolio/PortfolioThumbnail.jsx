import { useEffect, useMemo, useState } from "react";
import styles from "./PortfolioThumbnail.module.css";
import Pagination from "./../common/Pagination";
import ex from "../../assets/images/portfolio/ex01.png";

const DATA = {
  promotion: [
    {
      id: "p1",
      src: ex,
      alt: "프로모션 1",
      category: "프로모션",
      title: "프로모션 1",
    },
    {
      id: "p2",
      src: ex,
      alt: "프로모션 2",
      category: "프로모션",
      title: "프로모션 2",
    },
    {
      id: "p3",
      src: ex,
      alt: "프로모션 3",
      category: "프로모션",
      title: "프로모션 3",
    },
    {
      id: "p4",
      src: ex,
      alt: "프로모션 4",
      category: "프로모션",
      title: "프로모션 4",
    },
    {
      id: "p5",
      src: ex,
      alt: "프로모션 5",
      category: "프로모션",
      title: "프로모션 5",
    },
    {
      id: "p6",
      src: ex,
      alt: "프로모션 6",
      category: "프로모션",
      title: "프로모션 6",
    },
  ],
  detail: [
    {
      id: "d1",
      src: "/assets/portfolio/detail/d1.jpg",
      alt: "상세페이지 1",
      category: "상세",
      title: "상세페이지 1",
    },
    {
      id: "d2",
      src: "/assets/portfolio/detail/d2.jpg",
      alt: "상세페이지 2",
      category: "상세",
      title: "상세페이지 2",
    },
    {
      id: "d3",
      src: "/assets/portfolio/detail/d3.jpg",
      alt: "상세페이지 3",
      category: "상세",
      title: "상세페이지 3",
    },
  ],
  banner: [
    {
      id: "b1",
      src: "/assets/portfolio/banner/b1.jpg",
      alt: "배너 1",
      title: "배너 1",
    },
    {
      id: "b2",
      src: "/assets/portfolio/banner/b2.jpg",
      alt: "배너 2",
      title: "배너 2",
    },
    {
      id: "b3",
      src: "/assets/portfolio/banner/b3.jpg",
      alt: "배너 3",
      title: "배너 3",
    },
    {
      id: "b4",
      src: "/assets/portfolio/banner/b4.jpg",
      alt: "배너 4",
      title: "배너 4",
    },
  ],
};

const PAGE_SIZE = 16;
const FALLBACK = "promotion";

const PortfolioThumbnail = ({ category }) => {
  const [page, setPage] = useState(1);

  const list = useMemo(() => {
    const key = Object.prototype.hasOwnProperty.call(DATA, category)
      ? category
      : FALLBACK;
    return DATA[key] ?? [];
  }, [category]);

  const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));

  useEffect(() => setPage(1), [category]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const start = (page - 1) * PAGE_SIZE;
  const current = list.slice(start, start + PAGE_SIZE);

  return (
    <div className={styles["thumb-section"]}>
      <div className={styles["thumb-container"]}>
        {current.map((item) => (
          <div key={item.id} className={styles["thumb-wrapper"]}>
            <div className={styles["thumb-item"]}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
            <p className={styles["thumb-title"]}>{item.title || item.alt}</p>
          </div>
        ))}
      </div>

      <Pagination current={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
};

export default PortfolioThumbnail;
