import axios from "axios";
import { useReducer, useState } from "react";
import { WeatherContext } from "./WeatherContext";
import { weatherReducer } from "./weatherReducer";

export function WeatherProvider({ children }) {
  const initialState = {
    currentCity: null,
    weatherData: null,
    isFavorite: false,
    favorites: [],
    recentSearches: [],
    unit: "metric",
    loading: false,
  };

  const [inputSearchCity, setInputSearchCity] = useState("");
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  async function getWeather(e) {
    if (e.key === "Enter") {
      const convertedSearchCity = encodeURIComponent(inputSearchCity);

      try {
        dispatch({ type: "SET_LOADING", payload: true });

        const weatherFetch = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=737668b575fa4aad87235412260901&q=${convertedSearchCity}&lang=pt`
        );

        dispatch({ type: "SEARCH_CITY", payload: { weatherFetch } });
        dispatch({ type: "SET_LOADING", payload: false });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      }
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
        handleFavorite,
        changeUnitSystem,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
