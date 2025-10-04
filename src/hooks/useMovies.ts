import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MovieSummary } from "../types/movie";
import { searchMovies } from "../services/api";

export const useMovies = () => {
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hasSearchValue, setHasSearchValue] = useState(false);

  const [restored, setRestored] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Restore state when navigating back
  useEffect(() => {
    if (location.state?.movies) {
      setMovies(location.state.movies);
      setQuery(location.state.query);
      setPage(location.state.page);
      setHasSearchValue(true);
      setRestored(true); // skip first debounce
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovies = async (searchQuery: string, newPage = 1) => {
    if (!searchQuery) return;
    setLoading(true);
    try {
      const data = await searchMovies(searchQuery, newPage);
      if (data.Response === "True") {
        const newMovies = newPage === 1 ? data.Search : [...movies, ...data.Search];
        setMovies(newMovies);
        setHasMore(newMovies.length < parseInt(data.totalResults, 10));

        // persist state in navigation
        navigate(".", {
          replace: true,
          state: { movies: newMovies, query: searchQuery, page: newPage },
        });
      } else {
        setMovies([]);
        setHasMore(false);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const clearSearch = () => {
    setHasSearchValue(false);
    setMovies([]);
    setQuery("");
    setPage(1);
    setHasMore(true);
    navigate(".", { replace: true, state: {} });
  };

  const handleSearch = (value: string) => {
    if (!value) {
      clearSearch();
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

  // Debounce search on typing, including empty query case
  useEffect(() => {
    if (restored) {
      setRestored(false); // skip first run after restore
      return;
    }

    const delayDebounce = setTimeout(() => {
      if (query.trim() === "") {
        clearSearch(); // handle backspace-to-empty
      } else {
        handleSearch(query);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {
    movies,
    setMovies,
    query,
    setQuery,
    page,
    setPage,
    loading,
    hasMore,
    hasSearchValue,
    handleSearch,
    loadMore,
  };
};
