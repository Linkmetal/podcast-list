import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h2>
        <a href="/" className={styles.title}>
          Podcaster
        </a>
      </h2>
    </header>
  );
};

export default Header;
