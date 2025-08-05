import styles from "../../css/common/Button.module.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "non-select-btn",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
