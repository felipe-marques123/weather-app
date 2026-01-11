export function weatherReducer(state, actions) {
  switch (actions.type) {
    case "SEARCH_CITY": {
      const newSearch = actions.payload.weatherFetch;
      const newRecentSearchs = [
        ...state.recentSearches,
        newSearch.data.location.name,
      ];

      const limitedRecentSearchs =
        newRecentSearchs.length > 3
          ? newRecentSearchs.slice(1)
          : newRecentSearchs;

      console.log(state);

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
          ? newFavoriteCities.slice(1)
          : newFavoriteCities;

      return {
        ...state,
        favorites: limitedFavoriteCities,
        isFavorite: true,
      };
    }
    case "REMOVE_FAVORITE": {
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== actions.payload
        ),
        isFavorite: false,
      };
    }
    case "CHANGE_UNIT": {
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
  }

  return state;
}
