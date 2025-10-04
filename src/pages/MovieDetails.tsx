import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieDetails as MovieDetailsType } from "../types/movie";
import { ErrorMessage } from "../components/ErrorMessage";
import { getMovieDetails } from "../services/api";

export const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    getMovieDetails(id)
      .then((res) => {
        if (res.Response === "True") setMovie(res);
        else setError(res.Error || "Not found");
      })
      .catch(() => setError("Failed to fetch details"));
  }, [id]);

  if (error) return <ErrorMessage message={error} />;
  if (!movie) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-4 px-4 py-2 bg-gray-200 rounded"
      >
        ← Back
      </button>
      <div className="grid md:grid-cols-2 gap-6">
        <img src={movie.Poster} alt={movie.Title} className="rounded" />
        <div>
          <h1 className="text-2xl font-bold">{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p className="mt-2">{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};
