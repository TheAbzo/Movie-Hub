import { MovieSummary } from "../types/movie";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }: { movies: MovieSummary[] }) => (
  <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
    {movies.map((m) => <MovieCard key={m.imdbID} movie={m} />)}
  </div>
);
