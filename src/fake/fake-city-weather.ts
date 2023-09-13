import { Condition } from "../const";
import { ICityWeather } from "../types/weather-types";

export const fakeCityWeathers: ICityWeather[] = [
  {
    cityId: 11,
    cityName: 'Test cityName 1',
    conditions: [Condition.Clear, Condition.Clouds],
    countryName: 'Test countryName 1',
    direction: 'CC',
    id: 111,
    temp: 11,
    windSpeed: '11',
  },
  {
    cityId: 22,
    cityName: 'Test cityName 222',
    conditions: [Condition.Thunderstorm, Condition.Rain],
    countryName: 'Test countryName 222',
    direction: 'CZ',
    id: 222,
    temp: 22,
    windSpeed: '22',
  },

  {
    cityId: 33,
    cityName: 'Test cityName 333_333',
    conditions: [Condition.Rain],
    countryName: ' 333*333',
    direction: '-',
    id: 333,
    temp: 33,
    windSpeed: '33',
  },
]
