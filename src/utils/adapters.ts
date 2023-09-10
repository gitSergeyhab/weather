import { CityData, ICityItem } from "../types/city-types";
import { ICityWeather, WeatherType } from "../types/weather-types";
import { getDirectionFromDeg, getSimpleConditionCode, getWindString } from "./utils";

export const adaptServerCityToCityItem = (serverCity: CityData): ICityItem => ({
  cityName: serverCity.name,
  countryName: serverCity.country,
  id: serverCity.id,
  lat: serverCity.latitude,
  lon: serverCity.longitude
})


export const adaptWeatherToClientWithCity= ( weather: WeatherType, city: ICityItem): ICityWeather => {
  const {deg, gust, speed} = weather.wind;
  const condition = getSimpleConditionCode()[weather.weather[0].id];
  const direction = getDirectionFromDeg(deg);
  const windSpeed = getWindString(speed, gust)
  return {
    cityCountryName: `${city.cityName}, ${city.countryName}`,
    cityId: city.id,
    condition,
    direction,
    id: weather.id,
    temp: weather.main.temp,
    windSpeed
 }
}
