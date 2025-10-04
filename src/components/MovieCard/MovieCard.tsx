import { MovieSummary } from "../../types/movie";
import { useNavigate } from "react-router-dom";
import "./style.scss";

type Props = {
  movie: MovieSummary;
  movies?: MovieSummary[];
  query?: string;
  page?: number;
};

export const MovieCard = ({ movie, movies, query, page }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`, {
      state: { movies, query, page },
    });
  };

  return (
    <div onClick={handleClick} className="block cursor-pointer no-underline text-inherit">
      <div className=" movie-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col h-96">
        <div className="h-[80%]">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
            alt={movie.Title}
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>

        <div className="h-[20%] bg-gray-100 p-4 flex flex-col justify-between">
          <h3 className=" movie-title transition-all" title={movie.Title}>
            {movie.Title}
          </h3>
          <div className="movie-card-footer flex justify-between items-center text-sm text-gray-600">
            <p>{movie.Year}</p>
            <span className=" movie-rate bg-yellow-400 text-gray-900 font-bold px-2 py-1 rounded">
              ⭐ {movie.imdbRating || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
