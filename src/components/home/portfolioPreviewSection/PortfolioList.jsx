import { useMemo } from "react";
import styles from "./PortfolioList.module.css";
import usePortfolioStore from "../../../store/portfolioStore";

const FALLBACK = "promotion";
const RECENT_COUNT = 4;

export default function PortfolioList({ category }) {
  const getThumbnails = usePortfolioStore((s) => s.getThumbnails);

  // 원본 데이터 확보 (빈 값이면 FALLBACK)
  const raw = useMemo(() => {
    const data = getThumbnails(category);
    return data.length ? data : getThumbnails(FALLBACK);
  }, [category, getThumbnails]);

  // createdAt 기준 최신 4개 (없으면 배열의 마지막 4개)
  const list = useMemo(() => {
    if (!raw.length) return [];

    // createdAt이 있으면 최신순 정렬
    const hasCreatedAt = raw.some((it) => it?.createdAt);
    const sorted = hasCreatedAt
      ? [...raw].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      : raw;

    // 뒤에서 4개 잘라 최신 4개로 간주 (정렬된 경우 맨 앞 4개)
    return hasCreatedAt
      ? sorted.slice(0, RECENT_COUNT)
      : sorted.slice(-RECENT_COUNT);
  }, [raw]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.group} style={{ ["--items"]: list.length || 1 }}>
        {list.map((item, idx) => (
          <figure className={styles.card} key={`${item.id ?? idx}`}>
            <img
              src={item.src}
              alt={item.alt ?? ""}
              loading="lazy"
              className={styles["card-img"]}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
