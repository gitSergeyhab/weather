import { ICityWeather } from "../types/weather-types";

const WEATHER_KEY = 'WEATHER_KEY'

export const setWeatherCitiesToLS = (weatherCities: ICityWeather[]) => {
  localStorage.setItem(WEATHER_KEY,  JSON.stringify(weatherCities));
}


export const getWeatherCitiesFromLS = () => {
  const citiesString = localStorage.getItem(WEATHER_KEY);
  if (!citiesString) return [];
  const citiesList = JSON.parse(citiesString);
  if (citiesList instanceof Array) {
    return citiesList as ICityWeather[]
  }
  return [];
}
