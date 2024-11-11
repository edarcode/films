import type { FilmsApi } from "../types";

export const getFilmPageService = async (page: number) => {
  const TMDB_API_KEY = import.meta.env.PUBLIC_TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=es-ES&page=${page}`;

  const res = await fetch(url);
  const films = (await res.json()) as FilmsApi;

  const baseImageUrlPoster = `https://image.tmdb.org/t/p/w300`;
  const baseImageUrlBackdrop = `https://image.tmdb.org/t/p/w500`;

  const results = films.results.map((item) => ({
    ...item,
    poster: `${baseImageUrlPoster}${item.poster_path}`,
    backdrop: `${baseImageUrlBackdrop}${item.backdrop_path}`,
  }));

  return results;
};
