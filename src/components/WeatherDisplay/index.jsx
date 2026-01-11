import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WeatherContext } from "../../contexts/WeatherContext";

import { WeatherIcon } from "../WeatherIcon";

import styles from "./styles.module.css";
import { WeatherFeeling } from "../WeatherFeeling";

export function WeatherDisplay() {
  const { state, handleFavorite } = useContext(WeatherContext);

  // if (!state.weatherData) return;

  return (
    <div className={styles.weatherDisplay}>
      <div className={styles.header}>
        {/* <h1>{state.currentCity}</h1> */}
        <h1>Paris</h1>
        {/* <span className={styles.searchDate}>
          {new Date(state.weatherData.last_updated_epoch * 1000)
            .toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
            .replace(/^(\d{2}) de ([^,]+), (\d{4})$/, "$1 de $2, $3")}
        </span> */}
        <span className={styles.searchDate}>25 de Abril, 2025</span>
        {/* <button onClick={handleFavorite}>
          {state.isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button> */}
        <button>
          <FaHeart />
        </button>
      </div>
      <div className={styles.body}>
        {/* <WeatherIcon code={state.weatherData.condition.code} isDay={state.weatherData.is_day} /> */}
        <WeatherIcon code={1000} isDay={1} />
        {/* <span className={styles.conditionText}>{state.weatherData.condition.text}</span> */}
        <span className={styles.conditionText}>Parcialmente Nublado</span>
        {/* <span className={styles.temperature}>{state.weatherData.temp_c}º</span> */}
        <span className={styles.temperature}>20º</span>
      </div>
      <WeatherFeeling />
    </div>
  );
}
