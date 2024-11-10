import type { FilmApi, FilmsApi } from "../types";

export const getFilmsService = async ({ page = 1 }: Params = {}) => {
  const TMDB_API_KEY = import.meta.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=es-ES&page=${page}`;

  const res = await fetch(url);
  const films = (await res.json()) as FilmsApi;
  const size = "w300";
  const baseImageUrl = `https://image.tmdb.org/t/p/${size}`;

  const results = films.results.map((item) => ({
    ...item,
    poster: `${baseImageUrl}${item.poster_path}`,
    backdrop: `${baseImageUrl}${item.backdrop_path}`,
  }));

  return results;
};

type Params = {
  page?: number;
};

export interface Film extends FilmApi {
  poster: string;
  backdrop: string;
}
