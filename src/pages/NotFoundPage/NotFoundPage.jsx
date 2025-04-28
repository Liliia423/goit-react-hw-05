import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.text}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className={styles.homeLink}>
        Go to Home
      </Link>
    </div>
  );
}
