import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./PortfolioDetail.module.css";
import usePortfolioStore from "../../store/portfolioStore";

const PortfolioDetail = () => {
  const { id } = useParams();
  const findById = usePortfolioStore((s) => s.findById);

  const item = useMemo(() => findById(id), [id, findById]);

  if (!item) {
    return (
      <div className={styles["detail-container"]}>
        <h1 className={styles["detail-title"]}>프로젝트를 찾을 수 없습니다.</h1>
        <p className={styles["detail-title-content"]}>
          잘못된 주소이거나 삭제된 항목일 수 있어요.
        </p>
        <Link to="/portfolio" className={styles["back-link"]}>
          ← 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className={styles["detail-container"]}>
      <div className={styles["detail-category-name"]}>{item.category}</div>
      <h1 className={styles["detail-title"]}>{item.title || item.alt}</h1>
      <p className={styles["detail-title-content"]}>
        {item.description || "프로젝트 설명을 입력해주세요."}
      </p>

      {/* 상세 이미지 갤러리 */}
      <div className={styles["detail-image-grid"]}>
        {(item.images || []).map((src, i) => (
          <figure key={i} className={styles["detail-image-wrap"]}>
            <img src={src} alt={`${item.alt || item.title} - ${i + 1}`} />
          </figure>
        ))}
      </div>

      <div className={styles["detail-footer-nav"]}>
        <Link to="/portfolio" className={styles["back-link"]}>
          ← 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default PortfolioDetail;
