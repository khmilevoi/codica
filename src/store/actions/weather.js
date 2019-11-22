import { weather } from "constants/actionTypes";
import { createForecastRequest } from "api/WeatherAPI";
import { setError } from "./app";

export const addCities = cities => ({
  type: weather.ADD_CITIES,
  payload: cities
});

export const removeCity = city => ({
  type: weather.REMOVE_CITY,
  payload: city
});

export const loading = cities => ({
  type: weather.LOADING,
  payload: cities
});

export const loaded = cities => ({
  type: weather.LOADED,
  payload: cities
});

export const fetchCities = (...cities) => async dispatch => {
  dispatch(loading(cities));

  const data = await fetch(createForecastRequest(...cities)).catch(error =>
    dispatch(setError(error))
  );
  const parsed = await data.json();
  dispatch(addCities(parsed.list));

  dispatch(loaded(cities));
};
