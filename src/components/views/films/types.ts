export interface FilmsApi {
  page: number;
  results: FilmApi[];
  total_pages: number;
  total_results: number;
}

export interface FilmApi {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguageApi;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguageApi {
  En = "en",
  Fr = "fr",
  Tl = "tl",
}

export interface Film extends FilmApi {
  poster: string;
  backdrop: string;
}
