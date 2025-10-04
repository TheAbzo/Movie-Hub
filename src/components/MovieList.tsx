import { MovieSummary } from "../types/movie";
import { MovieCard } from "./MovieCard/MovieCard";

type Props = {
  movies: MovieSummary[];
};

export const MovieList = ({ movies }: Props) => (
<div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(232px,1fr))]">
    {movies.map((m) => (
      <MovieCard key={m.imdbID} movie={m} />
    ))}
  </div>
);
