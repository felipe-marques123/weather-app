export const WEATHER_TYPE = {
  CLEAR_DAY: "clear_day",
  CLEAR_NIGHT: "clear_night",
  PARTLY_CLOUDY_DAY: "partly_cloudy_day",
  PARTLY_CLOUDY_NIGHT: "partly_cloudy_night",
  CLOUDY: "cloudy",
  FOG: "fog",
  DRIZZLE_DAY: "drizzle_day",
  DRIZZLE_NIGHT: "drizzle_night",
  RAIN: "rain",
  FREEZING_RAIN: "freezing_rain",
  SLEET: "sleet",
  SNOW: "snow",
  ICE: "ice",
  THUNDER: "thunder",
};

export function resolveWeatherType(code, isDay) {
  if (code === 1000 && isDay === 1) return WEATHER_TYPE.CLEAR_DAY;
  if (code === 1000 && isDay === 0) return WEATHER_TYPE.CLEAR_NIGHT;

  if (code === 1003 && isDay === 1) return WEATHER_TYPE.PARTLY_CLOUDY_DAY;
  if (code === 1003 && isDay === 0) return WEATHER_TYPE.PARTLY_CLOUDY_NIGHT;

  if (code === 1006 || code === 1009) return WEATHER_TYPE.CLOUDY;

  if (code >= 1030 && code <= 1147) return WEATHER_TYPE.FOG;

  if (code >= 1150 && code <= 1171 && isDay === 1)
    return WEATHER_TYPE.DRIZZLE_DAY;
  if (code >= 1150 && code <= 1171 && isDay === 0)
    return WEATHER_TYPE.DRIZZLE_NIGHT;

  if (code >= 1180 && code <= 1195) return WEATHER_TYPE.RAIN;

  if (code >= 1198 && code <= 1201) return WEATHER_TYPE.FREEZING_RAIN;

  if (code >= 1204 && code <= 1207) return WEATHER_TYPE.SLEET;

  if (code >= 1210 && code <= 1225) return WEATHER_TYPE.SNOW;

  if (code === 1237 || (code >= 1261 && code <= 1264)) {
    return WEATHER_TYPE.ICE;
  }

  if (code >= 1273 && code <= 1282) return WEATHER_TYPE.THUNDER;

  return WEATHER_TYPE.CLOUDY; // fallback seguro
}
