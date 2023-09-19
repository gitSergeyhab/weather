import { CityData, ICityItem } from "../types/city-types";
import { ICityWeather, IForecast, WeatherType } from "../types/weather-types";
import { weatherDict } from "../weather-dict";
import { getTableDate } from "./date-utils";
import { getDirectionFromDeg, getWindString, round1 } from "./utils";


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
  const coordinates = [city.lat, city.lon];
  return {
    cityId: city.id,
    cityName: city.cityName,
    countryName: city.countryName,
    conditions,
    direction,
    id: weather.id,
    temp: weather.main.temp,
    windSpeed,
    coordinates,
    gust,
    speed,
    dt: weather.dt
 }
}

const getPrecipitation = (snow?: number, rain?: number) => round1((snow || 0) + (rain || 0)) ;

export const adaptForecastToClient = (weather: WeatherType): IForecast => {
  const {deg, gust, speed} = weather.wind;
  const weatherId = weather.weather[0].id
  const conditions = weatherDict[weatherId] || [];
  const direction = getDirectionFromDeg(deg);
  const stringDate = getTableDate(weather.dt);
  const precipitation = getPrecipitation(weather.rain?.["3h"], weather.snow?.["3h"]);
  return {
    conditions,
    direction,
    stringDate,
    gust: round1(gust),
    id: Math.random() * Math.random(),
    speed: round1(speed),
    temp: Math.round(weather.main.temp),
    pressure:  Math.round(0.750064 * weather.main.pressure),
    precipitation
  }
}
