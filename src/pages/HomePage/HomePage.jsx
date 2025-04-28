import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";

const API_KEY = "6625483e955431663bda79344d4beaf2";
const BASE_URL = "https://api.themoviedb.org/3";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Помилка при отриманні трендових фільмів:", error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
}
