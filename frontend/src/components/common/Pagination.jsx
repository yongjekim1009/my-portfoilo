import styles from "./Pagination.module.css";

export const Pagination = ({
  current = 1,
  total = 1,
  onChange,
  className = "",
}) => {
  // 숫자 구간(예: 현재가 11이면 11~20만 보여주기)
  const size = 10; // 한 화면에 보여줄 페이지 숫자 개수
  const start = Math.floor((current - 1) / size) * size + 1;
  const end = Math.min(start + size - 1, total);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const go = (p) => {
    if (p < 1 || p > total) return;
    onChange?.(p);
  };

  return (
    <nav
      className={`${styles.pagination} ${className}`}
      aria-label="페이지 네비게이션"
    >
      <button
        className={`${styles.pageBtn} ${styles.nav}`}
        onClick={() => go(1)}
        aria-label="첫 페이지"
      >
        «
      </button>
      <button
        className={`${styles.pageBtn} ${styles.nav}`}
        onClick={() => go(current - 1)}
        aria-label="이전 페이지"
      >
        ‹
      </button>

      <ul className={styles.pageList}>
        {pages.map((p) => (
          <li key={p}>
            <button
              className={`${styles.pageBtn} ${styles.num} ${
                p === current ? styles.active : ""
              }`}
              aria-current={p === current ? "page" : undefined}
              onClick={() => go(p)}
            >
              {p}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.pageBtn} ${styles.nav}`}
        onClick={() => go(current + 1)}
        aria-label="다음 페이지"
      >
        ›
      </button>
      <button
        className={`${styles.pageBtn} ${styles.nav}`}
        onClick={() => go(total)}
        aria-label="마지막 페이지"
      >
        »
      </button>
    </nav>
  );
};
