import { useMemo, useState } from "react";
import styles from "./PortfolioThumbnail.module.css";
import Pagination from "./../common/Pagination";
import ex from "../../assets/images/portfolio/ex01.png";

const DATA = {
  promotion: [
    { id: "p1", src: ex, alt: "프로모션 1" },
    { id: "p2", src: ex, alt: "프로모션 2" },
    { id: "p3", src: ex, alt: "프로모션 3" },
    { id: "p4", src: ex, alt: "프로모션 4" },
    { id: "p5", src: ex, alt: "프로모션 5" },
    { id: "p6", src: ex, alt: "프로모션 6" },
    { id: "p7", src: ex, alt: "프로모션 7" },
    { id: "p8", src: ex, alt: "프로모션 8" },
    { id: "p9", src: ex, alt: "프로모션 9" },
    { id: "p10", src: ex, alt: "프로모션 10" },
    { id: "p11", src: ex, alt: "프로모션 11" },
    { id: "p12", src: ex, alt: "프로모션 12" },
    { id: "p13", src: ex, alt: "프로모션 13" },
    { id: "p14", src: ex, alt: "프로모션 14" },
    { id: "p15", src: ex, alt: "프로모션 15" },
    { id: "p16", src: ex, alt: "프로모션 16" },
    { id: "p17", src: ex, alt: "프로모션 17" },
  ],
  detail: [
    { id: "d1", src: "/assets/portfolio/detail/d1.jpg", alt: "상세페이지 1" },
    { id: "d2", src: "/assets/portfolio/detail/d2.jpg", alt: "상세페이지 2" },
    { id: "d3", src: "/assets/portfolio/detail/d3.jpg", alt: "상세페이지 3" },
  ],
  banner: [
    { id: "b1", src: "/assets/portfolio/banner/b1.jpg", alt: "배너 1" },
    { id: "b2", src: "/assets/portfolio/banner/b2.jpg", alt: "배너 2" },
    { id: "b3", src: "/assets/portfolio/banner/b3.jpg", alt: "배너 3" },
    { id: "b4", src: "/assets/portfolio/banner/b4.jpg", alt: "배너 4" },
  ],
};

const PAGE_SIZE = 16;
const FALLBACK = "promotion";

const PortfolioThumbnail = ({ category }) => {
  const [page, setPage] = useState(1);

  // 잘못된 카테고리 값 대비
  const list = useMemo(() => {
    const key = Object.prototype.hasOwnProperty.call(DATA, category)
      ? category
      : FALLBACK;
    return DATA[key] ?? [];
  }, [category]);

  const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const current = list.slice(start, start + PAGE_SIZE);

  return (
    <div className={styles.container}>
      <ul className={styles.grid}>
        {current.map((item) => (
          <li key={item.id} className={styles.card}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </li>
        ))}
      </ul>

      <Pagination current={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
};

export default PortfolioThumbnail;
