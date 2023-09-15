import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
const NavBar = ({ onSearch }) => {
  return (
    <nav className={styles.nav}>
      <img
        src="https://www.pngplay.com/wp-content/uploads/10/Rick-And-Morty-Transparent-Background.png"
        alt="Rick and Morty"
        width="20%"
      />
      <Link to="/home" className={styles.links}>
        HOME
      </Link>
      <Link to="/about" className={styles.links}>
        ABOUT
      </Link>
      <Link to="/favorites" className={styles.links}>
        FAVORITES
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default NavBar;
