import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const API_KEY = "6625483e955431663bda79344d4beaf2";
const BASE_URL = "https://api.themoviedb.org/3";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
        );
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Помилка при запиті фільмів:", error);
      }
    }

    fetchMovies();
  }, [query]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedQuery = inputValue.trim();
    if (trimmedQuery === "") return;

    setSearchParams({ query: trimmedQuery });
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

      <MovieList movies={movies} />
    </>
  );
}
