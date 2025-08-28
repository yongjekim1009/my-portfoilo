import { useMemo } from "react";
import styles from "./PortfolioList.module.css";
import usePortfolioStore from "../../../store/portfolioStore";

const FALLBACK = "promotion";

export default function PortfolioList({ category }) {
  const getThumbnails = usePortfolioStore((s) => s.getThumbnails);

  const list = useMemo(() => {
    const data = getThumbnails(category);
    // 빈 값 대비
    return data.length ? data : getThumbnails(FALLBACK);
  }, [category, getThumbnails]);

  // 끊김없이 순환되도록 2배
  const loop = useMemo(() => [...list, ...list], [list]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.gradientLeft} aria-hidden />
      <div className={styles.gradientRight} aria-hidden />

      <div
        className={styles.track}
        key={category}
        style={{ ["--items"]: list.length || 1 }}
      >
        {loop.map((item, idx) => (
          <figure className={styles.card} key={`${item.id}-${idx}`}>
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className={styles["card-img"]}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
