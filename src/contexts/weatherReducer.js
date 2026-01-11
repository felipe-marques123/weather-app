export function weatherReducer(state, actions) {
  switch (actions.type) {
    case "SEARCH_CITY": {
      const newSearch = actions.payload.weatherFetch;
      const newRecentSearchs = [
        newSearch.data.location.name,
        ...state.recentSearches,
      ];

      const limitedRecentSearchs =
        newRecentSearchs.length > 3
          ? newRecentSearchs.slice(0, 3)
          : newRecentSearchs;

      localStorage.setItem(
        "weatherRecentCities",
        JSON.stringify(limitedRecentSearchs)
      );

      return {
        ...state,
        currentCity: newSearch.data.location.name,
        weatherData: newSearch.data.current,
        recentSearches: limitedRecentSearchs,
        isFavorite: state.favorites.includes(newSearch.data.location.name),
      };
    }
    case "ADD_FAVORITE": {
      const newFavoriteCities = [...state.favorites, actions.payload];

      const limitedFavoriteCities =
        newFavoriteCities.length > 3
          ? newFavoriteCities.slice(0, 3)
          : newFavoriteCities;

      localStorage.setItem(
        "weatherFavoriteCities",
        JSON.stringify(limitedFavoriteCities)
      );

      return {
        ...state,
        favorites: limitedFavoriteCities,
        isFavorite: true,
      };
    }
    case "REMOVE_FAVORITE": {
      const updatedFavorites = state.favorites.filter(
        (favorite) => favorite !== actions.payload
      );

      localStorage.setItem(
        "weatherFavoriteCities",
        JSON.stringify(updatedFavorites)
      );

      return {
        ...state,
        favorites: updatedFavorites,
        isFavorite: false,
      };
    }
    case "CHANGE_UNIT": {
      localStorage.setItem("weatherUnit", JSON.stringify(actions.payload));

      return {
        ...state,
        unit: actions.payload,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: actions.payload,
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        error: actions.payload,
      };
    }
    case "LOAD_FROM_STORAGE": {
      return {
        ...state,
        favorites: actions.payload.favorites || [],
        recentSearches: actions.payload.recentSearches || [],
        unit: actions.payload.unit || "metric",
      };
    }
  }

  return state;
}
