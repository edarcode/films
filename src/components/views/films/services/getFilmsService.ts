import type { Film } from "../types";
import { getFilmPageService } from "./getFilmPageService";

export const getFilmsService = async (params: Params = {}) => {
  const { totalPages = 1 } = params;

  let allFilms: Film[] = [];

  for (let i = 0; i < totalPages; i++) {
    const page = await getFilmPageService(i + 1);
    allFilms = [...allFilms, ...page];
  }

  return allFilms;
};

type Params = {
  totalPages?: number;
};
