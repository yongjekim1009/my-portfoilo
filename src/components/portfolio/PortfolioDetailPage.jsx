import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./PortfolioDetailPage.module.css";
import usePortfolioStore from "../../store/portfolioStore";
import { Button } from "../common/Button";

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const findById = usePortfolioStore((s) => s.findById);

  const item = useMemo(() => findById(id), [id, findById]);

  const handleBack = () => {
    navigate("/portfolio");
  };

  if (!item) {
    return (
      <div className={styles["detail-container"]}>
        <h1 className={styles["detail-title"]}>프로젝트를 찾을 수 없습니다.</h1>
        <p className={styles["detail-title-content"]}>
          잘못된 주소이거나 삭제된 항목일 수 있어요.
        </p>
        <Button variant="line-btn" onClick={handleBack}>
          목록
        </Button>
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

      <div className={styles["detail-list"]}>
        <Button variant="line-btn" onClick={handleBack}>
          목록
        </Button>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
