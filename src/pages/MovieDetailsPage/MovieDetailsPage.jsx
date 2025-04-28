{
  /*import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

import backIcon from "../../assets/back.svg";
import styles from "./MovieDetailsPage.module.css";

const API_KEY = "6625483e955431663bda79344d4beaf2";
const BASE_URL = "https://api.themoviedb.org/3";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  const backLink = location.state?.from ?? "/movies";

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Помилка при завантаженні деталей фільму:", error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(backLink);
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

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
        Go back
      </button>

      <div className={styles.movieDetails}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <div className={styles.movieInfo}>
          <h1>{movie.title}</h1>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <hr />
      <div className={styles.additionalInfo}>
        <h2>Additional information</h2>
        <ul>
          <li className={styles.item}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={styles.item}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </>
  );
}*/
}

import { useEffect, useState, useRef } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Outlet,
} from "react-router-dom";

import backIcon from "../../assets/back.svg";
import styles from "./MovieDetailsPage.module.css";

const API_KEY = "6625483e955431663bda79344d4beaf2";
const BASE_URL = "https://api.themoviedb.org/3";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const backLink = useRef(location.state?.from || "/movies");

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Помилка при завантаженні деталей фільму:", error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(backLink.current);
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

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
        Go back
      </button>

      <div className={styles.movieDetails}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <div className={styles.movieInfo}>
          <h1>{movie.title}</h1>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <hr />
      <div className={styles.additionalInfo}>
        <h2>Additional information</h2>
        <ul>
          <li className={styles.item}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={styles.item}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
