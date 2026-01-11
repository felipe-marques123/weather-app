import { FavoriteBlock } from "../FavoriteBlock";
import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

import styles from "./styles.module.css";

export function FavoritesDisplay() {
  const { state } = useContext(WeatherContext);

  return (
    <div className={styles.favoritesDisplay}>
      <div className={styles.header}>
        <h3>Cidades Favoritas</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.bodySlider}>
          {state.favorites.map((item) => (
            <FavoriteBlock name={item} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
