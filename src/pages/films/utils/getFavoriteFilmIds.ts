export const getFavoriteFilmIds = () => {
  const favoriteFilmIds = JSON.parse(
    localStorage.getItem("favoriteFilmIds") ?? "[]"
  ) as string[];

  return favoriteFilmIds;
};
