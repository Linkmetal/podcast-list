import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.title} to={"/"}>
        <h2>Podcaster</h2>
      </Link>
    </header>
  );
};

export default Header;
