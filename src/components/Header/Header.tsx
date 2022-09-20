import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <h2 onClick={goToHome} className={styles.title}>
        Podcaster
      </h2>
    </header>
  );
};

export default Header;
