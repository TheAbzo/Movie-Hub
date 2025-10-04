import { Empty } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchBar } from "../../components/SearchBar";
import { Loader } from "../../components/Loader";
import { useMovies } from "../../hooks/useMovies";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import "./style.scss";

export const HomePage = () => {
  const {
    movies,
    query,
    setQuery,
    page,
    loading,
    hasMore,
    hasSearchValue,
    handleSearch,
    loadMore,
    error,
  } = useMovies();

  const isEmptySearch = !hasSearchValue;
  const isLoadingNoResults = loading && movies.length === 0;
  const isNoResults = !loading && movies.length === 0 && hasSearchValue;

  return (
    <div>
      <SearchBar
        className="movie-search"
        value={query}
        onChange={setQuery}
        onSearch={handleSearch}
      />

      <div className="search-content">
        {error ? (
          <p className="text-red-500 text-center mt-4">{error}</p>
        ) : isEmptySearch ? (
          <Empty description="Search for a movie" />
        ) : isLoadingNoResults ? (
          <Loader />
        ) : isNoResults ? (
          <Empty description="No movies found" />
        ) : (
          <InfiniteScroll
            dataLength={movies.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<Loader />}
            style={{ overflow: "visible" }}
          >
            <div className="movie-grid">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  movies={movies}
                  query={query}
                  page={page}
                />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};
