import axios from "axios";
import { ErrorResponse, MovieDetailsResponse, SearchResponse } from "../types/movie";

const API_KEY = import.meta.env.VITE_OMDB_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (
  query: string,
  page = 1
): Promise<SearchResponse> => {
  const response = await axios.get<SearchResponse>(BASE_URL, {
    params: { s: query, page, apikey: API_KEY },
  });
  return response.data;
};

export const getMovieDetails = async (
  id: string
): Promise<MovieDetailsResponse | ErrorResponse> => {
  const response = await axios.get<MovieDetailsResponse | ErrorResponse>(BASE_URL, {
    params: { i: id, apikey: API_KEY },
  });
  return response.data;
};
