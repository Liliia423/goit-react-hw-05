import NavLink from "../NavLink/NavLink";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navmenu}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
}
