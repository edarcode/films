import { For } from "solid-js";
import { getFavoriteFilmIds } from "../utils/getFavoriteFilmIds";
import css from "./FavoriteFilmIds.module.css";

export default function FavoriteFilmIds() {
  const ids = getFavoriteFilmIds();
  console.log(ids);

  return (
    <div class={css.favorites}>
      <For each={ids}>{(id) => <span>{id}</span>}</For>
    </div>
  );
}
