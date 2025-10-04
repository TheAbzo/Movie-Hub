import { MovieSummary } from "../types/movie";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }: { movie: MovieSummary }) => (
  <Link to={`/movie/${movie.imdbID}`} className="block cursor-pointer">
    <div className="bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition">
      <img 
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"} 
        alt={movie.Title} 
        className="w-full h-64 object-cover rounded" 
      />
      <h3 className="mt-2 font-semibold">{movie.Title}</h3>
      <p className="text-sm text-gray-500">{movie.Year}</p>
    </div>
  </Link>
);
