import { getFavoriteFilmIds } from "./getFavoriteFilmIds";

export const favoriteFilmIdsToggle = (id?: string) => {
  if (!id) return;

  const filmIds = getFavoriteFilmIds();

  const favoriteFilmIds = new Set(filmIds);

  if (favoriteFilmIds.has(id)) favoriteFilmIds.delete(id);
  else favoriteFilmIds.add(id);

  localStorage.setItem(
    "favoriteFilmIds",
    JSON.stringify(Array.from(favoriteFilmIds))
  );
};
