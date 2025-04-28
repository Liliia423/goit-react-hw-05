import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieReviews.module.css";

const API_KEY = "6625483e955431663bda79344d4beaf2";
const BASE_URL = "https://api.themoviedb.org/3";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
        );
        const data = await response.json();
        setReviews(data.results || []);
      } catch (error) {
        console.error("Помилка при завантаженні відгуків:", error);
      }
    }

    fetchReviews();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <ul className={styles.reviewList}>
      {reviews.map((review) => (
        <li key={review.id} className={styles.reviewItem}>
          <h3 className={styles.author}>Author: {review.author}</h3>
          <p className={styles.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
