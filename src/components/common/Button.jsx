import styles from "./Button.module.css";

export const Button = ({
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
