import { CityData, ICityItem } from "../types/city-types";
import { ICityWeather, WeatherType } from "../types/weather-types";
import { weatherDict } from "../weather-dict";
import { getDirectionFromDeg, getWindString } from "./utils";


export const adaptServerCityToCityItem = (serverCity: CityData): ICityItem => ({
  cityName: serverCity.name,
  countryName: serverCity.country,
  id: serverCity.id,
  lat: serverCity.latitude,
  lon: serverCity.longitude
})

export const adaptWeatherToClientWithCity= ( weather: WeatherType, city: ICityItem): ICityWeather => {
  const {deg, gust, speed} = weather.wind;
  const weatherId = weather.weather[0].id
  const conditions = weatherDict[weatherId] || [];
  const direction = getDirectionFromDeg(deg);
  const windSpeed = getWindString(speed, gust)
  // console.log(weather.weather, 'weather[]')
  return {
    cityId: city.id,
    cityName: city.cityName,
    countryName: city.countryName,
    conditions,
    direction,
    id: weather.id,
    temp: weather.main.temp,
    windSpeed
 }
}
