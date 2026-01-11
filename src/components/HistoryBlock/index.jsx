import { LuClock2 } from "react-icons/lu";
import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

import styles from "./styles.module.css";

export function HistoryBlock({ name }) {
  const { getWeather } = useContext(WeatherContext);

  return (
    <a className={styles.historyBlock} onClick={() => getWeather(name)}>
      <LuClock2 />
      <span>{name}</span>
    </a>
  );
}
