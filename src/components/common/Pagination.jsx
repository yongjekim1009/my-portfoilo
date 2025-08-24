import styles from "./Pagination.module.css";

const Pagination = ({ current = 1, totalPages = 1, onChange }) => {
  if (totalPages <= 1) return null;

  const go = (n) => () => onChange?.(n);

  // 페이지 번호(최대 5개 윈도우)
  const windowSize = 5;
  const half = Math.floor(windowSize / 2);
  let start = Math.max(1, current - half);
  let end = Math.min(totalPages, start + windowSize - 1);
  if (end - start + 1 < windowSize) start = Math.max(1, end - windowSize + 1);

  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <nav className={styles["pagination"]} aria-label="페이지네이션">
      <button
        className={styles["nav-btn"]}
        onClick={go(1)}
        disabled={current === 1}
      >
        « 처음
      </button>
      <button
        className={styles["nav-btn"]}
        onClick={go(Math.max(1, current - 1))}
        disabled={current === 1}
      >
        ‹ 이전
      </button>

      <ul className={styles["pages"]}>
        {pages.map((n) => (
          <li key={n}>
            <button
              className={`${styles["page-btn"]} ${
                n === current ? styles["active"] : ""
              }`}
              onClick={go(n)}
              aria-current={n === current ? "page" : undefined}
            >
              {n}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={styles["nav-btn"]}
        onClick={go(Math.min(totalPages, current + 1))}
        disabled={current === totalPages}
      >
        다음 ›
      </button>
      <button
        className={styles["nav-btn"]}
        onClick={go(totalPages)}
        disabled={current === totalPages}
      >
        끝 »
      </button>
    </nav>
  );
};

export default Pagination;
