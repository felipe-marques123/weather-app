import axios from "axios";
import { useReducer, useState } from "react";
import { WeatherContext } from "./WeatherContext";
import { weatherReducer } from "./weatherReducer";

export function WeatherProvider({ children }) {
  const loadInitialState = () => {
    const storedFavorites = localStorage.getItem("weatherFavoriteCities");
    const storedRecent = localStorage.getItem("weatherRecentCities");
    const storedUnit = localStorage.getItem("weatherUnit");

    return {
      currentCity: null,
      weatherData: null,
      isFavorite: false,
      favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
      recentSearches: storedRecent ? JSON.parse(storedRecent) : [],
      unit: storedUnit ? JSON.parse(storedUnit) : "metric",
      loading: false,
    };
  };

  const [inputSearchCity, setInputSearchCity] = useState("");
  const [state, dispatch] = useReducer(weatherReducer, loadInitialState());

  async function getWeather(cityName) {
    const convertedSearchCity = encodeURIComponent(cityName);

    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const weatherFetch = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=737668b575fa4aad87235412260901&q=${convertedSearchCity}&lang=pt`
      );

      dispatch({ type: "SEARCH_CITY", payload: { weatherFetch } });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error });
    }
  }

  async function handleEnterInput(e, cityName) {
    if (e.key === "Enter") {
      getWeather(cityName);

      setInputSearchCity("");
    }
  }

  function handleFavorite() {
    if (state.currentCity) {
      const isAlreadyFavorite = state.favorites.includes(state.currentCity);

      if (isAlreadyFavorite) {
        dispatch({ type: "REMOVE_FAVORITE", payload: state.currentCity });
      } else {
        dispatch({ type: "ADD_FAVORITE", payload: state.currentCity });
      }
    }
  }

  function changeUnitSystem() {
    if (state.unit === "metric") {
      dispatch({ type: "CHANGE_UNIT", payload: "imperial" });
    } else {
      dispatch({ type: "CHANGE_UNIT", payload: "metric" });
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        state,
        dispatch,
        inputSearchCity,
        setInputSearchCity,
        getWeather,
        handleEnterInput,
        handleFavorite,
        changeUnitSystem,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
