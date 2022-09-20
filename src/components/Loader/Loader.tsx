import styles from "./Loader.module.css";

type LoaderProps = {
  isVisible: boolean;
};

export const Loader = ({ isVisible }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <span
        className={`${styles.loader}${!isVisible ? ` ${styles.hidden}` : ""}`}
      />
    </div>
  );
};
