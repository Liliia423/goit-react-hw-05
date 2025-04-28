import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const API_KEY = "6625483e955431663bda79344d4beaf2"; // Сюди встав свій ключ
const BASE_URL = "https://api.themoviedb.org/3";

export default function MoviesPage() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return; // Якщо поле пусте — нічого не робимо

    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${inputValue}`
      );
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Помилка при запиті фільмів:", error);
    }

    setInputValue(""); // Очищаємо інпут після пошуку
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          className={styles["search-field-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          value={inputValue}
          onChange={handleChange}
        />
        <button className={styles["button-fot-search-field"]} type="submit">
          Search
        </button>
      </form>

      {/* Виводимо результати */}
      <MovieList movies={movies} />
    </>
  );
}
