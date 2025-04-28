import { NavLink as RouterNavLink } from "react-router-dom";
import styles from "./NavLink.module.css";

export default function NavLink({ to, children }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
      }
    >
      {children}
    </RouterNavLink>
  );
}
