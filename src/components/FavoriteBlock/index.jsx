import { WeatherIcon } from "../WeatherIcon";
import { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import axios from "axios";

import styles from "./styles.module.css";

export function FavoriteBlock({ name }) {
  const [weatherData, setWeatherData] = useState(null);
  const { state, getWeather } = useContext(WeatherContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=737668b575fa4aad87235412260901&q=${encodeURIComponent(
            name
          )}&lang=pt`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(`Erro ao buscar dados de ${name}:`, error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [name]);

  if (loading) return <div>Carregando...</div>;
  if (!weatherData) return;

  return (
    <a className={styles.favoriteBlock} onClick={() => getWeather(name)}>
      <span className={styles.cityName}>{name}</span>
      <WeatherIcon
        code={weatherData.current.condition.code}
        isDay={weatherData.current.is_day}
      />
      <span className={styles.temperature}>
        {state.unit === "metric"
          ? `${weatherData.current.temp_c}º`
          : `${weatherData.current.temp_f}º`}
      </span>
    </a>
  );
}
