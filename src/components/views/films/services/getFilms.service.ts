import type { Films } from "../types";

export const getFilmsService = async ({ page = 1 }: Params = {}) => {
  const TMDB_API_KEY = import.meta.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=es-ES&page=${page}`;

  const res = await fetch(url);
  const films = (await res.json()) as Films;
  const size = "w300";
  const baseImageUrl = `https://image.tmdb.org/t/p/${size}`;

  return {
    ...films,
    results: films.results.map((item) => {
      return {
        ...item,
        poster: `${baseImageUrl}${item.poster_path}`,
        backdrop: `${baseImageUrl}${item.backdrop_path}`,
      };
    }),
  };
};

type Params = {
  page?: number;
};
