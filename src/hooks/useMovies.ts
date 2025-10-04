import { useState } from "react";
import { MovieSummary } from "../types/movie";
import { searchMovies } from "../services/api";

export const useMovies = () => {
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hasSearchValue, setHasSearchValue] = useState(false);



  const fetchMovies = async (searchQuery: string, newPage = 1) => {
  if (!searchQuery) return;
  setLoading(true);
  try {
    const data = await searchMovies(searchQuery, newPage);
    if (data.Response === "True") {
      const newMovies = newPage === 1 ? data.Search : [...movies, ...data.Search];
      setMovies(newMovies);

      // use totalResults to know when to stop
      setHasMore(newMovies.length < parseInt(data.totalResults, 10));
    } else {
      setMovies([]);
      setHasMore(false);
    }
  } catch (err) {
    console.error(err);
  }
  setLoading(false);
};


  const handleSearch = (value: string) => {
    if(!value) {
      setHasSearchValue(false);
      setMovies([]);
      return; 
    }
    setQuery(value);
    setPage(1);
    fetchMovies(value, 1);
    setHasSearchValue(true);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(query, nextPage);
  };

  return { movies, loading, hasMore, hasSearchValue, handleSearch, loadMore };
};
