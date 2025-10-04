import { Empty } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchBar } from "../components/SearchBar";
import { Loader } from "../components/Loader";
import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";

export const HomePage = () => {
  const { movies, loading, hasMore, handleSearch, loadMore } = useMovies();

  return (
    <div style={{ padding: "2rem" }}>
      <SearchBar onSearch={handleSearch} />

      {loading && movies.length === 0 ? (
        <Loader />
      ) : movies.length === 0 ? (
        <Empty description="No movies found" />
      ) : (
        <InfiniteScroll
          dataLength={movies.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<Loader />}
          style={{ overflow: "visible" }} // allow full-page scrolling
        >
      
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 200px)", gap: "1rem" }}>
  {movies.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie} />
  ))}
</div>
        </InfiniteScroll>
      )}
    </div>
  );
};
