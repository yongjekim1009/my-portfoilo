import styles from "../../css/common/Button.module.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
