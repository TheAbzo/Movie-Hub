export type MovieSummary = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  imdbRating?: string;
};

export type SearchResponse = {
  Search: MovieSummary[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
};

export type MovieDetails = MovieSummary & {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
};

export type ErrorResponse = {
  Response: "False";
  Error: string;
};

export type MovieDetailsResponse = MovieDetails & {
  Response: "True";
};
