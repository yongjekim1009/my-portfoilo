import Button from "../../Button";
import styles from "../../../../css/common/home/portfolioPreviewSection/CategoryButton.module.css";

const CATEGORIES = [
  { id: "web", label: "웹디자인" },
  { id: "detail", label: "상세페이지" },
  { id: "banner", label: "배너" },
];

const CategoryButtons = ({ selected, onSelect }) => {
  return (
    <div className={styles["category-btn-group"]}>
      {CATEGORIES.map((category) => (
        <Button
          key={category.id}
          variant={selected === category.id ? "active-btn" : "disabled-btn"}
          onClick={() => onSelect(category.id)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryButtons;
