import { FaCloudSun, FaWind } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

import styles from "./styles.module.css";

export function WeatherFeeling() {
  const { state } = useContext(WeatherContext);

  return (
    <ul className={styles.feeling}>
      <li>
        <FaCloudSun />
        <span>
          Sensação:{" "}
          {state.unit === "metric"
            ? `${state.weatherData.feelslike_c}º`
            : `${state.weatherData.feelslike_f}º`}
        </span>
      </li>
      <li>
        <FaWind />
        <span>
          Vento:{" "}
          {state.unit === "metric"
            ? `${state.weatherData.wind_kph} km/h`
            : `${state.weatherData.wind_mph} mp/h`}
        </span>
      </li>
      <li>
        <IoIosWater />
        <span>Umidade: {state.weatherData.humidity}%</span>
      </li>
    </ul>
  );
}
