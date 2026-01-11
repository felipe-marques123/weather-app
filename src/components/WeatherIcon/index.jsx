import { resolveWeatherType } from "../../utils/resolveWeatherType";
import { ICON_BY_TYPE } from "../../utils/weatherIcons";

import styles from "./styles.module.css";

export function WeatherIcon({ code, isDay }) {
  const type = resolveWeatherType(code, isDay);
  const icon = ICON_BY_TYPE[type];

  return (
    <img className={styles.weatherIcon} src={icon} alt={type} title={type} />
  );
}
