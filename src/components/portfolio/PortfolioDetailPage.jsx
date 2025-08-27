import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./PortfolioDetailPage.module.css";
import usePortfolioStore from "../../store/portfolioStore";

const PortfolioDetailPage = () => {
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

  const detailSrc =
    typeof item.images === "string" && item.images ? item.images : "";

  return (
    <div className={styles["detail-container"]}>
      <div className={styles["detail-category-name"]}>{item.category}</div>
      <h1 className={styles["detail-title"]}>{item.title || item.alt}</h1>
      <p className={styles["detail-title-content"]}>
        {item.description || "프로젝트 설명을 입력해주세요."}
      </p>

      <div className={styles["detail-img"]}>
        {detailSrc ? (
          <figure className={styles["detail-image-wrap"]}>
            <img src={detailSrc} alt={item.alt || item.title} />
          </figure>
        ) : (
          <p>이미지가 없습니다.</p>
        )}
      </div>

      <div className={styles["detail-footer-nav"]}>
        <Link to="/portfolio" className={styles["back-link"]}>
          ← 목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
