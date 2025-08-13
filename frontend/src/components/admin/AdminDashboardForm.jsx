import styles from "./AdminDashboardForm.module.css";
import Button from "./../common/Button";

const mockItems = [
  {
    id: 1,
    number: "01",
    title: "포트폴리오 제목 타이틀 공간 01",
    date: "2023.12.25",
  },
  {
    id: 2,
    number: "02",
    title: "포트폴리오 제목 타이틀 공간 02",
    date: "2023.12.25",
  },
  {
    id: 3,
    number: "03",
    title: "포트폴리오 제목 타이틀 공간 03",
    date: "2023.12.25",
  },
  {
    id: 4,
    number: "04",
    title: "포트폴리오 제목 타이틀 공간 04",
    date: "2023.12.25",
  },
  {
    id: 9999,
    number: "9,999",
    title: "포트폴리오 제목 타이틀 공간 9,999",
    date: "2023.12.25",
  },
];

export const AdminDashboardForm = () => {
  return (
    <div className={styles["dashboard-page"]}>
      <div className={styles["dashboard-container"]}>
        {/* 헤더 */}
        <div className={styles["dashboard-header"]}>
          <h2>관리자 등록</h2>
          <div className={styles.titleDivider} aria-hidden="true" />
        </div>

        {/* 목록 */}
        <section
          className={styles["dashboard-list-section"]}
          aria-labelledby="admin-list-heading"
        >
          <h3 id="admin-list-heading" className={styles.srOnly}>
            목록
          </h3>

          <table className={styles["table-container"]}>
            <tbody>
              {mockItems.map((item) => (
                <tr key={item.id}>
                  <td className={styles["row-num"]}>{item.number}</td>
                  <td className={styles["row-title"]}>
                    <a href="#">{item.title}</a>
                  </td>
                  <td className={styles["row-date"]}>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 페이지네이션 (분리 컴포넌트) */}
        {/* <Pagination
          current={current}
          total={total}
          onChange={handlePageChange}
          className={styles.paginationWrap}
        /> */}

        {/* 액션 버튼 */}
        <div className={styles["btn-group"]}>
          <Button variant={"active-btn"} onClick={() => alert("등록하기")}>
            등록하기
          </Button>
          <Button variant={"line-btn"} onClick={() => alert("삭제")}>
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
};
