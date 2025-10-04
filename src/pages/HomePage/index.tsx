import { Empty } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { SearchBar } from "../../components/SearchBar";
import { Loader } from "../../components/Loader";
import { useMovies } from "../../hooks/useMovies";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import './style.scss';

export const HomePage = () => {
  const { movies, loading, hasMore, hasSearchValue, handleSearch, loadMore } = useMovies();

  return (
    <div>
      <SearchBar className="movie-search" onSearch={handleSearch} />

      <div className="search-content">
   {!hasSearchValue ? (
    <Empty description="Search for a movie" />   
  ) : loading && movies.length === 0 ? (
    <Loader />
  ) : !loading && movies.length === 0 ? (
    <Empty description="No movies found" />
  ) : (
          <InfiniteScroll
            dataLength={movies.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<Loader />}
            style={{ overflow: "visible" }} 
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 240px)", gap: "1rem" }}>
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};
