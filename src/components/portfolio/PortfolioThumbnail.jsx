import { useEffect, useMemo, useState } from "react";
import styles from "./PortfolioThumbnail.module.css";
import Pagination from "./../common/Pagination";
import { Link } from "react-router-dom";
import usePortfolioStore from "../../store/portfolioStore";

const PAGE_SIZE = 16;
const FALLBACK = "promotion";

const PortfolioThumbnail = ({ category }) => {
  const [page, setPage] = useState(1);
  const getThumbnails = usePortfolioStore((s) => s.getThumbnails);

  const list = useMemo(() => {
    const data = getThumbnails(category);
    return data.length ? data : getThumbnails(FALLBACK);
  }, [category, getThumbnails]);

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
            {/* 상세 페이지로 이동 */}
            <Link to={`/portfolio/${item.id}`}>
              <div className={styles["thumb-item"]}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
            </Link>
            <Link to={`/portfolio/${item.id}`}>
              <p className={styles["thumb-title"]}>{item.title || item.alt}</p>
            </Link>
          </div>
        ))}
      </div>

      <Pagination current={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
};

export default PortfolioThumbnail;
