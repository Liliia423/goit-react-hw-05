import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieCast.module.css";

const API_KEY = "6625483e955431663bda79344d4beaf2";
const BASE_URL = "https://api.themoviedb.org/3";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        const data = await response.json();
        setCast(data.cast || []);
      } catch (error) {
        console.error("Помилка при завантаженні акторів:", error);
      }
    }

    fetchCast();
  }, [movieId]);

  if (cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <ul className={styles.castList}>
      {cast.map((actor) => (
        <li key={actor.cast_id} className={styles.castItem}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
            className={styles.castImage}
          />
          <p className={styles.actorName}>{actor.name}</p>
          <p className={styles.character}>
            Character: {actor.character || "Unknown"}
          </p>
        </li>
      ))}
    </ul>
  );
}
