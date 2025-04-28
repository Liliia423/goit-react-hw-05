import { useParams, useLocation, useNavigate } from "react-router-dom";
import backIcon from "../../assets/back.svg";
import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Запам'ятати, звідки користувач прийшов
  const backLink = location.state?.from ?? "/";

  const handleGoBack = () => {
    navigate(backLink);
  };

  return (
    <>
      <button
        className={styles["button-fot-search-field"]}
        type="button"
        onClick={handleGoBack}
      >
        <img
          src={backIcon}
          alt="Back"
          style={{ width: "16px", height: "16px", marginRight: "8px" }}
        />
        Back
      </button>
      <h1 className={styles["head"]}>Movie Details</h1>
      <p>Movie ID: {movieId}</p>
    </>
  );
}
